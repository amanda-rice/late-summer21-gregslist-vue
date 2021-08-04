import { AppState } from "../AppState";
import { sandbox } from "./AxiosService";

class JobsService{
  async getJobs() {
    const res = await sandbox.get('/jobs')
    console.log('jobs', res.data)
    AppState.jobs = res.data
  }
  async getJobById(id) {
    const res = await sandbox.get(`/jobs/${id}`)
    console.log(res.data)
    AppState.activeJob = res.data
  }
  async createJob(job) {
    const res = await sandbox.post('/jobs', job)
    console.log(res.data)
    AppState.jobs.push(res.data)
    return res.data.id
  }
  async destroy(id) {
    await sandbox.delete(`/jobs/${id}`)
    AppState.jobs = AppState.jobs.filter(job => job.id !==id)
  }
}
export const jobsService = new JobsService()