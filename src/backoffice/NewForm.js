import React, {Component} from "react";

class NewForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstNew:'',
            title:'',
            imageSrc:'',
            date: '',
            description: '',
            link: ''
        }
    }

    handleTitleChanged(event) {
        this.setState({
            title: event.target.value
        });
    }
    handleFirstNewChanged(event) {
        this.setState({
            firstNew: event.target.value
        });
    }
    handleimageSrcChanged(event) {
        this.setState({
            imageSrc: event.target.value
        });
    }
    handleDateChanged(event) {
        this.setState({
            date: event.target.value
        });
    }
    handleDescriptionChanged(event) {
        this.setState({
            description: event.target.value
        });
    }
    handleLinkChanged(event) {
        this.setState({
            link: event.target.value
        });
    }

    handleButtonClicked() {
        const payload = {
            firstNew:this.state.firstNew,
            title:this.state.title,
            imageSrc:this.state.imageSrc,
            date:this.state.date,
            description: this.state.description,
            link: this.state.link

        };
        fetch('https://d9qoarugmf.execute-api.eu-west-1.amazonaws.com/api/news?key=11223344',{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res=>res.json())
            .then((data)=>{
                console.log(data);
            });
    }
    DeleteAll = event => {

        event.preventDefault();

        fetch('https://d9qoarugmf.execute-api.eu-west-1.amazonaws.com/api/news?key=11223344',{
            method: 'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
        })
            .then(res=>res.json())
            .then((data)=>{
                console.log(data);
            });

    };

    render() {
        return (
            <div className="container">
                <div className={"form-signin"}>
                    <div className={"row"}>
                        <div className={"col"}>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            onChange={this.handleTitleChanged.bind(this)}
                            value={this.state.title}

                        />
                        <input
                            type="text"
                            name="imageSrc"
                            placeholder="Image Source"
                            onChange={this.handleimageSrcChanged.bind(this)}
                            value={this.state.imageSrc}

                        />
                        <input
                            type="text"
                            name="date"
                            placeholder="Date"
                            onChange={this.handleDateChanged.bind(this)}
                            value={this.state.date}

                        />
                        <input
                            type="text"
                            name="description"
                            placeholder="Description"
                            onChange={this.handleDescriptionChanged.bind(this)}
                            value={this.state.description}

                        />
                        <input
                            type="text"
                            name="link"
                            placeholder="Link"
                            onChange={this.handleLinkChanged.bind(this)}
                            value={this.state.link}

                        />
                        <input
                            type="boolean"
                            name="firstNew"
                            placeholder="firstNew"
                            onChange={this.handleFirstNewChanged.bind(this)}
                            value={this.state.firstNew}

                        />
                        <button onClick={this.handleButtonClicked.bind(this)} className={"newarticle"}>
                            Submit
                        </button>
                        </div>
                    </div>
            </div>
                <form onSubmit={this.DeleteAll} >
                    <input type="submit" value="Delete All Articles" />
                </form>
            </div>
        );
    }
}

export default NewForm;