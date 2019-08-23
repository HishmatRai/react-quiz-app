import React from 'react';
import { api } from '../config/fuction'
import Nevbar from '../contenor/nevbar'
import Detail from './detail'

class Questions extends React.Component {
  constructor() {
    super()
    this.state = {
      data: '',
      counter: 0,
      checked: "",
      marks: 0,
      uncorrect:0,
      showResult:false,
      result : true
    };
    this.next = this.next.bind(this)
  }


  async componentDidMount() {
    let { counter } = this.state

    let data = await api()
    // console.log(data)
    data[counter].incorrect_answers.push(data[counter].correct_answer)
    this.setState({
      data: data,
      allAnswer: data[counter].incorrect_answers,
      lenghtOfquestion:data.length
    })
  }
  next() {
    let { data, counter,selectanswer,correct_answer,marks,uncorrect } = this.state
    if(data.length-1 === counter){
    this.setState({
      result : false,
    })
    if (this.state.selectanswer === data[counter].correct_answer) {
      this.setState({ marks: marks + 1 })
    }    }
    else{
      data[counter + 1].incorrect_answers.push(data[counter + 1].correct_answer)
      this.setState({
      counter: counter + 1,
      allAnswer: data[counter + 1].incorrect_answers,
      checked: true,
      correctAns:data[counter].correct_answer,

    })
  
  //   if(this.state.correct_answer  === data[counter].correct_answer){
  //     this.setState({marks: marks+1})
  //     alert("correct")
  //   }
  //   else{
  //     this.setState({uncorrect: uncorrect+1})
  //   }
  if (this.state.selectanswer === data[counter].correct_answer) {
    this.setState({ marks: marks + 1 })
  }
  }
  }
  render() {
    let { data, counter, allAnswer, selectanswer ,correctAns,marks,uncorrect} = this.state
    return (

      <div>
         <Nevbar   name={this.props.name} img={this.props.img} />

        {console.log(allAnswer)}

    <div>
      {this.state.result ?
       <div style={{border:"2px solid black",width:"70%",margin:"0 auto",padding:"10px",marginBottom:"10px"}}>
       {  data && <h3 style={{margin:"0 auto"}}>{this.props.time}</h3>}
<div >
        <h4> Q : - {data && data[counter].question}</h4>

        {data && allAnswer.map((value, index) =>
          <div className="radios">
            <center>
              <table>
                <tr>

                  <td> <label > <input name="group1" onClick={()=>this.setState({ selectanswer:value})} value={value} type="radio" />
                    <span id="radioesbtn">{value}</span> </label></td>

                </tr>

              </table>
            </center>



          </div>
        )}
        </div>
        <center>
{          data && <input className=" btn-large nextbtn" type='button' value='Next' onClick={this.next} />
}          </center>
</div> 
:
              <Detail result = {this.state}/>
}
</div>

      </div>

    )
  }
}
export default Questions;