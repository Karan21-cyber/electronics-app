import React from "react";
import { IconType } from "react-icons";

interface Itags {
  item: {
    id: number;
    icon: IconType;
    title: string;
    description: string;
  };
}

function SocialTagCard({
  item: { id, icon: IconComponent, title, description },
}: Itags) {
  return (
    <div className="social-tag-card-wrapper  flex flex-col items-center justify-center gap-2">
      <div className="icon-wrapper p-3 rounded-[50%] bg-sky-blue ">
        <IconComponent size={20} />
      </div>
      <div className="social-tag-details flex flex-col gap-[5px] items-center justify-center ">
        <h1 className="social-title  text-sm font-bold text-center">{title}</h1>
        <p className="social-description text-xs font-normal w-[256px] text-center">
          {description}
        </p>
      </div>
    </div>
  );
}

export default SocialTagCard;
