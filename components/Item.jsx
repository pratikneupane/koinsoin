import {Image} from 'react-bootstrap'
import styles from "/styles/Card.module.css";


const Item = (item) => {
  return (
    <div className={styles.author}>
      <div href="author.html" className={`${styles.author__cover} ${styles.author__cover__bg}`}>
        <Image src={item.item.image} height="50px" width="50px" alt="cover image" />
      </div>
      <div className={styles.author__meta}>
        <a href="author.html" className={styles.author__avatar}>
          <Image
            src={item.item.avatar}
            height="50px"
            width="50px"
            alt="avatar"
          />
        </a>
        <h3 className={styles.author__name}>
          <a href="author.html">{`${item.item.firstName} ${item.item.lastName}`}</a>
        </h3>
        <h3 className={styles.author__nickname}>
          <a href="author.html">{`@${item.item.username}`}</a>
        </h3>
        <p className={styles.author__text}>{`${item.item.website}`}</p>
        <div className={styles.author__wrap}>
          <div className={styles.author__followers}>
            <p>11342</p>
            <span>Followers</span>
          </div>
          <button className={styles.author__follow} type="button">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item
