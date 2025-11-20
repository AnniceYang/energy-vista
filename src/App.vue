<template>
  <el-container class="app-layout">
    <!-- 顶部 Header -->
    <el-header height="60px">
      <AppNavbar />
    </el-header>

    <!-- 左侧 + 右侧 -->
    <el-container>
      <AppSidebar />

      <el-main class="app-main">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppNavbar from "@/components/Navbar.vue";
import AppSidebar from "@/components/Sidebar.vue";

export default {
  name: "AppRoot",
  components: { AppNavbar, AppSidebar },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

/* 主容器背景 */
.app-layout {
  background: var(--bg-light);
}

/* 内容区域 */
.app-main {
  padding: 20px;
  background: var(--card-bg);
  overflow-y: auto;
}

.el-header {
  padding: 0 !important;
  height: 60px !important;
}
</style>
