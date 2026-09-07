<template>
  <div class="product-page">
    <div v-if="product" class="product-container">
      <img :src="getImageUrl(product.img)" :alt="product.name" class="product-img" />
      <div class="product-details">
        <h1>{{ product.name }}</h1>
        <p class="product-price">{{ product.price }} рублей</p>
        <p class="product-type">Тип: {{ product.type?.name }}</p>
        <p class="product-condition">Состояние: {{ product.condition?.name }}</p>
        <p class="product-description">{{ product.description }}</p>
        <button class="buy-btn" @click="addToCart">Купить</button>
      </div>
    </div>
    <div v-else class="loading">Загрузка...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const API_URL = import.meta.env.VITE_API_URL
const product = ref(null)

const getImageUrl = (img) => {
  return `${import.meta.env.VITE_STORAGE_URL}/${img}`
}

const fetchProduct = async () => {
  try {
    const response = await axios.get(`${API_URL}/products/${route.params.id}`)
    product.value = response.data
  } catch (error) {
    console.error('Ошибка загрузки товара:', error)
  }
}

const addToCart = async () => {
  try {
    await axios.post(`${API_URL}/basket`, {
      product_id: product.value.id,
      quantity: 1,
    })
    alert('Товар добавлен в корзину')
  } catch (error) {
    console.error('Ошибка добавления в корзину:', error)
    alert('Не удалось добавить товар')
  }
}

onMounted(fetchProduct)
</script>

<style scoped>
.product-page {
  padding: 20px;
}

.product-container {
  display: flex;
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.product-img {
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
}

.product-details {
  flex: 1;
}

.product-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2f4f4f;
}

.product-type,
.product-condition {
  font-size: 1rem;
  margin: 10px 0;
}

.product-description {
  line-height: 1.6;
  margin: 20px 0;
}

.buy-btn {
  background: #2f4f4f;
  color: white;
  padding: 12px 24px;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.buy-btn:hover {
  background: white;
  color: #2f4f4f;
  border: 2px solid #2f4f4f;
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  padding: 40px;
}

@media (max-width: 768px) {
  .product-container {
    flex-direction: column;
  }

  .product-img {
    width: 100%;
    height: auto;
  }
}
</style>
