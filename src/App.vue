<template>
    <header>
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
      <BlogHeader/>
  </header>  
  <nav>
    <router-link class="navegacion" to="/">Inicio</router-link>
    <router-link class="navegacion" to="/posts">Posts</router-link>
  </nav>
  <router-view/>
  <footer>
      <BlogFooter/>
  </footer>

</template>
<script>
    import BlogHeader from './components/BlogHeader.vue'
    import BlogFooter from './components/BlogFooter.vue'
    export default{
        name: 'app',
        components: {
            BlogHeader,
            BlogFooter,
        }
    }
</script>

<style src="./assets/styles/App.css"></style>
