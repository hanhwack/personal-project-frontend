<template>
  <nav>
    <v-app-bar color="blue" app dark>
      <v-app-bar-nav-icon @click="navigation_drawer = !navigation_drawer" class="white--text" />
      <v-btn @click="goToHome" color="white" text class="white--text">
        <v-img class="mx-2" src="@/assets/wing.png" max-height="40" max-width="40" contain />
        <span class="text-uppercase">Travelog</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text @click="clickToggle" class="white--text">
        <v-icon left>mdi-hand-back-left-outline</v-icon>
        <span>게시판</span>
      </v-btn>
      <v-btn v-if="!isLogin" text @click="signUp" class="white--text">
        <v-icon left>mdi-account-plus-outline</v-icon>
        <span>회원가입</span>
      </v-btn>
      <v-btn v-if="!isLogin" text @click="signIn" class="white--text">
        <v-icon left>mdi-login</v-icon>
        <span>로그인</span>
      </v-btn>
      <v-btn v-if="isLogin" text @click="signOut" class="white--text">
        <v-icon left>mdi-exit-to-app</v-icon>
        <span>로그아웃</span>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="navigation_drawer" color="blue darken-4" dark>
  <v-list nav dense>
    <v-list-item v-for="(link, index) in links" :key="link.index" router :to="link.route">
      <v-list-item-action>
        <v-icon class="white--text">
          {{ link.icon }}
        </v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title class="white--text">
          {{ link.text }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-navigation-drawer>
</nav>
</template>
<script>
import router from '@/router'

export default {
  data() {
    return {
      navigation_drawer: false,
      links: [
        { icon: 'mdi-home', text: 'Home', route: '/' }
      ],
      accountId: 0,
      isLogin: false,
    }
  },
  methods: {
    clickToggle() {
      router.push('/board-list-page')
    },
    signUp() {
      router.push('/account-creation-page')
    },
    signIn() {
      router.push('/account-Login-page')
    },
    signOut() {
      localStorage.removeItem("loginUserInfo")
      this.isLogin = false
    },
    goToHome() {
      router.push('/')
    }
  },
  mounted() {
    this.accountId = localStorage.getItem("loginUserInfo")
    if (this.accountId > 0) {
      this.isLogin = true
    }
  }
}
</script>
<style scoped>
nav {
  background-color: #0d47a1;
}

.v-toolbar-title {
  font-size: 24px;
}

.v-btn {
  margin-right: 10px;
}

.v-list-item-action {
  margin-right: 10px;
}

.v-list-item-title {
  font-size: 16px;
}
</style>