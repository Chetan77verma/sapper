import { jobs } from "./_data" //   `_` is used to tell sapper that it is not server route

export function get(req, res, next) {
   res.end(JSON.stringify(jobs))
}