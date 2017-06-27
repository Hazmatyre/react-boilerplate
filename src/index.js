import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();

// var GreeterMessage = React.createClass({
//   render: function() {
//     var name = this.props.name
//     var message = this.props.message
//     return (
//       <div>
//         <h1>Hello {name}!</h1>
//         <p>{message}</p>
//       </div>
//     );
//   },
// })
//
// var GreeterForm = React.createClass({
//   onFormSubmit: function(e) {
//     e.preventDefault();
//     let name = this.refs.name.value;
//     let message = this.refs.message.value;
//     var updates = {};
//     if (name.length > 0) {
//       updates.name = name;
//       this.refs.name.value = '';
//     }
//     console.log(updates);
//     if (message.length > 0) {
//       updates.message = message;
//       this.refs.message.value = '';
//     }
//     console.log(updates);
//     this.props.onNewForm(updates)
//   },
//   render: function() {
//     return (
//       <form onSubmit={this.onFormSubmit}>
//         <div>
//           <input type="text" ref="name" placeholder="Enter name"/>
//         </div>
//         <div>
//           <textarea type="text" ref="message" placeholder="Enter message"/>
//         </div>
//         <div>
//           <button>Submit</button>
//         </div>
//       </form>
//     );
//   }
// })
//
// var Greeter = React.createClass({
//   getDefaultProps: function() {
//     return {
//       name: 'React',
//       message: 'What a load of bologne!'
//     }
//   },
//   getInitialState: function() {
//     return {
//       name: this.props.name,
//       message: this.props.message
//     }
//   },
//   handleNewForm: function (updates) {
//     this.setState(updates);
//   },
//   render: function() {
//     var message = this.state.message;
//     var name = this.state.name;
//     return (
//       <div>
//         <GreeterMessage name={name} message={message}/>
//         <GreeterForm onNewForm={this.handleNewForm}/>
//       </div>
//     );
//   }
// })
//
// ReactDOM.render(
//  <Greeter/>,
//  document.getElementById('app')
// )
