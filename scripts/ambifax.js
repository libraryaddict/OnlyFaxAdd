/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/greyyou/src/utils/MacroBuilder.ts":
/*!***********************************************!*\
  !*** ./src/greyyou/src/utils/MacroBuilder.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InvalidMacroError: () => (/* binding */ InvalidMacroError),
/* harmony export */   Macro: () => (/* binding */ Macro),
/* harmony export */   StrictMacro: () => (/* binding */ StrictMacro),
/* harmony export */   adventureMacro: () => (/* binding */ adventureMacro),
/* harmony export */   adventureMacroAuto: () => (/* binding */ adventureMacroAuto),
/* harmony export */   getMacroId: () => (/* binding */ getMacroId)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _get() {if (typeof Reflect !== "undefined" && Reflect.get) {_get = Reflect.get.bind();} else {_get = function _get(target, property, receiver) {var base = _superPropBase(target, property);if (!base) return;var desc = Object.getOwnPropertyDescriptor(base, property);if (desc.get) {return desc.get.call(arguments.length < 3 ? target : receiver);}return desc.value;};}return _get.apply(this, arguments);}function _superPropBase(object, property) {while (!Object.prototype.hasOwnProperty.call(object, property)) {object = _getPrototypeOf(object);if (object === null) break;}return object;}function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it["return"] != null) it["return"]();} finally {if (didErr) throw err;}} };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;}function _defineProperty(obj, key, value) {key = _toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _toPropertyKey(arg) {var key = _toPrimitive(arg, "string");return _typeof(key) === "symbol" ? key : String(key);}function _toPrimitive(input, hint) {if (_typeof(input) !== "object" || input === null) return input;var prim = input[Symbol.toPrimitive];if (prim !== undefined) {var res = prim.call(input, hint || "default");if (_typeof(res) !== "object") return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return (hint === "string" ? String : Number)(input);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });Object.defineProperty(subClass, "prototype", { writable: false });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;} else if (call !== void 0) {throw new TypeError("Derived constructors may only return object or undefined");}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct.bind();} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}

var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name name.
 *
 * @category Combat
 * @returns {number} The macro ID.
 */
function getMacroId() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MACRO_NAME;
  var macroMatches = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.xpath)(
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("account_combatmacros.php"), "//select[@name=\"macroid\"]/option[text()=\"".concat(
      name, "\"]/@value")
  );
  if (macroMatches.length === 0) {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(
      name, "&macrotext=abort&action=save")
    );
    return parseInt(
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.xpath)(newMacroText, "//input[@name=macroid]/@value")[0],
      10
    );
  } else {
    return parseInt(macroMatches[0], 10);
  }
}


function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get(itemOrName) : itemOrName;
}

var substringCombatItems =
"spider web, really sticky spider web, dictionary, NG, Cloaca-Cola, yo-yo, top, ball, kite, yo, red potion, blue potion, adder, red button, pile of sand, mushroom, deluxe mushroom".
split(",").
map(function (s) {return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toItem)(s);});
var substringCombatSkills =
"Shoot, Thrust-Smack, Headbutt, Toss, Sing, Disarm, LIGHT, BURN, Extract, Meteor Shower, Cleave, Boil, Slice, Rainbow".
split(",").
map(function (s) {return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toSkill)(s);});

function itemOrItemsBallsMacroName(
itemOrItems)
{
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return !substringCombatItems.includes(item) ?
    item.name :
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(item).toString();
  }
}

function itemOrItemsBallsMacroPredicate(
itemOrItems)
{
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ");
  } else {
    return "hascombatitem ".concat(itemOrItems);
  }
}


function skillOrNameToSkill(skillOrName) {
  if (typeof skillOrName === "string") {
    return kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}

function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) &&
  !substringCombatSkills.includes(skill) ?
  skill.name :
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(skill);
}



