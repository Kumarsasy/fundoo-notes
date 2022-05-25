import axios from "axios";
import React from "react";

const baseURL = "http://fundoonotes.incubation.bridgelabz.com/api";
let token = localStorage.getItem("token");
export const SignUpService = (signupData) => {
    try {
        const response = axios.post(baseURL + "/user/userSignUp", signupData);
        return response;
    } catch (error) {
        return error;
    }
};

export const LogInService = (loginData) => {
    try {
        const response = axios.post(baseURL + "/user/login", loginData);
        return response;
    } catch (error) {
        return error;
    }
};

export const ForgotService = (data) => {
    try {
        const response = axios.post(baseURL + "/user/reset", data);
        return response;
    } catch (error) {
        return error;
    }
};

export const ResetService = (data, token) => {
    try {
        const response = axios.post(baseURL + "/user/reset-password?access_token=" + token, data);
        return response;
    } catch (error) {
        return error;
    }
};
