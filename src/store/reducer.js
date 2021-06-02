const defaultState = {
  // 由reducer来管理仓库中默认的数据inputValue和list
  inputValue: "",
  list: [],
};
// action是用户传过来的那句话
export default (state = defaultState, action) => {
  if (action.type === "change_input_value") {
    // 对state做一次深拷贝 因为reducer可以接收state但是绝不能修改state
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === "add_todo_item") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    return newState;
  }
  if (action.type === "delete_todo_item") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === "init_list_action") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
};
