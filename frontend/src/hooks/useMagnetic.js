import { useRef } from "react";

export default function useMagnetic() {
  const ref = useRef(null);

  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const onMouseLeave = () => {
    ref.current.style.transform = "translate(0,0)";
  };

  return { ref, onMouseMove, onMouseLeave };
}
