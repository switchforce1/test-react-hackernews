import React from 'react'
import {NEW_STORIES_URL, TOP_STORIES_URL, BEST_STORIES_URL, ASK_STORIES_URL, DEFAULT_START, DEFAULT_LIMIT} from './constances'
import NewsDisplay from "./NewsDisplay";
import Pagination from "./Pagination";


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
    componentDidMount(){
        this.reload()
    }

    reload(){
        var type  = this.state.type;
        var url = null;
        switch (type) {
            case 'ask':
                url = ASK_STORIES_URL;
                break;
            case 'top':
                url = TOP_STORIES_URL;
                break;
            case 'new':
                url = NEW_STORIES_URL;
                break;
            case 'best':
                url = BEST_STORIES_URL;
                break;
            default:
                console.log('Sorry, we are out of ' + type + '.');
        }
        this.setStateData(url)
    }

    setStateData(url) {
        fetch(url)
            .then(res => res.json())
            .then((jsonData) =>{
                jsonData = jsonData.slice(this.state.start, this.state.limit)
                console.log(jsonData)
                this.setState({type: this.state.type, data: jsonData, status: 'SUCCESS'})
            })
            .catch(() => this.setState({type: this.state.type, data: [], status: 'FAILED'}))
    }

    handleNewClick = () => {
        this.props.handleType({type: 'top' , start :DEFAULT_START , limit: DEFAULT_LIMIT});
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
        this.props.handleType({type: 'top' , start :DEFAULT_START , limit: DEFAULT_LIMIT});
    }
    handleJobsClick = () => {
        this.props.handleType({type: 'jobs' , start :DEFAULT_START , limit: DEFAULT_LIMIT});
    }

    handleSubmitClick = () => {
        this.props.handleType({type: 'top' , start :DEFAULT_START , limit: DEFAULT_LIMIT});
    }

    render () {
        this.reload();
        const theNews = this.state.data;
        return (
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Hacker news</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={this.handleNewClick}> New <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={this.handlePastClick}> Past <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={this.handleCommentsClick}> Comments  <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={this.handleAskClick}> ask <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={this.handleShowClick}> Show <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={this.handleJobsClick}> Jobs <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="#" onClick={this.handleSubmitClick}> Submit <span className="sr-only">(current)</span></a>
                            </li>
                        </ul>
                    </div>
                </nav>


                <div className="col-xs-12 col-12">
                    <h1> News </h1>
                    <ol>
                    { theNews.map((item) => (
                        <li key={item}>
                            <NewsDisplay id={item} key={item}/>
                        </li>
                    )) }
                    </ol>
                </div>
                <div className="col-xs-12 col-12">
                    <br/>
                    <Pagination />
                </div>
            </div>
        );
    }
}

export default NewsList;