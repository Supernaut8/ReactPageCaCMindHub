import React from "react";
import '../styles/home.css';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Link as LinkRouter } from 'react-router-dom';
import SwiperCarousel from "./SwiperCarousel";
// import img13 from '../images/main_swiper_1.jpeg';


function Home() {
    return (
        <div className="home_main_container">
            <div className="sw swiper_main_1">
                <Typography variant="h3" style={{ fontFamily: 'Open Sans' }}> Choose from the best healthcare providers</Typography>
                <Typography className="intro_main" variant="body1" style={{ fontFamily: 'Open Sans' }}>
                    DoctorFinder offers a wide range of medical services so you can find the right doctor for your needs.
                    Our platform allows you to search, compare and book virtual medical appointments conveniently and securely.
                </Typography>
                <Typography variant="h5" style={{ fontFamily: 'Open Sans' }}> Make your appointment now! </Typography>
                {/* <LinkRouter className='reservation_link' to='/reservations'>
                    <Button variant="contained" style={{ fontFamily: 'Open Sans' }}>BOOK</Button>
                </LinkRouter> */}
            </div>
            <div className="swiper-container">
                <div className='description'>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit suscipit phasellus elementum taciti fames interdum, magnis
                        lobortis primis rhoncus morbi. Lobortis orci accumsan vivamus ultricies pretium quis tristique litora nascetur at
                        blandit, purus eleifend senectus vitae ligula libero ridiculus penatibus montes elementum nec, habitasse sagittis
                        quam posuere mattis lacinia dis malesuada urna aliquet. Vel per facilisis ultricies neque cras augue laoreet ut
                        netus, purus sagittis nibh accumsan massa pharetra metus dictumst, lacinia nascetur fames etiam luctus quam iaculis
                        rhoncus. Per velit iaculis metus urna euismod nibh dis habitasse, feugiat nascetur turpis eu risus sed lacus,
                        interdum proin aptent id fringilla mauris neque.

                        Fermentum porta tristique vel parturient cubilia penatibus pellentesque praesent, pharetra sagittis euismod dui 
                        placerat libero auctor class, est sodales eros sem dignissim viverra laoreet. Nibh nascetur vulputate maecenas eget 
                        posuere tempus aptent, porta et himenaeos conubia suscipit ligula praesent urna, varius habitant libero cubilia 
                        tellus ultricies. Faucibus a netus id ad vestibulum risus dis nisl senectus, nunc sociis non in quam himenaeos commodo.

                        Magnis quisque venenatis taciti accumsan non ultrices, sed cubilia aptent duis sodales, metus luctus libero natoque leo. 
                        Mus fermentum porta id primis dictum cursus semper urna massa blandit bibendum magna torquent, mollis suscipit et nec 
                        senectus congue tristique class in scelerisque iaculis ullamcorper. A aenean diam ut quisque mattis tristique ornare dui 
                        montes, metus mauris accumsan scelerisque egestas fusce etiam tellus, sagittis natoque odio est interdum augue orci in. 
                        Eu convallis taciti morbi nibh sapien conubia faucibus mauris nam, turpis massa quis et justo blandit rutrum curae, 
                        congue felis urna imperdiet interdum integer etiam nostra.

                        Etiam cum lacus orci penatibus nullam at ut felis sociis, nibh fermentum fringilla in porttitor eros risus tortor torquent, 
                        dictumst vehicula mauris odio eleifend platea neque a. Blandit sapien cubilia integer aptent sociosqu ultricies magna quam, 
                        lacus quisque facilisi dictumst nibh tortor fusce ligula sollicitudin, accumsan pellentesque nam praesent purus dignissim 
                        varius. Sociosqu parturient vestibulum mauris sodales quis aenean lectus pellentesque, odio duis interdum eleifend platea 
                        risus diam maecenas metus, eu integer erat quam ridiculus accumsan natoque. Ad facilisis sociosqu montes nulla tellus 
                        vivamus penatibus praesent, laoreet primis leo donec auctor nostra consequat quis, fusce elementum blandit porttitor ut 
                        nascetur mus.</p>
                </div>
                <SwiperCarousel className="carousel" />
            </div>
        </div>
    )
}

export default Home;