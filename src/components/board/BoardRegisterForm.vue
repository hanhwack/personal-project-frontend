<template>
  <div>
    <form @submit.prevent="onSubmit" class="board-form">
      <div class="form-row">
        <label for="title-input" class="label">제목</label>
        <input id="title-input" type="text" v-model="title" class="input-field" />
      </div>
      <div class="form-row">
        <label for="content-input" class="label">본문</label>
        <textarea id="content-input" rows="5" v-model="content" class="input-field"></textarea>
      </div>
      <div class="form-row">
        <button @click="openMapPopup" class="open-popup-button">지도 추가</button>
      </div>
      <div class="form-row">
        <h4>사용자: {{ userId }}</h4>
      </div>
      <div class="form-actions">
        <button type="submit" class="submit-button">등록</button>
        <router-link :to="{ name: 'BoardListPage' }" class="cancel-link">취소</router-link>
      </div>
    </form>

    <div v-if="selectedLocation" class="selected-location">
      <h3>선택한 장소</h3>
      <div id="selected-map"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      selectedLocation: '',
      map: null,
      marker: null,
      userId: '사용자 아이디', // 사용자 아이디 변수 (변경 필요)
    };
  },
  methods: {
    onSubmit() {
      // 폼 제출 로직
      const formData = {
        title: this.title,
        content: this.content,
        location: this.selectedLocation,
      };
      console.log(formData); // 등록 폼 데이터 확인

      // 등록 로직 추가
    },
    openMapPopup() {
      const popupUrl = '/google-map-page';
      const popupWindow = window.open(popupUrl, '_blank', 'width=1000,height=750');
    },
    initializeMap() {
      const mapContainer = document.getElementById('selected-map');
      const mapOptions = {
        center: { lat: 37.5665, lng: 126.9780 },
        zoom: 13,
      };
      this.map = new google.maps.Map(mapContainer, mapOptions);
      this.marker = new google.maps.Marker({
        position: mapOptions.center,
        map: this.map,
        draggable: true,
      });
    },
    updateMapLocation(location) {
      if (location) {
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: location }, (results, status) => {
          if (status === 'OK' && results[0] && results[0].geometry) {
            const { lat, lng } = results[0].geometry.location;
            const newLocation = new google.maps.LatLng(lat(), lng());
            this.map.setCenter(newLocation);
            this.marker.setPosition(newLocation);
            this.selectedLocation = results[0].formatted_address;
          }
        });
      } else {
        this.selectedLocation = '';
      }
    },
  },
  mounted() {
    this.initializeMap();
  },
};
</script>

<style scoped>
.board-form {
  margin: 10px;
}

.form-row {
  margin-bottom: 20px;
}

.label {
  text-align: right;
  padding-right: 10px;
  font-weight: bold;
}

.input-field {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.open-popup-button {
  background-color: #ffc107;
  color: #000;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.open-popup-button:hover {
  background-color: #ffa000;
}

.submit-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-link {
  margin-left: 10px;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

.selected-location {
  margin-top: 20px;
}

#selected-map {
  width: 100%;
  height: 400px;
}
</style>