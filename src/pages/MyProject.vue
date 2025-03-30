<template>
  <div class="projects-wrapper">
    <div class="my-project-part">
      <div class="my-project-header-container">
        <div class="my-project-header-text">
          <p>МОЙ ПРОЕКТ</p>
          <h1>{{ projectInfo[receivedId]?.name || 'Загрузка...' }}</h1> <!-- Используем условный доступ -->
        </div>
        <my-button-type1>ПРЕДЛОЖЕНИЯ</my-button-type1>
      </div>
      <div class="my-project-description">
        <p>КАТЕГОРИЯ: {{ projectInfo[receivedId]?.project_category || 'Загрузка...' }}, ...</p>
        <p>{{ projectInfo[receivedId]?.description
 || 'Загрузка...' }}</p>
      </div>
      <div class="my-project-cards">
        <div class="grid-item">
          <p class="grid-item-header">Объем рынка</p>
          <p class="grid-item-value">{{receivedId===0?analytics1.market_volume :  analytics2.market_volume}}МЛН</p>
        </div>
        <div class="grid-item">
          <p class="grid-item-header">Кол-во конкурентов</p>
          <p class="grid-item-value">{{receivedId===0?analytics1.found_enemies :  analytics2.found_enemies  }}</p>
        </div>
        <div class="grid-item">
          <p class="grid-item-header">Концентрация рынка</p>
          <p class="grid-item-value">{{receivedId===0?analytics1.market_concentration :  analytics2.market_concentration    }}%</p>
        </div>
        <div class="grid-item">
          <p class="grid-item-header">Market Potential</p>
          <p class="grid-item-value">{{receivedId===0?analytics1.market_potential :  analytics2.market_potential  }}МЛРД</p>
        </div>
        <div class="grid-item">
          <p class="grid-item-header">Available Market</p>
          <p class="grid-item-value">{{receivedId===0?analytics1.available_market :  analytics2.available_market}}%</p>
        </div>
        <div class="grid-item">
          <p class="grid-item-header">Demand Growth</p>
          <p class="grid-item-value">{{receivedId===0?analytics1.demand_growth :  analytics2.demand_growth  }}</p>
        </div>
        <div class="grid-item">
          <p class="grid-item-header">Purchasing Power</p>
          <p class="grid-item-value">{{receivedId===0?analytics1.market_potential :  analytics2.market_potential  }}%</p>
        </div>
        <div class="grid-item">
          <p class="grid-item-header">Customer Preferences</p>
          <p class="grid-item-value">{{receivedId===0?analytics1.customer_preferences :  analytics2.customer_preferences  }}</p>
        </div>
        <div class="grid-item">
          <p class="grid-item-header">Market Penetration Rate</p>
          <p class="grid-item-value">{{receivedId===0?analytics1.market_penetration_rate :  analytics2.market_penetration_rate  }}%</p>
        </div>
      </div>
      <div class="my-project-media block-style">
        <div class="block-header">
          <div class="block-header-cont">
            <p class="block-header-title">Медиаданные</p>
            <div class="block-header-rigth">
              <my-button-type1 style="margin-left: 30px;">TG</my-button-type1>
              <my-button-type1>VK</my-button-type1>
            </div>
          </div>
          <div class="line"></div>
        </div>
        <div class="subblock" style="height: 121px;">
          <div class="subblock-h">Популярное</div>
          <div class="tegs" style="width: 220px;">
            <div class="tegs-item">
              <p class="teg-title">DNS</p>
              <p class="teg-numb">2.43K</p>
            </div>
            <div class="tegs-item">
              <p class="teg-title">М. ВИДЕО</p>
              <p class="teg-numb">2.43K</p>
            </div>
            <div class="tegs-item">
              <p class="teg-title">ЭЛЬДОРАДО</p>
              <p class="teg-numb">2.43K</p>
            </div>
          </div>
          <div class="tegs" style="width: 153px;">
            <div class="tegs-item">
              <p class="teg-title">INDEX IQ</p>
              <p class="teg-numb">2.43K</p>
            </div>
            <div class="tegs-item">
              <p class="teg-title">CM STORE</p>
              <p class="teg-numb">2.43K</p>
            </div>
          </div>
        </div>
        <div class="subblock" style="height: 100px;">
          <div class="subblock-h">Возможно интересно</div>
          <div class="tegs interes">
            <div class="tegs-item item-interes">
            </div>
            <div class="tegs-item item-interes">
            </div>
            <div class="tegs-item item-interes">
            </div>
            <div class="tegs-item item-interes">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-project-part">
      <div class="rec block-style">
        <div class="block-header">
          <div class="block-header-cont">
            <p class="block-header-title">Рекомендации</p>
            <p class="block-header-rigth">Сгенерировано AI</p>
          </div>
          <div class="line"></div>
        </div>
        <table class="my-table">
        <thead>
            <tr>
                <th></th>
                <th>OZON</th>
                <th>Я.Маркет</th>
                <th>WB</th>
            </tr>
        </thead>
          <tbody>
              <tr>
                  <td>Объем рынка</td>
                  <td>Ячейка 2</td>
                  <td>Ячейка 3</td>
                  <td>Ячейка 4</td>
              </tr>
              <tr>
                  <td>Конц.рынка</td>
                  <td>Ячейка 6</td>
                  <td>Ячейка 7</td>
                  <td>Ячейка 8</td>
              </tr>
              <tr>
                  <td>Объем товаров</td>
                  <td>Ячейка 10</td>
                  <td>Ячейка 11</td>
                  <td>Ячейка 12</td>
              </tr>
              <tr>
                  <td>Ср.цена</td>
                  <td>Ячейка 14</td>
                  <td>Ячейка 15</td>
                  <td>Ячейка 16</td>
              </tr>
              <tr>
                  <td>Ср.конверсия</td>
                  <td>Ячейка 18</td>
                  <td>Ячейка 19</td>
                  <td>Ячейка 20</td>
              </tr>
              <tr>
                  <td>Объем рынка</td>
                  <td>Ячейка 22</td>
                  <td>Ячейка 23</td>
                  <td>Ячейка 24</td>
              </tr>
          </tbody>
        </table>
        <div class="block-subheader">
          <p>Эффективность медиа</p>
          <p>Просмотры в месяц</p>
        </div>
        <img :src="imageSrc" alt="">
      </div>
      <div class="enemies block-style">
        <div class=""></div>
        <my-input 
          v-model="inputpostFetch"  
          placeholder= "Введите ID товара / услуги" 
          type="text"></my-input>
        <my-button-type1 @click="postFetch">AI ADVICE</my-button-type1>
      </div>
    </div>
  </div>
