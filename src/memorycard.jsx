import { useState } from 'react'

function Memory() {
    function shuffleArray() { /* Durstenfeld shuffle */
        for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    const [count, setCount] = useState({current: 0});

    function handleChange(e) {
        let temp = e.target.id;
        // let id = e.target.id;
        // console.log(count[id]);
        // if (count[id] === 0) {
        //     shuffleArray();
        //     setCount({current: count.current + 1, Venusaur: 1});
        // }
        // else {
        //     shuffleArray();
        //     setCount({current: 0, Venusaur: 0});
        // }
        // shuffleArray();
        // setCount({current: temp});
        console.log(temp);
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
            <h2>Current Score:{' '} {count.current}</h2>
            <div className="main" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', maxWidth: '100vw', gridGap: '20px'}}>
                <div style={{border: '3px solid black', padding: '30px'}} onClick={handleChange} id={arr[0].pName}>
                    <img src={arr[0].src} alt={arr[0].pName}></img><br/>
                    <h1>{arr[0].pName}</h1>
                </div>
                <div style={{border: '3px solid black', padding: '30px'}} onClick={handleChange} id={arr[1].pName}>
                    <img src={arr[1].src} alt={arr[1].pName}></img><br/>
                    <h1>{arr[1].pName}</h1>
                </div>
                <div style={{border: '3px solid black', padding: '30px'}} onClick={handleChange} id={arr[2].pName}>
                    <img src={arr[2].src} alt={arr[2].pName}></img><br/>
                    <h1>{arr[2].pName}</h1>
                </div>
                <div style={{border: '3px solid black', padding: '30px'}} onClick={handleChange} id={arr[3].pName}>
                    <img src={arr[3].src} alt={arr[3].pName}></img><br/>
                    <h1>{arr[3].pName}</h1>
                </div>
                <div style={{border: '3px solid black', padding: '30px'}} onClick={handleChange} id={arr[4].pName}>
                    <img src={arr[4].src} alt={arr[4].pName}></img><br/>
                    <h1>{arr[4].pName}</h1>
                </div>
                <div style={{border: '3px solid black', padding: '30px'}} onClick={handleChange} id={arr[5].pName}>
                    <img src={arr[5].src} alt={arr[5].pName}></img><br/>
                    <h1>{arr[5].pName}</h1>
                </div>
                <div style={{border: '3px solid black', padding: '30px'}} onClick={handleChange} id={arr[6].pName}>
                    <img src={arr[6].src} alt={arr[6].pName}></img><br/>
                    <h1>{arr[6].pName}</h1>
                </div>
                <div style={{border: '3px solid black', padding: '30px'}} onClick={handleChange} id={arr[7].pName}>
                    <img src={arr[7].src} alt={arr[7].pName}></img><br/>
                    <h1>{arr[7].pName}</h1>
                </div>
                <div style={{border: '3px solid black', padding: '30px'}} onClick={handleChange} id={arr[8].pName}>
                    <img src={arr[8].src} alt={arr[8].pName}></img><br/>
                    <h1>{arr[8].pName}</h1>
                </div>
                <div style={{border: '3px solid black', padding: '30px'}} onClick={handleChange} id={arr[9].pName}>
                    <img src={arr[9].src} alt={arr[9].pName}></img><br/>
                    <h1>{arr[9].pName}</h1>
                </div>
                <div style={{border: '3px solid black', padding: '30px'}} onClick={handleChange} id={arr[10].pName}>
                    <img src={arr[10].src} alt={arr[10].pName}></img><br/>
                    <h1>{arr[10].pName}</h1>
                </div>
                <div style={{border: '3px solid black', padding: '30px'}} onClick={handleChange} id={arr[11].pName}>
                    <img src={arr[11].src} alt={arr[11].pName}></img><br/>
                    <h1>{arr[11].pName}</h1>
                </div>
            </div>
        </div>
    )
}
  
export default Memory
  





// const [count, setCount] = useState(0)


// const arr = [{color: "blue", fontSize: '200px'}, {color: "red", fontSize: '100px'}, {color: "green", fontSize: '50px'}, {color: "orange", fontSize: '300px'}];
// shuffleArray(arr);
// return (
// <div>
// <h1 style={{color: arr[0].color, fontSize: arr[0].fontSize}}>Hello World!</h1>
// </div>
// )





// async function request(city) {
//     try {
//     let link = 'https://api.weatherapi.com/v1/current.json?key=46523e6a6f0346c2bd412410240504&q=' + city;
//     const response = await fetch(link, {mode: 'cors'});
//     const result = await response.json();
//     temp.textContent = city + ': ' + result.current.temp_c + 'C';
//     hum.textContent = 'Humidity: ' + result.current.humidity + '%';
//     wind.textContent = 'Wind: ' + result.current.wind_kph + 'kph';
//     cond.textContent = result.current.condition.text;
//     img.src = 'https:' + result.current.condition.icon;
//     } catch (error) {
//         console.log(error);
//     }
// }

// request('Boston');

// input.addEventListener('search', () => {
//     request(input.value);
//     input.value = '';
// })