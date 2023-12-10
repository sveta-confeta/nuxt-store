<template>
  <footer class="footer" xmlns="http://www.w3.org/1999/html">
    <div class="footer__content">
      <div class="footer__top">
        <div class="footer__info">
          <a class="footer__info-logo" href="/">
           Online_store
          </a>
          <span class="footer__info-text">Широкий выбор товаров, одежды <br>и мебели</span>

        </div>
        <nav class="footer__nav footer__nav1">
          <span class="footer__nav-title">Каталог</span>
          <ul class="footer__nav-list">
            <li class="footer__nav-list-item"><a href="#">Низкорамные прицепы</a></li>
            <li class="footer__nav-list-item"><a href="#">Высокорамные прицепы</a></li>
            <li class="footer__nav-list-item"><a href="#">Передний заезд</a></li>

          </ul>
        </nav>
        <nav class="footer-nav-mob">
          <ul class="footer-nav-mob__list">
            <li class="footer-nav-mob__list-item">
              <div class="footer-nav-mob__list-item-wrapper">
                <span class="footer-nav-mob__list-item-title">Каталог</span>
                <span class="footer-nav-mob__list-item-title-arrow"></span>
              </div>
              <ul class="footer-nav-mob__accordion footer-nav-mob__accordion--hidden">
                <li class="footer-nav-mob__accordion-link"><a href="#">Низкорамные прицепы</a></li>
                <li class="footer-nav-mob__accordion-link"><a href="#">Высокорамные прицепы</a></li>
                <li class="footer-nav-mob__accordion-link"><a href="#">Передний заезд</a></li>
              </ul>
            </li>
            <li class="footer-nav-mob__list-item">
              <div class="footer-nav-mob__list-item-wrapper">
                <span class="footer-nav-mob__list-item-title">О Компании</span>
                <span class="footer-nav-mob__list-item-title-arrow"></span>
              </div>
              <ul class="footer-nav-mob__accordion footer-nav-mob__accordion--hidden">
                <li class="footer-nav-mob__accordion-link"><a href="#">История</a></li>
                <li class="footer-nav-mob__accordion-link"><a href="#">Производство</a></li>
                <li class="footer-nav-mob__accordion-link"><a href="#">Мфтериалы</a></li>
              </ul>
            </li>
            <li class="footer-nav-mob__list-item">
              <div class="footer-nav-mob__list-item-wrapper">
                <span class="footer-nav-mob__list-item-title">Услуги</span>
                <span class="footer-nav-mob__list-item-title-arrow"></span>
              </div>
              <ul class="footer-nav-mob__accordion footer-nav-mob__accordion--hidden">
                <li class="footer-nav-mob__accordion-link"><a href="#">Ремонт</a></li>
                <li class="footer-nav-mob__accordion-link"><a href="#">Запчасти</a></li>
                <li class="footer-nav-mob__accordion-link"><a href="#">Доставка</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <nav class="footer__nav footer__nav2">
          <span class="footer__nav-title">О Компании</span>
          <ul class="footer__nav-list">
            <li class="footer__nav-list-item"><a href="#">История</a></li>
            <li class="footer__nav-list-item"><a href="#">Производство</a></li>
            <li class="footer__nav-list-item"><a href="#">Материалы</a></li>
          </ul>
        </nav>

        <nav class="footer__nav footer__nav3">
          <span class="footer__nav-title">Услуги</span>
          <ul class="footer__nav-list">
            <li class="footer__nav-list-item"><a href="#">Pемонт</a></li>
            <li class="footer__nav-list-item"><a href="#">Запчасти</a></li>
            <li class="footer__nav-list-item"><a href="#">Доставка</a></li>
          </ul>
        </nav>
      </div>
      <div class="footer__center">
        <div class="footer__bottom-language language-select">
          <span class="language-select__title"> Язык:</span>
          <div class="language-select__select">
            <button class="language-select__select-selected" type="button" data-role="button">
              <span>RU</span>
            </button>
            <ul class="language-select__select-items" style="display: none">
              <li class="language-select__item-wrap">
                <button class="language-select__item" type="button" data-role="button" data-select="button">
                  <span>RU</span>
                </button>
              </li>
              <li class="language-select__item-wrap">
                <button class="language-select__item" type="button" data-role="button" data-select="button">
                  <span>FR</span>
                </button>
              </li>
              <li class="language-select__item-wrap">
                <button class="language-select__item" type="button" data-role="button" data-select="button">
                  <span>DE</span>
                </button>
              </li>
              <li class="language-select__item-wrap">
                <button class="language-select__item" type="button" data-role="button" data-select="button">
                  <span>EN</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__contact footer__contact--call">
          <span class="footer__contact-title">Позвонить нам:</span>
          <a class="footer__contact-link" href="tel:78007758685">+7 800 000 00 85</a>
        </div>
        <div class="footer__contact footer__contact--email">
          <span class="footer__contact-title">E-mail</span>
          <a class="footer__contact-link" href="#">info@store-test.ru</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

