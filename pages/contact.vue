<template>
  <div class="container contact__container">
    <section>
      <div class="content contact__main">
        <h2 class="bold">
          가장 나다운 여행을 떠날 수 있도록 다양한 프로젝트를 준비하고 있습니다
        </h2>
        <h4>
          트래블다이노의 다음 프로젝트가 궁금하다면 언제든지 연락 주세요 :)
        </h4>
      </div>
    </section>
    <section>
      <div class="content contact__contact-cards">
        <div
          v-for="(card, index) in contactCards"
          :key="index"
          class="contact__contact-card"
        >
          <p class="bold">{{ card.type }}</p>
          <a :href="card.link" target="_blank">{{ card.label }}</a>
        </div>
      </div>
    </section>
    <section>
      <div class="content contact__members">
        <p class="bold">Traveldino Squad</p>
        <ContactProfiles />
        <span class="spacer"></span>
      </div>
    </section>

    <p class="contact__footer bold">Contact us</p>
  </div>
</template>
<style scoped>
.contact__container {
  height: 100vh;
  background-image: url("/images/contact_bg.jpg");
  background-size: cover;
  word-break: keep-all;
  overflow: auto;
}

section:not(:first-child) {
  margin-top: 2rem;
}

.contact__main {
  margin-top: 120px;
  margin-bottom: calc(120px - 2rem);
}
.contact__main > h4 {
  margin-top: 1.25rem;
  font-family: "Pretendard-Regular";
}

.contact__contact-cards {
  display: flex;
  gap: 4rem;
}

.contact__contact-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact__members {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

h2 {
  width: min(calc(100vw - 2rem), 640px);
}

.contact__footer {
  position: fixed;
  width: 100%;
  font-size: 12vw;
  color: var(--clr-white);
  word-break: keep-all;
  text-align: center;
  z-index: 0;
}

@media screen and (min-width: 0px) {
  .contact__footer {
    bottom: -3vw;
    font-size: 12vw;
  }
}

@media screen and (min-width: 720px) {
  .contact__footer {
    bottom: -2rem;
    font-size: 7.5rem;
  }
}

@media screen and (min-width: 1080px) {
  .contact__footer {
    bottom: -3rem;
    font-size: 12rem;
  }
}
</style>
<script setup>
const contactCards = [
  {
    type: "Email",
    label: "info.traveldino@gmail.com",
    link: "mailto:info.traveldino@gmail.com",
  },
  {
    type: "Instagram",
    label: "@traveldino.app",
    link: "https://instagram.com/traveldino.app",
  },
];
definePageMeta({
  layout: "default",
});
</script>
