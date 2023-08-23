import { defineStore } from "pinia"
import supabase from "../lib/supabase"
import { ref } from "vue"


export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);
  const task = ref("");

  const fetchTasks = async () => {
    const { data, error } = await supabase
      .from('tasks')
      .select()

    if (error) console.log("Error: ", error);
    else tasks.value = data;
    console.log("tasks: ", tasks);
  };



  const createTasks = async (creatEdit) => {
    const { error } = await supabase
      .from('tasks')
      .insert({ id: task.id, title: creatEdit })
    if (error) console.log("Error: ", error);
    else console.log("tasks complete: ", tasks.id);
    tasks.value.push({
      title: creatEdit,
    })
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
    task.value.push({
      title: modifyEdit,
    })
  };

  return { tasks, task, modifyTasks, deleteTasks, createTasks, fetchTasks }
})