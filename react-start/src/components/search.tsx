import React from 'react';
import './search.css';

type MyState = { searchValue: string };

class Search extends React.Component<Record<string, never>, MyState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      searchValue: localStorage.value,
    };
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
