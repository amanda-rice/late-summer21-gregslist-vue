import { reactive } from "vue"

export const AppState = reactive({
  cars: [],
  houses: [],
  activeCar: {},
  //REVIEW why do we do active car?
  activeHouse: {}
})