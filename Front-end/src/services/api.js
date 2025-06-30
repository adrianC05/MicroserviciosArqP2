// src/services/api.js
import axios from 'axios';

// Crear instancia sin baseURL para que proxy en vue.config.js funcione
const api = axios.create({ baseURL: '' });

export default {
  // Productos
  obtenerProductos: () => api.get('/inventario'),
  eliminarProducto: id => api.delete(`/inventario/${id}`),
  crearProducto: (producto) => api.post('/inventario', producto),
  obtenerProducto: id => api.get(`/inventario/${id}`),
  actualizarProducto: (id, producto) => api.put(`/inventario/${id}`, producto),

  // Ordenes
  obtenerOrdenes: () => api.get('/ordenes'),
  eliminarOrden: id => api.delete(`/ordenes/${id}`),
  crearOrden: (orden) => api.post('/ordenes', orden),
  obtenerOrden: id => api.get(`/ordenes/${id}`),
  actualizarOrden: (id, orden) => api.put(`/ordenes/${id}`, orden),
};