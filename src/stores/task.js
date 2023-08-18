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
      .insert({ id: 1, title: creatEdit })

    if (error) console.log("Error: ", error);
    else console.log("tasks complete: ", tasks.value);
  };

  const deleteTasks = async () => {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', 1)

    if (error) console.log("Error: ", error);
    else console.log("tasks delete: ");
  };

  const modifyTasks = async (modifyEdit) => {
    const { error } = await supabase
      .from('tasks')
      .update({ title: modifyEdit })
      .eq('id', 1)

    if (error) console.log("Error: ", error);
    else console.log("tasks modified: ");
  }

  return { tasks, modifyTasks, deleteTasks, createTasks, fetchTasks }
})