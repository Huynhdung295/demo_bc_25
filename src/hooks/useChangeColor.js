import { useEffect } from "react";
import { useState } from "react";

const useChangeColor = (color) => {
  const [colorState, setColorState] = useState(color);
  useEffect(() => {
    const intv = setInterval(() => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
      setColorState(randomColor);
    }, 3000);
    return () => clearInterval(intv);
  }, [colorState]);

  // return kiểu này là mình lấy đúng tên nó ra, or gắn tên khác như kiểu mình bóc tách
  return [ colorState ];
};
export {
    useChangeColor,
}