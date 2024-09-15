import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

const WIDTH = 5;
const HEIGHT = 5;

const Board = ({ width = WIDTH, height = HEIGHT }) => {
  const [grid, setGrid] = useState(() => {
    const array = [];
    let i;
    let j;
    for (i = 0; i < height; i++) {
      const row = [];
      for (j = 0; j < width; j++) {
        row.push({ state: false, x: i, y: j });
      }
      array.push(row);
    }
    return array;
  });

  const changeState = (state, x, y ) => {
    console.log('----- Clicked a button -----');
    const indices = [
      [x, y], // center
      [x - 1, y], // up
      [x + 1, y], // down
      [x, y + 1], // right
      [x, y - 1], // left
    ];
    const new_grid = [...grid];
    for (let i = 0; i < indices.length; i++) {
      let iX = indices[i][0];
      let iY = indices[i][1];
      if (iX >= 0 && iX < WIDTH && iY >= 0 && iY < WIDTH) {
        new_grid[iX][iY].state = !(new_grid[iX][iY].state);
      }
    }

    setGrid(() => new_grid);
  };

  const checkWin = () => {
    console.log("Checked if won!");
    // loops through every object in grid
    for(let i = 0; i<grid.length; i++){
      for(let j = 0; j<i.length; j++){
        // if objects state isn't true, returns false will keep game running
        if(!grid[i][j].state) return false;

      }
    }
    // returns true if nested for loop can't find false; ends game
    return true;
  }

  return (
    <div className="Board">
      <h1>
        <i>Lights Out!</i>
      </h1>
      {checkWin() ? <div className="Board-grid">
        {grid.map((row) =>
          row.map((obj) => (
            <Cell
              changeState={() => changeState(obj.state, obj.x, obj.y)}
              state={obj.state}
              x={obj.x}
              y={obj.y}
            />
          ))
        )}
      </div> : <h1>You Won!</h1>}
    </div>
  );
};

export default Board;
