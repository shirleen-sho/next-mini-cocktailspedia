import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h5 className='font-bold text-base'>Cocktailspedia{'  '}
            <span className='font-normal text-sm'>&copy; {new Date().getFullYear()} by Shirleen</span></h5>
        </footer>
    )
  }