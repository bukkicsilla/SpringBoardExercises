const spanEl = document.querySelector("span");
const mainEl = document.querySelector("main");
/*spanEl.addEventListener("click", function (e) {
  spanEl.parentElement.style.visibility = "hidden";
  document.body.style.backgroundColor = "#fdf0d5";
});*/

$(function () {
  let c = $("h2").attr("class");
  if (c) {
    $("body").css("background-color", "#003049");
  }
  console.log($("h2").attr("class"));
  $("span").on("click", function (e) {
    console.log($("h2").attr("class"));
    $(this).parent().hide();
    $("body").css("background-color", "#fdf0d5");
  });
});
