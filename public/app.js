const initialize = function(){

  const center = {
    lat: 55.947155,
    lng: -3.201987
  }

  const container = document.querySelector("#main-map");

  const mainMap = new MapWrapper(container, center, 18);

  mainMap.addClickEvent();
  mainMap.addMarker(center);

  const button = document.querySelector("#bounce");
  button.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

  const detroit = document.querySelector('#detroit');
  detroit.addEventListener("click", mainMap.setCenter.bind(mainMap));
}

document.addEventListener("DOMContentLoaded", initialize);
