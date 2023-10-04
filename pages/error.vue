<template>
  <div>
    <p>{{ error.statusCode }}</p>
    <p>{{ error.message }}</p>
  </div>
</template>
<style scoped></style>
<script setup>
definePageMeta({
  layout: "default",
});
defineProps(["error"]);
</script>
