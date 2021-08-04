import { AppState } from "../AppState";
import { sandbox } from "./AxiosService";

class HomesService{
  async getHouses() {
    let res = await sandbox.get("/houses")
    console.log(res.data)
    AppState.houses = res.data
  }
  async getHouseById(id) {
    let res = await sandbox.get(`/houses/${id}`)
    console.log(res.data)
    AppState.activeHouse = res.data
  }
  async createHouse(house) {
    let res = await sandbox.post(`/houses`, house)
    console.log(res.data)
    AppState.houses.push(res.data)
    return res.data.id
  }
  async destroy(id) {
    await sandbox.delete(`/houses/${id}`)
    AppState.houses = AppState.houses.filter(house => house.id !==id)
  }
}
export const homesService = new HomesService()