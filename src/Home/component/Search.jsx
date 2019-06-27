import React from 'react';
import { connect  } from 'react-redux';
import './search.css';
import { AutoComplete, Input } from 'antd';
import { cleanautocompletelist, getautocompletelist } from '@/redux/autocomplete.redux';

const Search = Input.Search;

@connect(
  state => state.autocompletes,
  {getautocompletelist, cleanautocompletelist}
)
class SearchIndex extends React.Component {
  
  state = {
    open: false
  };

  componentDidMount () {
  	console.log(this.props)	
  } 

  handleSelect = value => { 
    console.log(value);
    this.setState({open:false});
  };

  handleSearchResource = value => {
    this.props.cleanautocompletelist();
    if (value.length){
        this.props.getautocompletelist({keyword: value});
    }

    this.setState({
      open: true
    });
  };

  handleSearch = value => {
    console.log(value);
    this.setState({open:false});
  };

  handleKeyPress = ev => {
    console.log('handleKeyPress', ev);
  };

  render() {
    return (
      <div className="global-search-wrapper">
        <AutoComplete
          dataSource={this.props.autocompletelist}
          size="large"
          open={this.state.open}
          onSelect={this.handleSelect}
          onSearch={this.handleSearchResource}
          style={{width: '100%'}}
        >
        <Search
          placeholder="查询指令"
          enterButton="查询"
          size="large"
          onSearch={this.handleSearch}
        />
        </AutoComplete>
      </div>
    );
  }
}
export default SearchIndex;

