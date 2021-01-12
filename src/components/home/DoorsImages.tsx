import React, { Component } from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Carousel
                plugins={[
                    'centered',
                    {
                        resolve: autoplayPlugin,
                        options: {
                            interval: 2000,
                        }
                    },
                ]}
                animationSpeed={500}
            >
                <img src={doors1} className='doors' width='100%'/>
                <img src={doors2} className='doors' width='100%'/>
                <img src={doors3} className='doors' width='100%'/>
                <img src={doors4} className='doors' width='100%'/>
                <img src={doors5} className='doors' width='100%'/>
                <img src={doors6} className='doors' width='100%'/>
                <img src={doors7} className='doors' width='100%'/>
                <img src={doors8} className='doors' width='100%'/>
                <img src={doors9} className='doors' width='100%'/>
                <img src={doors10} className='doors' width='100%'/>
            </Carousel>
        )
    }
}

export default DoorsImages;