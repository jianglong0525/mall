import Vue from 'vue'
import VueRouter from 'vue-router'

const Cart = () => import('../views/cart/Cart')
const Renew = () => import('../views/renew/Renew')
const Setting = () => import('../views/setting/Setting')
const Time = () => import('../views/time/Time')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/cart'
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/renew',
    component: Renew
  },
  {
    path: '/setting',
    component: Setting
  },
  {
    path: '/time',
    component: Time
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
