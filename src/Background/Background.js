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
import bg from '../imgs/bg-min.svg';
import './Background.css';

const Background = ({leftWidth}) => {
    return (
        <>
            <div className='background-left' style={{width: `${leftWidth}vw`}}></div>
            <div className='background-right'
                 style={{left: `${leftWidth}vw`, width: `calc(100vw - ${leftWidth}vw)`}}></div>
            <div className='background-center' style={{left: `${leftWidth}vw`}}>
                <img className='background-img' src={bg} alt='background'/>
            </div>
        </>
    );
};

export default Background;
