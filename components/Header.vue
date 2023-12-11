<template>
  <header class="header">
      <button class="menu-icon-wrap" type="button" @click="headerStore.menuHandler()">
        <div :class="{ 'menu-icon': true, 'active': headerStore.showMenu }"></div>
      </button>
      <MobileMenu v-show="headerStore.showMenu"/>
      <div class="header__wrap">
        <nav class="header__nav-left">
          <ul class="header__nav-list">
            <li class="header__nav-list-item">
              <NuxtLink to="/furniture">Мебель</NuxtLink>
            </li>
            <li class="header__nav-list-item">
              <NuxtLink to="/things">Одежда</NuxtLink>
            </li>
            <li class="header__nav-list-item">
              <a href="/sneakers">Кроссовки</a>
            </li>
          </ul>
        </nav>
      </div>
    <div class="header__logo header__logo">
      <NuxtLink to="/">ONLINE_STORE</NuxtLink>
    </div>
    <div class="header__right">
      <div class="header-cart">
        <NuxtLink to="/cart" class="header-cart__link">
          <img src="/assets/images/icons/cart.svg" alt="тележка" width="22" height="22">
          <span class="header-cart__count" v-if="cartStore.cart.length">
              {{ cartStore.cart.length }}
            </span>
          <span class="header-cart__text"> 1200 pуб.</span>
        </NuxtLink>
      </div>

      <div class="header-bookmarks">
        <NuxtLink to="#" class="header-bookmarks__link">
          <img src="/assets/images/icons/heart.svg" alt="избранное" width="22" height="22">
          <span class="header-bookmarks__text"> Закладки</span>
        </NuxtLink>
      </div>

      <div class="header-profile">
        <NuxtLink to="#" class="header-bookmarks__link">
          <img src="/assets/images/icons/profile.svg" alt="профайл" width="22" height="22">
          <span class="header-profile__text"> Профиль</span>
        </NuxtLink>
      </div>
    </div>
  </header>

</template>

<script setup>
import { useCartStore } from "../store/cartStore.ts";
const cartStore = useCartStore();
import { useHeaderStore } from "../store/headerStore.ts";
const headerStore = useHeaderStore();
</script>

<style lang="scss">
.header {
  background: darkcyan;
  position: absolute;
  z-index: 21;
  top: 0;
  left: 0;
  right: 0;
  min-height: 82px;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  align-items: center;
  padding: 0 40px;
  @media(max-width: 1121px){
    padding: 0;
  }
  &__wrap {
    width: 100%;
    display: flex;
    border: none;
    @media(max-width: 1121px){
      display: none;
    }
  }
  &__logo {
   justify-self: center;
    transition: 0.5s;
    &:hover {
      scale: 1.1;
      transition: 0.5s;
    }
  & a {
     color: white;

   };
  }
  &__nav-list {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-top: 4px;
    &-item {
      & a {
        font-family: PTRootUI, Arial, Helvetica, sans-serif;
        font-weight: 500;
        color: white;
        text-transform: uppercase;
        font-size: 18px;
        font-style: normal;
        line-height: 110%;
        &.router-link-active {
          color:orange;
        }
        @media(max-width: 1500px){
          font-size: 15px;
        }
        @media(max-width: 1121px){
          display: none;
        }
      }
    }

  }
  &__right {
    justify-self: end;
    display: flex;
    align-items: center;
    gap: 20px;
    @media(max-width: 1121px){
      display: none;
    }
  }
  &-cart {
    &__link {
      display: flex;
      align-items: center;
      gap: 10px;
    }
     &__text {
       color: #fff;
       margin-left: 5px;
       opacity: 0.7;
     }
  }
  &-bookmarks {
    &__link {
      display: flex;
      align-items: center;
    }
    &__text {
      color: #fff;
      margin-left: 5px;
      opacity: 0.7;
    }
  }

  &-profile {
    &__link {
      display: flex;
      align-items: center;
    }
    &__text {
      color: #fff;
      margin-left: 5px;
      opacity: 0.7;
      margin-top: 2px;
    }
  }

}
.menu-icon-wrap {
  display: none;
  @media(max-width: 1121px){
    display: block;
    cursor: pointer;
    margin: 0 20px;
    outline: none;
    border: none;
    background: transparent;
  }
}
.menu-icon {
  position:relative;
  width:23px;
  height:3px;
  background-color:#ffffff;
  border-radius:5px;
  &::before {
    position:absolute;
    left:0;
    top:-9px;
    content:'';
    width:23px;
    height:3px;
    background-color:#ffffff;
    border-radius:5px;
    transition:top 0.2s ease-in, top 0.2s linear 0.2s;
  }
  &::after {
    position:absolute;
    left:0;
    top:9px;
    content:'';
    width:23px;
    height:3px;
    background-color:#ffffff;
    border-radius:5px;
    transition:top 0.2s ease-in, top 0.2s linear 0.2s;
  }
  &.active {
    background:transparent !important;
  }
  &.active::before {
    background:#ffffff;
    transform:rotate(45deg);
    top:0;
    transition:top 0.2s linear, transform 0.2s ease-in 0.2s;
  }
  &.active::after {
    background:#ffffff;
    transform:rotate(-45deg);
    top:0;
    transition:top 0.2s linear, transform 0.2s ease-in 0.2s;
  }
}
.menu-mob {
  position: absolute;
  z-index: 20;
  top: 82px;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 20px;
  background: #ffffff;
  height: 100vh;
  &.active {
    display: block !important;
  }
  &__list {
    margin-bottom: 28px;
    &-item {
      padding: 16px 0;
      &:not(:last-child){
        border-bottom: 1px solid #F3F5F4;
      }
      & a {
        font-family: GraphikLCG, Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        color: #0F181C;;
        &.active {
          color: #EF4003;
        }
      }
      &-text {
        color: #0F181C;
      }
    }
  }
}
</style>