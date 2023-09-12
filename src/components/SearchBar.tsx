import { IconArrowSvg } from "@/components/svgs";
import { useIpSearch } from "@/hooks/ipSearchContext";

export default function SearchBar() {
  const { search, setSearch, handleApiCall } = useIpSearch();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission if this input is inside a form
      handleApiCall();
    }
  };

  return (
    <section className="flex h-12 rounded-xl overflow-clip">
      <input
        className="w-[70vw] sm:w-[17rem] text-sm p-4 md:w-[30rem] md:text-base"
        type="text"
        placeholder={"Search for any IP address or domain"}
        value={search}
        onChange={(e) => {
          setSearch(e.currentTarget.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleApiCall} className="w-12 flex justify-center items-center bg-black hover:bg-slate-700" type="submit">
        <IconArrowSvg />
      </button>
    </section>
  );
}
