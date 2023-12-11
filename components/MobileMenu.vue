<template>
  <div class="menu-mob">
    <nav>
      <ul class="menu-mob__list">
        <li class="menu-mob__list-item">
          <NuxtLink to="/furniture" @click="closeMenu">Мебель</NuxtLink>
        </li>
        <li class="menu-mob__list-item">
          <NuxtLink to="/things" @click="closeMenu">Одежда</NuxtLink>
        </li>
        <li class="menu-mob__list-item">
          <NuxtLink to="/sneakers" @click="closeMenu">Кроссовки</NuxtLink>
        </li>

        <li class="menu-mob__list-item">
          <NuxtLink to="/cart" class="menu-mob__list-item-link" @click="closeMenu">
            <img src="/assets/images/icons/cart-black.svg" alt="тележка" width="18" height="18">
            <span class="menu-mob__list-item-count" v-if="cartStore.cart.length">
              {{ cartStore.cart.length }}
            </span>
            <span class="menu-mob__list-item-text"> 1200 pуб.</span>
          </NuxtLink>
        </li>
        <li class="menu-mob__list-item">
          <NuxtLink to="#" class="menu-mob__list-item-link" @click="closeMenu">
            <img src="/assets/images/icons/heart-black.svg" alt="избранное" width="18" height="18">
            <span class="menu-mob__list-item-text"> Закладки</span>
          </NuxtLink>
        </li>
        <li class="menu-mob__list-item">
          <NuxtLink to="#" class="menu-mob__list-item-ink" @click="closeMenu">
            <img src="/assets/images/icons/profile-black.svg" alt="профайл" width="18" height="18">
            <span class="menu-mob__list-item-text"> Профиль</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import {useCartStore} from "../store/cartStore.ts";
const cartStore = useCartStore();
import { useHeaderStore } from "../store/headerStore.ts";
const headerStore = useHeaderStore();

const closeMenu = () => {
  headerStore.showMenu=false;
  debugger
}
</script>

<style scoped>

</style>