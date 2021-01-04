import React, {Component} from "react";
export default class News extends Component{

    state = {
        loading: true,
        news: null,
        firstNews: ""
    };

    async componentDidMount() {
        const url = "https://d9qoarugmf.execute-api.eu-west-1.amazonaws.com/api/news?key=11223344"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({news: data, loading: false});
        //console.log(data[0]);
    }

    render() {
        if (this.state.loading){
            return <div>Loading...</div>
        }

        if (!this.state.news){
            return <div>No News</div>
        }
    }
}





