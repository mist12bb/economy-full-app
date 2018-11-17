import React , {Component} from "react";
import "./css/style.css"
import axios from "axios";
class Form extends Component {
    constructor(prpos) {

        super(prpos);
        this.state = {category: "",true:false, unchecked: false, date: "01-11-18", info: "thre is no discripton", amount: 10, catSet: false};
        this.c = this.c.bind(this)

    }
    
    onSubmitCat = (e) =>
    {
        this.setState({category: e.target.value});
    }
    c(e) {
        e.checked = "true"
    }
    onSubmitForm () {

        let data = {
            date:this.state.date,
            amount: this.state.amount,
            info: this.state.info
        }
        if (this.state.category =="" || this.state.category === "selectCat"){
        /* axios.post(`http://localhost:1482/${this.state.category}`, data)}else { */
            alert("you have to set category")
        }else {
            axios.post(`http://localhost:1482/${this.state.category}`, data)
        }
    }
    componentDidMount() {
    
    }
    render() {
        let toSetCategory = null;
        if (this.state.category === "" ||  this.state.category === "selectCat"){
            toSetCategory = (
                <div>
                <p style={{color: "red"}}>you have to set a category</p>
                </div>
            )
        }
        console.log(this.state.category, "catgorey");
        
        var toOrFrom = null;
        switch(this.state.category) {
            case "entreing": {
                    toOrFrom = (
                        <div className="from-input">
                            <label htmlFor="from" className="form-label">
                                from
                        </label>
                            <input type="text"   name="from" id="form-input to-from"/> 
                        </div>
                    )
                    break;
            
            }
            case "expenses": {
                toOrFrom = (
                    <div className="from-input">
                            <label htmlFor="from" className="form-label">
                                to
                        </label>
                            <input type="text"   name="from" id="form-input to-from"/> 
                        </div>
                )
                break;
            }
            default: {
                break;
            }
        }
        let selctCategory = (
            <div className="category" onChange={(e)=>{
                console.log("new vlue" , e.target.value);
                this.setState({"category": e.target.value})
                
            }}>
            <select name="category" id="category">
            <option value="selectCat" defaultValue> select a category</option>
            <option value="entering">entering</option>
            <option value="expneses">expenses</option>
            <option value="debt">debt</option>
            </select>
            {toSetCategory}
            {
            /* <input type="checkbox" name="entring" id="entirng" value="entreing" onClick={this.onSubmitCat}/>
            <label htmlFor="entirng" defaultValue="entreing" onClick={this.onSubmitCat}>entring</label>


            <input type="checkbox" name="expenes" id="expenes" value="expenses" onClick={this.onSubmitCat}   />
            <label htmlFor="expenes" value="expenses" onClick={this.onSubmitCat}>expenses</label>
           
            <input type="checkbox" name="debt" id="debt" />
            <label htmlFor="debt" onChange={this.onSubmitCat} value="debt" >debt</label> */}

            </div>
        )

        let renderForm = (
        <div>
        <form action="#">
        <div className="amount-input">
        <p>plase enter <br/>the action AMOUNT</p>
        <label htmlFor="amount" className="form-label">
        amount
        </label>
        <input
         type="number"
          min='10'
           defaultValue="10"
             max="1000"
              name="amount"
               id="form-input amount" 
               className='amount'
               onChange = {(e)=>{
                   this.setState({amount: e.target.value})
               }}
               />
        </div>
        <div className="date-input">
    <p>plase enter <br/>the action DATE</p>
    <label htmlFor="date" className="form-label">
    date
    </label>
    <input type="date"  min="10-10-18" name="date" id="form-input date" defaultValue="2018-11-01"
    onChange = {(e)=>{
                   this.setState({date: e.target.value})
               }}
    />
    </div>

            {toOrFrom}
    <div className="info-input">
    <label htmlFor="info">info</label>
    <textarea name="info"
     id="info"
      cols="30"
       rows="10"
       onChange = {(e)=>{
                   this.setState({info: e.target.value})
               }}
    >
    </textarea>
    </div>
    </form>
    <input type="submit" value="add" onClick={this.onSubmitForm.bind(this)}/>
    {/* {toSetCategory} */}
    </div>


        )
        return(<div>
            {selctCategory}
            {renderForm}
    {this.state.category}

            </div>)
    }
}

export default Form;