var InvalidMacroError = /*#__PURE__*/function (_Error) {_inherits(InvalidMacroError, _Error);var _super = _createSuper(InvalidMacroError);function InvalidMacroError() {_classCallCheck(this, InvalidMacroError);return _super.apply(this, arguments);}return _createClass(InvalidMacroError);}( /*#__PURE__*/_wrapNativeSuper(Error));

/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */
var Macro = /*#__PURE__*/function () {function Macro() {_classCallCheck(this, Macro);_defineProperty(this, "components",





    []);_defineProperty(this, "name",
    MACRO_NAME);}_createClass(Macro, [{ key: "toString", value:

    /**
     * Convert macro to string.
     */
    function toString() {
      return this.components.join(";");
    }

    /**
     * Gives your macro a new name to be used when saving an autoattack.
     * @param name The name to be used when saving as an autoattack.
     * @returns The previous name assigned to this macro.
     */ }, { key: "rename", value:
    function rename(name) {
      var returnValue = this.name;
      this.name = name;
      return returnValue;
    }

    /**
     * Save a macro to a Mafia property for use in a consult script.
     */ }, { key: "save", value:
    function save() {
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setProperty)(Macro.SAVED_MACRO_PROPERTY, this.toString());
    }

    /**
     * Load a saved macro from the Mafia property.
     */ }, { key: "step", value:













    /**
     * Statefully add one or several steps to a macro.
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
    function step() {var _ref;for (var _len = arguments.length, nextSteps = new Array(_len), _key = 0; _key < _len; _key++) {nextSteps[_key] = arguments[_key];}
      var nextStepsStrings = (_ref = []).concat.apply(_ref, _toConsumableArray(
        nextSteps.map(function (x) {return x instanceof Macro ? x.components : [x];}))
      );
      this.components = [].concat(_toConsumableArray(
        this.components), _toConsumableArray(
        nextStepsStrings.filter(function (s) {return s.length > 0;})));

      return this;
    }

    /**
     * Statefully add one or several steps to a macro.
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */ }, { key: "submit", value:







    /**
     * Submit the built macro to KoL. Only works inside combat.
     */
    function submit() {
      var _final = this.toString();
      return (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("fight.php?action=macro&macrotext=".concat(
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.urlEncode)(_final)),
      true,
      true
      );
    }

    /**
     * Set this macro as a KoL native autoattack.
     */ }, { key: "setAutoAttack", value:
    function setAutoAttack() {
      var id = Macro.cachedMacroIds.get(this.name);
      if (id === undefined) {
        id = getMacroId(this.name);
        Macro.cachedMacroIds.set(this.name, id);
      }
      if (
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getAutoAttack)() === 99000000 + id &&
      this.toString() === Macro.cachedAutoAttacks.get(this.name))
      {
        // This macro is already set. Don"t make the server request.
        return;
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("account_combatmacros.php?macroid=".concat(
        id, "&name=").concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.urlEncode)(
        this.name
      ), "&macrotext=").concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.urlEncode)(this.toString()), "&action=save"),
      true,
      true
      );
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("account.php?am=1&action=autoattack&value=".concat(
        99000000 + id, "&ajax=1")
      );
      Macro.cachedAutoAttacks.set(this.name, this.toString());
    }

    /**
     * Renames the macro, then sets it as an autoattack.
     * @param name The name to save the macro under as an autoattack.
     */ }, { key: "setAutoAttackAs", value:
    function setAutoAttackAs(name) {
      this.name = name;
      this.setAutoAttack();
    }

    /**
     * Clear all cached autoattacks, and delete all stored macros server-side.
     */ }, { key: "abort", value:










    /**
     * Add an "abort" step to this macro.
     * @returns {Macro} This object itself.
     */
    function abort() {
      return this.step("abort");
    }

    /**
     * Create a new macro with an "abort" step.
     * @returns {Macro} This object itself.
     */ }, { key: "runaway", value:




    /**
     * Add a "runaway" step to this macro.
     * @returns {Macro} This object itself.
     */
    function runaway() {
      return this.step("runaway");
    }

    /**
     * Create a new macro with an "runaway" step.
     * @returns {Macro} This object itself.
     */ }, { key: "if_", value:




    /**
     * Add an "if" statement to this macro.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function if_(
    condition,








    ifTrue)
    {
      return this.step("if ".concat(this.createBalls(condition))).
      step(ifTrue).
      step("endif");
    }
    /**
     * Add an "if not" statement to this macro.
     * @param condition The BALLS condition for the if statement.
     * @param ifFalse Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */ }, { key: "ifNot_", value:
    function ifNot_(
    condition,








    ifFalse)
    {
      return this.step("if !".concat(this.createBalls(condition))).
      step(ifFalse).
      step("endif");
    } }, { key: "createBalls", value:

    function createBalls(
    condition)








    {
      var ballsCondition = "";
      if (condition instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Monster) {
        ballsCondition = "monsterid ".concat(condition.id);
      } else if (condition instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Effect) {
        ballsCondition = "haseffect ".concat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(condition));
      } else if (condition instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill) {
        ballsCondition = "hasskill ".concat(skillBallsMacroName(condition));
      } else if (condition instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item) {
        if (!condition.combat) {
          throw new InvalidMacroError("Item ".concat(
            condition, " cannot be made a valid BALLS predicate (it is not combat-usable)")
          );
        }

        ballsCondition = "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Location) {
        var snarfblat = condition.id;

        if (snarfblat < 1) {
          throw new InvalidMacroError("Location ".concat(
            condition, " cannot be made a valid BALLS predicate (it has no location id)")
          );
        }

        ballsCondition = "snarfblat ".concat(snarfblat);
      } else if (condition instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Class) {
        if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(condition) > 6) {
          throw new InvalidMacroError("Class ".concat(
            condition, " cannot be made a valid BALLS predicate (it is not a standard class)")
          );
        }

        ballsCondition = condition.toString().replaceAll(" ", "").toLowerCase();
      } else if (condition instanceof kolmafia__WEBPACK_IMPORTED_MODULE_0__.Stat) {
        ballsCondition = "".concat(condition.toString().toLowerCase(), "class");
      } else {
        ballsCondition = condition;
      }

      return ballsCondition;
    }

    /**
     * Create a new macro with an "if" statement.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */ }, { key: "while_", value:






















    /**
     * Add a "while" statement to this macro.
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
    function while_(condition, contents) {
      return this.step("while ".concat(condition)).step(contents).step("endwhile");
    }

    /**
     * Create a new macro with a "while" statement.
     * @param condition The BALLS condition for the if statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */ }, { key: "externalIf", value:








    /**
     * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
    function externalIf(
    condition,
    ifTrue,
    ifFalse)
    {
      if (condition) {return this.step(ifTrue);} else
      if (ifFalse) {return this.step(ifFalse);} else
      {return this;}
    }

    /**
     * Create a new macro with a condition evaluated at the time of building the macro.
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */ }, { key: "repeat", value:









    /**
     * Add a repeat step to the macro.
     * @returns {Macro} This object itself.
     */
    function repeat() {
      return this.step("repeat");
    }

    /**
     * Add one or more skill cast steps to the macro.
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */ }, { key: "skill", value:
    function skill() {for (var _len2 = arguments.length, skills = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {skills[_key2] = arguments[_key2];}
      return this.step.apply(this, _toConsumableArray(
        skills.map(function (skill) {
          return "skill ".concat(skillBallsMacroName(skill));
        }))
      );
    }

    /**
     * Create a new macro with one or more skill cast steps.
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */ }, { key: "trySkill", value:







    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
    function trySkill() {for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {skills[_key3] = arguments[_key3];}
      return this.step.apply(this, _toConsumableArray(
        skills.map(function (skill) {
          return Macro.if_("hasskill ".concat(
            skillBallsMacroName(skill)),
          Macro.skill(skill)
          );
        }))
      );
    }

    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */ }, { key: "trySkillRepeat", value:







    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
    function trySkillRepeat() {for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {skills[_key4] = arguments[_key4];}
      return this.step.apply(this, _toConsumableArray(
        skills.map(function (skill) {
          return Macro.if_("hasskill ".concat(
            skillBallsMacroName(skill)),
          Macro.skill(skill).repeat()
          );
        }))
      );
    }

    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */ }, { key: "item", value:







    /**
     * Add one or more item steps to the macro.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function item() {for (var _len5 = arguments.length, items = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {items[_key5] = arguments[_key5];}
      return this.step.apply(this, _toConsumableArray(
        items.map(function (itemOrItems) {
          return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
        }))
      );
    }

    /**
     * Create a new macro with one or more item steps.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */ }, { key: "tryItem", value:







    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function tryItem() {for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {items[_key6] = arguments[_key6];}
      return this.step.apply(this, _toConsumableArray(
        items.map(function (item) {
          return Macro.if_(
            itemOrItemsBallsMacroPredicate(item), "use ".concat(
              itemOrItemsBallsMacroName(item))
          );
        }))
      );
    }

    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */ }, { key: "attack", value:







    /**
     * Add an attack step to the macro.
     * @returns {Macro} This object itself.
     */
    function attack() {
      return this.step("attack");
    }

    /**
     * Create a new macro with an attack step.
     * @returns {Macro} This object itself.
     */ }, { key: "ifHolidayWanderer", value:




    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, unmutated.
     * @param macro The macro to place in the if_ statement
     */
    function ifHolidayWanderer(macro) {
      // const todaysWanderers = getTodaysHolidayWanderers();
      // if (todaysWanderers.length === 0) return this;
      // return this.if_(
      //   todaysWanderers.map((monster) => `monsterid ${monster.id}`).join(" || "),
      //   macro
      // );
      return this;
    }
    /**
     * Create a new macro starting with an ifHolidayWanderer step.
     * @param macro The macro to place inside the if_ statement
     */ }, { key: "ifNotHolidayWanderer", value:







    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, with the input macro appended.
     * @param macro The macro to place in the if_ statement.
     */
    function ifNotHolidayWanderer(macro) {
      /*const todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this.step(macro);
      return this.if_(
        todaysWanderers.map((monster) => `!monsterid ${monster.id}`).join(" && "),
        macro
      );*/
      return this;
    }
    /**
     * Create a new macro starting with an ifNotHolidayWanderer step.
     * @param macro The macro to place inside the if_ statement
     */ }], [{ key: "load", value: function load() {var _this;return (_this = new this()).step.apply(_this, _toConsumableArray((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)(Macro.SAVED_MACRO_PROPERTY).split(";")));} /**
     * Clear the saved macro in the Mafia property.
     */ }, { key: "clearSaved", value: function clearSaved() {(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.removeProperty)(Macro.SAVED_MACRO_PROPERTY);} }, { key: "step", value: function step() {var _this2;return (_this2 = new this()).step.apply(_this2, arguments);} }, { key: "clearAutoAttackMacros", value: function clearAutoAttackMacros() {var _iterator = _createForOfIteratorHelper(Macro.cachedAutoAttacks.keys()),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _Macro$cachedMacroIds;var name = _step.value;var id = (_Macro$cachedMacroIds = Macro.cachedMacroIds.get(name)) !== null && _Macro$cachedMacroIds !== void 0 ? _Macro$cachedMacroIds : getMacroId(name);(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1"));Macro.cachedAutoAttacks["delete"](name);}} catch (err) {_iterator.e(err);} finally {_iterator.f();}} }, { key: "abort", value: function abort() {return new this().abort();} }, { key: "runaway", value: function runaway() {return new this().runaway();} }, { key: "if_", value: function if_(condition, ifTrue) {return new this().if_(condition, ifTrue);} /**
     * Create a new macro with an "if" statement.
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */ }, { key: "ifNot_", value: function ifNot_(condition, ifTrue) {return new this().ifNot_(condition, ifTrue);} }, { key: "while_", value: function while_(condition, contents) {return new this().while_(condition, contents);} }, { key: "externalIf", value: function externalIf(condition, ifTrue, ifFalse) {return new this().externalIf(condition, ifTrue, ifFalse);} }, { key: "skill", value: function skill() {var _this3;return (_this3 = new this()).skill.apply(_this3, arguments);} }, { key: "trySkill", value: function trySkill() {var _this4;return (_this4 = new this()).trySkill.apply(_this4, arguments);} }, { key: "trySkillRepeat", value: function trySkillRepeat() {var _this5;return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);} }, { key: "item", value: function item() {var _this6;return (_this6 = new this()).item.apply(_this6, arguments);} }, { key: "tryItem", value: function tryItem() {var _this7;return (_this7 = new this()).tryItem.apply(_this7, arguments);} }, { key: "attack", value: function attack() {return new this().attack();} }, { key: "ifHolidayWanderer", value: function ifHolidayWanderer(macro) {return new this().ifHolidayWanderer(macro);} }, { key: "ifNotHolidayWanderer", value: function ifNotHolidayWanderer(macro) {return new this().ifNotHolidayWanderer(macro);} }]);return Macro;}();

