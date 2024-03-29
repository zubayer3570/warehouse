import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Items from '../Items/Items/Items';
import SupplierComment from '../SupplierComment/SupplierComment/SupplierComment';

const Home = () => {

    return (
        <div className='home'>
            <Banner />
            <Features />
            <SupplierComment />
            <Items />
            <div className="text-center mt-5">
                <Button variant='dark'>
                    <Link to='/manage-inventory' className='text-white text-decoration-none'>Manage Inventory</Link >
                </Button>
            </div>
            <Footer />
        </div>
    );
};

export default Home;