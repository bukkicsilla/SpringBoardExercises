console.log("Let's get this party started!");

async function getImage(searchterm) {
  /*const res = await axios.get(
    `https://api.giphy.com/v1/gifs/search?q=${searchterm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );*/
  const res = await axios.get("https://api.giphy.com/v1/gifs/search/", {
    params: {
      q: searchterm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  const { data } = res.data;
  /*for (let image of data) {
    console.log(image.images.original.url);
  }*/
  const idx = Math.floor(Math.random() * data.length);
  const imgUrl = data[idx].images.original.url;
  //console.log(imgUrl);
  return imgUrl;
}

//getImage("hilarious");
$(function () {
  $("form").on("submit", async function (e) {
    e.preventDefault();
    const term = $("input").val();
    const url = await getImage(term);
    $("<img>")
      .addClass("img-fluid img-thumbnail")
      .attr({ src: url, alt: "image" })
      .appendTo("#images");
  });
  $("#btn-delete").on("click", function () {
    $("img").remove();
    $("input").val("");
  });
});
