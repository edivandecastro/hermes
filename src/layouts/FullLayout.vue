<template>
  <div>
    <side-bar />
    <top-nav />
    <router-view />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import TopNav from "@/components/TopNav.vue";

export default {
  components: { SideBar, TopNav },
  name: "FullLayout",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
