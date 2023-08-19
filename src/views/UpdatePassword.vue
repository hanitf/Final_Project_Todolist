<script setup>
import { useUserStore } from '../stores/user';
import { ref } from 'vue';

const password = ref("");
const userStore = useUserStore();

</script>


<template>
  <div>
    <h1>Update Password</h1>

    <div>
      <input placeholder="Write your new password" v-model="password" type="password">
    </div>
    <div>
      <button @click="userStore.passwordUpdate(password)">Reset Password</button>
    </div>
  </div>
</template>

<style>
template {
  font-family: monospace;
}
</style>