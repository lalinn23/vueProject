<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router'

    defineProps({
        externo: {
            typeof: Object
        }
    })

    defineEmits(['eliminar-externo'])
</script>

<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ externo.nombre }}</p>
        </td>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ externo.date}}</p>
        </td>
       
       
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <!-- boton para editar -->
            <RouterLink 
                :to="{ name: 'editar-externo', params: { id: externo.id } }"
                class="text-indigo-600 hover:text-indigo-900 mr-5"
                >Editar</RouterLink>

                <button
                    class="text-red-600 hover:text-red-900"
                    @click="$event => $emit('eliminar-externo', externo.id)"
                    >
                    Eliminar
                </button>
        </td>
    </tr>
</template>