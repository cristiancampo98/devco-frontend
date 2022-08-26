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
  getById(id) {
    return apiClient.get("/api/equipment/" + id);
  },
  getAllEquipment() {
    return apiClient.get("/api/equipment");
  },
  createEquipment(payload) {
    return apiClient.post("/api/equipment", payload);
  },
  updateEquipment(id, payload) {
    return apiClient.put("/api/equipment/" + id, payload);
  },
};
