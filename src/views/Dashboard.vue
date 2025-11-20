<template>
  <div class="dashboard">
    <h2>Dashboard</h2>

    <div class="cards">
      <el-card class="card">
        <div class="value">12</div>
        <div class="label">Online Devices</div>
      </el-card>

      <el-card class="card">
        <div class="value">156 kWh</div>
        <div class="label">Today Energy</div>
      </el-card>

      <el-card class="card">
        <div class="value">98%</div>
        <div class="label">System Health</div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  padding: 20px;
}

.cards {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.card {
  width: 200px;
  text-align: center;
  padding: 20px 0;
}

.value {
  font-size: 28px;
  font-weight: 600;
}

.label {
  color: #8a8a8a;
  margin-top: 6px;
}
</style>
