<template>
  <div class="index-image-slide-container">
    <div class="index-image-slide content">
      <img
        v-for="(source, index) in imageSources"
        :key="index"
        :src="source"
        :class="{
          'index-image-slide-one': index === 0,
          'index-image-slide-two': index === 1,
          'index-image-slide-three': index === 2,
          'index-image-slide-four': index === 3,
          'image-active': index === currSlideIndex,
        }"
      />
      <div class="dark-overlay"></div>
      <span class="spacer"></span>
      <button
        v-for="(caption, index) in captions"
        :key="index"
        :class="{
          'index-image-slide-one': index === 0,
          'index-image-slide-two': index === 1,
          'index-image-slide-three': index === 2,
          'index-image-slide-four': index === 3,
        }"
        @click="changeSlide(index)"
      >
        <h3 :class="index === currSlideIndex && 'text-active'">
          {{ caption }}
        </h3>
      </button>
      <span class="spacer"></span>
    </div>
  </div>
</template>
<style scoped>
.index-image-slide-container {
  padding: 0 2rem;
  position: relative;
  width: 100%;
  z-index: 0;
}
.index-image-slide {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 2rem;
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 2rem;
  overflow: hidden;
  z-index: 0;
  box-shadow: inset 0 4px 10px hsla(0, 0%, 40%, 1);
}

.index-image-slide button {
  position: relative;
  font-family: var(--font-face-default);
  color: var(--clr-white);
  opacity: 0.7;
  transition: all 300ms;
  z-index: 10;
  cursor: pointer;
}

.index-image-slide button > h3 {
  opacity: 0.7;
}

.index-image-slide img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 1000ms;
  opacity: 0;
  width: inherit;
  object-fit: cover;
}

.dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--clr-black);
  opacity: 0.5;
  z-index: 2;
}

.text-active {
  font-weight: 700;
  text-decoration: underline;
  opacity: 1 !important;
}

.image-active {
  opacity: 1 !important;
}

@media screen and (min-width: 0px) {
  .index-image-slide {
    aspect-ratio: 3 / 4;
  }

  .index-image-slide img {
    height: 100%;
  }
}

@media screen and (min-width: 720px) {
  .index-image-slide {
    aspect-ratio: 16 / 9;
  }

  .index-image-slide img {
    height: auto;
  }
}
</style>
<script>
export default {
  data() {
    return {
      captions: [
        "지구 끝에서 만나는 빙하, 파타고니아",
        "영화 아바타의 배경지, 플리트비체",
        "두 눈으로 직접 담는 화산 분화, 아카테낭고",
        "아름다운 불교 유적 도시, 바간",
      ],
      slides: [],
      images: [],
      imageSources: [
        "/images/main_sec3_bg1_patagonia.jpg",
        "/images/main_sec3_bg2_plitvice.jpg",
        "/images/main_sec3_bg3_acatenango.jpg",
        "/images/main_sec3_bg4_bagan.jpg",
      ],
      currSlideIndex: 0,
      currSlideText: null,
      currSlideImage: null,
      slideInterval: null,
    };
  },
  methods: {
    changeSlide(index) {
      this.currSlideIndex = index;
      this.startInterval();
    },
    startInterval() {
      clearInterval(this.slideInterval);
      this.slideInterval = setInterval(() => {
        this.currSlideIndex++;
        if (this.currSlideIndex > 3) {
          this.currSlideIndex = 0;
        }
      }, 5000);
    },
  },
  mounted() {
    this.startInterval();
  },
};
</script>
