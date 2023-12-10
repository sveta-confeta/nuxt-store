<template>
  <header class="header">
      <button class="menu-icon-wrap" type="button">
        <div class="menu-icon"></div>
      </button>

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
              <a href="#">Кроссовки</a>
            </li>
          </ul>
        </nav>
      </div>
    <div class="header__logo header__logo">
      <NuxtLink to="/">ONLINE_STORE</NuxtLink>
    </div>
    <div class="header__right">
      <a href="#" class="header__profile">
        <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.97352 1.57895C10.9364 1.57895 12.5276 3.11061 12.5276 5C12.5276 6.8894 10.9364 8.42105 8.97352 8.42105C7.01065 8.42105 5.41943 6.8894 5.41943 5C5.41943 3.11061 7.01065 1.57895 8.97352 1.57895ZM14.168 5C14.168 2.23858 11.8423 0 8.97352 0C6.10471 0 3.77908 2.23858 3.77908 5C3.77908 7.76142 6.10471 10 8.97352 10C11.8423 10 14.168 7.76142 14.168 5Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4189 14.418C10.5914 13.0872 6.40864 13.0872 2.58109 14.418C2.01982 14.6131 1.64516 15.1307 1.64516 15.7109V17.1155C1.64516 17.896 2.35528 18.4956 3.14899 18.3852L4.19577 18.2396C7.05076 17.8426 9.94923 17.8426 12.8042 18.2396L13.851 18.3852C14.6447 18.4956 15.3548 17.896 15.3548 17.1155V15.7109C15.3548 15.1307 14.9802 14.6131 14.4189 14.418ZM2.02776 12.9097C6.21313 11.4546 10.7869 11.4546 14.9722 12.9097C16.1883 13.3325 17 14.4538 17 15.7109V17.1155C17 18.8706 15.4032 20.2189 13.6183 19.9706L12.5716 19.8251C9.8709 19.4495 7.1291 19.4495 4.42843 19.8251L3.38165 19.9706C1.59684 20.2189 0 18.8706 0 17.1155V15.7109C0 14.4538 0.811731 13.3325 2.02776 12.9097Z" fill="white"/>
        </svg>
      </a>
    </div>
  </header>

</template>

<script setup>

</script>

<style lang="scss" scoped>
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
  &.active-bg {
    background: #0F181C;;
  }
  @media(max-width: 900px){
    min-height: 68px;
  }

  &__catalog {
    font-family: PTRootUI,  Arial, Helvetica, sans-serif;
    color:#ffffff;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    text-transform: uppercase;
    padding: 31px 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background: rgba(217, 217, 217, 0.20);
    @media(max-width: 1500px){
      font-size: 16px;
    }
    @media(max-width: 900px){
      display: none;
    }
  }
  &__wrap {
    width: 100%;
    display: flex;
    border: none;
    @media(max-width: 900px){
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
        @media(max-width: 900px){
          display: none;
        }
      }
    }

  }
  &__profile {
    padding: 0 40px;
    @media(max-width: 900px){
      display: none;
    }
  }
  &__right {
    justify-self: end;
  }

}
.menu-icon-wrap {
  display: none;
  @media(max-width: 900px){
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
  display: none;
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  padding: 100px 20px 20px 20px;
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
    }
  }
  &__contacts {
    margin-bottom: 30px;
    &-item {
      margin-bottom: 24px;
      &-title {
        font-family: GraphikLCG, Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 120%;
        color: #0F181C;;
        display: block;
        margin-bottom: 16px;
      }
      &-link {
        font-family: GraphikLCG, Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        color: #0F181C;;
      }
    }
  }
}
</style>