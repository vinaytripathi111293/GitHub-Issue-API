const express = require('express');
const router = express.Router();
const { createIssue } = require("../utils/request");
/* GET users listing. */
router.post('/', function(req, res, next) {

  try {
    const {
      token,
      owner,
      repo
    } = process.env;

    createIssue( token, `${owner}/${repo}`, req.body, clbk );

    function clbk( error, issue ) {
        if ( issue.statusCode != 201 ) {
          return res.send(issue);
        }
        return res.send(issue);
    }
  } catch (error) {
    return res.send({
      status: 500,
      message: error.message
    });
  }
})
