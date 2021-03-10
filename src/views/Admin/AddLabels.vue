<template>
  <div>
    <div class="wrapper-card mt-2">
      <h3>Add Label</h3>
      <Input name="Label" placeholder="Please fill title for label" type="text" forId="label"/>
      <div class="d-flex justify-content-end">
        <Button title="Add Label" color="btn btn-success"/>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

export default {
  name: 'Add Labels',
  components: {
    Input,
    Button
  }
}
</script>

<style scoped>
.wrapper-card{
  width: 40%;
}
</style>
