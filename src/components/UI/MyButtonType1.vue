<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default{
  name: 'my-button-type1'
}
</script>

<style scoped>
.btn{
  padding: 3px 10px;
  background-color: #232323;
  color: #8F8F8F;
  border: solid 2px #313131;
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  height: 25px;
}
</style>