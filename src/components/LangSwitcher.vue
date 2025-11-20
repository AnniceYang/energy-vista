<template>
  <el-select v-model="lang" size="small" @change="onChange" class="lang-select">
    <el-option label="中文" value="zh"></el-option>
    <el-option label="English" value="en"></el-option>
  </el-select>
</template>

<script>
export default {
  name: "LangSwitcher",
  data() {
    return { lang: this.$i18n.locale || "en" };
  },
  methods: {
    onChange(val) {
      this.$i18n.locale = val;
      localStorage.setItem("lang", val);
    },
  },
  mounted() {
    const saved = localStorage.getItem("lang");
    if (saved) this.lang = saved;
  },
};
</script>

<style scoped>
.lang-select {
  min-width: 110px;
}
</style>
