<template>
  <div>
    <span
      :class="{
        [`${prefixName}-switch`]: true,
        [`${prefixName}-switch-on`]: state.me_checked
      }"
      :value="modelValue"
      @click="toggle"
    ></span>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import { prefixName } from '../theme/index';

export interface Props {
  modelValue: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: true
});

const state = reactive({ me_checked: props.modelValue });

const emit = defineEmits(['update:modelValue']);
watch(
  () => state.me_checked,
  (value, oldValue) => {
    if (value !== oldValue) {
      emit('update:modelValue', value);
    }
  }
);

const toggle = () => {
  state.me_checked = !state.me_checked;
};
</script>
