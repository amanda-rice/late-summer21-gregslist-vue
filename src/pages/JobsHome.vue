<template>
  <div class="JobsHome container-fluid">
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
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import JobCard from '../components/JobCard.vue'
import JobForm from '../components/JobForm.vue'
import {jobsService} from '../services/JobsService'

export default {
  name: 'JobsHome',
  setup(){
    // state

    onMounted(async ()=>{
      try {
        await jobsService.getJobs()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      jobs: computed(()=> AppState.jobs)
      // methods
    }
  },
  components: {
    JobCard,
    JobForm
  }
}
</script>
