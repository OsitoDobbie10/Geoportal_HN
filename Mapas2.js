var mapoptions1 = {center:[14.40, -87.083],zoom: 15,zoomControl: true};
var setMaxBounds1 = [14.0758, -87.1826, 14.1075, -87.1418];
var mapa = L.map('map2',mapoptions1,setMaxBounds1);   
//agregar mapa base de mapbox

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib3NpdG9kb2JiaWUiLCJhIjoiY2t2NXlycG5xM3R2ZDJ3cDY2azA3dmxlciJ9.8Q9I-QOLNZ0mZL5pt_JnfQ'}).addTo(mapa);

    let calles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 20,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoib3NpdG9kb2JiaWUiLCJhIjoiY2t2NXlycG5xM3R2ZDJ3cDY2azA3dmxlciJ9.8Q9I-QOLNZ0mZL5pt_JnfQ'})

    let satelite1 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 20,
        id: 'mapbox/satellite-streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoib3NpdG9kb2JiaWUiLCJhIjoiY2t2NXlycG5xM3R2ZDJ3cDY2azA3dmxlciJ9.8Q9I-QOLNZ0mZL5pt_JnfQ'});
    let noche = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 16,
            id: 'mapbox/navigation-night-v1',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1Ijoib3NpdG9kb2JiaWUiLCJhIjoiY2t2NXlycG5xM3R2ZDJ3cDY2azA3dmxlciJ9.8Q9I-QOLNZ0mZL5pt_JnfQ'}); 

    let OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
                maxZoom: 17,
                attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
            });

    //funcion para Hoteles;
    function popup2(feature,layer){
        if(feature.properties && feature.properties.Name){
        layer.bindPopup(`<strong>Nombre del Hotel: </strong> ${featproperties.Name} <br/>
        <strong>Tipo de elemento: </strong> ${feature.properties.Tipo} <br/>
        <strong>Manzana: </strong> ${feature.properties.Tipo} <br/> 
        <strong>Coordenada Y: </strong> ${feature.properties.CoorY} <br/> 
        <strong>Coordenada X: </strong> ${feature.properties.CoorX} <br/> 
        <strong>Municipio: </strong> ${feature.properties.Municipio} <br/>
        <strong>Fuente: </strong> ${feature.properties.Fuente} <br/>
        <strong>Direccion: </strong> ${feature.properties.Direccion} <br/>
        <strong>Como llegar: </strong> <a href="${feature.properties.Como_llegar}" >Como llegar.</a> `);}} 

        var Interes_Turistico = L.icon({
            iconUrl: 'destino.png',
            //shadowUrl: 'leaf-shadow.png',
            iconSize:     [40, 40], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
        });
function text1(){
    return `<Strong>Nombre del sitio:</Strong>  Lagunas de oxidación Talanga F.M. <br>
            <Strong>Tipo de elemento:</Strong>Puntos de interes turistico <br>
            <Strong>Coordenada Y:</Strong> 14.43 <br>
            <Strong>Coordenada X:</Strong>-87.083 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps `}

L.marker([14.43,-87.083],{icon: Interes_Turistico}).addTo(mapa).bindPopup(text1());

function text2(){
    return `<Strong>Nombre del sitio:</Strong> Hermita Guadalquibir<br>
            <Strong>Tipo de elemento:</Strong>Puntos de interes turistico <br>
            <Strong>Coordenada Y:</Strong> 14.426 <br>
            <Strong>Coordenada X:</Strong> -87.135 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps `}

L.marker([14.426,-87.135],{icon: Interes_Turistico}).addTo(mapa).bindPopup(text2())
;

function text3(){
    return `<Strong>Nombre del sitio:</Strong> Proyecto Manuelito<br>
            <Strong>Tipo de elemento:</Strong>Puntos de interes turistico <br>
            <Strong>Coordenada Y:</Strong> 14.396 <br>
            <Strong>Coordenada X:</Strong> -87.078 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps`}
            
L.marker([ 14.396,-87.078],{icon: Interes_Turistico}).addTo(mapa).bindPopup(text3());

function text4(){
    return `<Strong>Nombre del sitio:</Strong> Árbol La Ceiba Talanga<br>
            <Strong>Tipo de elemento:</Strong>Puntos de interes turistico <br>
            <Strong>Coordenada Y:</Strong> 14.402 <br>
            <Strong>Coordenada X:</Strong> -87.084 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps`}

