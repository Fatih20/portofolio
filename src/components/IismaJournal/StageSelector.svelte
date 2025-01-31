<script lang="ts">
  import type {
    IismaJournalEntryStageCount,
    IismaJournalEntryStage,
  } from "@/types/types";
  import { iismaJournalEntryStages } from "@/types/types";
  import { createEventDispatcher } from "svelte";
  import {
    iismaJournalGradient,
    iismaJournalStageDisplay,
  } from "@/utils/utils";

  const dispatch = createEventDispatcher();

  export let iismaJournalEntryStageCount: IismaJournalEntryStageCount;
  export let selectedStage: IismaJournalEntryStage;
</script>

<div
  class={`flex flex-col md:grid grid-cols-2 lg:flex lg:flex-row items-center justify-start gap-4 border-y-[1px] border-silver-100 py-4`}
>
  {#each iismaJournalEntryStages as iismaJournalEntryStage}
    {#if iismaJournalEntryStageCount[iismaJournalEntryStage] > 0}
      <button
        class={`flex gap-4 w-full lg:w-fit text-sm md:text-base md:gap-1 justify-center items-center select-none font-bold rounded-xl text-silver-100  group box-border px-4 py-2 md:py-3 md:px-4 hover:shadow-hoveredCard hover:scale-101
        ${selectedStage === iismaJournalEntryStage ? "bg-gradient-to-b shadow-hoveredCard" : "bg-black-500"}
        transition-all cursor-pointer h-full relative hover:bg-gradient-to-b
        text-left sm:text-center flex-grow
        `}
        style={`
          --tw-gradient-from: ${iismaJournalGradient[iismaJournalEntryStage].gradientStartColor};
          --tw-gradient-to:  ${iismaJournalGradient[iismaJournalEntryStage].gradientEndColor};
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
          --tw-shadow-color: ${iismaJournalGradient[iismaJournalEntryStage].gradientStartColor};
          --tw-shadow: var(--tw-shadow-colored);
      `}
        on:click={() => {
          dispatch("stageChange", {
            newStage: iismaJournalEntryStage,
          });
        }}
      >
        <span class="block">
          {#if iismaJournalEntryStage === "all"}
            <i class={`fa-brands fa-canadian-maple-leaf`}></i>
          {:else if iismaJournalEntryStage === "abroad"}
            <i class="fa-solid fa-earth-americas"></i>
          {:else if iismaJournalEntryStage === "pre-departure"}
            <i class="fa-solid fa-suitcase"></i>
          {:else if iismaJournalEntryStage === "registration"}
            <i class="fa-solid fa-id-card"></i>
          {:else if iismaJournalEntryStage === "aftermath"}
            <i class="fa-solid fa-plane-arrival"></i>
          {/if}
        </span>
        <span class="ml-2">
          {iismaJournalStageDisplay[iismaJournalEntryStage]}
        </span>
        <span class="flex-grow"></span>
        <span
          class="bg-black-900 bg-opacity-20 rounded-full w-7 h-7 flex flex-col justify-center items-center text-center"
        >
          {iismaJournalEntryStageCount[iismaJournalEntryStage]}
        </span>
      </button>
    {/if}
  {/each}
</div>
