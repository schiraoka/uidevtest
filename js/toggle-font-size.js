// CMG Dev test. 31 July 2012.

$(document).ready(function() {
  $("a.type-size-normal").click(function () {
    $("#content article").toggleClass("article-large-font");
    $(this).toggleClass("type-size-large");
    $(this).text($(this).text() == "Larger type" ? "Smaller type" : "Larger type");
  });
});