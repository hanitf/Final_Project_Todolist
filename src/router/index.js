import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewUser from '../views/NewUser.vue'
import DashBoard from '../views/DashBoard.vue'
import UserAccount from '../views/UserAccount.vue'
import CreateOk from '../views/CreateOk.vue'
import ResetPassword from '../views/ResetPassword.vue'
import EmailSent from '../views/EmailSent.vue'
import UpdatePassword from '../views/UpdatePassword.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/newuser',
      name: 'signup',
      component: NewUser
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/account',
      name: 'account',
      component: UserAccount
    },
    {
      path: '/createok',
      name: 'createok',
      component: CreateOk
    },
    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: ResetPassword
    },
    {
      path: '/emailsent',
      name: 'emailsent',
      component: EmailSent
    },
    {
      path: '/updatepassword',
      name: 'updatepassword',
      component: UpdatePassword
    }
  ]
})

export default router
