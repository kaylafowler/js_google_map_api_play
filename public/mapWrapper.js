const MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addClickEvent = function(){
  google.maps.event.addListener(this.googleMap, "click", function(event){
    const position = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    this.addMarker(position);
  }.bind(this));
}

MapWrapper.prototype.addMarker = function(coords){
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function() {
    infowindow.open(this.googleMap, marker);
  });

  this.markers.push(marker);
}

MapWrapper.prototype.bounceMarkers = function(){
  this.markers.forEach(function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
    //marker.setMap(null) to remove marker from map
  });
}

MapWrapper.prototype.setCenter = function(){
  const position = {
    lat: 42.391545,
    lng: -83.114963
  }
  this.googleMap.setCenter(position);
}
