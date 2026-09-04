<template>
  <header class="header">
    <div class="header-inner">
      <!-- Логотип слева -->
      <div class="logo-block">
        <img src="../logo/logo2.jpg" alt="logo" class="logo-img" />
      </div>

      <!-- Центр -->
      <div class="center-block">
        <h1 class="main-title">SCOOTER43</h1>
        <p class="subtitle">магазин и сервис ремонта электротранспорта</p>
        <nav class="nav-links">
          <router-link to="/" class="menu">Магазин</router-link>
          <router-link to="/basket" class="button">Корзина</router-link>
        </nav>
      </div>

      <!-- Логотип справа -->
      <div class="logo-block">
        <img src="../logo/logo1.jpg" alt="logo" class="logo-img" />
      </div>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  width: 100%;
  border-bottom: 3px solid #2F4F4F;
  background: white;
  font-family: Comic Sans MS, Comic Sans, cursive;
  color: #2F4F4F;
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 15px;
}

.logo-block {
  flex: 0 0 auto;
}

.logo-img {
  width: 150px;
  height: auto;
}

.center-block {
  text-align: center;
  flex: 1;
  padding: 0 20px;
}

.main-title {
  font-size: 2rem;
  margin: 0;
}

.subtitle {
  font-size: 1rem;
  margin: 5px 0 15px;
}

.nav-links {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.menu {
  font-weight: bold;
  color: #2F4F4F;
  text-decoration: none;
  padding: 8px 12px;
}

.menu:hover {
  background: #2F4F4F;
  color: white;
}

.button {
  background: #2F4F4F;
  color: white;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border: none;
}

.button:hover {
  background: white;
  color: #2F4F4F;
  border: 2px solid #2F4F4F;
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .header-inner {
    flex-direction: column;
    text-align: center;
  }

  .logo-img {
    width: 100px;
  }

  .main-title {
    font-size: 1.5rem;
  }

  .subtitle {
    font-size: 0.85rem;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>