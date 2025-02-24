import React from 'react'

const Search = ({search, setSearch}) => {
    const getQuery = (term) => {
        setSearch(term.target.value);
    }
    return (
        <div className={'search'}>
            <div>
                <img src="/search.png" alt="search"/>

                <input type="text" onChange={getQuery} value={search} placeholder={"Search through thousands of movies"}/>
            </div>
        </div>
    )
}
export default Search
