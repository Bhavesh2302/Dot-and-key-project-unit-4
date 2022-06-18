import React from "react";
import styles from "../styles/Serum.module.css";
// import SerumData from "../DataSerum/SerumData.json";
import SerumData from "../data/SerumData.json";
import { AiFillStar } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { useCart } from "react-use-cart";

const Serum = () => {
  const { addItem } = useCart();
  const handleRefresh = ()=>{
    window.location.reload(false)
}
  return (
    <div>
      <div>
        <img
          style={{ width: "100%", borderRadius: "15px" }}
          src="https://cdn.shopify.com/s/files/1/0361/8553/8692/collections/By-catagory-10_1944x.png?v=1648272658"
          alt="serumOil"
        />
      </div>
      <div className={styles.SerumOils}>Serum & Oils</div>
      <div className={styles.itemsDiv}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
          }}
        >
          {SerumData.map((el) => (
            <div key={el.id} style={{ height: "440px", width: "282px" }}>
              <div>
                <img
                  src={el.imageurl}
                  alt="abc"
                  style={{ width: "282px", height: "282px" }}
                />
              </div>
              <div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span>
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </span>
                    <span>{el.review}</span>
                  </div>
                  <div>
                    <span>
                      <IoMdHeartEmpty size={27} />
                    </span>
                  </div>
                </div>
                <div className={styles.serumProductname}>{el.name}</div>
                <div>
                  <del className={styles.deletedPrice}>{el.ogprice}</del>

                  <b className={styles.Price}>Rs: {el.price}</b>
                </div>
              </div>
              <div>
                <button
                  className={styles.addbutton}
                  onClick={() => {addItem(el);handleRefresh()}}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Serum;
