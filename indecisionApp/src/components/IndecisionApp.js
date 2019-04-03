import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import React, { Component } from 'react'
import OptionModal from './OptionModal'
//Action
//Header
//Option & Options

class IndecisionApp extends React.Component{
    state ={
        options:[],
        selectedOption: undefined
    };

    handleClearSelectedOption = ()=>(
        this.setState(()=>(
            {selectedOption:undefined}
        ))
        );


    componentDidMount =() =>{
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if(options){
               this.setState(()=>({options}));
    
            }
            
        } catch (error) {
          console.log(error);  
        } 


      

       
    };

    componentDidUpdate =(prevProps, prevState) =>{
        if(prevState.options !== this.state.options){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('data saved');
        }
        
    };

    componentWillUnmount =()=>{
        console.log('componentWillUnmount');
    };

    handleAddOptions=(option)=>{

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
    };

    handleDeleteOptions=()=>{
        // this.setState(()=>{
        //     return {
        //         options:[]
        //     };
        // });
        this.setState(()=>({
            options:[]
        }));
    };

    handleDeleteOption=(optionToRemove)=>{
        //note: to remove single item at a time
  
        this.setState((prevState)=>(
            {
                options:prevState.options.filter(
                    (option)=>{
                        console.log(option);
                        return optionToRemove!==option;
                        
                    })
            
            
            }));
    };

    handlePick =()=>{

        const randomNum =Math.floor(Math.random() * this.state.options.length) ;
        const option = this.state.options[randomNum]
        //alert(option);
        //use setState to set selectedOption

        this.setState((prevState)=>({selectedOption: option}));
        
    };


    render(){

        //const options = ['thing one', 'thing two', 'thing three']
        return(<div>
            
            {/* <Header title = {title}  subtitle ={subtitle}/> */}
            <Header />

            <div className="container">
            <Action 
            handlePick = {this.handlePick} 
            hasOptions = {this.state.options.length>0} />

            <div className="widget">
                <Options 
                options = {this.state.options}
                handleDeleteOptions= {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}/>
                <AddOption handleAddOptions = {this.handleAddOptions}/> 
            </div>
            
            
            </div>
           
            <OptionModal selectedOption = {this.state.selectedOption} handleClearSelectedOption ={this.handleClearSelectedOption}/>
          
        </div>);
    };
}

export default IndecisionApp;