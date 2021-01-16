<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/meetings">Meetings</router-link> |
    <router-link to="/register">Register</router-link>
    <router-view class="container" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
