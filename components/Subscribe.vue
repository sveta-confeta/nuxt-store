<template>
  <div class="subscribe">
    <div class="subscribe__wrap">
      <h3 class="subscribe__title">Join the club and get the benefits</h3>
      <span class="subscribe__description">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</span>
      <ul class="subscribe-checks">
        <li class="subscribe-checks__item">
<!--          <img src="./../assets/icons/check.svg" alt="check" width="16" height="16">-->
          <span class="subscribe-checks__item-text">Exclusive offers</span>
        </li>
        <li class="subscribe-checks__item">
<!--          <img src="./../assets/icons/check.svg" alt="check" width="16" height="16">-->
          <span class="subscribe-checks__item-text">Free events</span>
        </li>
        <li class="subscribe-checks__item">
<!--          <img src="./../assets/icons/check.svg" alt="check" width="16" height="16">-->
          <span class="subscribe-checks__item-text">Large discounts</span>
        </li>
      </ul>
<!--      <SubscribeForm type="primary"/>-->
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.subscribe {
  background-image: url("./../assets/images/sign-up.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 444px;
  position: relative;

  &__wrap {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    color: #ffffff;
    margin-bottom: 12px;
  }

  &__description {
    display: block;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: #ffffff;
    margin-bottom: 30px;
    text-align: center;
  }
  &-checks {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 28px;
    margin-bottom: 40px;
    &__item {
      display: flex;
      align-items: center;
      gap: 8px;
      &-text {
        font-size: 16px;
        font-style: normal;
        font-weight: 200;
        line-height: 150%;
        color: #ffffff;
      }
    }
  }
}
</style>