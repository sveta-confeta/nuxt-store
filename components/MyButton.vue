<template>
  <!--  кнопка может быть или ссылкой или кнопкой-->
  <button v-if="type==='button'"
          class="my-button"
          :class="[{
            'my-button--primary': color ==='primary',
            'my-button--secondary': color ==='secondary',
            'my-button--lightgray': color ==='lightgray'
          }]">
    <slot/>
  </button>
  <NuxtLink :to="to" v-else
               class="my-button"
               :class="[{
            'my-button--primary': color ==='primary',
            'my-button--secondary': color ==='secondary',
            'my-button--lightgray': color ==='lightgray'
          }]">
    <slot/>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "button"
  },
  to: {
    type: String,
    required: false
  },
  color: {
    type: String,
    required: true
  },
})
</script>

<style lang="scss" scoped>
.my-button {
  padding: 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  min-height: 56px;

  &:hover {
    color: var(--link);
    opacity: 0.8;
  }

  &--primary {
    background: var(--gray);;
    color: #fff;
  }

  &--secondary {
    background: rgba(249, 249, 249, 0.15);
    color: #fff;
  }

  &--lightgray {
    background: #F9F9F9;
    color: var(--black);
  }
}
</style>