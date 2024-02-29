<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router'

    defineProps({
        fase: {
            typeof: Object
        }
    })

    defineEmits(['eliminar-fase'])
</script>

<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ fase.nombre }}</p>
        </td>

       
       
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <!-- boton para editar -->
            <RouterLink 
                :to="{ name: 'editar-fases', params: { id: fase.id } }"
                class="text-indigo-600 hover:text-indigo-900 mr-5"
                >Editar</RouterLink>

                <button
                    class="text-red-600 hover:text-red-900"
                    @click="$event => $emit('eliminar-fase', fase.id)"
                    >
                    Eliminar
                </button>
        </td>
    </tr>
</template>