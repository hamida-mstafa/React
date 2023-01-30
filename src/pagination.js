import React from 'react';


function Pagination({postsPerPage, totalPosts, paginate}){
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a href="!#" onClick={()=>paginate(number)} className='page-link'> {number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}

export default Pagination;