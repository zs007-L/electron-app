<template>
  <RouterView />
  <!-- <el-button type="primary" @click="sendElectron('minimize')">最小化</el-button>
  <el-button type="primary" @click="sendElectron('maximize')">最大化</el-button>
  <el-button type="primary" @click="sendElectron('close')">关闭</el-button> -->
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

const sendElectron = (message: string) => {
  const { electron } = window as any
  electron.send(message)
}
</script>
