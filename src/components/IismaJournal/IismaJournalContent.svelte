<script lang="ts">
  import type {
    IismaJournalEntryStageCount,
    IismaJournalEntryStage,
  } from "@/types/types";
  import IismaJournalCard from "../Card/IismaJournalCard.svelte";
  import StageSelector from "./StageSelector.svelte";
  import type { IismaJournalCardContentAugmented } from "@/types/cms";

  export let journalCards: IismaJournalCardContentAugmented[];
  export let iismaJournalEntryStageCount: IismaJournalEntryStageCount;
  let selectedStage: IismaJournalEntryStage = "all";

  $: journalCardsProcessed = journalCards
    .map((journalCard) => {
      return { ...journalCard, displayStage: true };
    })
    .filter(({ stage }) => {
      return selectedStage === "all" || selectedStage === stage;
    });
</script>

<div class="w-full flex flex-col">
  <StageSelector
    {iismaJournalEntryStageCount}
    {selectedStage}
    on:stageChange={({ detail }) => {
      const { newStage } = detail;
      selectedStage = newStage;
    }}
  />
  <div class="w-full flex flex-col gap-3 lg:gap-4">
    {#each journalCardsProcessed as journalCard}
      <IismaJournalCard iismaJournalCard={journalCard} />
    {/each}
  </div>
</div>
