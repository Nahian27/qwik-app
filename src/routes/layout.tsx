import { component$, Slot, useSignal } from "@builder.io/qwik";
import { Link, type RequestHandler, useLocation } from "@builder.io/qwik-city";
// import { QAnimatedPresence } from "~/components/AnimatedPresence";
import { QTabPill } from "~/components/TabPill";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // staleWhileRevalidate: 60,
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
      <aside class="md:w-2/5 w-screen md:fixed md:left-0 top-0 md:h-screen bg-neutral-950 py-4 md:p-0">
        <nav class="flex md:-translate-x-6 md:translate-y-20 items-center justify-evenly md:justify-center md:items-end md:flex md:flex-col md:gap-5">
          <img
            class="h-16 w-16 md:h-32 md:w-32 rounded-md grayscale hover:grayscale-0 md:hover:scale-125 transition duration-300"
            alt='Logo of Al-Nahian Pulok'
            width={512}
            height={512}
            src="/icon.jpg"
          />
          {tabs.map((tab, i) => (
            <Link
              key={i}
              href={tab.id}
              onClick$={() => {
                activeTab.value = tab.id;
              }}
              class={`${activeTab.value === tab.id ? "" : "hover:opacity-50 transition"
                } relative md:text-xl py-1 px-3`}
            >
              <QTabPill activeTab={activeTab.value} route={tab.id} client: idle />
              {tab.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main class="flex-1 md:ml-[40%] px-5 py-10 md:py-32">
        {/* <QAnimatedPresence activeTab={activeTab.value}> */}
        <Slot />
        {/* </QAnimatedPresence> */}
      </main>
    </>
  );
});
