import React, { Component , } from 'react';
import './App.css';
import {data, getDataByCat} from "./data"
import { Saved } from "./compnents/saved-actions";
import {Array} from "./compnents/PLAY/array"
import SumInit from "./compnents/data/sominit";
import From from "./compnents/form/form"
import Form from './compnents/form/form';
import axios from 'axios';
class  App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      AmountSums: 0,
      amountDelEnter: 0,
      savedAct: [],
      category: "entering",
      dataByCat: [],
      onDel: true,
      comminson: 0
    }
    this.newCategory = this.newCategory.bind(this)
  };
  handelAmountSum(data,key) {
    let AmountSums = this.state.AmountSums;
    AmountSums = AmountSums -  Number.parseInt (data[key].amount);
      this.setState({AmountSums})
    
    console.log(AmountSums)

  }
  save = (key) =>{
    let savedAct = this.state.savedAct.slice();
    let data = this.state.dataByCat.slice();
    axios.post(`http://localhost:1482/saved`, data[key]);

    if (!savedAct[key]) {

      savedAct.push(data[key]);
      this.setState({savedAct});

    }
    
  }
  del = ( key, id, row) => {
    
    axios.post(`http://localhost:1482/Recycle`, {row});
    axios.delete(`http://localhost:1482/${this.state.category}/${id}`);
    let data = this.state.dataByCat;
    let savedAct = this.state.savedAct.slice();
    savedAct = savedAct.filter((item)=>{
      return item !== data[key];
    })
    this.handelAmountSum(data, key)
     data = data.filter(item=>{
      return item !== data[key]
    })
    
    this.setState({savedAct})
    this.setState({dataByCat: data})

    
  }
  newCategory (cat){
  let AmountSums = 0;
  let commison = 0;
  let  category = cat;
    this.setState({category})
    getDataByCat(category).then(
      res =>{this.setState({dataByCat: res.data})
    let data = res.data;
      data.forEach(c=>{
       let amount = Number.parseInt(c.amount);
       AmountSums += amount;
       commison+=.5;
       this.setState({AmountSums});
       this.setState({comminson: commison});
     });
    
    
    }
    )

    console.log("new data");
    
  }
  componentWillMount(){
    let commison = 0;
    let AmountSums = 0;
    data.then(res=>{
      let data = res.data;
     this.setState({data});

     data.forEach(c=>{
       let amount = Number.parseInt(c.amount);
       AmountSums += amount;
       commison += .5

     })
     this.setState({AmountSums})
     this.setState({comminson:commison})
    })
  }
  componentDidMount() {
    getDataByCat(this.state.category).then(
      res =>{
        this.setState({dataByCat: res.data})
      }
    )
  }
  onDel=() =>{
    let delBox = this.state.onDel;
    delBox = !delBox;
    this.setState({onDel: delBox});
  }
  render() {
    let renderData = (
      this.state.dataByCat.map((row, i)=>{
        return <div key={row.id} className="box-act">
              



                <div className="data">
                    <div key= {i} className="itemAct">
                        <div className="amount">
                        <p>
                        
                        {row.amount}
                        </p>    
                        </div>
                        <div className="discrtion">
                        <p>
                        {row.info}
                        </p>
                        </div>
                      <div className="date">
                      <p>
                      {row.date}
                      </p>
                      </div>
                    </div>
              </div>






              <div className="actButtons"><button onClick={()=>{this.del(i, row.id, row)}}>  Delete</button>
              <button onClick={()=>{this.save(i)}}>save</button></div>
        </div>

          })
    )
    var box = undefined;
    if (this.state.onDel) {
        box = (
          <div className="delChiose">
          <div> are you sure that you want to delete?</div>
          <button className="del-btn">Delete</button>
          <button onClick={this.onDel} className="cancel-btn">cancel</button>
          </div>
        )
    }
    return (
      <div className="AppAll">
      <div className="rep">
      <SumInit/>
      
      </div>  
     
     






         <div className="App">
          <div className="main">
          <div className="actionsLog">
          <h1 className="displayTitle">{this.state.category}</h1>
          <div className="log">
          <div className="genData"><div className="dataTitle">
          <p>GENREL DATA</p>
          <div className= "data-info">
        <div className ="title title-sum">
        <p>sum</p>
        </div>  
        <div className ="title title-com">
        <p>commetions</p>
        </div>  
         <div className="sum sum-amount">
        
       <p>{this.state.AmountSums}</p>
         </div>
         <div className="sum sum-amount">
       <p>{this.state.comminson}</p>
         </div>
          </div>
          </div></div>

          </div>
          </div>
            <div className="dispaly">
              <div className="displayAction">

                {renderData}
          
              </div>
            </div>
          </div>
          <Saved />

              <div className="side">
              <div className="side-bar">
              <div className="side-bar-menu">
              <button onClick={()=>{this.newCategory("entering")}}> Entring</button>
              <button onClick={()=>{this.newCategory("saved")}}> saved</button>
              <button onClick={()=>{this.newCategory("debt")}}> debt</button>
              <button onClick={()=>{this.newCategory("expneses")}}> expneses</button>
              
              </div>
              </div>
          </div>
        <div className="form">
        
        <Form/> 

        </div>
        {box}
     </div>
  






     
     </div>

    );
  }
}



export default App;
