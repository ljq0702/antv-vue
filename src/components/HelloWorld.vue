<script setup lang="ts">
import { ref, watch } from 'vue'
const emit = defineEmits(['close'])
const prop = defineProps({
  isShow: {
    type: Boolean,
    default: false
  }
})
const open = ref<boolean>(false)
watch(()=>prop.isShow,(newval:boolean) => {
    open.value = newval
})
const handleOk = (e: MouseEvent) => {
    console.log(e);
}
const handleCancle = () => {
  emit('close', false)
}
</script>

<template>
   <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk" @cancel="handleCancle">
      <div class="w-20 h-20 bg-blue-500"></div>
      <a-button type="primary">dushu</a-button>
    </a-modal>
</template>

<style scoped lang="less">

</style>
