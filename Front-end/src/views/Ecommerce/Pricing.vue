<script setup>
/** All Library Import */
import { ref } from 'vue';
import { PageName } from '@/components/PageName';
import products from '@/data/productos';

/** All Instance */
PageName.value = 'Pricing';
</script>
<template>
    <!-- Pricing One -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
    
    <!-- Basic Plan -->
    <div class="bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col">
        <div class="mb-6 text-center">
        <h2 class="text-4xl font-extrabold text-gray-900 mb-3">Basic</h2>
        <div class="inline-flex items-baseline justify-center gap-1">
            <span class="text-lg align-top text-mainColor font-semibold">$</span>
            <span class="text-5xl font-extrabold text-mainColor">30</span>
            <span class="text-sm text-gray-500 font-medium self-end pb-1">/month</span>
        </div>
        </div>
        <ul class="space-y-4 flex-grow">
        <li class="flex items-center gap-3 text-gray-800 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-5 h-5" />
            Unlimited Projects
        </li>
        <li class="flex items-center gap-3 text-gray-800 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-5 h-5" />
            24/7 Priority Support
        </li>
        <li class="flex items-center gap-3 text-gray-400 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'xmark']" class="text-red-500 w-5 h-5" />
            Custom Domain
        </li>
        <li class="flex items-center gap-3 text-gray-400 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'xmark']" class="text-red-500 w-5 h-5" />
            Advanced Analytics
        </li>
        <li class="flex items-center gap-3 text-gray-800 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-5 h-5" />
            Team Collaboration
        </li>
        <li class="flex items-center gap-3 text-gray-400 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'xmark']" class="text-red-500 w-5 h-5" />
            Monthly Backups
        </li>
        </ul>
        <button class="mt-8 w-full bg-mainColor hover:bg-mainColor-dark text-white font-semibold py-3 rounded-lg transition-colors duration-300">
        Get Started
        </button>
    </div>

    <!-- Standard Plan -->
    <div class="bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col">
        <div class="mb-6 text-center">
        <h2 class="text-4xl font-extrabold text-gray-900 mb-3">Standard</h2>
        <div class="inline-flex items-baseline justify-center gap-1">
            <span class="text-lg align-top text-mainColor font-semibold">$</span>
            <span class="text-5xl font-extrabold text-mainColor">60</span>
            <span class="text-sm text-gray-500 font-medium self-end pb-1">/month</span>
        </div>
        </div>
        <ul class="space-y-4 flex-grow">
        <li class="flex items-center gap-3 text-gray-800 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-5 h-5" />
            Unlimited Projects
        </li>
        <li class="flex items-center gap-3 text-gray-800 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-5 h-5" />
            24/7 Priority Support
        </li>
        <li class="flex items-center gap-3 text-gray-800 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-5 h-5" />
            Custom Domain
        </li>
        <li class="flex items-center gap-3 text-gray-400 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'xmark']" class="text-red-500 w-5 h-5" />
            Advanced Analytics
        </li>
        <li class="flex items-center gap-3 text-gray-800 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-5 h-5" />
            Team Collaboration
        </li>
        <li class="flex items-center gap-3 text-gray-400 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'xmark']" class="text-red-500 w-5 h-5" />
            Monthly Backups
        </li>
        </ul>
        <button class="mt-8 w-full bg-mainColor hover:bg-mainColor-dark text-white font-semibold py-3 rounded-lg transition-colors duration-300">
        Get Started
        </button>
    </div>

    <!-- Premium Plan -->
    <div class="bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col">
        <div class="mb-6 text-center">
        <h2 class="text-4xl font-extrabold text-gray-900 mb-3">Premium</h2>
        <div class="inline-flex items-baseline justify-center gap-1">
            <span class="text-lg align-top text-mainColor font-semibold">$</span>
            <span class="text-5xl font-extrabold text-mainColor">90</span>
            <span class="text-sm text-gray-500 font-medium self-end pb-1">/month</span>
        </div>
        </div>
        <ul class="space-y-4 flex-grow">
        <li class="flex items-center gap-3 text-gray-800 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-5 h-5" />
            Unlimited Projects
        </li>
        <li class="flex items-center gap-3 text-gray-800 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-5 h-5" />
            24/7 Priority Support
        </li>
        <li class="flex items-center gap-3 text-gray-800 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-5 h-5" />
            Custom Domain
        </li>
        <li class="flex items-center gap-3 text-gray-800 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-5 h-5" />
            Advanced Analytics
        </li>
        <li class="flex items-center gap-3 text-gray-800 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-5 h-5" />
            Team Collaboration
        </li>
        <li class="flex items-center gap-3 text-gray-400 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'xmark']" class="text-red-500 w-5 h-5" />
            Monthly Backups
        </li>
        </ul>
        <button class="mt-8 w-full bg-mainColor hover:bg-mainColor-dark text-white font-semibold py-3 rounded-lg transition-colors duration-300">
        Get Started
        </button>
    </div>

    <!-- Enterprise Plan -->
    <div class="bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col">
        <div class="mb-6 text-center">
        <h2 class="text-4xl font-extrabold text-gray-900 mb-3">Enterprise</h2>
        <div class="inline-flex items-baseline justify-center gap-1">
            <span class="text-lg align-top text-mainColor font-semibold">$</span>
            <span class="text-5xl font-extrabold text-mainColor">150</span>
            <span class="text-sm text-gray-500 font-medium self-end pb-1">/month</span>
        </div>
        </div>
        <ul class="space-y-4 flex-grow">
        <li class="flex items-center gap-3 text-gray-800 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-5 h-5" />
            Unlimited Projects
        </li>
        <li class="flex items-center gap-3 text-gray-800 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-5 h-5" />
            24/7 Priority Support
        </li>
        <li class="flex items-center gap-3 text-gray-800 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-5 h-5" />
            Custom Domain
        </li>
        <li class="flex items-center gap-3 text-gray-800 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-5 h-5" />
            Advanced Analytics
        </li>
        <li class="flex items-center gap-3 text-gray-800 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-5 h-5" />
            Team Collaboration
        </li>
        <li class="flex items-center gap-3 text-gray-800 text-base md:text-lg">
            <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-5 h-5" />
            Monthly Backups
        </li>
        </ul>
        <button class="mt-8 w-full bg-mainColor hover:bg-mainColor-dark text-white font-semibold py-3 rounded-lg transition-colors duration-300">
        Get Started
        </button>
    </div>

    </div>

    <!-- Pricing Two -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 mt-20">

        <!-- Basic Plan -->
        <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-gray-900">Basic</h2>
            <div class="inline-flex items-baseline gap-1">
                <span class="text-base align-top text-mainColor font-semibold">$</span>
                <span class="text-3xl font-extrabold text-mainColor">30</span>
                <span class="text-sm text-gray-500 font-medium self-end pb-1">/month</span>
            </div>
            </div>
            <ul class="space-y-3 flex-grow text-gray-800 text-base md:text-lg">
            <li class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-4 h-4" />
                Unlimited Projects
            </li>
            <li class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-4 h-4" />
                24/7 Priority Support
            </li>
            <li class="flex items-center gap-3 text-gray-400">
                <font-awesome-icon :icon="['fas', 'xmark']" class="text-red-500 w-4 h-4" />
                Custom Domain
            </li>
            <li class="flex items-center gap-3 text-gray-400">
                <font-awesome-icon :icon="['fas', 'xmark']" class="text-red-500 w-4 h-4" />
                Advanced Analytics
            </li>
            <li class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-4 h-4" />
                Team Collaboration
            </li>
            <li class="flex items-center gap-3 text-gray-400">
                <font-awesome-icon :icon="['fas', 'xmark']" class="text-red-500 w-4 h-4" />
                Monthly Backups
            </li>
            </ul>
            <button class="mt-6 px-5 py-2 bg-mainColor hover:bg-mainColor-dark text-white font-semibold rounded-lg transition-colors duration-300 w-max">
            Get Started
            </button>
        </div>

        <!-- Standard Plan -->
        <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-gray-900">Standard</h2>
            <div class="inline-flex items-baseline gap-1">
                <span class="text-base align-top text-mainColor font-semibold">$</span>
                <span class="text-3xl font-extrabold text-mainColor">60</span>
                <span class="text-sm text-gray-500 font-medium self-end pb-1">/month</span>
            </div>
            </div>
            <ul class="space-y-3 flex-grow text-gray-800 text-base md:text-lg">
            <li class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-4 h-4" />
                Unlimited Projects
            </li>
            <li class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-4 h-4" />
                24/7 Priority Support
            </li>
            <li class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-4 h-4" />
                Custom Domain
            </li>
            <li class="flex items-center gap-3 text-gray-400">
                <font-awesome-icon :icon="['fas', 'xmark']" class="text-red-500 w-4 h-4" />
                Advanced Analytics
            </li>
            <li class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-4 h-4" />
                Team Collaboration
            </li>
            <li class="flex items-center gap-3 text-gray-400">
                <font-awesome-icon :icon="['fas', 'xmark']" class="text-red-500 w-4 h-4" />
                Monthly Backups
            </li>
            </ul>
            <button class="mt-6 px-5 py-2 bg-mainColor hover:bg-mainColor-dark text-white font-semibold rounded-lg transition-colors duration-300 w-max">
            Get Started
            </button>
        </div>

        <!-- Premium Plan -->
        <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-gray-900">Premium</h2>
            <div class="inline-flex items-baseline gap-1">
                <span class="text-base align-top text-mainColor font-semibold">$</span>
                <span class="text-3xl font-extrabold text-mainColor">90</span>
                <span class="text-sm text-gray-500 font-medium self-end pb-1">/month</span>
            </div>
            </div>
            <ul class="space-y-3 flex-grow text-gray-800 text-base md:text-lg">
            <li class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-4 h-4" />
                Unlimited Projects
            </li>
            <li class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-4 h-4" />
                24/7 Priority Support
            </li>
            <li class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-4 h-4" />
                Custom Domain
            </li>
            <li class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-4 h-4" />
                Advanced Analytics
            </li>
            <li class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-4 h-4" />
                Team Collaboration
            </li>
            <li class="flex items-center gap-3 text-gray-400">
                <font-awesome-icon :icon="['fas', 'xmark']" class="text-red-500 w-4 h-4" />
                Monthly Backups
            </li>
            </ul>
            <button class="mt-6 px-5 py-2 bg-mainColor hover:bg-mainColor-dark text-white font-semibold rounded-lg transition-colors duration-300 w-max">
            Get Started
            </button>
        </div>

        <!-- Enterprise Plan -->
        <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-gray-900">Enterprise</h2>
            <div class="inline-flex items-baseline gap-1">
                <span class="text-base align-top text-mainColor font-semibold">$</span>
                <span class="text-3xl font-extrabold text-mainColor">150</span>
                <span class="text-sm text-gray-500 font-medium self-end pb-1">/month</span>
            </div>
            </div>
            <ul class="space-y-3 flex-grow text-gray-800 text-base md:text-lg">
            <li class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-4 h-4" />
                Unlimited Projects
            </li>
            <li class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-4 h-4" />
                24/7 Priority Support
            </li>
            <li class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-4 h-4" />
                Custom Domain
            </li>
            <li class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-4 h-4" />
                Advanced Analytics
            </li>
            <li class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-4 h-4" />
                Team Collaboration
            </li>
            <li class="flex items-center gap-3">
                <font-awesome-icon :icon="['fas', 'check']" class="text-green-500 w-4 h-4" />
                Monthly Backups
            </li>
            </ul>
            <button class="mt-6 px-5 py-2 bg-mainColor hover:bg-mainColor-dark text-white font-semibold rounded-lg transition-colors duration-300 w-max">
            Get Started
            </button>
        </div>

    </div>
</template>