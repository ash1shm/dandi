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
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <KeyIcon className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            API Keys Dashboard
          </h1>
        </div>
        <button
          onClick={handleSignOut}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <ArrowRightOnRectangleIcon className="h-4 w-4" />
          Sign Out
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search keys..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white dark:bg-gray-900 dark:border-gray-700"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-900 dark:border-gray-700"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="revoked">Revoked</option>
            </select>
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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

      {/* Modals */}
      {showCreateModal && (
        <Modal
          title="Create New API Key"
          onClose={() => setShowCreateModal(false)}
          onConfirm={handleCreateKey}
          confirmText="Create"
        >
          <input
            type="text"
            placeholder="Enter key name"
            value={newKeyName}
            onChange={(e) => setNewKeyName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
          />
        </Modal>
      )}

      {showEditModal && (
        <Modal
          title="Edit API Key"
          onClose={() => {
            setShowEditModal(false);
            setEditingKey(null);
          }}
          onConfirm={handleUpdateKey}
          confirmText="Update"
        >
          <input
            type="text"
            placeholder="Enter key name"
            value={editingKey?.name || ''}
            onChange={(e) => setEditingKey({ ...editingKey, name: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg dark:bg-gray-900 dark:border-gray-700"
          />
        </Modal>
      )}
    </div>
  );
} 