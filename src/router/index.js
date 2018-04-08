import Vue from "vue";
import Router from "vue-router";

import HelloWorld from "@/components/HelloWorld";
import LazyImg from "@/components/LazyImg";
import ImgModal from "@/components/ImgModal";
import Card from "@/components/Card";
import Deck from "@/components/Deck";

import testCardList from "@/constants/testCardList";

Vue.use(Router);

const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };

export default new Router({
  routes: [
    {
      path: "/",
      name: "root",
      component: Deck,
      props: { cardList: testCardList }
    },
    {
      path: "/hello",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/deck",
      name: "Deck",
      component: Deck,
      props: { cardList: testCardList }
    },
    {
      path: "/card",
      name: "Card",
      component: Card,
      props: { dataImage: `http://www.retrogames.cz/games/005/NES_00.gif` }
    },
    {
      path: "/db",
      name: "DragonBall",
      component: ImgModal,
      props: { src: `https://i.ytimg.com/vi/ISBe8FcWCXI/maxresdefault.jpg` }
    },
    {
      path: "/sw",
      name: "StarWars",
      component: ImgModal,
      props: {
        src: `https://33hpwq10j9luq8gl43e62q4e-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/1jw_tyZoU5qoOrOOOvQlBLg.jpeg`
      }
    },
    { path: "/foo", component: Foo },
    { path: "/bar", component: Bar }
  ]
});
