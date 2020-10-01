<script>
	import { onMount } from "svelte";

	console.log("home");

	// onMount(() => {
	// 	fetch("www.google.com/jobs");
	// 	console.log("inside on mount");
	// });

	//try your to code safely because 1st landing page runs 1st on server and thenn on browser
	// life cycle hooks are  for only browser so  they will not run on server
</script>

<style>
	h1,
	p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	div {
		text-align: center;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Job Ninja</title>
</svelte:head>

<div>
	<img src="successkid.jpg" alt="logo" />
	<h1>Jobs for ninjas</h1>
	<p>Find your new assignments here</p>
	<a href="jobs" class="btn">View jobs</a>
</div>
