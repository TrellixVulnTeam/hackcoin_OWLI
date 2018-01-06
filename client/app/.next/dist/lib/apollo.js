'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nextApollo = require('next-apollo');

var _apolloLinkHttp = require('apollo-link-http');

var config = {
  link: new _apolloLinkHttp.HttpLink({
    uri: 'https://secret-waters-73317.herokuapp.com/graphql', // Server URL (must be absolute)
    opts: {
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`
    }
  })
};

exports.default = (0, _nextApollo.withData)(config);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9hcG9sbG8uanMiXSwibmFtZXMiOlsid2l0aERhdGEiLCJIdHRwTGluayIsImNvbmZpZyIsImxpbmsiLCJ1cmkiLCJvcHRzIiwiY3JlZGVudGlhbHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQVM7O0FBQ1QsQUFBUzs7QUFFVCxJQUFNOztTQUNlLEFBQ1oscURBQXFELEFBQzFEOzttQkFBTSxBQUNTLGNBSm5CLEFBQWUsQUFDUCxBQUFhLEFBRVgsQUFDdUIsQUFLakM7QUFOVSxBQUNKO0FBSGUsQUFDakIsR0FESSxBQUFJO0FBREcsQUFDYjs7a0JBUWEsMEJBQWYsQUFBZSxBQUFTIiwiZmlsZSI6ImFwb2xsby5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9kbmluamEvaGFja2NvaW4vbmV3L2NsaWVudC9hcHAifQ==