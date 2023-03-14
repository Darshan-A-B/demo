const form = document.querySelector('form');
const hospitalListings = document.querySelector('#hospital-listings');

// dummy data for default hospital listings
const defaulthospitals =[
  {
   "hospitalimage": "images/hospitalimages/saarthak.jpg",
   "hospitalmap": "https://goo.gl/maps/SUobJbDiu6CFr2Qh8",
   "hospitalName": "Saarthak Eye Clinic and Shraddha Opticals",
   "Speciality": "EYE-CARE",
   "DoctorName": "Dr.Anupama Kumar",
   "phone": "9035098328\n0821-2362458",
   "location": "#17,Vijayalakshmi colony,Opp.Central Bank,Kadugudi,Bangalore-67",
   "latitude": 12.9908463,
   "longitude": 77.7607561,
   "City": "Bangalore"
  },
  {
   "hospitalimage": "images/hospitalimages/divyadrushti.jpg",
   "hospitalmap": "https://goo.gl/maps/ZPuSGA4czoMZiLSZ9",
   "hospitalName": "Divyadrishti Eye Hospital",
   "Speciality": "EYE-CARE",
   "DoctorName": "Dr. Prakash Kumar Jain",
   "phone": "9901759648\n8147633248",
   "location": "#996/22,Near SBI,1st Floor,Service road, Athiguppe bus stop,R.P.C. layout,Vijaynagar,Bangalore-560104",
   "latitude": 12.9579269,
   "longitude": 77.5343577,
   "City": "Bangalore"
  },
  {
   "hospitalimage": "images/hospitalimages/vinayaka.jpg",
   "hospitalmap": "https://goo.gl/maps/UMHFzkawP9Mzk3pP7",
   "hospitalName": "VINAYAKA NETHRALAYA\n(EYE HOSPITAL AND LASER CENTRE)",
   "Speciality": "EYE-CARE",
   "DoctorName": "Dr.V.Krishna Kumar",
   "phone": "080-26680488\n8197700682",
   "location": "# 66A, 7th Main, N.S.Palya, IInd Stage, B.T.M.Layout, Bangalore -76",
   "latitude": 12.9059654,
   "longitude": 77.6058943,
   "City": "Bangalore"
  },
  {
   "hospitalimage": "images/hospitalimages/sunayana.jpg",
   "hospitalmap": "https://goo.gl/maps/iYgpyEkPTXEMDphWA",
   "hospitalName": "Sunayana Eye Hospital",
   "Speciality": "EYE-CARE",
   "DoctorName": "Dr. K.Y. Narasimha Murthy",
   "phone": 9620220224,
   "location": "#1156,26th Main,4th Block,Jayanagar,Bangaluru-560041",
   "latitude": 12.9255839,
   "longitude": 77.5936788,
   "City": "Bangalore"
  },
  {
   "hospitalimage": "images/hospitalimages/aastha.jpg",
   "hospitalmap": "https://goo.gl/maps/7exxnMQ1VHYNUBv69",
   "hospitalName": "Astha Super Speciality Eye Hospital",
   "Speciality": "EYE-CARE",
   "DoctorName": "Dr Shilpa N",
   "phone": "9741259494\n08026426558",
   "location": "#590, 6th bolck , 2nd phase , BSK 3rd stage, Hosakerehalli cross, bengaluru-560085",
   "latitude": 12.9332383,
   "longitude": 77.5430963,
   "City": "Bangalore"
  },
  {
   "hospitalimage": "images/hospitalimages/sudharshan.jpg",
   "hospitalmap": "https://goo.gl/maps/uS9Nzw9q2btpxDca6",
   "hospitalName": "Sudarshan Nethralaya",
   "Speciality": "EYE-CARE",
   "DoctorName": "Dr Anand AR",
   "phone": "8892004466\n+91 8032719976\n+91 8041724935",
   "location": "No.452, R S Plaza, 1st Floor, Between 6th and 7th cross, sampige road ,malleshwaram, Banglore -560003",
   "latitude": 13.0000622,
   "longitude": 77.5713339,
   "City": "Bangalore"
  },
  {
   "hospitalimage": "images/hospitalimages/retina.jpg",
   "hospitalmap": "https://goo.gl/maps/vibLB5j1QCXvkRxdA",
   "hospitalName": "Retina Clinic",
   "Speciality": "EYE-CARE",
   "DoctorName": "Dr. Nithin Shetty\nDr. Subhasini",
   "phone": "9448906326,\n080- 41261176/41261778",
   "location": "306, 6th Main, HAL 2nd stage , Indiranagar , Bangalore-38",
   "latitude": 12.9725594,
   "longitude": 77.6510345,
   "City": "Bangalore"
  },
  {
   "hospitalimage": "images/hospitalimages/mcmodi.jpg",
   "hospitalmap": "https://goo.gl/maps/snet7wM2w6wuUh5r9",
   "hospitalName": "Dr. M.C. Modi Super Speciality Eye Hospital",
   "Speciality": "EYE-CARE",
   "DoctorName": "Dr. M.C. Modi",
   "phone": "080-40869555\n080-23492233",
   "location": "Dr. M.C. Modi Road, Mahalakshmipuram, Bangalore-560 086",
   "latitude": 12.9974882,
   "longitude": 77.5458835,
   "City": "Bangalore"
  },
  {
   "hospitalimage": "images/hospitalimages/belaku.jpg",
   "hospitalmap": "https://goo.gl/maps/bB9X51eoF6nxAPwU9",
   "hospitalName": "Belaku Eye Hospital",
   "Speciality": "EYE-CARE",
   "DoctorName": "Dr. Suresh",
   "phone": 8028486474,
   "location": "#769, 1 Cross, Ring Road, Kengeri Upanagar, Bangalore – 560060",
   "latitude": 12.9386704,
   "longitude": 77.4791599,
   "City": "Bangalore"
  },
  {
   "hospitalimage": "images/hospitalimages/gopala.jpg",
   "hospitalmap": "https://goo.gl/maps/Cj2Qt3GPq3FFyHoh6",
   "hospitalName": "Gopala Nethralaya",
   "Speciality": "EYE-CARE",
   "DoctorName": "Dr. Naveen Gopal",
   "phone": 9448022160,
   "location": "No.227, 1st Main Road, 3rd Stage, 4th Block, Sharadha Colony, Near 88 Bus Stop, Bangalore - 560079\n    ",
   "latitude": 12.9883515,
   "longitude": 77.534321,
   "City": "Bangalore"
  },
  {
   "hospitalimage": "images/hospitalimages/netraspandana.jpg",
   "hospitalmap": "https://goo.gl/maps/XjBreJzKmxji5Yx96",
   "hospitalName": "Netra Spandana Eye Hospial",
   "Speciality": "EYE-CARE",
   "DoctorName": "Dr. Raju",
   "location": "No-160, Rashi Complex, 2nd Stge, 2nd Blk, Nagarbhavi 2nd Stage, Bangalore – 560072",
   "latitude": 12.9800328,
   "longitude": 77.5101368,
   "City": "Bangalore"
  },
  {
   "hospitalimage": "images/hospitalimages/netrakashi.jpg",
   "hospitalmap": "https://goo.gl/maps/kbS2xrGqmM3YYwz37",
   "hospitalName": "NetraKashi Eye Hospital",
   "Speciality": "EYE-CARE",
   "DoctorName": "Dr. Suresh",
   "location": "padmanabhanagar Bangalore",
   "latitude": 12.9155691,
   "longitude": 77.5567733,
   "City": "Bangalore"
  },
  {
   "hospitalimage": "images/hospitalimages/rangalakshmi.jpg",
   "hospitalmap": "https://goo.gl/maps/Sz9dKSPmbfPqyMFP7",
   "hospitalName": "Rangalakshmi Netralaya",
   "Speciality": "EYE-CARE",
   "DoctorName": "Dr Sandhya",
   "location": "#2054, 13th ‘B’ Main, 3rd Phase, Mother Dairy Cross, Yelahanka New Town, Landmark: Behind Hotel Shanthi Sagar., Bangalore",
   "latitude": 13.0989487,
   "longitude": 77.5766081,
   "City": "Bangalore"
  },
  {
    "hospitalimage": "images/hospitalimages/siddhi.jpg",
    "hospitalmap": "https://goo.gl/maps/AnPEpzvQR1pZEFiLA",
    "hospitalName": "Siddhi Eyecare Center",
    "Speciality": "EYE-CARE",
    "DoctorName": "Dr.Ashwin Shetty",
    "phone": 9972454291,
    "location": "#229,7th cross,1st stage,indiranagar,Bangaluru-560038",
    "latitude": 12.9729885,
    "longitude": 77.64485,
    "City": "Bangalore"
   },
   {
    "hospitalimage": "images/hospitalimages/gef.jpg",
    "hospitalmap": "https://goo.gl/maps/2QJWPuM2xe4Sfb8J7",
    "hospitalName": "G E F Eye Hospital",
    "Speciality": "EYE-CARE",
    "DoctorName": "Dr.Sundar Ram Shetty",
    "phone": "9741112464\n9844789046",
    "location": "AIR Extension,Old Madras Road,NH-4,Hoskote-562114",
    "latitude": 13.0554299,
    "longitude": 77.7654452,
    "City": "Bangalore"
   },
  {
   "hospitalimage": "images/hospitalimages/diya.jpg",
   "hospitalmap": "https://goo.gl/maps/wjY6izSAzCx4nNyTA",
   "hospitalName": "Diya Speciality Eye Care",
   "Speciality": "EYE-CARE",
   "DoctorName": "Dr Nagesh",
   "phone": 7760587955,
   "location": "Subramanyapura main road Uttarhalli,Bangalore- 560061",
   "latitude": 12.9031066,
   "longitude": 77.5445444,
   "City": "Bangalore"
  },
  {
   "hospitalimage": "images/hospitalimages/drishti.jpg",
   "hospitalmap": "https://goo.gl/maps/jMN7HCaPssqeKzrQA",
   "hospitalName": "Drishti Nethralaya",
   "Speciality": "EYE-CARE",
   "DoctorName": "Dr. Ajay",
   "location": "Banashankari 3rd Stage, Bangalore\n#6, 50 Ft Road, Avalahalli Extension, Girinagar. Landmark: Near Bus Stop., Bangalore",
   "latitude": 12.9431846,
   "longitude": 77.5454525,
   "City": "Bangalore"
  },
  {
   "hospitalimage": "images/hospitalimages/aadhya.jpg",
   "hospitalmap": "https://goo.gl/maps/Cuug2QW2oDLcPAuQ8",
   "hospitalName": "Aadya Eye Hopital",
   "Speciality": "EYE-CARE",
   "DoctorName": "Dr Pawan",
   "phone": 9880126161,
   "location": "No 433,1st Block, 8th Phase, J P Nagar, Bangalore",
   "latitude": 12.8759894,
   "longitude": 77.572381,
   "City": "Bangalore"
  },
  {
   "hospitalimage": "images/hospitalimages/sankalp.jpg",
   "hospitalmap": "https://goo.gl/maps/QWz6YcV3cSobmezXA",
   "hospitalName": "Sankalp Nethralaya and PolyClinic",
   "Speciality": "EYE-CARE",
   "location": "85/1, 19th Main Rd, Vanganahalli, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102",
   "latitude": 12.9090173,
   "longitude": 77.6444754,
   "City": "Bangalore"
  }
 ];

