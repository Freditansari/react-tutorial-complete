class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions= this.handleDeleteOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);

        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state ={
            options :[]
        };
    }

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if(options){
               this.setState(()=>({options}));
    
            }
            
        } catch (error) {
          console.log(error);  
        } 


      

       
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
        console.log('saving data');
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleAddOptions(option){

        if(!option){
            return 'enter valid value to add item';
        }else if(this.state.options.indexOf(option)>-1){
            return 'this option is already exist';
        }

        this.setState((prevState)=>({options: prevState.options.concat([option])}));
        // this.setState((prevState)=>{
        //     return {
        //         options: prevState.options.concat([option])
        //     };
        // });
    }

    handleDeleteOptions(){
        // this.setState(()=>{
        //     return {
        //         options:[]
        //     };
        // });
        this.setState(()=>({
            options:[]
        }));
    }

    handleDeleteOption(optionToRemove){
        //note: to remove single item at a time
  
        this.setState((prevState)=>(
            {
                options:prevState.options.filter(
                    (option)=>{
                        console.log(option);
                        return optionToRemove!==option;
                        
                    })
            
            
            }));
    }

    handlePick(){

        const randomNum =Math.floor(Math.random() * this.state.options.length) ;
        const option = this.state.options[randomNum]
        alert(option);
   
        
    }


    render(){
        const title ='Potata!!';
        const subtitle = "put your life on a computer";
        //const options = ['thing one', 'thing two', 'thing three']
        return(<div>
            {/* <Header title = {title}  subtitle ={subtitle}/> */}
            <Header />
            <Action 
            handlePick = {this.handlePick} 
            hasOptions = {this.state.options.length>0} />

            <Options 
            options = {this.state.options}
            handleDeleteOptions= {this.handleDeleteOptions}
            handleDeleteOption = {this.handleDeleteOption}/>
            <AddOption handleAddOptions = {this.handleAddOptions}/>
        </div>);
    }
}

const Header = (props)=>{
    return(<div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>); 

};

Header.defaultProps ={
    title:'this is from default hakuna matata',
    subtitle: 'this is also from default props'
};

// class Header extends React.Component{
//     render(){
//         return(<div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//         </div>); 
// }
// }

const Action = (props) =>{
    return (
        <div>
            <button disabled ={!props.hasOptions} onClick = {props.handlePick}> What Should I Do?</button>
        </div>

    );
}

// class Action extends React.Component{
//     // handlePick(){
//     //     alert('button pressed');
//     // }
//     render(){
//         return (<div>
//             <button disabled ={!this.props.hasOptions} onClick = {this.props.handlePick}> What Should I Do?</button></div>)
//     }
// }

const Options = (props) =>{
    return (<div>

        <button onClick = {props.handleDeleteOptions}> Remove All</button> 
        {props.options.length ===0 && <p>Please add an option to get started!</p> }
        {props.options.map((option) => 
            (
                <Option 
                key={option} 
                optionText = {option}
                handleDeleteOption = {props.handleDeleteOption}/>
            )
        
        )}
        
    </div>);

}

// class Options extends React.Component{

 
//     render(){
//         return (<div>

//             <button onClick = {this.props.handleDeleteOptions}> Remove All</button> 
//             {this.props.options.map((option) => <Option key={option} optionText = {option}/>)}
            
//         </div>);
//     }
// }

const Option = (props) =>{
    return (
    <div>
        <p>
            {props.optionText}
            {/* sending option text to the handleDeleteOption */}
            <button onClick={(e)=>{props.handleDeleteOption(props.optionText);}}>            
            remove</button> 
        </p>
        
        
    </div>)

}

// class Option extends React.Component{
//     render(){
//         return (<div><p>{this.props.optionText}</p></div>)
//     }
// }



class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.AddOptionSubmit= this.AddOptionSubmit.bind(this);

        this.state ={
            error: undefined
        };
    }
    AddOptionSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        
        const error = this.props.handleAddOptions(option);
        // this.setState(() =>{
        //     return {
        //         error
        //     };
        // });
        this.setState(()=>({error}));

        if(!error){
            e.target.elements.option.value ='';
        }
        

    }
    render(){
        return (<div>
                {this.state.error&&<p>{this.state.error}</p>}
                <form onSubmit = {this.AddOptionSubmit}>
                    <input type="text" name="option" placeholder="add options here" />
                    <button >add item </button>
                </form>
            </div>)
    }
}

//stateless functional component examples

// const User =(props) =>{
//     return (<div>
//         <p>Name : {props.name} </p>
//         <p>Age : {props.age}</p>
//     </div>);
// };


// ReactDOM.render(<User name="Fredy" age ={15} />, document.getElementById('app'))
//ReactDOM.render(<IndecisionApp options ={[`devil's den`, 'second district', `house of comedy`]}/>, document.getElementById('app'))
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
