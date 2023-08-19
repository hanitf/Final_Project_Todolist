import { defineStore } from "pinia"
import supabase from "../lib/supabase"
import { ref } from "vue"


export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);

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
      .insert({ id: tasks.id, title: creatEdit })
    if (error) console.log("Error: ", error);
    else console.log("tasks complete: ", tasks.id);
    await fetchTasks()
  };

  const deleteTasks = async (task) => {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', task)

    if (error) console.log("Error: ", error);
    else console.log("tasks delete: ");
    await fetchTasks()
  };

  const modifyTasks = async (modifyEdit, task) => {
    const { error } = await supabase
      .from('tasks')
      .update({ title: modifyEdit })
      .eq('id', task)

    if (error) console.log("Error: ", error);
    else console.log("tasks modified: ");
    await fetchTasks()
  }

  return { tasks, modifyTasks, deleteTasks, createTasks, fetchTasks }
})