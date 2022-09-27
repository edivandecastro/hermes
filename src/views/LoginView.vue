<template>
  <div>
    <div class="fixed-background"></div>
    <div class="container">
      <b-row class="h-100">
        <b-colxx xxs="12" md="10" class="mx-auto my-auto">
          <b-card class="auth-card" no-body>
            <div class="position-relative image-side">
              <router-link to="/">
                <span class="logo-single" />
              </router-link>
              <p class="mb-0">
                Por favor use suas credenciais para realizar o login.
                <br />Se você ainda não é um membro, <br />por favor
                <router-link to="/user/register" class="link-signin">registre-se</router-link>.
              </p>
            </div>
            <div class="form-side">
              <h6 class="mb-4">Login</h6>

              <b-form @submit.prevent="signin" class="av-tooltip tooltip-label-bottom">
                <h-input id="login" type="text" label="E-mail" v-model="user.email" class="mb-4" />

                <h-input id="login" type="password" label="Password" v-model="user.password" class="mb-4" />

                <div class="d-flex justify-content-between align-items-center">
                  <router-link to="/user/forgot-password">Forget password?</router-link>
                  <b-button
                    type="submit"
                    variant="primary"
                    size="lg"
                    :disabled="false"
                    :class="{
                      'btn-multiple-state btn-shadow': true,
                      'show-spinner': false,
                      'show-success': !true && loginError === false,
                      'show-fail': !true && loginError,
                    }"
                  >
                    <span class="spinner d-inline-block">
                      <span class="bounce1"></span>
                      <span class="bounce2"></span>
                      <span class="bounce3"></span>
                    </span>
                    <span class="icon success">
                      <i class="simple-icon-check"></i>
                    </span>
                    <span class="icon fail">
                      <i class="simple-icon-exclamation"></i>
                    </span>
                    <span class="label">Login</span>
                  </b-button>
                </div>
              </b-form>
            </div>
          </b-card>
        </b-colxx>
      </b-row>
    </div>
  </div>
</template>

<script>
import { User } from "@/models/User";
import HInput from "@/components/HInput.vue";

export default {
  components: { HInput },
  data() {
    return {
      user: new User({}),
    };
  },
  methods: {
    signin() {
      // this.$store.dispatch("User/create", this.user);
      const params = {
        credentials: this.user,
        redirect: this.$route.query.redirect || "/",
      };
      this.$store.dispatch("UserModule/login", params);
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

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.auth-card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-shadow: 0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%);
  box-shadow: 0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%);
}

.card {
  position: relative;
  border: 0;
  border-radius: 0.75rem;
}

.auth-card .form-side {
  width: 60%;
  padding: 80px;
}

.logo-single {
  width: 110px;
  height: 110px;
  background: url(../assets/logo.png) no-repeat;
  background-position: center center;
  display: inline-block;
}

.fixed-background {
  background: url(../assets/images/login/background.jpg) no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.auth-card .image-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  padding: 80px 40px;
}

.link-signin {
  color: #008ecc;
  font-weight: 400;
  font-size: 18px;
}
</style>