L.marker([14.402,-87.084],{icon: Interes_Turistico}).addTo(mapa).bindPopup(text4());

function text5(){
    return `<Strong>Nombre del sitio:</Strong> Vision Fund Honduras OPDF<br>
            <Strong>Tipo de elemento:</Strong>Puntos de interes turistico <br>
            <Strong>Coordenada Y:</Strong> 14.398 <br>
            <Strong>Coordenada X:</Strong> -87.083 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps`}

L.marker([14.398 ,-87.083],{icon: Interes_Turistico}).addTo(mapa).bindPopup(text5());

function text6(){
    return `<Strong>Nombre del sitio:</Strong> V I L L A - D I F E R <br>
            <Strong>Tipo de elemento:</Strong>Puntos de interes turistico <br>
            <Strong>Coordenada Y:</Strong> 14.422 <br>
            <Strong>Coordenada X:</Strong> -87.088 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps`}

L.marker([14.422 ,-87.088],{icon: Interes_Turistico}).addTo(mapa).bindPopup(text6());

function text7(){
    return `<Strong>Nombre del sitio:</Strong> TRACOMA, Talanga <br>
            <Strong>Tipo de elemento:</Strong>Puntos de interes turistico <br>
            <Strong>Coordenada Y:</Strong> 14.417 <br>
            <Strong>Coordenada X:</Strong> -87.096 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps`}

L.marker([14.417 ,-87.096],{icon: Interes_Turistico}).addTo(mapa).bindPopup(text7());


var Hoteles_Talanga = L.icon({
    iconUrl: 'hotel.png',
    //shadowUrl: 'leaf-shadow.png',
    iconSize:     [25, 25], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
});

function text8(){
    return `<Strong>Nombre del sitio:</Strong> TRACOMA, Talanga <br>
            <Strong>Tipo de elemento:</Strong>Hopedaje <br>
            <Strong>Coordenada Y:</Strong> 14.441 <br>
            <Strong>Coordenada X:</Strong> -87.075 <br>
            <Strong>Direccion:</Strong> CWRG+72W, Guayabillas <br>
            <Strong>Calificacion:</Strong> 4 estrellas <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>
            <a href="https://www.google.com/maps/dir//CWRG%2B72W+Hacienda+Real+Molina,+Guayabillas/@14.4405968,-87.078785">Como llegar.</a>` }

L.marker([14.441,-87.075],{icon: Hoteles_Talanga}).addTo(mapa).bindPopup(text8()); 

function text9(){
    return `<Strong>Nombre del sitio:</Strong> Automotel miami <br>
            <Strong>Tipo de elemento:</Strong>Hopedaje <br>
            <Strong>Coordenada Y:</Strong> 14.416 <br>
            <Strong>Coordenada X:</Strong> -87.107 <br>
            <Strong>Direccion:</Strong> km 50, Carr. De tegucigalpa a talanga, Talanga <br>
            <Strong>Calificacion:</Strong> 3 estrellas <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>
            <a href="https://www.google.com/maps/dir//14.5251269,-87.6902077/@14.5251269,-87.6902077,14z">Como llegar.</a>` }

L.marker([14.416,-87.107],{icon: Hoteles_Talanga}).addTo(mapa).bindPopup(text9());

function text10(){
    return `<Strong>Nombre del sitio:</Strong> Ramírez Chávez <br>
            <Strong>Tipo de elemento:</Strong>Hopedaje <br>
            <Strong>Coordenada Y:</Strong> 14.394 <br>
            <Strong>Coordenada X:</Strong> -87.105 <br>
            <Strong>Direccion:</Strong>  <br>
            <Strong>Calificacion:</Strong> 2 estrellas <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>
            <a href="#">Como llegar.</a>` }

L.marker([14.394,-87.105],{icon: Hoteles_Talanga}).addTo(mapa).bindPopup(text10());


