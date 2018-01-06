'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

var _graphqlTag = require('graphql-tag');

var _graphqlTag2 = _interopRequireDefault(_graphqlTag);

var _apollo = require('../lib/apollo');

var _apollo2 = _interopRequireDefault(_apollo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/dninja/hackcoin/new/client/app/pages/index.js?entry';

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n{\n    coins{\n      id\n      name\n      price_usd\n    }\n  }\n\n'], ['\n{\n    coins{\n      id\n      name\n      price_usd\n    }\n  }\n\n']);

var query = (0, _graphqlTag2.default)(_templateObject);

var index = function index(_ref) {
  var coins = _ref.data.coins;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, 'Hello Friends ...', _react2.default.createElement('div', { className: 'allthecoins', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, coins.map(function (u, i) {
    return _react2.default.createElement('li', { key: i, __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, ' ', u.name, ' ');
  })));
};

var GraphqlIndex = (0, _reactApollo.graphql)(query)(index);

exports.default = (0, _apollo2.default)(GraphqlIndex);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZ3JhcGhxbCIsImdxbCIsIndpdGhEYXRhIiwicXVlcnkiLCJpbmRleCIsImNvaW5zIiwiZGF0YSIsIm1hcCIsInUiLCJpIiwibmFtZSIsIkdyYXBocWxJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPLEFBQWM7Ozs7Ozs7Ozs7QUFFckIsSUFBTSxRQUFBLEFBQVEsMEJBQWQ7O0FBV0EsSUFBTSxRQUFRLFNBQVIsQUFBUSxZQUFBO01BQUEsQUFBVyxhQUFYLEFBQUcsS0FBSCxBQUFXO3lCQUNwQixjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsR0FBQSxFQUdBLHFDQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7Z0JBQWY7a0JBQUEsQUFDQztBQUREO1dBQ0MsQUFBTSxJQUFLLFVBQUEsQUFBQyxHQUFELEFBQUksR0FBSjsyQkFBVSxjQUFBLFFBQUksS0FBSixBQUFTO2tCQUFUO29CQUFBO0FBQUE7S0FBQSxFQUFjLE9BQWQsQUFBZ0IsTUFBMUIsQUFBVTtBQUxiLEFBQ1QsQUFHQSxBQUNDO0FBTE47O0FBYUEsSUFBTSxlQUFlLDBCQUFBLEFBQVEsT0FBN0IsQUFBcUIsQUFBZSxBQUVwQzs7a0JBQWUsc0JBQWYsQUFBZSxBQUFTIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2RuaW5qYS9oYWNrY29pbi9uZXcvY2xpZW50L2FwcCJ9