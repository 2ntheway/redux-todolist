import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
function* getInitList() {
  try {
    const res = yield axios.get("http://42.193.52.117:8080/list");
    const data = res.data.data;
    const action = {
      type: "init_list_action",
      data,
    };
    yield put(action);
  } catch (e) {
    console.log("服务器请求失败");
  }
}
// 捕获到get_init_list的action type就执行getInitList方法
function* mySaga() {
  yield takeEvery("get_init_list", getInitList);
}

export default mySaga;
