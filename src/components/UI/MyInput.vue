<template>
    <input :value="modelValue" 
    @input="updateInput" class="input" type="text">
</template>

<script>
export default{
  name: 'my-input',
  props:{
    modelValue: String
  },
  methods:{
    updateInput(event){
      this.$emit('update:modelValue', event.target.value) 
    }
  }
}
</script>

<style scoped>
.input{
  height: 30px;
  width: 414px;
  border: 2px solid  teal;
  padding: 10px 15px;
  margin-top: 10px;
  margin-right: 20px;
  border-radius: 5px;
  background-color: transparent;
}
</style>
