import React, { Component } from "react";

class Try extends Component {
    constructor(props) {
        super(props);
        this.foucsToInput = React.createRef();
    }
    componentDidUpdate(){
        this.foucsToInput.current.focus()
    }
    render() {
        let Input = (
            <input type="text" ref={this.foucsToInput}/>
        )
        let renderThis = (
        <div>
            {Input}
        </div>
        )
        return(

                <div>
                    {renderThis}
                </div>
            
            )
    }

}