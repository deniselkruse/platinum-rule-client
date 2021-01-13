import React from 'react';
import { Row } from 'reactstrap';

class Footer extends React.Component {

    render() {
        return (
            <div className="footerDiv">
                <footer className="footer">
                    <Row className="footerRow">
                        <br />
                        <br />
                    </Row>
                    <Row className="footerRow">
                        {/* © Copyright 2020 The Platinum Rule */}
                </Row>
                    <br />
                </footer>
            </div>
        );
    }
}

export default Footer;