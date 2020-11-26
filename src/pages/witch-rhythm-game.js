import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App_Witch_Rhythm_Game.jsx';
import { headData } from '../mock/witch_rhythm_game_data.js';
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
  