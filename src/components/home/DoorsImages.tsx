import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import doors1 from '../../assets/doors1.jpg';
import doors2 from '../../assets/doors2.jpg';
import doors3 from '../../assets/doors3.jpg';
import doors4 from '../../assets/doors4.jpg';
import doors5 from '../../assets/doors5.jpg';
import doors6 from '../../assets/doors6.jpg';
import doors7 from '../../assets/doors7.jpg';
import doors8 from '../../assets/doors8.jpg';
import doors9 from '../../assets/doors9.jpg';
import doors10 from '../../assets/doors10.jpg';

class DoorsImages extends React.Component {

    render() {
        const items = [
            {
                src: `${doors1}`,
                altText: '',
                className: 'doors',
                width: '100%'
            },
            {
                src: `${doors2}`,
                altText: '',
                className: 'doors',
                width: '100%'
            },
            {
                src: `${doors3}`,
                altText: '',
                className: 'doors',
                width: '100%'
            },
            {
                src: `${doors4}`,
                altText: '',
                className: 'doors',
                width: '100%'
            },
            {
                src: `${doors5}`,
                altText: '',
                className: 'doors',
                width: '100%'
            },
            {
                src: `${doors6}`,
                altText: '',
                className: 'doors',
                width: '100%'
            },
            {
                src: `${doors7}`,
                altText: '',
                className: 'doors',
                width: '100%'
            },
            {
                src: `${doors8}`,
                altText: '',
                className: 'doors',
                width: '100%'
            },
            {
                src: `${doors9}`,
                altText: '',
                className: 'doors',
                width: '100%'
            },
            {
                src: `${doors10}`,
                altText: '',
                className: 'doors',
                width: '100%'
            }
        ]
        return (
            <div>
                <UncontrolledCarousel
                    items={items}
                    indicators={false}
                    autoPlay={true}
                    controls={false}
                    interval={3000}
                />
            </div>
        )
    }
}

export default DoorsImages;