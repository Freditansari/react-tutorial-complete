//render constructor, handle togglevisibility

class ToggleVisibility extends React.Component {
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        

        this.state = {
            visiblility:false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState) =>{
            return{
                visibility: !prevState.visibility
            };
        });
        

    }

  render() {
    return (
      <div>
          <h1>Visibility toggle</h1>
             <button onClick ={this.handleToggleVisibility}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
             {this.state.visibility&&(
                  <div>
                  <p>
                      this document should be hidden
                  </p>
              </div>
             )}
            
        
      </div>
    )
  }

  
}
ReactDOM.render(<ToggleVisibility />, document.getElementById('app'))



// let visibility = false;

// const toggleVisibility =()=>{
//     let x = document.getElementById("secretContent")
//     if(visibility == true){
//         x.style.visibility='visible';
//         visibility = false;
//     }else {
//         x.style.visibility='hidden';
//         visibility=true;
//     }
//     renderTemplateApp();

// };

// const renderTemplateApp = ()=>{
//     var template = (
//         <div>
//             <h1>Visibility toggle</h1>
//             <button onClick={toggleVisibility}>{visibility? 'Show Details': 'Hide Details'}</button>
//             <div id="secretContent">
//                 <p>
//                     this document should be hidden
//                 </p>
//             </div>

//             {visibility &&(<div><p>second hidden documents</p></div>)}
//         </div>
       
//       );

//     ReactDOM.render(template, appRoot);

// };




// var appRoot = document.getElementById('app');
// renderTemplateApp();
// toggleVisibility();