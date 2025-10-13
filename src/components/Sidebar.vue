<template>
  <div class="sidebar">
    <ul>
      <li>
        <router-link to="/">🏠 {{ $t("menu.dashboard") }}</router-link>
      </li>
      <li>
        <router-link to="/devices">⚙️ {{ $t("menu.devices") }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppSidebar",
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  background: #f4f6f8;
  height: 100vh;
  padding: 20px;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  margin: 12px 0;
}
.sidebar a {
  color: #333;
  text-decoration: none;
}
.sidebar a.router-link-exact-active {
  font-weight: bold;
  color: #42b983;
}
</style>
