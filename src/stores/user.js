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
      router.push({ path: '/createok' })
    }
  };

  const loginUser = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) alert("Incorrect Credencials");
    else {
      ("Data: ", console.log(data))
      router.push({ path: '/dashboard' })
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

  };

  const passwordReset = async (email) => {

    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    })
    if (error) console.log("Error: ", error);
    else
      router.push({ path: '/emailsent' })

  };
  
  const passwordUpdate = async (password) => {

    const { data, error } = await supabase.auth.updateUser({
      password: password
    })
    if (error) console.log("Error: ", error);
    else
      router.push({ path: '/dashboard' })

  };

  return { user, passwordReset, logoutUser, loginUser, createNewUser, passwordUpdate }

})







