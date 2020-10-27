<template>
  <div id="example6">
    
  </div>
</template>
<script>
import add from "../components/add";
export default {
  data() {
    return {

    };
  },
  components: {
    add: add
  },
  methods:{
      clickAdd(){
          let employee = {
          id: Math.floor(Math.random() * 1000000),
          name: '',
          age: '',
          Tel: ''
          }
          this.employee = employee
      },
      clickSave(employee){
          this.list().push(employee)
      }
  }
}
</script>
<style >
.add {
  margin-top: 30px;
  width: 50%;
  margin-left: 25%;
}
.save{
    text-align: left;
}
</style>