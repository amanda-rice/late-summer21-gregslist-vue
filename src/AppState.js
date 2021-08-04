import { reactive } from "vue"

export const AppState = reactive({
  cars: [],
  houses: [],
  jobs: [],
  activeCar: {},
  //REVIEW why do we do active car?
  activeHouse: {},
  activeJob: {}
})