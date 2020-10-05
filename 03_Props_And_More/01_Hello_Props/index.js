class App extends React.Component {
  render() {
    return(
      <div>
        <Hello to="James" from="Phillip"/>
        <Hello to="Margaret" from="Rheiger" then="wendy"/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));