import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* les image important depuis la  balise img son accessible dans public  */}
      <img src="./logo192.png" alt="logo react" />
      <h3>React project</h3>
    </div>
  );
};

export default Logo;
