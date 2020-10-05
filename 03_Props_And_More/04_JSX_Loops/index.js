class App extends React.Component {
	render() {
		return (
			<div>
        <Friend
          name="Eric"
          hobbies={["reading", "swimming", "writing"]} 
        />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));