<script lang="ts">
  import type { Image } from "@/types/cms";

  export let title: string = "";
  export let images: Image[] = [];

  let carouselShown = false;
  let selectedIndex: number | undefined = undefined;
  let selectedImage: Image | undefined = undefined;
  $: selectedImage =
    selectedIndex !== undefined ? images[selectedIndex ?? 0] : undefined;

  function handleImageClick(index: number) {
    selectedIndex = index;
    carouselShown = true;
  }

  function handleNextImage() {
    if (selectedIndex === undefined) {
      return;
    }

    selectedIndex = (selectedIndex + 1) % images.length;
  }

  function handlePrevImage() {
    if (selectedIndex === undefined) {
      return;
    }

    if (selectedIndex == 0) {
      selectedIndex = images.length - 1;
      return;
    }

    selectedIndex--;
  }
</script>

{#if images.length > 0}
  <section
    class="flex flex-col items-center justify-start w-full px-4 pt-4 gap-2 lg:gap-4"
  >
    <div
      class={`fixed z-50 inset-0 bg-slate-900/95 w-full h-full ${
        carouselShown ? "" : "hidden"
      } `}
    >
      <button
        on:click={() => {
          carouselShown = false;
          selectedIndex = undefined;
        }}
        class="absolute top-2 right-2 lg:top-4 lg:right-4 text-xl text-silver-100 rounded-md bg-black py-1 px-2 hover:scale-110 transition-all"
        aria-label="close carousel"
      >
        <i class="fa-solid fa-xmark" />
      </button>
      <div
        class="absolute inset-0 z-10 w-full h-full flex items-center justify-start px-4 pointer-events-none text-lg"
      >
        <button
          class="bg-black px-3 py-2 rounded-md pointer-events-auto hover:scale-110 transition-all"
          on:click={() => handlePrevImage()}
          aria-label="see previous image"
          ><i class="fa-solid fa-chevron-left" /></button
        >
        <div class="flex-grow" />
        <button
          class="bg-black px-3 py-2 rounded-md pointer-events-auto hover:scale-110 transition-all"
          on:click={() => handleNextImage()}
          aria-label="see next image"
          ><i class="fa-solid fa-chevron-right" /></button
        >
      </div>
      {#if selectedImage}
        <div class="w-full h-full flex flex-col items-center justify-start">
          <img
            class="w-full h-full object-scale-down"
            src={selectedImage.url}
            alt={selectedImage.alt}
            title={selectedImage.title}
          />
          <div class="p-4 bg-black text-center w-full">
            <h2 class="text-silver-100 font-medium">
              {selectedImage.title}
            </h2>
          </div>
        </div>
      {/if}
    </div>
    <h2 class="text-3xl font-bold">
      {title}
    </h2>
    <div
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-3 xl:gap-4 point"
    >
      {#each images as { alt, title, url }, index}
        <button
          on:click={() => handleImageClick(index)}
          on:keyup={() => handleImageClick(index)}
          class="rounded-sm md:rounded-md lg:rounded-lg w-full transition-all hover:scale-105 aspect-video cursor-pointer overflow-hidden"
        >
          <img class="object-cover h-full w-full" src={url} {alt} {title} />
        </button>
      {/each}
    </div>
  </section>
{/if}
