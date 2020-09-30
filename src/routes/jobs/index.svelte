<script context="module">
   console.log("module");
   export async function preload(page, session) {
      const res = await this.fetch("/jobs.json");
      const jobs = await res.json();

      return { jobs };
   }
</script>

<script>
   export let jobs;
   console.log(jobs);
   console.log("component");
   console.log("jobs");
</script>

<style>
</style>

<div>List of all jobs</div>
<ul>
   {#each jobs as job}
      <li><a href="/">{job.title}</a></li>
   {/each}
</ul>
