import React from 'react';

const ListDisplay = (props) => {

    const display = props.list.map(item => {
        return (
            <div key={item.name} className={`item ${item.id % 2 ? 'left' : 'right'}`}>
                <h1>{item.name}</h1>   
            </div>
        )
    })
    return (
        <div className="relative">
            <div className="absolute">This div is positioned to the parent</div>
            {display}
            <p>NON FLOATED CONTENT: All of the licensed Pokémon properties overseen by The Pokémon Company International are divided roughly by generation. These generations are roughly chronological divisions by release; every several years, when a sequel to the 1996 role-playing video games Pokémon Red and Green is released that features new Pokémon, characters, and gameplay concepts, that sequel is considered the start of a new generation of the franchise. The main Pokémon video games and their spin-offs, the anime, manga, and trading card game are all updated with the new Pokémon properties each time a new generation begins.[citation needed] Some Pokémon from the newer games appear in anime episodes or films months, or even years, before the game they were programmed for came out. The first generation began in Japan with Pokémon Red and Green on the Game Boy. The franchise began the seventh generation on November 18, 2016 with Pokémon Sun and Moon on the Nintendo 3DS.[31] The most recent games in the main series, Pokémon: Let's Go, Pikachu! and Let's Go, Eevee!, were released on the Nintendo Switch on November 16, 2018. A follow-up set of core series games will be released in late 2019.[32][33]</p>
        </div>
    );
};

export default ListDisplay;