</template>


<style scoped>
.enemies{
  height: 120px;
}
.my-project-media{
  flex-direction: column;
  justify-content: space-between;
  display: flex;
}
.item-interes{
  width: 84px;
}
.interes{
  height: 72px;
  display: flex;
  justify-content:space-between;
}
.teg-title{
  font-size: 10px;
}
.tegs-item{
  height: 44px;
  background-color: #2D2D2D;
  padding: 10px;
  border-radius: 5px;
  font-size: 8px;
}
.tegs{
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.subblock{
  flex-direction: column;
  justify-content: space-between;
  display: flex;
}
.block-header-rigth{
  width: 135px;
  display: flex;
  justify-content: space-between;
}
.block-subheader{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.my-table {
    width: 100%; /* Ширина таблицы */
    border-collapse: collapse; /* Убираем двойные границы */
}

.my-table th, .my-table td {
    padding: 5px; /* Отступы внутри ячеек */
    text-align: center; /* Выравнивание текста по центру */
}

.my-table th {
    background-color: #212121; /* Цвет фона заголовков */
}

.my-table tr:nth-child(even) {
    background-color: #22907E; /* Цвет фона для четных строк */
}
.line{
  height: 0.3px;
  background-color: #929292;
  width: 100%;
}
.block-header-cont{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.block-style{
  border: solid 1px #5F5F5F;
  border-radius: 8px; /* Закругленные углы */
  padding: 10px 25px;
}
.rec{
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 576px;
  height: 540px;
}
.projects-wrapper{
  display: flex;
  justify-content: space-between;
  padding: 60px 50px 30px 80px;
  font-family: 'Roboto-Reg', sans-serif;
}
.my-project-part{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
.my-project-header-container{
  display: flex;
  justify-content: space-between;
  width: 405px;
}
.my-project-description p{
  width: 405px;
  color: #8F8F8F;
  font-size: 15px;
}
h1{
  font-size: 40px;
}
.my-project-cards{
  display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 колонки одинаковой ширины */
    grid-template-rows: repeat(3, 1fr); /* 3 строки одинаковой высоты */
    gap: 10px; /* Промежуток между элементами */
    width: 405px; /* Ширина контейнера */
    height: 195px;  
}
.grid-item {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px; /* Закругленные углы */
    width: 130px;
    height: 60px;
    border: solid 1px #5F5F5F;
    padding: 5px 10px;
    transition-duration: 0.5s;
}
.grid-item:hover {
  background-color: #303030;
}
.grid-item-header{
  font-family: 'Montserrat-Med', sans-serif;
  color:#fff;
  font-size: 8px;
}
.grid-item-value{
  font-family: 'Montserrat-Semi-Bold', sans-serif;
  color:#24E8C9;
  font-size: 24px;
}
.my-project-media{
  height: 300px;
}
</style>


<script>
import axios from 'axios';
import EventBus from '../components/eventBus';

export default {
  data() {
    return {
      inputpostFetch:'f',
      projectInfo: {},
      imageSrc: `../../public/icons/0.svg`,
      analytics1: {},
      analytics2: {},
      dialogVisible: false,
      isPostsLoading: false,
      searchQuery: '',
      selectedSort: '',
      sortOptions: [
        {value: 'title', name: 'по названию'},
        {value: 'body', name: 'по описанию'}
      ],
      receivedId: null,
    }
  },
  created() {
    EventBus.$on('buttonClicked', (id) => {
      this.receivedId = id;
      console.log(this.receivedId);
    });
  },
  beforeDestroy() {
    EventBus.$off('buttonClicked');
  },
  methods: {
    async fetchProjectInfo() {
      try {
        this.isPostsLoading = true;        
        const response = await axios.get('http://192.168.20.83:8000/Projects');
        this.projectInfo = response.data;
        console.log(this.projectInfo[0]);
      } catch (e) {
        console.log(e);
      } finally {
        this.isPostsLoading = false;
      }
    },
    async fetchProjectAnalit() {
      try {
        this.isPostsLoading = true;        
        const response = await axios.get('http://192.168.20.83:8000/Analytics');
        this.analytics1 = response.data[0];
        this.analytics2 = response.data[1];
        console.log(response.data)
      } catch (e) {
        console.log(e);
      } finally {
        this.isPostsLoading = false;
      }
    },
    async postFetch() {
      await axios.post('http://192.168.20.83:8000/CollectingData', { data: this.inputpostFetch })
        .then(response => {
          console.log('Данные успешно отправлены:', response.data);
        })
        .catch(error => {
          console.error('Ошибка при отправке данных:', error);
        });
      //fetchInputResp();
    },
    async fetchInputResp(){
      try {
        this.isPostsLoading = true;        
        const response = await axios.get('http://192.168.20.83:8000/Analytics');
        this.analytics1 = response.data[0];
        this.analytics2 = response.data[1];
        console.log(response.data)
      } catch (e) {
        console.log(e);
      } finally {
        this.isPostsLoading = false;
      }
    }
  },
  mounted() {
    this.fetchProjectInfo(); // Убедитесь, что метод доступен
    this.fetchProjectAnalit(); // Убедитесь, что метод доступен
  },
}
</script>


