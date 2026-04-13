import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import backToTopJson from '../assets/animate/back-to-top.json';

export default function BackToTop() {
  const lottieRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: backToTopJson,
    });

    return () => anim.destroy();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      if (window.scrollY > 80) {
        containerRef.current?.classList.add("show");
        containerRef.current.classList.remove("fade-out");
      } else {
        containerRef.current?.classList.add("fade-out");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 点击事件
  const handleClick = () => {
    if (!containerRef.current) return;
    containerRef.current.classList.add("launch");
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      containerRef.current?.classList.remove("launch");
    }, 800);
  };

  return (
    <div
      id="back-to-top"
      ref={containerRef}
      className="back-to-top"
      onClick={handleClick}
    >
      <div ref={lottieRef} className="back-to-top__animation" />
    </div>
  );
}
