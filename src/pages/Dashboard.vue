<script setup>
import { ref } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
const mobileNavOpen = ref(false);
</script>

<template>
  <!-- Page Container -->
  <div id="page-container"
    class="mx-auto flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-100 dark:bg-black dark:text-gray-100">
    <!-- Page Header -->
    <header id="page-header" class="z-1 flex flex-none items-center bg-white shadow-sm dark:bg-black">
      <div class="container mx-auto px-4 lg:px-8 xl:max-w-10xl">
        <div class="flex justify-between py-4">
          <!-- Left Section -->
          <div class="flex items-center">
            <!-- Logo -->
            <router-link to="/">
              <a href="#"
                class=" group inline-flex items-center text-lg  tracking-wide text-gray-900  dark:text-[#8bc421] ">

                <img class="hi-mini hi-cube-transparent inline-block size-10  transition group-hover:scale-110 "
                  src="https://static.wixstatic.com/media/129f8c_83688930df144237b76f87b547c7b0b5~mv2.png/v1/fill/w_170,h_155,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PU-logo-design.png"
                  alt="">
              </a>
            </router-link>
            <!-- END Logo -->
          </div>
          <!-- END Left Section -->

          <!-- Right Section -->
          <div class="flex items-center gap-2 lg:gap-5">
            <!-- Desktop Navigation -->
            <nav class="hidden items-center gap-4 lg:flex">

              <router-link to="/"
                class="group flex items-center  focus:border-l-2 focus:border-[#8bc421]  px-5 py-0 text-sm focus:text-base focus:font-bold   dark:text-gold">
                <span>HOME</span>
              </router-link>
              <router-link to="/shop"
                class="group flex items-center  focus:border-l-2 focus:border-[#8bc421]  px-5 py-0 text-sm focus:text-base focus:font-bold   dark:text-gold">
                <span>SHOP</span>
              </router-link>
              <router-link to="/contact"
                class="group flex items-center  focus:border-l-2 focus:border-[#8bc421]  px-5 py-0 text-sm focus:text-base focus:font-bold   dark:text-gold">
                <span>CONTACT</span>
              </router-link>
              <router-link to="/card"
                class="group flex items-center  focus:border-l-2 focus:border-[#8bc421]  px-5 py-0 text-sm focus:text-base focus:font-bold   dark:text-gold">
                <span>CARD</span>
              </router-link>


            </nav>
            <!-- END Desktop Navigation -->

            <!-- User Dropdown -->
            <Menu as="div" class="relative inline-block">
              <!-- Dropdown Toggle Button -->
              <MenuButton class="inline-flex items-center justify-center gap-2 rounded-lg border border-dashed border-gold  px-3 
                py-2 text-sm font-semibold leading-5 text-gold hover:border-gold hover:text-gold
                  active:border-gold 
                  dark:border-gold  dark:text-gold dark:hover:border-dotted
                     ">
                <span>PU V</span>
                <svg class="hi-mini hi-chevron-down inline-block size-5 opacity-40 " xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20" fill="gold" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd" />
                </svg>
              </MenuButton>
              <!-- END Dropdown Toggle Button -->

              <!-- Dropdown -->
              <Transition enter-active-class="transition ease-out duration-100 " enter-from-class="opacity-0 scale-90"
                enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
                leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-90">
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg  focus:outline-none ">
                  <div
                    class="backdrop-blur-sm bg-white/5   rounded-lg  border border-dashed border-gold ring-da divide-y divide-dashed dark:divide-gold  dark:ring-gray-700">
                    <div class="space-y-1 p-2.5">
                      <MenuItem v-slot="{ active }">
                      <a href="#"
                        class=" group flex items-center justify-between gap-2 rounded-lg border  border-transparent px-2.5 py-2 text-sm font-medium"
                        :class="{
                          'bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75 dark:text-gold':
                            active,
                          'text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100 dark:text-gold dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600':
                            !active,
                        }">
                        <svg class="hi-mini hi-inbox inline-block size-5 flex-none opacity-25 group-hover:opacity-50 "
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M1 11.27c0-.246.033-.492.099-.73l1.523-5.521A2.75 2.75 0 015.273 3h9.454a2.75 2.75 0 012.651 2.019l1.523 5.52c.066.239.099.485.099.732V15a2 2 0 01-2 2H3a2 2 0 01-2-2v-3.73zm3.068-5.852A1.25 1.25 0 015.273 4.5h9.454a1.25 1.25 0 011.205.918l1.523 5.52c.006.02.01.041.015.062H14a1 1 0 00-.86.49l-.606 1.02a1 1 0 01-.86.49H8.236a1 1 0 01-.894-.553l-.448-.894A1 1 0 006 11H2.53l.015-.062 1.523-5.52z"
                            clip-rule="evenodd" />
                        </svg>
                        <span class="grow">Inbox</span>
                        <div
                          class="inline-flex rounded-full border border-blue-200 bg-blue-100 px-1.5 py-0.5 text-xs font-semibold leading-4 text-blue-700 dark:border-blue-700 dark:bg-blue-700 dark:text-blue-50">
                          2
                        </div>
                      </a>
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                      <a href="#"
                        class="group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium"
                        :class="{
                          'bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75  dark:text-gold':
                            active,
                          'text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100  dark:text-gold dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600':
                            !active,
                        }">
                        <svg class="hi-mini hi-flag inline-block size-5 flex-none opacity-25 group-hover:opacity-50"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path
                            d="M3.5 2.75a.75.75 0 00-1.5 0v14.5a.75.75 0 001.5 0v-4.392l1.657-.348a6.449 6.449 0 014.271.572 7.948 7.948 0 005.965.524l2.078-.64A.75.75 0 0018 12.25v-8.5a.75.75 0 00-.904-.734l-2.38.501a7.25 7.25 0 01-4.186-.363l-.502-.2a8.75 8.75 0 00-5.053-.439l-1.475.31V2.75z" />
                        </svg>
                        <span class="grow">Notifications</span>
                        <div
                          class="inline-flex rounded-full border border-blue-200 bg-blue-100 px-1.5 py-0.5 text-xs font-semibold leading-4 text-blue-700 dark:border-blue-700 dark:bg-blue-700 dark:text-blue-50">
                          5
                        </div>
                      </a>
                      </MenuItem>
                    </div>  
                    <div class="space-y-1 p-2.5">
                      <router-link to="/about">
                      <MenuItem v-slot="{ active }">

                      <a href="#"
                        class="group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium"
                        :class="{
                          'bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75  dark:text-gold':
                            active,
                          'text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100  dark:text-gold dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600':
                            !active,
                        }">
                        <svg
                          class="hi-mini hi-user-circle inline-block size-5 flex-none opacity-25 group-hover:opacity-50"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                            clip-rule="evenodd" />
                        </svg>
                        <span class="grow">About</span>
                      </a>
                      </MenuItem>
                    </router-link>
                      <MenuItem v-slot="{ active }">
                      <a href="#"
                        class="group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium"
                        :class="{
                          'bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75  dark:text-gold':
                            active,
                          'text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100  dark:text-gold dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600':
                            !active,
                        }">
                        <svg
                          class="hi-mini hi-cog-6-tooth inline-block size-5 flex-none opacity-25 group-hover:opacity-50"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clip-rule="evenodd" />
                        </svg>
                        <span class="grow">Settings</span>
                      </a>
                      </MenuItem>
                    </div>
                    <div class="space-y-1 p-2.5">
                      <MenuItem v-slot="{ active }">
                      <a href="#"
                        class="group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2.5 py-2 text-sm font-medium"
                        :class="{
                          'bg-blue-50 text-blue-800 dark:border-transparent dark:bg-gray-700/75  dark:text-gold':
                            active,
                          'text-gray-700 hover:bg-blue-50 hover:text-blue-800 active:border-blue-100  dark:text-gold dark:hover:bg-gray-700/75 dark:hover:text-white dark:active:border-gray-600':
                            !active,
                        }">
                        <svg
                          class="hi-mini hi-lock-closed inline-block size-5 flex-none opacity-25 group-hover:opacity-50"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd"
                            d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                            clip-rule="evenodd" />
                        </svg>
                        <span class="grow">Sign out</span>
                      </a>
                      </MenuItem>
                    </div>
                  </div>
                </MenuItems>
              </Transition>
              <!-- END Dropdown -->
            </Menu>
            <!-- END User Dropdown -->

            <!-- Toggle Mobile Navigation -->
            <div class="lg:hidden " >
              <button @click="mobileNavOpen = !mobileNavOpen" type="button"
                class="inline-flex items-center justify-center gap-​2​  rounded-lg border border-dashed  border-gold bg-white px-3 py-2 text-sm font-semibold leading-5 text-gold hover:border-gold hover:text-gold hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gold active:shadow-none dark:border-gold dark:bg-black dark:text-gold dark:hover:border-dotted dark:hover:text-gold dark:focus:ring-gray-600/40 dark:active:border-gray-700">
                <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                  class="hi-solid hi-menu inline-block size-5">
                  <path fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
                </svg>

              </button>
            </div>
            <!-- END Toggle Mobile Navigation -->
          </div>
          <!-- END Right Section -->
        </div>

        <!-- Mobile Navigation -->
        <div class="lg:hidden " :class="{
          hidden: !mobileNavOpen,
        }">
          <nav  class="flex flex-col gap-2 border-t  border-gold py-4 dark:border-gold ">
            <router-link to="/" @click="mobileNavOpen = !mobileNavOpen">
              <a href="#"
                class="group flex items-center gap-2 rounded-lg border border-blue-50 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-600 dark:border-transparent backdrop-blur-sm bg-white/5 dark:text-gold">
                <svg class="hi-mini hi-home inline-block size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                    clip-rule="evenodd" />
                </svg>
                <span>Home</span>
              </a>
            </router-link>

            <router-link to="/shop" @click="mobileNavOpen = !mobileNavOpen">
              <a href="#"
                class="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gold   dark:text-gold dark:hover:backdrop-blur-sm dark:hover:bg-white/5 dark:hover:text-gold ">
                <svg class="hi-mini hi-briefcase inline-block size-5 opacity-25 group-hover:opacity-100"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd"
                    d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
                    clip-rule="evenodd" />
                  <path
                    d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
                </svg>
                <span>Shop</span>
              </a>
            </router-link>
            <router-link to="/contact" @click="mobileNavOpen = !mobileNavOpen">
              <a href="#"
                class="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gold   dark:text-gold dark:hover:backdrop-blur-sm dark:hover:bg-white/5 dark:hover:text-gold ">
                <svg class="hi-mini hi-users inline-block size-5 opacity-25 group-hover:opacity-100"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                </svg>
                <span>Contact</span>
              </a>
            </router-link>
            <router-link to="/card" @click="mobileNavOpen = !mobileNavOpen">
              <a href="#"
                class="group flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm font-medium text-gold   dark:text-gold dark:hover:backdrop-blur-sm dark:hover:bg-white/5 dark:hover:text-gold ">
                <svg fill="currentColor" class="hi-mini hi-users inline-block size-5 opacity-25 group-hover:opacity-100"
                  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve">
                  <circle style="fill:currentColor;stroke-width:2;stroke-miterlimit:10;" cx="22" cy="24" r="2" />
                  <circle style="fill:currentColor;stroke-width:2;stroke-miterlimit:10;" cx="13" cy="24" r="2" />
                  <path fill="currentColor"
                    d="M25.658,10l-2.422,9H10.781L8.159,8.515C7.937,7.625,7.137,7,6.219,7H4C3.448,7,3,7.448,3,8c0,0.552,0.448,1,1,1h2.219
	                  l2.621,10.485C9.063,20.375,9.863,21,10.781,21h12.455c0.902,0,1.692-0.604,1.93-1.474L27.764,10H25.658z" />
                  <line fill="currentColor" style="fill:currentColor;stroke-width:2;stroke-miterlimit:10;" x1="17"
                    y1="7" x2="17" y2="15" />
                  <line fill="currentColor" style="fill:currentColor;stroke-width:2;stroke-miterlimit:10;" x1="21"
                    y1="11" x2="13" y2="11" />
                </svg>
                <span>Card</span>
              </a>
            </router-link>
          </nav>
        </div>
        <!-- END Mobile Navigation -->
      </div>
    </header>
    <!-- END Page Header -->

    <!-- Page Content -->
    <main id="page-content" class="flex  max-w-full flex-auto flex-col ">
      <!-- Page Section -->
      <div class="container mx-auto p-4 lg:p-8 xl:max-w-10xl">
        <!--

        ADD YOUR MAIN CONTENT BELOW

        -->

        <!-- Placeholder -->
        <router-view />

        <!--
        
        ADD YOUR MAIN CONTENT ABOVE
              
        -->
      </div>
      <!-- END Page Section -->
    </main>
    <!-- END Page Content -->

    <!-- Page Footer -->
    <footer id="page-footer" class="flex flex-none items-center bg-white dark:bg-black">
      <div
        class="container mx-auto flex flex-col px-4 text-center text-sm md:flex-row md:justify-between md:text-left lg:px-8 xl:max-w-7xl">
        <div class="pb-1 pt-4 md:pb-4">
          <a href="https://www.puofficial.com/"
            class="m-1 font-medium text-blue-600 hover:font-bold dark:text-gold dark:text-2xl " target="_blank">PU
            OFFICIAL</a>
        </div>

        <!-- icon -->
        <div class="gap-4 inline-flex items-center justify-center pb-4 pt-1 md:pt-4">

          <div class="group relative inline-block">
            <a href="https://www.instagram.com/puwatchofficialcambodia?igshid=1jrg7nquwmqez">
              <button class="focus:outline-none">
                <svg viewBox="0 0 16 16"
                  class="bi bi-instagram transform transition-transform duration-300 hover:scale-125 dark:text-gold hover:text-gold"
                  fill="currentColor" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334">
                  </path>
                </svg>
              </button>
              <span
                class=" absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-gold rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">Instagram</span>
            </a>
          </div>
          <div class="group relative inline-block">
            <a href="https://www.youtube.com/channel/UC_1PAyShhAeuC97RLV6pPfQ">
              <button class="focus:outline-none">

                <svg
                  class="bi bi-instagram transform transition-transform duration-300 hover:scale-125 dark:text-gold hover:text-gold"
                  height="30" width="30" viewBox="0 -17 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                    <path
                      d="M178.624 73.933C178.496 71.4324 178.372 68.9317 178.251 66.4318C178.036 61.8466 177.826 57.2613 177.621 52.6756C177.224 43.9011 176.813 34.8278 176.358 25.9062C176.16 19.8637 173.693 14.118 169.447 9.81435C164.279 4.55251 157.539 1.94523 148.837 1.84153C129.723 1.61443 107.095 1.35216 84.1845 1.11982C80.1362 1.07847 76.0203 1.09164 72.0422 1.10411C69.8048 1.11068 67.566 1.11434 65.3255 1.11565C62.1147 1.11259 58.9039 1.09922 55.6931 1.07559C48.4734 1.0349 41.0129 0.990911 33.6731 1.13071C27.1596 1.25476 21.7618 2.57093 17.1726 5.15559C7.72137 10.4785 2.68859 18.2461 2.22062 28.2428C1.96596 33.6904 1.87808 39.2351 1.79407 44.5955L1.76586 46.3677C1.6626 52.7255 1.56918 59.0832 1.48561 65.4409C1.32612 76.882 1.16141 88.7131 0.910028 100.346C0.756445 107.465 1.1147 115.822 4.94115 123.825C8.21822 130.679 12.512 135.13 18.4552 137.83C23.7258 140.175 29.2712 141.846 34.9601 142.803C44.9496 144.59 55.199 144.793 65.1103 144.989L65.9215 145.005C67.5837 145.038 69.2823 145.17 70.9245 145.297C71.6976 145.356 72.4715 145.416 73.2446 145.467H73.2879H140.677C140.702 145.467 140.727 145.465 140.752 145.462C141.971 145.324 143.192 145.205 144.413 145.085C147.053 144.826 149.784 144.56 152.448 144.1C166.676 141.651 176.183 132.306 177.881 119.103C179.26 107.967 179.693 96.7355 179.173 85.5266C179.019 81.6608 178.819 77.7326 178.624 73.933ZM167.957 85.222C167.849 96.1232 167.218 107.103 166.524 118.329C165.903 128.389 157.184 132.723 149.906 133.378C146.992 133.64 144.069 133.777 141.219 133.787L128.566 133.833C107.982 133.909 86.6969 133.99 65.7647 133.942C53.9034 133.915 42.3294 133.654 31.148 130.782C27.7285 129.932 24.4178 128.693 21.2807 127.089C17.7575 125.246 15.2233 121.987 13.5359 117.127C11.2361 110.302 10.087 103.142 10.1355 95.94C10.0698 86.7513 10.2359 77.4031 10.3928 68.3627L10.4978 62.1775C10.6612 52.1434 10.8306 41.7655 11.1653 31.5719C11.5493 19.8792 18.1526 12.4532 29.7586 10.6614C35.8162 9.74103 41.9353 9.28494 48.0625 9.2965C48.285 9.2965 48.5082 9.2965 48.7307 9.2965C59.5977 9.35228 70.6482 9.6246 81.3347 9.88713C85.7288 9.99517 90.1224 10.0992 94.5159 10.199C94.6944 10.2017 94.867 10.1342 94.997 10.0111C95.0246 9.98499 95.0495 9.95671 95.0718 9.92651C99.6937 10.042 104.316 10.1566 108.938 10.2704C121.98 10.592 135.465 10.9268 148.727 11.3049C152.657 11.4171 156.776 11.9216 160.28 14.8318C163.742 17.7111 165.446 20.8106 165.638 24.5865L165.769 27.165C166.238 36.3104 166.721 45.7683 167.09 55.0719C167.171 57.1424 167.259 59.2135 167.352 61.285C167.685 69.1385 168.036 77.2548 167.957 85.2234V85.222Z"
                      fill="currentColor" />
                    <path
                      d="M114.992 63.349C112.253 61.1096 109.449 58.9232 107.069 57.0802L104.241 54.89C96.8076 49.1339 89.1219 43.1803 81.5117 37.3887C80.1806 36.447 78.7183 35.7059 77.172 35.1893C74.4364 34.1897 71.7244 35.0582 70.4176 37.3554C68.595 40.561 67.6426 43.297 67.5061 45.7183C67.1517 51.9988 67.0808 58.3928 67.0125 64.5755C66.9876 66.7969 66.9633 69.0199 66.9252 71.2403C66.8084 71.2908 66.708 71.3742 66.6364 71.4798C66.5643 71.5849 66.5242 71.7089 66.5196 71.8362L66.3102 77.9979C66.1108 83.8761 65.9066 89.7543 65.6974 95.6331C65.6055 98.1521 66.4336 99.8468 68.2287 100.814C68.9651 101.221 69.7921 101.436 70.6335 101.441C71.8386 101.406 73.0082 101.024 74.0019 100.342C77.7082 97.9847 81.4159 95.6291 85.1261 93.2755C94.7743 87.1499 104.751 80.8169 114.53 74.5279C116.857 73.0308 118.146 71.2035 118.257 69.2424C118.37 67.2248 117.241 65.1881 114.992 63.349ZM104.113 69.0245L75.4649 87.7176L76.1993 47.9671C82.0131 51.8953 87.4575 56.1529 93.1984 60.6461C96.7276 63.4034 100.366 66.2494 104.113 69.0245Z"
                      fill="currentColor" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="179.18" height="145.051" fill="currentColor"
                        transform="translate(0.598877 0.89209)" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
              <span
                class=" absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-gold rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">Youtube</span>
            </a>
          </div>
          <div class="group relative inline-block">
            <a href="https://www.facebook.com/puwatch">
              <button class="focus:outline-none">
                <svg
                  class="bi bi-instagram transform transition-transform duration-300 hover:scale-125 dark:text-gold hover:text-gold"
                  height="30" width="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M13,12.0043945 L11.1330566,12.0043945 L11.1330566,10.0043945 L13,10.0043945 L13,9 C13,7.34314575 14.3431458,6 16,6 L17,6 L17,8 L16,8 C15.4477153,8 15,8.44771525 15,9 L15,10.0043945 L16.9824219,10.0043945 L16.9824219,12.0043945 L15,12.0043945 L15,18 L13,18 L13,12.0043945 Z" />
                </svg>
              </button>
              <span
                class=" absolute -top-14 left-1/2 transform -translate-x-1/2 z-20 px-4 py-2 text-sm font-bold text-gold
               rounded-lg shadow-lg transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">Facebook</span>
            </a>
          </div>



        </div>
      </div>
    </footer>
    <!-- END Page Footer -->
  </div>
  <!-- END Page Container -->
</template>
