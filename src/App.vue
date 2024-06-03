<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Counter/>
  <LoginForm/>
  <ParentComponent/>
  <router-view></router-view>

  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'
import LoginForm from './components/LoginForm.vue'
import ParentComponent from './components/ParentComponent.vue'

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
