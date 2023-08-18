<script setup>
import { useTaskStore } from "@/stores/task";
import { ref } from "vue";

const taskStore = useTaskStore();
const creatEdit = ref("");
const modifyEdit = ref("");
const removeSelect = ref("");

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
    <button @click="taskStore.deleteTasks()">Delete Tasks</button>
  </div>
  <div>
    <input v-model="modifyEdit">
    <button @click="taskStore.modifyTasks(modifyEdit)">Modify Tasks</button>
  </div>
  <ul>
    <li v-for="task in taskStore.tasks">
      <input type="checkbox" v-model="removeSelect"> {{ task.title }}
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
