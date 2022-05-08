import React from 'react';
import Banner from './Banner/Banner';
import Featurebanner from './Featurebanner/Featurebanner';
import Offerbanner from './Offerbanner/Offerbanner';
import Products from '../../pages/Products';
import Reviews from '../Reviews/Reviews';

const Main = () => {
    return (
        <>
            <Banner></Banner>
            <Offerbanner></Offerbanner>
            <Products></Products>
            <Reviews></Reviews>
            <Featurebanner></Featurebanner>
        </>
    );
};

export default Main;