<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-block">
        <h3>SCOOTER43</h3>
        <p>магазин и сервис ремонта электротранспорта</p>
      </div>

      <div class="footer-block">
        <nav class="footer-nav">
          <router-link to="/" class="footer-link">Магазин</router-link>
          <router-link to="/basket" class="footer-link">Корзина</router-link>
        </nav>
      </div>

      <div class="footer-block">
        <p>© 2026 SCOOTER43. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  width: 100%;
  background: #2F4F4F;
  color: white;
  margin-top: 40px;
  font-family: Comic Sans MS, Comic Sans, cursive;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-block {
  text-align: center;
}

.footer h3 {
  margin: 0;
  font-size: 1.5rem;
}

.footer p {
  margin: 5px 0 0;
  font-size: 0.9rem;
}

.footer-nav {
  display: flex;
  gap: 15px;
}

.footer-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.footer-link:hover {
  text-decoration: underline;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }

  .footer-nav {
    flex-direction: column;
    gap: 8px;
  }
}
</style>