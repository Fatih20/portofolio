<script lang="ts">
  import type { HeaderOption } from "@/types/types";

  export let navigationOption: HeaderOption;
  export let colorOnHover: string;
  export let iconName: string;
  export let text: string;
  export let destination: string;
</script>

<a href={destination} class="hover:text-silver-100 flex gap-4 items-center">
  <i class={`fa-solid fa-${iconName} `} />
  <p>{text}</p>
</a>
