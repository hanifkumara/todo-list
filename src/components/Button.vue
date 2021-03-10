<template>
  <div>
    <button :class="color">{{title}}</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: String,
    color: String
  }
}
</script>

<style lang="scss" scoped>

</style>
