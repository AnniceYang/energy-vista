<template>
  <div class="navbar">
    <div class="left">
      <img src="@/assets/energy1.png" class="logo" />
      <span class="title">EnergyVista EMS</span>
    </div>

    <div class="right">
      <!-- ========== 亮暗主题切换按钮 ========== -->
      <div class="theme-switch" @click="toggleTheme">
        <i v-if="isDark" class="ri-sun-line"></i>
        <i v-else class="ri-moon-line"></i>
      </div>

      <!-- ========== 语言下拉菜单 ========== -->
      <el-dropdown @command="changeLang">
        <span class="lang-trigger">
          <i class="ri-global-line"></i>
        </span>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="en">English</el-dropdown-item>
          <el-dropdown-item command="zh">中文</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <!-- ========== 用户菜单 ========== -->
      <el-dropdown>
        <span class="avatar-wrap">
          <img src="@/assets/avatar.png" class="avatar" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>{{ $t("navbar.profile") }}</el-dropdown-item>
          <el-dropdown-item>{{ $t("navbar.settings") }}</el-dropdown-item>
          <el-dropdown-item divided>{{ $t("navbar.logout") }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDark: false, // 当前是否暗色模式
    };
  },

  mounted() {
    // 初次加载同步主题
    const theme = document.documentElement.getAttribute("data-theme");
    this.isDark = theme === "dark";
  },

  methods: {
    /* ---- 语言切换 ---- */
    changeLang(lang) {
      this.$i18n.locale = lang;
    },

    /* ---- 亮暗主题切换 ---- */
    toggleTheme() {
      this.isDark = !this.isDark;
      const themeName = this.isDark ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", themeName);
    },
  },
};
</script>

<style scoped>
.navbar {
  height: 60px;
  background: var(--bg-main);
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid var(--border-light);
}

.left {
  display: flex;
  align-items: center;
}

.logo {
  width: 26px;
  margin-right: 10px;
}

.title {
  font-size: 17px;
  font-weight: 600;
}

.right {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* 主题切换图标 */
.theme-switch {
  font-size: 20px;
  cursor: pointer;
  color: var(--text-light);
}

.theme-switch:hover {
  color: var(--primary);
}

/* 语言图标 */
.lang-trigger {
  font-size: 20px;
  cursor: pointer;
  color: var(--text-light);
}

.lang-trigger:hover {
  color: var(--primary);
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
</style>
