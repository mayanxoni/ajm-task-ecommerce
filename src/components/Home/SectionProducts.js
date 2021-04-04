import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Children from '../../images/children.jpg'

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item img-fliud text-center bg-white mx-2 mt-5" data-value="1" >
      <img  src={Children} style={{maxHeight:"400px"}}/>
      <div className="  mx-auto" >
        <h4 style={{color:"#7971ea"}}>hlo</h4>
        <p>features</p>
      </div>
    </div>,
    <div className="item img-fliud text-center bg-white mx-2 mt-5" data-value="2">
      <img src={Children} style={{maxHeight:"400px"}}/>
      <div>
        <h4 style={{color:"#7971ea"}}>hii</h4>
        <p>features</p>
      </div>
    </div>,
    <div className="item img-fliud text-center bg-white mx-2 mt-5" data-value="3">
      <img src={Children} style={{maxHeight:"400px"}}/>
      <div>
        <h4 style={{color:"#7971ea"}}>hello</h4>
        <p>features</p>
      </div>
    </div>,
    <div className="item img-fliud text-center bg-white mx-2 mt-5" data-value="4">
      <img src={Children} style={{maxHeight:"400px"}}/>
      <div>
        <h4 style={{color:"#7971ea"}}>hey</h4>
        <p>features</p>
      </div>
      </div>,
    <div className="item  img-fluid text-center bg-white mx-2 mt-5" data-value="5">
      <img src={Children} style={{maxHeight:"400px"}}/>
      <div>
        <h4 style={{color:"#7971ea"}}>haha</h4>
        <p>features</p>
      </div>
    </div>,
];

const SectionProducts = () => (
  <div className="  ">
    <div className=" container  text-start">
     
        <AliceCarousel className="text-start"
            mouseTracking
            items={items}
            responsive={responsive}
        />
      
      </div>
    </div>
);

export default SectionProducts;