document.getElementById("searchButton").addEventListener("click", function () {
  let searchInput = document.getElementById("searchInput").value.toLowerCase();

  if (searchInput.includes("clothes") && searchInput.includes("women")) {
    window.location.href =
      "../women'sCorner/women'sCornerLogged/women's_corner.html";
  } else if (searchInput.includes("clothes") && searchInput.includes("men")) {
    window.location.href = "../men'sCorner/men'sCornerLogged/men's_corner.html";
  } else {
    console.log("Search not supported");
  }
});
