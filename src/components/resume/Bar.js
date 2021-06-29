import React from "react";

function Bar({ value: { icon, name, level } }) {
  const bar_width = `${level}%`;

  return (
    <div className="bar">
      <div className="bar__wrapper" style={{ width: bar_width }}>
        <span className="bar__name">
          <img src={icon} alt="skill icon" className="bar__icon mr-2" />
          {name}
        </span>
      </div>
    </div>
  );
}

export default Bar;