</script>

<style lang="scss" scoped>

.footer {;
  background: #0F181C;
  &__content {
    padding: 40px 116px 40px 40px;
    @media (min-width: 1920px) {
     margin: 0 auto;
      width: 1920px;;
    }
    @media (max-width: 1380px) {
      padding: 40px;
    }
    @media (max-width: 767px) {
      padding: 40px 20px 20px;
    }
  }

  &__top {
    display: grid;
    grid-template-columns: 35% 1fr 1fr 200px;
    grid-template-areas:
        "i n1 n2 n3";
    margin-bottom: 50px;
    @media (max-width: 1380px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-areas:
        "i i i"
        "n1 n2 n3";
    }
    @media (max-width: 985px) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "i i"
        "n1 n2"
        "n3 n3";
    }
    @media (max-width: 767px) {
      margin-bottom: 0;
    }

  }

  &__info {
    min-width: 304px;
    position: relative;
    grid-area: i;
    @media (max-width: 1380px) {
      margin-bottom: 100px;
    }
    @media (max-width: 767px) {
      margin-bottom: 40px;
    }
    &-logo {
      color: white;
      font-size: 25px;
      margin-bottom: 20px;
      text-transform: uppercase;
      display: block;
    }

    &-text {
      font-family: GraphikLCG, Arial, Helvetica, sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      color:  #ffffff;
      margin-bottom: 36px;
      display: block;
      @media (max-width: 767px) {
        font-size: 12px;
        margin-bottom: 20px;
      }
    }

    &-link {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      border: 1px solid  #ffffff;
      padding: 20px;
      width: max-content;
      max-width: 400px;
      @media (max-width: 767px) {
        padding: 12px;
        max-width: 250px;

      }

      span {
        font-family: PTRootUI, Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
        text-transform: uppercase;
        color:  #ffffff;
        @media (max-width: 767px) {
          font-size: 12px;
          line-height: normal;
        }

        img {
          width: 100%;
        }
      }

    }
  }

  &__nav1 {
    grid-area: n1;
  }

  &__nav2 {
    grid-area: n2;
    @media (max-width: 985px) {
      justify-self: end;
    }
  }

  &__nav3 {
    grid-area: n3;
    @media (max-width: 985px) {
      margin-top: 50px;
    }
  }

  &__nav {
    min-width: 201px;
    @media (max-width: 767px) {
      display: none;
    }

    &-title {
      font-family: GraphikLCG, Arial, Helvetica, sans-serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      color:  #ffffff;
      margin-bottom: 32px;
      display: block;
    }

    &-list {
      &-item {
        margin-bottom: 24px;

        a {
          font-family: GraphikLCG, Arial, Helvetica, sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 120%;
          color:  #ffffff;
        }
      }
    }
  }

  &__center {
    padding: 50px 0;
    display: grid;
    grid-template-columns: 35% 1fr 1fr 200px;
    @media (max-width: 1380px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 985px) {
      grid-template-columns: 1fr;
    }
    @media (max-width: 767px) {
      padding: 0;
    }

  }
  &__contact {
    @media (max-width: 767px) {
      order: 1;
    }

    &-title {
      font-family: GraphikLCG, Arial, Helvetica, sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 120%;
      color:  #ffffff;
      margin-bottom: 32px;
      display: block;
      @media (max-width: 767px) {
        font-size: 16px;
        margin-bottom: 16px;
      }
    }

    &-link {
      font-family: GraphikLCG, Arial, Helvetica, sans-serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      color:  #ffffff;
      @media (max-width: 767px) {
        font-size: 16px;
        margin-bottom: 16px;
      }
    }
  }

  &__contact--email {
    @media (max-width: 985px) {
      margin-top: 50px;
    }
    @media (max-width: 767px) {
      order: 2;
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }

  .footer__contact--call {
    @media (max-width: 985px) {
      margin-top: 50px;
    }
    @media (max-width: 767px) {
      margin-top: 0;
    }
  }
}

