import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/nqueens.css';

var SpeedTime = 600;
function N_Queen() {
    const [grid,setGrid] = useState([]);
    const [gridSize, setGridSize] = useState(4);
    const [speed, setSpeed] = useState(600);

    useEffect(()=>{
        gridInit();
    },[gridSize]);

    const gridInit = () =>{
        grid.forEach((row,i)=>{
            row.forEach((v,j)=>{
                    if((i+j)%2===0) document.getElementById(`cell-${i}-${j}`).classList = "queen-cell gray-cell";
                    else document.getElementById(`cell-${i}-${j}`).classList = "queen-cell";
                })
        })
        let grid1 = new Array(gridSize);
        for(let i=0; i<gridSize; i++) grid1[i] = new Array(gridSize).fill(false);
        setGrid(grid1);
    }

    var isSafe = async (r,c)=>{
        var flag = 1;
        // row-wise
        for(let j=0; j<c; j++){
            if(grid[r][j]){
                flag = 0;
                document.getElementById(`cell-${r}-${j}`).classList = "queen-cell queen-img red-cell";
            }
            else document.getElementById(`cell-${r}-${j}`).classList = "queen-cell blue-cell";
        }
        for(let j=c+1; j<gridSize; j++){
            if(grid[r][j]){
                flag = 0;
                document.getElementById(`cell-${r}-${j}`).classList = "queen-cell queen-img red-cell";
            }
            else document.getElementById(`cell-${r}-${j}`).classList = "queen-cell blue-cell";
        }
        // col-wise
        for(let i=0; i<r; i++){
            if(grid[i][c]){
                flag = 0;
                document.getElementById(`cell-${i}-${c}`).classList = "queen-cell queen-img red-cell";
            }
            else document.getElementById(`cell-${i}-${c}`).classList = "queen-cell blue-cell";
        }
        for(let i=r+1; i<gridSize; i++){
            if(grid[i][c]){
                flag = 0;
                document.getElementById(`cell-${i}-${c}`).classList = "queen-cell queen-img red-cell";
            }
            else document.getElementById(`cell-${i}-${c}`).classList = "queen-cell blue-cell";
        }
        // right diagonal
        for(let i=r+1,j=c+1; i<gridSize && j<gridSize; i++,j++){
            if(grid[i][j]){
                flag = 0;
                document.getElementById(`cell-${i}-${j}`).classList = "queen-cell queen-img red-cell";
            }
            else document.getElementById(`cell-${i}-${j}`).classList = "queen-cell blue-cell";
        }
        for(let i=r-1,j=c-1; i>=0 && j>=0; i--,j--){
            if(grid[i][j]){
                flag = 0;
                document.getElementById(`cell-${i}-${j}`).classList = "queen-cell queen-img red-cell";
            }
            else document.getElementById(`cell-${i}-${j}`).classList = "queen-cell blue-cell";
        }
        // left diagonal 
        for(let i=r+1,j=c-1; i<gridSize && j>=0; i++,j--){
            if(grid[i][j]){
                flag = 0;
                document.getElementById(`cell-${i}-${j}`).classList = "queen-cell queen-img red-cell";
            }
            else document.getElementById(`cell-${i}-${j}`).classList = "queen-cell blue-cell";
        }
        for(let i=r-1,j=c+1; i>=0 && j<gridSize; i--,j++){
            if(grid[i][j]){
                flag = 0;                
                document.getElementById(`cell-${i}-${j}`).classList = "queen-cell queen-img blue-cell";
            }
            else document.getElementById(`cell-${i}-${j}`).classList = "queen-cell blue-cell";
        }

        await waitForAnimatoin(SpeedTime);
        // ------------------------- undo ---------------------------
        // row-wise 
        for(let j=0; j<c; j++){
            if(grid[r][j]) document.getElementById(`cell-${r}-${j}`).classList = "queen-cell queen-img green-cell";
            else if((r+j)%2===0) document.getElementById(`cell-${r}-${j}`).classList = "queen-cell gray-cell";
            else document.getElementById(`cell-${r}-${j}`).classList = "queen-cell";
        }
        for(let j=c+1; j<gridSize; j++){
            if(grid[r][j]) document.getElementById(`cell-${r}-${j}`).classList = "queen-cell queen-img green-cell";
            else if((r+j)%2===0) document.getElementById(`cell-${r}-${j}`).classList = "queen-cell gray-cell";
            else document.getElementById(`cell-${r}-${j}`).classList = "queen-cell";
        }
        // col-wise 
        for(let i=0; i<r; i++){
            if(grid[i][c]) document.getElementById(`cell-${i}-${c}`).classList = "queen-cell queen-img green-cell";
            else if((i+c)%2===0) document.getElementById(`cell-${i}-${c}`).classList = "queen-cell gray-cell";
            else document.getElementById(`cell-${i}-${c}`).classList = "queen-cell";
        }
        for(let i=r+1; i<gridSize; i++){
            if(grid[i][c]) document.getElementById(`cell-${i}-${c}`).classList = "queen-cell queen-img green-cell";
            else if((i+c)%2===0) document.getElementById(`cell-${i}-${c}`).classList = "queen-cell gray-cell";
            else document.getElementById(`cell-${i}-${c}`).classList = "queen-cell";
        }
        // right diagonal
        for(let i=r+1,j=c+1; i<gridSize && j<gridSize; i++,j++){
            if(grid[i][j]) document.getElementById(`cell-${i}-${j}`).classList = "queen-cell queen-img green-cell";
            else if((i+j)%2===0) document.getElementById(`cell-${i}-${j}`).classList = "queen-cell gray-cell";
            else document.getElementById(`cell-${i}-${j}`).classList = "queen-cell";
        }
        for(let i=r-1,j=c-1; i>=0 && j>=0; i--,j--){
            if(grid[i][j]) document.getElementById(`cell-${i}-${j}`).classList = "queen-cell queen-img green-cell";
            else if((i+j)%2===0) document.getElementById(`cell-${i}-${j}`).classList = "queen-cell gray-cell";
            else document.getElementById(`cell-${i}-${j}`).classList = "queen-cell";
        }
        // left diagonal 
        for(let i=r+1,j=c-1; i<gridSize && j>=0; i++,j--){
            if(grid[i][j]) document.getElementById(`cell-${i}-${j}`).classList = "queen-cell queen-img green-cell";
            else if((i+j)%2===0) document.getElementById(`cell-${i}-${j}`).classList = "queen-cell gray-cell";
            else document.getElementById(`cell-${i}-${j}`).classList = "queen-cell";
        }
        for(let i=r-1,j=c+1; i>=0 && j<gridSize; i--,j++){
            if(grid[i][j]) document.getElementById(`cell-${i}-${j}`).classList = "queen-cell queen-img green-cell";
            else if((i+j)%2===0) document.getElementById(`cell-${i}-${j}`).classList = "queen-cell gray-cell";
            else document.getElementById(`cell-${i}-${j}`).classList = "queen-cell";
        }
        return flag;
    }

    var n_queen = async (c,q) =>{
        if(c>=gridSize || q>=gridSize){
            return q>=gridSize;
        }
        for(var r=0; r<gridSize; r++){
            document.getElementById(`cell-${r}-${c}`).classList = "queen-cell queen-img yellow-cell";
            await waitForAnimatoin(SpeedTime);
            
            if(await isSafe(r,c)){
                document.getElementById(`cell-${r}-${c}`).classList = "queen-cell queen-img green-cell";
                grid[r][c] = true;
                if(await n_queen(c+1,q+1)) return true;
                
                // backtrack
                grid[r][c] = false;
                if((r+c)%2===0) document.getElementById(`cell-${r}-${c}`).classList = "queen-cell gray-cell";
                else document.getElementById(`cell-${r}-${c}`).classList = 'queen-cell';
            }
            else if((r+c)%2===0) document.getElementById(`cell-${r}-${c}`).classList = "queen-cell gray-cell";
            else document.getElementById(`cell-${r}-${c}`).classList = 'queen-cell';
        }
        return false;
    }

    const startHandle = async () =>{
        document.getElementsByTagName('button')[0].disabled = true;
        document.getElementsByTagName('button')[1].disabled = true;
        document.getElementById('gridSizeRange').disabled = true;
        await n_queen(0,0);
        document.getElementsByTagName('button')[0].disabled = false;
        document.getElementsByTagName('button')[1].disabled = false;
        document.getElementById('gridSizeRange').disabled = false;
    }

    const timeHandle = (e) =>{
        let value = parseInt(e.target.value);
        SpeedTime = value;
        setSpeed(value);
    }

  return (
    <>
        <Navbar msg='N queens'></Navbar>
        <div className='queen_contianer'>
            <div className='queen_header'>
                <div>
                    <div>
                        <button onClick={startHandle} className='button-4 start-btn queen_btn'>Start Visualize</button>
                        <button onClick={()=>{gridInit()}} className='button-4 queen_btn'>Clear Board</button>
                    </div>
                </div>
                <div>
                    <div className='queen_range'>
                        <div className='queenlabel'>
                            Speed:
                        </div>
                        <div>
                            <input type='range' onChange={timeHandle} value={speed} min='120' max='1200' id='speedRange'></input>
                        </div>
                    </div>
                    <div className='queen_range'>
                        <div className='queenlabel'>
                            Size:
                        </div>
                        <div>
                            <input type='range' onChange={(e)=>{setGridSize(parseInt(e.target.value))}} value={gridSize} min='3' max='8' step='1' id='gridSizeRange'></input>
                        </div>
                    </div>
                </div>
            </div>
            {grid.map((row,i)=>{
            return (<div key={i} className='queen-row'>
                        {row.map((v,j)=>{
                                if((i+j)%2===0) return <div id={`cell-${i}-${j}`} key={j} className='queen-cell gray-cell'></div>
                                return <div id={`cell-${i}-${j}`} key={j} className='queen-cell'></div>
                            })
                        }
                </div>)
            })}
            <div className='info'>
            <h3>What is N-Queen Problem?</h3>
            <p className='txt'>The N-Queens problem is a classic combinatorial problem in which the goal is to place N chess queens on an NXN chessboard so that no two queens threaten each other. In other words, no two queens can share the same row, column, or diagonal.</p>
            <h3>Solution</h3>
            <p className='txt'>Solving the N-Queens problem typically involves finding all possible configurations of queens on the chessboard that satisfy the constraints. Various algorithms, such as backtracking, can be used to find solutions. The total number of solutions depends on the value of N and can be computed for different board sizes.</p>

        </div>
        </div>
    </>
  )
}

async function waitForAnimatoin(times){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('');
        },times)
    })
}
export default N_Queen;