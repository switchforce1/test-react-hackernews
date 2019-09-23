import React from 'react'

class Pagination extends React.Component{

    render() {
        return(
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><button className="page-link">Previous</button></li>
                    <li className="page-item"><button className="page-link">Next</button></li>
                </ul>
            </nav>
        );
    }
}

export default Pagination