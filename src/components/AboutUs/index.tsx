import React from "react";
import "./index.scss";
export interface IAboutUsProps {
  data: {
    name: string;
    props: any;
    blocks: any[];
    [key: string]: any;
  };
}

export const AboutUs = ({ data }: IAboutUsProps) => {
  console.log(data);

  return (
    <div className="about-us h-screen max-w-screen-xl mx-auto">
      {data.blocks.map((block: any, blockIndex: number) => (
        <div key={blockIndex}>
          {block.slots?.map((slot: any, slotIndex: number) => (
            <div className="text-view" key={slotIndex}>
              <div
                className="text-white"
                dangerouslySetInnerHTML={{ __html: slot.data?.content }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
