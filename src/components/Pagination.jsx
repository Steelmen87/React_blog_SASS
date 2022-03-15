import React from "react";

export default function Pagination() {

    return <div>
        <ul className="pagination">
            <li className="pagination__item">
                <a className="pagination__link" href="#">&lt;</a>
            </li>
            <li className="pagination__item">
                <a className="pagination__link" href="#">1</a>
            </li>
            <li className="pagination__item">
                <a className="pagination__link active" href="#">2</a>
            </li>
            <li className="pagination__item">
                <a className="pagination__link" href="#">3</a>
            </li>
            <li className="pagination__item">
                <a className="pagination__link" href="#">&gt;</a>
            </li>
        </ul>
    </div>
}
