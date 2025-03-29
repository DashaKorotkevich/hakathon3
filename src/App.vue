<template>
  <sidebar></sidebar>
  <div class="app">
    <router-view></router-view><!--Сюда встраиваются компоненты, которые мы прописали в router.js-->
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
export default {
  components: {
    Sidebar
  }
}
</script>

<style>
*{
  color:#fff;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
            text-decoration: none; /* Убираем подчеркивание */
            color: inherit; /* Устанавливаем цвет текста как у родителя */
            cursor: pointer; /* Устанавливаем курсор как указатель */
        }
.app{
  background-color: #212121;
  width: 100%;
  margin-left: 250px;
}
.sidebar{
  position: fixed;
}
@font-face {
      font-family: 'Roboto'; /* Имя шрифта, которое вы будете использовать в CSS */
      src: url('../public/fonts/roboto/Roboto-Medium.ttf');
      font-weight: normal; /* Нормальный вес шрифта */
      font-style: normal; /* Нормальный стиль шрифта */
      font-size: 18px;
  }
@font-face {
      font-family: 'Roboto-Reg'; /* Имя шрифта, которое вы будете использовать в CSS */
      src: url('../public/fonts/roboto/Roboto-Regular.ttf');
      font-weight: normal; /* Нормальный вес шрифта */
      font-style: normal; /* Нормальный стиль шрифта */
  }
  @font-face {
      font-family: 'Montserrat-Med'; /* Имя шрифта, которое вы будете использовать в CSS */
      src: url('../public/fonts/static/Montserrat-Medium.ttf');
      font-weight: normal; /* Нормальный вес шрифта */
      font-style: normal; /* Нормальный стиль шрифта */
      font-size: 8px;
  }
  @font-face {
      font-family: 'Montserrat-Semi-Bold'; /* Имя шрифта, которое вы будете использовать в CSS */
      src: url('../public/fonts/static/Montserrat-SemiBold.ttf');
      font-weight: normal; /* Нормальный вес шрифта */
      font-style: normal; /* Нормальный стиль шрифта */
      font-size: 27px;
  }
</style>