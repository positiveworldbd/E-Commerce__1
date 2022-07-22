import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import FlashCard from './FlashCard';


const FlashDeals = () => {
    return (
        <>
            <section className="flash">
                <div className="container">
                    <SectionTitle />
                    <FlashCard />
                </div>
            </section>
        </>
    )
}

export default FlashDeals