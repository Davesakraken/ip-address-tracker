import { IconArrowSvg } from "@/pages/components/svgs";

export default function SearchBar() {
  return (
    <section className="flex h-12 rounded-lg overflow-clip">
      <input className="w-[30rem] p-4" type="text" placeholder="Search for any IP address or domain" />
      <button className="w-12 flex justify-center items-center bg-black" type="submit">
        <IconArrowSvg />
      </button>
    </section>
  );
}
