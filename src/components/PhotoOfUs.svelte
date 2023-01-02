<script lang="ts">
  import type { Image } from "@/types/cms";
  import { onMount } from "svelte";

  export let photoSet: Image[];
  export let cycleInterval: number;
  let shownPhotoIndex = 0;
  $: shownPhoto = photoSet[shownPhotoIndex];
  let photoLength = photoSet.length;

  onMount(() => {
    setInterval(() => {
      if (photoLength > 1) {
        shownPhotoIndex = (shownPhotoIndex + 1) % photoLength;
      }
    }, cycleInterval);
  });
</script>

<img
  id="photo-container"
  class="w-40 h-40 object-cover rounded-full lg:w-48 lg:h-48"
  alt={shownPhoto.alt}
  title={shownPhoto.title}
  src={shownPhoto.url}
/>
