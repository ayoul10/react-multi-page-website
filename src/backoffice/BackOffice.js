import React, {Component} from "react";
import "./backoffice.css";
import NewsTable from './NewsTable';
import NewForm from './NewForm';
class BackOffice extends Component{
    render(){
        return(
            <>
                <header>
                    <h1>The BackOffice</h1>
                </header>

                <h3> Add a New Article: </h3>
                <NewForm/>
                <h3>All News Articles So Far:</h3>
                <NewsTable/>
            </>
        );

    }

}
export default BackOffice;