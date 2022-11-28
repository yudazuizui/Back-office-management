import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Cookie from 'js-cookie'
Vue.use(VueRouter)
//1.创建路由组件
//2将路由组件进行映射.
// 3. 创建 router 实例，然后传 `routes` 配置
const routes = [
  // 主路由
  {
    path: "/",
    component: Main,
    redirect: '/home',//重定向
    name: 'Main',
    children: [
      // { path: 'home', name: 'home', component: Home },
      // { path: 'user', name: 'user', component: User },
      // { path: 'mall', name: 'mall', component: Mall },
      // { path: 'page1', name: 'page1', component: PageOne },
      // { path: 'page2', name: 'page2', component: PageTwo },

    ]
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  }

]

// 不同的账号登录，会有不同的菜单权限
// 通过url输入地址来显示页面
// 对于菜单的数据在不同页面之间的数据通信

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
// 添加全局导航守卫
//全局前置路由守卫————初始化的时候被调用、每次路由from切换之前被调用
router.beforeEach((to, from, next) => {
  // token存不存在
  const token = Cookie.get('token')
  // token不存在 说明当前用户未登录并且当前的页面并不是登录页面时  应该跳转到登陆页面
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
    // 不能在登录的状态下反复登录
  } else if (token && to.name === "login") {
    //token 存在 说明用户登录，并且不能再返回到登录页面 
    // 此时跳转至首页
    next({ name: 'home' })
  } else {
    next()
  }
})
export default router