// display default hospital listings on page load
defaulthospitals.forEach(function(hospital) {
  const hospitalListing = document.createElement('div');
  hospitalListing.classList.add('hospital-listing');
  
  // Add the hospital hospitalimage to the div
  if (hospital.hospitalimage) {
  const img = document.createElement("img");
  img.src = hospital.hospitalimage;
  img.alt = `${hospital.name} hospitalimage`;
  img.classList.add("hospital-hospitalimage");
  hospitalListing.appendChild(img);
  }
  const hospitalName = document.createElement('h2');
  hospitalName.textContent = hospital.hospitalName;
  hospitalListing.appendChild(hospitalName);
  
  const Speciality = document.createElement('p');
  Speciality.textContent = "Speciality: " + hospital.Speciality;
  hospitalListing.appendChild(Speciality);
  
  if (hospital.DoctorName) {
    const DoctorName = document.createElement('p');
    DoctorName.textContent = "Dr. " + hospital.DoctorName;
    hospitalListing.appendChild(DoctorName);
  }
  
  const location = document.createElement('p');
  location.classList.add('location');
  location.textContent ="Address: " + hospital.location;
  hospitalListing.appendChild(location);
  
  if (hospital.description) {
  const description = document.createElement('p');
  description.textContent = hospital.description;
  hospitalListing.appendChild(description);
  }

 // Add the hospital phone button to the div
const phone = document.createElement("button");
phone.innerText = "Call";
phone.type = "button";
phone.onclick = () => window.location.href = `tel:${hospital.phone}`;
phone.classList.add("hospital-phone");
hospitalListing.appendChild(phone);

// Add the google hospitalmap link to the div
const hospitalmapButton = document.createElement("button");
hospitalmapButton.innerText = " View on map";
hospitalmapButton.onclick = function() {
  window.open(hospital.hospitalmap);
};
hospitalmapButton.classList.add("hospital-hospitalmap-button");
hospitalListing.appendChild(hospitalmapButton);

  
  hospitalListings.appendChild(hospitalListing);
});

