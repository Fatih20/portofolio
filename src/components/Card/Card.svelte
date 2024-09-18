<script lang="ts">
  export let gradientStartColor: string;
  export let gradientEndColor: string;
</script>

<article
  class={`bg-black-500 group w-full md:min-h-cardDesktop rounded-xl hover:bg-gradient-to-b flex flex-col justify-start items-start box-border p-4 gap-1 hover:shadow-hoveredCard hover:scale-101 transition-all cursor-pointer h-full relative`}
  style={`
    --tw-gradient-from: ${gradientStartColor};
    --tw-gradient-to: ${gradientEndColor};
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-shadow-color: ${gradientStartColor};
    --tw-shadow: var(--tw-shadow-colored);
`}
>
  <slot />
</article>
