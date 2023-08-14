<script setup>
import NavBar from './components/NavBar.vue';
import Foot from './components/Foot.vue';
</script>

<template>
  <div>
    <NavBar></NavBar>
  </div>
  <RouterView></RouterView>
  <div>
<Foot></Foot>
  </div>
</template>

<style></style>