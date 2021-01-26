import React, { Component } from 'react'
import { Input } from 'reactstrap';

import CheckBox from './CheckBox';

type AvailabilityStates = {
    availability: any;
}

class Availability extends React.Component<{}, AvailabilityStates> {
    constructor(props: any) {
        super(props)
        this.state = {
            availability: [
                { id: 1, value: "Sunday", isChecked: false },
                { id: 2, value: "Monday", isChecked: false },
                { id: 3, value: "Tuesday", isChecked: false },
                { id: 4, value: "Wednesday", isChecked: false },
                { id: 5, value: "Thursday", isChecked: false },
                { id: 6, value: "Friday", isChecked: false },
                { id: 7, value: "Saturday", isChecked: false }
            ]
        }
    }

    handleAllChecked = (event: any) => {
        let availability = this.state.availability

        availability.forEach((availability: any) => 
            availability.isChecked = event.target.checked)

        this.setState({ availability: availability })
    }

    handleCheckChildElement = (event: any) => {
        let availability = this.state.availability

        availability.forEach((availability: any) => {
            if (availability.value === event.target.value)
                availability.isChecked = event.target.checked
        })

        this.setState({ availability: availability })
    }

    render() {
        return (
            <div>
                <Input
                    type="checkbox"
                    className="checkbox"
                    onChange={this.handleAllChecked}
                    value="checkedall" />
                    Check / Uncheck All
                <ul>
                    {this.state.availability.map((availability: any, index: any) => {
                        return (<CheckBox key={index} handleCheckChildElement={this.handleCheckChildElement}  {...availability} />)
                    })
                    }
                </ul>
            </div>
        );
    }
}

export default Availability;