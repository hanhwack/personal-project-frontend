<template>
    <div class="full-screen">
      <div id="google-map"></div>
      <form @submit.prevent="onSubmit" class="map-form">
        <label for="location-input">장소</label>
        <input
          id="location-input"
          type="text"
          v-model="location"
          class="input-field"
        />
        <button @click="searchLocation" class="search-button">검색</button>
        <div v-if="selectedLocation">
          <div>
            <b>선택한 장소:</b> {{ selectedLocation }}
          </div>
        </div>
        <button type="submit" class="submit-button">등록</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        location: '',
        selectedLocation: '',
        map: null,
        marker: null
      };
    },
    methods: {
      onSubmit() {
        const formData = {
          location: this.selectedLocation,
        };
        this.$emit('submit', formData);
      },
      searchLocation() {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: this.location }, (results, status) => {
          if (status === 'OK' && results[0] && results[0].geometry) {
            const { lat, lng } = results[0].geometry.location;
            const newLocation = new google.maps.LatLng(lat(), lng());
            this.map.setCenter(newLocation);
            this.marker.setPosition(newLocation);
            this.selectedLocation = results[0].formatted_address;
          }
        });
      },
      initializeGoogleMap() {
        const mapContainer = document.getElementById('google-map');
        const mapOptions = {
          center: { lat: 37.5665, lng: 126.9780 },
          zoom: 13
        };
        this.map = new google.maps.Map(mapContainer, mapOptions);
        this.marker = new google.maps.Marker({
          position: mapOptions.center,
          map: this.map,
          draggable: true
        });
      }
    },
    mounted() {
      const googleMapScript = document.createElement('script');
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.VUE_APP_GOOGLE_API_KEY}&libraries=places`;
      googleMapScript.defer = true;
      googleMapScript.async = true;
      googleMapScript.onload = () => {
        this.initializeGoogleMap();
      };
      document.head.appendChild(googleMapScript);
    }
  };
  </script>
  
  <style scoped>
  .full-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
  }
  
  #google-map {
    width: 100%;
    height: 100%;
  }
  
  .map-form {
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: #fff;
    padding: 10px;
  }
  
  .input-field {
    width: 200px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 5px;
  }
  
  .search-button,
  .submit-button {
    background-color: #007bff;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 5px;
  }
  
  .submit-button {
    background-color: #28a745;
  }
  </style>
  