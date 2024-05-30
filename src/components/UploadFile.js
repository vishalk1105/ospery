import React, { useRef } from "react";

const UploadFile = () => {
  const inputRef = useRef(null);

  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <form id="form-file-upload" onSubmit={(e) => e.preventDefault()}>
      <input
        ref={inputRef}
        type="file"
        id="input-file-upload"
        multiple={true}
        onChange={handleChange}
      />
      <label id="label-file-upload" htmlFor="input-file-upload">
        <div>
          <img
            className="uploadImg"
            src="https://static.vecteezy.com/system/resources/thumbnails/015/337/675/small/transparent-upload-icon-free-png.png"
            alt=""
          />
          <p className="upload-button" onClick={onButtonClick}>
            Upload your face
          </p>
        </div>
      </label>
    </form>
  );
};

export default UploadFile;
