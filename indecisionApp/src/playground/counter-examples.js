class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count:0
        };
    }


    componentDidMount(){
        try {
            const json = localStorage.getItem('count');
            const count = JSON.parse(json);
    
            if(!isNaN(count)){
               this.setState(()=>({count}));
    
            }
            
        } catch (error) {
          console.log(error);  
        }    
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count!== this.state.count){
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json)
        }
        console.log('saving data');
    }
    



    handleAddOne(){
        this.setState((prevState)=>{
            return {
                count:prevState.count +1
            };
        })

    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count:prevState.count -1
            };
        })
    }
    handleReset(){
        this.setState(()=>{
            return {
                count:0
            };
        })
    }
  render() {
    return (
      <div>
       
        <h1>COUNT: {this.state.count}</h1>
             <button onClick={this.handleAddOne}>+1</button>
             <button onClick={this.handleReset}>reset</button>
             <button onClick={this.handleMinusOne}>-1</button>
      </div>
    )
  }
}



ReactDOM.render(<Counter />, document.getElementById('app'))

// let count = 0;
// const addOne=()=>{
//     count++;
//     renderCounterApp();
// };

// const minusOne =()=>{
//     count--;
//     renderCounterApp();
// };

// const resetCounter =()=>{
//     count = 0;
//     renderCounterApp();
// };

// const renderCounterApp = ()=>{
//     const templateTwo = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={resetCounter}>reset</button>
//             <button onClick={minusOne}>-1</button>
        
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
    
// }
// renderCounterApp();


// //crate a templatetwo var jsx expression
// //div 
// //h1-> andrew mead
// /**
//  * p -> age :
//  * p lication : 
//  * render 2 instead template 
//  */
