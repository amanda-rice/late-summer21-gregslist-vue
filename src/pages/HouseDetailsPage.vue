<template>
  <div class="house-details-page">
    <h1>Welcome to the house details</h1>
    <img :src="house.imgUrl" :alt="house.description">
    <p>{{house.bedrooms}} bedrooms/{{house.bathrooms}} baths</p>
    <p>
      {{house.description}}
    </p>

    <button class="btn btn-danger" @click="destroy">Delete</button>
  </div>
</template>


<script>
  import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { homesService } from '../services/HomesService'
import {useRoute, useRouter} from 'vue-router'
export default {
  name: 'house-details-page',
  setup(){
    const route = useRoute()
    const router = useRouter()
    onMounted(async()=>{
      try {
        await homesService.getHouseById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      house: computed(()=>AppState.activeHouse),
      async destroy(){
        try {
          await homesService.destroy(route.params.id)
          router.push({name: 'Home'})
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components:{}
}
</script>


<style lang="scss" scoped>

</style>