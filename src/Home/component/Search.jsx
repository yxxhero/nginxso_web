import React from 'react';
import './search.css';
import { AutoComplete, Input } from 'antd';

const Search = Input.Search;

export class SearchIndex extends React.Component {
  state = {
    dataSource: [],
  };

  handleSelect = value => { 
    console.log(value);
  };
  handleSearch = value => {
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value],
    });
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
          onSelect={this.handleSelect}
          size="large"
          onSearch={this.handleSearch}
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
