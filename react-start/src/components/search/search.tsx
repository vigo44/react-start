import React from 'react';
import './search.css';

type MyState = { searchValue: string };

class Search extends React.Component<Record<string, never>, MyState> {
  constructor(props: Record<string, never>) {
    super(props);
    if (localStorage.getItem('value') !== null) {
      this.state = {
        searchValue: localStorage.value,
      };
    } else {
      this.state = {
        searchValue: '',
      };
    }
  }

  componentWillUnmount() {
    localStorage.value = this.state.searchValue;
  }

  render() {
    return (
      <div className="search">
        <form>
          <input
            value={this.state.searchValue}
            onChange={(e) => this.setState({ searchValue: e.target.value })}
          />
          <button type="button">SEARCH</button>
        </form>
      </div>
    );
  }
}

export default Search;
