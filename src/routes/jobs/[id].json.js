import { jobs } from "./_data"
export function get(req, res, next) {
   const { id } = req.params;
   const job = jobs.find(job => job.id === +id)
   if (job) {
      res.statusCode = 200
      res.end(JSON.stringify(job))
   } else { 
      res.statusCode = 404
      res.end(JSON.stringify({error:'Job does not exists'}))
   }
}