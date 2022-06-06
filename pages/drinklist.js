import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

function DrinkPosts(props) {
    const item = props.drink
    return (
        <Link className={styles.card} href={`/drinkdetail/${item.idDrink}`}>
            <div className='cursor-pointer'>
                <Image src={`${item.strDrinkThumb}`} loader={() => item.strDrinkThumb} alt='Cocktails Image' width={250} height={250}/>
                <p className='py-4 text-center font-medium text-base'>{item.strDrink}</p>
            </div>
        </Link>
    )
}

export default function DrinkList() {
    const [state, setState] = useState({
        posts: [],
        searchDrink: []
    })

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
                .then(response => response.json())
                .then(result => {
                    setState({ posts: result.drinks })
        })
    }, [])

    const handleChange = (e) => {
        const search = e.target.value;

        if(search) {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
                .then(response => response.json())
                .then(result => {
                    setState({ posts: result.drinks, searchDrink: search })
                })
        } else {
            fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
                .then(response => response.json())
                .then(result => {
                    setState({ posts: result.drinks })
                })
        }

        console.log(state)
    }

    if(!state.posts) {
        return (
            <div className='py-24 text-center'>
                <h2>No Data Found</h2>
                <Link href='/'><strong>Go Back To Home</strong></Link>
            </div>
        )
    }

    return(
        <div className='px-24 py-16'>
            <h1 className='text-center mt-2 mb-4 font-bold text-3xl'>Welcome to Cocktailspedia !</h1>
                <form className='mt-6 mb-10 flex flex-row justify-center items-center'>
                    <input 
                        type="text" name="searchDrink" id="searchDrink"
                        className={styles.inputsearch} 
                        placeholder="Search here ..."
                        value={state.searchDrink}
                        onChange={handleChange}
                    />
                </form>
            <div className='grid grid-cols-4 gap-8'>
                { state.posts.length > 0 && state.posts.map(i => <DrinkPosts key={i.idDrink} drink={i} />)}
            </div>
        </div>
    )
}