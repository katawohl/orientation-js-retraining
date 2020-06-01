import React from 'react'
import TeaDetails from './TeaDetails'
import MainButton from './MainButton'

class TeaApp extends React.Component {
    state = {
        showTeas: false,
      };

    render() {
        const showTeasAction = () => this.setState({showTeas: true});
        return (
            <div className="mainDiv" >
                <h1>Delicious Delights</h1>
                <MainButton onClickFunction={showTeasAction} />
                { this.state.showTeas && (<TeaDetails/>) }
            </div>
      
        )
      }
}

export default TeaApp