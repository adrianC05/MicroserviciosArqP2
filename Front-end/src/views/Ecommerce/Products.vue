<script setup>
/** All Library Import */
import { ref } from 'vue';
import { PageName } from '@/components/PageName';
import products from '@/data/productos';

/** All Instance */
PageName.value = 'Product List';

/** All Variables */
const page = ref(1);
const lastPage = Math.ceil(products.productDataList.length / 10);
</script>
<template>
    <!-- Product List -->
    <div class="bg-white rounded-lg p-6 shadow-md mb-10">
        <!-- Table Head -->
        <div class="flex justify-between items-center gap-2 mb-5 pb-3 border-b border-gray-200">
            <h2 class="taxt-md font-bold">Products List</h2>
            <router-link :to="{ name: 'formElement' }" class="bg-mainColor text-white py-1 px-4 text-lg font-semibold font-outfit rounded-md">Add New</router-link>
        </div>

        <!-- Statistics & Search -->
        <div class="flex justify-between items-center gap-5 mb-6">
            <h2 class="taxt-md font-medium">Total Count: <span class="text-mainColor font-bold">{{ products.productDataList.length }}</span></h2>

            <input type="search" placeholder="Search..." class="py-2 px-3 border border-gray-200 rounded-md focus:outline-mainColor max-w-40 md:min-w-80">
        </div>

        <!-- Table -->
        <div class="overflow-x-auto md:overflow-hidden">
            <table class="w-full">
                <thead>
                    <tr>
                        <th class="border border-gray-200 py-2.5 px-4 md:px-2.5 text-base font-semibold font-outfit text-left">#</th>
                        <th class="border border-gray-200 py-2.5 px-4 md:px-2.5 text-base font-semibold font-outfit text-left">Created At</th>
                        <th class="border border-gray-200 py-2.5 px-4 md:px-2.5 text-base font-semibold font-outfit text-left">Product Name</th>
                        <th class="border border-gray-200 py-2.5 px-4 md:px-2.5 text-base font-semibold font-outfit text-left">Image</th>
                        <th class="border border-gray-200 py-2.5 px-4 md:px-2.5 text-base font-semibold font-outfit text-left">Category</th>
                        <th class="border border-gray-200 py-2.5 px-4 md:px-2.5 text-base font-semibold font-outfit text-left">Status</th>
                        <th class="border border-gray-200 py-2.5 px-4 md:px-2.5 text-base font-semibold font-outfit text-left">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(product, index) in products.productDataList" :key="product.id" v-show="index < 10">
                        <td class="border border-gray-200 py-3 px-4 md:px-2.5 text-sm font-medium">{{ product.id }}</td>
                        <td class="border border-gray-200 p-3 text-sm font-medium text-gray-700">{{ product.time }}</td>
                        <td class="border border-gray-200 p-3 text-sm font-medium text-gray-700">{{ product.name }}</td>
                        <td class="border border-gray-200 p-3 text-sm font-medium text-gray-700">
                            <img :src="product.image" alt="" class="max-w-10">
                        </td>
                        <td class="border border-gray-200 p-3 text-sm font-medium text-gray-700">{{ product.category }}</td>
                        <td class="border border-gray-200 p-3 text-sm font-medium text-gray-700">
                           <span class="py-1 px-2 rounded shadow-xs font-bold text-xs" :class="product.status == 1 ? 'bg-green-100 text-green-500' : 'bg-rose-100 text-rose-500'">{{ product.status == 1 ? 'Active' : 'Inactive' }}</span>                                 
                        </td>
                        <td class="border border-gray-200 p-3 text-sm font-medium text-gray-700 flex flex-col items-start lg:items-stretch lg:flex-row gap-1">
                            <router-link :to="{ name: 'formElement' }" class="bg-mainColor rounded-md text-sm text-white font-medium p-2 transition duration-300 hover:opacity-70 hover:text-white flex items-center gap-1"><font-awesome-icon :icon="['fas', 'pen-to-square']" /></router-link >                             
                            <a href="" class="bg-rose-600 rounded-md text-sm text-white font-medium p-2 transition duration-300 hover:opacity-70 hover:text-white flex items-center gap-1"><font-awesome-icon :icon="['fas', 'trash']" /></a>                          
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Pagination -->
        <div class="mt-8 flex justify-end">
            <v-pagination
                v-model="page"
                :pages="lastPage"
                :range-size="1"
                active-color="#DCEDFF"
                @update:modelValue="products.productDataList"
            />
        </div>
    </div>
</template>