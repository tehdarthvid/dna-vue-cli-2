<template>
    <img :src="`${src}`" v-on:load="onLoad" 
    v-bind:class="{'img__fade-in':hasImgLoaded}"
    />
</template>

<script>
const isWindowFit = true;

export default {
  name: "LazyImg",
  props: {
    src: { type: String, default: `` }
  },
  data() {
    console.log(this.src);
    return {
      hasImgLoaded: false
    };
  },
  methods: {
    onLoad({ target: img }) {
      this.$emit("evt-img-loaded", img);
      this.hasImgLoaded = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  opacity: 0;
  width: 100%;
  height: 100%;
}

.img__fade-in {
  opacity: 1;
  transition: opacity 500ms;
}
</style>