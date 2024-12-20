import { useGetNavigationQuery } from "@/services/shopwareApi";

export const Footer = () => {
  const { data, error, isLoading } = useGetNavigationQuery("footer-navigation");

  if (error) return <p>Error fetching navigation</p>;

  return (
    <footer className="max-w-screen-xl mx-auto border border-t-1 border-l-0 border-r-0 border-b-0">
      <div className={`grid grid-cols-${data?.length} gap-4 mt-14`}>
        {data?.map((item: any, index: number) => (
          <div key={index}>
            <p className="block py-2 px-3 text-white text-xl font-[600]">
              {item.name}
            </p>

            {item.children && item.children.length > 0 && (
              <div className="text-tc-gray font-[600] mt-6">
                {item.children.map((child: any, childIndex: number) => (
                  <a
                    href={child.name}
                    key={childIndex}
                    className="block py-2 px-3"
                  >
                    {child.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};
