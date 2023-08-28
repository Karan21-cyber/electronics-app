// Correct the import statement
import React from "react";
import { important_data } from "@/utils/inportant-data";
import SocialTagCard from "../reusable/social-tag-card";

function Socialtags() {
  return (
    <div className="social-tags-wrapper flex flex-wrap gap-4 py-6 justify-center">
      {
        important_data?.map((item) => (
          <SocialTagCard key={item?.id} item={item} />
        ))
      }
    </div>
  );
}

export default Socialtags;
