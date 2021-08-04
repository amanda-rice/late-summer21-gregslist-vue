<template>
  <div class="job-details-page row align-items-center justify-content-center">
    <div class="col-10 align-self-center text-center">
        <h1>Welcome to the job details</h1>
        <div class="text-center">
          <p class="m-0"><b>{{job.title}}</b></p>
          <p class="m-0">{{job.rate}} per hour</p>
          <p class="m-0">{{job.hours}} hours per week</p>
          <p class="m-0">{{job.description}}</p>
          <p class="m-0">${{job.company}}</p>
        </div>
        <button class="btn btn-danger" @click="destroy">Delete</button>
    </div>
  </div>
</template>


<script>
  import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { jobsService } from '../services/JobsService'
import {useRoute, useRouter} from 'vue-router'
export default {
  name: 'job-details-page',
  setup(){
    const route = useRoute()
    const router = useRouter()
    onMounted(async()=>{
      try {
        await jobsService.getJobById(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    return {
      job: computed(()=>AppState.activeJob),
      async destroy(){
        try {
          await jobsService.destroy(route.params.id)
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