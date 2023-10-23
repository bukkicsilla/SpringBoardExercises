$(function () {
  //rating should be a whole number between 0 and 10
  const minmax = {
    min: "0",
    max: "10",
  };
  $("input").eq(1).attr(minmax);
  $("input")
    .eq(1)
    .on("change", function () {
      let maxValue = parseInt($(this).attr("max"));
      let minValue = parseInt($(this).attr("min"));
      if ($(this).val() > maxValue) {
        $(this).val(maxValue);
      } else if ($(this).val() < minValue) {
        $(this).val(minValue);
      } else {
        $(this).val(Math.round($(this).val()));
      }
    });
  //clicking on the button it should create new elements with title and rating and a remove button
  $("#add").on("click", function (e) {
    e.preventDefault();
    const title = $("input").eq(0).val();
    const rating = $("input").eq(1).val();
    console.log("title", title.length);
    if (title.length < 2) {
      alert("Title should have at least 2 characters!");
      throw new Error("Title should have at least 2 characters!");
    }
    const $movieDiv = $("<div>");
    $("<p>").text(title).appendTo($movieDiv);
    $("<p>").text(rating).appendTo($movieDiv);
    $("<button>").text("Remove").addClass("removeBtn").appendTo($movieDiv);
    $(".container").append($movieDiv);
    $("input").val("");
  });
  //event delegation, remove button, remove paragraphs with parent div
  $(".container").on("click", ".removeBtn", function () {
    $(this).parent().remove();
  });
  //order movies by title, ascending
  $("#abc").on("click", function () {
    const $movieContainer = $(".container");
    const $movies = $movieContainer.children("div").get();
    $movies.sort(function (a, b) {
      let compA = $(a).text().toUpperCase();
      let compB = $(b).text().toUpperCase();
      return compA < compB ? -1 : compA > compB ? 1 : 0;
    });
    $.each($movies, function (idx, itm) {
      $movieContainer.append(itm);
    });
  });
});
