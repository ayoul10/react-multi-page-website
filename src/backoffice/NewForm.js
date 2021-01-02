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
                <div>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={this.handleTitleChanged.bind(this)}
                        value={this.state.title}

                    />
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={this.handleTitleChanged.bind(this)}
                        value={this.state.title}

                    />
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={this.handleTitleChanged.bind(this)}
                        value={this.state.title}

                    />
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={this.handleTitleChanged.bind(this)}
                        value={this.state.title}

                    />
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={this.handleTitleChanged.bind(this)}
                        value={this.state.title}

                    />
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={this.handleTitleChanged.bind(this)}
                        value={this.state.title}

                    />
                    <button onClick={this.handleButtonClicked.bind(this)}>
                        Submit
                    </button>
                </div>
                <form onSubmit={this.DeleteAll} >
                    <input type="submit" value="Delete All Articles" />
                </form>
            </div>
        );
    }
}

export default NewForm;