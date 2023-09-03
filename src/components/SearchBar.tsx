import { IconArrowSvg } from "@/components/svgs";
import { useIpSearch } from "@/hooks/ipSearchContext";

export default function SearchBar() {
  const { search, setSearch, handleApiCall } = useIpSearch();

  return (
    <section className="flex h-12 rounded-lg overflow-clip">
      <input
        className="w-[30rem] p-4"
        type="text"
        placeholder="Search for any IP address or domain"
        value={search}
        onChange={(e) => {
          setSearch(e.currentTarget.value);
        }}
      />
      <button onClick={handleApiCall} className="w-12 flex justify-center items-center bg-black" type="submit">
        <IconArrowSvg />
      </button>
    </section>
  );
}
