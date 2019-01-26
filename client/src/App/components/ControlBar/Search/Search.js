import React from 'react'
import SearchStyle from './SearchStyle'

class Search extends React.Component{

	constructor() {
	    super()
	    this.changeHandler = this.changeHandler.bind(this)
	}

	state = {
		searchKey: ''
	}

	changeHandler(e) {
		const {value} = e.target
		this.setState({
			searchKey: value
		})
	}


	render() {
		return (
			<SearchStyle>
				<div className="search">
					<input 
					onChange={this.changeHandler} 
					className='input' 
					autoComplete="off" 
					name="search" 
					type="text"
					value={this.state.searchKey}  
					placeholder="Поиск"
					/>
					<div className="search-button">
					
					</div>	
				</div>
			</SearchStyle>
		)

	}
	
}

export default Search



