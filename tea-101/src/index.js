import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import img from './img.jpg';

const Button = (props) => (
<button class="mainButton" onClick={props.onClickFunction}>Check 'em out!</button>
);

const ImageContent = () => (
<div className="imgDiv">
                <img class="roundImg" alt="image of CEO" src={img}></img>
                <div class="imgText">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>                
            </div>
);

class TeaDetails extends React.Component {
    render() {
        return (
        <div class="secondaryDiv">
            <h2>Tea 101</h2>
            <div class="contentDiv">
                <div class="buttonDiv">
                    <button class="teaButton">Some text here</button>
                    <button class="teaButton">Some text here</button>
                    <button class="teaButton">Some text here</button>
                    <button class="teaButton">Some text here</button>
                </div>
                <div class="parDiv">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet congue laoreet. Nunc euismod purus ac justo mollis pulvinar. Vivamus volutpat urna nisi, at congue lorem fermentum ac. Morbi sit amet nunc non orci convallis posuere eu vel diam. Vestibulum facilisis condimentum quam, sed consectetur purus pulvinar a. Praesent non eros rhoncus, ultricies quam vitae, vestibulum diam. Praesent nec dolor lectus.</p>

                    <p>Nulla et arcu et urna tempus cursus et at nibh. Morbi ornare augue eu urna tempor, non tincidunt nisl ullamcorper. Suspendisse sit amet diam massa. Quisque vitae rhoncus lectus. Nulla efficitur elit viverra accumsan hendrerit. Quisque sit amet nisl sed est malesuada ornare a ac metus. Suspendisse placerat mauris quis purus tempus facilisis. Aenean tristique sem in luctus congue. Nunc et elit erat. Nunc nec turpis condimentum, tincidunt tellus in, cursus ipsum. Vivamus pharetra velit eu tortor fringilla congue. Ut id cursus lorem. Nunc pulvinar, est vel pharetra varius, nunc neque pretium odio, eu lacinia nibh turpis id dui. Proin dui urna, pellentesque vitae purus et, feugiat suscipit justo. Proin at lacinia felis, eu ultrices orci.</p>
                </div>      
            </div> 
            <ImageContent />
            <button class="opinionBtn">Leave an opinion</button>
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

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
);