<script lang="ts">
  import type { Image } from "@/types/cms";

  export let title: string = "";
  export let images: Image[] = [];
</script>

<section
  class="flex flex-col items-center justify-start w-full px-4 pt-4 gap-2 lg:gap-4"
>
  <h2 class="text-3xl font-bold">
    {title}
  </h2>
  <div
    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-3 xl:gap-4"
  >
    {#each images as { alt, title, url }}
      <img
        src={url}
        {alt}
        {title}
        class="rounded-sm md:rounded-md lg:rounded-lg w-full transition-all hover:scale-105 aspect-video object-cover"
      />
    {/each}
  </div>
</section>
