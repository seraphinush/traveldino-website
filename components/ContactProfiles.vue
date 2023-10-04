<template>
  <div class="contact__profiles">
    <div
      v-for="(profile, index) in profiles"
      :key="index"
      class="contact__profile"
    >
      <img :src="profile.imgSrc" alt="" />
      <div class="contact__profile-info">
        <p class="bold">{{ profile.label }}</p>
        <span>{{ profile.description }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.contact__profiles {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  font-family: var(--font-face-default);
}

.contact__profile {
  display: flex;
  width: 200px;
}

.contact__profile > *:not(:last-child) {
  margin-right: 0.75rem;
}

.contact__profile img {
  border: 1px solid #000;
  border-radius: 100%;
}

.contact__profile-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.contact__profile-info > * {
  font-size: 0.8rem;
}

@media screen and (min-width: 0px) {
  .contact__profile img {
    width: 50px;
    min-width: 50px;
    height: 50px;
    min-height: 50px;
  }
}

@media screen and (min-width: 720px) {
}

@media screen and (min-width: 1080px) {
  .contact__profile img {
    width: 70px;
    min-width: 70px;
    height: 70px;
    min-height: 70px;
  }
}
</style>
<script setup>
const profiles = [
  {
    label: "Hendrick Jin",
    description: "세계 맥주 뿌시는 알파고",
    imgSrc: "/images/profiles/dino_drink.png",
  },
  {
    label: "Skyy",
    description: "전 세계 감튀를 먹어보러 여행다니는 마케터",
    imgSrc: "/images/profiles/dino_food.png",
  },
  {
    label: "Jelly Jay",
    description: "세계 명산 정복을 꿈꾸는 기획자",
    imgSrc: "/images/profiles/dino_gym.png",
  },
  {
    label: "Seraph",
    description: "여행하고 싶지만 집돌이인 웹앱 개발자",
    imgSrc: "/images/profiles/dino_music.png",
  },
  {
    label: "Demian",
    description: "전 세계인과 친구하고 싶은 글로벌 몽상가",
    imgSrc: "/images/profiles/dino_fan.png",
  },
];
</script>
