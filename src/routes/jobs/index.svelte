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
   ul {
      padding: 0;
   }
   h2 {
      text-align: center;
   }
   li {
      list-style-type: none;
   }
   li a {
      display: block;
      padding: 15px;
      border: 1px solid #f2f2f2;
      border-radius: 8px;
      margin: 10px auto;
      text-decoration: none;
   }
   li a:hover {
      background: #fbfbfb;
   }
   div {
      text-align: center;
   }
</style>

<h2>List of all jobs</h2>
<ul>
   {#each jobs as job}
      <li><a rel="prefetch" href={`jobs/${job.id}`}>{job.title}</a></li>
   {/each}
</ul>

<div><a href="jobs/create" class="btn">Add a new job</a></div>
