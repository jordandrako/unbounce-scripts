/**
      * Do not remove this section; it allows our team to troubleshoot and track feature adoption.
      * TS:0002-08-042
  */
//Change #lp-pom-box-01, etc. for the IDs of the boxes where you want the form fields to display.
var boxes = [
  "#lp-pom-box-x",
  "#lp-pom-box-x",
  "#lp-pom-box-x",
  "#lp-pom-box-x"
];
function setFlexibleFormFieldSize() {
  $(".lp-pom-form .lp-pom-form-field").each(function(i, field) {
    $(field).offset($(boxes[i]).offset());
    $(this).children().outerWidth($(boxes[i]).outerWidth());
    $(this).children().outerHeight($(boxes[i]).outerHeight());
  });
}
lp.jQuery(document).ready(function($) {
  setFlexibleFormFieldSize();
});
window.addEventListener("resize", setFlexibleFormFieldSize);
