<template>
  <div class="housesHome container-fluid">
    <div class="row">
      <div class="col">
        <HouseForm />
      </div>
    </div>
    <div class="row">
      <div class="col-4" v-for="h in houses" :key="h.id">
        <HouseCard :house="h"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import HouseCard from '../components/HouseCard.vue'
import HouseForm from '../components/HouseForm.vue'
import {homesService} from '../services/HomesService'

export default {
  name: 'HousesHome',
  setup(){
    // state
    onMounted(async ()=>{
      try {
        await homesService.getHouses()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      houses: computed(()=> AppState.houses)
    }
  },
  components: {
    HouseCard,
    HouseForm
  }
}
</script>
