<template>
  <div class="registration-form-container">
    <v-card class="form-card">
      <v-card-title class="form-title">회원가입</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="onSubmit">
          <v-text-field v-model="email" label="이메일" type="email" required></v-text-field>
          <v-text-field v-model="password" label="비밀번호" type="password" required></v-text-field>
          <v-btn type="submit" color="blue" class="submit-btn" :disabled="isSubmitDisabled">
            회원가입
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      checkEmailValid: false,
    };
  },
  methods: {
    onSubmit() {
      this.checkEmail();
      if (this.checkEmailValid) {
        const { email, password } = this;
        this.$emit('submit', { email, password });
      }
    },
    checkEmail() {
      this.checkEmailValid = this.email.includes('@');
      if (!this.checkEmailValid) {
        alert('이메일 형식을 확인해주세요.');
      }
    },
  },
};
</script>

<style scoped>
.registration-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-card {
  max-width: 400px;
  width: 100%;
  padding: 24px;
  margin: 0 auto; /* 가운데 정렬을 위한 스타일 */
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
