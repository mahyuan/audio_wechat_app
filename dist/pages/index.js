'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _mixin = require('./../mixins/mixin.js');

var _mixin2 = _interopRequireDefault(_mixin);

var _channel = require('./../components/index/channel.js');

var _channel2 = _interopRequireDefault(_channel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import http from 'http'
// ximport qs from 'qs'


var index = function (_wepy$page) {
  _inherits(index, _wepy$page);

  function index() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = index.__proto__ || Object.getPrototypeOf(index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的首页',
      navigationBarBackgroundColor: '#e93d3b',
      navigationBarTextStyle: '#fff'
    }, _this.mixin = [_mixin2.default], _this.data = {
      tablist: {},
      current: 0, // 当前选择的tab
      channel: [], // tab数组
      page_mark: 0,
      scrollTop: 0, // 距顶的距离
      loadding: true, // 加载动画
      isNoMoreData: false, // 没有数据
      isTabListFixed: false // tab吸顶
    }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-bind": "", "v-bind:tablist.sync": "channel", "v-bind:current.sync": "current", "v-bind:isTabListFixed.sync": "isTabListFixed" } }, _this.$events = {}, _this.components = { tab: _channel2.default }, _this.methods = {}, _this.computed = {
      currentChannel: function currentChannel() {
        return this.channel[this.current];
      }
    }, _this.events = {
      'changeChannel': function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(index) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this.current = index;
                  // this.page_mark = 0
                  // this.isNoMoreData = false
                  // this.loadding = true
                  // if(this.current === 0 ) {
                  //   this.page_mark = -1
                  // }

                  // const height = await this.querySwiperHeight()
                  // wepy.pageScrollTo({
                  //   scrollTop: ()
                  // })

                  _this.$apply();
                  // this.fetch(true)

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }));

        function changeChannel(_x) {
          return _ref2.apply(this, arguments);
        }

        return changeChannel;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(index, [{
    key: 'onLoad',
    value: function onLoad() {
      var resp = http('');
    }
  }]);

  return index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibWl4aW4iLCJkYXRhIiwidGFibGlzdCIsImN1cnJlbnQiLCJjaGFubmVsIiwicGFnZV9tYXJrIiwic2Nyb2xsVG9wIiwibG9hZGRpbmciLCJpc05vTW9yZURhdGEiLCJpc1RhYkxpc3RGaXhlZCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInRhYiIsIm1ldGhvZHMiLCJjb21wdXRlZCIsImN1cnJlbnRDaGFubmVsIiwiZXZlbnRzIiwiJGFwcGx5IiwicmVzcCIsImh0dHAiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFIQTtBQUNBOzs7SUFJcUJBLEs7Ozs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsb0NBQThCLFNBRnZCO0FBR1BDLDhCQUF3QjtBQUhqQixLLFFBTVRDLEssR0FBUSxpQixRQUVSQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDLGVBQVMsQ0FGSixFQUVPO0FBQ1pDLGVBQVMsRUFISixFQUdRO0FBQ2JDLGlCQUFXLENBSk47QUFLTEMsaUJBQVcsQ0FMTixFQUtTO0FBQ2RDLGdCQUFVLElBTkwsRUFNVztBQUNoQkMsb0JBQWMsS0FQVCxFQU9nQjtBQUNyQkMsc0JBQWdCLEtBUlgsQ0FRa0I7QUFSbEIsSyxRQVdSQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxPQUFNLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFNBQXpDLEVBQW1ELHVCQUFzQixTQUF6RSxFQUFtRiw4QkFBNkIsZ0JBQWhILEVBQVAsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWEsRUFBQ0Msc0JBQUQsRSxRQUNaQyxPLEdBQVMsRSxRQUVUQyxRLEdBQVc7QUFDVEMsb0JBRFMsNEJBQ1E7QUFDZixlQUFPLEtBQUtiLE9BQUwsQ0FBYSxLQUFLRCxPQUFsQixDQUFQO0FBQ0Q7QUFIUSxLLFFBTVhlLE0sR0FBUztBQUNQO0FBQUEsNEVBQWlCLGlCQUFNdkIsS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2Ysd0JBQUtRLE9BQUwsR0FBZVIsS0FBZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBS3dCLE1BQUw7QUFDQTs7QUFmZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFqQjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQURPLEs7Ozs7OzZCQW9CQTtBQUNQLFVBQUlDLE9BQU9DLFFBQVg7QUFDRDs7OztFQXREZ0MsZUFBS0MsSTs7a0JBQW5CM0IsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbi8vIGltcG9ydCBodHRwIGZyb20gJ2h0dHAnXG4vLyB4aW1wb3J0IHFzIGZyb20gJ3FzJ1xuaW1wb3J0IG1peGluIGZyb20gJy4uL21peGlucy9taXhpbidcbmltcG9ydCBjaGFubmVsIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgvY2hhbm5lbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOmmlumhtScsXG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNlOTNkM2InLFxuICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICcjZmZmJ1xuICB9O1xuXG4gIG1peGluID0gW21peGluXTtcblxuICBkYXRhID0ge1xuICAgIHRhYmxpc3Q6IHt9LFxuICAgIGN1cnJlbnQ6IDAsIC8vIOW9k+WJjemAieaLqeeahHRhYlxuICAgIGNoYW5uZWw6IFtdLCAvLyB0YWLmlbDnu4RcbiAgICBwYWdlX21hcms6IDAsXG4gICAgc2Nyb2xsVG9wOiAwLCAvLyDot53pobbnmoTot53nprtcbiAgICBsb2FkZGluZzogdHJ1ZSwgLy8g5Yqg6L295Yqo55S7XG4gICAgaXNOb01vcmVEYXRhOiBmYWxzZSwgLy8g5rKh5pyJ5pWw5o2uXG4gICAgaXNUYWJMaXN0Rml4ZWQ6IGZhbHNlLCAvLyB0YWLlkLjpobZcbiAgfTtcblxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widGFiXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0YWJsaXN0LnN5bmNcIjpcImNoYW5uZWxcIixcInYtYmluZDpjdXJyZW50LnN5bmNcIjpcImN1cnJlbnRcIixcInYtYmluZDppc1RhYkxpc3RGaXhlZC5zeW5jXCI6XCJpc1RhYkxpc3RGaXhlZFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7dGFiOiBjaGFubmVsfVxuICBtZXRob2RzID17XG4gIH07XG4gIGNvbXB1dGVkID0ge1xuICAgIGN1cnJlbnRDaGFubmVsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhbm5lbFt0aGlzLmN1cnJlbnRdXG4gICAgfVxuICB9O1xuXG4gIGV2ZW50cyA9IHtcbiAgICAnY2hhbmdlQ2hhbm5lbCc6IGFzeW5jKGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSBpbmRleFxuICAgICAgLy8gdGhpcy5wYWdlX21hcmsgPSAwXG4gICAgICAvLyB0aGlzLmlzTm9Nb3JlRGF0YSA9IGZhbHNlXG4gICAgICAvLyB0aGlzLmxvYWRkaW5nID0gdHJ1ZVxuICAgICAgLy8gaWYodGhpcy5jdXJyZW50ID09PSAwICkge1xuICAgICAgLy8gICB0aGlzLnBhZ2VfbWFyayA9IC0xXG4gICAgICAvLyB9XG5cbiAgICAgIC8vIGNvbnN0IGhlaWdodCA9IGF3YWl0IHRoaXMucXVlcnlTd2lwZXJIZWlnaHQoKVxuICAgICAgLy8gd2VweS5wYWdlU2Nyb2xsVG8oe1xuICAgICAgLy8gICBzY3JvbGxUb3A6ICgpXG4gICAgICAvLyB9KVxuXG4gICAgICB0aGlzLiRhcHBseSgpXG4gICAgICAvLyB0aGlzLmZldGNoKHRydWUpXG4gICAgfVxuICB9O1xuXG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgcmVzcCA9IGh0dHAoYGApXG4gIH1cbn1cbiJdfQ==