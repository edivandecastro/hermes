<template>
  <nav class="navbar fixed-top">
    <div class="d-flex align-items-center navbar-left">
      <a href="#" class="menu-button">
        <i class="simple-icon-menu icons"></i>
      </a>
      <div class="search">
        <input type="text" placeholder="Search" class="form-input" />
        <span class="search-icon">
          <i class="simple-icon-magnifier"></i>
        </span>
      </div>
    </div>
    <img class="logo" alt="logo" src="../assets/logo.png" />
    <div class="navbar-right">
      <div class="user d-inline-block">
        <b-dropdown
          class="dropdown-menu-right"
          right
          variant="empty"
          toggle-class="p-0"
          menu-class="mt-3"
          no-caret
        >
          <template slot="button-content">
            <span class="name mr-1">Sara Williams</span>
            <span>
              <img alt="currentUser.title" src="../assets/images/user.jpg" />
            </span>
          </template>
          <b-dropdown-item>Account</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item @click="signout">Sign out</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    signout() {
      this.$store.dispatch("User/logout");
    },
  },
};
</script>

<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  height: 105px;
  padding: 0.1rem 0;
  box-shadow: 0 3px 30px rgb(0 0 0 / 6%), 0 3px 20px rgb(0 0 0 / 6%);
  z-index: 1030;
}

.fixed-top {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}

.fixed-top .align-items-center {
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
}

.fixed-top .d-flex {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
}

.fixed-top .navbar-left {
  -ms-flex-preferred-size: 40%;
  flex-basis: 40%;
}

.fixed-top .navbar-left .menu-button {
  color: #8f8f8f;
  width: 120px;
  text-align: center;
  font-size: 20px;
}

.fixed-top .navbar-left .search {
  position: relative;
}

.fixed-top .navbar-left .search .form-input:focus {
  border-color: rgba(0, 142, 204, 0.6) !important;
  color: #3a3a3a !important;
  background: #f8f8f8;
}

.fixed-top .navbar-left .search .form-input {
  background: #f8f9fa;
  color: #3a3a3a !important;
  border-radius: 20px;
  width: 230px;
}

.fixed-top .navbar-left .search .search-icon {
  font-size: 17px;
  border-radius: 10px;
  color: #8f8f8f;
  position: absolute;
  width: 40px;
  height: 40px;
  bottom: -11px;
  right: 3px;
  text-align: center;
  cursor: pointer;
}

.fixed-top .navbar-left .search .search-icon:hover {
  color: #008ecc;
}

.fixed-top .navbar-left .search input {
  height: initial;
  border-radius: 0.1rem;
  border: initial;
  background: transparent;
  outline: initial !important;
  padding: 0.5rem 1rem;
  line-height: 2;
  font-size: 0.8rem;
  width: 93%;
  color: #3a3a3a;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
}

.fixed-top .logo {
  width: 110px;
}

.fixed-top .navbar-right {
  -ms-flex-preferred-size: 40%;
  flex-basis: 40%;
  text-align: right;
}

.fixed-top .navbar-right .d-inline-block {
  display: inline-block !important;
}

.fixed-top .navbar-right .user {
  position: relative;
  margin-right: 60px;
  color: #878787 !important;
}

.fixed-top .navbar-right .user .dropdown-menu-right {
  right: 0;
  left: auto;
}

.fixed-top .navbar-right .user .dropdown-menu-right .p-0:active {
  border-color: transparent !important;
}

.fixed-top .navbar-right .user .dropdown-menu-right .mt-3 {
  border-radius: 0.75rem !important;
}

.navbar .navbar-right .user img {
  margin-left: 10px;
  border-radius: 30px;
  width: 40px;
}
</style>
