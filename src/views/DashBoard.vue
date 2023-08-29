<script setup>
import { useTaskStore } from "@/stores/task";
import { ref } from "vue";
import { useUserStore } from '../stores/user';

const taskStore = useTaskStore();
const creatEdit = ref("");
const modifyEdit = ref("");
const userStore = useUserStore();

async function renderDelete(tasksID) {
  await taskStore.deleteTasks(tasksID)
  await taskStore.fetchTasks()
  
}



</script>

<template class="templatedash">
  <h1 class="maintext">Dashboard</h1>
  <div>
    <input v-model="creatEdit" @keydown.enter="taskStore.createTasks(creatEdit, userStore.user.user.email, userStore.user.user.id)">
    <button @click="taskStore.createTasks(creatEdit, userStore.user.user.email, userStore.user.user.id)">Create Tasks</button>
  </div>
  <div>
    
    
  </div>
  <ul>
    <li v-for="task in taskStore.tasks">
      
      <p v-if="task">{{ task.title }}</p>
      <input v-model="modifyEdit">
      <button @click="renderDelete(task.id)">Delete Tasks</button>
      <button @click="taskStore.modifyTasks(modifyEdit, task.id)">Modify Tasks</button>
        
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

.templatedash{
  background-color: aqua;
}
</style>
