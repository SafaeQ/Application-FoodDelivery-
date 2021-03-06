import api from "../components/api";
import authHeader from "./auth-header";


const getAdminBoard = () => {
    return api.get("/api/leaders", { headers: authHeader() });
};

const UserService = {
    getAdminBoard
}

export default UserService;