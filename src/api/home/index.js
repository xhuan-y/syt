import request from "@/utils/request";

const API = {
  HOSPITAL_URL: "/hosp/hospital/",
};

export const reqHospital = (page, limit) =>
  request.get(API.HOSPITAL_URL + `${page}/${limit}`);
