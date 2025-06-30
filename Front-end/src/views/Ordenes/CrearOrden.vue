<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { PageName } from '@/components/PageName'
import BaseFormView from '@/components/CreateForm/BaseFormView.vue'
import FormSection from '@/components/CreateForm/FormSection.vue'
import FormField from '@/components/CreateForm/FormField.vue'
import apiService from '@/services/api'

// Título de la página
PageName.value = 'Crear Orden'

// Router para navegación
const router = useRouter()

// Estado reactivo
const loading = ref(false)
const error = ref(null)
const success = ref(false)
const loadingProductos = ref(false)

// Lista de productos disponibles
const productos = ref([])

// Formulario reactivo para orden
const form = reactive({
  estado: 'CREADA',
  productos: [
    {
      producto: '',
      cantidad: 1
    }
  ]
})

// Validaciones
const errors = reactive({
  estado: '',
  productos: []
})

// Estados predefinidos para órdenes
const estados = [
  { value: 'CREADA', label: 'Creada' },
  { value: 'DESPACHADO', label: 'Despachado' },
]

// Íconos para las secciones
const orderIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
             </svg>`
}

const statusIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
             </svg>`
}

const productIcon = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
             </svg>`
}

// Cargar productos disponibles al montar el componente
onMounted(async () => {
  await cargarProductos()
})

// Función para cargar productos desde el API
const cargarProductos = async () => {
  loadingProductos.value = true
  try {
    const response = await apiService.obtenerProductos()
    productos.value = response.data.map(producto => ({
      value: producto.nombre,
      label: `${producto.nombre} (Stock: ${producto.stock})`
    }))
  } catch (err) {
    console.error('Error al cargar productos:', err)
    // Productos de ejemplo si falla la carga
    productos.value = [
      { value: 'Laptop hp', label: 'Laptop hp (Stock: 15)' },
      { value: 'Mouse inalámbrico', label: 'Mouse inalámbrico (Stock: 25)' },
      { value: 'Teclado mecánico', label: 'Teclado mecánico (Stock: 12)' }
    ]
  } finally {
    loadingProductos.value = false
  }
}

// Función para agregar producto
const agregarProducto = () => {
  form.productos.push({
    producto: '',
    cantidad: 1
  })
  // Agregar nuevo error para el producto
  errors.productos.push({ producto: '', cantidad: '' })
}

// Función para eliminar producto
const eliminarProducto = (index) => {
  if (form.productos.length > 1) {
    form.productos.splice(index, 1)
    errors.productos.splice(index, 1)
  }
}

// Función para validar el formulario
const validateForm = () => {
  // Limpiar errores previos
  errors.estado = ''
  errors.productos = []
  
  let isValid = true

  if (!form.estado.trim()) {
    errors.estado = 'Debe seleccionar un estado'
    isValid = false
  }

  // Validar cada producto
  form.productos.forEach((producto, index) => {
    const errorProducto = { producto: '', cantidad: '' }
    
    if (!producto.producto.trim()) {
      errorProducto.producto = 'Debe seleccionar un producto'
      isValid = false
    }

    if (producto.cantidad <= 0) {
      errorProducto.cantidad = 'La cantidad debe ser mayor a 0'
      isValid = false
    }

    errors.productos.push(errorProducto)
  })

  // Verificar productos duplicados
  const productosSeleccionados = form.productos.map(p => p.producto).filter(Boolean)
  const productosDuplicados = productosSeleccionados.filter((producto, index, arr) => 
    arr.indexOf(producto) !== index
  )
  
  if (productosDuplicados.length > 0) {
    form.productos.forEach((producto, index) => {
      if (productosDuplicados.includes(producto.producto)) {
        if (!errors.productos[index]) errors.productos[index] = { producto: '', cantidad: '' }
        errors.productos[index].producto = 'No se pueden repetir productos'
        isValid = false
      }
    })
  }

  return isValid
}

// Función para crear orden
const crearOrden = async () => {
  if (!validateForm()) return

  loading.value = true
  error.value = null
  success.value = false

  try {
    const ordenData = {
      estado: form.estado,
      productos: form.productos.filter(p => p.producto.trim()) // Solo productos válidos
    }

    await apiService.crearOrden(ordenData)
    success.value = true
    
    // Limpiar formulario después del éxito
    setTimeout(() => {
      limpiarFormulario()
      success.value = false
    }, 2000)

  } catch (err) {
    error.value = 'Error al crear la orden. Por favor, intenta nuevamente.'
    console.error(err)
  } finally {
    loading.value = false
  }
}

// Función para volver a la lista
const volverALista = () => {
  router.push({ name: 'ordenes' })
}

// Función para limpiar formulario
const limpiarFormulario = () => {
  form.estado = 'CREADA'
  form.productos = [{
    producto: '',
    cantidad: 1
  }]
  errors.estado = ''
  errors.productos = []
  error.value = null
  success.value = false
}
</script>

<template>
  <BaseFormView
    title="Crear Nueva Orden"
    subtitle="Registra una nueva orden con múltiples productos"
    :loading="loading"
    :header-icon="orderIcon"
    :success="success"
    :error="error"
    :formData="form" 
    success-message="¡Orden creada exitosamente!"
    loading-text="Creando orden..."
    submit-button-text="Crear Orden"
    @back="volverALista"
    @submit="crearOrden"
    @clear="limpiarFormulario"
  >
    
    <!-- Estado de la Orden -->
    <FormSection title="Estado de la Orden" :icon="statusIcon" icon-color="green">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          id="estado"
          label="Estado Inicial"
          type="select"
          v-model="form.estado"
          :options="estados"
          :required="true"
          :error="errors.estado"
        />

        <!-- Campo informativo -->
        <div class="flex items-center p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div class="flex-shrink-0">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div class="ml-3">
            <p class="text-sm text-blue-700">
              La orden se creará con estado "CREADA" por defecto y podrá ser modificada posteriormente.
            </p>
          </div>
        </div>
      </div>
    </FormSection>

    <!-- Productos de la Orden -->
    <FormSection title="Productos de la Orden" :icon="productIcon" icon-color="purple" :show-border="false">
      <div class="space-y-4">
        <div v-for="(producto, index) in form.productos" :key="index" 
             class="p-4 border border-gray-200 rounded-lg bg-gray-50">
          
          <!-- Header del producto -->
          <div class="flex justify-between items-center mb-4">
            <h4 class="text-sm font-medium text-gray-700">
              Producto {{ index + 1 }}
            </h4>
            <button
              v-if="form.productos.length > 1"
              @click="eliminarProducto(index)"
              type="button"
              class="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-100 transition-colors"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Campos del producto -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              :id="`producto_${index}`"
              label="Producto"
              type="select"
              v-model="producto.producto"
              :options="productos"
              :loading="loadingProductos"
              placeholder="Selecciona un producto"
              :required="true"
              :error="errors.productos[index]?.producto"
            />

            <FormField
              :id="`cantidad_${index}`"
              label="Cantidad"
              type="number"
              v-model.number="producto.cantidad"
              placeholder="1"
              :min="1"
              :required="true"
              :error="errors.productos[index]?.cantidad"
            />
          </div>
        </div>

        <!-- Botón para agregar producto -->
        <div class="flex justify-center">
          <button
            @click="agregarProducto"
            type="button"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
            </svg>
            Agregar Producto
          </button>
        </div>
      </div>
    </FormSection>

  </BaseFormView>
</template>

<style scoped>
.loading-select {
  opacity: 0.6;
  pointer-events: none;
}

/* Animaciones suaves para agregar/quitar productos */
.v-enter-active, .v-leave-active {
  transition: all 0.3s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>