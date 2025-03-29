import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'; // для глобальной регистрации компонентов
import router from '@/router/router';
/* import VIntersection from '@/directives/VIntersection'; */ //импорт для глобальной регистрации директивы
import directives from '@/directives';
import store from '@/store';

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
}) // глобальная регистрация компонентов циклом из @/components/UI

/* app.directive('intersection', VIntersection) */ // глобальная регистрация директивы

directives.forEach(directive => {
  app.directive(directive.name,directive)
})

app
  .use(store) 
  .use(router) // подобным образом подключаются любые библиотеки
  .mount('#app'); 
