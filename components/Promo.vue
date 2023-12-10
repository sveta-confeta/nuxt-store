<template>
  <div class="swiper-promo-wrapper">
    <ClientOnly>
      <swiper
          :modules="[Pagination,Scrollbar, Mousewheel]"
          :autoplay="{
        delay: 4000,
        pauseOnMouseEnter: true,
        }"
          :pagination="{
        el: '.swiper-pagination',
        clickable: true,
    }"
          :scrollbar="{
          hide: true,
         }"
          :mousewheel=false
          :loop="false"
          :speed="2400"
          :effect="'slide'"
          class="promo-slider">
        <swiper-slide>
          <img src="./../assets/images/promo.jpg" alt="">
          <div class="promo-block">
          <InfoBlock :contentInfo="contentInfo" :styleProps="styleProps" color="lightgray"/>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="./../assets/images/promo.jpg" alt="">
          <div class="promo-block">
          <InfoBlock :contentInfo="contentInfo" :styleProps="styleProps" color="lightgray"/>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="./../assets/images/promo.jpg" alt="">
          <div class="promo-block">
          <InfoBlock :contentInfo="contentInfo" :styleProps="styleProps" color="lightgray"/>
          </div>
        </swiper-slide>
        <div class="pagination-wrap">
          <div class="swiper-pagination"></div>
        </div>
      </swiper>
    </ClientOnly>
  </div>
</template>

<script setup>
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Scrollbar, Mousewheel, Pagination} from 'swiper/modules';

const progressBarRef = ref(null);
const swiperRef = ref(null);

const updateProgressBar = () => {
  const progressBar = progressBarRef.value;

  if (progressBar && swiperRef.value && swiperRef.value.slides.length) {
    const progress = (swiperRef.value.realIndex + 1) / swiperRef.value.slides.length;
    progressBar.style.width = progress * 100 + '%';
  } else {
    console.error('Ошибка: Невозможно обновить прогресс-бар.');
  }
};

const slideChangeHandler = () => {
  updateProgressBar();
};

onMounted(() => {
  if (swiperRef.value) {
    swiperRef.value.on('slideChange', slideChangeHandler);
    updateProgressBar();
  }
});


const contentInfo = {
  title: 'Luxury homeware for people who love timeless design quality',
  description: 'Shop the new Spring 2022 collection today',
}
const styleProps = "style-props";
</script>

<style lang="scss">
.promo-slider {
  width: 100%;
  position: relative;
}

.swiper-promo-wrapper {
  position: relative;
  min-height: calc(100vh - 82px);
  height: 100%;
}

.swiper-slide {
  position: relative;
  img {
    width: 100%;
    object-fit: cover;
    min-height: calc(100vh - 82px);
    height: 100%;
  }
  .promo-block {
    position: absolute;
    max-width: 650px;
    top: 50%;
    right: -8%;
    transform: translate(-50%, -50%);
    z-index: 10;
    display: flex;
    justify-content: flex-end;
    min-height: 444px;
  }
}

.swiper-slide {
  object-fit: cover;
  height: initial!important;
}

.swiper-horizontal > .swiper-scrollbar, .swiper-scrollbar.swiper-scrollbar-horizontal {
  position:absolute;
  left: auto !important;
  bottom: 65px !important;
  right: 162px !important;
  width: 205px !important; /* Ширина прогрессбара */
  background: rgba(255, 255, 255, 0.4) !important;
  z-index: 10 !important;
  opacity: 1 !important;
  height: 12px !important;
  border-radius: 12px;
  overflow: hidden;
  @media (max-width: 767px) {
    height: 8px !important;
    width: 100% !important;
  }

  & .swiper-scrollbar-drag {
    height: 100%;
    background-color: #ffffff;
    width: 0;
    position: absolute;
    border-radius: 12px;
    top: 0;
    left: 0;
  }
}


.pagination-wrap {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  right: 40px;
  bottom: 55px;
  gap: 12px;
  @media (max-width: 767px) {
    bottom: 15px;
    width: 85%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
  }
  & .swiper-pagination {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 17px;
    gap: 12px;
    @media (max-width: 767px) {
      gap: 5px;
    }

    &.swiper-pagination-bullets.swiper-pagination-horizontal {
      width: auto !important;
      cursor: pointer;
    }
  }
}
.swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #ffffff !important;
  width: 15px !important;
  height: 15px !important;
  border-radius: 50%;
  @media (max-width: 767px) {
    height: 8px !important;
    width: 8px !important;
  }
}

.swiper-promo-wrapper .swiper-pagination-bullet {
  background: rgba(255, 255, 255, 0.4);
  opacity: 1 !important;
  width: 15px !important;
  height: 15px !important;
  border-radius: 50%;
  @media (max-width: 767px) {
    height: 8px !important;
    width: 8px !important;
  }
}


.style-props {
  background: #fff;
  opacity: 0.9;
  color: #0F181C;
}


</style>

