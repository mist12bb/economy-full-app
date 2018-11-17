import React, {
    Component
} from "react";
import axios from "axios";

import "./style/Sum-style.css"
class SumInit extends Component {
    constructor(props){
        super(props);
        this.state = {sumsList: [], comAll: 0, sumAll:0, commList: []};
    }
    componentWillMount() {
        this.getData("entering");
        this.getData("expneses");
        this.getData("debt");
        
        
    }
    componentDidMount() {
        let sumAll = 0
        this.state.sumsList.forEach(sum=>{
            sumAll += sum
        })
        console.log("sum all",sumAll);
        
        this.setState({sumAll})
    }
    getData(category) {
      
        let sum = 0;
        axios.get(`http://localhost:1482/${category}`).then( res => {
            let comm = 0;
            res.data.forEach(obj => {
                sum +=  Number.parseInt(obj.amount);
                comm += 0.5;

            })

            let list = [...this.state.sumsList];
            let commList = [...this.state.commList];
            list.push(sum);
            commList.push(comm);
            this.setState({sumsList:list, commList});
        } );
    }
    render() {
        console.log("this is sumInit",this.state.sumsList);
       
        let renderLeft = (
            <div>
           you now have {this.state.sumsList[2] - this.state.sumsList[1]}
            </div>
            )
        
            let i = 0;
            let sums = 0;
            let comm = 0;
            this.state.sumsList.forEach(sum=>{
                sums += sum;
                comm += 0.5;
            })
            this.state.commList.forEach(commsin=>{
               
                comm += commsin
            })
            console.log("sums",sums);
            let Style = {flex: "1 1 0"}
        return( 
            <div className="sum-init-con" style={{display: "flex",width:"400px"}}>
            <div className="sums" style={Style}>
            sum of all = 
            {sums}
            </div>
            <div className="comms" style={Style}>
            comisnos = 
            {comm}
            </div>    
            {renderLeft}
            </div>
        )
    }
    
}
export default SumInit;