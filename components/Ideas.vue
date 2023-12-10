<template>
  <div class="ideas container">
    <div class="ideas-info">
      <InfoBlock :contentInfo="contentInfo" :styleProps="styleProps" color="secondary"/>
    </div>
    <div class="ideas-img">
      <img src="assets/images/room.jpg" alt="room" width="630" height="478">
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import InfoBlock from "./InfoBlock.vue";
const contentInfo = ref({
  title: 'It started with a small idea',
  description: 'A global brand with local beginnings, our story began in a small studio in South London in early 2014',
});

const styleProps = "style-props"
</script>

<style lang="scss" scoped>
.ideas {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 60px;
  margin-top: 60px;
  &-img {
    width: 100%;
    min-height: 478px;
    & img {
      width: 100%;
      object-fit: cover;
    }
  }

}
.style-props {
  background: #2A254B;
  color: #ffffff;
}


</style>