function SearchBox({searchChange}) {
    return (
        <div>
            <input 
            className='pa2 ba b--grean bg-lightest-blue'
            type= 'search' 
            placeholder= 'Search robots'
            onChange = {searchChange} 
            />
        </div>
    )
}



export default SearchBox;



