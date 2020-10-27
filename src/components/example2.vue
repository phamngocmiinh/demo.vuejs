<template>
    <div id="example2">
       <textarea v-model="text" cols="30" rows="5"></textarea>
        <h1>Chú thích: {{msg(text)}}</h1>
    </div>
</template>
<script>
export default {
    data(){
        return{
            text: ''
        }
    },
   methods:{
       msg(text){
           return text
       }
   }
}
</script>
<style >

</style>