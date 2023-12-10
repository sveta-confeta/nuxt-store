<template>
  <div class="about-brand">
    <h3 class="about-brand__title">
      What makes our brand different:
    </h3>
    <ul class="about-brand-list container">
      <li  class="about-brand-list__item">
        <img src="assets/images/icons/aboutBrend/car.svg" alt="car"  width="24"
             height="24" >
        <h4 class="about-brand-list__item-title">Next day as standard</h4>
        <span class="about-brand-list__item-text">Order before 3pm and get your order the next day as standard</span>
      </li>
      <li  class="about-brand-list__item">
        <img src="assets/images/icons/aboutBrend/clock.svg" alt="clock"  width="24"
             height="24" >
        <h4 class="about-brand-list__item-title">Made by true artisans</h4>
        <span class="about-brand-list__item-text">Handmade crafted goods made with
        real passion and craftmanship</span>
      </li>
      <li  class="about-brand-list__item">
        <img src="assets/images/icons/aboutBrend/folder.svg" alt="folder"  width="24"
             height="24" >
        <h4 class="about-brand-list__item-title">Unbeatable prices</h4>
        <span class="about-brand-list__item-text">For our materials and quality you won’t find better prices anywhere</span>
      </li>
      <li  class="about-brand-list__item">
        <img src="assets/images/icons/aboutBrend/nature.svg" alt="leaf"  width="24"
             height="24" >
        <h4 class="about-brand-list__item-title">Recycled packaging</h4>
        <span class="about-brand-list__item-text">We use 100% recycled packaging to ensure our footprint is manageable</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.about-brand {
  padding: 80px 0;

  &__title {
    display: block;
    color:#2A254B;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    margin-bottom: 36px;
    text-align: center;
  }
  &-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 22px;
    min-height: 244px;
    &__item {
      padding: 25px 35px 35px;
      display: flex;
      flex-direction: column;
      background: #F9F9F9;
      transition: 0.5s;
      cursor: pointer;
      &:hover {
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        transition: 0.5s;
      }
      &-title {
        font-family: MONOSPACE;
        font-size: 30px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
        margin: 10px 0 20px 0;
      }
      &-text {
        font-family: Arial;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%;
      }
    }
  }
}
</style>