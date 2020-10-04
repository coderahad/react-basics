class JSXDemo extends React.Component {
	render() {
		return (
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, "Image"), /*#__PURE__*/
      React.createElement("img", {
        src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
      }))
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