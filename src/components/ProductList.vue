<template>
  <Loader v-if="productStore.loading" />
  <div v-else-if="productStore.error" class="error-message">
    {{ productStore.error }}
  </div>
  <div v-else class="catalog">
    <div class="filters">
      <select v-model="productStore.selectedType" @change="productStore.fetchProducts">
        <option value="">Все типы</option>
        <option v-for="type in productStore.types" :key="type.id" :value="type.id">
          {{ type.name }}
        </option>
      </select>

      <select v-model="productStore.selectedCondition" @change="productStore.fetchProducts">
        <option value="">Все состояния</option>
        <option
          v-for="condition in productStore.conditions"
          :key="condition.id"
          :value="condition.id"
        >
          {{ condition.name }}
        </option>
      </select>
    </div>

    <div class="product-list">
      <ProductCard v-for="product in productStore.products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '../stores/product'
import ProductCard from './ProductCard.vue'
import Loader from './Loader.vue'
const productStore = useProductStore()

onMounted(() => {
  productStore.fetchProducts()
  productStore.fetchTypes()
  productStore.fetchConditions()
})
</script>

<style scoped>
.catalog {
  padding: 20px;
}

/*.filters {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.filters select {
  padding: 8px 12px;
  border: 1px solid #2f4f4f;
  color: #2f4f4f;
  background: white;
  border-radius: 4px;
  min-width: 180px;
  font-size: 0.9rem;
} */

.filters {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
  align-items: center;
}

.filters select {
  appearance: none;
  padding: 10px 35px 10px 12px;
  border: 1px solid #2f4f4f;
  color: #2f4f4f;
  background: white
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%232f4f4f' stroke-width='2' fill='none'/%3E%3C/svg%3E")
    no-repeat right 12px center;
  border-radius: 6px;
  min-width: 200px;
  font-size: 0.9rem;
  cursor: pointer;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.filters select:focus {
  outline: none;
  border-color: #1a2f2f;
  box-shadow: 0 0 0 3px rgba(47, 79, 79, 0.15);
}

.filters select:hover {
  border-color: #1a2f2f;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 1024px) {
  .product-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 768px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .product-list {
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .filters {
    flex-direction: column;
  }
}
.error-message {
  text-align: center;
  color: #dc3545;
  padding: 40px;
  font-size: 1.1rem;
}
</style>
