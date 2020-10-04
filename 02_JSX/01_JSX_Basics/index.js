function getMood() {
  const moods= ['Angry', 'Hungry', 'Silly', 'Agony', 'Quiet', 'Paranoid'];
  return moods[Math.floor(Math.random() * moods.length)];
}


class JSXDemo extends React.Component {
	render() {
		return (
    <div>
      <h1>My Current Mood Is: {getMood()}</h1>
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