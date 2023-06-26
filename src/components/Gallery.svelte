<script lang="ts">
  import type { Image } from "@/types/cms";

  export let title: string = "";
  export let images: Image[] = [];

  let carouselShown = false;
</script>

{#if images.length > 0}
  <section
    class="flex flex-col items-center justify-start w-full px-4 pt-4 gap-2 lg:gap-4"
  >
    <div
      class={`fixed inset-0 bg-silver w-full h-full ${
        carouselShown ? "" : "hidden"
      }`}
    >
      bruh
    </div>
    <h2 class="text-3xl font-bold">
      {title}
    </h2>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-3 xl:gap-4 point"
    >
      {#each images as { alt, title, url }}
        <button
          class="rounded-sm md:rounded-md lg:rounded-lg w-full aspect-video"
          on:click={() => {
            console.log("Bruh");
            carouselShown = true;
          }}
        >
          <img
            src={url}
            {alt}
            {title}
            on:click={() => {
              console.log("Bruh");
              carouselShown = true;
            }}
            on:keyup={() => (carouselShown = true)}
            class="rounded-sm md:rounded-md lg:rounded-lg w-full transition-all hover:scale-105 aspect-video object-cover cursor-pointer"
          />
        </button>
      {/each}
    </div>
  </section>
{/if}
