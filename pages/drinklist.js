import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

function DrinkPosts(props) {
    const item = props.drink
    return (
            <a className={styles.card} href={`/drink?id=${item.idDrink}`}>
                <img src={item.strDrinkThumb} alt='Cocktails Image'/>
                <p className='text-center'>{item.strDrink}</p>
            </a>
    )
}

export default function DrinkList() {
    const [state, setState] = useState({
        posts: [],
        searchDrink: ''
    })

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
                .then(response => response.json())
                .then(result => {
                    setState({ posts: result.drinks })
        })
    })

    const handleChange = (e) => {
        const search = e.target.value;
        console.log(search)
        setState({ searchDrink: search })

        if(search) {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
                .then(response => response.json())
                .then(result => {
                    setState({ posts: result.drinks })
                })
        } else {
            fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
                .then(response => response.json())
                .then(result => {
                    setState({ posts: result.drinks })
                })
        }
    }

    if(!state.posts) {
        return (
            <div className='no-data text-center'>
                <h2>No Data Found</h2>
                <a href='/'>Go Back To Home</a>
            </div>
        )
    }

    return(
        <div className='p-5'>
            <h1 className='text-center mt-2 mb-4'>Welcome to Cocktailspedia !</h1>
                <div className='grid grid-cols-4'>
                    <div></div>
                    <form className='mb-2 w-full'>
                        <input type="text" name="searchDrink" id="searchDrink" 
                            placeholder="Search here ..." value={state.searchDrink} 
                            onChange={handleChange}/>
                    </form>
                    <div></div>
                </div>
                <div className={styles.grid}>
                    { state.posts.length > 0 && state.posts.map(i => <DrinkPosts key={i.idDrink} drink={i} />)}
                </div>
        </div>
    )
}