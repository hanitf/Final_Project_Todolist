<script setup>
import { useTaskStore } from "@/stores/task";
import { ref } from "vue";

const taskStore = useTaskStore();
const creatEdit = ref("");
const modifyEdit = ref("");

</script>

<template>
  <h1 class="maintext">Dashboard</h1>
  <div>
    <button @click="taskStore.fetchTasks()">Fetch Tasks</button>
  </div>
  <div>
    <input v-model="creatEdit">
    <button @click="taskStore.createTasks(creatEdit)">Create Tasks</button>
  </div>
  <div>
    <input v-model="modifyEdit">
    
  </div>
  <ul>
    <li v-for="task in taskStore.tasks">
      <button @click="taskStore.deleteTasks(task.id)">Delete Tasks</button>
      <button @click="taskStore.modifyTasks(modifyEdit, task.id)">Modify Tasks</button>
      {{ task.id }}
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