if (navigator.permissions) {
    navigator.permissions.query({name:'geolocation'}).then(function(result) {
      if (result.state === 'granted') {
        // Location service is enabled
      } else if (result.state === 'prompt') {
        // Location service permission is not yet granted, prompt the user to enable it
        if (confirm("Please enable location services for this website.")) {
          window.location.href = "settings://location"; // Redirect to location settings in mobile
          
        }
      } else if (result.state === 'denied') {
        // Location service permission is denied, prompt the user to enable it
        if (confirm("Please enable location services for this website.")) {
          window.location.href = "settings://location"; // Redirect to location settings in mobile
          
        }
      }
    });
  } else {
    // Permissions API is not supported by this browser
  }
  

// fetch user location on page load
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const locationInput = document.querySelector('#location');
    
    // reverse geocode the coordinates to get the user's city and state
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
      .then(response => response.json())
      .then(data => {
        const city = data.address.city || data.address.town;
        const state = data.address.state;
        locationInput.value = `${city}, ${state}`;
        
        // update distance for each hospital listing
        defaulthospitals.forEach(function(hospital) {
          const distance = getDistance(latitude, longitude, hospital.latitude, hospital.longitude);
          hospital.distance = distance;
        });
        
        // sort hospitals by distance from user's location
        defaulthospitals.sort(function(a, b) {
          return a.distance - b.distance;
        });
        
        // display hospital listings in order of near to far
        hospitalListings.innerHTML = '';
        defaulthospitals.forEach(function(hospital) {
          const hospitalListing = document.createElement('div');
          hospitalListing.classList.add('hospital-listing');
          // Add the hospital hospitalimage to the div
  const img = document.createElement("img");
  img.src = hospital.hospitalimage;
  img.alt = `${hospital.name} hospitalimage`;
  img.classList.add("hospital-hospitalimage");
  hospitalListing.appendChild(img);

  const hospitalName = document.createElement('h2');
  hospitalName.textContent = `${hospital.hospitalName}(${'\xa0'}${hospital.distance.toFixed(2)} km away)`;
  hospitalListing.appendChild(hospitalName);
  
    const Speciality = document.createElement('p');
  Speciality.textContent = "Speciality: " + hospital.Speciality;
  hospitalListing.appendChild(Speciality);
  
  if (hospital.DoctorName) {
    const DoctorName = document.createElement('p');
    DoctorName.textContent = "Dr. " + hospital.DoctorName;
    hospitalListing.appendChild(DoctorName);
  }
  
  const location = document.createElement('p');
  location.classList.add('location');
  location.textContent ="Address: " + hospital.location;
  hospitalListing.appendChild(location);
  
  if (hospital.description){
  const description = document.createElement('p');
  description.textContent = hospital.description;
  hospitalListing.appendChild(description);
  }
  
 // Add the hospital phone button to the div
const phone = document.createElement("button");
phone.innerText = "Call";
phone.type = "button";
phone.onclick = () => window.location.href = `tel:${hospital.phone}`;
phone.classList.add("hospital-phone");
hospitalListing.appendChild(phone);

// Add the google hospitalmap link to the div
const hospitalmapButton = document.createElement("button");
hospitalmapButton.innerText = " View on map";
hospitalmapButton.onclick = function() {
  window.open(hospital.hospitalmap);
};
hospitalmapButton.classList.add("hospital-hospitalmap-button");
hospitalListing.appendChild(hospitalmapButton);
          
          hospitalListings.appendChild(hospitalListing);
        });
      })
      .catch(error => console.log(error));
});
}

// function to calculate distance between two coordinates using Haversine formula
function getDistance(lat1, lon1, lat2, lon2) {
const R = 6371; // radius of the earth in kilometers
const dLat = toRadians(lat2 - lat1);
const dLon = toRadians(lon2 - lon1);
const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
const distance = R * c;
return distance;
}

// helper function to convert degrees to radians
function toRadians(degrees) {
return degrees * (Math.PI/180);
}
    
