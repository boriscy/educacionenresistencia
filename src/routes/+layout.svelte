<script lang="ts">
  import "../app.css"
  import { base } from "$app/paths"
</script>

<div class="bg-base-200 p-0 mx-auto main">
  <nav class="fixed z-100 w-full top-0">
    <div class="container mx-auto px-6 py-3 flex justify-between items-center">
      <a class="text-white font-bold text-2xl lg:text-4xl" href={base}>
        <img src="images/logo.png" width="100" alt="Logo" />
      </a>
      <div class="flex items-center">
        <a class="text-white font-bold mx-3 hover:text-gray-100" href={base}> Inicio </a>
        <a class="text-white font-bold mx-3 hover:text-gray-100" href="{base}products">
          Productos
        </a>
        <a class="text-white font-bold mx-3 hover:text-gray-100" href="{base}about"> Nosotras </a>
      </div>
    </div>
  </nav>

  <main class="mt-20 mx-auto">
    <slot />
  </main>
</div>

<style>
  main {
    @apply max-w-2xl text-lg;
  }
  nav {
    background: #425f5a;
  }
  nav > div {
    @apply max-w-2xl;
  }
</style>
