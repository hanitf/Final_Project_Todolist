<script setup>
import { useUserStore } from '../stores/user';


const userStore = useUserStore();

</script>

<template>
  <h1>Account settings</h1>
  <p>{{ userStore.user.user.email }}</p>
  <div class="btn">
  <router-link to="/updatepassword"><button>
  Change Password
</button></router-link>
</div>
</template>

<style>
template {
  font-family: monospace;
}

button{
background: black;
border-radius: 5px;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
cursor: pointer;
color: aliceblue;
}

.btn{
  display: flex;
  flex-direction: column;
justify-items: center;
align-items: center;
}
</style>