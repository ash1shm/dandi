'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';
import { apiKeyService } from '../services/apiKeyService';
import ApiKeyTable from '../components/ApiKeyTable';
import Modal from '../components/Modal';
import {
  PlusIcon,
  PencilIcon,
  KeyIcon,
  MagnifyingGlassIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const [apiKeys, setApiKeys] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');
  const [editingKey, setEditingKey] = useState(null);
  const [copiedKey, setCopiedKey] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    fetchApiKeys();
  }, [user, router]);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const fetchApiKeys = async () => {
    try {
      setLoading(true);
      const data = await apiKeyService.fetchApiKeys();
      setApiKeys(data);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching API keys:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateKey = async () => {
    try {
      const data = await apiKeyService.createApiKey(newKeyName);
      setApiKeys([data, ...apiKeys]);
      setShowCreateModal(false);
      setNewKeyName('');
    } catch (error) {
      setError(error.message);
      console.error('Error creating API key:', error);
    }
  };

  const handleEditKey = (key) => {
    setEditingKey(key);
    setShowEditModal(true);
  };

  const handleUpdateKey = async () => {
    try {
      await apiKeyService.updateApiKey(editingKey.id, editingKey.name);
      setApiKeys(apiKeys.map(key => 
        key.id === editingKey.id ? { ...key, name: editingKey.name } : key
      ));
      setShowEditModal(false);
      setEditingKey(null);
    } catch (error) {
      setError(error.message);
      console.error('Error updating API key:', error);
    }
  };

  const handleDeleteKey = async (id) => {
    if (window.confirm('Are you sure you want to delete this API key?')) {
      try {
        await apiKeyService.deleteApiKey(id);
        setApiKeys(apiKeys.filter(key => key.id !== id));
      } catch (error) {
        setError(error.message);
        console.error('Error deleting API key:', error);
      }
    }
  };

  const handleCopyKey = (key) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleRevokeKey = async (id) => {
    try {
      await apiKeyService.revokeApiKey(id);
      setApiKeys(apiKeys.map(key => 
        key.id === id ? { ...key, status: 'revoked' } : key
      ));
    } catch (error) {
      setError(error.message);
      console.error('Error revoking API key:', error);
    }
  };

  const filteredKeys = apiKeys.filter(key => {
    const matchesSearch = key.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         key.key.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || key.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-red-600 dark:text-red-400">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <KeyIcon className="h-6 w-6 lg:h-8 lg:w-8 text-blue-600" />
          API Keys Dashboard
        </h1>
        <button
          onClick={handleSignOut}
          className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white flex items-center gap-1"
        >
          <ArrowRightOnRectangleIcon className="h-4 w-4" />
          Sign Out
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="p-4 lg:p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search keys..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
              />
            </div>
            <div>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full sm:w-auto px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 appearance-none bg-white dark:bg-gray-800"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="revoked">Revoked</option>
              </select>
            </div>
            <button
              onClick={() => setShowCreateModal(true)}
              className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <PlusIcon className="h-5 w-5" />
              Create New API Key
            </button>
          </div>
        </div>

        <ApiKeyTable
          apiKeys={filteredKeys}
          onEdit={handleEditKey}
          onDelete={handleDeleteKey}
          onRevoke={handleRevokeKey}
          onCopy={handleCopyKey}
          copiedKey={copiedKey}
        />
      </div>

      <Modal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        title="Create New API Key"
        icon={PlusIcon}
        onConfirm={handleCreateKey}
        confirmText="Create"
      >
        <input
          type="text"
          value={newKeyName}
          onChange={(e) => setNewKeyName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && newKeyName.trim()) {
              handleCreateKey();
            }
          }}
          placeholder="Enter API Key Name"
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
        />
      </Modal>

      <Modal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        title="Edit API Key"
        icon={PencilIcon}
        onConfirm={handleUpdateKey}
        confirmText="Update"
      >
        <input
          type="text"
          value={editingKey?.name || ''}
          onChange={(e) => setEditingKey({ ...editingKey, name: e.target.value })}
          placeholder="Enter API Key Name"
          className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
        />
      </Modal>
    </div>
  );
} 