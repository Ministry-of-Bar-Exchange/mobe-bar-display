import axios from "axios"

export const productApi = () => {
    // let url="http://192.168.1.108:8003/api/BranchManager/lcdScreenData?branchId=57d10fb2aa535cec381b23ab"
    let url = "http://mobe-backend.herokuapp.com/api/BranchManager/lcdScreenData?branchId=57d10fb2aa535cec381b23ab"
    return axios.get(`${url}`)
}
