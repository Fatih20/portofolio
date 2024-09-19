<script lang="ts">
  import type { IismaJournalCardContentAugmented } from "@/types/cms";
  import {
    dateCardMakerIismaJournal,
    iismaJournalStageDisplay,
  } from "@/utils/utils";
  import Card from "./Card.svelte";

  type IismaJournalCardProp = IismaJournalCardContentAugmented & {
    displayStage: boolean;
  };
  export let iismaJournalCard: IismaJournalCardProp;
  $: ({
    title,
    publishedDate,
    stage,
    shortDescription,
    gradientEndColor,
    gradientStartColor,
    slug,
    displayStage,
  } = iismaJournalCard);
</script>

<Card {gradientEndColor} {gradientStartColor}>
  <a
    href={`/iisma-journal/${slug}`}
    target="_blank"
    aria-label={`Link to the page for entry with the title of "${title}" in the IISMA journal entry`}
    class="absolute inset-0"
  ></a>
  <div class="flex justify-start items-stretch w-full h-full gap-2">
    <div class="flex flex-col items-start justify-start">
      <div class="flex flex-col items-start justify-start mb-2">
        <h2 class="text-xl lg:text-2xl text-silver-100 text-left font-bold">
          {title}
        </h2>
        {#if displayStage}
          <p class="text-sm lg:text-base text-silver-100 flex-grow font-bold">
            {iismaJournalStageDisplay[stage]}
          </p>
        {/if}
        <p class="text-sm lg:text-base text-silver-100 font-medium">
          {dateCardMakerIismaJournal(publishedDate)}
        </p>
      </div>
      <p class="text-sm lg:text-base text-silver-100 flex-grow">
        {shortDescription}
      </p>
    </div>
  </div>
</Card>

<style></style>
