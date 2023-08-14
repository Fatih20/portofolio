<script lang="ts">
  import type { TechStack } from "@/types/cms";

  export let stackContent: TechStack[] = [];

  let shown = false;
</script>

<div class="grid-cols-1 lg:grid-cols-3 grid w-full gap-2">
  <button
    class={`right-sidebar-button flex items-center flex-grow`}
    on:click={() => (shown = true)}
  >
    See the Stack
  </button>
  <slot name="side-button" />
</div>
<div
  class={`fixed inset-0 z-20 w-screen h-screen ${
    shown ? "bg-slate-900/75 pointer-events-auto" : "pointer-events-none"
  } flex flex-row-reverse items-center box-border py-8`}
>
  <div
    class={`pointer-events-auto ${
      shown ? "translate-x-0" : "translate-x-full"
    } h-full relative transition-transform items-center justify-center flex flex-col gap-4 duration-200`}
  >
    <div
      class="absolute flex justify-end lg:justify-center items-center flex-col z-50 top-0 bottom-0 right-full h-full"
    >
      <button
        class={`px-2 py-1 rounded-l-md bg-black-500 lg:bg-transparent ${
          shown ? "" : "opacity-0"
        } transition-all`}
        on:click={(e) => {
          shown = false;
          e.stopPropagation();
        }}
      >
        <i
          class={`fa-solid fa-chevron-right text-xl text-silver-100 ${
            !shown ? "rotate-180 opacity-0" : "rotate-0"
          } transition-all duration-200`}
        />
      </button>
    </div>
    <!-- <button
      on:click={() => (shown = false)}
      class={`${shown ? "" : "hidden"} mr-3 w-full absolute`}
    >
      <i class="fa-solid fa-chevron-right text-xl text-silver-100 font-bold" />
    </button> -->
    <div
      class="bg-black rounded-tl-md lg:rounded-l-xl p-2 flex-grow flex flex-col items-center justify-start"
    >
      <div
        class="self-end w-full h-full flex flex-col items-center justify-end gap-1 bg-none"
      >
        {#each stackContent as { link, name }}
          <p
            class="rounded-lg text-background font-medium shadow-md shadow-black-900/30 w-full text-center py-1 px-2 from-silver-100 to-silver-300 bg-gradient-to-b relative"
          >
            {#if link}
              <a
                class="w-full h-full"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                {name}
              </a>
            {:else}
              {name}
            {/if}
          </p>
        {/each}
      </div>
    </div>
  </div>
</div>
