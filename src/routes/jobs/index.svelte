<script context="module">
   console.log("module");
   export async function preload(page, session) {
      const res = await this.fetch("/data.json");
      const todos = await res.json();

      return { todos };
   }
</script>

<script>
   export let todos;
   console.log(todos);
   console.log("component");
   console.log("jobs");
</script>

<style>
</style>

<div>List of all jobs</div>
