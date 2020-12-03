import './App.css';
import {connect} from 'react-redux'

function App(props) {
  console.log(props.t)
  return (
    <div className="App">

    </div>
  );
}
const mapStateToProps = (state) => ({
 t: state.todos
})

export default connect(mapStateToProps)(App);
