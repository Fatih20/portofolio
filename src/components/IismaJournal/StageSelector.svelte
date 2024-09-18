<script lang="ts">
  import type {
    IismaJournalEntryStageCount,
    IismaJournalEntryStage,
  } from "@/types/types";
  import { iismaJournalEntryStages } from "@/types/types";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let iismaJournalEntryStageCount: IismaJournalEntryStageCount;
  export let selectedStage: IismaJournalEntryStage;
</script>

<div class={`flex items-center`}>
  {#each iismaJournalEntryStages as iismaJournalEntryStage}
    {#if iismaJournalEntryStageCount[iismaJournalEntryStage] > 0}
      <button
        class=""
        on:click={() => {
          dispatch("stageChange", {
            newStage: iismaJournalEntryStage,
          });
        }}
      >
        {iismaJournalEntryStage}
        {iismaJournalEntryStageCount[iismaJournalEntryStage]}
      </button>
    {/if}
  {/each}
</div>
