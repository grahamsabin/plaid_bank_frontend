import React, {Component} from "react";
import { Extension } from "typescript";
import App from "../../App";
import { Link, LinkProps } from 'react-router-dom';


class LandingPage extends Component {
    render() {
        return(
            <div>
                
                <h1>HELLO</h1>
                <App/>
            </div>
        )
    }
}

export default LandingPage;
{/* <Button to={'../App'}>Test </Button> */}