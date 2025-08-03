import { hasSelectionSupport } from '@testing-library/user-event/dist/utils'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Highlight from './ui/Highlight'

const Highlights = () => {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">Library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight icon={<FontAwesomeIcon icon="bolt" />} 
                            title="Easy and Quick" 
                            para="Get access to the book you purchase INSTANTLY"/>
                        <Highlight icon={<FontAwesomeIcon icon="book" />} 
                            title="10,000+ Books" 
                            para="Library has books in all your favorite genres!"/>
                        <Highlight icon={<FontAwesomeIcon icon="tags" />} 
                            title="Reasonable Prices" 
                            para="Library has the best prices... Like ever."/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Highlights