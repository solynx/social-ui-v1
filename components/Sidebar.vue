<template #sidebar>
  <div class="flex">
    <div class="flex h-screen flex-1 flex-col justify-between bg-white">
      <div class="px-4">
        <ul class="mt-6 space-y-1 shadow-md rounded">
          <li>
            <a
              href="#"
              class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 flex items-center hover:bg-gray-100 hover:text-gray-700 gap-3"
            >
              <n-icon size="24">
                <Grid />
              </n-icon>
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 flex items-center hover:bg-gray-100 hover:text-gray-700 gap-3"
            >
              <NIcon size="24">
                <People />
              </NIcon>
              Friends
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 flex items-center hover:bg-gray-100 hover:text-gray-700 gap-3"
            >
              <NIcon size="24">
                <Images />
              </NIcon>
              Photos
            </a>
          </li>

          <li>
            <a
              href="#"
              class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500"
            >
              Accounts
            </a>
          </li>

          <li>
            <a
              href="#"
              class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 flex items-center hover:bg-gray-100 hover:text-gray-700 gap-3"
            >
              <NIcon size="24">
                <Wallet />
              </NIcon>
              Your wallet
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 flex items-center hover:bg-gray-100 hover:text-gray-700 gap-3"
            >
              <NIcon name="clarity:connect-solid" size="24">
                <Earth />
              </NIcon>
              Connect
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500"
            >
              Analytics
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-700 flex items-center hover:bg-gray-100 hover:text-gray-700 gap-3"
            >
              <NIcon size="24" color="green">
                <Analytics />
              </NIcon>
              Tip
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { NIcon } from "naive-ui";
import {
  People,
  Images,
  Grid,
  Wallet,
  Earth,
  Analytics,
} from "@vicons/ionicons5";
</script>
