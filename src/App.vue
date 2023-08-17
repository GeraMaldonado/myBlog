<template>
  <nav>
    <router-link to="/">Inicio</router-link>
    <router-link to="/posts">Posts</router-link>
  </nav>
  <router-view/>

</template>


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
