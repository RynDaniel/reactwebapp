import './assets/css/App.css';
const addTwoNumbers1=(number1, number2)=>{
  return number1+number2
}
const addTwoNumbers2=(number1, number2)=>number1+number2

function addTwoNumbers3(number1, number2){
  return number1+number2;
} 
// App Functional Component
function App() {
  return (
    <div className="App">
        <p>
          Result : {addTwoNumbers1(3,5)}
        </p>
    </div>
  );
}
//Her sayfa için Default exportta tek function export yapılır
//const olarak verilen değişkenleri inline default export yapılamaz.
//ama aşağıdaki gibi dafult export yapılabilir...
export default App;
