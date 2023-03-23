import React, { useEffect, useRef } from "react";

const Project = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const tooltip = tooltipRef.current;

    const showTooltip = () => {
      if (tooltip) {
        tooltip.style.display = "block";
      }
    };

    const hideTooltip = () => {
      if (tooltip) {
        tooltip.style.display = "none";
      }
    };

    if (container && tooltip) {
      container.addEventListener("mouseenter", showTooltip);
      container.addEventListener("mouseleave", hideTooltip);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", showTooltip);
        container.removeEventListener("mouseleave", hideTooltip);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="hover:bg-gray-100 p-2 rounded-md">
        <span className="cursor-pointer">A: &quot;Hi, how are you?&quot;</span>
        <div
          ref={tooltipRef}
          className="hidden absolute left-0 mt-1 w-auto p-2 text-white text-xs bg-black rounded-md opacity-80"
        >
          A: &quot;Hola, ¿cómo estás?&quot;
        </div>
      </div>
    </div>
  );
};

export default Project;
