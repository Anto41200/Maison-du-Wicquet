/**
 * Utilitaire API — Maison du Wicquet
 * Configuration Axios centralisée
 */

import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

// Intercepteur : ajouter le token JWT si présent
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('wicquet_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Intercepteur : gestion des erreurs globales
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('wicquet_token');
      localStorage.removeItem('wicquet_user');
    }
    return Promise.reject(error);
  }
);

// ── Endpoints ──────────────────────────────────────────────

export const ancestorsApi = {
  getAll: (params) => api.get('/ancestors', { params }),
  getBySlug: (slug) => api.get(`/ancestors/${slug}`),
  create: (data) => api.post('/ancestors', data),
  update: (id, data) => api.put(`/ancestors/${id}`, data),
  delete: (id) => api.delete(`/ancestors/${id}`),
};

export const genealogyApi = {
  getTimeline: () => api.get('/genealogy/timeline'),
  getBranches: () => api.get('/genealogy/branches'),
  getTree: () => api.get('/genealogy/tree'),
  addEvent: (data) => api.post('/genealogy/timeline', data),
};

export const heraldryApi = {
  getAll: () => api.get('/heraldry'),
  getBySlug: (slug) => api.get(`/heraldry/${slug}`),
};

export const archivesApi = {
  getAll: (params) => api.get('/archives', { params }),
  getBySlug: (slug) => api.get(`/archives/${slug}`),
  upload: (formData) => api.post('/archives', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
};

export const searchApi = {
  search: (q) => api.get('/search', { params: { q } }),
};

export const adminApi = {
  getStats: () => api.get('/admin/stats'),
  getPlaces: () => api.get('/admin/places'),
};

export const authApi = {
  login: (credentials) => api.post('/auth/login', credentials),
};

export default api;
