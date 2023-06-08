<template>
  <Box class="example">
    <div :style="{ padding: '10px' }">这是开发模式下的 基础组件</div>
    <Button @click="onClick">点击换主题色</Button>
  </Box>
  <Box class="example">
    <Switch v-model="state.switch" />
    <template #label>
      {{ state.switch }}
    </template>
  </Box>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Button, Box, Switch } from './src';
import { prefixName } from './src/theme/index';

const onClick = () => {
  const darkThemeName = `${prefixName}-theme-dark`;
  const html = document.querySelector('html');
  if (html?.classList.contains(darkThemeName)) {
    html?.classList.remove(darkThemeName);
  } else {
    html?.classList.add(darkThemeName);
  }
};

const state = reactive({ switch: true });
</script>

<style>
.example {
  /* height: 100%; */
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
</style>
