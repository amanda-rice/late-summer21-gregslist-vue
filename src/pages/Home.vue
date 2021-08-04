<template>
  <div class="home container-fluid">
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
    <div class="row">
      <div class="col">
        <JobForm />
      </div>
    </div>
    <div class="row">
      <div class="col-4" v-for="j in jobs" :key="j.id">
        <JobCard :job="j"/>
      </div>
    </div>
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
import {carsService } from '../services/CarsService'
import CarCard from '../components/CarCard.vue'
import CarForm from '../components/CarForm.vue'
import HouseCard from '../components/HouseCard.vue'
import HouseForm from '../components/HouseForm.vue'
import {homesService} from '../services/HomesService'
import JobCard from '../components/JobCard.vue'
import JobForm from '../components/JobForm.vue'
import {jobsService} from '../services/JobsService'

export default {
  name: 'Home',
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
    onMounted(async ()=>{
      try {
        await jobsService.getJobs()
      } catch (error) {
        console.error(error)
      }
    })
    onMounted(async ()=>{
      try {
        await homesService.getHouses()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      // state,
      // computeds
      cars: computed(() => AppState.cars),
      houses: computed(()=> AppState.houses),
      jobs: computed(()=> AppState.jobs)
      // methods
    }
  },
  components: {
    CarCard,
    CarForm,
    HouseCard,
    HouseForm,
    JobCard,
    JobForm
  }
}
</script>
