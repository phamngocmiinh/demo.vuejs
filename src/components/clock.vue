<template>
  <div id="example5">
    <div class="date">{{ yearMonth }}</div>
    <div class="time">{{ dateTime }}</div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      yearMonth: "",
      dateTime: ""
    };
  },
  created() {
    this.yearMonth = moment().format("Do MMMM YYYY");

    this.dateTime = moment().format("dddd, hh:mm:ss a");

    setInterval(() => {
      this.dateTime = moment().format("dddd, hh:mm:ss a");
    }, 1000);
  }
};
</script>
<style >
html,
body {
  height: 100%;
  background-color: black;
}
#example5 {
  font-family: "Share Tech Mono", monospace;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 49%;
  transform: translate(-50%, -50%);
  color: #daf6ff;
  text-shadow: 0 0 20px rgba(10, 175, 230, 1), 0 0 20px rgba(10, 175, 230, 0);
}
.time {
  letter-spacing: 0.05em;
  font-size: 80px;
  padding: 5px 0;
}
.date {
  letter-spacing: 0.1em;
  font-size: 24px;
}
</style>