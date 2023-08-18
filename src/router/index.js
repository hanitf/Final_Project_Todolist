import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewUser from '../views/NewUser.vue'
import DashBoard from '../views/DashBoard.vue'
import UserAccount from '../views/UserAccount.vue'
import CreateOk from '../views/CreateOk.vue'

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
    }
  ]
})

export default router
