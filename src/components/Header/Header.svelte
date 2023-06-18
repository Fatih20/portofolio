<script lang="ts">
  import type { HeaderOption } from "@/types/types";
  import Option from "@/components/Header/Option.svelte";

  export let activeNavigationOption: HeaderOption;

  let hovered = false;
</script>

<div
  class={`fixed inset-0 z-20 w-screen h-screen ${
    hovered ? "bg-slate-900/75" : ""
  } flex items-center box-border py-8`}
>
  <nav
    class={`bg-black rounded-r-md lg:rounded-r-xl ${
      hovered ? "translate-x-0" : "-translate-x-full"
    } h-full py-8 pl-4 pr-6 relative transition-transform items-start justify-center flex flex-col gap-4 duration-200`}
    on:mouseover={() => (hovered = true)}
    on:mouseleave={() => (hovered = false)}
    on:focus={() => {}}
  >
    <div
      class="absolute flex justify-center items-center flex-col z-20 top-0 bottom-0 left-full h-full"
    >
      <div class=" rounded-r-md pl-2 py-3 pr-3">
        <i
          class={`fa-solid fa-chevron-right text-xl text-silver-100 ${
            hovered ? "rotate-180 opacity-0" : "rotate-0"
          } transition-all duration-200`}
        />
      </div>
    </div>
    <Option
      colorOnHover={"#8cd5ff"}
      destination={"/"}
      iconName={"home"}
      navigationOption={"home"}
      {activeNavigationOption}
      text={"Home"}
    />
    <Option
      colorOnHover={"#e4c6fa"}
      destination={"/hobby-project"}
      iconName={"pencil"}
      navigationOption={"hobbyProject"}
      {activeNavigationOption}
      text={"Hobby Projects"}
    />
    <Option
      colorOnHover={"#e4c6fa"}
      destination={"/works"}
      iconName={"briefcase"}
      navigationOption={"works"}
      {activeNavigationOption}
      text={"Works/Contributions"}
    />
    <Option
      colorOnHover={"#e4c6fa"}
      destination={"/mun"}
      iconName={"globe"}
      navigationOption={"mun"}
      {activeNavigationOption}
      text={"Hobby Projects"}
    />
  </nav>
</div>
