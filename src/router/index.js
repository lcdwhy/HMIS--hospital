import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    //管理员登录模块
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/home',
    component: () => import('../views/home/Home.vue'),
    meta: {
      requireAuth: true  //进入该路由要进行登录
    },
    children: [
      {
        //重定向到首页
        path:'',
        redirect: 'fristpage'

      },
      {
        //首页
        path: 'fristpage',
        component: () => import('../components/item/FristPage.vue'),
      },
      {
        //用户列表
        path: 'userlist',
        component: () => import('../components/item/users/UserList.vue')
      },
      {
        //用户信息编辑
        name: 'useredit',
        path: 'useredit/:user',
        component: () => import('../components/item/users/edit/UserEdit.vue')
      },
      {
        //角色管理
        path: 'userrole',
        component: () => import('../components/item/users/UserRole.vue')
      },
      {
        //权限管理
        path: 'userpower',
        component: () => import('../components/item/users/UserPower.vue')
      },
      {
        //医生管理模块
        path: 'doctors',
        component: () => import('../components/item/Doctors/Doctors.vue')
      },
      {
        //医生信息编辑
        name: 'doctoredit',
        path: 'doctoredit/:doctor',
        component: () => import('../components/item/Doctors/DoctorEdit.vue')

      },
      {
        //病人列表模块
        path: 'patients',
        component: () => import('../components/item/diagnosis/Patients.vue')
      },
      {
        path: 'diagnosistable',
        component: () => import('../components/item/diagnosis/DiagnosisTable.vue')
      },
      {
        //药品管理模块
        path: 'durgs',
        component: () => import('../components/item/durg/DurgList.vue')
      },
      {
        //药品编辑模块
        name: 'durgedit',
        path: 'durgedit/:durg',
        component: () => import('../components/item/durg/DurgEdit.vue')
      },
      {
        //文章列表模块
        path: 'articlelist',
        component: () => import('../components/item/articles/ArticleList.vue')
      },
      {
        //文章编辑模块
        name: 'articleedit',
        path: 'articleedit/:article',
        component: () => import('../components/item/articles/ArticleEdit.vue')
      },
      {
        //发表文章模块
        path: 'addarticle',
        component: () => import('../components/item/articles/AddArticle.vue')
      },
      {
        //关于模块
        path: 'about',
        component: () => import('../components/item/About.vue')
      },
      {
        //修改密码模块
        path: 'changepassword',
        component: () => import('../components/item/setting/ChangePassword.vue')
      },
      {
        //管理员信息模块
        path: 'info',
        component: () => import('../components/item/setting/Info.vue')
      }
    ]
  },
  {
    //注册管理员账号
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register.vue')
  },
  {
    path: '*',
    component: () =>import('../components/404/404.vue')
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})






export default router