function text11(){
    return `<Strong>Nombre del sitio:</Strong> Eco-Hotel y Cabañas La Granja<br>
            <Strong>Tipo de elemento:</Strong>Hopedaje <br>
            <Strong>Coordenada Y:</Strong> 14.411 <br>
            <Strong>Coordenada X:</Strong> -87.063 <br>
            <Strong>Direccion:</Strong> Col. La Orqueta #2, 3 cuadras abajo del campo de los Mananti<br>
            <Strong>Calificacion:</Strong> 5 estrellas <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>
            <a href="https://www.google.com/maps/dir///@14.4109685,-87.0628489,15z">Como llegar.</a>` }

L.marker([14.411,-87.063],{icon: Hoteles_Talanga}).addTo(mapa).bindPopup(text11());

function text12(){
    return `<Strong>Nombre del sitio:</Strong>Estephany Vidaur <br>
            <Strong>Tipo de elemento:</Strong>Hopedaje <br>
            <Strong>Coordenada Y:</Strong> 14.404 <br>
            <Strong>Coordenada X:</Strong> -87.078 <br>
            <Strong>Direccion:</Strong> Col. La Orqueta #2, 3 cuadras abajo del campo de los Mananti<br>
            <Strong>Calificacion:</Strong> <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>
            <a href="#"</a>` }
            
L.marker([14.404,-87.078],{icon: Hoteles_Talanga}).addTo(mapa).bindPopup(text12());

function text13(){
    return `<Strong>Nombre del sitio:</Strong>Hotel Cristina <br>
            <Strong>Tipo de elemento:</Strong>Hopedaje <br>
            <Strong>Coordenada Y:</Strong> 14.418 <br>
            <Strong>Coordenada X:</Strong> -87.087 <br>
            <Strong>Direccion:</Strong> km 52 Carr. a Olancho, Talanga, Honduras<br>
            <Strong>Calificacion:</Strong> 4.6 strellas <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>
            <a href="https://www.google.com/maps/dir//Hotel+Cristina,+km+52+Carr.+a+Olancho,+Talanga/@14.4184714,-87.0865">Como llegar.</a>` }

L.marker([ 14.418,-87.087],{icon: Hoteles_Talanga}).addTo(mapa).bindPopup(text13());

function text14(){
    return `<Strong>Nombre del sitio:</Strong>Hotel La Fuente D&D <br>
            <Strong>Tipo de elemento:</Strong>Hopedaje <br>
            <Strong>Coordenada Y:</Strong> 14.409 <br>
            <Strong>Coordenada X:</Strong> -87.078 <br>
            <Strong>Direccion:</Strong> Hotel La Fuente D&D <br>
            <Strong>Calificacion:</Strong> 3.8 estrellas <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>
            <a href="https://www.google.com/maps/dir//14.4097007,-87.0793725/@14.410574,-87.0786,15z?hl=es-ES">Como llegar.</a>` }

L.marker([14.409,-87.078],{icon: Hoteles_Talanga}).addTo(mapa).bindPopup(text14()); 

var centros_comerciales = L.icon({
    iconUrl: 'centro-comercial.png ',
    //shadowUrl: 'leaf-shadow.png',
    iconSize:     [40, 40], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
});

function text15(){
    return `<Strong>Nombre del sitio:</Strong>Línea divisoria Cedros FM <br>
            <Strong>Tipo de elemento:</Strong>Punto de interes comercial <br>
            <Strong>Coordenada Y:</Strong> 14.472 <br>
            <Strong>Coordenada X:</Strong> -87.071 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>` }

L.marker([14.472,-87.071],{icon: centros_comerciales}).addTo(mapa).bindPopup(text15()); 

function text16(){
    return `<Strong>Nombre del sitio:</Strong>Comercial La Trinidad <br>
            <Strong>Tipo de elemento:</Strong>Punto de interes comercial <br>
            <Strong>Coordenada Y:</Strong> 14.434 <br>
            <Strong>Coordenada X:</Strong> -87.02 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>` }

L.marker([14.434,-87.02],{icon: centros_comerciales}).addTo(mapa).bindPopup(text16()); 

var gasolineras = L.icon({
    iconUrl: 'gasolinera.png',
    //shadowUrl: 'leaf-shadow.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
});

function text17(){
    return `<Strong>Nombre del sitio:</Strong>GASOLINERA UNO SAN JOSE DE BUENA VISTA <br>
            <Strong>Tipo de elemento:</Strong>Gasolinera <br>
            <Strong>Coordenada Y:</Strong> 14.443 <br>
            <Strong>Coordenada X:</Strong> -87.067 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>` }

