import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/ClientesView.vue';
import Actividades from '../views/actividades/ActividadesView.vue'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
      props: { titulo: 'Listado de Clientes'}
    },
    {
      path: '/agregar',
      name: 'agregar',
      props: { titulo: 'Agregar'},
      component: () => import('../views/NuevoClienteView.vue')
    },
    {
      path: '/editar/:id', 
      name: 'editar',
      props: { titulo: 'Editar'},
      component: () => import('../views/EditarClienteView.vue')
    },

    /* rutas para actividades */

    {
      path: '/detalle-actividades',
      name: 'detalle-actividades',
      component: () => import('../views/actividades/ActividadesView.vue'),
      props: { titulo: 'detalle-actividades'}
    },
    /* se tiene que quitar el siguiente */
    {
      path: '/crear-actividad',
      name: 'crear-actividad',
      component: () => import('../views/actividades/CrearActividad.vue'),
      props: { titulo: 'crear-actividad'}
    },
    {
      path: '/editar-activida/:id',
      name: 'editar-actividad',
      component: () => import('../views/actividades/EditarActividad.vue'),
      props: { titulo: 'editar-actividad'}
    },
    
    
  ]
})

export default router
