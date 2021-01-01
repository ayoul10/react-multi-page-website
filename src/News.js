import React, {Component} from "react";

class News extends Component{
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
                        news: result,
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
        } else {
            return(
                <>
                    <div className="news_background_wrapper">

                        <div className="news">
                            <div className="news_header">
                                <h3>NEWS</h3>
                                <div className="news_line">&nbsp;</div>
                                <a href="#viewall" className="view_all_news">VIEW ALL</a>
                            </div>

                            <article className="main_article">
                                <div className="main_arcticle_img">
                                    <img
                                        src={"Home - Institut d'Estudis Espacials de Catalunya_files/Nuwa+Cliff+and+Valley+Cover+Image.webp"}
                                        alt="Main news article picture" className="image_thumbnail_title"/>
                                </div>
                                <div className="main_article_text">
                                    <div className="main_article_title">
                                        <h4>Technologically viable model for a Mars city, as imagined by a Catalan-led team</h4>
                                    </div>
                                    <div className="main_article_date">2020-11-25 15:25:00</div>
                                    <div className="main_article_description">A proposal for a city on planet Mars by a Catalan-led team
                                        was presented on Saturday, 17 October 2020, in the final of the Mars Society competition
                                    </div>
                                    <a href="#" className="main_article_link">Read More</a>
                                </div>
                            </article>

                            <div className="other_articles">
                                <div className="first_two_articles">
                                    <article className="other_article_1">
                                        <div className="other_article_margins">
                                            <img src={"Home - Institut d'Estudis Espacials de Catalunya_files/sonet_mars.webp"}
                                                 alt="article 1" className="image_thumbnail"/>
                                        </div>
                                        <div className="title">
                                            <h4>IEEC researchers lead project selected among the finalists of the Mars Society
                                                competition to develop a city on the red planet</h4>
                                        </div>
                                        <div className="date">2020-11-25 15:25:00</div>
                                        <div className="description">The Mars city proposal is led by researchers from the Institute of
                                            Space Studies of Catalonia (IEEC) at the Institute of Space Sciences (ICE, CSIC), the
                                            Polytechnic University of Catalonia (UPC) and the Institute of Cosmos Sciences of the
                                            University of Barcelona (ICCUB).
                                        </div>
                                        <a href="#" className="link">Read More</a>
                                    </article>
                                    <article className="other_article_2">
                                        <div className="other_article_margins">
                                            <img src={"Home - Institut d'Estudis Espacials de Catalunya_files/PR_Image1.webp"}
                                                 alt="article 2" className="image_thumbnail"/>
                                        </div>
                                        <div className="title">
                                            <h4>A proposal for the new generation Einstein Telescope observatory — potential
                                                infrastructure of the future</h4>
                                        </div>
                                        <div className="date">2020-11-25 15:25:00</div>
                                        <div className="description">The Einstein Telescope is an ambitious third-generation
                                            gravitational-wave ground-based observatory project.
                                        </div>
                                        <a href="#" className="link">Read More</a>
                                    </article>
                                </div>
                                <div className="last_two_articles">
                                    <article className="other_article_3">
                                        <div className="other_article_margins">
                                            <img src={"Home - Institut d'Estudis Espacials de Catalunya_files/PR_Image1(1).webp"}
                                                 alt="article 3" className="image_thumbnail"/>
                                        </div>
                                        <div className="title">
                                            <h4>Two IEEC – UPC nanosatellites have been sent to space to study the polar regions with
                                                the help of artificial intelligence</h4>
                                        </div>
                                        <div className="date">2020-11-25 15:25:00</div>
                                        <div className="description">The FSSCat mission was launched today with a Vega SSMS rocket of
                                            the European Space Agency (ESA), from the European spaceport in Kourou, French Guiana.
                                        </div>
                                        <a href="#" className="link">Read More</a>
                                    </article>
                                    <article className="other_article_4">
                                        <div className="other_article_margins">
                                            <img src={"Home - Institut d'Estudis Espacials de Catalunya_files/SS433_PR_Image1.webp"}
                                                 alt="article 4" className="image_thumbnail"/>
                                        </div>
                                        <div className="title">
                                            <h4>Strange cosmic coincidence: gamma-ray heartbeat puzzles scientists</h4>
                                        </div>
                                        <div className="date">2020-11-25 15:25:00</div>
                                        <div className="description">Astronomers detected a cosmic gas cloud that beats with the rhythm
                                            of a black hole 100 light years apart, in a microquasar.
                                        </div>
                                        <a href="#" className="link">Read More</a>
                                    </article>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            );

        }
    }
}

export default News;

//TODO: Make news dynamic