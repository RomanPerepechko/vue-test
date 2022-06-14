<template>
    <button @click="onClick" class="custom-button">{{ title }}</button>
</template>

<script>
export default {
  props: {
    title: String,
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>
.custom-button {
    width: 200px;
    height: 40px;
    border: 1px solid #000;
    background-color: aliceblue;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
