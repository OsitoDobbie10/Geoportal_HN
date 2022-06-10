var mapoptions1 = {center:[16.402, -86.370],zoom: 11,zoomControl: true};
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

    let OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {maxZoom: 17,attribution: 'Map data: &copy; <a href="https://www.      openstreeorg/copyright">OpenStreetMap</a> contributors, <a href="htviewfinderpanoramas.org">SRTM</a> | Map style: &copyhref="https://opentopomap.org">OpenTopoMap</href=> (<a href="httcreativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'});

   //funcion de departamento
    function popup(feature,layer){
        if(feature.properties && feature.properties.NOMBRE){
        layer.bindPopup(`<strong>Nombre del Departamento: </strong> ${feature.properties.NOMBRE} <br/>
        <strong>Geocodico: </strong> ${feature.properties.GEOCODIGO} <br/>
        <strong>Area KM2: </strong> ${feature.properties.Kilometers} <br/> 
        <img src="POPUP1.png" alt="Roatan">`);}}
    //estilos del departamento
        
        function style(feature){
            return {
                weight: 1,
                opacity: 1,
                color: 'blue',
                fill:'white',
                dashArray: '1',
                fillOpacity: 0.7};
            }

 //funcion del municipio
        function popup2(feature,layer){
        if(feature.properties && feature.properties.NOMBRE){
            layer.bindPopup(`<strong>Nombre del municipio: </strong> ${feature.properties.NOMBRE} <br/>
            <strong>Geocodico: </strong> ${feature.properties.GEOCODIGO} <br/>
            <strong>Poblacion: </strong> ${feature.properties.POB_2000} <br/>
            <strong>Area en KM2: </strong> ${feature.properties.KM2} <br/>
            <strong>Cantidad de Hoteles: </strong> ${feature.properties.HOTEL}<br/>
            <strong>Cantidad de Hospitales: </strong> ${feature.properties.HOSPITAL}`);}}

    function getColor(d){
                return  d == '110100' ? '#09F3EF' :
                        d == '110200' ? '#5EF309' :
                        d == '110300' ? '#E5F309' :
                        d == '110400' ? '#F38909' : 
                        '#404040'; } 
    function style2(feature){
                            return {
                                fillColor: getColor(feature.properties.GEOCODIGO),
                                weight: 2,
                                opacity: 1,
                                color: 'white',
                                dashArray: '2',
                                fill:'white',
                                fillOpacity: 0.6};} 

     //funcion de aldeas
     function popup3(feature,layer){
        if(feature.properties && feature.properties.NOMBRE){
            layer.bindPopup(`<strong>Nombre de la aldea: </strong> ${feature.properties.NOMBRE} <br/>
            <strong>Geocodico: </strong> ${feature.properties.GEOCODIGO} <br/>
            <strong>Codigo de aldea: </strong> ${feature.properties.COD_ALDEA} <br/>
            <strong>Codigo departamento: </strong> ${feature.properties.COD_DEPTO} <br/>
            <strong>Area en kM2: </strong> ${feature.properties.Km2}<br/>
            <strong>Densidad poblacional: </strong> ${feature.properties.Densidad}`);}}

    function style3(feature){
                return {
                    weight: 2,
                    opacity: 1,
                    color: 'green',
                    dashArray: '1',
                    fill:'white',
                    fillOpacity: 0.7};}

    //funcion de departamento
    function popup4(feature,layer){
        if(feature.properties && feature.properties.NOMBRE){
        layer.bindPopup(`<strong>Nombre del Departamento: </strong> ${feature.properties.NOMBRE} <br/>
        <strong>Geocodico: </strong> ${feature.properties.GEOCODIGO} <br/>
        <strong>Area KM2: </strong> ${feature.properties.Kilometers} `);}}


    function style4(feature){
            return {
                weight: 2,
                opacity: 1,
                color: 'yellow',
                dashArray: '1',
                fill:'white',
                fillOpacity: 0.6};}
       
        const Aldeas_roatan1 = L.geoJson(Aldeas_Roatan,{
                    style:style3,
                    onEachFeature: popup3});
        const mun_roatan = L.geoJson(Mun_Islas_Bahia,{
                style:style2,
                onEachFeature: popup2});

        const dept_roatan = L.geoJson(Dept_Islas_Bahia,{
                    style:style,
                    onEachFeature: popup});

        const dept_hn = L.geoJson(Dept_HN,{
                style:style4,
                onEachFeature:popup4});

        const mapasbase = {
            'Satelite':satelite1,
            'Calles':calles,
            'Topografico':OpenTopoMap,
            'Noche':noche};

        const capasbase = {
                'Departamento Isla de la Bahia':dept_roatan,
                'Municipio Isla de la Bahia':mun_roatan,
                'Aldeas Isla de la Bahia': Aldeas_roatan1,
                'Departamento Honduras':dept_hn};
                 
            //agregar capas al mapa en un control de capas
        L.control.layers(mapasbase,capasbase,{position: "topright"}).addTo(mapa);  
        L.control.scale().addTo(mapa); 
      //primer punto turistico
        var CoxenHole = L.icon({ 
            iconUrl: 'E1.png',
            //shadowUrl: 'leaf-shadow.png',
            iconSize:     [30, 30], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
        });
        
        function text(){
            return `<Strong>Nombre sitio turistico: </Strong>Coxen Hole <br>
                    <Strong>Coordenada Y: </Strong> 16.317 <br>
                    <Strong>Coordenada X: </Strong> -86.531 <br>
                    <Strong>Municipio: </Strong>Roatan<br>
                    <Strong>Fuente:</Strong> Google by maps <br>
                    <img src="Elemento1.png" alt="Roatan">`}
        
        L.marker([16.317,-86.531],{icon: CoxenHole}).addTo(mapa).bindPopup(text());

        //segundo punto turistico 
        var Westbay = L.icon({ 
            iconUrl: 'E2.png',
            //shadowUrl: 'leaf-shadow.png',
            iconSize:     [30, 30], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
        });
        
        function text2(){
            return `<Strong>Nombre sitio turistico: </Strong>West Bay <br>
            <Strong>Coordenada Y: </Strong> 16.273 <br>
            <Strong>Coordenada X: </Strong> -86.6 <br>
            <Strong>Municipio: </Strong>Roatan<br>
            <Strong>Fuente:</Strong> Google by maps <br>
            <img src="Elemento2.png" alt="Roatan">`}
        
        L.marker([16.273, -86.6],{icon:Westbay}).addTo(mapa).bindPopup(text2());

          //tercero punto turistico 
          var Westend = L.icon({ 
            iconUrl: 'E3.png',
            //shadowUrl: 'leaf-shadow.png',
            iconSize:     [30, 30], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
        });
        
        function text3(){
            return `<Strong>Nombre sitio turistico: </Strong>West End <br>
            <Strong>Coordenada Y: </Strong> 16.306 <br>
            <Strong>Coordenada X:</Strong> -86.594<br>
            <Strong>Municipio: </Strong>Roatan<br>
            <Strong>Fuente:</Strong> Google by maps <br>
            <img src="Elemento3.png" alt="Roatan">`}
        
        L.marker([16.306, -86.594],{icon:Westend}).addTo(mapa).bindPopup(text3());


        //cuarto punto turistico 
        var puntagorda = L.icon({ 
            iconUrl: 'E4.png',
            //shadowUrl: 'leaf-shadow.png',
            iconSize:     [30, 30], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
        });
        
        function text4(){
            return `<Strong>Nombre sitio turistico:</Strong>Punta Gorda <br>
            <Strong>Coordenada Y: </Strong> 16.414 <br>
            <Strong>Coordenada X:</Strong> -86.364<br>
            <Strong>Municipio: </Strong>Jose Santos Guardiola<br>
            <Strong>Fuente:</Strong> Google by maps <br>
            <img src="Elemento4.png" alt="Roatan">`}
        
        L.marker([16.414, -86.364],{icon:puntagorda}).addTo(mapa).bindPopup(text4());

          //quinto punto turistico 
          var Dreamercharters = L.icon({ 
            iconUrl: 'E5.png',
            //shadowUrl: 'leaf-shadow.png',
            iconSize:     [30, 30], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
        });
        
        function text5(){
            return `<Strong>Nombre sitio turistico:</Strong>Dreamercharters <br>
            <Strong>Coordenada Y:</Strong> 16.414 <br>
            <Strong>Coordenada X:</Strong> -86.364<br>
            <Strong>Municipio: </Strong>Roatan<br>
            <Strong>Fuente:</Strong> Google by maps <br>
            <img src="Elemento5.png" alt="Roatan">`}
        
        L.marker([16.357, -86.443],{icon:Dreamercharters}).addTo(mapa).bindPopup(text5());


            //sexto punto turistico 
            var carambola = L.icon({ 
                iconUrl: 'E6.png',
                //shadowUrl: 'leaf-shadow.png',
                iconSize:     [30, 30], // size of the icon
                shadowSize:   [50, 64], // size of the shadow
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
            });
            
            function text6(){
                return `<Strong>Nombre sitio turistico: </Strong>Jardin botanica La Carabola <br>
                <Strong>Coordenada Y: </Strong> 16.414 <br>
                <Strong>Coordenada X: </Strong> -86.364<br>
                <Strong>Municipio: </Strong>Roatan<br>
                <Strong>Fuente:</Strong> Google by maps <br>
                <img src="Elemento6.png" alt="Roatan">`}
            
            L.marker([16.324, -86.572],{icon:carambola}).addTo(mapa).bindPopup(text6());


              //septimo punto turistico 
              var santaelena = L.icon({ 
                iconUrl: 'E6.png',
                //shadowUrl: 'leaf-shadow.png',
                iconSize:     [30, 30], // size of the icon
                shadowSize:   [50, 64], // size of the shadow
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
            });
            
            function text7(){
                return `<Strong>Nombre sitio turistico: </Strong>Isla de Santa Elena<br>
                <Strong>Coordenada Y: </Strong> 16.414 <br>
                <Strong>Coordenada X: </Strong> -86.217<br>
                <Strong>Municipio: </Strong>Jose Santos Guardiola <br>
                <Strong>Fuente:</Strong> Google by maps <br>
                <img src="Elemento7.png" alt="Roatan">`}
            
            L.marker([16.414, -86.217],{icon:santaelena}).addTo(mapa).bindPopup(text7()); 


        function vistamapa1(){
            let coords = [16.317,-86.531];
            mapa.flyTo(coords,18);
        } 

        function vistamapa2(){
            let coords = [16.273, -86.6];
            mapa.flyTo(coords,18);
          }

        function vistamapa3(){
            let coords = [16.306, -86.594];
            mapa.flyTo(coords,18);
          }

          function vistamapa4(){
            let coords = [16.414, -86.364];
            mapa.flyTo(coords,18);
          }

          function vistamapa5(){
            let coords = [16.357,-86.443];
            mapa.flyTo(coords,18);
          }

          function vistamapa6(){
            let coords = [16.324,-86.572];
            mapa.flyTo(coords,18);
          }

          function vistamapa7(){
            let coords = [16.414,-86.217];
            mapa.flyTo(coords,18);
          } 

          function evento1(event){
          event.preventDefault(); 
          let texto = document.getElementById('Turismo2').value;
          if (texto == 'Coxen Hole' || texto == 'coxen hole'){
            vistamapa1();
            document.getElementById('form1').reset();}
        }


        function evento2(event){
                event.preventDefault();
                let texto = document.getElementById('Turismo3').value;
                if (texto == 'West Bay' || texto == 'west bay'){
                vistamapa2();
                document.getElementById('form2').reset();}}

        function evento3(event){
                event.preventDefault();
                let texto = document.getElementById('Turismo4').value;
                if (texto == 'West End' || texto == 'west end'){
                vistamapa3();
                document.getElementById('form3').reset();}}
        
        function evento4(event){
                event.preventDefault();
                let texto = document.getElementById('Turismo5').value;
                if (texto == 'Punta Gorda' || texto == 'punto gorda'){
                vistamapa4();
                document.getElementById('form4').reset();}}


        function evento5(event){
                event.preventDefault();
                let texto = document.getElementById('Turismo6').value;
                if (texto == 'Dreamercharters' || texto == 'dreamercharters'){
                vistamapa5();
                document.getElementById('form5').reset();}}

        function evento6(event){
                event.preventDefault();
                let texto = document.getElementById('Turismo7').value;
                if (texto == 'Jardín Botánico de Carambola' || texto == 'jardín botánico de carambola'){
                vistamapa6();
                document.getElementById('form6').reset();}}


        function evento7(event){
                    event.preventDefault();
                    let texto = document.getElementById('Turismo8').value;
                    if (texto == 'Isla de Santa Elena' || texto == 'isla de santa elena'){
                    vistamapa7();
                    document.getElementById('form6').reset();}}

        const formulario1 = document.getElementById('form1');
        const formulario2 = document.getElementById('form2');
        const formulario3 = document.getElementById('form3');
        const formulario4 = document.getElementById('form4');
        const formulario5 = document.getElementById('form5');
        const formulario6 = document.getElementById('form6');
        const formulario7 = document.getElementById('form7');

        // call the submitForm() function when submitting the form
        formulario1.addEventListener('submit', evento1); 
        formulario2.addEventListener('submit', evento2); 
        formulario3.addEventListener('submit', evento3); 
        formulario4.addEventListener('submit', evento4); 
        formulario5.addEventListener('submit', evento5); 
        formulario6.addEventListener('submit', evento6); 
        formulario7.addEventListener('submit', evento7);  
      

    

        
            
        
  
  
  
  
  
  




            
    
