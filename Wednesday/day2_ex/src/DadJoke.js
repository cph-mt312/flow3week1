import { useState, useEffect } from 'react';

function DadJoke() {

    const url = 'https://icanhazdadjoke.com/'
    const [joke, setJoke] = useState('Joke arriving in 10 seconds :-)')

    useEffect(() => {
        const interval = setInterval(() => {
            getJoke()
        }, 10000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <h3>2b:</h3>
            <p>{joke}</p>
        </div>
    )

    function getJoke() {
        fetch(url, { headers: { 'Accept': 'application/json' } })
            .then(res => res.json())
            .then(data => {
                setJoke(data.joke)
            })
    }
}

export default DadJoke