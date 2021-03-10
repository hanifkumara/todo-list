<template>
  <div class="wrapper-input">
    <label :for="[icon ? 'show' : forId]">{{name}}</label>
    <input :type="type" :placeholder="placeholder" :id="[icon ? 'show' : forId]" :name="name" :value="value" @input="activate">
    <div v-if="icon" class="icon-eye" @click="showPassword">
      <img :src="require(`@/assets/images/${icon}`)" alt="icon-eye">
    </div>
  </div>
</template>

<script>
import showPass from '@/mixins/showPassword.js'

export default {
  name: 'Input',
  mixins: [showPass],
  methods: {
    activate (value) {
      this.$emit('input', value)
    }
  },
  props: {
    forId: String,
    type: String,
    placeholder: String,
    name: String,
    icon: String,
    value: String,
    formValidation: String
  }
}
</script>

<style scoped>
.wrapper-input{
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  position: relative
}
.icon-eye{
  position: absolute;
  right: 15px;
  bottom: 10px;
}
label{
  font-size: 18px;
  font-weight: 400;
}
input{
  border: none;
  border-bottom: 1px solid;
  padding: 10px 15px;
}
input:focus{
  outline: none;
}
</style>
