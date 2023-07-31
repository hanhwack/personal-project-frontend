<template lang="">
  <div>
    <div class="board-register-button">
      <router-link :to="{ name: 'BoardRegisterPage' }">
        게시물 작성
      </router-link>
    </div>
    <board-list-form :boards="boards" />
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

<style lang="css">
.board-register-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
}

.board-register-button a {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 10px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
}

.board-register-button a:hover {
  background-color: #0056b3;
}
</style>
