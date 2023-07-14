<template>
  <div>
    <form @submit.prevent="onSubmit" class="board-form">
      <table class="form-table">
        <tr>
          <td class="label">제목</td>
          <td>
            <input type="text" v-model="title" class="input-field" />
          </td>
        </tr>
        <tr>
          <td class="label">작성자</td>
          <td>
            <input type="text" v-model="writer" class="input-field" />
          </td>
        </tr>
        <tr>
          <td class="label">본문</td>
          <td>
            <textarea cols="80" rows="10" v-model="content" class="input-field"></textarea>
          </td>
        </tr>
        <tr>
          <td class="label">장소</td>
          <td>
            <input type="text" v-model="location" class="input-field" />
            <button @click="openMap" class="open-map-button">지도 열기</button>
            <div v-if="selectedLocation">
              <div>
                <b>선택한 장소:</b> {{ selectedLocation }}
              </div>
            </div>
          </td>
        </tr>
      </table>

      <div class="form-actions">
        <button type="submit" class="submit-button">등록</button>
        <router-link :to="{ name: 'BoardListPage' }" class="cancel-link">
          취소
        </router-link>
      </div>
    </form>

    <div class="map-modal" v-show="isMapModalVisible">
      <div class="map-modal-header">
        <h3>구글 맵</h3>
      </div>
      <div class="map-modal-content">
        <div id="google-map"></div>
        <button @click="confirmLocation" class="confirm-location-button">확인</button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      title: '제목을 입력하세요',
      writer: '누구?',
      content: '본문을 입력하세요',
      location: '',
      selectedLocation: '',
      isMapModalVisible: false,
    };
  },
  methods: {
    onSubmit() {
      const { title, writer, content, selectedLocation } = this;
      this.$emit('submit', { title, writer, content, location: selectedLocation });
    },
    openMap() {
      this.isMapModalVisible = true;
      this.initializeGoogleMap();
    },
    confirmLocation() {
      this.selectedLocation = this.location;
      this.isMapModalVisible = false;
    },
    initializeGoogleMap() {
      const mapContainer = document.getElementById('google-map');
      const mapOptions = {
        center: { lat: 37.5665, lng: 126.9780 }, // 서울의 좌표로 초기 위치 설정
        zoom: 13,
      };
      const map = new google.maps.Map(mapContainer, mapOptions);
      const marker = new google.maps.Marker({
        position: mapOptions.center,
        map,
        draggable: true,
      });

      google.maps.event.addListener(marker, 'dragend', (event) => {
        const { latLng } = event;
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: latLng }, (results, status) => {
          if (status === 'OK' && results[0]) {
            this.location = results[0].formatted_address;
          }
        });
      });
    },
  },
  mounted() {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key= ${process.env.VUE_APP_GOOGLE_API_KEY}`;
    googleMapScript.onload = () => {
      this.initializeGoogleMap();
    };
    document.head.appendChild(googleMapScript);
  },
};
</script>

<style scoped>
.board-form {
  margin: 10px;
}

.form-table {
  width: 100%;
  margin-bottom: 20px;
}

.label {
  text-align: right;
  padding-right: 10px;
  font-weight: bold;
}

.input-field {
  width: 100%;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-actions {
  margin-top: 10px;
}

.submit-button {
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
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

.open-map-button {
  background-color: #ffc107;
  color: #000;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.confirm-location-button {
  background-color: #28a745;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.map-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.map-modal-header {
  text-align: center;
  margin-bottom: 10px;
}

.map-modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  width: 500px; /* 모달 창의 가로 크기 조정 */
  max-width: 90%; /* 모달 창의 최대 가로 크기 조정 */
}

#google-map {
  width: 100%;
  height: 300px;
}
</style>
