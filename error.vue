<template>
  <div class="error">
    <div class="error__wrap">
      <span>код ошибки:  </span>
    <span class="error__code">   {{error.statusCode}}</span>
    </div>
    <span class="error__text">Oooops.</span>
    <span class="error__message">{{error.message}}</span>
    <button @click="handlerBtn">GO HOME</button>
  </div>

</template>

<script setup>
 defineProps(['error']);
 const handlerBtn = () => {
clearError({redirect: '/'})
 }
</script>

<style lang="scss" scoped>
.error {
  padding: 30px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  &__wrap {
    margin-bottom: 30px;
    font-family: Arial;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
  &__code {
    font-size: 40px;
    color: darkcyan;
    font-family: MONOSPACE;
    font-weight: bold;

  }
  &__text {
    font-family: Arial;
    margin-bottom: 20px;
  }
  &__message {
    font-family: Arial;
    margin-bottom: 20px;
    color: #EF4003;
    font-size: 20px;
  }
}
</style>