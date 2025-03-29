<template>
  <nav class="sidebar">
    <div class="sidebar__chapters">
      <img src="../../public/icons/logo.svg" alt="" style="display: block;">
      <div class="sidebar__chapter sidebar__chapter-integr">
          <nav-link 
              @click="$router.push('/')"
              class="sidebar__chapter-header">
              <div class="sidebar__chapter-header-icon">
                <img class="sidebar__chapter-icon"
                src="../../public/icons/integr.svg" alt="">
                <p class="sidebar__chapter-p">Интеграции</p>
              </div>
              <div class="sidebar__line"></div>
          </nav-link>
            <div class="chapter-list-group group1">
              <div class="chapter-list-group-item">
                <img src="../../public/icons/integrItem.svg" alt="" style="margin-right: 10px;">
                <p>OZON</p>
                <div class="circle"></div>
                <p>API</p>
              </div>
              <div class="chapter-list-group-item">
                <img src="../../public/icons/integrItem.svg" alt="" style="margin-right: 10px;">
                <p>Я.Маркет</p>
                <div class="circle"></div>
                <p>API</p>
              </div>
              <div class="chapter-list-group-item">
                <img src="../../public/icons/integrItem.svg" alt="" style="margin-right: 10px;">
                <p>WB</p>
                <div class="circle"></div>
                <p>API</p>
              </div>
            </div>
            <div class="chapter-list-group group2">
              <div class="chapter-list-group-item">
                <img src="../../public/icons/integrItem.svg" alt="" style="margin-right: 10px;">
                <p>TG</p>
                <div class="circle"></div>
                <p>API</p>
              </div>
              <div class="chapter-list-group-item">
                <img src="../../public/icons/integrItem.svg" alt="" style="margin-right: 10px;">
                <p>VK</p>
                <div class="circle"></div>
                <p>API</p>
              </div>
            </div>
      </div>
      <div class="sidebar__chapter sidebar__chapter-projects">
          <nav-link 
              @click="$router.push('/')"
              class="sidebar__chapter-header">
              <div class="sidebar__chapter-header-icon">
                <img class="sidebar__chapter-icon"
                src="../../public/icons/projects.svg" alt="">
                <p>Мои проекты</p>
              </div>
              <button id="add-button" class="add-button">
                <img src="../../public/icons/plus.svg" alt="add project">
              </button>
          </nav-link>
          <!--проекты выводятся динамически, но пока статика-->
          <div class="chapter-list">
            <div class="chapter-list-cont">
                <my-button-type1 
                class="chapter-list-item"
                @click="$router.push('/MyProject')">ПРОЕКТ 1
                </my-button-type1>
                <my-button-type1 
                class="chapter-list-item">ПРОЕКТ 2
                </my-button-type1>
            </div>
          </div>
      </div>
      <!--<my-button @click="$router.push('/store')" style="margin-left: 20px;">Store</my-button>-->
    </div>
    <div class="sidebar__account-user">
      <div class="sidebar__line" style="margin-bottom: 10px;"></div>
      <div class="sidebar__account-user-content">
        <img src="../../public/icons/user.svg" alt="" style="display: block;">
        <div class="sidebar__account-user-content-text">
          <p>Дарья Короткевич</p>
          <p style="font-size: 16px; color:#999999">платная подписка</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import AccountUser from '@/components/AccountUser.vue';
import NavLink from '@/components/UI/NavLink.vue';
export default {
  components: {
    AccountUser, 
    NavLink
  }
}
</script>

<style>

  .sidebar{
    font-size: 20px;
    width: 254px;
    background-color: #171717;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
  }
  .sidebar__btns{
    margin-left: auto;
  }
  .add-button{
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }
  .add-button img{
    width: 11px;
    height: auto;
  }
  .sidebar__chapter-header{
    display: flex;
  }
  .sidebar__chapter{
    flex-direction: column;
    justify-content: space-between;
    display:flex;
  }
  .sidebar__chapters{
    height: 430px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .sidebar__chapter-projects{
    height: 65px;
  }
  .sidebar__chapter-integr{
    height: 250px;
  }
  .chapter-list-cont{
    display: flex;
    justify-content: space-between;
  }
  .sidebar__chapter-header-icon{
    display: flex;
    align-items: center;
  }
  .sidebar__chapter-icon{
    display: block;
    margin-right: 10px;
  }
  .chapter-list-group{
    padding: 10px;
    background-color: #232323;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 10px;
  }
  .group1{
    height: 115px;
  }
  .group2{
    height: 78px;
  }
  .chapter-list-group-item{
    display: flex;
    align-items: center;
  }
  .circle{
    background-color: #8F8F8F;
    border-radius: 100%;
    width: 6px;
    height: 6px;
    margin: 0 10px;
  }
  .sidebar__chapter-p{
    margin-right: 10px;
  }
  .sidebar__line{
    height: 1px;
    width: 100%;
    background-color: #454545;
  }
  .sidebar__account-user{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .sidebar__account-user-content{
    display: flex;
    font-family: 'Roboto-Reg', sans-serif;
    font-size: 18px;
    justify-content: space-between;
  }
</style>