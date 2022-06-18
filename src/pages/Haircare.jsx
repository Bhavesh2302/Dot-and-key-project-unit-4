import React from 'react'
import { Carousel, Card, Button } from 'react-bootstrap';
import styles from "../styles/haircare.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { useCart } from "react-use-cart"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Haircare = ({ haircare }) => {

    const { addItem } = useCart();
    const handleRefresh = () => {
        window.location.reload(false)
    }
    return (
        <div>
            <div style={{ marginTop: "100px" }} className={styles.bhcarousel1maindiv}>
                <Swiper
                    className={styles.bhcarousel1}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    style={{
                        width:"100%"
                    }}
                >
                    <SwiperSlide className={styles.bhcarousel1image}>
                        <img
                            style={{ borderRadius: "20px", height: "632px", width: "100%" }}
                            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Untitled-1_13.png?v=1647427657"
                            alt="a"
                        />
                    </SwiperSlide>
                    <SwiperSlide className={styles.bhcarousel1image}>
                        a
                        <img
                            style={{ borderRadius: "20px", height: "632px", width: "100%" }}
                            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1b_2.png?v=1646731308"
                            alt="b"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div>
                <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/desk_14.png?v=1653897203" alt="" style={{
                    width: "100%"
                }} />
            </div>
            <div>
                <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Untitled-2_1_dd2b4fbc-12e8-4b8d-9675-2df8fc72dbd9.png?v=1642769314" alt="" style={{
                    width: "100%"
                }}/>
            </div>
            <div className={styles.card}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/girl_1.png?v=1643013901" />
                    <Card.Body>
                        <Card.Title>CONTROL HAIRFALL</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/girl_3.png?v=1643013978" />
                    <Card.Body>
                        <Card.Title>SCALP CARE</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/girl_2_5f178ee9-cbb6-4d93-81fe-248206564305.png?v=1643014000" />
                    <Card.Body>
                        <Card.Title>REPAIR DAMAGE</Card.Title>
                    </Card.Body>
                </Card>
            </div>
            <br />
            <br />
            <div>
                <h5 style={{width: '100%', textAlign: 'center'}}><strong>THE SCIENCE BEHIND</strong></h5>
                <h1><strong>Our Formulations</strong></h1>
                <p>Our Formulations are 90% nature derived, with our focus being the use of scientifically-proven ingredients that ensure promised results.
                </p>
            </div>
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><div className={styles.slider}>
                        <h5>Argan Oil</h5>
                        <p>To Fight Breakage</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente totam ratione adipisci voluptatem ullam voluptates provident placeat est odit. Dolore, unde. Nisi illum, debitis eos nesciunt ullam consequuntur dolorum.</p>
                    </div></SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slider}>
                            <h5>Argan Oil</h5>
                            <p>To Fight Breakage</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente totam ratione adipisci voluptatem ullam voluptates provident placeat est odit. Dolore, unde. Nisi illum, debitis eos nesciunt ullam consequuntur dolorum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slider}>
                            <h5>Argan Oil</h5>
                            <p>To Fight Breakage</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente totam ratione adipisci voluptatem ullam voluptates provident placeat est odit. Dolore, unde. Nisi illum, debitis eos nesciunt ullam consequuntur dolorum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slider}>
                            <h5>Argan Oil</h5>
                            <p>To Fight Breakage</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente totam ratione adipisci voluptatem ullam voluptates provident placeat est odit. Dolore, unde. Nisi illum, debitis eos nesciunt ullam consequuntur dolorum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slider}>
                            <h5>Argan Oil</h5>
                            <p>To Fight Breakage</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente totam ratione adipisci voluptatem ullam voluptates provident placeat est odit. Dolore, unde. Nisi illum, debitis eos nesciunt ullam consequuntur dolorum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slider}>
                            <h5>Argan Oil</h5>
                            <p>To Fight Breakage</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente totam ratione adipisci voluptatem ullam voluptates provident placeat est odit. Dolore, unde. Nisi illum, debitis eos nesciunt ullam consequuntur dolorum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slider}>
                            <h5>Argan Oil</h5>
                            <p>To Fight Breakage</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente totam ratione adipisci voluptatem ullam voluptates provident placeat est odit. Dolore, unde. Nisi illum, debitis eos nesciunt ullam consequuntur dolorum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slider}>
                            <h5>Argan Oil</h5>
                            <p>To Fight Breakage</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente totam ratione adipisci voluptatem ullam voluptates provident placeat est odit. Dolore, unde. Nisi illum, debitis eos nesciunt ullam consequuntur dolorum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slider}>
                            <h5>Argan Oil</h5>
                            <p>To Fight Breakage</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente totam ratione adipisci voluptatem ullam voluptates provident placeat est odit. Dolore, unde. Nisi illum, debitis eos nesciunt ullam consequuntur dolorum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slider}>
                            <h5>Argan Oil</h5>
                            <p>To Fight Breakage</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente totam ratione adipisci voluptatem ullam voluptates provident placeat est odit. Dolore, unde. Nisi illum, debitis eos nesciunt ullam consequuntur dolorum.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.slider}>
                            <h5>Argan Oil</h5>
                            <p>To Fight Breakage</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sapiente totam ratione adipisci voluptatem ullam voluptates provident placeat est odit. Dolore, unde. Nisi illum, debitis eos nesciunt ullam consequuntur dolorum.</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <br />
            <br />
            <div>
                <h1>Shop Hair Care</h1>
                <p>Formulated with a high percentage of active botanicals, with minimal synthetic chemicals. Our formulations are 90% nature derived, with our focus being the use of scientifically - proven ingredients that ensure promised results.
                </p>
            </div>
            <br />
            <br />
            <div className={styles.card}>
                {haircare.map((hair) => {
                    return <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={hair.imageurl} />
                        <Card.Body>
                            <p>{hair.rating}</p>
                            <Card.Text>
                                <p>{hair.name}</p>
                                <p>Rs: {hair.price}</p>
                            </Card.Text>
                            <div className="d-grid gap-2">
                                <Button variant="secondary" size="lg" onClick={() => { addItem(hair); handleRefresh() }}>Add to Cart</Button>
                            </div>
                        </Card.Body>
                    </Card>
                })}
            </div>
            <br />
            <br />
            <div>
                <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/7_31dec0fe-d522-47b7-96c4-da0c99724f9b.png?v=1642768426" alt="" style={{width:"100%"}}/>
            </div>
        </div>
    )
}

export default Haircare