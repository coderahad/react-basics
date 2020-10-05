class App extends React.Component {
	render() {
		return (
			<div>
        <Hello
          to="Ringo"
          from="Papul"
          num={3}
          data={[1,2,3,4,5]}
          isFun 
        />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));