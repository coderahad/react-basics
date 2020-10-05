class Hello extends React.Component {
	render() {
		const props = this.props;
		console.log(props);
		return (
		<p>Hi {props.to} From {props.from} </p>
		);
	}
}
