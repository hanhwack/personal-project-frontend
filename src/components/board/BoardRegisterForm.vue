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
    data () {
        return {
            title: '제목',
            writer: '작성자',
            content: '본문',
        }
    },
    methods: {
        onSubmit () {
            const { title, writer, content } = this
            // BoardRegisterPage의 @submit은 여기의 submit에 대응함
            this.$emit('submit', { title, writer, content })
        }
    }
}
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
