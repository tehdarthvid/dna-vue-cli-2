<template>
<div>
  <ImgModal/>
  <div class="container">
    <Card v-for="card in cardList" :key="card.title" :data-image="card.bgImageURL">
      <h1 slot="header">{{card.title}}</h1>
      <p slot="content">{{card.date}}</p>
    </Card>
  </div>
  </div>
</template>
<!--
{
    title: "Star Wars",
    bgImageURL:
      "https://33hpwq10j9luq8gl43e62q4e-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/1jw_tyZoU5qoOrOOOvQlBLg.jpeg",
    date: "25 May 1977"
  }
<Card data-image="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop=">
      <h1 slot="header">Canyons</h1>
      <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Card>
    <Card data-image="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
      <h1 slot="header">Beaches</h1>
      <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Card>
    <Card data-image="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=">
      <h1 slot="header">Trees</h1>
      <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Card>
    <Card data-image="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop=">
      <h1 slot="header">Lakes</h1>
      <p slot="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Card>
-->
<script>
import Card from "@/components/Card";
import ImgModal from "@/components/ImgModal";

export default {
  name: "Deck",
  components: { Card, ImgModal },
  props: {
    cardList: { type: Array, default: [] }
  }
};
</script>


<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
