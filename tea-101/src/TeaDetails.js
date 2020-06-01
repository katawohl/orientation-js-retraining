import React from 'react'
import ImageContent from './ImageContent'
import OpinionButton from './OpinionButton'

class TeaDetails extends React.Component {
    render() {
        return (
        <div className="secondaryDiv">
            <h2>Tea 101</h2>
            <div className="contentDiv">
                <div className="buttonDiv">
                    <button className="teaButton">Some text here</button>
                    <button className="teaButton">Some text here</button>
                    <button className="teaButton">Some text here</button>
                    <button className="teaButton">Some text here</button>
                </div>
                <div className="parDiv">
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet congue laoreet. Nunc euismod purus ac justo mollis pulvinar. Vivamus volutpat urna nisi, at congue lorem fermentum ac. Morbi sit amet nunc non orci convallis posuere eu vel diam. Vestibulum facilisis condimentum quam, sed consectetur purus pulvinar a. Praesent non eros rhoncus, ultricies quam vitae, vestibulum diam. Praesent nec dolor lectus.</p>

                    <p>Nulla et arcu et urna tempus cursus et at nibh. Morbi ornare augue eu urna tempor, non tincidunt nisl ullamcorper. Suspendisse sit amet diam massa. Quisque vitae rhoncus lectus. Nulla efficitur elit viverra accumsan hendrerit. Quisque sit amet nisl sed est malesuada ornare a ac metus. Suspendisse placerat mauris quis purus tempus facilisis. Aenean tristique sem in luctus congue. Nunc et elit erat. Nunc nec turpis condimentum, tincidunt tellus in, cursus ipsum. Vivamus pharetra velit eu tortor fringilla congue. Ut id cursus lorem. Nunc pulvinar, est vel pharetra varius, nunc neque pretium odio, eu lacinia nibh turpis id dui. Proin dui urna, pellentesque vitae purus et, feugiat suscipit justo. Proin at lacinia felis, eu ultrices orci.</p>
                </div>      
            </div> 
            <ImageContent />
            <OpinionButton />
        </div>
        );
    }
}

export default TeaDetails