<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router'

    defineProps({
        etapa: {
            typeof: Object
        }
    })

    defineEmits(['eliminar-etapa'])
</script>

<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ etapa.nombre }}</p>
        </td>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ etapa.date}}</p>
        </td>
       
       
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <!-- boton para editar -->
            <RouterLink 
                :to="{ name: 'editar-etapas', params: { id: etapa.id } }"
                class="text-indigo-600 hover:text-indigo-900 mr-5"
                >Editar</RouterLink>

                <button
                    class="text-red-600 hover:text-red-900"
                    @click="$event => $emit('eliminar-etapa', etapa.id)"
                    >
                    Eliminar
                </button>
        </td>
    </tr>
</template>