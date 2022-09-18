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
