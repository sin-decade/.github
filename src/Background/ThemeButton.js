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

import React from 'react';
import star from '../imgs/star.svg';
import crescent from '../imgs/crescent.svg';
import './ThemeButton.css';
import FlipCountdown from "@rumess/react-flip-countdown";

const ThemeButton = ({isDarkTheme, isHidden, handleClick}) => {
    return (
        <div className='theme-container'
             style={{
                 ...(isDarkTheme ? {left: 0, bottom: 0, flexDirection: 'row-reverse'} : {right: 0, top: 0}),
                 display: isHidden ? 'none' : 'flex'

             }}>
            <div className={`countdown special-font poem-${!isDarkTheme ? 'dark' : 'light'}`}>
                <FlipCountdown
                    size='small'
                    titlePosition={isDarkTheme ? 'top' : 'bottom'}
                    theme={isDarkTheme ? 'light' : 'dark'}
                    // hideYear
                    // hideMonth
                    // hideDay
                    // hideHour
                    // hideMinute
                    // hideSecond
                    endAt={'2033-01-01 00:00:00'}
                />
            </div>
            <button className={`theme-button button-${isDarkTheme ? 'dark' : 'light'}`} onClick={handleClick}>
                <img className='theme-img' src={isDarkTheme ? star : crescent} alt={isDarkTheme ? 'star' : 'crescent'}/>
            </button>
        </div>
    );
};

export default ThemeButton;
