import Head from 'next/head'
import DrinkList from './drinklist'

export default function Home(props) {
  return (
    <div className='w-full'>
      <DrinkList list={props.data}/>
    </div>
  )
}

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  let data = null;
  await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then(response => response.json())
    .then(result => { data = result.drinks })

  // The value of the `props` key will be passed to the `Home` component
  return {
    props: { 
      data,
    },
  }
}
