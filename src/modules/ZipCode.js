const ZipCode = {
  usa: "^\\b\\d{5}\\b(?:[- ]{1}\\d{4})?$",
  philippines: "^\\d{4}$",
  japan: "^\\d{7}\\s\\(\\d{3}-\\d{4}\\)$",
};
export default ZipCode;
