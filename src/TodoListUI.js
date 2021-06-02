// UI组件负责渲染 是1个傻瓜组件
import React from "react";
import { Input, Button, List } from "antd";
// 当组件只有1个render时,就可以用1个无状态组件来定义这个组件 无状态组件就是1个函数 性能高
const TodoListUI = (props) => {
  return (
    <div style={{ marginTop: "10px", marginLeft: "10px" }}>
      <div>
        <Input
          //   props接收父组件的传值 无状态组件使用父组件传递的属性不需要在使用this
          value={props.inputValue}
          placeholder="todo info"
          style={{ width: "300px", marginRight: "10px" }}
          // 接收父组件的传值
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleBthClick}>
          提交
        </Button>
      </div>
      <List
        style={{ marginTop: "10px", width: "300px" }}
        bordered
        //   获取state里面的数据
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            // 使用箭头函数传index
            onClick={() => {
              props.handleTtemDelete(index);
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};
// 普通组件
// class TodoListUI extends Component {
//   // 当组件只有1个render时,就可以用1个无状态组件来定义这个组件 无状态组件就是1个函数
//   render() {
// return (
//   <div style={{ marginTop: "10px", marginLeft: "10px" }}>
//     <div>
//       <Input
//         //   props接收父组件的传值
//         value={this.props.inputValue}
//         placeholder="todo info"
//         style={{ width: "300px", marginRight: "10px" }}
//         // 接收父组件的传值
//         onChange={this.props.handleInputChange}
//       />
//       <Button type="primary" onClick={this.props.handleBthClick}>
//         提交
//       </Button>
//     </div>
//     <List
//       style={{ marginTop: "10px", width: "300px" }}
//       bordered
//       //   获取state里面的数据
//       dataSource={this.props.list}
//       renderItem={(item) => (
//         <List.Item
//           // 使用箭头函数传index
//           onClick={(index) => {
//             this.props.handleTtemDelete(index);
//           }}
//         >
//           {item}
//         </List.Item>
//       )}
//     />
//   </div>
// );
//   }
// }
export default TodoListUI;
