import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <p class="text-2xl sm:text-4xl">About Me</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "About Me",
  meta: [
    {
      name: "description",
      content: "About Al-Nahian Pulok",
    },
  ],
};
