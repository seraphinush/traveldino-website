<template>
  <div class="mobile-header">
    <button @click="toggle" ref="button" :data-active="useState('menuEnabled').value">
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
  margin: 2.5px 0px;
  height: 20px;
  width: 25px;
  position: fixed;
  top: 0.9rem;
  right: 1rem;
  z-index: 9000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 300ms ease-in-out;
  transform: scale(0.8);
}

.burger {
  display: block;
  height: 2px;
  width: 100%;
  border-radius: 10px;
  background: var(--clr-black);
}

.burger:nth-of-type(1) {
  transition: transform 300ms ease-in-out;
}

.burger:nth-of-type(2) {
  transition: transform 0.2s ease-in-out;
}

.burger:nth-of-type(3) {
  transition: transform 300ms ease-in-out;
}

button[data-active="true"] {
  margin: 0px 0px;
  height: 25px;
}

button[data-active="false"] {
  margin: 2.5px 0px;
  height: 20px;
}

button[data-active="true"] .burger:nth-of-type(1) {
  animation: burger-top-on 300ms forwards;
  -webkit-animation: burger-top-on 300ms forwards;
}

button[data-active="true"] .burger:nth-of-type(2) {
  transform: scaleY(0);
}

button[data-active="true"] .burger:nth-of-type(3) {
  animation: burger-bottom-on 300ms forwards;
  -webkit-animation: burger-bottom-on 300ms forwards;
}

button[data-active="false"] .burger:nth-of-type(1) {
  animation: burger-top-off 300ms forwards;
  -webkit-animation: burger-top-off 300ms forwards;
}

button[data-active="false"] .burger:nth-of-type(3) {
  animation: burger-bottom-off 300ms forwards;
  -webkit-animation: burger-bottom-off 300ms forwards;
}

@keyframes burger-top-on {
  0% {
    transform: none;
  }
  50% {
    transform: translateY(12.5px);
  }
  100% {
    transform: translateY(11.75px) rotate(45deg);
  }
}

@keyframes burger-top-off {
  0% {
    transform: translateY(11.75px) rotate(45deg);
  }
  50% {
    transform: translateY(12.5px);
  }
  100% {
    transform: none;
  }
}

@keyframes burger-bottom-on {
  0% {
    transform: none;
  }
  50% {
    transform: translateY(-12.5px);
  }
  100% {
    transform: translateY(-11px) rotate(-45deg);
  }
}

@keyframes burger-bottom-off {
  0% {
    transform: translateY(-11px) rotate(-45deg);
  }
  50% {
    transform: translateY(-12.5px);
  }
  100% {
    transform: none;
  }
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
  transform: translateY(100%);
}

.menu {
  position: absolute;
  top: inherit;
  right: inherit;
  width: 100%;
  height: 100%;
  background-color: var(--clr-white);
  box-shadow: 0 -8px 10px hsla(0, 0%, 40%, 0.3);
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
  transform: translateY(100%);
}

button[data-active="false"] ~ nav > .backdrop {
  background: rgba(0, 0, 0, 0);
  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
  backdrop-filter: blur(0px);
  opacity: 0;
  z-index: 0;
}

button[data-active="true"] ~ nav {
  transform: translateY(10%);
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
  font-size: 1.5rem;
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
const links = [
  {
    label: "Home",
    to: "/home",
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

const menuToggle = useState("menuEnabled");
const button = ref(null);
const toggle = () => {
  menuToggle.value = !menuToggle.value;
  const value = menuToggle.value;
  document.body.style = !value ? "overflow: hidden; height: 100vh" : "";
};
</script>
