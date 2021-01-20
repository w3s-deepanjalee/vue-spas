<template>
  <div id="app">
    <Navigation />
    <router-view class="container" :user = "user" />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import db from "./db.js"


export default {
  name: "App",
  components: {
    Navigation,
  },
  data(){
    return {
      user: null,
      }

  },
   mounted(){
    db.collection("users")
    .doc("dPFbG4ussxMpxnQh788N")
    .get()
    .then(snapshot => {
      this.user = snapshot.data().user_name;
    })

  },
};
</script>

<style lang="scss">
$primary : #ff7300b4;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
