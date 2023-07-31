import axiosInst from "@/utility/axiosInst";

export default {
    requestRegisterAccountToSpring ({ }, payload) {

        return axiosInst.post('/account/register', payload)
                .then((res) => {
                    alert('회원 가입 성공')
                })
                .catch(() => {
                    alert('중복된 이메일이 있습니다.')
                })
    },
};