<template>
  <header class="bg-slate-800">
    <div class="mx-auto max-w-6xl py-10 flex justify-between items-center">
      <h1 class="text-4xl font-extrabold text-white">
        Administrador de Actividades
      </h1>
      <nav class="space-x-4">
        <router-link
          v-if="!['detalle-actividades', 'crear-actividad', 'editar-actividad'].includes($route.name)"
          to="/Inicio"
          class="text-white hover:text-gray-300 transition duration-300 ease-in-out py-2 px-4 rounded-lg focus:outline-none focus:bg-gray-700 focus:text-gray-200"
          :class="{ 'bg-gray-700': $route.name === 'Inicio' }"
        >Inicio</router-link>
        <router-link
          v-if="!['detalle-actividades', 'crear-actividad', 'editar-actividad'].includes($route.name)"
          to="/lista-proyectos"
          class="text-white hover:text-gray-300 transition duration-300 ease-in-out py-2 px-4 rounded-lg focus:outline-none focus:bg-gray-700 focus:text-gray-200"
          :class="{ 'bg-gray-700': $route.name === 'lista-proyectos' }"
        >Proyecto</router-link>
        <router-link
          v-if="!['detalle-actividades', 'crear-actividad', 'editar-actividad'].includes($route.name)"
          to="/lista-clientes"
          class="text-white hover:text-gray-300 transition duration-300 ease-in-out py-2 px-4 rounded-lg focus:outline-none focus:bg-gray-700 focus:text-gray-200"
          :class="{ 'bg-gray-700': $route.name === 'lista-clientes' }"
        >Cliente</router-link>
        <router-link
          v-if="!['detalle-actividades', 'crear-actividad', 'editar-actividad'].includes($route.name)"
          to="/lista-fases"
          class="text-white hover:text-gray-300 transition duration-300 ease-in-out py-2 px-4 rounded-lg focus:outline-none focus:bg-gray-700 focus:text-gray-200"
          :class="{ 'bg-gray-700': $route.name === 'lista-fases' }"
        >Fases</router-link>
        <router-link
          v-if="!['detalle-actividades', 'crear-actividad', 'editar-actividad'].includes($route.name)"
          to="/lista-etapas"
          class="text-white hover:text-gray-300 transition duration-300 ease-in-out py-2 px-4 rounded-lg focus:outline-none focus:bg-gray-700 focus:text-gray-200"
          :class="{ 'bg-gray-700': $route.name === 'lista-etapas' }"
        >Etapas</router-link>
      </nav>
    </div>
  </header>

  <main class="max-w-7xl mx-auto mt-5 p-10">
    <RouterView />
  </main>
</template>

<script setup>
  import { RouterView } from 'vue-router';
</script>
