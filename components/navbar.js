import styles from '../styles/Home.module.css'

export default function Navbar() {
    return(
        <div className={styles.navbar}>
            <div className='font-bold text-xl cursor-default' href='/'>Cocktailspedia</div>
            <div>
                <a href='/'>Home</a>
            </div>
        </div>
    )
}