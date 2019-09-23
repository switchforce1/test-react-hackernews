import React from 'react'
import {DEFAULT_START, DEFAULT_LIMIT} from './constances'
import Pagination from "./Pagination";
import ListDisplay from './ListDisplay'


class NewsList extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            type : props.type,
            start : ('start' in props)? props.start : DEFAULT_START,
            limit : ('limit' in props) ? props.limit : DEFAULT_LIMIT,
            data: []
        };
        console.log('--*-*-*-*-************************-----*-*-*-*-**-*-*')
        console.log(this.state)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        const props = nextProps;
        this.setState({
            type : props.type,
            start : ('start' in props)? props.start : DEFAULT_START,
            limit : ('limit' in props) ? props.limit : DEFAULT_LIMIT,
            data: []
        });
    }
    handleDefaultClick = () => {
        this.props.handleType({type: 'top' , start :DEFAULT_START , limit: DEFAULT_LIMIT});
    }
    handleNewClick = () => {
        this.props.handleType({type: 'new' , start :DEFAULT_START , limit: DEFAULT_LIMIT});
    }
    handlePastClick = () => {
        this.props.handleType({type: 'past' , start :DEFAULT_START , limit: DEFAULT_LIMIT});
    }

    handleCommentsClick = () => {
        this.props.handleType({type: 'comments' , start :DEFAULT_START , limit: DEFAULT_LIMIT});
    }
    handleAskClick = () => {
        this.props.handleType({type: 'ask' , start :DEFAULT_START , limit: DEFAULT_LIMIT});
    }

    handleShowClick = () => {
        this.props.handleType({type: 'show' , start :DEFAULT_START , limit: DEFAULT_LIMIT});
    }
    handleJobClick = () => {
        this.props.handleType({type: 'job' , start :DEFAULT_START , limit: DEFAULT_LIMIT});
    }

    handleSubmitClick = () => {
        this.props.handleType({type: 'top' , start :DEFAULT_START , limit: DEFAULT_LIMIT});
    }

    render () {
        console.log("*************************************** ************************* 00000000000000000")
        console.log(this.props)
        const type = this.props.type
        return (
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" onClick={this.handleDefaultClick}>Hacker news</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <button className="nav-link" onClick={this.handleNewClick}> New <span className="sr-only">(current)</span></button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link"  onClick={this.handlePastClick}> Past <span className="sr-only"> </span></button>
                            </li>
                            <li className="nav-item ">
                                <button className="nav-link" onClick={this.handleCommentsClick}> Comments  <span className="sr-only"> </span></button>
                            </li>
                            <li className="nav-item ">
                                <button className="nav-link" onClick={this.handleAskClick}> ask <span className="sr-only"> </span></button>
                            </li>
                            <li className="nav-item ">
                                <button className="nav-link" onClick={this.handleShowClick}> Show <span className="sr-only"> </span></button>
                            </li>
                            <li className="nav-item ">
                                <button className="nav-link" onClick={this.handleJobClick}> Jobs <span className="sr-only"> </span></button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={this.handleSubmitClick}> Submit <span className="sr-only"> </span></button>
                            </li>
                        </ul>
                    </div>
                </nav>


                <ListDisplay type={type}/>
                <div className="col-xs-12 col-12">
                    <br/>
                    <Pagination />
                </div>
            </div>
        );
    }
}

export default NewsList;