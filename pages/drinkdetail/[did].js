import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'

export default function DrinkDetail() {
    const router = useRouter()
    const { did } = router.query

    const [state, setState] = useState({
        posts: []
    });

    useEffect(() => {
        if(did) {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${did}`)
                .then(response => response.json())
                .then(result => {
                    if (result.drinks !== null) {
                        setState({ posts: result.drinks[0] })
                    }
            })
        }
    }, [did])

    const item = state.posts;

    let ingredients = [];
    if (item.strIngredient1) { ingredients.push(<li key={"ingredient1"}>{item.strIngredient1}</li>) }
    if (item.strIngredient2) { ingredients.push(<li key={"ingredient2"}>{item.strIngredient2}</li>) }
    if (item.strIngredient3) { ingredients.push(<li key={"ingredient3"}>{item.strIngredient3}</li>) }
    if (item.strIngredient4) { ingredients.push(<li key={"ingredient4"}>{item.strIngredient4}</li>) }
    if (item.strIngredient5) { ingredients.push(<li key={"ingredient5"}>{item.strIngredient5}</li>) }
    if (item.strIngredient6) { ingredients.push(<li key={"ingredient6"}>{item.strIngredient6}</li>) }
    if (item.strIngredient7) { ingredients.push(<li key={"ingredient7"}>{item.strIngredient7}</li>) }
    if (item.strIngredient8) { ingredients.push(<li key={"ingredient8"}>{item.strIngredient8}</li>) }
    if (item.strIngredient9) { ingredients.push(<li key={"ingredient9"}>{item.strIngredient9}</li>) }
    if (item.strIngredient10) { ingredients.push(<li key={"ingredient10"}>{item.strIngredient10}</li>) }
    if (item.strIngredient11) { ingredients.push(<li key={"ingredient11"}>{item.strIngredient11}</li>) }
    if (item.strIngredient12) { ingredients.push(<li key={"ingredient12"}>{item.strIngredient12}</li>) }
    if (item.strIngredient13) { ingredients.push(<li key={"ingredient13"}>{item.strIngredient13}</li>) }
    if (item.strIngredient14) { ingredients.push(<li key={"ingredient14"}>{item.strIngredient14}</li>) }
    if (item.strIngredient15) { ingredients.push(<li key={"ingredient15"}>{item.strIngredient15}</li>) }

    return (
        <>
        <Head>
            <title>Next Mini Cocktailspedia</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
            { state.posts.length !== 0
            ? 
            <div className='px-24 py-16'>
                { item &&
                    <div className='flex flex-row justify-center items-center gap-16'>
                        <div className='w-1/3'>
                            <Image src={`${item.strDrinkThumb}`} loader={() => item.strDrinkThumb} unoptimized alt='Img Cocktail' width={500} height={500}/>
                        </div>
                        <div className='w-2/3 flex flex-col justify-center items-start gap-5'>
                            <h2 className='font-bold text-3xl'>{item.strDrink}</h2>
                            <span><strong>Ingredients : </strong><br/><ul>{ingredients}</ul></span>
                            <p><strong>Glass : </strong><br/>{item.strGlass}</p>
                            <p><strong>Instructions : </strong><br/>{item.strInstructions}</p>
                        </div>
                    </div>
                }
            </div>
            :
            <div className='py-24 text-center'>
                <h2 className='font-bold'>--- No Data Found ---</h2>
                <Link href='/'>Go Back To Home</Link>
            </div>
            }
        </Layout>
        </>
    )
}