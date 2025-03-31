import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline';

export default function Modal({ 
  isOpen, 
  onClose, 
  title, 
  icon: Icon, 
  children, 
  onConfirm, 
  confirmText = 'Confirm',
  showCancel = true
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            {Icon && <Icon className="h-6 w-6 text-blue-600" />}
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        {children}
        <div className="flex justify-end gap-4 mt-4">
          {showCancel && (
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white flex items-center gap-1"
            >
              <XMarkIcon className="h-4 w-4" />
              Cancel
            </button>
          )}
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-1"
          >
            <CheckIcon className="h-4 w-4" />
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
} 