class JSXDemo extends React.Component {
	render() {
		return (
    <div>
      <h1>Image</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"/>
    </div>
    );
	}
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'));

// class JSXDemo extends React.Component {
//   render() {
//     return(
//       <img src="https://www.pexels.com/photo/photo-of-ocean-and-sky-1370725/" />
//     );
//   }
// }

// ReactDOM.render(<JSXDemo/>, document.getElementById('root'));