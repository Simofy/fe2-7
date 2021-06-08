import { useEffect, useState } from "react";

export default function Animation() {
  const [rectangle, setRectangle] = useState(<div />);
  useEffect(() => {
    function recursiveGenerateRect(total, count) {
      if (count >= total) {
        return null;
      }
      return (
        <div
          style={{
            // overflow: 'hidden',
            width: "80%",
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animationName: "rotate",
            // animationTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            animationTimingFunction: "ease-in-out",
            transformStyle: "preserve-3d",
            animationDuration: "10s",
            animationIterationCount: "infinite",
            animationDirection: "alternate",
            // transformOrigin: `${count % 2 ? "0% 100%" : "0% 0%"}`,
            // opacity: 0.9,
            animationDelay: `${count * 10}ms`,
            backgroundColor:
              "#" + (((1 << 24) * Math.random()) | 0).toString(16),
            borderColor: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
            borderWidth: "4px",
            borderStyle: "solid",
          }}
        >
          {recursiveGenerateRect(total, count + 1)}
        </div>
      );
    }
    setRectangle(recursiveGenerateRect(12, 0));
  }, []);
  return rectangle;
}
