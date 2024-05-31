<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Home from './views/home.vue'
import { ref } from 'vue'
import type {  Dayjs  } from 'dayjs'
import dayjs from 'dayjs'
type  RangeValue = [ Dayjs, Dayjs ]
const show = ref<boolean>(false)
const value1 = ref<RangeValue>()
const openModal = () => {
  console.log(111);
  
    show.value = true
}
const closeModal = (val: boolean) => {
    show.value = val
}
const timeChange = (date: Dayjs[]) => {
    if( !date ) return 
    const startTime = dayjs(date[0]).format('YYYY-MM-DD')
    const endTime = dayjs(date[1]).format('YYYY-MM-DD')
    console.log(startTime, endTime, dayjs().endOf('day'));
    
}
const disabledDate = (current: Dayjs) => {
  return current && current > dayjs().endOf('day');
}
</script>

<template>
  <a-button @click="openModal">弹窗</a-button>
  <a-range-picker v-model:value="value1" @change="timeChange" format="YYYY-MM-DD" :disabledDate="disabledDate"  />
  <Home />
  <HelloWorld :isShow="show" @close="closeModal" />
</template>

<style scoped>

</style>
