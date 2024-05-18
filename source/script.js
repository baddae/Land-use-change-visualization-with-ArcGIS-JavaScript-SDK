require([
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/TimeSlider",
    "esri/widgets/Legend"
], function(Map, MapView, FeatureLayer, TimeSlider, Legend) {

    const map = new Map({
        basemap: "streets-navigation-vector"
    });

    const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-100, 40], // Initial center point
        zoom: 3
    });

    const landUseLayer = new FeatureLayer({
        url: "https://services.arcgis.com/E5vyYQKPMX5X3R3H/arcgis/rest/services/Urban_Polygons_SSP2/FeatureServer",
        renderer: {
            type: "unique-value",
            field: "State",
            uniqueValueInfos: [
                { value: "Bare",label: "Bareland" ,symbol: { type: "simple-fill", color: [210,210,210],outline: { width: 0} }},
                { value: "Crop",label: "Croland", symbol: { type: "simple-fill", color: [220,204,102],outline: { width: 0} }},
                { value: "Forest",label: "Forest", symbol: { type: "simple-fill", color: [0,90,0],outline: { width: 0} }},
                { value: "Grass",label: "Grassland", symbol: { type: "simple-fill", color: [255,255,210],outline: { width: 0} }},
                { value: "Urban",label: "Urban", symbol: { type: "simple-fill", color: [166,42,42],outline: { width: 0} }},
                { value: "Water",label: "Water-bodies",  symbol: { type: "simple-fill", color: [153,220,242],outline: { width: 0} }},
            ]
        },
        outFields: ["*"]
    });

    map.add(landUseLayer);

    const timeSlider = new TimeSlider({
        container: "timeSliderDiv",
        view: view,
        mode: "time-window",
        fullTimeExtent: {
            start: new Date(2020, 1, 1),
            end: new Date(2100, 1, 1)
        },
        stops: {
            interval: {
                value: 10,
                unit: "years"
            }
        }
    });

    view.ui.add(timeSlider, "bottom-left");
  const legend = new Legend({
        view: view,
        layerInfos: [
            {
                layer: landUseLayer,
                title: "Land-use Classes"
            }
        ]
    });

    view.ui.add(legend, "top-right");

    document.getElementById("zoomAccra").addEventListener("click", function() {
        view.goTo({
            center: [-0.1969, 5.6145], // Longitude, latitude for Accra, Ghana
            zoom: 9
        });
    });

    document.getElementById("zoomVancouver").addEventListener("click", function() {
        view.goTo({
            center: [-123.1216, 49.2827], // Longitude, latitude for Vancouver, Canada
            zoom: 9
        });
    });

    timeSlider.watch("timeExtent", function(value) {
        landUseLayer.definitionExpression = `date <= '${value.end.toISOString()}'`;
    });

});
