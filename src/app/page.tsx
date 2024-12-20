"use client";

import React from "react";
import { useGetPageQuery } from "@/services/shopwareApi";
import { Hero, AboutUs } from "@/components"; // Importiere alle benötigten Komponenten

export default function Home() {
  const layoutId = "c4e225d4aa6c4bdd95d836d35e0ac838";

  const { data, error, isLoading } = useGetPageQuery(layoutId);

  if (isLoading) return <p className="text-white">Loading...</p>;

  if (error) return <p>Error fetching landing page</p>;

  const componentsMap: Record<string, React.ElementType> = {
    Hero,
    AboutUs,
  };

  return (
    <>
      {data?.sections
        ?.filter((item: any) => item.name && componentsMap[item.name])
        .map((item: any, index: number) => {
          const Component = componentsMap[item.name];
          return <Component key={index} {...item.props} data={item} />;
        })}
    </>
  );
}
