import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <p class="text-2xl sm:text-4xl">My Blogs</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "My Blogs",
  meta: [
    {
      name: "description",
      content: "Al-Nahian Pulok's Blogs",
    },
  ],
};
