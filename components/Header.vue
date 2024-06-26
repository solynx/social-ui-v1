<template #header>
  <div class="w-full mx-auto px-4 shadow-md">
    <div class="items-center justify-between gap-x-4 py-4 border-b sm:flex">
      <div class="max-w-lg">
        <NuxtLink to="/" class="text-gray-800 text-2xl font-bold">
          <img src="/assets/img/logo.jpg" class="w-10 h-10 rounded" />
        </NuxtLink>
      </div>
      <div class="mt-6 sm:mt-0">
        <div class="relative">
          <svg
            class="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            class="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 rounded-lg sm:max-w-xs"
          />
        </div>
      </div>
      <div>
        <ul class="flex gap-x-5 align-center">
          <li class="shadow-md p-3 rounded">
            <NIcon color="black" size="24">
              <ChatbubbleEllipses />
            </NIcon>
          </li>
          <li class="shadow-md p-3 rounded">
            <NIcon color="black" size="24">
              <Notifications />
            </NIcon>
          </li>
          <li class="shadow-md p-3 rounded">
            <NIcon color="black" size="24">
              <Settings />
            </NIcon>
          </li>
          <ClientOnly>
            <WalletMultiButton />
          </ClientOnly>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { WalletMultiButton } from "solana-wallets-vue";
import { NIcon } from "naive-ui";
import { ChatbubbleEllipses, Settings, Notifications } from "@vicons/ionicons5";
</script>
