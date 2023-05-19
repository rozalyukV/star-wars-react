/*! For license information please see components-UI-UiButton-UiButton-stories.047c1a19.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkstar_wars_react=self.webpackChunkstar_wars_react||[]).push([[383],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./src/components/UI/UiButton/UiButton.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:function(){return Dark},Disabled:function(){return Disabled},Light:function(){return Light},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return UiButton_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),UiButton_module=(__webpack_require__("./src/components/UI/index.css"),{button:"UiButton_button__N+-MC",dark:"UiButton_dark__qf5LK",light:"UiButton_light__3N2NZ"}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),UiButton=function UiButton(_ref){var text=_ref.text,onClick=_ref.onClick,disabled=_ref.disabled,_ref$theme=_ref.theme,theme=void 0===_ref$theme?"dark":_ref$theme,classes=_ref.classes;return(0,jsx_runtime.jsx)("button",{onClick:onClick,className:classnames_default()(UiButton_module.button,UiButton_module[theme],classes),disabled:disabled,children:text})};UiButton.__docgenInfo={description:"",methods:[],displayName:"UiButton",props:{theme:{defaultValue:{value:"'dark'",computed:!1},description:"",type:{name:"string"},required:!1},text:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},disabled:{description:"",type:{name:"bool"},required:!1},classes:{description:"",type:{name:"string"},required:!1}}};var _Light$parameters,_Light$parameters2,_Light$parameters2$do,_Dark$parameters,_Dark$parameters2,_Dark$parameters2$doc,_Disabled$parameters,_Disabled$parameters2,_Disabled$parameters3,UiButton_UiButton=UiButton,UiButton_stories={title:"Ui-Kit/UiButton",component:UiButton_UiButton.apply},Template=function Template(args){return(0,jsx_runtime.jsx)(UiButton_UiButton,(0,objectSpread2.Z)({},args))},props={text:"Hello",onClick:function onClick(){return console.log("Button Click")},disabled:!1,theme:"dark",classes:""},Light=Template.bind({});Light.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{theme:"light"});var Dark=Template.bind({});Dark.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{theme:"dark"});var Disabled=Template.bind({});Disabled.args=(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{disabled:!0}),Light.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Light.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Light$parameters=Light.parameters)||void 0===_Light$parameters?void 0:_Light$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <UiButton {...args} />"},null===(_Light$parameters2=Light.parameters)||void 0===_Light$parameters2||null===(_Light$parameters2$do=_Light$parameters2.docs)||void 0===_Light$parameters2$do?void 0:_Light$parameters2$do.source)})}),Dark.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Dark.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Dark$parameters=Dark.parameters)||void 0===_Dark$parameters?void 0:_Dark$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <UiButton {...args} />"},null===(_Dark$parameters2=Dark.parameters)||void 0===_Dark$parameters2||null===(_Dark$parameters2$doc=_Dark$parameters2.docs)||void 0===_Dark$parameters2$doc?void 0:_Dark$parameters2$doc.source)})}),Disabled.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Disabled.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Disabled$parameters=Disabled.parameters)||void 0===_Disabled$parameters?void 0:_Disabled$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"args => <UiButton {...args} />"},null===(_Disabled$parameters2=Disabled.parameters)||void 0===_Disabled$parameters2||null===(_Disabled$parameters3=_Disabled$parameters2.docs)||void 0===_Disabled$parameters3?void 0:_Disabled$parameters3.source)})});var __namedExportsOrder=["Light","Dark","Disabled"]},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/components/UI/index.css":function(){},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);