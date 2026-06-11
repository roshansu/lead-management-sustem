import React from "react";

const SelectOption = ({ ind, item, setValue }) => {
//   console.log(setValue);
  return (
    <div className="ml-2">
      <select onChange={(e)=>setValue(e.target.value)}
        className="flex items-center gap-2 px-5 py-3 bg-gray-50 border border-gray-200 rounded-2xl hover:bg-gray-100 transition-all"
        name={item[0]}
        id={item[0]}>
        {item.map((item, ind) => {
          return (
            <option value={ind === 0?'':item}>{item}</option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectOption;
