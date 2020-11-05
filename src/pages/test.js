import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App_Test';
import { headData } from '../mock/test_data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import gifs from '../Imports/ImportGifs'
import ReactPlayer from "react-player"

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
    {/* <img src={otterGIF} alt="Otter dancing with a fish" /> */}
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


// import React from "react"
// import ReactPlayer from "react-player"

// function App() {
//   return (
//     <div>
//       <ReactPlayer
//         url="https://www.youtube.com/watch?v=4Hg1Kudd_x4&ab_channel=HomeworkRadio"
//         controls='true'
//       />
//     </div>
//   )
// }

// export default App