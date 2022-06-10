var mapoptions = {center:[14.40, -87.083],zoom: 11,zoomControl: true};
var setMaxBounds = [14.0758, -87.1826, 14.1075, -87.1418];
var mapa = L.map('mapa',mapoptions,L.CRS.EPSG4326,setMaxBounds); 
//agregar mapa base de mapbox
/*
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 23,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib3NpdG9kb2JiaWUiLCJhIjoiY2t2NXlycG5xM3R2ZDJ3cDY2azA3dmxlciJ9.8Q9I-QOLNZ0mZL5pt_JnfQ'  
}).addTo(mapa);*/

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 12,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib3NpdG9kb2JiaWUiLCJhIjoiY2t2NXlycG5xM3R2ZDJ3cDY2azA3dmxlciJ9.8Q9I-QOLNZ0mZL5pt_JnfQ'}).addTo(mapa); 

//agregar mapas de carto 
var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});

// Agregar plugin MiniMap

var minimap = new L.Control.MiniMap(carto_light,
    {
        toggleDisplay: true,
        minimized: false,
        position: "bottomleft" 
    }).addTo(mapa); 

let info1 = L.control();
// Crear un div con una clase info este div se agregara al mapa
    info1.onAdd = function(mapa){
        this._div = L.DomUtil.create('div','infomap1');
        this.update();
        return this._div;}; 
        /*
        info1.update = function (mapa){
            this._div.innerHTML = '<h4>Mapa de ubicacion Talanga</h4><ul> <li>Ubicacion: Dept Francisco Moraan.</li><li>Datos Generales del municipio.</li></ul><br><img src="Talanga6.jpg" alt="Mapa1"><br><p>Datos de poblacion.</p><br><img src="Grafico1.png" alt="Mapa"><br><br><p>Fuente:INE censo 2013.</p>'}; 
        info1.addTo(mapa); */
    
        function popup(feature,layer){
            if(feature.properties && feature.properties.NOMBRE){
                layer.bindPopup(`<strong> Geocodigo: </strong> ${feature.properties.GEOCODIGO} <br/>
                <strong>Nombre Aldea: </strong> ${feature.properties.NOMBRE} <br/>
                <strong>Codigo Municipio: </strong> ${feature.properties.COD_MUNI} <br/> 
                <strong>Desidad poblacional: </strong> ${feature.properties.Densidad} <br/> 
                <strong>Total Hombres: </strong> ${feature.properties.Libro1_Hom} <br/> 
                <strong>Total mujeres: </strong> ${feature.properties.Libro1_Muj}`  );
            }
        } 

        function getColor(d){
            return  d == "El Tomate" ? '#ca0020' :
                    d == "Agalteca" ? '#f4a582' :
                    d == "El Guanacaste" ? '#bababa' :
                    d == "El Tablan" ? '#92c5de' :
                    d == "R8o Abajo" ? '#0571b0' :
                    d == "El Rosario o Laja Picada" ? '#7b3294' :
                    d == "La Ermita" ? '#c2a5cf' :
                    d == "Talanga" ? '#e66101' :
                    d == "Corralitos" ? '#a6dba0' :
                    d == "Jalaca"   ? '#008837' :
                    d == "Los Charcos"   ? '#dfc27d' :
                    d == "La Esperanza" ? '#a6611a' :
                    d == "R8o Dulce" ? '#dfc27d' :
                    d == "Palmira" ? '#f5f5f5' :
                    d == "Valle Arriba" ? '#f5f5f5' :
                    d == "Mata de Plbtano" ? '#80cdc1' :
                    d == "La Aserradera" ? '#e66101' :
                    d == "Agua Blanca" ? '#fdb863' :
                    d == "Sicaguara" ? '#404040' :
                    d == "Pacayas" ? '#0571b0' :
                    d == "El Ocotal" ? '#7b3294' :
                    d == "Las Quebradas" ? '#c2a5cf' :
                    d == "La Labranza" ? '#e66101' :
                    d == "San Antonio de Pastos" ? '#a6dba0' :
                    d == "Joyas de Carballo"   ? '#008837' :
                    d == "La Venta" ? '#a6611a' :
                    d == "Chandala" ? '#dfc27d' :
                    d == "La Majada Verde" ? '#f5f5f5' :
                    d == "Cerro Bonito" ? '#80cdc1' :
                    d == "El Jicarito" ? '#e66101' :
                    d == "Cofrad" ? '#fdb863' :
                    d == "Pajarillos" ? '#404040' :
                               '#404040';}

        function style(feature){
                                return {
                                    fillColor: getColor(feature.properties.NOMBRE),
                                    weight: 2,
                                    opacity: 1,
                                    color: 'white',
                                    dashArray: '3',
                                    fillOpacity: 0.7
                                };
                            }
     /*let openstremmap =  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
     var mapboxAttribution = {attribution: '&copy; <a href="https://www.openstreeopenstremmaptmap.org/copyright">OpenStreetMap</a> contributors'};*/

     let mapbox =  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 12,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoib3NpdG9kb2JiaWUiLCJhIjoiY2t2NXlycG5xM3R2ZDJ3cDY2azA3dmxlciJ9.8Q9I-QOLNZ0mZL5pt_JnfQ'}); 

    let terreno1 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 16,
    id: 'mapbox/navigation-night-v1',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib3NpdG9kb2JiaWUiLCJhIjoiY2t2NXlycG5xM3R2ZDJ3cDY2azA3dmxlciJ9.8Q9I-QOLNZ0mZL5pt_JnfQ'}); 

    let mapasbase = {
        'Mapa Mapbox calles': mapbox,
         'Noche':terreno1};

    const Talanga = L.geoJson(aldeas,{
        style:style,
        onEachFeature: popup}).addTo(mapa);
    const capas = {
        'Aldeas Talanga':Talanga
    };

    function style(feature){
        return {
            fillColor: getColor(feature.properties.NOMBRE),
            weight: 2,
            opacity: 1,
            color: 'white',
            dashArray: '3',
            fillOpacity: 0.7
        };
    }

//agregar capas al mapa en un control de capas
L.control.layers(mapasbase,capas,{position: "topleft"}).addTo(mapa); 


    const legend = L.control({position: 'bottomright'}); 
     legend.onAdd = function (mapa) { 
        var div = L.DomUtil.create('div', 'info legend'), 
        grades = ["El Tomate","Agalteca","El Guanacaste","El Tablan","R8o Abajo","El Rosario o Laja Picada","La Ermita",
        "Talanga","Corralitos","Jalaca" ,"Los Charcos","La Esperanza",
        "R8o Dulce","Palmira","Valle Arriba","Mata de Plbtano","La Aserradera",
        "Agua Blanca","Sicaguara","Pacayas","El Ocotal","Las Quebradas","La Labranza","San Antonio de Pastos","Joyas de Carballo","La Venta","Chandala","La Majada Verde","Cerro Bonito","El Jicarito","Cofrad","Pajarillos"],
        labels = []; 
        for (var i = 0; i < grades.length; i++) { 
        div.innerHTML += 
        '<i style="background:' + getColor(grades[i]) + '"></i> ' + 
        grades[i] + (grades[i] ? '<br>' : '+'); 
        } 
        return div; 
        }; 
        
        legend.addTo(mapa); 
