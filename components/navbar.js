import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Navbar() {
    return(
        <div className={styles.navbar}>
            <div className='font-bold text-xl cursor-default' href='/'>Cocktailspedia</div>
            <div>
                <Link href='/'>Home</Link>
            </div>
        </div>
    )
}