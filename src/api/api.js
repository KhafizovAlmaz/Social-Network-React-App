const axios = require('axios').default;

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "b12afb79-560f-4c1e-a250-f7d4e76c4786"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    add(userId) {
        return instance.post(`follow/${userId}`)
    },
    delete(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId);
    }
}
export const profileAPI = {
       getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    uploadPhoto(image) {
           const formData = new FormData();
           formData.append("image", image)
        return instance.put(`profile/photo`, formData, {
            headers : {
                    'Content-Type' : 'multipart/form-data'
            }
        });
    },
    saveProfile(profile){
        return instance.put(`profile`, profile);
    }

}

export const authAPI = {
    me() {
        return instance.get(`auth/me`,)
    },
    login(email, password, rememberMe = false,captcha = "") {
        return instance.post(`auth/login`,{email, password, rememberMe,captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    },
}
export const securityAPI = {
        captcha() {
        return instance.get(`security/get-captcha-url`)
    }
}



