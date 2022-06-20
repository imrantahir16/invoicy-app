import React, { useCallback, useRef, useMemo } from "react";

const defaultClasses =
  "primary-self-text flex h-14 w-14 cursor-pointer items-center justify-center overflow-hidden";

const ImageUpload = (props) => {
  const { url, onImageChange, keyName, className } = props;
  const imageInputRef = useRef(null);

  const onImageClicked = useCallback(() => {
    imageInputRef?.current?.click();
  }, []);

  const onImageChangehandler = useCallback(
    (e) => {
      const file = e.target.files[0];
      console.log(file.type);
      let allowedExtensions = /(jpg|jpeg|png)$/i;

      const isValid = allowedExtensions.exec(file.type);

      if (!isValid) {
        alert("Not Valid File");
        e.target.value = null;
        return;
      }

      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        if (onImageChange) {
          console.log(reader.result);
          onImageChange(reader.result);
        }
        e.target.value = null;
      };
      reader.onerror = function (error) {
        e.target.value = null;
      };
    },
    [onImageChange]
  );

  const classes = useMemo(() => {
    if (defaultClasses) {
      return defaultClasses + " " + className;
    }
    return defaultClasses;
  }, [className]);
  return (
    <>
      <input
        ref={imageInputRef}
        id={keyName}
        className="hidden"
        onChange={onImageChangehandler}
        type="file"
      />
      <div className={classes} onClick={onImageClicked}>
        {url ? (
          <img className="h-14 w-14 object-cover" src={url} alt="upload" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )}
      </div>
    </>
  );
};

export default ImageUpload;
