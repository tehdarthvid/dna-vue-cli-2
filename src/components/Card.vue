<template>
  <div class="card-wrap"
    ref="card">
    <div class="card"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousemove="handleMouseMove"
    @dblclick="handleDblClick"
      :style="cardStyle">
      <div class="card-bg" 
      :class="{'card-bg__fade-in': bgImageURL}"
      :style="[cardBgTransform, cardBgImage]"></div>
      <div class="card-info">
        <slot name="header"></slot>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Card",
  mounted() {
    this.width = this.$refs.card.offsetWidth;
    this.height = this.$refs.card.offsetHeight;
    let bgImg = new Image();
    bgImg.onload = this.onBgImageLoad;
    bgImg.src = this.dataImage;
    //console.log(this.$slots);
    //console.log(this.$slots.header[0].elm.innerHTML);
  },
  props: ["dataImage"],
  // http://exploringjs.com/es6/ch_arrow-functions.html#sec_arrow-function-syntax
  // function (x) { return x * x }; x => x * x;
  // Ergo, this version of data actually has a "return".
  data: () => ({
    //width: 0,
    //height: 0,
    bgImageURL: ``,
    mouseX: 0,
    mouseY: 0,
    mouseLeaveDelay: null
  }),
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 30;
      const rY = this.mousePY * -30;
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -40;
      const tY = this.mousePY * -40;
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`
      };
    },
    cardBgImage() {
      return {
        //backgroundImage: `url(${this.dataImage})`
        backgroundImage: `url(${this.bgImageURL})`
      };
    }
  },
  methods: {
    // Map store actions.
    ...mapActions(["setActiveCard"]),
    // Onwards are local methods.
    onBgImageLoad({ target: img }) {
      //console.log(`${img.src} loaded`);
      this.bgImageURL = img.src;
    },
    handleDblClick(e) {
      let bgImageURL = this.dataImage;
      let title,
        date = ``;
      if (this.$slots.header) {
        title = this.$slots.header[0].elm.innerHTML;
        date = this.$slots.content[0].elm.innerHTML;
      }
      console.log(`${title} dblclick ${e.pageX}, ${e.pageY}`);
      this.setActiveCard({ title, bgImageURL, date });
    },
    handleMouseMove(e) {
      let cardName = this.$slots.header
        ? this.$slots.header[0].elm.innerHTML
        : "none";
      //console.log(`${cardName} mousemove ${e.pageX}, ${e.pageY}`);

      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 1000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Add scss to pre-loader for this to work. -->
<style scoped lang="scss">
$hoverEasing: cubic-bezier(0.23, 1, 0.32, 1);
$returnEasing: cubic-bezier(0.445, 0.05, 0.55, 0.95);

.card-wrap {
  // Moved these here from card.
  // If we didn't, card-wrap can occupy the whole width, screwing the formula.
  width: 240px;
  height: 320px;

  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  // background-color: #fff;

  &:hover {
    .card-info {
      transform: translateY(0);
    }
    .card-info p {
      opacity: 1;
    }
    .card-info,
    .card-info p {
      transition: 0.6s $hoverEasing;
    }
    .card-info:after {
      transition: 5s $hoverEasing;
      opacity: 1;
      transform: translateY(0);
    }
    .card-bg {
      //sped up hover easing
      transition: 0.6s $hoverEasing, opacity 1s $hoverEasing;
      opacity: 0.8;
    }
    .card {
      transition: 0.6s $hoverEasing, box-shadow 2s $hoverEasing;
      box-shadow: rgba(white, 0.2) 0 0 40px 5px, rgba(white, 1) 0 0 0 1px,
        rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
        inset white 0 0 0 6px;
    }
  }
}

.card {
  position: relative;
  flex: 0 0 240px;
  width: 100%;
  height: 100%;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(black, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset rgba(white, 0.5) 0 0 0 6px;
  transition: 1s $returnEasing;
}

.card-bg {
  // Defaulted to invisible to allow image to lazy-load.
  //opacity: 0.5;
  opacity: 0;
  position: absolute;
  top: -20px;
  left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  // made return easing faster
  transition: 1s $returnEasing, opacity 2s 1s $returnEasing;
  pointer-events: none;
}

.card-bg__fade-in {
  opacity: 0.5;
  transition: opacity 1500ms;
}

.card-info {
  // Added to not cut off titles.
  word-break: keep-all;
  padding: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  // card-info DEFAULT Y postion is via an FFF'n xfrom displacement!!!
  //transform: translateY(40%);
  //transform: translateY(20%);
  transform: translateY(20px);
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);

  p {
    opacity: 0;
    text-shadow: rgba(black, 1) 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  * {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(#000, 0.6) 100%
    );
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s $returnEasing;
  }
}

.card-info h1 {
  //font-family: "Playfair Display";
  //font-family: "Raleway";
  //font-size: 36px;
  font-size: 24px;
  font-weight: 700;
  text-shadow: rgba(black, 0.5) 0 10px 10px;
}
</style>
