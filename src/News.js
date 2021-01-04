import React, {Component} from "react";
export default class News extends Component{

    state = {
        loading: true,
        news: null,
        firstNews: null
    };

    async componentDidMount() {
        const url = "https://d9qoarugmf.execute-api.eu-west-1.amazonaws.com/api/news?key=11223344"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({news: data});

        if(this.state.news.length >= 4) {
            let copy = this.state.news;
            for (let i = 0; i < 5; i++) {
                if(this.state.news[i].firstNew === "TRUE"){
                    this.setState({ firstNews: copy[i]});
                    let rip = copy.splice(i,1);
                    this.setState({news: copy});
                    break;
                }
            }

        }
        this.setState({loading: false});
    }

    render() {
        if (this.state.loading){
            return <div>Loading...</div>
        }

        if (!this.state.news){
            return <div>No News</div>
        }

        if(this.state.news.length < 4){
            return <div>Not enough News articles</div>
        }

        if (!this.state.firstNews){
            return (<div>No main article</div>);

        }

        return (
            <div className="news_background_wrapper">

                <div className="news">
                    <div className="news_header">
                        <h3>NEWS</h3>
                        <div className="news_line"/>
                        <a href="#viewall" className="view_all_news">VIEW ALL</a>
                    </div>

                    <article className="main_article">
                        <div className="main_arcticle_img">
                            <img
                                src={this.state.firstNews.imageSrc}
                                alt="Main news article picture" className="image_thumbnail_title"/>
                        </div>
                        <div className="main_article_text">
                            <div className="main_article_title">
                                <h4>{this.state.firstNews.title}</h4>
                            </div>
                            <div className="main_article_date">{this.state.firstNews.date}</div>
                            <div className="main_article_description">{this.state.firstNews.description}</div>
                            <a href={this.state.firstNews.link} className="main_article_link">Read More</a>
                        </div>
                    </article>

                    <div className="other_articles">
                        <div className="first_two_articles">
                            <article className="other_article_1">
                                <div className="other_article_margins">
                                    <img src={this.state.news[0].imageSrc}
                                         alt="article 1" className="image_thumbnail"/>
                                </div>
                                <div className="title">
                                    <h4>{this.state.news[0].title}</h4>
                                </div>
                                <div className="date">{this.state.news[0].date}</div>
                                <div className="description">{this.state.news[0].description}
                                </div>
                                <a href={this.state.news[0].link} className="link">Read More</a>
                            </article>
                            <article className="other_article_2">
                                <div className="other_article_margins">
                                    <img src={this.state.news[1].imageSrc}
                                         alt="article 2" className="image_thumbnail"/>
                                </div>
                                <div className="title">
                                    <h4>{this.state.news[1].title}</h4>
                                </div>
                                <div className="date">{this.state.news[1].date}</div>
                                <div className="description">{this.state.news[1].description}
                                </div>
                                <a href={this.state.news[1].link} className="link">Read More</a>
                            </article>
                        </div>
                        <div className="last_two_articles">
                            <article className="other_article_3">
                                <div className="other_article_margins">
                                    <img src={this.state.news[2].imageSrc}
                                         alt="article 3" className="image_thumbnail"/>
                                </div>
                                <div className="title">
                                    <h4>{this.state.news[2].title}</h4>
                                </div>
                                <div className="date">{this.state.news[2].date}</div>
                                <div className="description">{this.state.news[2].description}</div>
                                <a href={this.state.news[2].link} className="link">Read More</a>
                            </article>
                            <article className="other_article_4">
                                <div className="other_article_margins">
                                    <img src={this.state.news[3].imageSrc}
                                         alt="article 4" className="image_thumbnail"/>
                                </div>
                                <div className="title">
                                    <h4>{this.state.news[3].title}</h4>
                                </div>
                                <div className="date">{this.state.news[3].date}</div>
                                <div className="description">{this.state.news[3].description}
                                </div>
                                <a href={this.state.news[3].link} className="link">Read More</a>
                            </article>
                        </div>
                    </div>
                </div>

            </div>
        );


    }
}





