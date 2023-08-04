import { component$, Slot, useSignal } from "@builder.io/qwik";
import { Link, type RequestHandler, useLocation } from "@builder.io/qwik-city";


export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    // staleWhileRevalidate: 60 * 60 * 24 * 7,
    staleWhileRevalidate: 60,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

const tabs = [
  { id: "/", label: "Home" },
  { id: "/about/", label: "About" },
  { id: "/blogs/", label: "Blogs" },
];

export default component$(() => {

  const activeTab = useSignal(useLocation().url.pathname);

  return (
    <>
      <div class="bg-neutral-950 w-screen md:h-screen p-4 md:w-2/5 fixed md:top-0 md:left-0 md:flex md:items-start md:justify-end md:p-10">
        <nav class="flex items-center justify-evenly md:items-start md:flex md:flex-col gap-2">
          <img
            class="h-16 w-h-16 md:h-32 md:w-32 md:my-4 rounded-md"
            src="/icon.jpg"
          />
          {tabs.map((tab, i) => (
            <Link
              key={i}
              href={tab.id}
              onClick$={() => {
                activeTab.value = tab.id;
              }}
              class={`${activeTab.value === tab.id ? "" : "hover:opacity-50"
                } relative md:text-xl py-1 px-3`}
            >
              {activeTab.value === tab.id && (
                <div
                  id="box"
                  class="bg-neutral-800 mix-blend-lighten rounded-md absolute inset-0"
                ></div>
              )}
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
      <div class="md:ms-[40%] py-32 px-10 md:py-32 md:px-5">
        <Slot />
      </div>
    </>
  );
});
