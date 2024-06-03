<!-- src/components/Counter.vue -->
<template>
    <div>
      <p>{{ count }}</p>
      <button @click="increment">Increment</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const count = ref(0);
  const increment = () => {
    count.value++;
  };
  </script>
  