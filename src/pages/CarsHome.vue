<template>
  <div class="CarsHome container-fluid">
    <div class="row">
      <div class="col">
        <CarForm />
      </div>
    </div>
    <div class="row">

      <div class="col-4" v-for="c in cars" :key="c.id">
        <!-- Data passed through prop ':car' to child -->
        <CarCard :car="c"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import {carsService } from '../services/CarsService'
import CarCard from '../components/CarCard.vue'
import CarForm from '../components/CarForm.vue'

export default {
  name: 'CarsHome',
  setup(){
    // state

    // mounted
    onMounted(async ()=>{
      try {
        await carsService.getCars()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      // state,
      // computeds
      cars: computed(() => AppState.cars),
    }
  },
  components: {
    CarCard,
    CarForm
  }
}
</script>
<style>
.container {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}
    
</style>