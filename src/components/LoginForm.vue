<template>
    <div>
      <form @submit.prevent="submit">
        <input type="text" v-model="username" placeholder="Username" />
        <input type="password" v-model="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const username = ref('');
  const password = ref('');
  
  const submit = () => {
    console.log(`Username: ${username.value}, Password: ${password.value}`);
  };
  </script>

<style scoped>
form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 1rem;
}
</style>