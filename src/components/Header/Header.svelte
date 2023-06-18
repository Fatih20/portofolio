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
    class={`bg-black rounded-r-md ${
      hovered ? "translate-x-0" : "-translate-x-full"
    } h-full p-8 relative transition-transform items-start justify-center flex flex-col gap-4 duration-200`}
    on:mouseover={() => (hovered = true)}
    on:mouseleave={() => (hovered = false)}
    on:focus={() => {}}
  >
    <div
      class="absolute flex justify-center items-center flex-col z-20 top-0 bottom-0 left-full h-full"
    >
      <div class="bg-silver-700 rounded-r-md pl-2 py-3 pr-3">
        <i
          class={`fa-solid fa-chevron-right text-xl text-silver-100 ${
            hovered ? "rotate-180" : "rotate-0"
          } transition-transform duration-200`}
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
      destination={"/portofolio"}
      iconName={"briefcase"}
      navigationOption={"portofolio"}
      {activeNavigationOption}
      text={"Portofolio"}
    />
  </nav>
</div>
