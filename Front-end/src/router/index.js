import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Default Routes
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: Dashboard,
        },
        {
          path: '/form-elements',
          name: 'formElement',
          component: () => import('../views/Forms/FormElements.vue'),
        },
        {
          path: '/form-group',
          name: 'formGroup',
          component: () => import('../views/Forms/FormGroup.vue'),
        },
        {
          path: '/basic-table',
          name: 'basicTable',
          component: () => import('../views/Table/BasicTable.vue'),
        },
        {
          path: '/paginate-table',
          name: 'paginateTable',
          component: () => import('../views/Table/PaginateTable.vue'),
        },
        {
          path: '/products',
          name: 'products',
          component: () => import('../views/Ecommerce/Products.vue'),
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: () => import('../views/Ecommerce/Pricing.vue'),
        },
        {
          path: '/update-profile',
          name: 'updateProfile',
          component: () => import('../views/Profile/UpdateProfile.vue'),
        },
        {
          path: '/update-password',
          name: 'updatePassword',
          component: () => import('../views/Profile/UpdatePassword.vue'),
        },

        // Ordenes
        {
          path: '/listar-ordenes',
          name: 'ordenes',
          component: () => import('../views/Ordenes/ListarOrdenes.vue'),
        },
        {
          path: '/ordenes/crear',
          name: 'crearOrden',
          component: () => import('../views/Ordenes/CrearOrden.vue'),
        },

        // Productos
        {
          path: '/lista-productos',
          name: 'productos',
          component: () => import('../views/Productos/ListarPruductos.vue'),
        },
        {
          path: '/productos/crear',
          name: 'crearProducto',
          component: () => import('../views/Productos/CrearProducto.vue'),
        },
        
      ]
    },

    // Other Routes
    {
      path: '/error/403',
      name: '403Error',
      component: () => import('../views/Errors/403.vue'),
    },
    {
      path: '/error/404',
      name: '404Error',
      component: () => import('../views/Errors/404.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Auth/Registration.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Auth/Login.vue'),
    },
  ],
})

export default router
