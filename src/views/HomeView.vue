<script setup>
import { useUserStore } from "@/stores/user";
import { useTaskStore } from "@/stores/task";
import { loginUserStore } from "../stores/user";
import { ref } from 'vue';

const userStore = useUserStore();
const taskStore = useTaskStore();
const loginStore = loginUserStore();

const email = ref("");
const password = ref("");
</script>

<template>
  <h1>Todo List</h1>

  <h2 v-if="loginStore.user">Current User: {{ loginStore.user.user.email }}</h2>

  <input placeholder="Write your email" v-model="email">
  <input placeholder="Write your password" v-model="password" type="password">
  <button @click="loginStore.loginUser(email, password)">Login</button>

  <br><br>
  <button @click="taskStore.fetchTasks()">Fetch Tasks</button>
  <ul>
    <li v-for="task in taskStore.tasks">
      {{ task.title }} - {{ task.is_complete }}
    </li>
  </ul>
</template>
