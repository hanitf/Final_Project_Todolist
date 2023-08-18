<script setup>
import { useUserStore } from '../stores/user';
import { ref } from 'vue';


const email = ref("");
const password = ref("");
const userStore = useUserStore();

</script>

<template>
  <div class="navbar">
    <div class="leftmenu">
      <router-link to="/">
        <p class="homelink">Home</p>
      </router-link>
    </div>
    <div class="rightmenu">
      <div class="dropdown">
        <button class="dropbtn">Sign in</button>
        <div class="dropdown-content">
          <input placeholder="Write your email" v-model="email" v-if="!userStore.user"
            @keyup.enter="userStore.loginUser(email, password)">
          <input placeholder="Write your password" v-model="password" type="password" v-if="!userStore.user"
            @keyup.enter="userStore.loginUser(email, password)">
          <button @click="userStore.loginUser(email, password)" v-if="!userStore.user">Login</button>
          <router-link to="/account" v-if="userStore.user">Current User: {{ userStore.user.user.email }}</router-link>
          <router-link to="/dashboard" v-if="userStore.user">Dashboard</router-link>
          <button class="logoutbutton" v-if="userStore.user" @click="userStore.logoutUser">Logout</button>
          <router-link to="/newuser" v-if="!userStore.user">Signup</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.leftmenu {

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
}

.rightmenu {

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 150px;
}

.navbar {

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 150px;
  padding-right: 80px;
  background-color: #a2a5ad;
  height: 50px;
  align-items: center;
  font-family: monospace;
}


.dropbtn {
  background-color: #4c6baf;
  color: white;
  padding: 10px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}


.dropdown {
  position: relative;
  display: inline-block;
}


.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}


.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}


.dropdown-content a:hover {
  background-color: #f1f1f1
}


.dropdown:hover .dropdown-content {
  display: block;
}


.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

.homelink {
  font-size: 20px;
}
</style>
