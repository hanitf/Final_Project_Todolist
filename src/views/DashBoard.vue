<script setup>
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();



</script>

<template>
  <h1 class="maintext">Dashboard</h1>




  <br><br>
  <button @click="taskStore.fetchTasks()">Fetch Tasks</button>
  <ul>
    <li v-for="task in taskStore.tasks">
      {{ task.title }} - {{ task.is_complete }}
    </li>
  </ul>
</template>

<style>
.maintext {
  text-align: center;

}
</style>
