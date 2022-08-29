import { useState } from "react";

const ChangeLoading = () => {
  const [loading, setLoading] = useState(false);

  const changeLoading = () => {
    setLoading(current => !current)
    console.log('Loading is: ', !loading);
  };

  return (
    <>
      <button className="btn btn-light mb-2" onClick={changeLoading}>
        Change Loading
      </button>
    </>
  );
};

export default ChangeLoading;
