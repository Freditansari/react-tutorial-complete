console.log("app.js is running");
var app = {
    title :'potato city',
    subtitle :' where the grass is green and the girls are pretty'

};

var template = (
<div>
    <h1>{app.title}</h1> 
    <p>{app.subtitle}</p>
    <ol>
        <li>potato</li>
        <li>lettuce</li>
    </ol>
</div>);


var user = {
    name: "mike",
    age: 35,
    location: 'Potato city'

};
var userName = "Mike ";
var userAge = "30";
var userLocation = "narnia"

var templateTwo = (
    <div>
        <h1>{user.name + "!!!"}</h1>
        <p>Age : {user.age}</p>
        <p>location: {user.location}</p>
    </div>
);

const user2 = {
    name : 'fredy',
    cities : ['potato city', 'new york', 'jakarta'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}
console.log(user2.printPlacesLived());

const multiplier = {
    numbers : [10, 13, 14,20],
    multipliers :1.5,
    multiply(){
        return this.numbers.map((number) => number * this.multipliers);
    }
};

console.log(multiplier.multiply());

//crate a templatetwo var jsx expression
//div 
//h1-> andrew mead
/**
 * p -> age :
 * p lication : 
 * render 2 instead template 
 */

 


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);