<template>
    <div id="example4">
        <div>
        <label for="">Họ: </label> <input type="text" v-model="firstName">
        <label for="">Tên: </label> <input type="text" v-model="lastName">
        </div>
        <br>
        <div>Họ và Tên: {{fullName}}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            firstName: '',
            lastName: ''
        }
    },
    computed:{
        fullName: function(){
            return this.firstName + " " + this.lastName
        }
    }
}
</script>
<style >

</style>