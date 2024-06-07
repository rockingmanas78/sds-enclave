import styles from '../RealEstate.module.scss';

const Blog = () => {
  const blogDetails = [
    {
      imageUrl: '../../realestate/images/blog-1.png',

      iconText: 'Interior',
      text: 'The Most Inspiring Interior Design Of 2021',
      date: 'Apr 27, 2022',
    },
    {
      imageUrl: '../../realestate/images/blog-2.jpg',

      iconText: 'Estates',
      text: 'Recent Commercial Real Estate Transactions',
      date: 'Apr 27, 2022',
    },
    {
      imageUrl: '../../realestate/images/blog-3.jpg',

      iconText: 'Room',
      text: 'Renovating a Living Room? Experts Share Their Secrets',
      date: 'Apr 27, 2022',
    },
  ];

  return (
    <section className={styles.blog} id="blog">
      <div className={styles.container}>
        <p className={styles['section-subtitle']}>News & Blogs</p>
        <h2 className={`${styles.h2} ${styles['section-title']}`}>Latest News Feeds</h2>
        <ul className={`${styles['blog-list']} ${styles['has-scrollbar']}`}>
          {blogDetails?.map((each) => {
            return (
              <li>
                <div className={styles['blog-card']}>
                  <figure className={styles['card-banner']}>
                    <img src={each.imageUrl} alt={each.text} className={styles['w-100']} />
                  </figure>
                  <div className={styles['blog-content']}>
                    <div className={styles['blog-content-top']}>
                      <ul className={styles['card-meta-list']}>
                        <li>
                          <a href="#" className={styles['card-meta-link']}>
                            <ion-icon name="person" />
                            <span>by: Admin</span>
                          </a>
                        </li>
                        <li>
                          <a href="#" className={styles['card-meta-link']}>
                            <ion-icon name="pricetags" />
                            <span>{each.iconText}</span>
                          </a>
                        </li>
                      </ul>
                      <h3 className={`${styles.h3} ${styles['blog-title']}`}>
                        <a href="#">{each.text}</a>
                      </h3>
                    </div>
                    <div className={styles['blog-content-bottom']}>
                      <div className={styles['publish-date']}>
                        <ion-icon name="calendar" />
                        <time dateTime="2022-27-04">Apr 27, 2022</time>
                      </div>
                      <a href="#" className={styles['read-more-btn']}>
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Blog;
