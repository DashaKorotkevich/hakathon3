<template>
  <div v-if="posts.length > 0">
    <h3>Список пользователей</h3>
    <transition-group name="user-list">
      <post-item 
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove',post)"
    />
    </transition-group>
  </div>
  <h2 v-else style="color: red">
    Список пользователей пуст
  </h2>
</template> 

<script>
import PostItem from './PostItem.vue';
 export default {
  components: {
    PostItem,
  },
  props:{
    posts: {
      type: Array,
      required: true
    }
  }
 }
</script>

<style scoped>

.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}

.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>