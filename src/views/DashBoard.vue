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

 async function createClean(){
  await taskStore.createTasks(creatEdit, userStore.user.user.email, userStore.user.user.id)
  creatEdit.value = "";
}

async function modifyClean(task){
  await taskStore.modifyTasks(modifyEdit, task.id)
  modifyEdit.value = "";
}

</script>

<template class="templatedash">
  <h1 class="maintext">Dashboard</h1>
  <div class="createclass">
    <input v-model="creatEdit" @keydown.enter="createClean()" placeholder="new task...">
    <button @click="createClean()" class="takscreatebutton">New Task +</button>
  </div>
  <div>
    
    
  </div>
  <ul class="tasktable">
    <li v-for="task in taskStore.tasks">
      <br>
      <div class="taskcard">
      <div class="deletbutton">
        <button @click="renderDelete(task.id)" class="taksbuttons"><img src="\src\logo\delete.png" alt="Edit icon" class="deleticon"></button>
      </div>
        <div class="tasktitle">
      <p v-if="task"> {{task.title}} </p><br>
    </div>
    <div class="taksfunctions">
      <div class="editbutton">
        <input v-model="modifyEdit" @keydown.enter="modifyClean(task)" placeholder="edit...">
        <button @click="modifyClean(task)" class="taksbuttons" ><img src="\src\logo\edit.png" alt="Edit icon" class="editicon"></button>
      </div>
      
      </div>
    </div>
    </li>
    <br>
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

.deleticon{
  height: 25px;
}

.editicon{
  height: 24px;
}

.tasktable{
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
list-style: none;
}

.taskcard{
  background-color: #4c6baf;
  color: white;
  padding: 5px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  height: 150px;
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  opacity: 90%;
  border-radius: 5px;
}

.tasktitle{
  
}

.taksbuttons{
background: black;
border-radius: 5px;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
cursor: pointer;
color: aliceblue;
}

.takscreatebutton{
background: black;
border-radius: 5px;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
cursor: pointer;
color: aliceblue;
}


.createclass{
display: flex;
justify-content: center;
}

.editbutton{
display: flex;
justify-content: center;
align-items: end;
}

.deletbutton {
  display: flex;
  justify-content: right;
  align-items: center;
}

</style>