/**
 * Adventure in a location and handle all combats with a given macro.
 * To use this function you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param macro Macro to execute.
 */_defineProperty(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");_defineProperty(Macro, "cachedMacroIds", new Map());_defineProperty(Macro, "cachedAutoAttacks", new Map());
function adventureMacro(loc, macro) {
  macro.save();
  (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.setAutoAttack)(0);
  try {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.adv1)(loc, 0, "");
    while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inMultiFight)()) {(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)();}
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.choiceFollowsFight)()) {(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("choice.php");}
  } finally {
    Macro.clearSaved();
  }
}

/**
 * Adventure in a location and handle all combats with a given autoattack and manual macro.
 * To use the nextMacro parameter you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param autoMacro Macro to execute via KoL autoattack.
 * @param nextMacro Macro to execute manually after autoattack completes.
 */
function adventureMacroAuto(
loc,
autoMacro)

{var _nextMacro;var nextMacro = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  nextMacro = (_nextMacro = nextMacro) !== null && _nextMacro !== void 0 ? _nextMacro : Macro.abort();
  autoMacro.setAutoAttack();
  nextMacro.save();
  try {
    (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.adv1)(loc, 0, "");
    while ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.inMultiFight)()) {(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.runCombat)();}
    if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.choiceFollowsFight)()) {(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("choice.php");}
  } finally {
    Macro.clearSaved();
  }
}

