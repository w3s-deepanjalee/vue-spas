<template>
  <div>
    <nav class="site-nav navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Meeting Log</router-link>
        <div class="navbar-nav mlauto">

          <!-- <router-link class="nav-item nav-link" to="/home">Home</router-link> -->

          <router-link class="nav-item nav-link" to="/about">About</router-link>

          <router-link class="nav-item nav-link" to="/login">Login</router-link>

          <router-link class="nav-item nav-link" to="/meetings"
            >Meetings</router-link
          >

          <router-link class="nav-item nav-link" to="/register"
            >Register</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
