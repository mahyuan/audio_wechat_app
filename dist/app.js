'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/recommend', 'pages/musicList', 'pages/search', 'pages/my', 'pages/play', 'pages/test'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#555',
        navigationBarTitleText: '好声音',
        navigationBarTextStyle: '#000'
      },
      tabBar: {
        'color': '#a9b7b7',
        'font-size': '40rpx',
        'selectedColor': '#ff3d3d',
        // 'navigationBarBackgroundColor': '#ff0',
        'borderStyle': 'black',
        'list': [{
          'pagePath': 'pages/index',
          'text': '发现音乐'
          // 'iconPath': 'images/icon1.png',
          // 'selectedIconPath': 'images/icon4.png'
        }, {
          'pagePath': 'pages/play',
          // 'iconPath': 'images/icon2.png',
          // 'selectedIconPath': 'images/icon5.png',
          'text': '播放'
        }, {
          'pagePath': 'pages/my',
          // 'iconPath': 'images/icon6.png',
          // 'selectedIconPath': 'images/icon3.png',
          'text': '账号'
        }]
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ0ZXN0QXN5bmMiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBZ0RFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUE3Q2ZBLE1BNkNlLEdBN0NOO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsaUJBRkssRUFHTCxpQkFISyxFQUlMLGNBSkssRUFLTCxVQUxLLEVBTUwsWUFOSyxFQU9MLFlBUEssQ0FEQTtBQVVQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsS0FIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCLE9BVkQ7QUFnQlBDLGNBQVE7QUFDTixpQkFBUyxTQURIO0FBRU4scUJBQWEsT0FGUDtBQUdOLHlCQUFpQixTQUhYO0FBSU47QUFDQSx1QkFBZSxPQUxUO0FBTU4sZ0JBQVEsQ0FBQztBQUNQLHNCQUFZLGFBREw7QUFFUCxrQkFBUTtBQUNSO0FBQ0E7QUFKTyxTQUFELEVBS0w7QUFDRCxzQkFBWSxZQURYO0FBRUQ7QUFDQTtBQUNBLGtCQUFRO0FBSlAsU0FMSyxFQVVMO0FBQ0Qsc0JBQVksVUFEWDtBQUVEO0FBQ0E7QUFDQSxrQkFBUTtBQUpQLFNBVks7QUFORjtBQWhCRCxLQTZDTTtBQUFBLFVBSmZDLFVBSWUsR0FKRjtBQUNYQyxnQkFBVTtBQURDLEtBSUU7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGYTtBQUdkOzs7OytCQUVVO0FBQ1QsV0FBS0MsU0FBTDtBQUNEOzs7MEJBRU1DLEMsRUFBRztBQUNSLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUSxrQkFBUjtBQUNELFNBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0QsT0FKTSxDQUFQO0FBS0Q7Ozs7Ozs7Ozs7O3VCQUdvQixLQUFLSyxLQUFMLENBQVcsQ0FBWCxDOzs7QUFBYkMsb0I7O0FBQ05DLHdCQUFRQyxHQUFSLENBQVlGLElBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FHVUcsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLZCxVQUFMLENBQWdCQyxRQUFwQixFQUE4QjtBQUM1QixlQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0Q7QUFDRCxxQkFBS2MsV0FBTCxDQUFpQjtBQUNmQyxlQURlLG1CQUNOQyxHQURNLEVBQ0Q7QUFDWkgsZUFBS2QsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJnQixJQUFJaEIsUUFBL0I7QUFDQVksZ0JBQU1BLEdBQUdJLElBQUloQixRQUFQLENBQU47QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUEvRTBCLGVBQUtpQixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvcmVjb21tZW5kJyxcclxuICAgICAgJ3BhZ2VzL211c2ljTGlzdCcsXHJcbiAgICAgICdwYWdlcy9zZWFyY2gnLFxyXG4gICAgICAncGFnZXMvbXknLFxyXG4gICAgICAncGFnZXMvcGxheScsXHJcbiAgICAgICdwYWdlcy90ZXN0J1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzU1NScsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflpb3lo7Dpn7MnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnIzAwMCdcclxuICAgIH0sXHJcbiAgICB0YWJCYXI6IHtcclxuICAgICAgJ2NvbG9yJzogJyNhOWI3YjcnLFxyXG4gICAgICAnZm9udC1zaXplJzogJzQwcnB4JyxcclxuICAgICAgJ3NlbGVjdGVkQ29sb3InOiAnI2ZmM2QzZCcsXHJcbiAgICAgIC8vICduYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yJzogJyNmZjAnLFxyXG4gICAgICAnYm9yZGVyU3R5bGUnOiAnYmxhY2snLFxyXG4gICAgICAnbGlzdCc6IFt7XHJcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL2luZGV4JyxcclxuICAgICAgICAndGV4dCc6ICflj5HnjrDpn7PkuZAnLFxyXG4gICAgICAgIC8vICdpY29uUGF0aCc6ICdpbWFnZXMvaWNvbjEucG5nJyxcclxuICAgICAgICAvLyAnc2VsZWN0ZWRJY29uUGF0aCc6ICdpbWFnZXMvaWNvbjQucG5nJ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgJ3BhZ2VQYXRoJzogJ3BhZ2VzL3BsYXknLFxyXG4gICAgICAgIC8vICdpY29uUGF0aCc6ICdpbWFnZXMvaWNvbjIucG5nJyxcclxuICAgICAgICAvLyAnc2VsZWN0ZWRJY29uUGF0aCc6ICdpbWFnZXMvaWNvbjUucG5nJyxcclxuICAgICAgICAndGV4dCc6ICfmkq3mlL4nXHJcbiAgICAgIH0sIHtcclxuICAgICAgICAncGFnZVBhdGgnOiAncGFnZXMvbXknLFxyXG4gICAgICAgIC8vICdpY29uUGF0aCc6ICdpbWFnZXMvaWNvbjYucG5nJyxcclxuICAgICAgICAvLyAnc2VsZWN0ZWRJY29uUGF0aCc6ICdpbWFnZXMvaWNvbjMucG5nJyxcclxuICAgICAgICAndGV4dCc6ICfotKblj7cnXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICB9XHJcblxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgdGhpcy50ZXN0QXN5bmMoKVxyXG4gIH1cclxuXHJcbiAgc2xlZXAgKHMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxyXG4gICAgICB9LCBzICogMTAwMClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyB0ZXN0QXN5bmMgKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xyXG4gICAgfVxyXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIl19