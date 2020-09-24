<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/favorites">Favorites</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  beforeCreate() {
    this.$store.dispatch("getAllImages");
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

#nav {
  margin-bottom: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  background: #eee;

  a {
    padding: 10px 20px;
    margin: 0 4px;
    background: #5492eb;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
      background: darken($color: #5492eb, $amount: 10);
    }

    &.router-link-exact-active {
      background: darken(#5492eb, 20);
    }
  }
}
</style>
