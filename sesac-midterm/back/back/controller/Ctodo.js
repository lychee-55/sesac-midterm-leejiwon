const { where } = require("sequelize");
const { Todo } = require("../models/index");

/* Todos 전체 목록 불러오기 */
exports.readAll = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    console.log(todos);
    res.send(todos);
  } catch (err) {
    console.log("allList err>>", err);
    res.status(500).send("server error!");
  }
};

/* Todo 한 개 불러오기 */
exports.readOne = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const oneTodo = await Todo.findOne({
      where: { id: id },
    });
    console.log(oneTodo);
    res.send(oneTodo);
    if (oneTodo === "") {
      console.log("oneList err>>", err);
      res.status(500).send({ message: "Todo not found" });
    }
  } catch (err) {
    console.log("oneList err>>", err);
    res.send({ message: "Todo not found" });
  }
};

/* 새로운 Todo 생성 */
exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const newTodo = await Todo.create(req.body);
    res.send(newTodo);
  } catch (err) {
    console.log("newTodo err>>", err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

/* 기존 Todo 수정 */
exports.update = async (req, res) => {
  try {
    console.log(req.params);
    const updatedTodo = await Todo.update(
      {
        done: req.body.done,
        title: req.body.title,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    console.log(updatedTodo);
    if (updatedTodo[0] === 1) {
      //   res.send("Todo deleted successfully", id);
      res.send(updatedTodo);
    } else {
      res.status(500).send({ message: "Todo not found" });
    }
    // res.send(updatedTodo);
  } catch (err) {
    console.log("update err!", err);
    res.status(500).send({ message: "Todo not found" });
  }
};

/* 기존 Todo 삭제 */
exports.delete = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const deletedId = await Todo.destroy({
      where: { id: id },
    });
    console.log("삭제여부", deletedId);
    if (Boolean(deletedId)) {
      //   res.send("Todo deleted successfully", id);
      res.send({ message: "Todo deleted successfully", deletedId: id });
    } else {
      res.send({ message: "Todo not found" });
    }
  } catch (err) {
    console.log("delete err!!>>", err);
    res.status(500).send("Todo not found!");
  }
};
