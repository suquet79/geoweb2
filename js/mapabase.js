var map;
        
        function init(){  /*cridem la funcio init desdel body*/
            map = L.map('map',{
            center:[41.6863, 1.8382], /*propiettats mapa*/
            zoom:8
                });
             

            /*http://leaflet-extras.github.io/leaflet-providers/preview/*/
            var capa_osm= L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                { maxZoom : 19, minZoom : 1,    attribution : "OSM" }).addTo(map);  /*aixi afegim la capa al mapa*/

            var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                });

            var Esri_WorldImagery2 = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX,GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                });

            var Stamen_TonerHybrid = L.tileLayer(  'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}', {
                attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                subdomains: 'abcd',   minZoom: 0,     maxZoom: 20,   ext: 'png'  });
            
            /* https://leafletjs.com/reference-1.6.0.html#layergroup */
            var hibrid = L.layerGroup();

            hibrid.addLayer(Esri_WorldImagery2);
            hibrid.addLayer(Stamen_TonerHybrid);

            
            

            var baseLayers = {      /*https://leafletjs.com/reference-1.6.0.html#control-layers*/
                "mapa": capa_osm,
                "orto":Esri_WorldImagery,
                "hibrid":hibrid
                };

           

            var control_capas = L.control.layers(baseLayers,null);
            control_capas.addTo(map);

     


    }