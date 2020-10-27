<template>
<div class="form">
    <form>
  <div class="form-group">
    <label for="InputName">Input Name</label>
    <input type="text" class="form-control" id="InputName" v-model="employee.name">
  </div>
    <div class="form-group">
    <label for="InputAge">Input Age</label>
    <input type="text" class="form-control" id="InputAge" v-model="employee.age">
  </div>
    <div class="form-group">
    <label for="InputTel">Input Tel</label>
    <input type="text" class="form-control" id="InputTel" v-model="employee.tel">
  </div>
  <button class="btn btn-primary" @click="clickSave()">Save</button>
</form>
</div>
</template>
<script>
export default {
  name: 'editemployee',
  props:{
    employee: Object
  },
  methods:{
    clickSave(){
      this.$emit('save', this.employee)
    }
  }
};
</script>
<style >
.form{
  margin-top: 40px;
  margin-bottom: 50px;
}
</style>