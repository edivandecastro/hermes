<template>
  <div class="sidebar">
    <img class="logo" alt="logo" src="../assets/logo.png" />
    <div class="menu-bar">
      <ul class="menu">
        <li v-for="(item, index) in menus" :key="`parent_${index}`" :class="isActive(item.to)">
          <router-link class="link-item" :to="item.to">
            <div class="menu-button" @click="activateMenu(item.to)">
              <i :class="`${item.icon} icone`" />
              <span class="label-button">{{ item.label }}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import menus from "@/constants/menu";

export default {
  data() {
    return {
      menus: menus,
      activeMenuId: "",
    };
  },
  mounted() {
    this.activeMenuId = this.$route.path;
  },
  methods: {
    activateMenu(menuId) {
      this.activeMenuId = menuId;
    },
    isActive(menuId) {
      return this.activeMenuId === menuId ? "active" : "";
    },
  },
};
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

.sidebar .menu-bar ul li.active:before {
  content: " ";
  background: #008ecc;
  border-radius: 10px;
  position: absolute;
  width: 5px;
  height: 99px;
  margin-top: 6px;
  left: 0;
}

.sidebar .menu-bar ul li.active .link-item {
  color: #008ecc;
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
