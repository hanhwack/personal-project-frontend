<template>
  <div>
    <form @submit.prevent="onSubmit" class="board-form">
      <div class="form-row">
        <label for="title-input" class="label">제목</label>
        <input id="title-input" type="text" v-model="title" class="input-field" />
      </div>
      <div class="form-row">
        <label for="writer-input" class="label">작성자</label>
        <input id="writer-input" type="text" v-model="writer" class="input-field" />
      </div>
      <div class="form-row">
        <label for="content-input" class="label">본문</label>
        <textarea id="content-input" rows="5" v-model="content" class="input-field"></textarea>
      </div>
      <div class="form-row">
        <label for="location-input" class="label">장소</label>
        <div class="input-button-container">
          <input type="text" v-model="location" class="google-search-input" placeholder="장소를 검색하세요" />
          <button @click="openMapPopup" class="open-popup-button">지도 선택</button>
        </div>
      </div>
      <div class="form-actions">
        <button type="submit" class="submit-button">등록</button>
        <router-link :to="{ name: 'BoardListPage' }" class="cancel-link">취소</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      writer: '',
      content: '',
      location: '',
    };
  },
  methods: {
    onSubmit() {
      // 폼 제출 로직
    },
    openMapPopup() {
      const popupUrl = '/google-map-page';
      const popupWindow = window.open(popupUrl, '_blank', 'width=500,height=500');
    },
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

.google-search-input {
  flex: 1;
  padding-right: 5px;
}

.input-button-container {
  display: flex;
  align-items: center;
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
</style>