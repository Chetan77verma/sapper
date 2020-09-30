import { jobs } from "./_data" //   `_` is used to tell sapper that it is not server route
import { v4 as uuidv4 } from "uuid"
export function get(req, res, next) {
   res.end(JSON.stringify(jobs))
}

export function post(req,res,next) { 
   console.log("Request", req)
   const { title, details } = req.body
   jobs.push({ id: uuidv4(), title, details })
   res.end(JSON.stringify(jobs))
}