<script lang="ts">
  import type { HeaderOption } from "@/types/types";

  export let activeNavigationOption: HeaderOption;
  export let navigationOption: HeaderOption;
  export let startColor: string;
  export let endColor: string;
  export let iconName: string;
  export let text: string;
  export let destination: string;
</script>

<li>
  <a
    href={destination}
    class={`flex gap-4 items-center transition-all select-none font-bold ${
      activeNavigationOption === navigationOption ? "selected" : "unselected"
    }
    `}
    style:--startColor={startColor}
    style:--endColor={endColor}
  >
    <i class={`fa-solid fa-${iconName} `} />
    <p>{text}</p>
  </a>
</li>

<style>
  .selected {
    @apply animate-variableColorChange pointer-events-none;
  }

  .unselected:hover {
    @apply translate-x-2;
  }

  .unselected {
    @apply text-silver-100;
  }
</style>
