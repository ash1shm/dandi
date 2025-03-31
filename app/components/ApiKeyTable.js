import {
  PencilIcon,
  TrashIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
  XMarkIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

export default function ApiKeyTable({ 
  apiKeys, 
  onEdit, 
  onDelete, 
  onRevoke, 
  onCopy, 
  copiedKey 
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-700">
            <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
            <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden sm:table-cell">API Key</th>
            <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
            <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden md:table-cell">Created At</th>
            <th className="px-4 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {apiKeys.map((apiKey) => (
            <tr key={apiKey.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{apiKey.name}</td>
              <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 font-mono hidden sm:table-cell">
                <div className="flex items-center gap-2">
                  <span className="hidden md:inline">{apiKey.key}</span>
                  <span className="md:hidden">{apiKey.key.slice(0, 8)}...</span>
                  <button
                    onClick={() => onCopy(apiKey.key)}
                    className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1"
                  >
                    {copiedKey === apiKey.key ? (
                      <>
                        <ClipboardDocumentCheckIcon className="h-4 w-4" />
                        <span className="hidden sm:inline">Copied!</span>
                      </>
                    ) : (
                      <>
                        <ClipboardDocumentIcon className="h-4 w-4" />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </td>
              <td className="px-4 lg:px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs rounded-full flex items-center gap-1 ${
                  apiKey.status === 'active' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }`}>
                  {apiKey.status === 'active' ? (
                    <CheckIcon className="h-3 w-3" />
                  ) : (
                    <XMarkIcon className="h-3 w-3" />
                  )}
                  {apiKey.status}
                </span>
              </td>
              <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 hidden md:table-cell">{apiKey.createdAt}</td>
              <td className="px-4 lg:px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(apiKey)}
                    className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1"
                  >
                    <PencilIcon className="h-4 w-4" />
                    <span className="hidden sm:inline">Edit</span>
                  </button>
                  {apiKey.status === 'active' && (
                    <button
                      onClick={() => onRevoke(apiKey.id)}
                      className="text-yellow-600 hover:text-yellow-900 dark:text-yellow-400 dark:hover:text-yellow-300 flex items-center gap-1"
                    >
                      <XMarkIcon className="h-4 w-4" />
                      <span className="hidden sm:inline">Revoke</span>
                    </button>
                  )}
                  <button
                    onClick={() => onDelete(apiKey.id)}
                    className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 flex items-center gap-1"
                  >
                    <TrashIcon className="h-4 w-4" />
                    <span className="hidden sm:inline">Delete</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 