<template>
  <div class="modal" @click="handleClick"
    :style="wrapperStyle"
    >
    <div class="lazy-img-wrapper" 
      :style="modalStyle"
    >
      <LazyImg :src="activeCard.bgImageURL" @evt-img-loaded="onLoad"/>
    </div>
  </div>
</template>

<script>
// in full builds helpers are exposed as Vuex.mapState
import { mapState, mapActions } from "vuex";

import LazyImg from "@/components/LazyImg";
const isWindowFit = true;
const modalRaito = 0.9;

export default {
  // Duplicate names with other components will cause problems ont he Router.
  name: "ImgModal",
  // If it's not here, you can't use it on <template>.
  components: { LazyImg },
  // Triggers warnings. Better to be explicit here.
  props: {
    //src: { type: String, default: `` }
  },
  // Must be a function to individualize instances. Can be an object
  // https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function
  data: function() {
    //console.log(`ImgModal ${this.src}`);
    return {
      dimentions: {
        naturalWidth: 0,
        naturalHeight: 0
      }
    };
  },
  mounted: function() {
    document.addEventListener("keydown", this.handleKeyDown, false);
  },
  beforeDestroy: function() {
    document.removeEventListener("keydown", this.handleKeyDown, false);
  },
  // Treated like variables, like the items in props or data.
  // Don't let the actual functions fool you!
  // Don't call like a function in <template>.
  computed: {
    ...mapState(["activeCard"]),
    modalStyle: function() {
      if (
        0 == this.dimentions.naturalWidth ||
        0 == this.dimentions.naturalHeight
      ) {
        return {};
      } else if ("undefined" == typeof this.activeCard.title) {
        return { display: `none` };
      } else {
        //this.src = this.activeCard;

        let width = `auto`;
        let height = `auto`;
        let { naturalWidth, naturalHeight } = this.dimentions;
        let viewWidth = window.innerWidth;
        let viewHeight = window.innerHeight;

        //console.log(`view (${viewWidth}, ${viewHeight})`);

        if (isWindowFit) {
          height = viewHeight;
          width = Math.floor(naturalWidth * height / naturalHeight);

          if (width > viewWidth) {
            width = viewWidth;
            height = Math.floor(naturalHeight * width / naturalWidth);
          }

          console.log(`new size (${width}, ${height})`);
        }
        width *= modalRaito;
        height *= modalRaito;
        return { display: `block`, width: `${width}px`, height: `${height}px` };
      }
    },
    wrapperStyle: function() {
      if (
        0 == this.dimentions.naturalWidth ||
        0 == this.dimentions.naturalHeight
      ) {
        return {};
      } else if ("undefined" == typeof this.activeCard.title) {
        return { display: `none` };
      }
      return { display: `block` };
    }
  },
  methods: {
    // Map store actions.
    ...mapActions(["setActiveCard"]),
    onLoad(img) {
      this.dimentions = {
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight
      };
      console.log(
        `ImgModal ${this.src} (${this.dimentions.naturalWidth}, ${
          this.dimentions.naturalHeight
        }) loaded`
      );
    },
    handleClick(e) {
      //console.log(`${title} dblclick ${e.pageX}, ${e.pageY}`);
      this.setActiveCard({});
    },
    handleKeyDown(event) {
      if (event.keyCode === 27) {
        //this.props.setActiveCard(``);
        this.setActiveCard({});
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.lazy-img-wrapper {
  //margin-left: auto;
  //margin-right: auto;
  box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0;

  //display: none;
  margin: auto;
  top: 10;

  position: absolute;
  top: -9999px;
  bottom: -9999px;
  left: -9999px;
  right: -9999px;
  //margin: auto;
}
.modal {
  z-index: 1;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.61);
  position: fixed;

  height: 100%;
  width: 100%;

  left: 0;
  top: 0;
  //padding-top: 60px;

  display: none;
}
</style>
