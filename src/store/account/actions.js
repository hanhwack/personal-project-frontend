
import axiosInst from "@/utility/axiosInst";
import router from "@/router"; 

export default {
  requestRegisterAccountToSpring({}, payload) {
    return axiosInst
      .post("/account/register", payload)
      .then((res) => {
        alert("회원 가입 성공");
      })
      .catch(() => {
        alert("중복된 이메일이 있습니다.");
      });
  },


  requestLoginAccountToSpring({}, payload) {
    return axiosInst
      .post("/account/login", payload)
      .then((resLogin) => {
        if (resLogin.data !== "") {
          alert("로그인 성공!");
          localStorage.setItem("userToken", resLogin.data);
          router.push("/"); // 로그인 성공 시 홈 페이지로 이동합니다.
        } else {
          alert("이메일과 비밀번호를 다시 확인해주세요!");
        }
      })
      .catch(() => {
        throw new Error("로그인 요청 실패");
      });
  },
};
