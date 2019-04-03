import React from 'react';

export default class AddOption extends React.Component{
    //new syntax no need for props etc
    state = {
        error: undefined
    };

    // constructor(props){
    //     super(props);
    //     this.AddOptionSubmit= this.AddOptionSubmit.bind(this);

    //     // old syntax... moved to new syntax 
    //     // this.state ={
    //     //     error: undefined
    //     // };
    // }
    AddOptionSubmit=(e)=>{
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
                {this.state.error&&<p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit = {this.AddOptionSubmit}>
                    <input className="add-option__input" type="text" name="option" placeholder="add options here" />
                    <button className="button">add item </button>
                </form>
            </div>)
    }
}