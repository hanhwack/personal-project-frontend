<template>
    <div class="registration-form">
      <v-card class="form-card">
        <v-card-title class="form-title">회원가입</v-card-title>
        <v-card-text>
          <v-form @submit="processCreateAccount">
            <v-text-field
              v-model="email"
              label="이메일"
              type="email"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="비밀번호"
              type="password"
              required
            ></v-text-field>
            <v-btn type="submit" color="blue" class="submit-btn">
              완료
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
      processCreateAccount() {
        const { email, password} = this
        axios
          .post('http://localhost:7777/account/register', {
            email,
            password,
          })
          .then((res) => {
            if (res.data.success) {
              alert('회원가입이 완료되었습니다!')
            } else {
              alert(res.data.message)
            }
          })
          .catch((error) => {
            console.error(error)
            alert('회원가입 중 오류가 발생했습니다.')
          })
      },
    },
  }
  </script>
  
  <style scoped>
  .registration-form {
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
  