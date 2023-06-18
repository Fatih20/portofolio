<script lang="ts">
  import type { HeaderOption } from "@/types/types";
  import Option from "@/components/Header/Option.svelte";

  export let activeNavigationOption: HeaderOption;

  let hovered = false;
</script>

<div
  class="fixed inset-0 w-screen h-screen bg-silver flex items-center box-border py-4"
>
  <nav
    class={`bg-black rounded-r-md ${
      hovered ? "translate-x-0" : "-translate-x-full"
    } h-full p-8 relative transition-transform items-center justify-center flex flex-col`}
    on:mouseover={() => (hovered = true)}
    on:mouseleave={() => (hovered = false)}
    on:focus={() => {}}
  >
    <div class="absolute z-10 top-0 bottom-0 left-full h-full w-4" />
    <Option
      colorOnHover={"#ffffff"}
      destination={"/"}
      iconName={"briefcase"}
      navigationOption={"home"}
      text={"Home"}
    />
  </nav>
</div>
