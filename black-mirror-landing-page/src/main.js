import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import MeetMe from './meet-me.vue';
import StartPage from './start-page.vue';
import GirlFriendInAComa from './girlfriend-in-a-coma.vue';
import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
    { path: '/', component: StartPage },
    { path: '/girlfriend-in-a-coma', component: GirlFriendInAComa },
    { path: '/meet-me', component: MeetMe },
  ];
  
  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  });
createApp(App)
    .use(router)
    .mount('#app');
