export const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
export const phoneRegex =
  /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{2})((-?)|( ?))([0-9]{7})$/gm;

export const isNotEmpty = (value) => value?.trim() !== "";
