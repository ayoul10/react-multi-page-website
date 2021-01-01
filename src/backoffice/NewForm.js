import React, {Component} from "react";
class NewForm extends Component{
    key = 11223344;
    render(){
        return(
            <>
                <div className="col-lg-9 order-1 order-lg-2">

                    <form className="contact-form" action={"https://d9qoarugmf.execute-api.eu-west-1.amazonaws.com/api/news​?key=" + this.key} method="POST">

                        <div className="form-row">
                            <div className="form-group col-lg-6">
                                <label className="required font-weight-bold text-dark text-2">Title</label>
                                <input type="text" data-msg-required="Please enter the title." maxLength="100"
                                       className="form-control" name="title" required/>
                            </div>
                            <div className="form-group col-lg-6">
                                <label className="required font-weight-bold text-dark text-2">Image Source</label>
                                <input type="imageSrc"  data-msg-required="Please enter the image source."
                                       maxLength="100"
                                       className="form-control" name="imageSrc" required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label className="font-weight-bold text-dark text-2">Date</label>
                                <input type="text"  data-msg-required="Please enter the date."
                                       maxLength="100" className="form-control" name="date" required/>
                            </div>
                            <div className="form-group col">
                                <label className="font-weight-bold text-dark text-2">Link</label>
                                <input type="text" data-msg-required="Please enter the link to the article."
                                       maxLength="100" className="form-control" name="link" required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label className="font-weight-bold text-dark text-2">First News?</label>
                                <input type="checkbox" className="form-control" name="firstNew" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <label className="required font-weight-bold text-dark text-2">Description</label>
                                <textarea maxLength="5000" data-msg-required="Please enter the description." rows="8"
    className="form-control" name="description" required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <input type="submit" value="Send Message" className="btn btn-primary btn-modern"
                                       data-loading-text="Loading..."/>
                            </div>
                        </div>
                    </form>

                </div>
            </>
        );

    }
}

export default NewForm;