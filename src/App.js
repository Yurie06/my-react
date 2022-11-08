import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Message from './Message.js';
import Header from './Header.js';
import Footer from './Footer.js';
import MainContent from './MainContent';
import Square from './Square.js';
import Board from './Board.js';
import SampleForm from './SampleForm';

import CityList from './Citylist';
import EmployeeList from './Employee.list';


// title: Destructing

// const names = ["James", "Mark", "Arnold","Ann", "Anna", "Owen", "Kayn"];
// const nameList = names.map((item => <li>{item}</li>))
// const greetings = <h1>{Message}</h1>;

// const vehicles = ["lambo", "R-15", "Mustang"]       
// const [car, truck, suv] = vehicles;
// const [name1, name2, name3,,name4, name5] = names;
// const [,,,girl1,girl2] = names;

// const apple = {
//   color: "red",
//   shape: "round",
//   quantity: "10",
//   list: ['value1', 'value2'],
// }

// let {color: appleColor, shape: appleShape} = apple;


// const greenApple = {
//   color: "green",
//   price: 65,
// }
// // const appleColor = apple.color;
// // const appleShape = apple.shape;


// // title: Spread Operator

// let setOfNumber1 = [23,34,56,34,6,8,11,50];
// let setOfNumber2 = [23,34,56,34,6,8,11,50];
// let combineNumbers = [...setOfNumber1, ...setOfNumber2].map((number) => <div>{number}</div>);
// let [first, second, ...rest] = setOfNumber1;

// let fruitData = {...apple,...greenApple};
// let fruitData1 = {...greenApple,...apple};


// let locked = 1;
// let canChange = locked != 1 ? true : false;
// console.log(canChange);

// let speed = 10;
// let speedWarning = speed >= 120 ? speed >= 200 ? 'Highy to hell' : 'Too Fast' : speed >= 80 ? 'Fast' : speed >= 30 ? 'Safe Driving' : 'Ok';







function App() {
  return (
    <div className="">

      <CityList/>

      <EmployeeList/>

      <SampleForm/>

      

      


      <Square content="Hello" index="1"/>
      <Square content="Universe" index="2"/>
      <Square content ="This is " textcolor="gold"/>

      <hr/>

      <Board />

      <Footer textContent="Hello World"/>
      <Footer numberContent="123456789" />
      <hr/>
      <Header />

    </div>
  );
}

export default App;
