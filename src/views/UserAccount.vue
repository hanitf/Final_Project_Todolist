<script setup>
import { useUserStore } from '../stores/user';


const userStore = useUserStore();

</script>

<template>
  <h1>Account settings</h1>
  {{ userStore.user.user.email }} <br>
  <router-link to="/updatepassword">Change Password</router-link>
  
</template>

<style>
template {
  font-family: monospace;
}
</style>