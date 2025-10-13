<template>
  <el-slect
    v-model="lang"
    @change="changeLang"
    size="mini"
    class="lang-switcher"
  >
    <el-option label="中文" value="zh"></el-option>
    <el-option label="English" value="en"></el-option>
  </el-slect>
</template>

<script>
export default {
  data() {
    return { lang: this.$i18n.locale };
  },
  methods: {
    changeLang(val) {
      this.$i18n.locale = val;
    },
  },
};
</script>

<style scoped>
.lang-switcher {
  min-width: 100px;
}
</style>
