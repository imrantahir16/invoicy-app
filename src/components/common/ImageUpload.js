import React, { useCallback, useRef, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
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
          <FontAwesomeIcon className="h-6 w-6 text-blue-500" icon={faImage} />
        )}
      </div>
    </>
  );
};

export default ImageUpload;
