import React from "react";

/*
custom hook to trigger the window resizing action 
in order to keep the app responsive 
#return the current width of the screen
*/

const useDimension = () => {
  const [width, setDimensions] = React.useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setDimensions(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return { width };
};

export default useDimension;
