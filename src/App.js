import React from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    /**
     * since we don't want to write this for every function that we create
     * we can use arrowFunctions = () => they will do this for us
     * instead of handleCHange(e) {...}
     * we write handleChange = (e) => {...}
     * then 'this.handleChange.bind(this)' is not needed
     */
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    /**
     * every then of a promise is wrapping the value of the previous then
     * in a resolve promise, only that's why we can access it in the current
     * then
     *
     * fetch() returns a promise
     *
     * API call to get dummy users https://jsonplaceholder.typicode.com/users
     */
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  /**
   * make this it's own function, in case we want to use it elsewhere
   * the arrow function is automatically bound to the context, where it is written
   * since we wrote this method in the App class, it automatically binds hanldeChange to the App class
   */
  handleChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });

    /**
     * the state is always one key behind, compared to what the user typed
     *  because setState is an async call
     * if you console log the state as a 2nd argument in setState it is a sync call
     * and we get our results immediately ,() => console.log(this.state)
     * console.log(this.state);
     */
  };

  /**
   * you cannot run setState in render(), as setState triggers render()
   * it would cause an infinite loop
   * that's why we are not calling onChange, we just define it
   * so that it can get triggered by the user
   */
  render() {
    /**
     * this is equal to creating two new const
     * const monsters = this.state.monsters
     * constsearchField = this.state.searchField
     */
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    /**
     * onChange calls setState => setState calls render => filteredMonsters
     * gets the new value from this.state monsters & searchfield
     */
    return (
      <div>
        <div className="App">
          <h1>Monsters Rolodex</h1>

          {/* 
            make a component of the searchBox 
            <input
            onChange={(e) => this.handleChange(e)}
            type="search"
            placeholder="search monsters"
          /> */}

          {/* 'this.handleChange' is equal to '(e) => this.handleChange(e)' */}
          <SearchBox
            placeholder="search monsters"
            handleChange={this.handleChange}
          />
          <CardList monsters={filteredMonsters} />
        </div>
      </div>
    );
  }
}

export default App;
