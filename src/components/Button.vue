<template>
  <div>
    <button :class="color" :type="type">{{title}}</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: String,
    color: String,
    type: String
  }
}
</script>

<style scoped>
button{
  margin: 0 5px;
}
</style>
