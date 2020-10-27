<template>
  <div id="example3">
        <div :class="{ active: active }">
      <h1>{{ msg }}</h1>
    </div>
    <button @click="active = true" type="button" class="btn" :style="style">
      active text
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
           firstName: "Henry",
      lastName: "Cavill",
      active: false,
      style: {
        "background-color": "red",
        "border-radius": 5 + "px",
        margin: 10 + "px",
        padding: 10 + "px",
      },
  }
  },  computed: {
    msg: function () {
      return this.firstName + " " + this.lastName;
    },
  },
}
</script>
<style >
</style>