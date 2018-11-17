import axios from "axios"


function getData() {
    return axios.get("http://localhost:1482/entering");
}
export function getDataByCat(cat) {
    return axios.get(`http://localhost:1482/${cat}`);
};
let sumAmount = 0;
const sum = getData().then(res=>{
    res.data.forEach(
        row=>{
            let enteringAmount = Number.parseInt(row.amount);
            sumAmount += enteringAmount;
            
            console.log(sumAmount)
        }
    )
})

export const  data = getData();


