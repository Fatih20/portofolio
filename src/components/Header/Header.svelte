<script lang="ts">
  import type { HeaderOption } from "@/types/types";

  export let activeNavigationOption: HeaderOption;

  let hovered = false;
</script>

<div class="fixed inset-0 w-screen h-screen bg-silver flex items-center">
  <nav
    class={`bg-black ${
      hovered ? "translate-x-0" : "-translate-x-full"
    } h-full p-8 relative transition-transform`}
    on:mouseover={() => (hovered = true)}
    on:mouseleave={() => (hovered = false)}
    on:focus={() => {}}
  >
    <div class="absolute z-10 top-0 bottom-0 left-full h-full w-4" />
  </nav>
</div>
