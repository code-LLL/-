import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'


const Home = () => import('../views/首页/Home.vue')
const CourseLearning = () => import('../views/课程学习/CourseLearning.vue')
const CourseContent = () => import('../views/课程信息/CourseContent.vue')
const CourseWork = () => import('../views/课程作业/CourseWork.vue')
const ExperimentTeaching = () => import('../views/实验教学/ExperimentTeaching.vue')
const InteractionGarden = () => import('../views/交互园地/InteractionGarden.vue')
const LogIn = () => import('../views/登录/LogIn.vue')
const MobileLearning = () => import('../views/移动学习/MobileLearning.vue')
const ResourceCenter = () => import('../views/资源中心/ResourceCenter.vue')
const SignIn = () => import('../views/注册/SignIn.vue')
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
    component: CourseLearning
  },
  {
    path: '/coursecontent',
    name: 'coursecontent',
    component: CourseContent,
  },
  {
    path: '/coursework',
    name: 'coursework',
    component: CourseWork
  },
  {
    path: '/experimentteaching',
    name: 'experimentteaching',
    component: ExperimentTeaching
  },
  {
    path: '/interactiongarden',
    name: 'interactiongarden',
    component: InteractionGarden
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/mobilelearning',
    name: 'mobilelearning',
    component: MobileLearning
  },
  {
    path: '/resourcecenter',
    name: 'resourcecenter',
    component: ResourceCenter
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignIn
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
