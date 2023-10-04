<template>
  <div class="mobile-header">
    <button @click="toggle" ref="button" data-active="false">
      <span class="burger"></span>
      <span class="burger"></span>
      <span class="burger"></span>
    </button>
    <nav>
      <!-- <div class="backdrop"></div> -->
      <div class="menu">
        <ul>
          <NuxtLink
            v-for="(link, index) in links"
            :key="index"
            :to="link.to"
            @click="toggle"
          >
            <li :class="link.emphasis && 'emphasis'">{{ link.label }}</li>
          </NuxtLink>
          <a href="https://www.traveldino.app/" target="_blank">
            <li class="emphasis">Try now!</li>
          </a>
        </ul>
      </div>
    </nav>
  </div>
</template>
<style scoped>
button {
  height: 25px;
  width: 32px;
  position: fixed;
  top: 17px;
  right: 20px;
  z-index: 9000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 300ms ease-in-out;
}

.burger {
  display: block;
  height: 2px;
  width: 100%;
  border-radius: 10px;
  background: var(--clr-black);
}

.burger:nth-of-type(1) {
  transform-origin: 0% 0%;
  transition: transform 300ms ease-in-out;
}

.burger:nth-of-type(2) {
  transition: transform 0.2s ease-in-out;
}

.burger:nth-of-type(3) {
  transform-origin: 0% 100%;
  transition: transform 300ms ease-in-out;
}

button[data-active="true"] {
  transform: translate(5px, 0);
}

button[data-active="true"] .burger:nth-of-type(1) {
  transform: rotate(45deg);
}

button[data-active="true"] .burger:nth-of-type(2) {
  transform: scaleY(0);
}

button[data-active="true"] .burger:nth-of-type(3) {
  transform: rotate(-45deg);
}

nav {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  background: transparent;
  z-index: 8000;
  transition: all 300ms ease-in-out;
}

.menu {
  position: absolute;
  top: inherit;
  right: inherit;
  width: 80%;
  height: 100%;
  background-color: var(--clr-white);
  box-shadow: 0 8px 10px hsla(0, 0%, 40%, 0.3);
  z-index: 8001;
}

.backdrop {
  position: absolute;
  top: inherit;
  right: inherit;
  width: 100%;
  height: 100%;
  transform-origin: 50% 50%;
  transition: all 300ms 300ms ease-in-out;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  backdrop-filter: blur(5px);
  opacity: 1;
  z-index: 1;
}

button[data-active="false"] ~ nav {
  transform: translateX(100%);
}

button[data-active="false"] ~ nav > .backdrop {
  background: rgba(0, 0, 0, 0);
  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
  backdrop-filter: blur(0px);
  opacity: 0;
  z-index: 0;
}

ul {
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8vh;
}

ul * {
  font-family: var(--font-face-emphasis);
  font-size: 1rem;
  word-break: keep-all;
  white-space: nowrap;
}

.emphasis {
  background: var(--clr-primary);
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  color: var(--clr-white);
}

@media screen and (min-width: 720px) {
  .mobile-header {
    display: none;
  }
}
</style>
<script setup>
const button = ref(null);
const links = [
  {
    label: "Home",
    to: "/",
    emphasis: false,
  },
  {
    label: "About",
    to: "/about",
    emphasis: false,
  },
  // {
  //   label: "Stories",
  //   to: "/stories",
  //   emphasis: false,
  // },
  {
    label: "Contact",
    to: "/contact",
    emphasis: false,
  },
  // {
  //   label: "Try now!",
  //   to: "/survey",
  //   emphasis: true,
  // },
];

const toggle = () => {
  const el = button.value;
  const value = el.dataset.active;
  el.dataset.active = value == "true" ? "false" : "true";
};
</script>
