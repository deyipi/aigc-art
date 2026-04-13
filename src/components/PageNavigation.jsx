import { useEffect } from "react";

export default function PageNavigation({ toc }) {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".navigation a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = document.querySelector(`.navigation a[href="#${entry.target.id}"]`);
          if (!link) return;

          if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
            navLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
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
        {(() => {
          const minDepth = Math.min(...toc.map((item) => item.depth));
          return toc.map((item) => (
            <li
              key={item.id}
              className="my-1"
              style={{ marginLeft: `${(item.depth - minDepth) * 1}rem` }}
            >
              <a className="text-sm" href={`#${item.id}`}>
                {item.text}
              </a>
            </li>
          ));
        })()}
      </ul>
    </div>
  );
}
