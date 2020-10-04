class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
			</div>
		);
	}
}

// function Hello() {
// 	return (
// 		<div>
// 			<h1>Hello there!</h1>
// 			<h1>He there!</h1>
// 			<h1>Hello there!</h1>
// 			<p>Gentellela</p>
// 		</div>
// 	)
// }


ReactDOM.render(<Hello />, document.getElementById('root'));
