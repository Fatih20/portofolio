<script lang="ts">
  export let stackContent: string[] = [];

  let shown = false;
</script>

<div
  class={`fixed inset-0 z-20 w-screen h-screen pointer-events-none ${
    shown ? "bg-slate-900/75" : ""
  } flex flex-row-reverse items-center box-border py-8`}
>
  <nav
    class={`pointer-events-auto bg-black rounded-l-md lg:rounded-l-xl ${
      shown ? "translate-x-0" : "translate-x-full"
    } h-full p-2 relative transition-transform items-center justify-center flex flex-row gap-4 duration-200`}
  >
    <div
      class="self-end w-full flex flex-col items-center justify-center gap-1 flex-grow bg-none"
    >
      <p class="border-4 w-full text-center p-1 invisible">
        {null}
      </p>
      {#each stackContent as name}
        <p
          class="rounded-lg text-background font-medium shadow-md shadow-black-900/30 w-full text-center py-1 px-2 from-silver-100 to-silver-300 bg-gradient-to-b"
        >
          {name}
        </p>
      {/each}
    </div>

    <div
      class="absolute flex justify-end lg:justify-center items-center flex-col z-20 top-0 bottom-0 right-full h-full"
    >
      <button
        on:click={() => (shown = false)}
        class={`${shown ? "" : "hidden"} mr-3`}
      >
        <i
          class="fa-solid fa-chevron-right text-xl text-silver-100 font-bold"
        />
      </button>
      <button
        class={`p-2 leading-none font-bold text-center bg-black text-silver-100 hover:pr-4 transition-all  rounded-r-sm rounded-lg flex flex-col normal-case pointer-events-auto ${
          shown ? "hidden" : ""
        }`}
        on:click={() => (shown = true)}
      >
        See<br /> the<br /> Stack
      </button>
    </div>
    <div class="lg:hidden flex-grow" />

    <div class="lg:hidden flex-grow" />
    <button class="lg:hidden" on:click={() => (shown = false)}>
      <i class="fa-solid fa-chevron-left text-xl text-silver-100 font-bold" />
    </button>
  </nav>
</div>
