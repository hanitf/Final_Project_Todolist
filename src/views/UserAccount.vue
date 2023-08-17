<script setup>
import { useUserStore } from '../stores/user';


const userStore = useUserStore();

</script>

<template>
  <h1>Account settings</h1>
  <button>Change Password</button>
  <button>Change Information</button>
</template>

<style>
template {
  font-family: monospace;
}
</style>