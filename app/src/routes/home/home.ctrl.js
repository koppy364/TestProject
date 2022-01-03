"use strict";
const UserStorage = require("../../models/UserStorage");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  ;}
}

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;
    
    const users = UserStorage.getUsers("id", "psword");
    const response = {};
    if(users.id.includes(id)){
      const idx = users.id.indexOf(id);
      if(users.psword[idx] === psword){
        response.success = true;
          return res.json(response);        
      }
    }
    response.success = false;
    response.msg = "로그인에 실패하셨습니다."
    return res.json(response);
  },
}

module.exports = {
  output,
  process,
}

/* 위에랑 같은것
function hello(req, res){
  res.render("home/index");
};*/

/*object
{key:value} 이지만 Key만 입력하면 -> {key: key}*/
