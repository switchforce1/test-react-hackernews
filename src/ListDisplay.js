import React from 'react'
import {NEW_STORIES_URL, TOP_STORIES_URL, BEST_STORIES_URL,SHOW_STORIES_URL, JOB_STORIES_URL, ASK_STORIES_URL, DEFAULT_START, DEFAULT_LIMIT} from './constances'
import NewsDisplay from "./NewsDisplay";


class ListDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type : props.type,
            start : ('start' in props)? props.start : DEFAULT_START,
            limit : ('limit' in props) ? props.limit : DEFAULT_LIMIT,
            data: []
        };
    }

    componentDidMount(){
        const type  = this.state.type;
        this.setStateData(type)
    }

    setStateData(type) {

        let url = null;
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
            case 'show':
                url = SHOW_STORIES_URL;
                break;
            case 'job':
                url = JOB_STORIES_URL;
                break;
            default:
                console.log('Sorry, we are out of ' + type + '.');
        }

        fetch(url)
            .then(res => res.json())
            .then((jsonData) =>{
                jsonData = jsonData.slice(this.state.start, this.state.limit);
                this.setState({type: this.state.type, data: jsonData, status: 'SUCCESS'})
            })
            .catch(() => this.setState({type: this.state.type, data: [], status: 'FAILED'}))
    }

    componentWillReceiveProps(nextProps, nextState) {
        const type = nextProps.type;
        this.setStateData(type);
    }

    render () {
        const theNews = this.state.data;
        return (
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
        );
    }
}

export default ListDisplay;