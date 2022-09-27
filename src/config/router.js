import authGuard from '@/utils/auth.guard';
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'full-layout',
    component: () => import('@/layouts/FullLayout.vue'),
    children: [
      {
        path: '/ativos',
        name: 'ativos',
        meta: {
          requiredAuth: true,
        },
        // route level code-splitting
        // this generates a separate chunk (ativos.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "ativos" */ '@/views/ActiveView.vue')
      },
      {
        path: '/corretoras',
        name: 'corretoras',
        meta: {
          requiredAuth: true,
        },
        component: () => import(/* webpackChunkName: "corretoras" */ '@/views/BrokerView.vue')
      },
      {
        path: '/aportes',
        name: 'aportes',
        meta: {
          requiredAuth: true,
        },
        component: () => import(/* webpackChunkName: "aportes" */ '@/views/ContributionView.vue')
      },
      {
        path: '/proventos',
        name: 'proventos',
        meta: {
          requiredAuth: true,
        },
        component: () => import(/* webpackChunkName: "proventos" */ '@/views/ProfitView.vue')
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          requiredAuth: true,
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/DashboardView.vue')
      },
    ]
  },
  {
    path: '/user/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/LoginView.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(authGuard);

export default router
