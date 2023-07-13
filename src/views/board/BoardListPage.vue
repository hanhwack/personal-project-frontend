<template>
    <div>
      <h2>게시판</h2>
      <board-list-form :boards="boards" />
      <router-link :to="{ name: 'BoardRegisterPage' }" class="create-button">
        게시물 작성
      </router-link>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from 'vuex';
  import BoardListForm from '@/components/board/BoardListForm.vue';
  const boardModule = 'boardModule';
  
  export default {
    components: { BoardListForm },
  
    computed: {
      ...mapState(boardModule, ['boards']),
    },
    mounted() {
      this.requestBoardListToSpring();
    },
    methods: {
      ...mapActions(boardModule, ['requestBoardListToSpring']),
    },
  };
  </script>
  
  <style scoped>
  .create-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #007bff;
    color: #fff;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    font-weight: bold;
    z-index: 9999;
  }
  
  .create-button:hover {
    background-color: #0056b3;
  }
  </style>
  