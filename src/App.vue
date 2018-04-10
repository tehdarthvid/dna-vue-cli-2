<template>
  <div id="app">
    <div id="version">{{versionString}}</div>
    <div id="title">
      <h1>darthvid's influences DNA</h1>
      <p>[also the target for webdev study and experiments]</p>
    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>
<!--
    <router-link to="/">home</router-link>
    <router-link to="/deck">deck</router-link>
    <router-link to="/card">card</router-link>
    <router-link to="/db">dbz</router-link>
    <router-link to="/sw">sw</router-link>

-->

<script>
export default {
  name: "App",
  created: function() {
    console.log(this.versionString);
  },
  computed: {
    versionString: function() {
      return `${
        "development" === process.env.NODE_ENV ? "dev" : ""
      } v${__PKG_VERSION__} b${__GIT_COMMIT_NUMBER__}`;
    }
  }
};
</script>

<style>
#app {
  /*font-family: "Avenir", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
body {
  margin: 40px 0;
  font-family: "Raleway";
  font-size: 14px;
  font-weight: 500;
  background-color: #bcaaa4;
  -webkit-font-smoothing: antialiased;
}

.title {
  font-family: "Raleway";
  font-size: 24px;
  font-weight: 700;
  color: #5d4037;
  text-align: center;
}

p {
  line-height: 1.5em;
}

h1 + p,
p + p {
  margin-top: 10px;
}
* {
  -webkit-margin-before: 0px;
  -webkit-margin-after: 0px;
}

#version {
  width: 100%;
  top: 0;
  position: absolute;
  text-align: right;
}
</style>
