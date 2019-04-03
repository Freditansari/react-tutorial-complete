console.log("app.js is running");
var app = {
    title :'potato city',
    subtitle :' where the grass is green and the girls are pretty',
    options:[]

};
const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value ='';
    }
    renderTemplateApp();
}

const removeAllOptions = ()=>{
    app.options = [];
    renderTemplateApp();
}
const onMakeDecision =()=>{
    const randomNum =Math.floor(Math.random() * app.options.length) ;
    const option = app.options[randomNum]
    alert(option)

};



const renderTemplateApp = ()=>{
    var template = (
        <div>
            <h1>{app.title}</h1> 
            <p>{app.subtitle}</p>
            <p>{app.options.length >0?'here are your options' :'no options available'}</p>
            <p>{app.options.length}</p>

            <button disabled = {app.options.length===0} onClick={onMakeDecision}>Make a Decision</button>

         
            <ol>
                {
                    app.options.map((arrayElement) =>{
                        return <li key ={arrayElement}>{arrayElement}</li>
                    })
                }

            </ol>
            <form onSubmit = {onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                <button onClick = {removeAllOptions}>remove all </button>
            </form>    
        </div>);

    ReactDOM.render(template, appRoot);

};




var appRoot = document.getElementById('app');
renderTemplateApp();
