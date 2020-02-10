var layerFarmacias;
var urlFarmacias = "datos/farmacias.geojson";

function addDatosFarmacias() {

        layerFarmacias  = new L.GeoJSON.AJAX(urlFarmacias, {
            onEachFeature: function (feature, layer) {
                popupContent = "<b>" + feature.properties.NOM + "</b>"+
                "<br>" + feature.properties.CARRCADAST +
                ". " + feature.properties.DOORNUM +
                " " + feature.properties.NBarri + "</b>";
                layer.bindPopup(popupContent);
            },
            pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                    radius: 6,
                    fillColor: "#00ff00",
                    color: "#ffffff",
                    weight: 3,
                    opacity: 1,
                    fillOpacity: 0.8
                });
            }
        }).addTo(map);

        map.setView([41.399733,2.168598],13);
        // controlCapas.addOverlay(layerFarmacias,"Farmacias");

        var searchControl = new L.Control.Search({
            layer: layerFarmacias,  //CAPA ON BUSCA
            initial:false,
            propertyName: 'NOM', //CAMP PEL QUE BUSCA
            circleLocation: true,
            moveToLocation: function (latlng) {  //PQ ES SITUI SOBRE LO BUSCAT
                map.setView(latlng, 17);
            }
        });

        searchControl.on('search:locationfound', function(e) {
            e.layer.openPopup();
        });
        map.addControl(searchControl);

}
