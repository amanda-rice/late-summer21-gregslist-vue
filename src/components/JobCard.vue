<template>
  <div class="job m-2 bg-light shadow">
    <router-link :to="{name: 'JobDetails', params: {id:job.id}}">
      <div class="p-3">
        <div class="text-center">
          <p class=""><b>{{job.jobTitle}}</b></p>
          <p class="">{{job.description}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props:{
    job:{
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