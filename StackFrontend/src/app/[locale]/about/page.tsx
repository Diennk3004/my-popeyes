import clsx from "clsx";
import React from "react";

const About = () => {
  return <div className={clsx(["flex", "justify-center", "items-center", "h-screen", "w-full"])}>APP_ENV: {process.env.NEXT_PUBLIC_APP_ENV}</div>;
};

export default About;
