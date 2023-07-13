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
        </table>
  
        <div class="form-actions">
          <button type="submit" class="submit-button">등록</button>
          <router-link :to="{ name: 'BoardListPage' }" class="cancel-link">
            취소
          </router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '제목을 입력하세요',
        writer: '누구세요?',
        content: '본문을 입력하세요',
      };
    },
    methods: {
      onSubmit() {
        const { title, writer, content } = this;
        this.$emit('submit', { title, writer, content });
      },
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
  </style>
  