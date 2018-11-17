import React , {Component} from "react"

export class Array extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            list: [22, "b", "c"]
        }

    }   
    onUpItem = (i) => {
        let list = this.state.list.slice();
        list = list.map((item, j)=>{
            if (j === i && !item.endsWith("update")) {
                return item + " update"
            }else {
                return item
            }
        })
        this.setState({list})
    }
    HendelChange = (e) =>{
        this.setState({value: e.target.value})
    }
    add = () =>{
        let list =[...this.state.list, this.state.value];
        this.setState({list, value: ""})
    }
    render() {
        console.log(this.state.list);
        
        return (
            <div>
                    <input type="text" onChange={this.HendelChange} value={this.state.value}/>
                    <button onClick={this.add}>Add</button>
                    {this.state.list.map((item, index)=>{
                        return <div key={index}>
                        <p>{item}</p>
                        <button onClick={()=>{this.onUpItem(index)}}>
                        update {item}
                        </button>
                        </div>
                    })}
            
            </div>
            )
    }
}