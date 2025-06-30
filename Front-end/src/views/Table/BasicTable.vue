<script setup>
/** All Library Import */
import { PageName } from '@/components/PageName';
import products from '@/data/productos';

/** All Instance */
PageName.value = 'Basic Table';

/** All Variables */
</script>
<template>
    <!-- Basic Table One -->
    <div class="bg-white rounded-lg p-6 shadow-md mb-10">
        <h2 class="taxt-md font-bold mb-5">Basic Table One</h2>
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
                    <tr v-for="(product, index) in products.productDataList" :key="product.id" v-show="index < 5">
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
    </div>

    <!-- Basic Table Two -->
    <div class="bg-white rounded-lg p-6 shadow-md mb-10">
        <h2 class="taxt-md font-bold mb-5">Basic Table Two</h2>
        <div class="overflow-x-auto md:overflow-hidden">
            <table class="w-full">
                <thead>
                    <tr>
                        <th class="border border-gray-200 py-2.5 px-4 md:px-2.5 text-base font-semibold font-outfit text-left">#</th>
                        <th class="border border-gray-200 py-2.5 px-4 md:px-2.5 text-base font-semibold font-outfit text-left">Created At</th>
                        <th class="border border-gray-200 py-2.5 px-4 md:px-2.5 text-base font-semibold font-outfit text-left">Product Name</th>
                        <th class="border border-gray-200 py-2.5 px-4 md:px-2.5 text-base font-semibold font-outfit text-left">Category</th>
                        <th class="border border-gray-200 py-2.5 px-4 md:px-2.5 text-base font-semibold font-outfit text-left">Stock</th>
                        <th class="border border-gray-200 py-2.5 px-4 md:px-2.5 text-base font-semibold font-outfit text-left">Status</th>
                        <th class="border border-gray-200 py-2.5 px-4 md:px-2.5 text-base font-semibold font-outfit text-left">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(product, index) in products.productDataList" :key="product.id" v-show="index < 5">
                        <td class="border border-gray-200 py-3 px-4 md:px-2.5 text-sm font-medium">{{ product.id }}</td>
                        <td class="border border-gray-200 p-3 text-sm font-medium text-gray-700">{{ product.time }}</td>
                        <td class="border border-gray-200 p-3 text-sm font-medium text-gray-700">{{ product.name }}</td>
                        <td class="border border-gray-200 p-3 text-sm font-medium text-gray-700">{{ product.category }}</td>
                        <td class="border border-gray-200 p-3 text-sm font-medium text-gray-700"><span class="py-1 px-2 rounded shadow text-white font-bold text-xs" :class="product.stock > 10 ? 'bg-green-500' : 'bg-rose-500'">{{ product.stock }}</span></td>
                        <td class="border border-gray-200 p-3 text-sm font-medium text-gray-700">
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" :checked="product.status">
                                <div class="w-9 h-5 bg-gray-300 peer-focus:ring-2 peer-focus:ring-mainColor rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-mainColor"></div>
                            </label>                                  
                        </td>
                        <td class="border border-gray-200 p-3 text-sm font-medium text-gray-700 flex flex-col lg:flex-row gap-1">
                            <router-link :to="{ name: 'formElement' }" class="border border-mainColor rounded-md text-sm text-mainColor font-medium py-1 px-2 transition duration-300 hover:bg-mainColor hover:text-white flex items-center gap-1"><font-awesome-icon :icon="['fas', 'pen-to-square']" /> Edit</router-link>                             
                            <a href="" class="border border-rose-600 rounded-md text-sm text-rose-600 font-medium py-1 px-2 transition duration-300 hover:bg-roseborder-rose-600 hover:text-white flex items-center gap-1"><font-awesome-icon :icon="['fas', 'trash']" /> Remove</a>   
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>