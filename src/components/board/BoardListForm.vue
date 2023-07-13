<template>
    <div>
      <h3 class="title">게시물 목록</h3>
      <table class="board-table">
        <thead>
          <tr>
            <th class="column-header">번호</th>
            <th class="column-header">제목</th>
            <th class="column-header">작성자</th>
            <th class="column-header">등록일자</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="!boards || (Array.isArray(boards) && boards.length === 0)">
            <td colspan="4" class="no-records">
              현재 등록된 게시물이 없습니다!
            </td>
          </tr>
          <tr v-else v-for="board in boards" :key="board.boardId">
            <td class="column-data">{{ board.boardId }}</td>
            <td class="column-data">
              <router-link
                :to="{ name: 'BoardReadPage', params: { boardId: board.boardId.toString() }}"
              >
                {{ board.title }}
              </router-link>
            </td>
            <td class="column-data">{{ board.writer }}</td>
            <td class="column-data">{{ board.createDate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      boards: {
        type: Array
      }
    }
  };
  </script>
  
  <style scoped>
  .title {
    margin: 10px 0;
  }
  
  .board-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  .column-header {
    background-color: #f5f5f5;
    text-align: center;
    padding: 10px;
    font-weight: bold;
  }
  
  .column-data {
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  
  .no-records {
    text-align: center;
    padding: 20px;
    font-weight: bold;
    color: #888;
  }
  </style>
  