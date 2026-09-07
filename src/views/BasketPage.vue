<template>
  <div class="basket-page">
    <h2>Корзина</h2>

    <div
      v-if="
        basketStore.basket && basketStore.basket.products && basketStore.basket.products.length > 0
      "
      class="basket-content"
    >
      <div v-for="item in basketStore.basket.products" :key="item.id" class="basket-item">
        <img :src="getImageUrl(item.img)" :alt="item.name" class="basket-img" />
        <div class="basket-info">
          <div class="basket-name">{{ item.name }}</div>
          <div class="basket-price">{{ item.price }} рублей</div>
          <div class="basket-quantity">Количество: {{ item.pivot.quantity }}</div>
        </div>
        <button class="remove-btn" @click="removeFromBasket(item.id)">Удалить</button>
      </div>
    </div>

    <div v-else class="empty-basket">Корзина пуста</div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useBasketStore } from '../stores/basket'

const basketStore = useBasketStore()

const getImageUrl = (img) => {
  return `${import.meta.env.VITE_STORAGE_URL}/${img}`
}

const removeFromBasket = async (productId) => {
  await basketStore.removeFromBasket(productId)
}

onMounted(() => {
  basketStore.fetchBasket()
})
</script>

<style scoped>
.basket-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h2 {
  color: #2f4f4f;
  margin-bottom: 20px;
}

.basket-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.basket-item {
  display: flex;
  align-items: center;
  gap: 15px;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 10px;
}

.basket-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.basket-info {
  flex: 1;
}

.basket-name {
  font-weight: bold;
  color: #2f4f4f;
}

.basket-price {
  font-weight: bold;
}

.basket-quantity {
  font-size: 0.9rem;
  color: #555;
}

.remove-btn {
  background: #dc3545;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

.remove-btn:hover {
  background: #b02a37;
}

.empty-basket {
  text-align: center;
  font-size: 1.2rem;
  color: #555;
  padding: 40px;
}
@media (max-width: 480px) {
  .basket-item {
    flex-wrap: wrap;
  }
}
</style>
