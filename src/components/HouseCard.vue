<template>
  <div class="house m-2 bg-light shadow">
    <router-link :to="{name: 'HouseDetails', params: {id:house.id}}">
      <img :src="house.imgUrl" class="w-100" alt="house.description">
      <div class="p-3">
        <div class="text-center">
          <p class="m-0">{{house.bedrooms}} bedroom/{{house.bathrooms}} bath</p>
          <p class="m-0"><b>${{house.price}}</b></p>
        </div>
      </div>
    </router-link>

  </div>
</template>

<script>
//TODO change house alt in image source
export default {
  props:{
    house:{
      type: Object,
      required: true
    }
  },
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>