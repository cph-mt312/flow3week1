import { useState } from 'react';

function ChuckNorrisJoke() {

    const url = 'https://api.chucknorris.io/jokes/random'
    const [joke, setJoke] = useState('')

    return (
        <div>
            <h3>2a:</h3>
            <button onClick={getJoke}>Get ChuckNorris</button>
            <p>{joke}</p>
        </div>
    )

    function getJoke() {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setJoke(data.value)
            })
    }
}

export default ChuckNorrisJoke