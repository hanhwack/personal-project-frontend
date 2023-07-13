<template>
    <div class="login-form">
      <v-card class="form-card">
        <v-card-title class="form-title">로그인</v-card-title>
        <v-card-text>
          <v-form @submit="processLogin">
            <v-text-field
              v-model="email"
              label="이메일"
              type="email"
              required
              outlined
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="비밀번호"
              type="password"
              required
              outlined
            ></v-text-field>
            <v-btn type="submit" color="primary" class="submit-btn">
              로그인
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      }
    },
    methods: {
      processLogin() {
        const { email, password } = this
        axios
          .post('http://localhost:7777/bmp-account/login', { email, password })
          .then((res) => {
            if (res.data.isSuccessForLogin) {
              alert('로그인 완료!')
              localStorage.setItem('loginUserInfo', res.data.gameAccountId)
            } else {
              alert('로그인 실패!')
            }
          })
          .catch((error) => {
            console.error(error)
            alert('로그인 중 오류가 발생했습니다.')
          })
      },
    },
  }
  </script>
  
  <style scoped>
  .login-form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .form-card {
    max-width: 400px;
    width: 100%;
    padding: 24px;
  }
  
  .form-title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 16px;
  }
  
  .submit-btn {
    margin-top: 16px;
  }
  </style>
  