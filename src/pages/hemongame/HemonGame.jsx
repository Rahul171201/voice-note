import './hemongame.css';
import Navbar from '../../components/Navbar/Navbar';
import { useEffect, useState, useRef } from "react";

export default function HemonGame() {
    const position = useRef([1, 1]);
    const noOfDiamonds = useRef(1);
    const x_of_diamonds = useRef([5]);
    const y_of_diamonds = useRef([5]);
    const level = useRef(1);
    const total_score = useRef(0);
    const required_score = useRef(0);
    const is_visited = useRef([false]);

    const createElement = (row, column, url) => {
        if (row < 1 || row > 5 || column < 1 || column > 5) {
            return;
        }
        removeElement(position.current[0], position.current[1]);
        const id = row.toString() + '_' + column.toString();
        const currentDiv = document.getElementById(id);
        const child = document.createElement("img");
        child.setAttribute("src", url);
        child.style.width = "50px";
        child.style.height = "50px";
        currentDiv.style.display = "flex";
        currentDiv.style.justifyContent = "center";
        currentDiv.style.alignItems = "center";
        currentDiv.append(child);
        position.current = [row, column];
    }

    const removeElement = (row, column) => {
        if (row < 1 || row > 5 || column < 1 || column > 5) {
            return;
        }
        const id = row.toString() + '_' + column.toString();
        const currentDiv = document.getElementById(id);
        currentDiv.innerHTML = '';
    }

    const check_diamond = (row, column) => {
        for (let i = 0; i < is_visited.length; i++) {
            if (!is_visited[i] && x_of_diamonds[i] === row && y_of_diamonds[i] === column) {
                total_score.current = total_score.current + 100;
            }
        }
    }

    // to put back the hemon on position 1,1 at initial point
    const isReset = () => {
        const currentDiv = document.getElementById("1_1");
        return (currentDiv.innerHTML !== '');
    }

    useEffect(() => {
        createElement(position.current[0], position.current[1], "/assets/robot.jfif");
    }, []);


    window.addEventListener("keydown", (e) => {
        total_score.current = total_score.current - 1;
        if (isReset()) {
            position.current = [1, 1];
            level.current = 1;
            total_score.current = 0;
            required_score.current = 0;
            noOfDiamonds.current = 1;
            x_of_diamonds.current = [5];
            y_of_diamonds.current = [5];
        }
        if (e.key === "ArrowUp") {
            createElement(position.current[0] - 1, position.current[1], "/assets/robot.jfif");
        }
        else if (e.key === "ArrowDown") {
            createElement(position.current[0] + 1, position.current[1], "/assets/robot.jfif");
        }
        else if (e.key === "ArrowLeft") {
            createElement(position.current[0], position.current[1] - 1, "/assets/robot.jfif");
        }
        else if (e.key === "ArrowRight") {
            createElement(position.current[0], position.current[1] + 1, "/assets/robot.jfif");
        }
        e.stopImmediatePropagation();
    });

    return (
        <div className="mainbox">
            <Navbar></Navbar>
            <div className='gameBox'>
                <div className='headerBox'>
                    <div className='heading'><span>Level</span><span>{level.current}</span></div>
                    <div className='heading'><span>Scored Points</span><span>{total_score.current}</span></div>
                    <div className='heading'><span>Level Points</span><span>{required_score.current}</span></div>
                </div>
                <div className='matrix'>
                    <div id="row_1" className='row'>
                        <div id="1_1" className='column'></div>
                        <div id="1_2" className='column'></div>
                        <div id="1_3" className='column'></div>
                        <div id="1_4" className='column'></div>
                        <div id="1_5" className='column'></div>
                    </div>
                    <div id="row_2" className='row'>
                        <div id="2_1" className='column'></div>
                        <div id="2_2" className='column'></div>
                        <div id="2_3" className='column'></div>
                        <div id="2_4" className='column'></div>
                        <div id="2_5" className='column'></div>
                    </div>
                    <div id="row_3" className='row'>
                        <div id="3_1" className='column'></div>
                        <div id="3_2" className='column'></div>
                        <div id="3_3" className='column'></div>
                        <div id="3_4" className='column'></div>
                        <div id="3_5" className='column'></div>
                    </div>
                    <div id="row_4" className='row'>
                        <div id="4_1" className='column'></div>
                        <div id="4_2" className='column'></div>
                        <div id="4_3" className='column'></div>
                        <div id="4_4" className='column'></div>
                        <div id="4_5" className='column'></div>
                    </div>
                    <div id="row_5" className='row'>
                        <div id="5_1" className='column'></div>
                        <div id="5_2" className='column'></div>
                        <div id="5_3" className='column'></div>
                        <div id="5_4" className='column'></div>
                        <div id="5_5" className='column'></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

