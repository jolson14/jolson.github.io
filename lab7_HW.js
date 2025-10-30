require(["esri/Map", "esri/views/MapView", "esri/layers/TileLayer"], function (Map, MapView, TileLayer) {
var tileLayer = new TileLayer({
  url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/2024_US_Census/FeatureServer"
});

map.add(tileLayer);
