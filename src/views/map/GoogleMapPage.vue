<template>
    <div>
      <h1>구글 맵 페이지</h1>
      <GoogleMapForm @submit="handleFormSubmit" />
    </div>
  </template>
  
  <script>
  import GoogleMapForm from "@/components/map/GoogleMapForm.vue";
  
  export default {
    components: {
      GoogleMapForm,
    },
    methods: {
      handleFormSubmit(formData) {
        // 폼 데이터를 처리하고 필요한 작업을 수행합니다.
        console.log(formData);
      },
    },
  };
  </script>
  