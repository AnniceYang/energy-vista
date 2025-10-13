import LangSwitcher from './LangSwitcher.vue';
<template>
  <el-header class="navbar">
    <img src="@/assets/energy1.png" alt="logo" class="logo" />
    <span class="title">{{ $t("common.title") }}</span>
    <LangSwitcher />
  </el-header>
</template>

<script>
import LangSwitcher from "./LangSwitcher.vue";

export default {
  name: "AppNavbar",
  components: { LangSwitcher },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1e88e5;
  color: white;
  padding: 0 20px;
}
.logo {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.title {
  font-weight: bold;
  font-size: 18px;
}
</style>
