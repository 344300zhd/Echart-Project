<template>
  <div class="index-box">
    {{ obj.name }} {{ obj.age}}
    <button @click="change">修改</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      obj:{
        name:"zhd"
      }
    }
  },
  created(){
    this.$set(this.obj,'age',19)
  },
  methods:{
    change(){
      // delete this.obj.name
      this.$delete(this.obj,"name")
    }
  },
  mounted(){
    this.$set(this.obj,'age',19)
  }
}
</script>
