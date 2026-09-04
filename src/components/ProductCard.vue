<template>
  <div class="product-card">
    <img
      :src="getImageUrl(product.img)"
      :alt="product.name"
      class="product-img"
    />
    <div class="product-info">
      <div class="product-name">{{ product.name }}</div>
      <div class="product-teaser">{{ product.tizer_description }}</div>
    </div>
    <div class="product-price">{{ product.price }} рублей</div>
    <div class="product-actions">
      <router-link :to="'/product/' + product.id" class="product-btn">
        Узнать больше
      </router-link>
      <button class="product-btn buy-btn" @click="addToCart">
        Купить
      </button>
    </div>
  </div>
</template>

<script setup>
import { useBasketStore } from '../stores/basket'
import { useToastStore } from '../stores/toast'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const basketStore = useBasketStore()
const toastStore = useToastStore()

const getImageUrl = (img) => {
  return `http://127.0.0.1:8000/storage/${img}`
}

const addToCart = async () => {
  try {
    await basketStore.addToBasket(props.product.id)
    toastStore.show('Товар добавлен в корзину')
  } catch (error) {
    toastStore.show('Не удалось добавить товар')
  }
}
</script>

<style scoped>
.product-card {
  width: 250px;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  background: white;
  transition: box-shadow 0.2s;
  height: 100%;
}

.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.product-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin: 0 auto 10px;
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-name {
  font-weight: bold;
  color: #2F4F4F;
  margin-bottom: 5px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-teaser {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.4;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-price {
  font-size: 1.1rem;
  font-weight: bold;
  margin: 10px 0;
}

.product-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-btn {
  display: block;
  width: 100%;
  background: #2F4F4F;
  color: white;
  padding: 8px 12px;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.9rem;
  text-align: center;
  box-sizing: border-box;
  transition: all 0.2s;
}

.product-btn:hover {
  background: white;
  color: #2F4F4F;
  border: 2px solid #2F4F4F;
}

.buy-btn {
  background: #2F4F4F;
}
</style>