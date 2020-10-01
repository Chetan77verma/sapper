<script context="module">
   export async function preload(page, session) {
      const { id } = page.params;
      console.log(id);
      //we need a seperate server route to handle this.
      const res = await this.fetch(`/jobs/${id}.json`);
      if (res.status === 200) {
         const job = await res.json();
         return { job };
      } else if (res.status === 404) {
         const { error } = await res.json();
         this.error(404, error);
      }
   }
</script>

<script>
   export let job;
   console.log(job);
</script>

<style>
</style>

<div class="job">
   <h2>{job.title}</h2>
   <p class="details">{job.details}</p>
</div>
