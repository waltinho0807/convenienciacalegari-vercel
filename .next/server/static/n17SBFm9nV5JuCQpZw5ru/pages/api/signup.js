module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1TxS":
/***/ (function(module, exports) {

module.exports = require("validator/lib/isLength");

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("nGc0");


/***/ }),

/***/ "FiKB":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "OiCc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
// User Model

const {
  String
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;
const UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  role: {
    type: String,
    required: true,
    default: 'user',
    enum: ["user", "admin", "root"]
  }
}, {
  timestamps: true
});
/* harmony default export */ __webpack_exports__["a"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("User", UserSchema));

/***/ }),

/***/ "R+uO":
/***/ (function(module, exports) {

module.exports = require("validator/lib/isEmail");

/***/ }),

/***/ "RIw8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
// Cart Model

const {
  ObjectId,
  Number
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;
const CartSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  user: {
    type: ObjectId,
    ref: "User"
  },
  products: [{
    quantity: {
      type: Number,
      default: 1
    },
    product: {
      type: ObjectId,
      ref: "Product"
    }
  }]
}); // 

/* harmony default export */ __webpack_exports__["a"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Cart || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Cart", CartSchema));

/***/ }),

/***/ "jeq0":
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "nGc0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("jeq0");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tMJi");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("R+uO");
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1TxS");
/* harmony import */ var validator_lib_isLength__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isLength__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_connectDb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rn2G");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("OiCc");
/* harmony import */ var _models_Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("RIw8");







Object(_utils_connectDb__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    name,
    email,
    password
  } = req.body;

  try {
    // check email, name, password format
    if (!validator_lib_isLength__WEBPACK_IMPORTED_MODULE_3___default()(name, {
      min: 3,
      max: 15
    })) {
      return res.status(422).send("Name must be 3-10 characters long");
    } else if (!validator_lib_isLength__WEBPACK_IMPORTED_MODULE_3___default()(password, {
      min: 5,
      max: 15
    })) {
      return res.status(422).send("Password must be 5-15 characters long");
    } else if (!validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_2___default()(email)) {
      return res.status(422).send("Email must be valid");
    }

    const user = await _models_User__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].findOne({
      email
    });

    if (user) {
      return res.status(422).send(`User already exist with that ${email}`);
    }

    const passwordHash = await bcrypt__WEBPACK_IMPORTED_MODULE_0___default.a.hash(password, 10);
    const newUser = await new _models_User__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]({
      name,
      email,
      password: passwordHash
    }).save(); // console.log({newUser});
    // create a cart for the new user

    await new _models_Cart__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]({
      user: newUser._id
    }).save();
    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({
      userId: newUser._id
    }, "hjdfhuiklllllnlkbfcagdahsakjsdjdqw", {
      expiresIn: '7d'
    });
    res.status(201).json(token);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error in signup. Please try again.");
  }
});

/***/ }),

/***/ "rn2G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};

const connectDb = async () => {
  if (connection.isConnected) {
    // Using existing database connection
    // console.log("Using existing connection")
    return;
  } //Use new database connection


  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://conv-calegari:lorena@cluster0.rz7m5.gcp.mongodb.net/coveniencia?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  }); // console.log("DB Connected");

  connection.isConnected = db.connections[0].isReadyState;
};

/* harmony default export */ __webpack_exports__["a"] = (connectDb);

/***/ }),

/***/ "tMJi":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ })

/******/ });