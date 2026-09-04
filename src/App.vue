<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Toast from './components/Toast.vue'
import { useToastStore } from './stores/toast'

const toastStore = useToastStore()
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
  <Footer />
<Toast :message="toastStore.message" />
</template>