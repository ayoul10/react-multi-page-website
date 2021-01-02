import React, {Component} from "react";
import {Redirect} from "react-router-dom";

class NewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogged: false,
            apiParams: {
                firstNew:"",
                title:"",
                imageSrc:"",
                date: "",
                description: "",
                link: ""
            }
        };
    }

    SumbitNewArticle = event => {

        event.preventDefault();

        let firstNew = this.state.apiParams.firstNew;
        let title= this.state.apiParams.title;
        let imageSrc = this.state.apiParams.imageSrc;
        let date = this.state.apiParams.date;
        let description = this.state.apiParams.description;
        let link = this.state.apiParams.link;

    };
    render() {
        return (
            <div className="container">
                <form onSubmit={this.SumbitNewArticle} className="form-signin">
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                            />
                            <input
                                type="text"
                                name="imageSrc"
                                placeholder="Image Source"
                            />
                            <input
                                type="text"
                                name="date"
                                placeholder="Date"
                            />
                            <input
                                type="text"
                                name="description"
                                placeholder="Description"
                            />
                            <input
                                type="text"
                                name="link"
                                placeholder="Link"
                            />
                            <input
                                type="boolean"
                                name="firstNew"
                                placeholder="firstNew"
                            />
                            <input type="submit" value="Login" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

/*
class NewForm extends Component{
    key = 11223344;

    postData = event => {
            event.preventDefault();
        try {
            let firstNews;
            let myForm= document.getElementById('submit-form');
            let formData= new FormData(myForm);
            firstNews = !!'on'.localeCompare((formData.get('firstNew').toString()));
            let result = fetch('https://d9qoarugmf.execute-api.eu-west-1.amazonaws.com/api/news?key=11223344',{
                    method: 'post',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        {
                            firstNew: firstNews,
                            title: formData.get('title'),
                            imageSrc: formData.get('imageSrc'),
                            date: formData.get('date'),
                            description: formData.get('description') ,
                            link: formData.get('link')
                        }
                    )
                });

                console.log(result);

        } catch(e){
            console.log(e);
        }

    }

    render(){
        return(
            <>
                <div className="main-block" id="newform">
                    <div className="left-part" id="newform">
                        <i className="fas fa-envelope" id="newform" />
                        <i className="fas fa-at" id="newform" />
                        <i className="fas fa-mail-bulk" id="newform" />
                    </div>
                    <form id="newform">
                        <div className="info" id="newform">
                            <input className="fname" type="text" name="name" placeholder="Full name" id="newform"/>
                            <input type="text" name="name" placeholder="Email" id="newform"/>
                            <input type="text" name="name" placeholder="Phone number" id="newform"/>
                            <input type="text" name="name" placeholder="Website" id="newform"/>
                        </div>
                        <div>
                            <textarea rows="4" id="newform"/>
                        </div>
                        <button id="newform" type="submit" href="/">Submit</button>
                    </form>
                </div>
            </>
        );

    }
}
*/
export default NewForm;

