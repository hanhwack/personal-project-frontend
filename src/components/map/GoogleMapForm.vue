<template>
  <div class="full-screen">
    <div id="google-map"></div>
    <form @submit.prevent="onSubmit" class="map-form">
      <div class="input-button-container">
        <input
          id="location-input"
          type="text"
          v-model="location"
          class="google-search-input"
          placeholder="장소를 검색하세요"
        />
        <div id="search-button-container"></div>
      </div>
      <div v-if="selectedLocation" class="selected-location">
        <b>선택한 장소:</b> {{ selectedLocation }}
      </div>
    </form>
    <button @click="onSubmit" class="submit-button">등록</button>
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

      const searchButtonDiv = document.getElementById('search-button-container');
      const searchBox = new google.maps.places.SearchBox(document.getElementById('location-input'));

      this.map.addListener('bounds_changed', () => {
        searchBox.setBounds(this.map.getBounds());
      });

      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) {
          return;
        }

        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            return;
          }
          bounds.extend(place.geometry.location);
        });

        this.map.fitBounds(bounds);
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
  padding: 10px;
  width: 30%;
  max-width: 400px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.input-button-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.google-search-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 5px;
}

.search-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #0056b3;
}

.fa-search {
  color: #fff;
}

.submit-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #28a745;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #218838;
}

.selected-location {
  margin-top: 10px;
  font-weight: bold;
}
</style>
