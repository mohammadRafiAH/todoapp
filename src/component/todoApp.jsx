import React, { Component} from "react";
import "./todoApp.css";
import ListItems from "./listItems";

class index extends Component {
  state = {
    input: "",
    item: [],
  };

  onHandleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };
  onItemSubmit = (event) => {
    event.preventDefault();

    const { input, item } = this.state;

    this.setState({
      item: [...item, input],
      input: "",
    });
  };

  onDeleteClick = (key) => {
    this.setState({
      item: this.state.item.filter((value, index) => index !== key),
    });
    console.log(key);
 
  };

  render() {
    const { input, item } = this.state;
    return (
      <div className="todoapp--container">
        <div className="todoapp__input_container">
          <form
            action="post"
            method="post"
            onSubmit={this.onItemSubmit}
            className="input-section"
            autoComplete="off"
          >
            <h2>
              TODO <span>LIST</span>
            </h2>
            <input
              type="text"
              value={input}
              name="name"
              onChange={this.onHandleChange}
              placeholder="enter to do..."
            />
          </form>
        </div>

        <div className="todoapp__items-container">
          <ul className="list-conatiner">
            {item.map((value, index) => {
              return (
                <ListItems
                key={index}
                value={value}
                index={index}
                onDeleteClick={this.onDeleteClick}
                />
               
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default index;
