import request from "@/utils/request";

const API = {
  HOSPITAL_URL: "/hosp/hospital/",
  HOSPITALLEVELANDREGION_URL: "/cmn/dict/findByDictCode/",
};

export const reqHospital = (page, limit) =>
  request.get(API.HOSPITAL_URL + `${page}/${limit}`);
export const reqHospitalLevelAndRegion = (dictCode) => request.get(HOSPITALLEVELANDREGION_URL + dictCode)