require(["esri/Map", "esri/views/MapView", "esri/layers/TileLayer"], function (Map, MapView, TileLayer) {

    var map = new Map({             //adds basemap
      basemap: "gray-vector"
    });

    var view = new MapView({        //adds new container for the basemap
      container: "viewDiv",
      map: map,
      center: [-98, 45],
      zoom: 2
    });

    var tileLayer = new TileLayer({   //tilelayer created with congressional districts in the USA
      url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/Congressional_Districts/MapServer"
    });

    map.add(tileLayer);
});
