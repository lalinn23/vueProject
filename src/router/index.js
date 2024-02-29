import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/ClientesView.vue';
import Actividades from '../views/actividades/ActividadesView.vue'; 
import Clientes from '../views/clientesExternos/externosView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    /* rutas para usuarios */

    {
      path: '/inicio',
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

    /* rutas para clientes (externos)*/
    
    {
      path: '/lista-clientes',
      name: 'lista-clientes',
      props: { titulo: 'lista-clientes'},
      component: () => import('../views/clientesExternos/externosView.vue')
    },
    {
      path: '/crear-clientes',
      name: 'crear-clientes',
      props: { titulo: 'crear-clientes'},
      component: () => import('../views/clientesExternos/externosCrear.vue')
    },
    {
      path: '/editar-externo/:id',
      name: 'editar-externo',
      props: { titulo: 'editar-externo'},
      component: () => import('../views/clientesExternos/externosEditar.vue')
    },

    /* urls para Proyectos  */

    {
      path: '/lista-proyectos',
      name: 'lista-proyectos',
      props: { titulo: 'lista-proyectos'},
      component: () => import('../views/proyectos/proyectoView.vue') 

    },
    {
      path: '/crear-proyectos',
      name: 'crear-proyectos',
      props: { titulo: 'crear-proyectos'},
      component: () => import('../views/proyectos/proyectoCrear.vue') 

    },
    {
      path: '/editar-proyectos/:id',
      name: 'editar-proyectos',
      props: { titulo: 'editar-proyectos'},
      component: () => import('../views/proyectos/proyectoEditar.vue') 

    },

    /*URL PARA ETAPAS */

    {
      path: '/lista-etapas',
      name: 'lista-etapas',
      props: { titulo: 'lista-etapas'},
      component: () => import('../views/etapas/etapaView.vue') 

    },
    {
      path: '/crear-etapas',
      name: 'crear-etapas',
      props: { titulo: 'crear-etapas'},
      component: () => import('../views/etapas/etapaCrear.vue') 

    },
    {
      path: '/editar-etapas/:id',
      name: 'editar-etapas',
      props: { titulo: 'editar-etapas'},
      component: () => import('../views/etapas/etapaEditar.vue') 

    },

    /* url para las fases */
    {
      path: '/lista-fases',
      name: 'lista-fases',
      props: { titulo: 'lista-fases'},
      component: () => import('../views/fases/faseView.vue') 

    },
    {
      path: '/crear-fases',
      name: 'crear-fases',
      props: { titulo: 'crear-fases'},
      component: () => import('../views/fases/faseCrear.vue') 

    },
    {
      path: '/editar-fases/:id',
      name: 'editar-fases',
      props: { titulo: 'editar-fases'},
      component: () => import('../views/fases/faseEditar.vue') 

    },    
    
  ]
})

export default router
