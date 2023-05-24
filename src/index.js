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
import ReactDOM from 'react-dom';
import App from './App';
import favicon from "./imgs/logo.ico";
import Helmet from 'react-helmet';

ReactDOM.render(
    <React.StrictMode>
        <Helmet>
            <title>sin-decade: Lust decade of St. Johnna</title>
            <link rel='icon' type='image/ico' href={favicon}/>
        </Helmet>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
