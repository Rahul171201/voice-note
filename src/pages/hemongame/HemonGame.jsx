import './hemongame.css';
import Navbar from '../../components/Navbar/Navbar';
import { useEffect, useState, useRef } from "react";

export default function HemonGame() {
    const position = useRef([1, 1]);

    const createRobot = (row, column) => {
        if (row < 1 || row > 5 || column < 1 || column > 5) {
            return;
        }
        removeRobot(position.current[0], position.current[1]);
        const id = row.toString() + '_' + column.toString();
        const currentDiv = document.getElementById(id);
        const child = document.createElement("img");
        child.setAttribute("src", "/assets/robot.jfif");
        child.style.width = "50px";
        child.style.height = "50px";
        currentDiv.style.display = "flex";
        currentDiv.style.justifyContent = "center";
        currentDiv.style.alignItems = "center";
        currentDiv.append(child);
        position.current = [row,column];
    }

    const removeRobot = (row, column) => {
        if (row < 1 || row > 5 || column < 1 || column > 5) {
            return;
        }
        const id = row.toString() + '_' + column.toString();
        const currentDiv = document.getElementById(id);
        currentDiv.innerHTML = '';
    }

    useEffect(() => {
        createRobot(position.current[0], position.current[1]);
    }, []);

    window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowUp") {
            createRobot(position.current[0] - 1, position.current[1]);
        }
        else if (e.key === "ArrowDown") {
            createRobot(position.current[0] + 1, position.current[1]);
        }
        else if (e.key === "ArrowLeft") {
            createRobot(position.current[0], position.current[1] - 1);

        }
        else if (e.key === "ArrowRight") {
            createRobot(position.current[0], position.current[1] + 1);
        }
        e.stopImmediatePropagation();
    });


    return (
        <div className="mainbox">
            <Navbar></Navbar>
            <div className='gameBox'>
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
