import axios from "axios"

export const productApi = () => {
    let url = "http://mobe-backend.herokuapp.com/api/BranchManager/lcdScreenData?branchId=57d10fb2aa535cec381b23ab"
    return axios.get(`${url}`)
}