var StrictMacro = /*#__PURE__*/function (_Macro) {_inherits(StrictMacro, _Macro);var _super2 = _createSuper(StrictMacro);function StrictMacro() {_classCallCheck(this, StrictMacro);return _super2.apply(this, arguments);}_createClass(StrictMacro, [{ key: "skill", value:
    /**
     * Add one or more skill cast steps to the macro.
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */
    function skill() {var _get2;for (var _len7 = arguments.length, skills = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {skills[_key7] = arguments[_key7];}
      return (_get2 = _get(_getPrototypeOf(StrictMacro.prototype), "skill", this)).call.apply(_get2, [this].concat(skills));
    }

    /**
     * Create a new macro with one or more skill cast steps.
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */ }, { key: "item", value:







    /**
     * Add one or more item steps to the macro.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function item() {var _get3;for (var _len8 = arguments.length, items = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {items[_key8] = arguments[_key8];}
      return (_get3 = _get(_getPrototypeOf(StrictMacro.prototype), "item", this)).call.apply(_get3, [this].concat(items));
    }

    /**
     * Create a new macro with one or more item steps.
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */ }, { key: "trySkill", value:







    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkill() {var _get4;for (var _len9 = arguments.length, skills = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {skills[_key9] = arguments[_key9];}
      return (_get4 = _get(_getPrototypeOf(StrictMacro.prototype), "trySkill", this)).call.apply(_get4, [this].concat(skills));
    }

    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */ }, { key: "tryItem", value:







    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function tryItem() {var _get5;for (var _len10 = arguments.length, items = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {items[_key10] = arguments[_key10];}
      return (_get5 = _get(_getPrototypeOf(StrictMacro.prototype), "tryItem", this)).call.apply(_get5, [this].concat(items));
    }

    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */ }, { key: "trySkillRepeat", value:







    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkillRepeat() {var _get6;for (var _len11 = arguments.length, skills = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {skills[_key11] = arguments[_key11];}
      return (_get6 = _get(_getPrototypeOf(StrictMacro.prototype), "trySkillRepeat", this)).call.apply(_get6, [this].concat(skills));
    }

    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */ }], [{ key: "skill", value: function skill() {var _this8;return (_this8 = new this()).skill.apply(_this8, arguments);} }, { key: "item", value: function item() {var _this9;return (_this9 = new this()).item.apply(_this9, arguments);} }, { key: "trySkill", value: function trySkill() {var _this10;return (_this10 = new this()).trySkill.apply(_this10, arguments);} }, { key: "tryItem", value: function tryItem() {var _this11;return (_this11 = new this()).tryItem.apply(_this11, arguments);} }, { key: "trySkillRepeat", value:
    function trySkillRepeat()


    {var _this12;
      return (_this12 = new this()).trySkillRepeat.apply(_this12, arguments);
    } }]);return StrictMacro;}(Macro);

/***/ }),

/***/ "kolmafia":
/*!***************************!*\
  !*** external "kolmafia" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("kolmafia");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/misc/HeavyFax.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   main: () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kolmafia */ "kolmafia");
/* harmony import */ var kolmafia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kolmafia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _greyyou_src_utils_MacroBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../greyyou/src/utils/MacroBuilder */ "./src/greyyou/src/utils/MacroBuilder.ts");
function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function _createForOfIteratorHelper(o, allowArrayLike) {var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = it.call(o);}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it["return"] != null) it["return"]();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);Object.defineProperty(Constructor, "prototype", { writable: false });return Constructor;}function _defineProperty(obj, key, value) {key = _toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toPropertyKey(arg) {var key = _toPrimitive(arg, "string");return _typeof(key) === "symbol" ? key : String(key);}function _toPrimitive(input, hint) {if (_typeof(input) !== "object" || input === null) return input;var prim = input[Symbol.toPrimitive];if (prim !== undefined) {var res = prim.call(input, hint || "default");if (_typeof(res) !== "object") return res;throw new TypeError("@@toPrimitive must return a primitive value.");}return (hint === "string" ? String : Number)(input);}







var ambi = true;var

HeavyFax = /*#__PURE__*/function () {function HeavyFax() {_classCallCheck(this, HeavyFax);_defineProperty(this, "copier",
    kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get("Portable Photocopier"));_defineProperty(this, "photo",
    kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get("photocopied monster"));_defineProperty(this, "lookingFor", void 0);_defineProperty(this, "monsterId", void 0);}_createClass(HeavyFax, [{ key: "runCombat", value:



    function runCombat(monster) {
      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.choiceFollowsFight)() || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.fightFollowsChoice)() || (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.handlingChoice)()) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("main.php");
      }

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.currentRound)() == 0) {
        if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemAmount)(this.copier) < 1) {
          throw "Need at least one portable photocopier in inventory";
        }

        if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemAmount)(this.photo) > 0) {
          throw "Have a photo in inventory already";
        }

        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("inventory.php?reminisce=1", false);
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)(
          "choice.php?pwd=&whichchoice=1463&option=1&mid=" + (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(monster)
        );
      }

      this.handleCombat(monster);
    } }, { key: "handleCombat", value:

    function handleCombat() {var expected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.fightFollowsChoice)()) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("fight.php");
      }

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.currentRound)() == 0) {
        throw "Expected to be in fight, wasn't.";
      }

      if (expected != null && expected != (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.lastMonster)()) {
        throw "Somehow not in the expected fight";
      }

      this.monsterId = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.lastMonster)());

      var macro = _greyyou_src_utils_MacroBuilder__WEBPACK_IMPORTED_MODULE_1__.Macro.item(this.copier).
      skill(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Skill.get("saucegeyser")).
      attack().
      abort();

      macro.submit();

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.currentRound)() != 0) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
          "We're still in a fight, looks like shitty autocombat v0.1 has failed.",
          "red"
        );

        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.cliExecute)("relay");

        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.userConfirm)(
          "Press a button when you've finished this fight, doesn't matter which button."
        );

        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("You finished the fight? Lets see...");
      }

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.currentRound)() != 0) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("You still didn't finish the fight. Lets abort", "red");

        throw "Aborting as user is incredibly weak and lame and unable to fight";
      }

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemAmount)(this.photo) == 0) {
        throw "We failed to photocopy the monster..";
      }
    } }, { key: "getAmbiguous", value:

    function getAmbiguous() {
      var jsonized = JSON.parse(
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("https://onlyfax.loathers.net/ambiguous.json")
      );

      var list = [];var _iterator = _createForOfIteratorHelper(

          jsonized),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var value = _step.value;
          list.push({
            clan: value.clan,
            clanTitle: value.title,
            monster: kolmafia__WEBPACK_IMPORTED_MODULE_0__.Monster.get(value.monster)
          });
        }} catch (err) {_iterator.e(err);} finally {_iterator.f();}

      return list;
    } }, { key: "getPhoto", value:

    function getPhoto() {
      var prop = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)("photocopyMonster");

      return kolmafia__WEBPACK_IMPORTED_MODULE_0__.Monster.all().find(function (m) {return m.name == prop;});
    } }, { key: "start", value:

    function start() {
      if (!this.hasStuff()) {
        return;
      }

      this.lookingFor = this.getLookingFor();
      var photo = this.getPhoto();

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.currentRound)() != 0) {
        if (photo != null && this.lookingFor.includes(photo)) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("You already have a photo in inventory", "red");

          return;
        }

        if (!this.lookingFor.includes((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.lastMonster)())) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Not looking for this sadly", "red");

          return;
        }

        var confirm = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.userConfirm)(
          "Do you want to try do the monster you are fighting?"
        );

        if (!confirm) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Not doing as per user request");

          return;
        }

        this.runCombat((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.lastMonster)());
      } else {
        var has = this.getLocketHas();

        var couldDo = [];

        if (photo != null && this.lookingFor.includes(photo)) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Found existing photocopy " + photo + " in inventory");
          this.submit();

          return;
        }var _iterator2 = _createForOfIteratorHelper(

            has),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var h = _step2.value;
            if (!this.lookingFor.includes(h)) {
              continue;
            }

            couldDo.push(h);
          }} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}

        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Looking for: ".concat(
          this.lookingFor.length, " monsters, you could do ").concat(couldDo.length, " of them")
        );

        if (couldDo.length == 0) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("You can't do any of them sadface.png", "red");

          return;
        }

        var letsDo = couldDo[Math.floor(Math.random() * couldDo.length)];

        var _confirm = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.userConfirm)("Do you want to try do: " + letsDo.name);

        if (!_confirm) {
          (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Not doing as per user request");

          return;
        }

        this.runCombat(letsDo);
      }

      this.submit();
    } }, { key: "submit", value:

    function submit() {
      var photo = this.getPhoto();

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sendFax)();
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
        "Now receiving fax just incase something goes wrong, so you still have fax on hand..",
        "blue"
      );
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.receiveFax)();

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Now asking OnlyFax to grab it..");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.chatPrivate)("OnlyFax", "addfax run".concat(ambi ? " " + this.monsterId : ""));

      // Reset it early so they dont reuse
      this.monsterId = null;

      if (!this.lookingFor.includes(photo)) {
        return;
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
        "Going to wait for 10 seconds, then check if OnlyFax processed it properly.",
        "blue"
      );
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.waitq)(10);

      var looking = this.getLookingFor();

      if (looking.includes(photo)) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)(
          "Something went wrong, OnlyFax is still looking for that monster.",
          "red"
        );

        return;
      }

      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("Success! It looks like OnlyFax added that monster!", "blue");
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.sendFax)();
    } }, { key: "getLookingFor", value:

    function getLookingFor() {
      if (ambi) {
        var list = this.getAmbiguous();

        return list.
        map(function (l) {return l.monster;}).
        filter(
          function (m) {return kolmafia__WEBPACK_IMPORTED_MODULE_0__.Monster.get(2073) != m && kolmafia__WEBPACK_IMPORTED_MODULE_0__.Monster.get("source agent") != m;}
        );
      }

      var page = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.visitUrl)("https://onlyfax.loathers.net");
      page = page.substring(page.indexOf("<a id=\"lookingfor\"></a>"));

      var match;
      var monsters = [];

      while (
      (match = page.match(/<td><code>\[(\d+)][^<]+<\/code><\/td>/)) != null)
      {
        monsters.push(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Monster.get(parseInt(match[1])));
        page = page.replace(match[0], "");
      }

      return monsters.filter(
        function (m) {return kolmafia__WEBPACK_IMPORTED_MODULE_0__.Monster.get(2073) != m && kolmafia__WEBPACK_IMPORTED_MODULE_0__.Monster.get("source agent") != m;}
      );
    } }, { key: "getLocketHas", value:

    function getLocketHas() {
      var fought = (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)("_locketMonstersFought").
      split(",").
      filter(function (s) {return s.length > 0;}).
      map(function (s) {return kolmafia__WEBPACK_IMPORTED_MODULE_0__.Monster.get((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.toInt)(s));});

      var monsters = Object.keys((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getLocketMonsters)()).map(function (s) {return (
          kolmafia__WEBPACK_IMPORTED_MODULE_0__.Monster.get(s));}
      );

      return monsters.filter(function (m) {return !fought.includes(m);});
    } }, { key: "hasStuff", value:

    function hasStuff() {
      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.pullsRemaining)() != -1) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("You are not in aftercore", "red");

        return false;
      }

      if (
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.currentRound)() == 0 &&
      (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getProperty)("_locketMonstersFought").split(",").length >= 3)
      {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("You already used all lockets", "red");

        return false;
      }

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get("combat lover's locket")) <= 0) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("You don't have combat locket", "red");

        return false;
      }

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemAmount)(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get("Clan VIP Lounge key")) <= 0) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("You don't have Clan VIP Lounge key", "red");

        return false;
      }

      if ((0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.itemAmount)(kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get("portable photocopier")) <= 0) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("You don't have portable photocopiers", "red");

        return false;
      }

      if (!(0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.getClanLounge)()[kolmafia__WEBPACK_IMPORTED_MODULE_0__.Item.get("deluxe fax machine").name]) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("You don't have a fax machine in your clan", "red");

        return false;
      }

      if (ambi && (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.availableAmount)(this.photo) > 0) {
        (0,kolmafia__WEBPACK_IMPORTED_MODULE_0__.print)("You have a photocopy in your inventory", "red");

        return false;
      }

      return true;
    } }]);return HeavyFax;}();


function main() {var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "1";
  var heavy = new HeavyFax();

  heavy.start();
}
})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;