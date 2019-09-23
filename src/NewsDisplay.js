import React from 'react'
import {SELECT_ITEM_PATTERN_URL} from './constances'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

class NewsDisplay extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {id: props.id , data: []};
    }

    componentWillMount(){
        let url = SELECT_ITEM_PATTERN_URL;
        url = url.replace(':id', this.state.id );
        fetch(url)
            .then(res => res.json())
            .then((jsonData) => {
                this.setState({ data: jsonData, id: this.state.id })
            })
            .catch((error) => {
                console.log(' !!!!!!!! !!!!!! !!Error !!!!!!!');
                console.log(error)
            })
    }

    render() {
        let item = this.state.data;
        const id = this.state.id;
        const now = Date.now()
        TimeAgo.addLocale(en)
        const timeAgo = new TimeAgo('en-US')

        return (
            <div className="card" key={id}>
                <div className="card-body">
                    <div>
                    <span className="card-title">
                        <b>{('title' in item)?  item.title: 'title'}</b>
                        ({('url' in item)?( <a href={item.url} >{item.url}</a> ) : ''})
                    </span>
                    </div>
                    <div>
                        {('score' in item)?  item.score + ' points': ''}
                        {('by' in item)?  ' By ' + item.by + ' ': ''}
                        <u>{('time' in item)?   timeAgo.format(now - item.time) : ''}</u> |
                        {'Hide'}|
                        {('descendants' in item)? item.descendants + ' comment(s)' : ''}
                    </div>
                </div>
            </div>
        );
    }


}

export default NewsDisplay;