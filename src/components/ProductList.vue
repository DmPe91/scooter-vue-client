
<template>
<Loader v-if="productStore.loading" />
  <div class="catalog">
    <div class="filters">
      <select v-model="productStore.selectedType" @change="productStore.fetchProducts">
        <option value="">Все типы</option>
        <option v-for="type in productStore.types" :key="type.id" :value="type.id">
          {{ type.name }}
        </option>
      </select>

      <select v-model="productStore.selectedCondition" @change="productStore.fetchProducts">
        <option value="">Все состояния</option>
        <option v-for="condition in productStore.conditions" :key="condition.id" :value="condition.id">
          {{ condition.name }}
        </option>
      </select>
    </div>

    <div class="product-list">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.id"
        :product="product"
      />
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

.filters {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.filters select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 180px;
  font-size: 0.9rem;
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
  }
}
</style>