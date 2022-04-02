import React from "react";

interface Props {
  label: string;
  value: string;
}

const Information: React.FC<Props> = ({ label, value }) => {
  return (
    <div className="p-1">
      <span className="text-usp">{label}: </span>
      <span className="text-stone-900">
        {value.charAt(0).toUpperCase() + value.slice(1)}
      </span>
    </div>
  );
};

export default Information;
