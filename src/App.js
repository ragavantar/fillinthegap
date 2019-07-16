import React, {Component} from 'react';

import './App.css';


class App extends Component {
  state = { 
    current: 0,
    blocks: [ 1, 4,5],
    filled: Array(5).fill(0)
   }
  
  componentDidMount(){
    // setInterval(() => {
    //   let {current} = this.state;
    //   current++;
    //   this.setState({current})
    // }, 1000);
  }

  toggleBlock = ind => {
    const { filled } = this.state;
    filled[ind] = !filled[ind];
    this.setState({filled}); 
  }

  render() { 
    const {current, blocks} = this.state;
    return ( 
      <div className="board">
        {
          [...Array(10)].map((e, i)=>{
            return (

            i===current?
            <div className='row fill'> 
                {[...Array(6)].map((e, i)=>
                <div 
                className={ blocks.includes(i)?'block cell': 'cell' }
                ></div>)}
                {[...Array(1)].map((e, i)=>
                <div 
                className={ blocks.includes(i)?'block cell': 'cell'}
                onClick={()=>this.toggleBlock(i)}
                ></div>)}
           </div>
           :
           <div className='row'> 
                {[...Array(7)].map((e, i)=><div className="cell"></div>)}
          </div>

            )
          })
        }
      </div>
     );
  }
}
 
export default App;