<script setup>
    import { computed } from 'vue';
    import { RouterLink } from 'vue-router'

    const props = defineProps({
        detalle: {
            type: Object
        }
    })

    defineEmits(['eliminar-cliente'])


</script>

<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ detalle.NombreLider }}</p>
        </td>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ detalle.NombreConsultor }}</p>
        </td>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ detalle.fecha }}</p>
        </td>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ detalle.proyecto }}</p>
        </td> 
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ detalle.Actividad }}</p>
        </td> 
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ detalle.fases }}</p>
        </td> 
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ detalle.etapa }}</p>
        </td> 
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ detalle.fases }}</p>
        </td> 
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ detalle.sugar_float }}</p>
        </td> 
<!--         <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{ cliente.Empresa }}</p>
            <p class="text-gray-600">{{cliente.Puesto}}</p>
        </td> -->
<!--         <td class="whitespace-nowrap px-3 py-4 text-sm">
            <button
                class="inline-flex rounded-full px-2 text-xs font-semibold leading-5"
                :class="[estadoCliente ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']"
            >
                {{ estadoCliente ? 'Activo' : 'Inactivo' }}
        </button>

            
        </td> -->
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <!-- boton para editar -->
            <RouterLink 
                :to="{ name: 'editar', params: { id: detalle.id } }"
                class="text-indigo-600 hover:text-indigo-900 mr-5"
                >Editar</RouterLink>

                <button
                    class="text-red-600 hover:text-red-900"
                    @click="$event => $emit('eliminar-cliente', detalle.id)"
                    >
                    Eliminar
                </button>
        </td>
    </tr>
</template>



