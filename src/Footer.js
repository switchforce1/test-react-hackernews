import React from 'react'

class Footer extends React.Component {

    render() {
        return (
            <footer>
                <hr className="divider"/>
                <center>
                    <span className="yclinks"><a href="newsguidelines.html">Guidelines</a>
                    | <a href="#">FAQ</a>
                    | <a href="#">Support</a>
                    | <a href="https://github.com/HackerNews/API">API</a>
                    | <a href="#">Security</a>
                    | <a href="#">Lists</a>
                    | <a href="#" rel="nofollow">Bookmarklet</a>
                    | <a href="http://www.ycombinator.com/legal/">Legal</a>
                    | <a href="http://www.ycombinator.com/apply/">Apply to YC</a>
                    | <a href="#">Contact</a></span>
                </center>
            </footer>
        );
    }
}

export default Footer;