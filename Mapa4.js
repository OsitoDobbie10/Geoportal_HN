var mapoptions1 = {center:[14.1, -87.2167],zoom: 14,zoomControl: true};
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
                'Departamento Honduras':dept_hn};
                 
            //agregar capas al mapa en un control de capas
        L.control.layers(mapasbase,capasbase,{position: "topright"}).addTo(mapa);  
        L.control.scale().addTo(mapa); 
      //primer punto turistico
        var CoxenHole = L.icon({ 
            iconUrl: 'marcador-de-posicion.png',
            //shadowUrl: 'leaf-shadow.png',
            iconSize:     [30, 30], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
        });
        
        function text(){
            return `<Strong>Lugar: </Strong>Casa Presidencial de la República de     Honduras <br>
                    <Strong>Latitude: </Strong> 14.08889 <br>
                    <Strong>Longitud: </Strong> -87.187784 <br>
                    <Strong>Asunto: </Strong>Visita de la encargada de negocios entre Estados Unidos y Honduras Collen A Hoey donde se tomó el tema de cooperación en materia de generación de empleo, salud, educación y lucha contra la corrupción<br>
                    <Strong>Fuente:</Strong> Google by maps <br>
                    <img src="USA2.png" alt="Roatan">`}
        
        L.marker([14.08889,-87.187784],{icon: CoxenHole}).addTo(mapa).bindPopup(text());

        //segundo punto turistico 
        var Westbay = L.icon({ 
            iconUrl: 'mapas-y-banderas.png',
            //shadowUrl: 'leaf-shadow.png',
            iconSize:     [30, 30], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
        });
        
        function text2(){
            return `<Strong>Lugar: </Strong>Estadio Chelato Uclés <br>
            <Strong>Latitude: </Strong> 14.098471 <br>
            <Strong>Longitud: </Strong> -87.203947 <br>
            <Strong>Asunto: </Strong>Toma de posecion de la presidenta Xiomara Zelaya.<br>
            <Strong>Fuente:</Strong> Google by maps <br>
            <img src="TOMA2.png" alt="Roatan">`}
        
        L.marker([14.098471,  -87.203947],{icon:Westbay}).addTo(mapa).bindPopup(text2());

          //tercero punto turistico 
          var Westend = L.icon({ 
            iconUrl: 'mapa2.png',
            //shadowUrl: 'leaf-shadow.png',
            iconSize:     [30, 30], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
        });
        
        function text3(){
            return `<Strong>Lugar: </Strong>Sede del Partido Libertad y Refundación, Libre <br>
            <Strong>Latitude: </Strong> 14.082771 <br>
            <Strong>Longitud: </Strong> -87.202349 <br>
            <Strong>Asunto: </Strong>Sede de militancia del partido libre<br>
            <Strong>Fuente:</Strong> Google by maps <br>
            <img src="LIBREData.png" alt="Roatan">`}
        
        L.marker([14.082771, -87.202349],{icon:Westend}).addTo(mapa).bindPopup(text3());


        //cuarto punto turistico 
        var puntagorda = L.icon({ 
            iconUrl: 'mapa.png',
            //shadowUrl: 'leaf-shadow.png',
            iconSize:     [30, 30], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
        });
        
        function text4(){
            return `<Strong>Lugar: </Strong>Banco Centroamericano de Integración Económica (BCIE) <br>
            <Strong>Latitude: </Strong> 14.086594 <br>
            <Strong>Longitud: </Strong> -87.194415 <br>
            <Strong>Asunto: </Strong>Visita de la presidenta Xiomara con el titular ejecutivo del banco Centroamérica de integración económica para verificar la cartera de proyectos de la institución tiene para Honduras con un monto de 1829 millones de dólares <br>
            <img src="estructura2.png" alt="Roatan">`}
        
        L.marker([14.086594, -87.194415],{icon:puntagorda}).addTo(mapa).bindPopup(text4());

          //quinto punto turistico 
          var Dreamercharters = L.icon({ 
            iconUrl: 'mapa.png',
            //shadowUrl: 'leaf-shadow.png',
            iconSize:     [30, 30], // size of the icon
            shadowSize:   [50, 64], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
        });
        
        function text5(){
            return `<Strong>Lugar: </Strong>Fuerza Aérea Hondureña <br>
            <Strong>Latitude: </Strong> 14.054383 <br>
            <Strong>Longitud: </Strong> -87.212511<br>
            <Strong>Asunto: </Strong>Visita de la presidenta con el comandante de las fuerzas armadas de Honduras en la ceremonia de ascenso de oficiales y generales de la institución castrense en las instalaciones de la fuerza naval de Cortes <br>
            <img src="Fuerza-area1.png" alt="Roatan">`}
        
        L.marker([14.054383, -87.212511],{icon:Dreamercharters}).addTo(mapa).bindPopup(text5());


            //sexto punto turistico 
            var carambola = L.icon({ 
                iconUrl: 'pin-de-mapa2.png',
                //shadowUrl: 'leaf-shadow.png',
                iconSize:     [30, 30], // size of the icon
                shadowSize:   [50, 64], // size of the shadow
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
            });
            
            function text6(){
                return `<Strong>Lugar: </Strong>Base Naval de Honduras <br>
                <Strong>Latitude: </Strong> 15.826794 <br>
                <Strong>Longitud: </Strong> -87.932634 <br>
                <Strong>Asunto: </Strong>Celebracion de las fuerzas armadas <br>
                <img src="Fuerza-area2.png" alt="Roatan">`}
            
            L.marker([15.826794, -87.932634],{icon:carambola}).addTo(mapa).bindPopup(text6());


              //septimo punto turistico 
              var santaelena = L.icon({ 
                iconUrl: 'mapa3.png',
                //shadowUrl: 'leaf-shadow.png',
                iconSize:     [30, 30], // size of the icon
                shadowSize:   [50, 64], // size of the shadow
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor:  [-5, -86] // point from which the popup should open relative to the iconAnchor
            });
            
            function text7(){
                return `<Strong>Lugar: </Strong>COHEP <br>
                <Strong>Latitude: </Strong> 14.0917 <br>
                <Strong>Longitud: </Strong>-87.19133 <br>
                <Strong>Asunto: </Strong>Reunión de la presidenta Xiomara para el dialogo de la propuesta de desarrollo social y económico del país con el titular del consejo hondureño de empresa privada Matero Yibrin <br>
                <img src="COHEP-XIOMI-reunion.png" alt="Roatan">`}
            
            L.marker([14.0917, -87.19133],{icon:santaelena}).addTo(mapa).bindPopup(text7()); 


        function vistamapa1(){
            let coords = [14.08889,-87.187784];
            mapa.flyTo(coords,16);
        } 

        function vistamapa2(){
            let coords = [14.098471, -87.203947];
            mapa.flyTo(coords,16);
          }

        function vistamapa3(){
            let coords = [14.082771, -87.202349];
            mapa.flyTo(coords,16);
          }

          function vistamapa4(){
            let coords = [14.086594, -87.194415];
            mapa.flyTo(coords,16);
          }

          function vistamapa5(){
            let coords = [14.054383,-87.212511];
            mapa.flyTo(coords,16);
          }

          function vistamapa6(){
            let coords = [15.826794,-87.932634];
            mapa.flyTo(coords,16);
          }

          function vistamapa7(){
            let coords = [14.0917,-87.19133];
            mapa.flyTo(coords,16);
          } 

          function evento1(event){
          event.preventDefault(); 
          let texto = document.getElementById('Turismo1').value;
          if (texto == 'Casa Presidencial.' || texto == 'casa presidencial'){
            vistamapa1();
            document.getElementById('form').reset();}
        }


        function evento2(event){
                event.preventDefault();
                let texto = document.getElementById('Turismo2').value;
                if (texto == 'Toma de posecion' || texto == 'toma de posecion'){
                vistamapa2();
                document.getElementById('form1').reset();}}

        function evento3(event){
                event.preventDefault();
                let texto = document.getElementById('Turismo3').value;
                if (texto == 'Sede partido libre' || texto == 'sede partido libre'){
                vistamapa3();
                document.getElementById('form2').reset();}}
        
        function evento4(event){
                event.preventDefault();
                let texto = document.getElementById('Turismo4').value;
                if (texto == 'BCIIE' || texto == 'banco interoamericano de desarrollo'){
                vistamapa4();
                document.getElementById('form3').reset();}}


        function evento5(event){
                event.preventDefault();
                let texto = document.getElementById('Turismo5').value;
                if (texto == 'Fuerza Area Hondureña' || texto == 'fuerza area hondureña'){
                vistamapa5();
                document.getElementById('form4').reset();}}

        function evento6(event){
                event.preventDefault();
                let texto = document.getElementById('Turismo6').value;
                if (texto == 'Base Naval de Honduras' || texto == 'base naval de Honduras'){
                vistamapa6();
                document.getElementById('form5').reset();}}


        function evento7(event){
                    event.preventDefault();
                    let texto = document.getElementById('Turismo7').value;
                    if (texto == 'COHEP' || texto == 'Coperacion de empresa privada'){
                    vistamapa7();
                    document.getElementById('form6').reset();}}

        const formulario = document.getElementById('form');
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
      

    

        
            
        
  
  
  
  
  
  




            
    
