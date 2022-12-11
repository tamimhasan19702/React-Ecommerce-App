import React from 'react';
import './App.css';
import { Switch ,Route, Link } from 'react-router-dom';
// import Homepage from './pages/homepage/hompage.component';
// import shopComponent from './pages/shop/shop.component';
// import HeaderComponent from './components/header/Header.component';


const Test1 = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Homepage</h1>
            <Link to={`${props.match.url}/14`}>test2</Link>
        </div>
    )
}

const Test2 = () => {
    return(<div>
        <h1>test 2</h1>
    </div>)
}
const Test3 = (props) => {
    console.log(props)
    return(<div>
        <h1>test 3 {props.match.params.testId}</h1>
    </div>)
}
 
function App () {
  
    return (
      <div>
        {/* <HeaderComponent /> */}

        <Switch >
          
            {/* <Route exact path='/'  component={Homepage} /> 

            <Route path='/shop' component={shopComponent}/>  */}

            <Route  path='/' component={Test1} />
            <Route  path='/test2' component={Test2} />
            <Route exact path='/test3/:testId' component={Test3} />
            

        </Switch>
       
            </div>
    );
}

export default App;
