<template>
  <div class="index__linear-carousel-container content">
    <NuxtLink
      v-for="(card, index) in cards"
      :key="index"
      :to="card.link"
      class="index__linear-carousel-card"
    >
      <h4>{{ card.label }}</h4>
      <img :src="card.imgSrc" alt="" />
    </NuxtLink>
  </div>
</template>
<style scoped>
.index__linear-carousel-container {
  display: flex;
  flex-direction: row;
  max-width: 100%;
  justify-content: space-around;
}

.index__linear-carousel-card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  box-shadow: var(--box-shadow-default);
  overflow: hidden;
  z-index: 0;
  transition: all 300ms ease-out;
}

.index__linear-carousel-card:hover {
  transform: scale(1.02);
}

.index__linear-carousel-card > h4 {
  position: relative;
  font-family: var(--font-face-default);
  color: var(--clr-white);
  z-index: 1;
}

.index__linear-carousel-card > img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 0;
}

@media screen and (min-width: 0px) {
  .index__linear-carousel-card {
    width: 120px;
    height: 140px;
  }
}

@media screen and (min-width: 720px) {
  .index__linear-carousel-card {
    width: 200px;
    height: 225px;
  }
}

@media screen and (min-width: 1080px) {
  .index__linear-carousel-card {
    width: 300px;
    height: 340px;
  }
}
</style>
<script setup>
const cards = [
  {
    label: "느긋한 힐링",
    imgSrc: "/images/main_sec2_bg1.jpg",
    link: "/content/resort",
  },
  {
    label: "새로운 모험",
    imgSrc: "/images/main_sec2_bg2.jpg",
    link: "/content/adventure",
  },
  {
    label: "북적이는 도시",
    imgSrc: "/images/main_sec2_bg3.jpg",
    link: "/content/city",
  },
];
</script>
