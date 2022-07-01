"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TaskForm;

var _react = require("react");

var _StateContext = require("../context/StateContext");

var _universalCookie = require("universal-cookie");

var cookie = new _universalCookie.Cookie();

function TaskForm(_ref) {
  var taskCreated = _ref.taskCreated;

  var _useContext = (0, _react.useContext)(_StateContext.StateContext),
      selectedTask = _useContext.selectedTask,
      setSelectedTask = _useContext.setSelectedTask;

  var create = function create(e) {
    return regeneratorRuntime.async(function create$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch("".concat(process.env.NEXT_PUBLIC_RESTAPI_URL, "api/tasks/"), {
              method: "POST",
              body: JSON.stringify({
                title: selectedTask.title
              }),
              headers: {
                "Content-Type": "application/json",
                Authorization: "JWT ".concat(cookie.get("access_token"))
              }
            }).then(function (res) {
              // 401 --> 認証切れ
              if (res.status === 401) {
                alert("JWT Token not valid");
              }
            }));

          case 3:
            setSelectedTask({
              id: 0,
              title: ""
            });
            taskCreated();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  var update = function update(e) {
    return regeneratorRuntime.async(function update$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            e.preventDefault();
            _context2.next = 3;
            return regeneratorRuntime.awrap(fetch("".concat(process.env.NEXT_PUBLIC_RESTAPI_URL, "api/tasks/").concat(selectedTask.id), {
              method: "PUT",
              body: JSON.stringify({
                title: selectedTask.title
              }),
              headers: {
                "Content-Type": "application/json",
                Authorization: "JWT ".concat(cookie.get("access_token"))
              }
            }).then(function (res) {
              // 401 --> 認証切れ
              if (res.status === 401) {
                alert("JWT Token not valid");
              }
            }));

          case 3:
            setSelectedTask({
              id: 0,
              title: ""
            });
            taskCreated();

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  return;
}