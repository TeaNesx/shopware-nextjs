import React from "react";
import "./index.scss";

export interface IHeroProps {
  data: {
    name: string;
    props: any;
    blocks: any[];
    [key: string]: any;
  };
}

export const Hero = ({ data }: IHeroProps) => {
  return (
    <div className="hero h-screen flex items-center justify-center">
      <div className="mx-auto max-w-screen-xl">
        {data.blocks.map((block: any, blockIndex: number) => (
          <div key={blockIndex}>
            {block.slots?.map((slot: any, slotIndex: number) => (
              <div className="text-view" key={slotIndex}>
                <div
                  className="text-white flex"
                  dangerouslySetInnerHTML={{ __html: slot.data?.content }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
