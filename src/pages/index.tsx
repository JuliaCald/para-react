import styles from '../styles/home.module.scss';

import star from '../../public/image/icon-star.svg'


export default function Home(){
  return(
    <div className = {styles.background}>
      <div className={styles.card}>
        
        <span className={styles.star}>
        <img src="./image/icon-star.svg" alt="Star"/>
          
        </span>

        <h1 className={styles.heading}> How did we do</h1>
        <p className={styles.text}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering</p>

        <div className={styles.rating}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>

        <button className={styles.submit}>Submit</button>


        
      </div>
    </div>
  )
}

