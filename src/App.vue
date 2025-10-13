<template>
  <div id="app">
    <AppNavbar />
    <div class="main">
      <AppSidebar />
      <router-view class="content" />
    </div>
  </div>
</template>

<script>
import AppNavbar from "@components/Navbar.vue";
import AppSidebar from "@components/Sidebar.vue";

export default {
  name: "App",
  components: { AppNavbar, AppSidebar },
};
</script>

<style>
body {
  margin: 0;
  font-family: "Segoe UI", sans-serif;
}
.main {
  display: flex;
}
.content {
  flex: 1;
  padding: 20px;
  background: #fff;
}
</style>
