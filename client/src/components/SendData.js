import {React,Component} from "react"
class SendData extends Component {
  constructor(){
    super();  
    this.state={checked: 0}
  }
  
  onChange(i){
     this.setState({
         checked: i
     });
  }
  
    render() {
return(
    <div>
        {
            [1,2,3,4].map((option,i)=>{
                return <label key={i}>
                            <input 
                                type="radio" 
                                checked={this.state.checked == i ? true : false} 
                                key={i+100}
                                onChange={this.onChange.bind(this,i)} 
                                value={i} />
                            {option}
                        </label>
            })
        }
    </div>
);
  }
}

export default SendData;