L.marker([14.443,-87.067],{icon: gasolineras}).addTo(mapa).bindPopup(text17()); 

function text18(){
    return `<Strong>Nombre del sitio:</Strong>UNO SAN DIEGO <br>
            <Strong>Tipo de elemento:</Strong>Gasolinera <br>
            <Strong>Coordenada Y:</Strong> 14.411 <br>
            <Strong>Coordenada X:</Strong> -87.079 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>` }

L.marker([14.411,-87.079],{icon: gasolineras}).addTo(mapa).bindPopup(text18());  

function text19(){
    return `<Strong>Nombre del sitio:</Strong>Gasolinera Puma <br>
            <Strong>Tipo de elemento:</Strong>Gasolinera <br>
            <Strong>Coordenada Y:</Strong> 14.418 <br>
            <Strong>Coordenada X:</Strong> -87.08 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.418,-87.08],{icon: gasolineras}).addTo(mapa).bindPopup(text19());  

//restaurantes 
var Restaurantes = L.icon({ 
    iconUrl: 'restaurante.png',
    //shadowUrl: 'leaf-shadow.png',
    iconSize:     [30, 30], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
});

function text20(){
    return `<Strong>Nombre del sitio:</Strong>Restaurante Sabor Costeño <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.417 <br>
            <Strong>Coordenada X:</Strong> -87.08 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.417,-87.08],{icon: Restaurantes}).addTo(mapa).bindPopup(text20());  

function text21(){
    return `<Strong>Nombre del sitio:</Strong>Asados La Piña <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.406 <br>
            <Strong>Coordenada X:</Strong> -87.078 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.406,-87.078],{icon: Restaurantes}).addTo(mapa).bindPopup(text21());  

function text22(){
    return `<Strong>Nombre del sitio:</Strong>Restaurante SIKISA <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.402 <br>
            <Strong>Coordenada X:</Strong> -87.08 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.406,-87.08],{icon: Restaurantes}).addTo(mapa).bindPopup(text22());

function text23(){
    return `<Strong>Nombre del sitio:</Strong>Restaurante Wa Mei <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.407 <br>
            <Strong>Coordenada X:</Strong> -87.077 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.407 , -87.077 ],{icon: Restaurantes}).addTo(mapa).bindPopup(text23());

function text24(){
    return `<Strong>Nombre del sitio:</Strong> Pollolandia Talanga #4 <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.407 <br>
            <Strong>Coordenada X:</Strong> -87.078 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.407 ,-87.078 ],{icon: Restaurantes}).addTo(mapa).bindPopup(text24());

function text25(){
    return `<Strong>Nombre del sitio:</Strong> Pollolandia Talanga #3 <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.405 <br>
            <Strong>Coordenada X:</Strong> -87.08 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.405 ,-87.08 ],{icon: Restaurantes}).addTo(mapa).bindPopup(text25()); 

function text26(){
    return `<Strong>Nombre del sitio:</Strong> Restaurante Yen Yen <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.4 <br>
            <Strong>Coordenada X:</Strong> -87.082 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.4 ,-87.082 ],{icon: Restaurantes}).addTo(mapa).bindPopup(text26());

function text27(){
    return `<Strong>Nombre del sitio:</Strong> Del Sarten a Su Mesa <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.408 <br>
            <Strong>Coordenada X:</Strong> -87.081 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.408 , -87.081 ],{icon: Restaurantes}).addTo(mapa).bindPopup(text27());

function text27(){
    return `<Strong>Nombre del sitio:</Strong> Jaque Mate <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.4 <br>
            <Strong>Coordenada X:</Strong> -87.083 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`} 
L.marker([14.4 , -87.083],{icon: Restaurantes}).addTo(mapa).bindPopup(text28());

function text28(){return `<Strong>Nombre del sitio:</Strong> Tito's Wings <br><Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
<Strong>Coordenada Y:</Strong> 14.414 <br>
<Strong>Coordenada X:</Strong> -87.081 <br>
<Strong>Municipio:</Strong> Talanga <br>
<Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.414 , -87.081],{icon: Restaurantes}).addTo(mapa).bindPopup(text28());


