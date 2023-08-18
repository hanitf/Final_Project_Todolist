<script setup>
import { useUserStore } from '../stores/user';


const userStore = useUserStore();

</script>

<template>
  <h1>Account settings</h1>
  <router-link to="/updatepassword">Change Password</router-link>
  <button>Change Information</button>
</template>

<style>
template {
  font-family: monospace;
}
</style>