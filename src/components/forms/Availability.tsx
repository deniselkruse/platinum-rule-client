import React, { Component } from 'react'
import { Input } from 'reactstrap';

type AvailabilityProps = {
    setAvailability: (e: any) => void;
    availabilityArray: Array<string>;
    setAvailabilityArray: (e: any) => void;
}

type AvailabilityStates = {
    availability: any;
    Sundays: boolean;
    Mondays: boolean;
    Tuesdays: boolean;
    Wednesdays: boolean;
    Thursdays: boolean;
    Fridays: boolean;
    Saturdays: boolean;
}

class Availability extends React.Component<AvailabilityProps, AvailabilityStates> {
    constructor(props: AvailabilityProps) {
        super(props)
        this.state = {
            availability: [
                { id: 1, value: "Sundays", isChecked: false },
                { id: 2, value: "Mondays", isChecked: false },
                { id: 3, value: "Tuesdays", isChecked: false },
                { id: 4, value: "Wednesdays", isChecked: false },
                { id: 5, value: "Thursdays", isChecked: false },
                { id: 6, value: "Fridays", isChecked: false },
                { id: 7, value: "Saturdays", isChecked: false }
            ],
            Sundays: false,
            Mondays: false,
            Tuesdays: false,
            Wednesdays: false,
            Thursdays: false,
            Fridays: false,
            Saturdays: false
        }
    }



    handleAllChecked = (event: any) => {
        let availability = this.state.availability
        availability.forEach((availability: any) =>
            availability.isChecked = event.target.checked)
        this.props.setAvailabilityArray([event.target.value])
    }

    handleCheckChildElement = (event: any) => {
        let availability = this.state.availability
        console.log(event.target.value)
        this.props.setAvailability(event.target.value)
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
                        return (
                            <li>
                                <Input
                                    key={availability.id}
                                    onChange={this.handleCheckChildElement}
                                    type="checkbox"
                                    checked={availability.isChecked}
                                    value={availability.value} />
                                {availability.value}
                            </li>

                            //  key = { index } handleCheckChildElement = { this.handleCheckChildElement }  {...availability})
                        )
                    })
                    }
                </ul>
            </div>
        );
    }
}

export default Availability;