function text29(){ return `<Strong>Nombre del sitio:</Strong> Turicentro Ranchosol <br><Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
    <Strong>Coordenada Y:</Strong> 14.433 <br>
    <Strong>Coordenada X:</Strong> -87.051 <br>
    <Strong>Municipio:</Strong> Talanga <br>
    <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.433 , -87.051],{icon: Restaurantes}).addTo(mapa).bindPopup(text29());   

function text30(){ return `<Strong>Nombre del sitio:</Strong> Comedor y Pulpería <br><Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
    <Strong>Coordenada Y:</Strong> 14.385 <br>
    <Strong>Coordenada X:</Strong> -87.135 <br>
    <Strong>Municipio:</Strong> Talanga <br>
    <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.385 , -87.135],{icon: Restaurantes}).addTo(mapa).bindPopup(text30());   


function text31(){
    return `<Strong>Nombre del sitio:</Strong> Restaurante El Paso <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.396 <br>
            <Strong>Coordenada X:</Strong> -87.127 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.396,-87.127],{icon: Restaurantes}).addTo(mapa).bindPopup(text31());  

function text32(){
    return `<Strong>Nombre del sitio:</Strong> Restaurante Quality Sabor<br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.436 <br>
            <Strong>Coordenada X:</Strong> -87.018 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}
L.marker([14.436,-87.018 ],{icon: Restaurantes}).addTo(mapa).bindPopup(text32()); 

function text33(){
    return `<Strong>Nombre del sitio:</Strong>Turicentro Ranchosol <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.433 <br>
            <Strong>Coordenada X:</Strong> -87.051 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.433,-87.051],{icon: Restaurantes}).addTo(mapa).bindPopup(text33());

function text34(){
    return `<Strong>Nombre del sitio:</Strong>Pizza Hut <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.454 <br>
            <Strong>Coordenada X:</Strong> -87.062 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.454,-87.062],{icon: Restaurantes}).addTo(mapa).bindPopup(text34());

function text35(){
    return `<Strong>Nombre del sitio:</Strong>Típicos La Kanchita <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.467 <br>
            <Strong>Coordenada X:</Strong> -87.07 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.467,-87.07],{icon: Restaurantes}).addTo(mapa).bindPopup(text35());

function text36(){
    return `<Strong>Nombre del sitio:</Strong>Restaurante Los Trupillos <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.464 <br>
            <Strong>Coordenada X:</Strong> -87.069 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.464,-87.069],{icon: Restaurantes}).addTo(mapa).bindPopup(text36());

function text37(){
    return `<Strong>Nombre del sitio:</Strong>Pollolandia “La Ermita” <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.46 <br>
            <Strong>Coordenada X:</Strong> -87.07 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.46,-87.07],{icon: Restaurantes}).addTo(mapa).bindPopup(text37());

function text38(){
    return `<Strong>Nombre del sitio:</Strong> Pollolandia “La Ermita” <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.441 <br>
            <Strong>Coordenada X:</Strong> -87.067 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.441,-87.067],{icon: Restaurantes}).addTo(mapa).bindPopup(text38()); 

function text39(){
    return `<Strong>Nombre del sitio:</Strong> Coffee House Talanga F.M” <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.403 <br>
            <Strong>Coordenada X:</Strong> -87.082 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.403,-87.082],{icon: Restaurantes}).addTo(mapa).bindPopup(text39());

function text40(){
    return `<Strong>Nombre del sitio:</Strong> Miguelita” <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.401 <br>
            <Strong>Coordenada X:</Strong> -87.081 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.401,-87.081],{icon: Restaurantes}).addTo(mapa).bindPopup(text40());

function text41(){
    return `<Strong>Nombre del sitio:</Strong> Bar y restaurante LA ROKA” <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.4 <br>
            <Strong>Coordenada X:</Strong> -87.082 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.4,-87.082],{icon: Restaurantes}).addTo(mapa).bindPopup(text41());

function text42(){
    return `<Strong>Nombre del sitio:</Strong> Golosinas Dania” <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.399<br>
            <Strong>Coordenada X:</Strong> -87.079 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.399,-87.079],{icon: Restaurantes}).addTo(mapa).bindPopup(text42());

