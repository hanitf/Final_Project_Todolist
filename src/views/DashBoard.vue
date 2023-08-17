<script setup>
import { useTaskStore } from "@/stores/task";

const taskStore = useTaskStore();



</script>

<template>
  <h1 class="maintext">Dashboard</h1>




  <br><br>
  <button @click="taskStore.fetchTasks()">Fetch Tasks</button>
  <button @click="taskStore.createTasks()">Create Tasks</button>
  <button @click="taskStore.deleteTasks()">Delete Tasks</button>
  <button @click="taskStore.modifyTasks()">Modiy Tasks</button>
  <ul>
    <li v-for="task in taskStore.tasks">
      {{ task.title }}
    </li>
  </ul>
</template>

<style>
.maintext {
  text-align: center;

}

template {
  font-family: monospace;
}
</style>
