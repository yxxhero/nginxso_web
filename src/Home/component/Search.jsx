import React from 'react';
import './search.css';
import { AutoComplete, Input } from 'antd';

const Search = Input.Search;

export class SearchIndex extends React.Component {
  state = {
    dataSource: [],
    open: false
  };

  handleSelect = value => { 
    console.log(value);
    this.setState({open:false});
  };

  handleSearchResource = value => {
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value],
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
    const { dataSource } = this.state;
    return (
      <div className="global-search-wrapper">
        <AutoComplete
          dataSource={dataSource}
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
