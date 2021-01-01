import React, {Component} from "react";
import './NewsTableStyle.css'

class NewsTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            news: []
        };
    }

    componentDidMount() {
        fetch("https://d9qoarugmf.execute-api.eu-west-1.amazonaws.com/api/news")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        news: result
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, news } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <table>
                    <tr>
                        <th>Title</th>
                        <th>imageSrc</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Link</th>
                    </tr>
                    {news.map(news => (
                            <tr>
                                <td>{news.title}</td>
                                <td>{news.imageSrc}</td>
                                <td>{news.date}</td>
                                <td>{news.description}</td>
                                <td>{news.link}</td>
                            </tr>
                    ))}
                </table>
            );
        }
    }
}

/*
TODO: Delete button to delete all news articles
TODO: Determine how to get key from all news articles
 */

export default NewsTable;