import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

const DraggableOverlay = ({ threshold, onClose, children }) => {
  const [snappingBack, setSnappingBack] = useState(false);
  const [initPosition, setInitPosition] = useState({ x: 400, y: 200 });
  const ref = useRef(null);

  const passedThreshold = (e) => {
    if (!ref.current) return false;
    const left = new DOMMatrixReadOnly(
      window.getComputedStyle(ref.current).transform
    ).m41;
    const width = ref.current.clientWidth;
    const percent = (left / width) * 100;

    return percent >= (threshold || 10);
  };

  const onStop = (e, position) => {
    console.log({ e, position });
    setInitPosition({ x: position.x, y: position.y });
    // if (!passedThreshold(e)) {
    //   setSnappingBack(true);
    //   setTimeout(() => setSnappingBack(false), 200);
    //   return;
    // }

    // if (onClose) onClose();
  };

  return (
    <Draggable
      //   axis="x"
      //   bounds={{
      //     left: 0,
      //   }}
      //   grid={[25, 25]}
      scale={1}
      position={initPosition}
      onStop={onStop}
      bounds={{ top: "200px", left: "200px", right: "200px", bottom: "200px" }}
    >
      {children}
    </Draggable>
  );
};

export default DraggableOverlay;
