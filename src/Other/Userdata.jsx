import React from "react";
const Userdata = (props) => {
  const {data} = props
  return (
    <>
      <div className="details">
        <h1>{data.name}</h1>
        <h2>{data.age}</h2>
        <h2>{data.quali}</h2>
      </div>
    </>
  );
};
export default Userdata;
