import React, { Component } from "react";
import { randBool, randNum, displayFlex } from "./helpers";
import Cell from "./Cell";
import "./Board.css";

class Board extends Component {
    static defaultProps = { nRows: 5, nCols: 5, chanceOfLitOn: 0.35 };

    constructor(props) {
        super(props);
        this.state = { onMenu: false, cellsBoard: this.createBoard(), hasWon: false };
    }

    createBoard = () => {
        let board = [];
        for (let i = 0; i < this.props.nRows; i++) {
            let row = [];
            for (let j = 0; j < this.props.nCols; j++) {
                row.push(Math.random() < this.props.chanceOfLitOn);
            }
            board.push(row);
        }
        return board;
    };

    flipCells = (x, y) => {
        let board = this.state.cellsBoard;
        let newBoard = board.map((row, rIdx) => {
            return row.map((col, cIdx) => {
                if (`${x - 1}-${y}` == `${rIdx}-${cIdx}` || `${x}-${y - 1}` == `${rIdx}-${cIdx}` || `${x}-${y}` == `${rIdx}-${cIdx}` || `${x}-${y + 1}` == `${rIdx}-${cIdx}` || `${x + 1}-${y}` == `${rIdx}-${cIdx}`) {
                    return !board[rIdx][cIdx];
                } else {
                    return col;
                }
            });
        });
        let hasWon = newBoard.every((row) => row.every((col) => !col));
        this.setState({ cellsBoard: newBoard, hasWon: hasWon });
    };

    /** Render game board or winning message. */

    render() {
        let cells = this.state.cellsBoard.map((row, rIdx) => {
            return row.map((col, cIdx) => {
                return <Cell isLit={col} key={`${rIdx}-${cIdx}`} winClass={this.state.hasWon && 'winBounce'} flipCells={this.flipCells} id={`${rIdx}-${cIdx}`} />;
            });
        });

        return (
            <div className="top flex">
                <div className="game">
                    <div className="head flex">
                        <div className="neon-orange" style={displayFlex(!this.state.hasWon)}>
                            Lights
                        </div>{" "}
                        <div className="neon-blue" style={displayFlex(!this.state.hasWon)}>
                            Out
                        </div>
                        <div className="neon-orange" style={displayFlex(this.state.hasWon)}>
                            You
                        </div>{" "}
                        <div className="neon-blue" style={displayFlex(this.state.hasWon)}>
                            Won!
                        </div>
                    </div>
                    <div className="Board">{cells}</div>
                </div>
            </div>
        );
    }
}

export default Board;
