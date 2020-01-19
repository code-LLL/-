import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

const Home = () => import('../views/Home.vue')
const Courselearning = () => import('../views/CourseLearning.vue')
const Coursetitle = () => import('../views/CourseTitle.vue')
const Coursework = () => import('../views/Coursework.vue')
const Experimentteaching = () => import('../views/ExperimentTeaching.vue')
const Interactiongarden = () => import('../views/InteractionGarden.vue')
const Login = () => import('../views/LogIn.vue')
const Mobilelearning = () => import('../views/MobileLearning.vue')
const Resourcecenter = () => import('../views/ResourceCenter.vue')
const Signin = () => import('../views/SignIn.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/courselearning',
    name: 'courselearning',
    component: Courselearning
  },
  {
    path: '/coursetitle',
    name: 'coursetitle',
    component: Coursetitle
  },
  {
    path: '/coursework',
    name: 'coursework',
    component: Coursework
  },
  {
    path: '/experimentteaching',
    name: 'experimentteaching',
    component: Experimentteaching
  },
  {
    path: '/interactiongarden',
    name: 'interactiongarden',
    component: Interactiongarden
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/mobilelearning',
    name: 'mobilelearning',
    component: Mobilelearning
  },
  {
    path: '/resourcecenter',
    name: 'resourcecenter',
    component: Resourcecenter
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
