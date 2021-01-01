import React, {Component} from "react";
import "./backoffice.css";
import NewsTable from './NewsTable';
import NewForm from './NewForm';
class BackOffice extends Component{
    render(){
        return(
            <>
                <body>
                <h1 className={"bold"}>The BackOffice</h1><br/>
                <h3 className={"margin"}> Add a New Article: </h3><br/>
                <NewForm/><br />
                <h3 className={"margin"}>All News Articles So Far:</h3><br />
                <NewsTable/><br />
                </body>

            </>
        );

    }

}
export default BackOffice;