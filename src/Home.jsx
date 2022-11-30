import React from 'react';
import { useState } from 'react';
// Swioer Js
import { Swiper, SwiperSlide } from 'swiper/react';
// Swioer Js AutoPlay
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css';


const Home = () => {
    // Swiper js autoPley
    SwiperCore.use([Autoplay]);

    // Header Menu states
    const [tog, setTog] = useState(false)

    // Header Menu if
    const Toog = () => {
        if (tog == true) {
            setTog(false)
        } else {
            setTog(true)
        }
    }

    return (
        <>
            {/* /////////////////////////////////This//////is ///// Container ////////////////////////////////////*/}
            <div className="container">


                {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\This\\\\\\is\\\\\\\Header\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
                <div id='header' className="header">
                    {/* Header Logo */}
                    <div className="header-logo">
                        <img className='header-logo1' src="https://logos-world.net/wp-content/uploads/2021/09/Mr-Beast-Logo.png" alt="" />
                        <h1 className="header-logo-text">MrBeast🔎</h1>
                    </div>
                    {/* Header Navbar */}
                    <div className="header-navs">

                        {tog && (
                            <div data-aos="fade-left" className="menu"> 
                                <a href="#Home">Home</a><br />
                                <a target="_blank" href="https://www.youtube.com/user/mrbeast6000">YouTube</a><br />
                                <a href="#popular-games">Popular Games</a><br />
                                <a href="#videos">Videos</a><br />
                                <a href="#food">MrBeast FooD</a><br />
                                <a href="#about">About</a><br />
                            </div>
                        )}
                        <div className="btn1">
                            <button className='btnn1' onClick={Toog}>
                                <i class="bi bi-list"></i>
                            </button>
                        </div>
                    </div>
                </div>
                {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\This\\\\\\is\\\\\\\Header\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}


                {/* /////////////////////////////This///////is/////Section Profil//////////////////////////////// */}
                <div id='Home' className="profil-section">
                    <div className="profil-title">
                        <h1 className='profil-text'>
                            <span>Hello</span> welcome to <br /> the official site of <br /> <span>MrBeast</span>
                        </h1><br /><br />
                        <p className="profil-dec">Hello, welcome to the official site of MeBeast. You can <br /> watch all his videos through this site.</p><br /><br />
                        <a className='profil-title-btn' href="#review">Review</a>
                    </div>
                    <div className="profil-image">
                       <div data-aos="fade-left" className="profil-img">
                           <img src="https://i.pinimg.com/originals/03/14/f2/0314f22301e22dc5985a350aae525e8c.png" alt="" className="profil-image1" />
                       </div>
                    </div>
                </div>
                {/* /////////////////////////////This///////is/////Section Profil//////////////////////////////// */}


                {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\This\\\\\\\is\\\\\\\Section Corusel\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
                <div data-aos="fade-up" className="header-corusel">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay
                    >
                        {/* Corusel 1 */}
                        <SwiperSlide>
                            <div className="header-corusel1">
                                <img src="https://foodinstitute.com/wp-content/uploads/2022/01/MrBeast.jpg" alt="" />
                                <p id='review' className='corusel1-title'> <span> <h1>MrBeast Food Marketing</h1><br /></span> YouTube star Jimmy Donaldson – better known as MrBeast – is getting back into the food space with a better-for-you snack brand.
                                Following the success of his virtual restaurant brand, MrBeast Burger, Donaldson is introducing Feastables, starting with chocolate bars that use just four simple ingredients. The launch also includes a $1 million sweepstakes to aid Feastables’ marketing efforts.</p>
                                
                            </div>
                        </SwiperSlide>
                        {/* Corusel 2 */}
                        <SwiperSlide>
                            <div className="header-corusel2">
                                <img src="https://cdn.24h.com.vn/upload/1-2022/images/2022-01-20/Soi-thu-nhap-khung-cua-cac-Youtuber-kiem-nhieu-tien-nhat-nam-2021-a1-1642685320-990-width900height506.jpg" alt="" />
                                <p className='corusel2-title'> <span><h1>MrBeast Gaming</h1></span> <br /> When considering the average cost of a Super Bowl ad, Then compare it to MrBeast's all-time views, which has 17 billion views. It can be roughly assumed that his main channel alone is worth at least $850 million and when all estimates are not exaggerated, the value of a famous YouTuber's YouTube channel easily surpasses $20 billion.</p>
                                
                            </div>
                        </SwiperSlide>
                        {/* Corusel 3 */}
                        <SwiperSlide>
                        <div className="header-corusel3">
                            <div className="img"></div>
                               <img src="https://www.online-station.net/wp-content/uploads/2022/10/MrBeast-03-900x506.jpg" alt="" /><br />
                                <p className='corusel3-title'> <span><h1>$456,000 Squid Game In Real Life!</h1></span> <br /> Typically MrBeast pumps out videos on a regular basis, averaging roughly two posts a month on his main channel. His normal routine has gotten off to a quieter start in 2022, though, with only five videos posted since January. However, there’s a reason for that: MrBeast is working on two “Squid Game-level videos at the same time” that could contend with his $3.5 million dollar price tag recreation of the widely popular South Korean survival drama, “$456,000 Squid Game In Real Life!“</p>
                                 
                            </div>
                        </SwiperSlide>
                        {/* Corusel 4 */}
                        <SwiperSlide>
                        <div className="header-corusel4">
                             <img src="https://www.online-station.net/wp-content/uploads/2022/11/MrBeast-02-900x506.jpg" alt="" />   
                            <p className='corusel4-title'> <span><h1>MrBeast YouTube</h1></span> <br /> recently youPatrick Bet-DavidFinancial experts and media entrepreneurs fromValuetainmentspoke on the channel's podcast about the value of MrBeast's YouTube channel.By revealing that the value of such channels may reach 20 billion US dollars or more than 700 billion baht ever.</p>
                            
                        </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\This\\\\\\\is\\\\\\\Section Corusel\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}


                {/* ////////////////////////////This///////is///////Popular Games//////////////////////////////// */}
                <div data-aos="fade-up" id='popular-games' className="popular-games">
                    <div  className="popular-games-bar">
                        <h1 className='pg-title'>Popular Games</h1>
                        {/* Popular Games Cards */}
                        <div className="pg-bar">
                            <a style={{"text-decoration":"none","color":"black"}} href="#minecraft">
                            <div className="popular-games-card1">
                                <img className='pg-card1-img' src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/05/MrBeast-Minecraft-Challenge.jpg" alt="" /><br /><br />
                                <h1 className='pg-card1-text'>Minecraft Game</h1>
                            </div>
                            </a>

                            <a style={{"text-decoration":"none","color":"black"}} href="#scuid">
                            <div className="popular-games-card1">
                                <img className='pg-card1-img' src="https://s3-eu-central-1.amazonaws.com/www-staging.esports.com/wp-media-folder-esports-com/app/uploads/2021/10/MrBeast-Squid-Game.jpg" alt="" /><br /><br />
                                <h1 className='pg-card1-text'>Scuid Game</h1>
                            </div>
                            </a>
                            <a style={{"text-decoration":"none","color":"black"}} href="#game">
                            <div className="popular-games-card1">
                                <img className='pg-card1-img' src="https://i.ytimg.com/vi/kX3nB4PpJko/maxresdefault.jpg" alt="" /><br /><br />
                                <h1 className='pg-card1-text'>Resistant Game</h1>
                            </div>
                            </a>

                            <a style={{"text-decoration":"none","color":"black"}} href="#survl">
                            <div className="popular-games-card1">
                                <img className='pg-card1-img' src="https://i.ytimg.com/vi/hD1YtmKXNb4/maxresdefault.jpg" alt="" /><br /><br />
                                <h1 className='pg-card1-text'>Survival Game</h1>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
                {/* ////////////////////////////This///////is///////Popular Games//////////////////////////////// */}


                {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\This\\\\\\\is\\\\\\\\Videos 2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
                <div data-aos="fade-up" id='videos' className="videos1">
                    <h1 className='videos-title'>Gaming Videos</h1>
                    <h1 id='minecraft' className='videos-text'>Minecraft</h1>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay
                        className="videos-bar"
                    >
                        {/* Card1 */}
                        <SwiperSlide className='video-card1'>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/6T67I2w1G2U" title="Extreme $1,000,000 Minecraft Challenge!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                        {/* Card2 */}
                        <SwiperSlide className='video-card1'>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/wwkH0prchjQ" title="Minecraft Speedrunner VS $1,000,000 MrBeast Challenge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                        {/* Card3 */}
                        <SwiperSlide className='video-card1'>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/JeTkMdw6RK8" title="World's Largest Experiment!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                        {/* Card4 */}
                        <SwiperSlide className='video-card1'>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/rncjTx-rRVc" title="100 Youtuber Minecraft Battle Royale!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                        {/* Card5 */}
                        <SwiperSlide className='video-card1'>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/IPtpwh7r0Eo" title="$2 VS $16,000 Minecraft House!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                        {/* Card6 */}
                        <SwiperSlide className='video-card1'>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/jl7whFSiE0Q" title="Minecraft, But It's Only One Block!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                        {/* Card7 */}
                        <SwiperSlide className='video-card1'>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/7LAUHAU8o8M" title="MrBeast’s 1000 Player Civilization Minecraft Challenge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                        {/* Card8 */}
                        <SwiperSlide className='video-card1'>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/jk6thMe6Vq8" title="I Survived 100 Days Of Hardcore Minecraft!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                        {/* Card9 */}
                        <SwiperSlide className='video-card1'>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/W4nwlcXCk_Q" title="How I Survived Mr. Beast's Minecraft Challenge" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\This\\\\\\\is\\\\\\\\Videos 2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}


                {/* ///////////////////////////This///////is/////////Videos 2//////////////////////////////////// */}
                <div data-aos="fade-up" className="videos2">
                    <h1 id='scuid' className='videos2-title'>Scuid Game</h1>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay
                        className="video2-bar"
                    >
                        {/* Cards 1 */}
                        <SwiperSlide>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/0e3GPea1Tyg" title="$456,000 Squid Game In Real Life!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/FKuLIrwIjt8" title="Extreme Squid Game Challenge!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/VQcO_PYVx3o" title="Making MrBeast’s Squid Game in 10 Days" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/sA2bR0BRfVY" title="Mr Beast Squid Game Review" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* ///////////////////////////This///////is/////////Videos 2//////////////////////////////////// */}


                {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\This\\\\\\\is\\\\\\\\Videos 3\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
                <div data-aos="fade-up" className="videos3">
                    <h1 id='survl' className='videos3-title'>Survive Prison</h1>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="videos3-bar"
                        autoplay
                    >
                        <SwiperSlide>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/hD1YtmKXNb4" title="$10,000 Every Day You Survive Prison" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/nM89Wl03Q4g" title="I Survived 50 Hours In A Maximum Security Prison" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/r7zJ8srwwjk" title="I Spent 50 Hours In Solitary Confinement" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/3jS_yEK8qVI" title="World’s Most Dangerous Escape Room!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\This\\\\\\\is\\\\\\\\Videos 3\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}


                {/* ///////////////////////////This///////is/////////Videos 4//////////////////////////////////// */}
                <div data-aos="fade-up" className="videos4">
                    <h1 id="game" className='videos4-title'>Resistant Game</h1>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay
                        className='videos4-bar'
                    >
                        <SwiperSlide>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/kX3nB4PpJko" title="Last To Take Hand Off Jet, Keeps It!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/qIsgdOVGA04" title="Last To Take Hand Off Lamborghini, Keeps It" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/Ims5p6wjW9s" title="Last To Take Hand Off Boat, Keeps It" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                        <SwiperSlide>
                        <iframe width="327" height="183" src="https://www.youtube.com/embed/D9lVNzyhYnc" title="Surviving 24 Hours Straight In The Bermuda Triangle" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* ///////////////////////////This///////is/////////Videos 4//////////////////////////////////// */}


                {/* ///////////////////////////This///////is/////////MrBeast Food///////////////////////////////// */}
                <div className="mrbeast-food">
                    <h1 id="food" className="mb-food-title">MrBeast Food</h1>
                    <div className="mrbeast-food-bar">
                        <div data-aos="fade-right" className="mr-food-img-bar">
                            <img src="https://a.storyblok.com/f/171241/446x399/733c50771f/mrbeast-mrbeast-burger.png/m/" alt="" className="mb-food-image" />
                        </div>
                        <div data-aos="fade-left" className="mr-food-text-bar">
                            <h1>THE EVENT</h1><br />
                            <p>On November 19, 2020, fans of MrBeast descended upon the town of Wilson, North Carolina—just a few miles from Jimmy's hometown of Greenville, to enjoy the world's first free restaurant. MrBeast and his best friends, Chandler, Chris, and Karl, hosted thousands of fans during a pop-up event for MrBeast Burger. Fans enjoyed an authentic one-of-a-kind experience featuring branding, packaging, uniforms and signage along with a free meal. Check out the video featured on</p><br /><br />
                            <a className='mr-food-btn' target="_blank" href="https://www.mrbeastburger.com/">Review</a>
                        </div>
                    </div>

                    
                </div>
                {/* ///////////////////////////This///////is/////////MrBeast Food///////////////////////////////// */}


                {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\This\\\\\\\is\\\\\\\\ABout us\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
                <div id='about' className="about">
                    <h1 className='about-title'>About Us</h1>
                    <div className="about-bar">
                        <div data-aos="fade-right" className="about-bar-title">
                            <h1>MrBeast</h1>
                            <p>MrBeast is an award-winning digital content creator known for his over-the-top stunts and charitable endeavors. He has joined forces with Virtual Dining Concepts to create MrBeast Burger–a virtual restaurant brand, now available to order across the U.S. for delivery only. MrBeast Burger operates out of existing restaurant kitchens, allowing restaurateurs to add a new source of revenue without impacting the operation. Customers can only order MrBeast Burger via the proprietary app or through major food delivery service apps. MrBeast Burger is available for restaurants to prepare out of their existing kitchens as a way to generate a new revenue stream—the menu is accessed only via apps and it is delivered directly to your door.</p>
                        </div>
                        <div data-aos="fade-left" className="about-bar-img">
                            <img src="https://image-cdn.essentiallysports.com/wp-content/uploads/mrbeast-boxing-1110x648.png" alt="" />
                        </div>
                    </div>
                </div>
                {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\This\\\\\\\is\\\\\\\\ABout us\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}


                {/* ///////////////////////////This///////is/////////Footer////////////////////////////////////// */}
                <div data-aos="fade-up" className="footer">
                    <div className="footer-bar">
                        <div className="footer-logo">
                            <h1 className='footer-logo-text'><a href="#header">MrBeast</a></h1>
                            <p className='footer-lorem'>Jimmy Donaldson (born May 7, 1998), better known as MrBeast, is an American YouTube personality, credited with pioneering a genre of YouTube videos that centers on expensive stunts. His main channel, "MrBeast", is the fourth-most-subscribed on the platform, and the highest by any individual.</p>
                        </div>
                        <div className="footer-navs">
                                <a href="#Home">Home</a><br />
                                <a target="_blank" href="https://www.youtube.com/user/mrbeast6000">YouTube</a><br />
                                <a href="#popular-games">Popular Games</a><br />
                                <a href="#videos">Videos</a><br />
                                <a href="#food">MrBeast FooD</a><br />
                                <a href="#about">About</a><br />
                        </div>
                        <div className="footer-social">
                           <i class="bi bi-youtube"></i> <i class="bi bi-telegram"></i> <i class="bi bi-instagram"></i>  <i class="bi bi-tiktok"></i> <i class="bi bi-linkedin"></i> <i class="bi bi-globe"></i>
                        </div> <br /><br /><br /> <br /><br /> <hr /><br /><br />
                        <p className='footer-text'>©2022 RustamjonDeveloper. All rights reserved.</p>
                    </div>
                </div>
                {/* ///////////////////////////This///////is/////////Footer////////////////////////////////////// */}

            </div>
            {/* /////////////////////////////////This//////is ///// Container ////////////////////////////////////*/}
        </>
    );
};


export default Home;