.footer-nav-mob {
  @media (min-width: 766px) {
    display: none;
  }
  @media (max-width: 767px) {
    display: block;
    background: #0F181C;
  }

  &__list {
    margin-bottom: 24px;
  }

  &__accordion {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 8px;
    transition: height 0.5s ease-in-out;

    &-link {
      margin-bottom: 16px;

      & a {
        font-family: GraphikLCG, Arial, Helvetica, sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        color:  #ffffff;
        line-height: 120%
      }
    }

    &--show {
      overflow: hidden;
    }
  }

  &__accordion--hidden {
    height: 0;
    overflow: hidden;
  }

  &__list-item-title {
    font-family: GraphikLCG, Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    color:  #ffffff;

    &-arrow {
      //background-image: url("./assets/images/icons/arrow-red.svg");
      background-repeat: no-repeat;
      background-position: center;
      width: 10px;
      height: 10px;
      transform: rotate(0deg);

    }
  }

  &__list-item-wrapper {
    margin-bottom: 16px;
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: 8px;
  }
}


.language-select {
  width: 68px;
  position: relative;
  color: white;
  display: flex;
  align-items: flex-end;
  @media (max-width: 985px) {
    margin-top: 40px;
  }
  @media (max-width: 766px) {
    order: 1;
  }

  &__title {
    font-family: GraphikLCG, Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
  }

  &__select-selected {
    border: none;
    width: 48px;
    position: relative;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-left: 0;
    background: #0F181C;
    font-family: GraphikLCG, Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color:  #ffffff;
    margin-left: 4px;

    &.active:before {
      transform: translateY(-50%) rotate(180deg);
    }

    &:before {
      content: '';
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 17px;
      height: 11px;
    }
  }

  &.select-active .language-select__select-selected::before {
    transform: translateY(-50%) rotate(180deg);
  }

  &__select.select-active .language-select__select-selected {
    background:  #ffffff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding-left: 4px;;
  }

  &__select.select-active .language-select__select-selected span {
    color: #0F181C;
  }

  &__select-items {
    display: none;

  }
}

.select-active .language-select__select-items {
  top: auto;
  position: absolute;
  min-height: 108px;
  overflow-y: auto;
  width: 48px;
  bottom: 20px;
  right: -26px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background:  #ffffff;
  padding: 3px 4px;
  cursor: pointer;
  align-items: center;
  margin-bottom: -1px;
}

.language-select__item-wrap {
  display: flex;
  transition: 0.5s;
  padding: 8px 0;
}

.language-select__item-wrap:hover {
  background: #cccccc;
  transition: 0.5s;
  border-radius: 6px;
}

.language-select__item {
  border: none;
  background: none;

  span {
    font-family: GraphikLCG, Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color: #0F181C;
  }

}
</style>