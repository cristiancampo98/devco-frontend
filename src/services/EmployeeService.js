import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://devco-back.test`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getAllEmployee() {
    return apiClient.get("/api/employee");
  },
  getEmployeeWithoutEquipment() {
    return apiClient.get("/api/employee?equipment=false");
  },
  getEmployeeWithEquipment() {
    return apiClient.get("/api/employee?equipment=true&limit=3");
  },
  createEmployee(payload) {
    return apiClient.post("/api/employee", payload);
  },
};
