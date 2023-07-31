import Vue from "vue";
import VueRouter from "vue-router";

import BoardListPage from "@/views/board/BoardListPage.vue";
import BoardRegisterPage from "@/views/board/BoardRegisterPage.vue";
import BoardReadPage from "@/views/board/BoardReadPage.vue";


Vue.use(VueRouter);

const boardRoutes = [
  {
    path: "/board-list-page",
    name: "BoardListPage",
    component: BoardListPage,
  },
  {
    path: "/board-register-page",
    name: "BoardRegisterPage",
    component: BoardRegisterPage,
  },
  {
    path: "/board-read-page/:boardId",
    name: "BoardReadPage",
    components: { default: BoardReadPage },
    props: { default: true },
  },
  
];

export default boardRoutes;