<template>
    <form @submit.prevent>
      <my-input 
        v-model="post.title"
        placeholder= "название"
        type="text"/> 
      <my-input 
        v-model="post.body"  
        placeholder= "описание" 
        type="text"/>
      <my-button @click="createPost"
      style="align-self: flex-end; margin-top: 10px;"
      >Создать</my-button>
    </form>
</template>

<script> 
  export default{
    data() {
      return {
        post: {
          title: '',
          body: '' 
        }
      }
    },
    methods: {
      createPost(){
         this.post.id= Date.now();
        this.$emit('create', this.post)
        this.post = {
          title: '',
          body: ''
        }
      }
    }
  }
</script>

<style scoped>
form{
  display: flex;
  flex-direction: column;
}
</style>