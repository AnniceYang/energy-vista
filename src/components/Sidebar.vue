<template>
  <el-aside width="220px" class="sidebar">
    <el-menu
      :default-active="$route.path"
      router
      background-color="transparent"
      text-color="var(--text-light)"
      active-text-color="var(--primary)"
      class="menu"
    >
      <el-menu-item index="/dashboard">
        <i class="ri-dashboard-line"></i>
        <span>{{ $t("menu.dashboard") }}</span>
      </el-menu-item>

      <el-menu-item index="/devices">
        <i class="ri-cpu-line"></i>
        <span>{{ $t("menu.devices") }}</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<style scoped>
.sidebar {
  background: var(--bg-sidebar);
  color: var(--text);
  height: calc(100vh - 60px);
  border-right: 1px solid var(--border-light);
  padding: 12px 10px;
}

.menu {
  border-right: none;
}

/* icon 规范 */
.el-menu-item i {
  margin-right: 10px;
  font-size: 18px;
}

/* hover 效果 */
.el-menu-item:hover {
  background: var(--bg-hover) !important;
  border-radius: 6px;
}

/* ✔ 选中高亮（字体更亮 + 背景明显） */
.el-menu-item.is-active {
  background: var(--bg-active) !important;
  border-radius: 6px !important;
  color: var(--primary) !important;
  font-weight: 600 !important;
}
</style>
