import { jobs } from "./_data"
export function get(req, res, next) {
   const { id } = req.params;
   const job = jobs.find(job => job.id === +id)
   res.end(JSON.stringify(job))
}