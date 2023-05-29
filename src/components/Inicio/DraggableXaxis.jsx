import React, {useRef} from "react";
import { useDraggable } from "react-use-draggable-scroll";

const DraggableXaxis = ({items}) => {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
  return (
    <div
      className="w-full flex justify-between items-center gap-8
          overflow-x-scroll  no-scrollbar 
          max-[1350px]:justify-start h-auto py-7"
      {...events}
      ref={ref}
    >
      {items}
    </div>
  );
};

export default DraggableXaxis;
