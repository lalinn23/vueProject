<script setup>
    import { computed } from 'vue';
    import { RouterLink } from 'vue-router'

    const props = defineProps({
        cliente: {
            type: Object
        }
    })

    defineEmits(['eliminar-cliente'])

    /* para concatenar */

    const nombreCliente = computed(() => {
        return props.cliente.Nombre + ' ' + props.cliente.Apellido
    })

    /* para cambiar el estado de 1 a activo */

    const estadoCliente = computed (() => {
        return props.cliente.estado
    })


</script>

<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ nombreCliente }}</p>
            <p class="text-gray-500">{{ cliente.Email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{ cliente.Empresa }}</p>
            <p class="text-gray-600">{{cliente.Puesto}}</p>
        </td>

        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <!-- boton para editar -->
            <RouterLink 
                :to="{ name: 'editar', params: { id: cliente.id } }"
                class="text-indigo-600 hover:text-indigo-900 mr-5"
                >Editar</RouterLink>

                <button
                    class="text-red-600 hover:text-red-900"
                    @click="$event => $emit('eliminar-cliente', cliente.id)"
                    >
                    Eliminar
                </button>
        </td>
    </tr>
</template>



