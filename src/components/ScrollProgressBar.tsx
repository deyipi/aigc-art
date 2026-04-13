import { useEffect, useState, useCallback, useRef } from "react";

export default function ScrollProgressBar({ offsetTop = 60 }: { offsetTop?: number }) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const handleScroll = useCallback(() => {
    // 取消之前的动画帧请求
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    // 使用 requestAnimationFrame 来优化性能
    rafRef.current = requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(Math.max((scrollTop / docHeight) * 100, 0), 100);
      setProgress(scrollPercent);
    });
  }, []);

  useEffect(() => {
    // 初始化进度
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <div
      className="fixed left-0 z-100 h-1 transition-all duration-150 ease-out"
      style={{
        top: `${offsetTop}px`,
        width: `${progress}%`,
        backgroundColor: "#fecda6",
        transform: `translateZ(0)`, 
      }}
    />
  );
}
