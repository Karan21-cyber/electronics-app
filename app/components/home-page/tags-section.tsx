import { tags } from "@/app/utils/tags";
import Image from "next/image";
import React from "react";

function TagsSection() {
  return (
    <div className="tags-section flex flex-wrap justify-center items-center md:gap-10 ">
      {tags?.map((tag) => (
        <Image
          key={tag?.id}
          src={tag?.image}
          width={152}
          height={79}
          alt={`tags`}
          className="objcet-contain"
          priority
        />
      ))}
    </div>
  );
}

export default TagsSection;
