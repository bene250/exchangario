import { createWebHistory, createRouter } from 'vue-router';
import HomePage from '../pages/Home-Page.vue';
import AboutPage from '../pages/About-Page.vue';
import FaqPage from '../pages/Faq-Page.vue';
import LoginPage from '../pages/Login-Page.vue';
import RegisterPage from '../pages/Register-Page.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/About',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/Faq',
    name: 'Faq',
    component: FaqPage,
  },
  {
    path: '/Register',
    name: 'Register',
    component: RegisterPage,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
