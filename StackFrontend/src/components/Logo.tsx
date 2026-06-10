import React from "react";
import clsx from "clsx";
const Logo = () => {
  return (
    <span className={clsx(["font-(family-name:--font-jost)"])}>
      <span className={clsx(["text-black"])}>M</span>
      <span className={clsx(["text-orange-400"])}>O</span>
      <span className={clsx(["text-black"])}>S</span>
      <span className={clsx(["text-orange-400"])}>N</span>
      <span className={clsx(["text-black"])}>O</span>
    </span>
  );
};

export { Logo };
