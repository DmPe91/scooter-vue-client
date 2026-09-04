<template>
  <div v-if="message" class="app-toast">
    {{ message }}
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.app-toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #2F4F4F;
  color: white;
  padding: 12px 20px;
  border-radius: 4px;
  font-size: 0.95rem;
  z-index: 1000;
}
</style>