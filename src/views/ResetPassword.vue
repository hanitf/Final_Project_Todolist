<script setup>
import { useUserStore } from '../stores/user';
import { ref } from 'vue';

const email = ref("");
const userStore = useUserStore();

</script>


<template>
  <div>
    <h1>Reset Password</h1>

    <div class="btn">
      <input placeholder="Write your email" v-model="email">
    </div><br>
    <div class="btn">
      <button @click="userStore.passwordReset(email)">Reset Password</button>
    </div>
  </div>
</template>

<style>
template {
  font-family: monospace;
}
</style>