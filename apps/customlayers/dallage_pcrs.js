const layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        url: "https://www.geo2france.fr/geoserver/geo2france/ows?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=dallage_pcrs&outputFormat=application/json&srsName=EPSG:4326",
        format: new ol.format.GeoJSON()
    }),
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: '#0000',  // No stroke
            width: 0
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.6)'  // Semi-transparent fill
        })
    })
});
new CustomLayer('dallage_pcrs', layer);
