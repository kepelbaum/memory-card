import { useState } from 'react'

function Memory() {
    function shuffleArray() { /* Durstenfeld shuffle */
        for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    const [count, setCount] = useState({current: 0, Venusaur: 0, Charizard: 0, Blastoise: 0, Raticate: 0, Pikachu: 0, Meowth: 0, Arcanine: 0, Magikarp: 0, Lapras: 0, Snorlax: 0, Dragonite: 0, Mew: 0, highscore: 0});

    function handleChange(e) {
        let id = e.currentTarget.getAttribute("lkup");
        if (count[id] === 0) {
            shuffleArray();
            let temp = {...count};
            temp[id] = 1;
            temp.current++;
            if (temp.current > temp.highscore) {
                temp.highscore = temp.current;
            }
            console.log(temp);
            setCount(temp);
        }
        else {
            shuffleArray();
            let temp = count.highscore;
            setCount({current: 0, Venusaur: 0, Charizard: 0, Blastoise: 0, Raticate: 0, Pikachu: 0, Meowth: 0, Arcanine: 0, Magikarp: 0, Lapras: 0, Snorlax: 0, Dragonite: 0, Mew: 0, highscore: temp});
        }
    }
    let arr = [{src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', pName: 'Venusaur'},
    {src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', pName: 'Charizard'},
    {src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png', pName: 'Blastoise'},
    {src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png', pName: 'Raticate'},
    {src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png', pName: 'Pikachu'},
    {src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png', pName: 'Meowth'},
    {src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png', pName: 'Arcanine'},
    {src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png', pName: 'Magikarp'},
    {src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png', pName: 'Lapras'},
    {src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png', pName: 'Snorlax'},
    {src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png', pName: 'Dragonite'},
    {src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png', pName: 'Mew'}
];
    shuffleArray();
    return (
        <div className="wrapper">
            <h1>Pokemon Memory Card Game</h1>
            <h2>Current Score:{' '} {count.current}{'; High Score: '}{count.highscore}</h2>
            <div className="main" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', maxWidth: '100vw', gridGap: '20px'}}>
                {arr.map((ele) => {
                    return (
                        <div style={{border: '3px solid black', padding: '30px'}} onClick={handleChange} key={ele.pName} lkup={ele.pName}>
                    <img src={ele.src} alt={ele.pName}></img><br/>
                    <h1>{ele.pName}</h1>
                </div>
                    )
                })}
            </div>
        </div>
    )
}
  
export default Memory
  