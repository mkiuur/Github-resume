// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/main.scss';
// import Carousel from 'react-bootstrap/Carousel';

// import slide1 from "../images/profile.jpg"

// export default () => {
//   return (

//     <Carousel>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={slide1}
//           alt="this is the first slide"
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={slide1}
//           alt="this is the first slide"
//         />
//       </Carousel.Item>
//     </Carousel>
//   );
// };

import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App_Project';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Margaret Riese Resume Site'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Margaret Riese Resume Site'} />
      </Helmet>
      <App />
    </>
  );
};
