// 容器组件 关注业务逻辑 复制组件的功能的实现 聪明组件
import React, { Component } from "react";
import "antd/dist/antd.css";
import store from "./store/index";
import TodoListUI from "./TodoListUI";
class TodoList extends Component {
  constructor(props) {
    super(props);
    // 通过getState方法去获取store中的数据
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBthClick = this.handleBthClick.bind(this);
    this.handleTtemDelete = this.handleTtemDelete.bind(this);
    // subscribe订阅store的改变，只要store改变store.subscribe接收的回调函数就会执行
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        // 函数也可以通过属性的方式传递
        handleInputChange={this.handleInputChange}
        handleBthClick={this.handleBthClick}
        list={this.state.list}
        handleTtemDelete={this.handleTtemDelete}
      />
    );
  }
  // 获取到数据后去修改store里面的数据
  componentDidMount() {
    const action = {
      type: "get_init_list",
    };
    store.dispatch(action);
  }

  handleInputChange(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value,
    };
    //dispatch派发action，传给store
    store.dispatch(action);
  }
  // getState获取state里面所有的数据内容
  // 这里是重新去store里面取一次数据替换掉当前组件里面的数据
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleBthClick() {
    const action = {
      type: "add_todo_item",
    };
    store.dispatch(action);
  }
  handleTtemDelete(index) {
    const action = {
      type: "delete_todo_item",
      index,
    };
    store.dispatch(action);
  }
}
export default TodoList;
