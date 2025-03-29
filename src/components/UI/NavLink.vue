<template>
  <a href="" class="nav-l"><slot></slot></a>
</template>

<script>
export default{
  name: 'nav-link'
}
</script>

<style scoped>
.nav-l{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>