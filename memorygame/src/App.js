import React, { Component } from 'react';

let selectedsquare = {
    style: {
        backgroundColor: 'blue',
        height: '100px',
        width: '100px',
        float: 'left',
        border: 'solid black',
        borderSize: '2px'
    }
};

let square = {
    style: {
        backgroundColor: 'lightGray',
        height: '100px',
        width: '100px',
        float: 'left',
        border: 'solid black',
        borderSize: '2px'
    }
};

let missedsquare = {
    style: {
        backgroundColor: 'yellow',
        height: '100px',
        width: '100px',
        float: 'left',
        border: 'solid black',
        borderSize: '2px'
    }
};

let incorrsquare = {
    style: {
        backgroundColor: 'red',
        height: '100px',
        width: '100px',
        float: 'left',
        border: 'solid black',
        borderSize: '2px'
    }
};

let corrsquare = {
    style: {
        backgroundColor: 'green',
        height: '100px',
        width: '100px',
        float: 'left',
        border: 'solid black',
        borderSize: '2px'
    }
};

let infobox = {
    style: {
        backgroundColor: 'white',
        height: '50px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid black'
    }
};

let infoboxbutton = {
    style: {
        backgroundColor: 'white',
        height: '25px',
        width: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'solid black',
        position: 'relative',
        margin: '0 auto'
    }
};

let titlebox = {
    style: {
        backgroundColor: 'white',
        height: '50px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2em'
    }
};

let gamebox = {
    style: {
        backgroundColor: 'black',
        height: '315px',
        width: '425px',
        float: 'left',
        border: 'solid black'
    }
};

let outercontainer = {
    style: {
        backgroundColor: 'white',
        marginLeft: '100px'
    }
};

const Squares = props => {
    const { boardstate, onClick, findbox, userselect } = props;
    switch (boardstate) {
        case 'uninitialized':
            return <div style={square.style} />;
        case 'unrevealed':
            return <div style={square.style} />;
        case 'memorize':
            return <div style={findbox ? selectedsquare.style : square.style} />;
        case 'guess':
            return <div onClick={onClick} style={square.style} />;
        case 'check':
            if (findbox === true && userselect === true) {
                return <div style={corrsquare.style} />;
            } else if (findbox === false && userselect === false) {
                return <div style={square.style} />;
            } else if (findbox === true && userselect === false) {
                return <div style={missedsquare.style} />;
            } else if (findbox === false && userselect === true) {
                return <div style={incorrsquare.style} />;
            }
        default:
            throw new Error('Something happened - value = ' + boardstate);
    }
};

const Footer = props => {
    const { onClick, timer } = props;
    switch (props.boardstate) {
        case 'uninitialized':
            return (
                <button style={infoboxbutton.style} onClick={onClick}>
                    Start Game
                </button>
            );
        case 'unrevealed':
            return (
                <div style={infobox.style}>
                    Get ready to memorize in <button onClick={onClick}>Next</button>
                </div>
            );
        case 'memorize':
            return (
                <div style={infobox.style}>
                    <button onClick={onClick}>Next</button>
                </div>
            );
        case 'guess':
            return (
                <div style={infobox.style}>
                    Guess the correct cells <button onClick={onClick}>Next</button>
                </div>
            );
        case 'check':
            return (
                <div onClick={onClick} style={infoboxbutton.style}>
                    Play again?
                </div>
            );
        default:
            throw new Error('Something happened - value = ' + props.boardstate);
    }
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boxes: [
                { id: 0, findbox: true, userselect: false },
                { id: 1, findbox: false, userselect: false },
                { id: 2, findbox: false, userselect: false },
                { id: 3, findbox: true, userselect: false },
                { id: 4, findbox: false, userselect: false },
                { id: 5, findbox: false, userselect: false },
                { id: 6, findbox: false, userselect: false },
                { id: 7, findbox: true, userselect: false },
                { id: 8, findbox: false, userselect: false },
                { id: 9, findbox: false, userselect: false },
                { id: 10, findbox: false, userselect: false },
                { id: 11, findbox: true, userselect: false }
            ],
            boardstate: 'uninitialized',
            timer: 3
        };
    }

    randomInitiator() {
        const { boxes } = this.state;

        //
        // let num = 0,
        //     i = 0;
        // while (i < 4) {
        //     num = Math.floor(Math.random() * 12);
        //     boxes.splice(num, 1, { id: num, findbox: true, userselect: false });
        // }
    }

    handleChange(currentState) {
        const { boxes } = this.state;
        const changedBox = boxes.filter(box => box.id === currentState.id);
        boxes.splice(currentState.id, 1, { id: currentState.id, findbox: currentState.findbox, userselect: true });
        this.setState({
            boxes
        });
    }
    updateBoardState() {
        let newState = '';
        switch (this.state.boardstate) {
            case 'uninitialized':
                newState = 'unrevealed';
                break;
            case 'unrevealed':
                this.randomInitiator();
                newState = 'memorize';
                break;
            case 'memorize':
                newState = 'guess';
                break;
            case 'guess':
                newState = 'check';
                break;
            case 'check':
                newState = 'unrevealed';
                break;
            default:
                throw new Error('Something happened');
        }
        this.setState({ boardstate: newState });
    }

    render() {
        const { colorPhase, boardstate, boxes } = this.state;
        const boxArr = boxes.map(box => (
            <Squares
                key={'key-' + box.id}
                id={box.id}
                userselect={box.userselect}
                findbox={box.findbox}
                boardstate={boardstate}
                onClick={() => this.handleChange(box)}
            />
        ));

        return (
            <div style={outercontainer.style}>
                <div style={titlebox.style}>Memory Game</div>
                <div style={gamebox.style}>{boxArr}</div>
                <Footer style={infobox.style} boardstate={boardstate} onClick={() => this.updateBoardState()} />
            </div>
        );
    }
}

export default App;
