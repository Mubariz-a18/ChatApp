// import React, { useState } from 'react'

// function Test() {
//     const [val,setVal] = useState({
//         username:"",
//         password:""
//     })

//     const handleChange = (evt)=>{
//         setVal((prevData)=>({...prevData,[evt.target.name]:evt.target.value}))
//     }

//     const handleSubmit = (evt)=>{
//         evt.preventDefault();
//         console.log(val)
//     }

//  return <>
//     <form onSubmit={handleSubmit}>
//         <input type="text" placeholder='username' name='username' onChange={handleChange}  />
//         <input type="password" placeholder='password' name='password' onChange={handleChange}  />
//         <button type='submit'>login</button>
//     </form>
//  </>
// }

// export default Test






// import React, { Component } from 'react';

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   increment = () => {
//     // Using setState to update the state
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }

// export default Counter;




// class Login extends Component {
//     constructor(){
//         super()
//         this.state ={
//             username:"",
//             password:"",
//             isLogin:false
//         }
//     }

//     handleChange = (e)=>{
//         const {name,value} = e.target
//         this.setState({
//             [name]:value
//         })
//     }


//     onLogin =()=>{
//         const {username,password} = this.state;
//         if(username === "mubariz" && password === "pass"){
//             this.setState({
//                 isLogin:true
//             })

//         }
//     }



//     render() { 
//         const {username,isLogin} = this.state
//         if(isLogin){
//             return <div>hello {username}</div>
//         }
//         return (<>
//             <input type="text" name="username" placeholder='username' onChange={this.handleChange} />
//             <input type="password" name="password" placeholder='password' onChange={this.handleChange} />
//             <button onClick={this.onLogin}>login</button>
//         </>

//         );
//     }
// }

// export default Login;




// useContext


// import React, { useReducer } from 'react'

// function reducer(state, action) {
//     switch (action.type) {
//         case "inc":
//             return { count: state.count + 1 }

//         case "dec":
//             return { count: state.count - 1 }
//     }
// }

// function Test() {
//     const [state, dispatch] = useReducer(reducer, { count: 0 })

//     return (<>
//         <buton onClick={() => dispatch({ type: "inc" })}>inc</buton>
//         <div>{state.count}</div>
//         <buton onClick={() => dispatch({ type: "dec" })}>dec</buton>
//     </>
//     )
// }

// export default Test

