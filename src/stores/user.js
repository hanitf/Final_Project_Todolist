import { defineStore } from "pinia";
import supabase from "../lib/supabase";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("userStore", () => {
  const user = ref();
  const router = useRouter();

  const createNewUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) console.log("Error: ", error);
    else {
      ("Data: ", console.log(data))
      user.value = data;
    }
  };

  const loginUser = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) console.log("Error: ", error);
    else {
      ("Data: ", console.log(data))
      user.value = data;
    }
  };

  const logoutUser = async () => {

    const { error } = await supabase.auth.signOut({
    })
    if (error) console.log("Error: ", error);
    else
      router.push({ path: '/' })
    user.value = null

  }

    return { user, logoutUser, loginUser, createNewUser }

  })







