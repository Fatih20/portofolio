<script lang="ts">
  import type { HeaderOption } from "@/types/types";
  import Option from "@/components/LeftSidebar/Option.svelte";

  export let activeNavigationOption: HeaderOption;

  let open = false;
</script>

<div
  class={`fixed inset-0 z-20 w-screen h-screen pointer-events-none ${
    open ? "bg-slate-900/75 backdrop-blur-sm" : ""
  } flex items-center box-border py-sidebarVerticalScreenGap`}
>
  <nav
    class={`pointer-events-auto bg-black rounded-r-md lg:rounded-r-xl ${
      open ? "translate-x-0" : "-translate-x-full"
    } h-full py-4 pl-4 pr-6 relative transition-transform items-start justify-center flex flex-col gap-4 duration-200`}
    on:mouseover={() => (open = true)}
    on:mouseleave={() => (open = false)}
    on:focus={() => {}}
  >
    <div
      class="absolute flex justify-center items-center flex-col z-20 top-0 bottom-0 left-full h-full"
    >
      <button
        class={`px-2 py-1 rounded-r-md bg-black-500 lg:bg-transparent lg:pointer-events-none ${
          open ? "lg:opacity-0" : ""
        } transition-all`}
        on:click={(e) => {
          open = !open;
          e.stopPropagation();
        }}
        aria-label="open header menu"
      >
        <i
          class={`fa-solid fa-chevron-right text-xl text-silver-100 ${
            open ? "rotate-180 lg:opacity-0" : "rotate-0"
          } transition-all duration-300 lg:duration-200`}
        />
      </button>
    </div>
    <div class="lg:hidden flex-grow" />
    <ul
      class={`${
        open ? "visible" : "invisible"
      } items-start justify-center flex flex-col gap-4`}
    >
      <Option
        startColor={"#8cd5ff"}
        endColor={"#64baff"}
        destination={"/"}
        iconName={"home"}
        navigationOption={"home"}
        {activeNavigationOption}
        text={"Home"}
      />
      <Option
        startColor={"#e4c6fa"}
        endColor={"#a56de2"}
        destination={"/hobby-project"}
        iconName={"pencil"}
        text={"Hobby Projects"}
        navigationOption={"hobbyProject"}
        {activeNavigationOption}
      />
      <Option
        startColor={"#89ffdd"}
        endColor={"#28bca3"}
        destination={"/works"}
        iconName={"briefcase"}
        text={"Works/Contributions"}
        navigationOption={"works"}
        {activeNavigationOption}
      />
      <Option
        startColor={"#d1ff82"}
        endColor={"#68b723"}
        destination={"/mun"}
        iconName={"globe"}
        navigationOption={"mun"}
        text={"MUNs"}
        {activeNavigationOption}
      />
    </ul>
    <div class="flex-grow lg:hidden" />
  </nav>
</div>
