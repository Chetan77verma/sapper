<script context="module">
   export async function preload(page, session) {
      const { id } = page.params;
      console.log(id);
      //we need a seperate server route to handle this.
      const res = await this.fetch(`/jobs/${id}.json`);
      const job = await res.json();

      return { job };
   }
</script>

<script>
   export let job;
   console.log(job);
</script>
