import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => (
<button class="mainButton" onClick={props.onClickFunction}>Check 'em out!</button>
);

class TeaDetails extends React.Component {
    render() {
        return (
        <div class="secondaryDiv">
            <h2>Tea 101</h2>
            <button class="teaButton">Some text here</button>
            <button class="teaButton">Some text here</button>
            <button class="teaButton">Some text here</button>
            <button class="teaButton">Some text here</button>
        </div>
        );
    }
}

class App extends React.Component {
    state = {
        showTeas: false,
      };

    render() {
        const showTeasAction = () => this.setState({showTeas: true});
        return (
            <div class="mainDiv" >
                <h1>Delicious Delights</h1>
                <Button onClickFunction={showTeasAction} />
                { this.state.showTeas && (<TeaDetails/>) }
            </div>
      
        )
      }
}

/*const App = () => (
    const [showTeas, setShowTeas] = useState(false);

    <div class="mainDiv" >
        <h1>Delicious Delights</h1>
        <Button onClickFunction= />
    </div>
);
*/

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);