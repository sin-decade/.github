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
import "@fontsource/cormorant-garamond";
import './Poem.css';

const Poem = ({isDarkTheme, isHidden}) => {
    return (
        <div className={`poem-container poem-${!isDarkTheme ? 'dark' : 'light'}`}
             style={{...(isDarkTheme ? {left: '8vw'} : {left: '42vw'}), display: isHidden ? 'none' : 'block'}}>
            <div className="tittle special-font">
                <h1>Lust decade of St. Johnna</h1>
            </div>
            <div className='verse-container'>
                <div className="column">
                    <div className="verse special-font">
                        Within Vatican's hallowed halls, grace in nun's lace entwined,<br/>
                        Echoes of Egypt's darkness, a rose on panties lined.<br/>
                        Breasts bear prophecies, Roman numerals etched in tar,<br/>
                        Delicate nipples captive, hidden behind a bar.<br/>
                    </div>
                    <div className="verse special-font">
                        Crosses etched upon her flesh, a map of boundless bliss,<br/>
                        Quivering, passion's rhythm strays, lost in fantasies amiss.<br/>
                        Like pirate's blood that courses deep within my eager veins,<br/>
                        I yearn to pierce her tender breasts, where desire remains.<br/>
                    </div>
                    <div className="verse special-font">
                        With teeth, I aim to dig, like spade in fertile ground,<br/>
                        Unearthing secrets dark, that pleasure's bounds confound.<br/>
                        But this mark, fused with her flesh, defies my every thrust,<br/>
                        Inflicting agony's cruel toll, a torturous love unjust.<br/>
                    </div>
                    <div className="verse special-font">
                        Her body bends in pain, an Arco di Giano supreme,<br/>
                        Unveiling gateway where mysteries interweave and gleam.<br/>
                        In whispers, she utters a chilling decree, austere,<br/>
                        "Retribution awaits sinners, pleasure's chains we'll shear."<br/>
                    </div>
                    <div className="verse special-font">
                        These words flow freely, like prayers from her sacred lips,<br/>
                        Taught by Order of Saint Johnna, devotion never slips.<br/>
                        The prophecy continues, foretelling an era's end,<br/>
                        Of hidden sins and lusts, to which mankind did condescend.<br/>
                    </div>
                </div>
                <div className="separator"></div>
                <div className="column">
                    <div className="verse special-font">
                        Lifting her in my embrace, like victim from an altar laid,<br/>
                        I witness the final plunge, where sins shall be unswayed.<br/>
                        "The decade of sin draws near, liberation takes its stand,<br/>
                        From vices that besmirch this age, a wild and unruly demand."<br/>
                    </div>
                    <div className="verse special-font">
                        Eloquence surges forth, torrents bursting from her core,<br/>
                        Her body trembles, craving freedom evermore.<br/>
                        She clings to my hair, reins of wild stallions astride,<br/>
                        Her hand glides 'cross her lips, concealing the whispered tide.<br/>
                    </div>
                    <div className="verse special-font">
                        Overflowing with desire, her limbs tremble in despair,<br/>
                        In sudden release, my grip weakens, passion fills the air.<br/>
                        She collapses onto the marble bench, innocence in her mistake,<br/>
                        "And for ten blood-soaked years, paradise this world shall partake."<br/>
                    </div>
                    <div className="verse special-font">
                        Eyes meet painted ceiling, Lord's serene smile unveiled,<br/>
                        Amidst chaos, fleeting respite, solace never failed.<br/>
                        Once more she squirts, her hand emerges from the fall,<br/>
                        Her lips now freed to utter words, her nails upon me crawl.<br/>
                    </div>
                    <div className="verse special-font">
                        In the realm of darkness black, where passions intertwine,<br/>
                        The nun's vow pours from her lips, a sacred prayer divine.<br/>
                        In pleasure's grip, her labia moistens the altar's stone,<br/>
                        As the usher cradles her, secrets revealed, to the world unknown.<br/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Poem;
