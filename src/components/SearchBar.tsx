import { IconArrowSvg } from "@/components/svgs";
import { useIpSearch } from "@/hooks/ipSearchContext";
import { useMediaQuery } from "react-responsive";

export default function SearchBar() {
  const { search, setSearch, handleApiCall } = useIpSearch();

  const isMobile = useMediaQuery({ minWidth: 1150 });

  const HandleClick = () => {
    if (!search) {
      alert("please provide an ip");
      return;
    } else {
      handleApiCall();
    }
  };

  return (
    <section className="flex h-12 rounded-xl overflow-clip">
      <input
        className="w-[17rem] p-4 lg:w-[30rem] "
        type="text"
        placeholder={isMobile ? "Search for any IP address or domain" : "Search for any IP address"}
        value={search}
        onChange={(e) => {
          setSearch(e.currentTarget.value);
        }}
      />
      <button onClick={HandleClick} className="w-12 flex justify-center items-center bg-black hover:bg-slate-700" type="submit">
        <IconArrowSvg />
      </button>
    </section>
  );
}
