import React, { useEffect, useReducer, useState } from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// import LanguageSwitcher from './components/LanguageSwitcher';
// import Content from './components/Content';
// import LanguageContex from './components/LanguageContex';


import MovieDetali from './pages/MovieDetali';
import MovieList from './components/MovieList';
import Search from './components/Search';
// import Main from './components/Main';
// import Test from './components/Test';
// import TestProvider from './components/TestProvider';
// import Login from './components/Login';
// import Home from './components/Home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import AuthContext from './components/AuthContext';
// import FlightBooking from './pages/FlightBooking';
// import FlightContext from './components/FlightContext';
// import FlightList from './pages/FlightList';



function App() {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  return (
    <div>
      <BrowserRouter>
        <Search onSearch={setMovies} />
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movies/:id" element={<MovieDetali />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// export default App;
// export default function App() {
//   return (
//     <TestProvider>
//     <div>
//       <h1>This is App.jsx</h1>
//       <Test/>
//     </div>
//     </TestProvider>
//   )
// }
// function App() {
//   let [isAuthenticated, setIsAuthenticated] = useState(()=>{
//     return JSON.parse(localStorage.getItem('user'))?true:false;
//   });


//   return (
//     <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated}}>
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={
//           <Login/>
//         } />
//         <Route path='/home' element={
//           <Home/>
//         } />
//       </Routes>
//     </BrowserRouter>
//     </AuthContext.Provider>
//   );
// }

// export default App;


// export default function App() {
//   return (
//     <div>
//       {/* <FlightProvider> */}
//       <BrowserRouter>
//       <Routes>
//         <Route path='/'element = {<FlightList/>}/>
//         <Route path='/booking/:id'element = {<FlightBooking/>}/>
//         <Route/>
//       </Routes>
//       </BrowserRouter>
//       {/* </FlightProvider> */}
//     </div>
//   )
// }




// let initialState={
//   count:0,
//   name:''
// }

// function reducer(state,action) {
//   switch (action.type) {
//     case "artady":
//       return{
//           ...state,
//           count: state.count + 1,
//           name: 'Miras'
//       }

//     case "kemidy":  
//       return{
//         ...state,
//         count: state.count - 1,
//         name: 'Ismail'
//       }
//       case "brik":
//         return{
//           ...state,
//           count: 0,
//           name: '...' 
//         }
//      default:
//       return state
//   }
// }

// let initialState = {
//   name: '',
//   surname: '',
//   email: '',
//   password: ''
// }
// function reducer(state, action) {
//   switch (action.type) {
//     case 'change':
//       return{
//         ...state,
//         [action.field]: action.value
//       }
//   }
// }

// export default function App() {
//   let [state,dispatch] = useReducer(reducer,initialState)

//   function handleSudmit(e) {
//     e.preventDefault()
//     alert(`Name: ${state.name}/n Surname: ${state.surname}/n Email ${state.email}/n Password ${state.password}`)
//   }
//   function handleChange(e) {
//     dispatch({
//       type:"change",
//       field: e.target.name,
//       value: e.target.value
//     })
//   }
//   return (
//     <div>
//       <form onSubmit={handleSudmit}>
//         <input type="text"name='name'placeholder='Enter name'onChange={handleChange} />
//         <input type="text"name='surname'placeholder='Enter surname'onChange={handleChange} />
//         <input type="password"name='password'placeholder='Enter password'onChange={handleChange} />
//         <input type="textpassword"name='conFilmPassword'placeholder='conFilm'onChange={handleChange} />
//         <input type="email"name='email'placeholder='Enter name'onChange={handleChange}required />
//         <button>Login</button>
//       </form>
      {/* count: {state.count}
      name: {state.name}
      <button onClick={()=>dispatch({type:"artady"})}>+</button>
      <button onClick={()=>dispatch({type: "kemidy"})}>-</button>
      <button onClick={()=>dispatch({type: "brik"})}>*</button> */}
    // </div>
//   )
// }
// const initialState={
//   books: [],
//   loading: true,
//   error: ''
  
// }
// function reducer(state,action) {
//   switch (action.type) {
//     case "axios_start":
//       return{
//         ...state,
//       }
//     case "axios_get":
//       return{
//         ...state,
//         loading: false,
//         books: action.books
//       }
//     case "axios_error":
//       return{
//         ...state,
//         loading: false,
//         error: action.error
//       }
  
//     default:
//       return state
//   }
// }

// export default function App() {
//   const [state,dispatch]=useReducer(reducer,initialState)
//   useEffect(()=>{
//     dispatch({type: "axios_start"})
//     async function fetchData() {
//       try{
//         let response = await axios.get('https://67873274c4a42c916105d2fe.mockapi.io/api/onlineduken/books')
//         dispatch({type: "axios_get",books: response.data})
//       }catch(err){
//         console.log(err.massage);
//        dispatch({type: "axios_error",error: err.massage})
//       }
//     }
//     fetchData()
//   },[])
//   return (
//     <div>
//        {state.loading&&<p>жуктелуде...</p>}
//        {state.error&&<p style={{color:'red'}}>{error}</p>}
//        {state.books&&
//        state.books.map((kitap)=>{
//         return(
//           <div key={kitap.id}>
//             <h3>{kitap.title}</h3>
//             <p>{kitap.description}</p>
//           </div>
//         )
//        })}
//     </div>
//   )
// }

// let initialState={
//   count:0,
// }

// function reducer(state,action) {
//   switch (action.type) {
//     case "artady":
//       return{
//           ...state,
//           count: state.count + 1,
//       }

//     case "kemidy":  
//       return{
//         ...state,
//         count: state.count - 1,
//       }
//       case "brik":
//         return{
//           ...state,
//           count: 0,
//         }
//      default:
//       return state
//   }
// }

// export default function App() {
//   const [state,dispatch]=useReducer(reducer,initialState)
//   return (
//     <div>
//       <h1>Счетчик: {state.count}</h1>
//       <button onClick={() => dispatch({ type: "artady" })}>Увеличить</button>
//       <button onClick={() => dispatch({ type: "kemidy" })}>Уменьшить</button>
//       <button onClick={() => dispatch({ type: "brik" })}>Сбросить</button>
//     </div>
//   )
// }




// let initialState = {
//   language: 'en'
// }

// function reducer(state,action) {
//   switch(action.type){
//     case "til_austyr":
//       return {
//         language: action.payload
//       }
//       default:
//         return state
//   }
// }
// export default function App() {
//   const [state,dispatch]=useReducer(reducer,initialState)
//   return (
//     <LanguageContex.Provider value={{state, dispatch}}>
//       <LanguageSwitcher/>
//       <Content/>
//     </LanguageContex.Provider>
//   )
// }
 