<script>
  import Fa from "svelte-fa";
  import {
    faCheck,
    faRotateLeft,
    faTrash,
  } from "@fortawesome/free-solid-svg-icons";

  export let data;

  let filter = "All";
</script>

<select bind:value={filter} class="select w-full p-2">
  <option>All</option>
  <option>Watched</option>
  <option>UnWatched</option>
</select>

{#each data.movies as movie}
  {#if filter === "All"}
    <form method="POST" class="flex justify-evenly p-2">
      <p class="flex-1">{movie.title}</p>
      <input hidden type="text" bind:value={movie.uuid} name="movie" />
      <input hidden type="text" bind:value={movie.status} name="status" />
      <button formaction="?/updateMovie" class="p-2">
        {#if movie.status === "watched"}
          <Fa icon={faRotateLeft} class="text-error" />
        {:else}
          <Fa icon={faCheck} class="text-primary" />
        {/if}
      </button>
      <button formaction="?/deleteMovie" class="p-2"
        ><Fa icon={faTrash} class="text-error" /></button
      >
    </form>
  {:else if filter === "Watched" && movie.status === "watched"}
    <form method="POST" class="flex justify-evenly p-2">
      <p class="flex-1">{movie.title}</p>
      <input hidden type="text" bind:value={movie.uuid} name="movie" />
      <input hidden type="text" bind:value={movie.status} name="status" />
      <button formaction="?/updateMovie" class="p-2">
        {#if movie.status === "watched"}
          <Fa icon={faRotateLeft} class="text-error" />
        {:else}
          <Fa icon={faCheck} class="text-primary" />
        {/if}
      </button>
      <button formaction="?/deleteMovie" class="p-2"
        ><Fa icon={faTrash} class="text-error" /></button
      >
    </form>
  {:else if filter === "UnWatched" && movie.status === "new"}
    <form method="POST" class="flex justify-evenly p-2">
      <p class="flex-1">{movie.title}</p>
      <input hidden type="text" bind:value={movie.uuid} name="movie" />
      <input hidden type="text" bind:value={movie.status} name="status" />
      <button formaction="?/updateMovie" class="p-2">
        {#if movie.status === "watched"}
          <Fa icon={faRotateLeft} class="text-error" />
        {:else}
          <Fa icon={faCheck} class="text-primary" />
        {/if}
      </button>
      <button formaction="?/deleteMovie" class="p-2"
        ><Fa icon={faTrash} class="text-error" /></button
      >
    </form>
  {/if}
{/each}

<h3 class="text-center p-4 text-xl">New Movie</h3>
<form method="POST" action="?/addMovie" class="flex justify-center">
  <input
    type="text"
    name="movie"
    class="input input-bordered input-sm"
    placeholder="Movie Title"
  />
  <button class="btn btn-sm btn-primary">Add</button>
</form>
