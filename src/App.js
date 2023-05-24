/*
 *   The GNU General Public License v3.0
 *
 *   Copyright (C) 2023 Yaroslav Riabtsev <yaroslav.riabtsev@rwth-aachen.de>
 *
 *   This program is free software: you can redistribute it and/or modify
 *   it under the terms of the GNU General Public License as published by
 *   the Free Software Foundation, either version 3 of the License, or
 *   (at your option) any later version.
 *
 *   This program is distributed in the hope that it will be useful,
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *   GNU General Public License for more details.
 *
 *   You should have received a copy of the GNU General Public License
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
*/

import React, {useState, useRef} from 'react';
import Background from './Background/Background';
import ThemeButton from './Background/ThemeButton';
import Poem from './Poem/Poem';
import './App.css';

const App = () => {
    const [leftWidth, setLeftWidth] = useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const intervalRef = useRef(null);

    const handleClick = () => {
        setIsHidden(true);
        intervalRef.current = setInterval(() => {
            setLeftWidth((prevWidth) => {
                const newWidth = prevWidth + (isDarkTheme ? -1 : 1);
                if (newWidth <= 0 || newWidth >= 66) {
                    clearInterval(intervalRef.current);
                    setIsHidden(false);
                }
                return newWidth;
            });
        }, 10);
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <>
            <Background leftWidth={leftWidth}/>
            <ThemeButton isDarkTheme={isDarkTheme} isHidden={isHidden} handleClick={handleClick}/>
            <Poem isDarkTheme={isDarkTheme} isHidden={isHidden}/>
        </>
    );
};

export default App;