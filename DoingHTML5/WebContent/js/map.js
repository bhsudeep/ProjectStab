
    // map variable available globally
    var map = null;
    
      function initialize() {
    	//  Co ordinates of Nantes, France 
    	var varlat = 47.2181;
    	var varlong = -1.5528;    

    	var myLatlng = new google.maps.LatLng(varlat,varlong);

    	var mapOptions = {
    	  zoom: 5,
    	  maxZoom : 5,
    	  center: myLatlng
    	};
    	
    	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    	
    	//Contents for the marker
    	var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Nantes</h1>'+
      '<div id="bodyContent">'+
      '<p>Nantes is a city in West France, located on the Loire River, 50Êkm (31Êmi) from the Atlantic coast. The city is the 6th largest in France, while its metropolitan area ranks 6th with nearly 900,000 inhabitants.'+
      '</p>'+
      '<p>For more info: , <a href="http://en.wikipedia.org/wiki/Nantes">Nantes</a></p>'+
      '</div>'+
      '</div>';
    	
      var infowindow = new google.maps.InfoWindow({
          content: contentString
      });    	
          
        // To add the marker to the map, use the 'map' property
        var marker = new google.maps.Marker({
            position: myLatlng,
            map : map,
            title:"This is Nantes, 6th largest city in France",
            animation: google.maps.Animation.DROP });
        
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
          });
        

      }
      
      function getPlaces(){   	
    	  
    	//  alert("Here");
    	  
    	// Co ordinates for Paris, France
      	var varParisLat = 48.8567;
      	var varParisLong = 2.3508;
      	
      	// Co ordinates for Amsterdam, Netherlands
      	var varAmsterdamLat = 52.3731 ;
      	var varAmsterdamLng = 4.8922;
      	
      	var varBarcelonaLat = 41.3833;
      	var varBarcelonaLng =  2.1833;
      	
      	// Co ordinates for Madrid, Spain      	
      	var varMadridLat = 40.4000;
      	var varMadridLng = -3.6833;
      	
      	// Co ordinates for London, GB
      	var varLondonLat = 51.5072;
      	var varLondonLng = -0.1275;
      	
      	// Co ordinates for Rome, Italy
      	var varRomeLat = 41.9000;
      	var varRomeLng = 12.5000;
      	
      	// Co ordinates for Zurich, Switzerland
      	var varZurichLat = 47.3667;
      	var varZurichLng = 8.5500;
      	
      	var zurichLatLng = new google.maps.LatLng(varZurichLat,varZurichLng);
      	var romeLatLng = new google.maps.LatLng(varRomeLat, varRomeLng);
      	var londonLatLng = new google.maps.LatLng(varLondonLat, varLondonLng);
      	var madridLatLng = new google.maps.LatLng(varMadridLat, varMadridLng);
      	var parisLatLong = new google.maps.LatLng(varParisLat,varParisLong);
    	var AmsterdamLatLng = new google.maps.LatLng(varAmsterdamLat,varAmsterdamLng);
    	var BarcelonaLatLng = new google.maps.LatLng(varBarcelonaLat,varBarcelonaLng);
    	
    	
//Contents for the Paris marker
    	var contentStringParis = '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">Paris</h1><div id="bodyContent">'+
      	'<p>Nantes is a city in West France, located on the Loire River, 50Êkm (31Êmi) from the Atlantic coast. The city is the 6th largest in France, while its'+ 
      	'metropolitan area ranks 6th with nearly 900,000 inhabitants.</p>'+
      	'<p>For more info: , <a href="http://en.wikipedia.org/wiki/Nantes">Nantes</a></p></div></div>';    	
      	var infowindowParis = new google.maps.InfoWindow({ content: contentStringParis});   
      	
     	// Adding another marker for Paris
        var markerParis = new google.maps.Marker({ position: parisLatLong, map : map, title:"This is Paris, the capital city of France",
            animation: google.maps.Animation.DROP  });
          
        google.maps.event.addListener(markerParis, 'click', function() { infowindowParis.open(map,markerParis);});
    	
        
 //Contents for the marker
    	var contentStringAmseterdam = '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">Amsterdam</h1><div id="bodyContent">'+
      	'<p>Nantes is a city in West France, located on the Loire River, 50Êkm (31Êmi) from the Atlantic coast. The city is the 6th largest in France, while its'+ 
      	'metropolitan area ranks 6th with nearly 900,000 inhabitants.</p>'+
      	'<p>For more info: , <a href="http://en.wikipedia.org/wiki/Nantes">Nantes</a></p></div></div>';    	
      	var infowindowAmsterdam = new google.maps.InfoWindow({ content: contentStringAmseterdam}); 
      	
     	// Adding another marker for Amsterdam
        var markerAmsterdam= new google.maps.Marker({ position: AmsterdamLatLng, map : map, title:"Amsterdam is a city in Netherlands",
            animation: google.maps.Animation.DROP  });
          
        google.maps.event.addListener(markerAmsterdam, 'click', function() { infowindowAmsterdam.open(map,markerAmsterdam);});
        
//Contents for the Barcelona marker
    	var contentStringBarcelona = '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">Barcelona</h1><div id="bodyContent">'+
      	'<p>Nantes is a city in West France, located on the Loire River, 50Êkm (31Êmi) from the Atlantic coast. The city is the 6th largest in France, while its'+ 
      	'metropolitan area ranks 6th with nearly 900,000 inhabitants.</p>'+
      	'<p>For more info: , <a href="http://en.wikipedia.org/wiki/Nantes">Nantes</a></p></div></div>';    	
      	var infowindowBarcelona  = new google.maps.InfoWindow({ content: contentStringBarcelona}); 
      	
    	// Adding another marker for Barcelona
        var markerBarcelona = new google.maps.Marker({ position: BarcelonaLatLng, map : map, title:"Barcelona is a city in Spain",
            animation: google.maps.Animation.DROP  });
          
        google.maps.event.addListener(markerBarcelona, 'click', function() { infowindowBarcelona.open(map,markerBarcelona);});
        
//Contents for the Madrid marker
    	var contentStringMadrid = '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">Madrid</h1><div id="bodyContent">'+
      	'<p>Nantes is a city in West France, located on the Loire River, 50Êkm (31Êmi) from the Atlantic coast. The city is the 6th largest in France, while its'+ 
      	'metropolitan area ranks 6th with nearly 900,000 inhabitants.</p>'+
      	'<p>For more info: , <a href="http://en.wikipedia.org/wiki/Nantes">Nantes</a></p></div></div>';    	
      	var infowindowMadrid = new google.maps.InfoWindow({ content: contentStringMadrid}); 
      	
     	// Adding another marker for Madrid
        var markerMadrid = new google.maps.Marker({ position: madridLatLng, map : map, title:"Madrid is a city in Spain",
            animation: google.maps.Animation.DROP  });
          
        google.maps.event.addListener(markerMadrid, 'click', function() { infowindowMadrid.open(map,markerMadrid);});
        
//Contents for the London marker
    	var contentStringLondon = '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">London</h1><div id="bodyContent">'+
      	'<p>Nantes is a city in West France, located on the Loire River, 50Êkm (31Êmi) from the Atlantic coast. The city is the 6th largest in France, while its'+ 
      	'metropolitan area ranks 6th with nearly 900,000 inhabitants.</p>'+
      	'<p>For more info: , <a href="http://en.wikipedia.org/wiki/Nantes">Nantes</a></p></div></div>';    	
      	var infowindowLondon = new google.maps.InfoWindow({ content: contentStringLondon});   
      	
     	// Adding another marker for London
        var markerLondon = new google.maps.Marker({ position: londonLatLng, map : map, title:"London is th capital city of Great Britain",
            animation: google.maps.Animation.DROP  });
          
        google.maps.event.addListener(markerLondon, 'click', function() { infowindowLondon.open(map,markerLondon);});
        
//Contents for the Rome marker
    	var contentStringRome = '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">Rome</h1><div id="bodyContent">'+
      	'<p>Nantes is a city in West France, located on the Loire River, 50Êkm (31Êmi) from the Atlantic coast. The city is the 6th largest in France, while its'+ 
      	'metropolitan area ranks 6th with nearly 900,000 inhabitants.</p>'+
      	'<p>For more info: , <a href="http://en.wikipedia.org/wiki/Nantes">Nantes</a></p></div></div>';    	
      	var infowindowRome = new google.maps.InfoWindow({ content: contentStringRome});     
      	
     	// Adding another marker for Rome
        var markerRome = new google.maps.Marker({ position: romeLatLng, map : map, title:"Rome is the capital city of Italy",
            animation: google.maps.Animation.DROP  });
          
        google.maps.event.addListener(markerRome, 'click', function() { infowindowRome.open(map,markerRome);});
    	  
//Contents for the Zurich marker
    	var contentStringZurich = '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">Zurich</h1><div id="bodyContent">'+
      	'<p>Nantes is a city in West France, located on the Loire River, 50Êkm (31Êmi) from the Atlantic coast. The city is the 6th largest in France, while its'+ 
      	'metropolitan area ranks 6th with nearly 900,000 inhabitants.</p>'+
      	'<p>For more info: , <a href="http://en.wikipedia.org/wiki/Nantes">Nantes</a></p></div></div>';    	
      	var infowindowZurich = new google.maps.InfoWindow({ content: contentStringZurich});     
      	
     // Adding another marker for Zurich
        var markerZurich = new google.maps.Marker({ position: zurichLatLng, map : map, title:"Zurich is the capital city of Switzerland",
            animation: google.maps.Animation.DROP  });
          
        google.maps.event.addListener(markerZurich, 'click', function() { infowindowZurich.open(map,markerZurich);});        
        
     }
      
   