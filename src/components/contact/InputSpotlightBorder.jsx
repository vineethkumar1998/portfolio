import React, { useRef, useState } from 'react'

const InputSpotlightBorder = () => {

    const divRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
        if (!divRef.current || isFocused) return;
    
        const div = divRef.current;
        const rect = div.getBoundingClientRect();
    
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      };

      const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
      };
    
      const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
      };
    
      const handleMouseEnter = () => {
        setOpacity(1);
      };
    
      const handleMouseLeave = () => {
        setOpacity(0);
      };
  return (
    <>
    
      
    </>
  )
}

export default InputSpotlightBorder
