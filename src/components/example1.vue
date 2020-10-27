<template>
  <div id="example1">
    <img :src="img" alt="" :width="width" />


    <button @click="click" type="button" class="btn" :style="style">
      min
    </button>
    <button @click="click1" type="button" class="btn" :style="style">
      medium
    </button>
    <button @click="click2" type="button" class="btn" :style="style">
      max
    </button>

  </div>
</template>

<script>
import img from "../assets/henry_cavill.jpg";

export default {
  name: "App",
  data() {
    return {
      width: 400,
      img: img,

      style: {
        "background-color": "red",
        "border-radius": 5 + "px",
        margin: 10 + "px",
        padding: 10 + "px",
      },
    };
  },

  methods: {
    click() {
      this.width = 200;
    },
    click1() {
      this.width = 500;
    },
    click2() {
      this.width = 800;
    },
  },

};
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
.active {
  color: red;
  font-style: italic;
  text-decoration: underline;
}
</style>
