<script setup>
  import { RouterView } from 'vue-router';

</script>
<!-- AQUI SE AGREGAN LOS COMPONENTES -->
<template>
<nav class="navbar navbar-expand-lg navbar-light bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">clientes</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/" class="nav-link" href="#">crear</router-link>
        </li>

      </ul>

    </div>
  </div>
</nav>
  

<div class="container-fluid mt-5">
  <RouterView />
</div>
<!-- 
  <main class="max-w-7xl mx-auto mt-5 p-10">
    <RouterView />
  </main>
   -->
</template>