function text43(){
    return `<Strong>Nombre del sitio:</Strong> Finca El Rancho La Cuesta” <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.388<br>
            <Strong>Coordenada X:</Strong> -87.199 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.388,-87.199],{icon: Restaurantes}).addTo(mapa).bindPopup(text43());

function text44(){
    return `<Strong>Nombre del sitio:</Strong> Café Honoré” <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.395 <br>
            <Strong>Coordenada X:</Strong> -87.186 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.395,-87.186],{icon: Restaurantes}).addTo(mapa).bindPopup(text44());

function text45(){
    return `<Strong>Nombre del sitio:</Strong> Restaurante y Balneario Villa Real” <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.417 <br>
            <Strong>Coordenada X:</Strong> -87.095 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.417,-87.095],{icon: Restaurantes}).addTo(mapa).bindPopup(text45());

function text46(){
    return `<Strong>Nombre del sitio:</Strong> La Casa de Pollo Rey <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.412 <br>
            <Strong>Coordenada X:</Strong> -87.08 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.412 , -87.08],{icon: Restaurantes}).addTo(mapa).bindPopup(text46());

function text47(){
    return `<Strong>Nombre del sitio:</Strong> Café Taviani Gran Plaza <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.419 <br>
            <Strong>Coordenada X:</Strong> -87.08 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.419,-87.08],{icon: Restaurantes}).addTo(mapa).bindPopup(text47());

function text48(){
    return `<Strong>Nombre del sitio:</Strong> COHOPRODIa <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.421 <br>
            <Strong>Coordenada X:</Strong> -87.061 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.421,-87.061],{icon: Restaurantes}).addTo(mapa).bindPopup(text48());

function text49(){
    return `<Strong>Nombre del sitio:</Strong> Campamento MANACHEK <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.455 <br>
            <Strong>Coordenada X:</Strong> -87.003 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.455,-87.003],{icon: Restaurantes}).addTo(mapa).bindPopup(text49());

function text50(){
    return `<Strong>Nombre del sitio:</Strong> Carnitas y Golosinas Mari <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.473 <br>
            <Strong>Coordenada X:</Strong> -86.984<br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

 L.marker([14.473 ,-86.984],{icon: Restaurantes}).addTo(mapa).bindPopup(text50());

 function text51(){
    return `<Strong>Nombre del sitio:</Strong> Tipico La Canchita <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.36 <br>
            <Strong>Coordenada X:</Strong> -87.079 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.36 ,-87.079],{icon: Restaurantes}).addTo(mapa).bindPopup(text51());

function text52(){
    return `<Strong>Nombre del sitio:</Strong> La Escondida <br>
            <Strong>Tipo de elemento:</Strong>Restaurante y cafeteria. <br>
            <Strong>Coordenada Y:</Strong> 14.397 <br>
            <Strong>Coordenada X:</Strong> -87.081 <br>
            <Strong>Municipio:</Strong> Talanga <br>
            <Strong>Fuente:</Strong> Google by maps <br>`}

L.marker([14.397,-87.081],{icon: Restaurantes}).addTo(mapa).bindPopup(text52()); 


let mapasbase2 = {
    'Mapa base Aatelite': satelite1,
    'Mapa de Noche':noche,
    'Mapa de Calles':calles,
    'Mapa topografico':OpenTopoMap};


    function style(feature){
        return {
            weight: 2,
            opacity: 1,
            color: 'red',
            dashArray: '1',
            fillOpacity: 0.6
        };
    }

    const redvial = L.geoJson(red_vial,{
        style:style});
    const capasbase = {
        'Redvial':redvial
    };

//agregar capas al mapa en un control de capas
L.control.layers(mapasbase2,capasbase,{position: "topleft"}).addTo(mapa);  

L.control.scale().addTo(mapa);
/*
var options_measure = {
    position: 'topright',
    primaryLengthUnit: 'meters', 
    secondaryLengthUnit: 'feet' ,
    primaryAreaUnit: 'sqmeters',
    activeColor: '#F4FB15',
    completedColor: '#F4FB15'
};*/
L.Control.Measure({
    primaryLengthUnit: 'meters', 
    secondaryLengthUnit: 'feet' ,
    primaryAreaUnit: 'sqmeters',
    activeColor: '#F4FB15',
    completedColor: '#F4FB15'
}).addTo(mapa);








































































































    

























    













    















        






        


        



