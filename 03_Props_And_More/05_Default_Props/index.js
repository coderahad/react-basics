class App extends React.Component {
	render() {
		return (
			<div>
        <Hello
          to="Rin"
          from="Papu"
          bangs={3}
        />
        <Hello
          to="CHang"
        />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));