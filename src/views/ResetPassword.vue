<script setup>
import { useUserStore } from "@/stores/user";
import { ref } from 'vue';


</script>

<template>
  <div>
    <h1>Reset Password</h1>

    <div>
      <input placeholder="Write your email" v-model="email">
    </div>
    <div>
      <input placeholder="Write your password" v-model="password" type="password">
    </div>
    <div>
      <button @click="userStore.createNewUser(email, password)">Signup</button>
    </div>
  </div>
</template>

<style>
template {
  font-family: monospace;
}
</style>