function initmap (mapid,lat,lon,zoomlevel,title,description){
  var map;
  var arrayOSM;
  var baseOSM;
  var markers;
  map = new OpenLayers.Map({
	  div: mapid,
    controls: [ new OpenLayers.Control.PanZoom(), new OpenLayers.Control.Navigation() ],
    theme: null
  });
  arrayOSM = ["http://otile1.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.jpg",
           "http://otile2.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.jpg",
           "http://otile3.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.jpg",
           "http://otile4.mqcdn.com/tiles/1.0.0/osm/${z}/${x}/${y}.jpg"];

  baseOSM = new OpenLayers.Layer.OSM("MapQuest-OSM Tiles", arrayOSM);
  map.addLayer(baseOSM);
  var lonLat = new OpenLayers.LonLat(lon,lat).transform(new OpenLayers.Projection("EPSG:4326"),map.getProjectionObject());
  map.setCenter(lonLat, zoomlevel);
  if (title)
  {
    markers = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(markers);
    var size = new OpenLayers.Size(21,25);
    var offset = new OpenLayers.Pixel(-(size.w/2), -size.h);
    var icon = new OpenLayers.Icon(rootUrl + '/images/marker.png', size, offset);
    marker = new OpenLayers.Marker(lonLat,icon);
    if (title !== "marker")
    { 
      var boxText = "<h2>" + title + "</h2><p>" + description + "</p>";
      var feature = new OpenLayers.Feature(markers, lonLat);
      feature.closeBox = true;
      feature.popupClass = OpenLayers.Class(OpenLayers.Popup.Anchored, {minSize: new OpenLayers.Size(300, 180) } );
      feature.data.popupContentHTML = boxText;
      feature.data.overflow = "hidden";
      marker.feature = feature;
      var markerClick = function(evt) {
        if (this.popup == null) {
          this.popup = this.createPopup(this.closeBox);
          map.addPopup(this.popup);
          this.popup.show();
        } else {
          this.popup.toggle();
        }
        OpenLayers.Event.stop(evt);
      };
      marker.events.register("mousedown", feature, markerClick);
    }
    markers.addMarker(marker);
  }
}
