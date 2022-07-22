import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import FlashCard from './FlashCard';


const FlashDeals = ({productItems}) => {
    return (
        <>
            <section className="flash light-bg pt-50 pb-50">
                <div className="container">
                    <SectionTitle />
                    <FlashCard productItems={productItems}/>
                </div>
            </section>
        </>
    )
}

export default FlashDeals