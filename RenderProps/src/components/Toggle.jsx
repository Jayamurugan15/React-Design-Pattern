import React, { useState } from "react";

const Toggle = ({children,defaultValue=false}) => {
  const [isOpen, setIsOpen] = useState(defaultValue);
  const open = ()=> setIsOpen(true);
  const close = ()=> setIsOpen(false);
  const toggle = ()=> setIsOpen((prev)=> !prev)

  return children({
    isOpen,
    open,
    close,
    toggle
  })
};

export default Toggle;
