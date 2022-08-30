<template>
  <div class="container">
    <div class="login">
      <div>Username</div>
      <input id="username" type="text" v-model="user.username" />
      <div>Password</div>
      <input id="password" type="password" v-model="user.password" />
      <div>
        <button @click="signin">SingIn</button>
      </div>
    </div>
  </div>
</template>

<script>
import { User } from "@/models/User";

export default {
  data() {
    return {
      user: new User({}),
    };
  },
  methods: {
    signin() {
      this.$store.dispatch("User/login", this.user);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#username,
#password {
  margin-bottom: 20px;
}
</style>
