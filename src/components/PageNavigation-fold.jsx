import { useEffect, useState } from "react";

export default function PageNavigation({ toc }) {
  const [activeId, setActiveId] = useState(null);
  const [expandedH3, setExpandedH3] = useState({}); // 当前展开的 H3

  useEffect(() => {
    const navLinks = document.querySelectorAll(".navigation a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          const link = document.querySelector(`.navigation a[href="#${id}"]`);
          if (!link) return;

          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            setActiveId(id);

            // 高亮链接
            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");

            // 找到当前 H4 的父 H3
            const parentH3 = toc
              .filter((item) => item.depth === 3)
              .find((h3, idx) => {
                const startIdx = toc.findIndex((x) => x.id === h3.id);
                const endIdx =
                  toc.findIndex((x) => x.depth === 3 && toc.indexOf(x) > startIdx) || toc.length;
                const targetIdx = toc.findIndex((x) => x.id === id);
                return targetIdx >= startIdx && targetIdx < endIdx;
              });

            if (parentH3) {
              // 收起其他 H3 的 H4，只展开当前 H3
              setExpandedH3({ [parentH3.id]: true });
            }
          }
        });
      },
      {
        rootMargin: "-15% 0px -75% 0px",
        threshold: [0, 0.1, 1.0],
      }
    );

    toc.forEach((item) => {
      const heading = document.getElementById(item.id);
      if (heading) observer.observe(heading);
    });

    return () => observer.disconnect();
  }, [toc]);

  return (
    <div className="navigation space-content hidden lg:block pl-4">
      <ul className="list-none">
        {toc.map((item) => {
          if (item.depth === 3) {
            // H3
            return (
              <li key={item.id} className="my-1">
                <a
                  className={`text-sm font-medium transition-colors break-words ${
                    activeId === item.id ? "text-blue-600" : ""
                  }`}
                  href={`#${item.id}`}
                >
                  {item.text}
                </a>

                {/* H4 子项 */}
                <ul
                  className={`mt-1 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                    expandedH3[item.id] ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {toc
                    .filter((child) => child.depth === 4 && isChildOf(item, child))
                    .map((child) => (
                      <li key={child.id} className="ml-4 my-1">
                        <a
                          className={`text-sm block w-[90%] transition-colors break-words whitespace-normal ${
                            activeId === child.id ? "text-blue-600" : ""
                          }`}
                          href={`#${child.id}`}
                        >
                          {child.text}
                        </a>
                      </li>
                    ))}
                </ul>
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
  );

  function isChildOf(h3, h4) {
    const h3Index = toc.findIndex((x) => x.id === h3.id);
    const h4Index = toc.findIndex((x) => x.id === h4.id);
    const nextH3Index = toc.findIndex((x) => x.depth === 3 && toc.indexOf(x) > h3Index);
    return h4Index > h3Index && (nextH3Index === -1 || h4Index < nextH3Index);
  }
}
