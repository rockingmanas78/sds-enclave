import styles from '../RealEstate.module.scss';

const Property = () => {
  return (
    <section className={styles.property} id="property">
      <div className={styles.container}>
        <p className={styles['section-subtitle']}>Properties</p>
        <h2 className={`${styles.h2} ${styles['section-title']}`}>Featured Listings</h2>
        <ul className={`${styles['property-list']} ${styles['has-scrollbar']}`}>
          <li>
            <div className={styles['property-card']}>
              <figure className={styles['card-banner']}>
                <a href="#">
                  <img
                    src=".../../realestate/images/property-1.jpg"
                    alt="New Apartment Nice View"
                    className={styles['w-100']}></img>
                </a>
                <div className={`${styles['card-badge']} ${styles.green}`}>For Rent</div>
                <div className={styles['banner-actions']}>
                  <button className={styles['banner-actions-btn']}>
                    <ion-icon name="location" />
                    <address>Belmont Gardens, Chicago</address>
                  </button>
                  <button className={styles['banner-actions-btn']}>
                    <ion-icon name="camera" />
                    <span>4</span>
                  </button>
                  <button className={styles['banner-actions-btn']}>
                    <ion-icon name="film" />
                    <span>2</span>
                  </button>
                </div>
              </figure>
              <div className={styles['card-content']}>
                <div className={styles['card-price']}>
                  <strong>$34,900</strong>/Month
                </div>
                <h3 className={`${styles.h3} ${styles['card-title']}`}>
                  <a href="#">New Apartment Nice View</a>
                </h3>
                <p className={styles['card-text']}>
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                </p>
                <ul className={styles['card-list']}>
                  <li className={styles['card-item']}>
                    <strong>3</strong>
                    <ion-icon name="bed-outline" />
                    <span>Bedrooms</span>
                  </li>
                  <li className={styles['card-item']}>
                    <strong>2</strong>
                    <ion-icon name="man-outline" />
                    <span>Bathrooms</span>
                  </li>
                  <li className={styles['card-item']}>
                    <strong>3450</strong>
                    <ion-icon name="square-outline" />
                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>
              <div className={styles['card-footer']}>
                <div className={styles['card-author']}>
                  <figure className={styles['author-avatar']}>
                    <img
                      src=".../../realestate/images/author.jpg"
                      alt="William Seklo"
                      className={styles['w-100']}
                    />
                  </figure>
                  <div>
                    <p className={styles['author-name']}>
                      <a href="#">William Seklo</a>
                    </p>
                    <p className={styles['author-title']}>Estate Agents</p>
                  </div>
                </div>
                <div className={styles['card-footer-actions']}>
                  <button className={styles['card-footer-actions-btn']}>
                    {/* <ion-icon name="resize-outline" /> */}
                  </button>
                  <button className={styles['card-footer-actions-btn']}>
                    {/* <ion-icon name="heart-outline" /> */}
                  </button>
                  <button className={styles['card-footer-actions-btn']}>
                    {/* <ion-icon name="add-circle-outline" /> */}
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={styles['property-card']}>
              <figure className={styles['card-banner']}>
                <a href="#">
                  <img
                    src=".../../realestate/images/property-2.jpg"
                    alt="Modern Apartments"
                    className={styles['w-100']}
                  />
                </a>
                <div className={`${styles['card-badge']} ${styles.orange}`}>For Sales</div>
                <div className={styles['banner-actions']}>
                  <button className={styles['banner-actions-btn']}>
                    <ion-icon name="location" />
                    <address>Belmont Gardens, Chicago</address>
                  </button>
                  <button className={styles['banner-actions-btn']}>
                    <ion-icon name="camera" />
                    <span>4</span>
                  </button>
                  <button className={styles['banner-actions-btn']}>
                    <ion-icon name="film" />
                    <span>2</span>
                  </button>
                </div>
              </figure>
              <div className={styles['card-content']}>
                <div className={styles['card-price']}>
                  <strong>$34,900</strong>/Month
                </div>
                <h3 className={`${styles.h3} ${styles['card-title']}`}>
                  <a href="#">Modern Apartments</a>
                </h3>
                <p className={styles['card-text']}>
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                </p>
                <ul className={styles['card-list']}>
                  <li className={styles['card-item']}>
                    <strong>3</strong>
                    <ion-icon name="bed-outline" />
                    <span>Bedrooms</span>
                  </li>
                  <li className={styles['card-item']}>
                    <strong>2</strong>
                    <ion-icon name="man-outline" />
                    <span>Bathrooms</span>
                  </li>
                  <li className={styles['card-item']}>
                    <strong>3450</strong>
                    <ion-icon name="square-outline" />
                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>
              <div className={styles['card-footer']}>
                <div className={styles['card-author']}>
                  <figure className={styles['author-avatar']}>
                    <img
                      src=".../../realestate/images/author.jpg"
                      alt="William Seklo"
                      className={styles['w-100']}
                    />
                  </figure>
                  <div>
                    <p className={styles['author-name']}>
                      <a href="#">William Seklo</a>
                    </p>
                    <p className={styles['author-title']}>Estate Agents</p>
                  </div>
                </div>
                <div className={styles['card-footer-actions']}>
                  <button className={styles['card-footer-actions-btn']}>
                    <ion-icon name="resize-outline" />
                  </button>
                  <button className={styles['card-footer-actions-btn']}>
                    <ion-icon name="heart-outline" />
                  </button>
                  <button className={styles['card-footer-actions-btn']}>
                    <ion-icon name="add-circle-outline" />
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={styles['property-card']}>
              <figure className={styles['card-banner']}>
                <a href="#">
                  <img
                    src=".../../realestate/images/property-3.jpg"
                    alt="Comfortable Apartment"
                    className={styles['w-100']}
                  />
                </a>
                <div className={`${styles['card-badge']} ${styles.green}`}>For Rent</div>
                <div className={styles['banner-actions']}>
                  <button className={styles['banner-actions-btn']}>
                    <ion-icon name="location" />
                    <address>Belmont Gardens, Chicago</address>
                  </button>
                  <button className={styles['banner-actions-btn']}>
                    <ion-icon name="camera" />
                    <span>4</span>
                  </button>
                  <button className={styles['banner-actions-btn']}>
                    <ion-icon name="film" />
                    <span>2</span>
                  </button>
                </div>
              </figure>
              <div className={styles['card-content']}>
                <div className={styles['card-price']}>
                  <strong>$34,900</strong>/Month
                </div>
                <h3 className={`${styles.h3} ${styles['card-title']}`}>
                  <a href="#">Comfortable Apartment</a>
                </h3>
                <p className={styles['card-text']}>
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                </p>
                <ul className={styles['card-list']}>
                  <li className={styles['card-item']}>
                    <strong>3</strong>
                    <ion-icon name="bed-outline" />
                    <span>Bedrooms</span>
                  </li>
                  <li className={styles['card-item']}>
                    <strong>2</strong>
                    <ion-icon name="man-outline" />
                    <span>Bathrooms</span>
                  </li>
                  <li className={styles['card-item']}>
                    <strong>3450</strong>
                    <ion-icon name="square-outline" />
                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>
              <div className={styles['card-footer']}>
                <div className={styles['card-author']}>
                  <figure className={styles['author-avatar']}>
                    <img
                      src=".../../realestate/images/property-4.png"
                      alt="William Seklo"
                      className={styles['w-100']}
                    />
                  </figure>
                  <div>
                    <p className={styles['author-name']}>
                      <a href="#">William Seklo</a>
                    </p>
                    <p className={styles['author-title']}>Estate Agents</p>
                  </div>
                </div>
                <div className={styles['card-footer-actions']}>
                  <button className={styles['card-footer-actions-btn']}>
                    <ion-icon name="resize-outline" />
                  </button>
                  <button className={styles['card-footer-actions-btn']}>
                    <ion-icon name="heart-outline" />
                  </button>
                  <button className={styles['card-footer-actions-btn']}>
                    <ion-icon name="add-circle-outline" />
                  </button>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={styles['property-card']}>
              <figure className={styles['card-banner']}>
                <a href="#">
                  <img
                    src=".../../realestate/images/property-4.png"
                    alt="Luxury villa in Rego Park"
                    className={styles['w-100']}
                  />
                </a>
                <div className={`${styles['card-badge']} ${styles.green}`}>For Rent</div>
                <div className={styles['banner-actions']}>
                  <button className={styles['banner-actions-btn']}>
                    <ion-icon name="location" />
                    <address>Belmont Gardens, Chicago</address>
                  </button>
                  <button className={styles['banner-actions-btn']}>
                    <ion-icon name="camera" />
                    <span>4</span>
                  </button>
                  <button className={styles['banner-actions-btn']}>
                    <ion-icon name="film" />
                    <span>2</span>
                  </button>
                </div>
              </figure>
              <div className={styles['card-content']}>
                <div className={styles['card-price']}>
                  <strong>$34,900</strong>/Month
                </div>
                <h3 className={`${styles.h3} ${styles['card-title']}`}>
                  <a href="#">Luxury villa in Rego Park</a>
                </h3>
                <p className={styles['card-text']}>
                  Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood
                </p>
                <ul className={styles['card-list']}>
                  <li className={styles['card-item']}>
                    <strong>3</strong>
                    <ion-icon name="bed-outline" />
                    <span>Bedrooms</span>
                  </li>
                  <li className={styles['card-item']}>
                    <strong>2</strong>
                    <ion-icon name="man-outline" />
                    <span>Bathrooms</span>
                  </li>
                  <li className={styles['card-item']}>
                    <strong>3450</strong>
                    <ion-icon name="square-outline" />
                    <span>Square Ft</span>
                  </li>
                </ul>
              </div>
              <div className={styles['card-footer']}>
                <div className={styles['card-author']}>
                  <figure className={styles['author-avatar']}>
                    <img
                      src=".../../realestate/images/author.jpg"
                      alt="William Seklo"
                      className={styles['w-100']}
                    />
                  </figure>
                  <div>
                    <p className={styles['author-name']}>
                      <a href="#">William Seklo</a>
                    </p>
                    <p className={styles['author-title']}>Estate Agents</p>
                  </div>
                </div>
                <div className={styles['card-footer-actions']}>
                  <button className={styles['card-footer-actions-btn']}>
                    <ion-icon name="resize-outline" />
                  </button>
                  <button className={styles['card-footer-actions-btn']}>
                    <ion-icon name="heart-outline" />
                  </button>
                  <button className={styles['card-footer-actions-btn']}>
                    <ion-icon name="add-circle-outline" />
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Property;
