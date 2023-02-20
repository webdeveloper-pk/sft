import React from "react";

const Button = ({ textSize, buttonText }) => {
  return (
    <div className={`${textSize} text-light-green bg-transparent rounded-full font-semibold hover:font-extrabold`}>
        {buttonText}
    </div>
  );
};

export default Button;