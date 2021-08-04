<template>
  <div class="house-form">
    <form class="d-flex" @submit.prevent="createHouse">
      <div class="form-group">
        <input
          type="number"
          name="bathrooms"
          v-model="state.newHouse.bathrooms"
          class="form-control"
          placeholder="Bathrooms..."
          required
        />
      </div>
      <div class="form-group">
        <input
          type="number"
          name="bedrooms"
          v-model="state.newHouse.bedrooms"
          class="form-control"
          placeholder="Bedrooms..."
          required
        />
      </div>
      <div class="form-group">
        <input
          type="number"
          name="year"
          v-model="state.newHouse.year"
          class="form-control"
          placeholder="Year..."
          required
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name="description"
          v-model="state.newHouse.description"
          class="form-control"
          placeholder="Description..."
          required
        />
      </div>
      <div class="form-group">
        <input
          type="number"
          name="levels"
          v-model="state.newHouse.levels"
          class="form-control"
          placeholder="Levels..."
          required
        />
      </div>
      <div class="form-group">
        <input
          type="number"
          name="price"
          v-model="state.newHouse.price"
          class="form-control"
          placeholder="Price..."
          required
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          name="imgUrl"
          v-model="state.newHouse.imgUrl"
          class="form-control"
          placeholder="Url..."
        />
      </div>
      <div class="d-flex align-items-center">
        <button type="submit" class="btn btn-outline-success">Add</button>
      </div>
    </form>
  </div>
</template>


<script>
  import { reactive } from '@vue/reactivity'
import { homesService } from '../services/HomesService'
import { useRouter } from 'vue-router'
export default {
  setup(){
    const router = useRouter()
    const state=reactive({
      newHouse:{}
    })
    return {
      state,
      async createHouse(){
        try {
          const newId = await homesService.createHouse(state.newHouse)
          state.newHouse = {}
          router.push({name: 'HouseDetails', params: {id: newId}})
        } catch (error) {
          console.error(error)
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>