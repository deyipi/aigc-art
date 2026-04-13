import { useEffect, useRef, useState } from 'react';

export default function PlotlyChart({ data, layout, config, className = "" }) {
  const plotRef = useRef(null);
  const [Plotly, setPlotly] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // 检查 Plotly 是否已经在全局作用域中
    if (window.Plotly) {
      setPlotly(window.Plotly);
    } else {
      // 动态加载 plotly.js UMD 脚本
      const script = document.createElement('script');
      script.src = '/peking/js/libs/plotly.min.js';
      script.onload = () => {
        setPlotly(window.Plotly);
      };
      script.onerror = () => {
        console.error('Failed to load Plotly.js');
      };
      document.head.appendChild(script);
      
      // 清理函数
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, []);

  useEffect(() => {
    if (Plotly && plotRef.current && data && layout) {
      // 创建图表
      Plotly.newPlot(plotRef.current, data, layout, config);

      // 清理函数
      return () => {
        if (plotRef.current) {
          Plotly.purge(plotRef.current);
        }
      };
    }
  }, [Plotly, data, layout, config]);

  // 处理窗口大小变化
  useEffect(() => {
    if (Plotly && plotRef.current) {
      const handleResize = () => {
        Plotly.Plots.resize(plotRef.current);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [Plotly]);

  // 只在客户端渲染且 Plotly 已加载时显示图表
  if (!isClient || !Plotly) {
    return (
      <div className={`w-full h-96 flex items-center justify-center ${className}`}>
        <div className="text-gray-500">Loading chart...</div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div ref={plotRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}