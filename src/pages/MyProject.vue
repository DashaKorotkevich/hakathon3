<template>
  <div class="projects-wrapper">
    <div class="my-project-part">
      <div class="my-project-header-container">
        <div class="my-project-header-text">
          <p>МОЙ ПРОЕКТ</p>
          <h1>ПРОЕКТ 1</h1>
        </div>
        <my-button-type1>ПРЕДЛОЖЕНИЯ</my-button-type1>
      </div>
      <div class="my-project-description">
        <p>КАТЕГОРИЯ: Смарт часы, ...</p>
        <p>Магазин, специализирующийся на продаже электронных устройств на торговых площадках</p>
      </div>
      <div class="my-project-cards">
        <div class="grid-item">
          <p class="grid-item-header">Объем рынка</p>
          <p class="grid-item-value">{{  }}%</p>
        </div>
        <div class="grid-item">
          <p class="grid-item-header">Найденные конкуренты</p>
          <p class="grid-item-value">{{  }}</p>
        </div>
        <div class="grid-item">
          <p class="grid-item-header">Концентрация рынка</p>
          <p class="grid-item-value">{{  }}%</p>
        </div>
        <div class="grid-item">
          <p class="grid-item-header">Market Potential</p>
          <p class="grid-item-value">{{  }}</p>
        </div>
        <div class="grid-item">
          <p class="grid-item-header">Available Market</p>
          <p class="grid-item-value">{{  }}%</p>
        </div>
        <div class="grid-item">
          <p class="grid-item-header">Demand Growth</p>
          <p class="grid-item-value">{{  }}</p>
        </div>
        <div class="grid-item">
          <p class="grid-item-header">Purchasing Power</p>
          <p class="grid-item-value">{{  }}%</p>
        </div>
        <div class="grid-item">
          <p class="grid-item-header">Customer Preferences</p>
          <p class="grid-item-value">{{  }}%</p>
        </div>
        <div class="grid-item">
          <p class="grid-item-header">Market Penetration Rate</p>
          <p class="grid-item-value">{{  }}</p>
        </div>
      </div>
      <div class="my-project-media">
        
      </div>
    </div>
    <div class="my-project-part"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px; /* Закругленные углы */
    width: 130px;
    height: 60px;
    border: solid 1px #5F5F5F;
    padding: 5px 10px;
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
  border: solid 1px #5F5F5F;
  border-radius: 8px; /* Закругленные углы */
  padding: 10px 24px 50px 24px;
}
</style>