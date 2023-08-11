<script setup>
import { loginUserStore } from '../stores/user';
import { ref } from 'vue';
const email = ref("");
const password = ref("");
const loginStore = loginUserStore();
</script>

<template>
  <div class="navbar">
    <div class="leftmenu">
      <router-link to="/">Home</router-link>
      </div>
    <div class="rightmenu">
      <div class="dropdown">
        <button class="dropbtn">Sign in</button>
        <div class="dropdown-content">
          <a href="#"><input placeholder="Write your email" v-model="email">
            <input placeholder="Write your password" v-model="password" type="password">
            <button @click="loginStore.loginUser(email, password)">Login</button></a>
          <div>
            <router-link to="/account"><p v-if="loginStore.login">Current User: {{ loginStore.login.user.email }}</p></router-link>
          </div>
          <router-link to="/dashboard" v-if="loginStore.login">Dashboard</router-link>
          <a href="#"><button class="logoutbutton" v-if="loginStore.login">Logout</button></a>
          <router-link to="/newuser">Signup</router-link>

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
  padding-top: 20px;
  background-color: #a2a5ad;
  height: 60px;
}


.dropbtn {
  background-color: #4c6baf;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
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

.logo {
  width: 50px;
}

</style>
