<template>
  <div class="info-block" :class="styleProps">
    <h2 class="info-block__title">{{ contentInfo.title }} </h2>
    <span class="info-block__text">{{ contentInfo.description }}</span>
    <div class="info-block__link">
      <MyButton to="/" type="link" :color="color">
        View collection
      </MyButton>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  contentInfo: {
    type: Object,
    required: true,
  },
  styleProps: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
});
</script>

<style lang="scss" scoped>
.info-block {
  padding: 48px 60px;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &__title {
    display: block;
    color: inherit;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 20px;
  }

  &__text {
    display: block;
    color: inherit;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 20px;
  }

  &__link {
    text-decoration: none;
    margin-top: auto;

    &:hover {
      color: var(--link);
    }
  }
}
</style>