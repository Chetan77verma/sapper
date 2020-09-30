<script>
   let title = "";
   let details = "";

   const handleSubmit = () => {
      console.log("inside");
      console.log(title, details);
   };
</script>

<style>
   h2 {
      text-align: center;
   }
   form {
      max-width: 360px;
      margin: 40px auto;
      text-align: center;
   }
   input,
   textarea {
      display: block;
      width: 100%;
      padding: 10px;
      font-family: arial;
      margin: 10px auto;
      border: 1px solid #eee;
      border-radius: 8px;
   }
</style>

<h2>Add a new Job</h2>
<form on:submit|preventDefault={handleSubmit}>
   <input type="text" placeholder="Title" bind:value={title} />
   <textarea
      name="job details"
      id="job details"
      placeholder="Enter job details"
      bind:value={details} />
   <button type="submit" class="btn">Submit</button>
</form>
