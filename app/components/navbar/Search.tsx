"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { differenceInDays } from "date-fns";

import useSearchModal from "@/app/hooks/useSearchModal";
import useCountries from "@/app/hooks/useCountries";

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const pathName = usePathname();

  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const guestCount = params?.get("guestCount");
  const roomCount = params?.get("roomCount");

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Hari`;
    }

    return "Hari";
  }, [startDate, endDate]);
  const roomLabel = useMemo(() => {
    if (roomCount) {
      return `${roomCount} Beds`;
    }
    return "Beds";
  }, [roomCount]);
  const guestLabel = useMemo(() => {
    if (guestCount) {
      return `${guestCount} Tamu`;
    }

    return "Tamu";
  }, [guestCount]);
  if (pathName !== "/rooms") {
    return <></>;
  }
  return (
    <div
      onClick={searchModal.onOpen}
      className="
      mt-12
        border-[1px] 
        md:w-auto 
        py-2 
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
      "
    >
      <div
        className="
          flex 
          flex-row 
          items-center 
          justify-between
        "
      >
        <div
          className="
            text-sm 
            font-semibold 
            px-6
          "
        >
          {roomLabel}
        </div>
        <div
          className="
block 
            text-sm 
            font-semibold 
            px-6 
            border-x-[1px] 
            flex-1 
            text-center
          "
        >
          {durationLabel}
        </div>
        <div
          className="
            text-sm 
            pl-6 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
          "
        >
          <div className="block">{guestLabel}</div>
          <div
            className="
              p-2 
              bg-stone-700 
              rounded-full 
              text-white
            "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
