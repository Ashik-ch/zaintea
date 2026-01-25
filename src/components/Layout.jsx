import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import MenuPreview from './MenuPreview';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

const Layout = () => {
    return (
        <div className="bg-zain-dark min-h-screen text-zain-beige font-sans selection:bg-zain-red selection:text-white cursor-none">
            <CustomCursor />
            <Navbar />
            <Hero />
            <About />
            <MenuPreview />
            <Gallery />
            <Contact />
            <Footer />
        </div>
    );
};

export default Layout;
