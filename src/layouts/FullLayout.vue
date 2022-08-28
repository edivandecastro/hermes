<template>
  <div>
    <side-bar />
    <nav>
      <router-link to="/dashboard"> Dashboard </router-link> |
      <router-link to="/aportes">Aportes</router-link> |
      <router-link to="/proventos">Proventos </router-link> | <router-link to="/ativos">ativos</router-link> |
      <router-link to="/corretoras">Corretoras</router-link> |
    </nav>
    <router-view />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  components: { SideBar },
  name: "FullLayout",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
