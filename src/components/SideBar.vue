<template>
  <div class="sidebar">
    <img class="logo" alt="logo" src="../assets/logo.png" />
    <div class="menu-bar">
      <ul class="menu">
        <li>
          <router-link class="link-item" to="/dashboard">
            <div class="vertical-line"></div>
            <div class="menu-button">
              <i class="iconsminds-pie-chart-3 icone" />
              <span class="label-button">Dashboard</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link class="link-item" to="/aportes">
            <div class="vertical-line"></div>
            <div class="menu-button">
              <i class="iconsminds-coins icone" />
              <span class="label-button">Aportes</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link class="link-item" to="/proventos">
            <div class="vertical-line"></div>
            <div class="menu-button background-animation">
              <i class="iconsminds-financial icone" />
              <span class="label-button">Proventos</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link class="link-item" to="/ativos">
            <div class="vertical-line"></div>
            <div class="menu-button">
              <i class="iconsminds-bar-chart-4 icone" />
              <span class="label-button">Ativos</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link class="link-item" to="/corretoras">
            <div class="vertical-line"></div>
            <div class="menu-button">
              <i class="iconsminds-bank icone" />
              <span class="label-button">Corretoras</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
  position: fixed;
  background: #ffffff;
  width: 120px;
  top: 0px;
  bottom: 0px;
  box-shadow: 0px 3px 30px 0px rgba(0, 0, 0, 0.1), 0 3px 20px rgba(0, 0, 0, 0.1);
}

.logo {
  width: 110px;
  margin: 20px 0px 20px;
}

.menu {
  list-style: none;
  padding: 0;
}

.menu > li {
  height: 110px;
}

.link-item {
  display: flex;
  height: inherit;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  border-bottom: 1px solid #f3f3f3;
}

.link-item:hover {
  color: #008ecc;
}

.vertical-line {
  background: #008ecc;
  width: 3px;
  height: inherit;
}

.menu-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: inherit;
  width: inherit;
}

.icone {
  padding: 5px;
  font-size: 32px;
  line-height: 42px;
}
</style>
