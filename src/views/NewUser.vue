<script setup>
import { useUserStore } from "@/stores/user";
import { ref } from 'vue';

const userStore = useUserStore();


const email = ref("");
const password = ref("");
</script>

<template>
  <div>
    <h1>Signup</h1>

    <div class="btn">
      <input placeholder="Write your email" v-model="email">
    </div>
    <div class="btn">
      <input placeholder="Write your password" v-model="password" type="password">
    </div><br>
    <div class="btn">
      <button @click="userStore.createNewUser(email, password)">Signup</button>
    </div>
  </div>
</template>

<style>
template {
  font-family: monospace;
}
</style>