import React, {useState, useEffect} from 'react';
import './Banner.scss';
/*import Carousel from 'react-material-ui-carousel';*/
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from './axios';
import requests from './requests';
import CarouselItem from './CarouselItem';

function Banner() {
    const [movie, setMovie] = useState([]);
    const [current, setCurrent] = useState(5);
    

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
                setMovie([
                    request.data.results[
                        Math.floor(Math.random() * request.data.results.length - 1)]
                    ]
                );
            return request;
        }
        
        fetchData();
    }, []);

    let items = [
       
        {src: 'https://a-static.besthdwallpaper.com/iron-man-3-movie-poster-wallpaper-2560x1080-11921_14.jpg'},
        {src: 'https://i.imgur.com/GXV34ev.jpg'},
        {src: 'https://static.wikia.nocookie.net/starwars/images/0/00/TheMandalorianSeasonTwoLogo.png/revision/latest?cb=20200904032456'},
        {src: 'https://www.monsterhunter.com/world-iceborne/assets/img/common/common/bnr_mh-movie01_en.jpg'},
        {src: 'https://asset-manager.bbcchannels.com/i/2fl7w1a40go1000'}
       
    ]; 

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1 // optional, default to 1.

        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    

   
      


    return(
       

       <div className="banner">
            
            <Carousel 
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            showDots={true}
            className="banner__posters"
            afterChange={(previousSlide, { currentSlide, onMove }) => {
                if (currentSlide === 8) {
                    currentSlide = 3;
                    setCurrent( currentSlide);
                } else if(currentSlide === 9 ) {
                    currentSlide = 4;
                    setCurrent( currentSlide);
                } else {
                    setCurrent( currentSlide);
                }
                
                console.log( ' c :  ' + ((currentSlide))   );
              }}
            >
                {
                items.map((item, i) => <CarouselItem 
                imgSrc={item.src} 
                nameOfClass={i} 
                key={i} 
                id={i} 
                isCurrent={current === (i+3)  ? true : console.log(i+3)}/>  )
                }
                
                
            </Carousel>
           
        </div>
         
    )
}

export default Banner;



/*
        <div className="banner">
            
            <Carousel className="banner__posters"
            animation={"slide"}
            next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
            prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }
            >
                <div className="prev">
                    <img src={items[2].src}/>
                </div>
                {
    
                   items.map((item, i) => <CarouselItem interval={1000} imgSrc={item.src} nameOfClass={i+1} key={i}/>)
                    
                }
                <div className="next">
                    <img src={items[2].src}/>
                </div>
            </Carousel>
        </div>
      
 */