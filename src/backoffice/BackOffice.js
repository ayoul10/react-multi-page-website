import React, {Component} from "react";
import "./backoffice.css";
class BackOffice extends Component{
    render(){
        return(
            <main id="main-backoffice backoffice">
                <h1>Hello World!</h1>

                <div>
                    <h2>Make an news article</h2>
                    <form id="new_news_form" action="/action_page.php">

                        <label for="fnew">First news article?:</label><br/>
                        <input type="checkbox" id="fnew" name="fnew" value="False"/><br/>

                        <label for="title">Title:</label><br/>
                        <input type="text" id="title" name="title"/><br/><br/>

                        <label for="imageSrc">Image Source:</label><br/>
                        <input type="text" id="imageSrc" name="imageSrc"/><br/><br/>

                        <label for="date">Date:</label><br/>
                        <input type="text" id="date" name="date"/><br/><br/>

                        <label for="description">Description:</label><br/>
                        <input type="text" id="description" name="description"/><br/><br/>

                        <label for="link">Link:</label><br/>
                        <input type="text" id="link" name="link"/><br/><br/>

                        <input type="submit" value="Submit"/>

                </form>
            </div>

        <div>
            <h2>All articles so far:</h2>

            <button id="delete_button" type="button">Delete all articles</button>


        </div>

    </main>

        );

    }

}
export default BackOffice;