import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import lottie from "lottie-web";
import animationData from './start-button.json'

const FixedLottie = forwardRef((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => setVisible(true),
  }));

  useEffect(() => {
    if (!containerRef.current) return;

    lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });

    const timer = setTimeout(() => setVisible(true), 12500);
    return () => clearTimeout(timer);
  }, []);

    const handleClick = () => {
    const viewportHeight = window.innerHeight;
    window.scrollBy({
      top: viewportHeight,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick} 
      className="fixed-lottie"
      style={{
        position: "absolute",
        bottom: "4%",       
        left: "50%",
        transform: "translateX(-50%)",
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease-in",
        pointerEvents: "auto", 
        width: "250px",
        height: "250px",
        zIndex: 999,
        cursor: "pointer", 
      }}
    />
  );
});

export default FixedLottie;
