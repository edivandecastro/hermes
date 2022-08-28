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
  background: #f5f5ff;
  width: 200px;
  top: 0px;
  bottom: 0px;
  box-shadow: -13px 10px 16px 11px rgba(0, 0, 0, 0.25);
}

.logo {
  width: 150px;
  margin: 20px;
}

.menu-bar {
  margin-top: 25px;
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
}

.vertical-line {
  background: #2222ad;
  width: 3px;
  height: inherit;
}

.menu-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;
  width: inherit;
}

.icone {
  padding: 10px 10px 0px;
  font-size: 36px;
}

.label-button {
  font-weight: 600;
}
</style>
