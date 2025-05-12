import { useRef, useState, useLayoutEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IMAGE_WIDTH = 2400; // px

export default function ScrollSlider() {
  const ref = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setContainerWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // These are always defined, even if containerWidth is 0
  const startX = (IMAGE_WIDTH - containerWidth);
  const endX = 0;
  const x = useTransform(scrollYProgress, [0, 1], [startX, endX]);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: 400,
        overflow: "hidden",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {containerWidth > 0 ? (
        <motion.img
          src="./Website Final Videos/Dominos/Wall v6_2.webp"
          alt="Food"
          style={{
            width: IMAGE_WIDTH,
            height: "100%",
            objectFit: "cover",
            x,
            position: "absolute",
            top: 0,
            left: 0,
          }}
          draggable={false}
        />
      ) : (
        // Render a placeholder or nothing while measuring
        <div style={{ width: "100%", height: "100%" }} />
      )}
    </div>
  );
}
