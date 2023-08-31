import { defineStore } from "pinia"
import supabase from "../lib/supabase"
import { ref } from "vue"
import { useUserStore } from '../stores/user';




export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);
  const task = ref("");
  const userStore = useUserStore();
  


  const fetchTasks = async () => {
    const { data, error } = await supabase
      .from('tasks')
      .select()
    if (error) console.log("Error: ", error);
    else tasks.value = data;
    console.log("tasks: ", tasks);
  };



  const createTasks = async (creatEdit, email, userID) => {
    const { data, error } = await supabase
      .from('tasks')
      .insert({
        title: creatEdit.value,
        email: email,
        user_id: userID,
      })
      .select()
    if (error) console.log("Error: ", error);
    else console.log("tasks complete: ", data);
    tasks.value.push(data[0]);
  };

  const deleteTasks = async (task) => {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', task)

    if (error) console.log("Error: ", error);
    else console.log("tasks delete: ");
    tasks.value.splice({
      id: task.id,
    })
  };

  const modifyTasks = async (modifyEdit, task) => {
    const { error } = await supabase
      .from('tasks')
      .update({ title: modifyEdit })
      .eq('id', task)
    if (error) console.log("Error: ", error);
    else console.log("tasks modified: ");
    await fetchTasks()
  };

  return { tasks, task, modifyTasks, deleteTasks, createTasks, fetchTasks }
})