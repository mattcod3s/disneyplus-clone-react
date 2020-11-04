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
       
        {src: 'https://s3.eu-west-2.amazonaws.com/media.rosetheatrekingston.org/images/shows/2015/One%20Nighters/Frozen%20web%20image(1).jpg'},
        {src: 'https://vignette2.wikia.nocookie.net/disney/images/5/5e/Spider-Man_Homecoming_Banner.png/revision/latest?cb=20161209053619'},
        {src: 'https://pbs.twimg.com/media/EHRv5d_UUAEMUEk.jpg'},
        {src: 'https://i.redd.it/ls1e260sgel21.jpg'},
        {src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5298bac0-b8bf-4c80-af67-725c1272dbb0/dbqqb0j-a1b7ea16-a3b1-47b5-b7dd-aef5fa233f84.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTI5OGJhYzAtYjhiZi00YzgwLWFmNjctNzI1YzEyNzJkYmIwXC9kYnFxYjBqLWExYjdlYTE2LWEzYjEtNDdiNS1iN2RkLWFlZjVmYTIzM2Y4NC5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.kf66lt1I4Xl_lmLBEhiH3_1v9G_ODWu68zONRWbXahk'}
       
    ]; 

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter: 128 // optional, default to 1.

        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter: 20 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter: 35 // optional, default to 1.
        }
      };
    

   
      


    return(
       

       <div className="banner">
            
            <Carousel 
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2500}
            showDots={false}
            centerMode={false}
            partialVisible={true}
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
                isCurrent={current === (i+2)  ? true : false}/>  )
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