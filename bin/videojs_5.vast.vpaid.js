(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var METHODS = [
    'handshakeVersion',
    'initAd',
    'startAd',
    'stopAd',
    'skipAd', // VPAID 2.0 new method
    'resizeAd',
    'pauseAd',
    'resumeAd',
    'expandAd',
    'collapseAd',
    'subscribe',
    'unsubscribe'
];

var EVENTS = [
    'AdLoaded',
    'AdStarted',
    'AdStopped',
    'AdSkipped',
    'AdSkippableStateChange', // VPAID 2.0 new event
    'AdSizeChange', // VPAID 2.0 new event
    'AdLinearChange',
    'AdDurationChange', // VPAID 2.0 new event
    'AdExpandedChange',
    'AdRemainingTimeChange', // [Deprecated in 2.0] but will be still fired for backwards compatibility
    'AdVolumeChange',
    'AdImpression',
    'AdVideoStart',
    'AdVideoFirstQuartile',
    'AdVideoMidpoint',
    'AdVideoThirdQuartile',
    'AdVideoComplete',
    'AdClickThru',
    'AdInteraction', // VPAID 2.0 new event
    'AdUserAcceptInvitation',
    'AdUserMinimize',
    'AdUserClose',
    'AdPaused',
    'AdPlaying',
    'AdLog',
    'AdError'
];

var GETTERS = [
    'getAdLinear',
    'getAdWidth', // VPAID 2.0 new getter
    'getAdHeight', // VPAID 2.0 new getter
    'getAdExpanded',
    'getAdSkippableState', // VPAID 2.0 new getter
    'getAdRemainingTime',
    'getAdDuration', // VPAID 2.0 new getter
    'getAdVolume',
    'getAdCompanions', // VPAID 2.0 new getter
    'getAdIcons' // VPAID 2.0 new getter
];

var SETTERS = [
    'setAdVolume'
];


/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */


/**
 * IVPAIDAdUnit
 *
 * @class
 *
 * @param {object} creative
 * @param {HTMLElement} el
 * @param {HTMLVideoElement} video
 */
function IVPAIDAdUnit(creative, el, video) {}


/**
 * handshakeVersion
 *
 * @param {string} VPAIDVersion
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.handshakeVersion = function (VPAIDVersion, callback) {};

/**
 * initAd
 *
 * @param {number} width
 * @param {number} height
 * @param {string} viewMode can be 'normal', 'thumbnail' or 'fullscreen'
 * @param {number} desiredBitrate indicates the desired bitrate in kbps
 * @param {object} [creativeData] used for additional initialization data
 * @param {object} [environmentVars] used for passing implementation-specific of js version
 * @param {NodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.initAd = function(width, height, viewMode, desiredBitrate, creativeData, environmentVars, callback) {};

/**
 * startAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.startAd = function(callback) {};

/**
 * stopAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.stopAd = function(callback) {};

/**
 * skipAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.skipAd = function(callback) {};

/**
 * resizeAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.resizeAd = function(width, height, viewMode, callback) {};

/**
 * pauseAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.pauseAd = function(callback) {};

/**
 * resumeAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.resumeAd = function(callback) {};

/**
 * expandAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.expandAd = function(callback) {};

/**
 * collapseAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.collapseAd = function(callback) {};

/**
 * subscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 * @param {object} context
 */
IVPAIDAdUnit.prototype.subscribe = function(event, handler, context) {};

/**
 * startAd
 *
 * @param {string} event
 * @param {function} handler
 */
IVPAIDAdUnit.prototype.unsubscribe = function(event, handler) {};



/**
 * getAdLinear
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdLinear = function(callback) {};

/**
 * getAdWidth
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdWidth = function(callback) {};

/**
 * getAdHeight
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdHeight = function(callback) {};

/**
 * getAdExpanded
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdExpanded = function(callback) {};

/**
 * getAdSkippableState
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdSkippableState = function(callback) {};

/**
 * getAdRemainingTime
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdRemainingTime = function(callback) {};

/**
 * getAdDuration
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdDuration = function(callback) {};

/**
 * getAdVolume
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdVolume = function(callback) {};

/**
 * getAdCompanions
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdCompanions = function(callback) {};

/**
 * getAdIcons
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdIcons = function(callback) {};

/**
 * setAdVolume
 *
 * @param {number} volume
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.setAdVolume = function(volume, callback) {};

addStaticToInterface(IVPAIDAdUnit, 'METHODS', METHODS);
addStaticToInterface(IVPAIDAdUnit, 'GETTERS', GETTERS);
addStaticToInterface(IVPAIDAdUnit, 'SETTERS', SETTERS);
addStaticToInterface(IVPAIDAdUnit, 'EVENTS',  EVENTS);


var VPAID1_METHODS = METHODS.filter(function(method) {
    return ['skipAd'].indexOf(method) === -1;
});

addStaticToInterface(IVPAIDAdUnit, 'checkVPAIDInterface', function checkVPAIDInterface (creative) {
    var result = VPAID1_METHODS.every(function(key) {
        return typeof creative[key] === 'function';
    });
    return result;
});

module.exports = IVPAIDAdUnit;

function addStaticToInterface(Interface, name, value) {
    Object.defineProperty(Interface, name, {
        writable: false,
        configurable: false,
        value: value
    });
}


},{}],2:[function(require,module,exports){
'use strict';

var IVPAIDAdUnit = require('./IVPAIDAdUnit');
var Subscriber = require('./subscriber');
var checkVPAIDInterface = IVPAIDAdUnit.checkVPAIDInterface;
var utils = require('./utils');
var METHODS = IVPAIDAdUnit.METHODS;
var ERROR = 'AdError';
var AD_CLICK = 'AdClickThru';
var FILTERED_EVENTS = IVPAIDAdUnit.EVENTS.filter(function (event) {
    return event != AD_CLICK;
});

/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */


/**
 * VPAIDAdUnit
 * @class
 *
 * @param VPAIDCreative
 * @param {HTMLElement} [el] this will be used in initAd environmentVars.slot if defined
 * @param {HTMLVideoElement} [video] this will be used in initAd environmentVars.videoSlot if defined
 */
function VPAIDAdUnit(VPAIDCreative, el, video, iframe) {
    this._isValid = checkVPAIDInterface(VPAIDCreative);
    if (this._isValid) {
        this._creative = VPAIDCreative;
        this._el = el;
        this._videoEl = video;
        this._iframe = iframe;
        this._subscribers = new Subscriber();
        utils.setFullSizeStyle(el);
        $addEventsSubscribers.call(this);
    }
}

VPAIDAdUnit.prototype = Object.create(IVPAIDAdUnit.prototype);

/**
 * isValidVPAIDAd will return if the VPAIDCreative passed in constructor is valid or not
 *
 * @return {boolean}
 */
VPAIDAdUnit.prototype.isValidVPAIDAd = function isValidVPAIDAd() {
    return this._isValid;
};

IVPAIDAdUnit.METHODS.forEach(function(method) {
    //NOTE: this methods arguments order are implemented differently from the spec
    var ignores = [
        'subscribe',
        'unsubscribe',
        'initAd'
    ];

    if (ignores.indexOf(method) !== -1) return;

    VPAIDAdUnit.prototype[method] = function () {
        var ariaty = IVPAIDAdUnit.prototype[method].length;
        // TODO avoid leaking arguments
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        var args = Array.prototype.slice.call(arguments);
        var callback = (ariaty === args.length) ? args.pop() : undefined;

        setTimeout(function () {
            var result, error = null;
            try {
                result = this._creative[method].apply(this._creative, args);
            } catch(e) {
                error = e;
            }

            callOrTriggerEvent(callback, this._subscribers, error, result);
        }.bind(this), 0);
    };
});


/**
 * initAd concreate implementation
 *
 * @param {number} width
 * @param {number} height
 * @param {string} viewMode can be 'normal', 'thumbnail' or 'fullscreen'
 * @param {number} desiredBitrate indicates the desired bitrate in kbps
 * @param {object} [creativeData] used for additional initialization data
 * @param {object} [environmentVars] used for passing implementation-specific of js version, if el & video was used in constructor slot & videoSlot will be added to the object
 * @param {NodeStyleCallback} callback
 */
VPAIDAdUnit.prototype.initAd = function initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars, callback) {
    creativeData = creativeData || {};
    environmentVars = utils.extend({
        slot: this._el,
        videoSlot: this._videoEl
    }, environmentVars || {});

    setTimeout(function () {
        var error;
        try {
            this._creative.initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars);
        } catch (e) {
            error = e;
        }

        callOrTriggerEvent(callback, this._subscribers, error);
    }.bind(this), 0);
};

/**
 * subscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 * @param {object} context
 */
VPAIDAdUnit.prototype.subscribe = function subscribe(event, handler, context) {
    this._subscribers.subscribe(handler, event, context);
};


/**
 * unsubscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 */
VPAIDAdUnit.prototype.unsubscribe = function unsubscribe(event, handler) {
    this._subscribers.unsubscribe(handler, event);
};

//alias
VPAIDAdUnit.prototype.on = VPAIDAdUnit.prototype.subscribe;
VPAIDAdUnit.prototype.off = VPAIDAdUnit.prototype.unsubscribe;

IVPAIDAdUnit.GETTERS.forEach(function(getter) {
    VPAIDAdUnit.prototype[getter] = function (callback) {
        setTimeout(function () {

            var result, error = null;
            try {
                result = this._creative[getter]();
            } catch(e) {
                error = e;
            }

            callOrTriggerEvent(callback, this._subscribers, error, result);
        }.bind(this), 0);
    };
});

/**
 * setAdVolume
 *
 * @param volume
 * @param {nodeStyleCallback} callback
 */
VPAIDAdUnit.prototype.setAdVolume = function setAdVolume(volume, callback) {
    setTimeout(function () {

        var result, error = null;
        try {
            this._creative.setAdVolume(volume);
            result = this._creative.getAdVolume();
        } catch(e) {
            error = e;
        }

        if (!error) {
            error = utils.validate(result === volume, 'failed to apply volume: ' + volume);
        }
        callOrTriggerEvent(callback, this._subscribers, error, result);
    }.bind(this), 0);
};

VPAIDAdUnit.prototype._destroy = function destroy() {
    this.stopAd();
    this._subscribers.unsubscribeAll();
};

function $addEventsSubscribers() {
    // some ads implement
    // so they only handle one subscriber
    // to handle this we create our one
    FILTERED_EVENTS.forEach(function (event) {
        this._creative.subscribe($trigger.bind(this, event), event);
    }.bind(this));

    // map the click event to be an object instead of depending of the order of the arguments
    // and to be consistent with the flash
    this._creative.subscribe($clickThruHook.bind(this), AD_CLICK);

    // because we are adding the element inside the iframe
    // the user is not able to click in the video
    if (this._videoEl) {
        var documentElement = this._iframe.contentDocument.documentElement;
        var videoEl = this._videoEl;
        documentElement.addEventListener('click', function(e) {
            if (e.target === documentElement) {
                videoEl.click();
            }
        });
    }
}

function $clickThruHook(url, id, playerHandles) {
    this._subscribers.triggerSync(AD_CLICK, {url: url, id: id, playerHandles: playerHandles});
}

function $trigger(event) {
    // TODO avoid leaking arguments
    // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
    this._subscribers.trigger(event, Array.prototype.slice(arguments, 1));
}

function callOrTriggerEvent(callback, subscribers, error, result) {
    if (callback) {
        callback(error, result);
    } else if (error) {
        subscribers.trigger(ERROR, error);
    }
}

module.exports = VPAIDAdUnit;


},{"./IVPAIDAdUnit":1,"./subscriber":4,"./utils":5}],3:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var unique = utils.unique('vpaidIframe');
var VPAIDAdUnit = require('./VPAIDAdUnit');

var defaultTemplate = '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head><meta charset="UTF-8"></head>' +
    '<body style="margin:0;padding:0"><div class="ad-element"></div>' +
    '<script type="text/javascript" src="{{iframeURL_JS}}"></script>' +
    '<script type="text/javascript">' +
    'window.parent.postMessage(\'{"event": "ready", "id": "{{iframeID}}"}\', \'{{origin}}\');' +
    '</script>' +
    '</body>' +
    '</html>';

var AD_STOPPED = 'AdStopped';

/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */

/**
 * VPAIDHTML5Client
 * @class
 *
 * @param {HTMLElement} el that will contain the iframe to load adUnit and a el to add to adUnit slot
 * @param {HTMLVideoElement} video default video element to be used by adUnit
 * @param {object} [templateConfig] template: html template to be used instead of the default, extraOptions: to be used when rendering the template
 * @param {object} [vpaidOptions] timeout: when loading adUnit
 */
function VPAIDHTML5Client(el, video, templateConfig, vpaidOptions) {
    templateConfig = templateConfig || {};

    this._id = unique();
    this._destroyed = false;

    this._frameContainer = utils.createElementInEl(el, 'div');
    this._videoEl = video;
    this._vpaidOptions = vpaidOptions || {timeout: 10000};

    this._templateConfig = {
        template: templateConfig.template || defaultTemplate,
        extraOptions: templateConfig.extraOptions || {}
    };
}

/**
 * destroy
 *
 */
VPAIDHTML5Client.prototype.destroy = function destroy() {
    if (this._destroyed) {
        return;
    }
    this._destroyed = true;
    $unloadPreviousAdUnit.call(this);
};

/**
 * isDestroyed
 *
 * @return {boolean}
 */
VPAIDHTML5Client.prototype.isDestroyed = function isDestroyed() {
    return this._destroyed;
};

/**
 * loadAdUnit
 *
 * @param {string} adURL url of the js of the adUnit
 * @param {nodeStyleCallback} callback
 */
VPAIDHTML5Client.prototype.loadAdUnit = function loadAdUnit(adURL, callback) {
    if(this._onLoad){ return }

    $throwIfDestroyed.call(this);
    $unloadPreviousAdUnit.call(this);
    var that = this;

    var frame = utils.createIframeWithContent(
        this._frameContainer,
        this._templateConfig.template,
        utils.extend({
            iframeURL_JS: adURL,
            iframeID: this.getID(),
            origin: getOrigin()
        }, this._templateConfig.extraOptions)
    );

    this._frame = frame;

    this._onLoad = utils.callbackTimeout(
        this._vpaidOptions.timeout,
        onLoad.bind(this),
        onTimeout.bind(this)
    );

    window.addEventListener('message', this._onLoad);

    function onLoad (e) {
        /*jshint validthis: false */
        //don't clear timeout
        if (e.origin !== getOrigin()) return;
        var result = JSON.parse(e.data);

        //don't clear timeout
        if (result.id !== that.getID()) return;

        var adUnit, error, createAd;
        if (!that._frame.contentWindow) {

            error = 'the iframe is not anymore in the DOM tree';

        } else {
            createAd = that._frame.contentWindow.getVPAIDAd;
            error = utils.validate(typeof createAd === 'function', 'the ad didn\'t return a function to create an ad');
        }

        if (!error) {
            var adEl = that._frame.contentWindow.document.querySelector('.ad-element');
            adUnit = new VPAIDAdUnit(createAd(), adEl, that._videoEl, that._frame);
            adUnit.subscribe(AD_STOPPED, $adDestroyed.bind(that));
            error = utils.validate(adUnit.isValidVPAIDAd(), 'the add is not fully complaint with VPAID specification');
        }

        that._adUnit = adUnit;
        $destroyLoadListener.call(that);
        callback(error, error ? null : adUnit);

        //clear timeout
        return true;
    }

    function onTimeout() {
        callback('timeout', null);
    }
};

/**
 * unloadAdUnit
 *
 */
VPAIDHTML5Client.prototype.unloadAdUnit = function unloadAdUnit() {
    $unloadPreviousAdUnit.call(this);
};

/**
 * getID will return the unique id
 *
 * @return {string}
 */
VPAIDHTML5Client.prototype.getID = function () {
    return this._id;
};


/**
 * $removeEl
 *
 * @param {string} key
 */
function $removeEl(key) {
    var el = this[key];
    if (el && el.parentNode) {
        el.parentNode.removeChild(el);
        delete this[key];
    }
}

function $adDestroyed() {
    $removeAdElements.call(this);
    delete this._adUnit;
}

function $unloadPreviousAdUnit() {
    $removeAdElements.call(this);
    $destroyAdUnit.call(this);
}

function $removeAdElements() {
    $removeEl.call(this, '_frame');
    $destroyLoadListener.call(this);
}

/**
 * $destroyLoadListener
 *
 */
function $destroyLoadListener() {
    if (this._onLoad) {
        window.removeEventListener('message', this._onLoad);
        delete this._onLoad;
    }
}


function $destroyAdUnit() {
    if (this._adUnit) {
        this._adUnit.stopAd();
        delete this._adUnit;
    }
}

/**
 * $throwIfDestroyed
 *
 */
function $throwIfDestroyed() {
    if (this._destroyed) {
        throw new Error ('VPAIDHTML5Client already destroyed!');
    }
}

function getOrigin() {
    var _location = window.parent.location;
    return _location.origin || (
        _location.protocol + '//' +
        _location.hostname +
        (_location.port ? ':' + _location.port: '')
    );
}

module.exports = VPAIDHTML5Client;
window.VPAIDHTML5Client = VPAIDHTML5Client;

},{"./VPAIDAdUnit":2,"./utils":5}],4:[function(require,module,exports){
'use strict';

function Subscriber() {
    this._subscribers = {};
}

Subscriber.prototype.subscribe = function subscribe(handler, eventName, context) {
    if (!this.isHandlerAttached(handler, eventName)) {
        this.get(eventName).push({handler: handler, context: context, eventName: eventName});
    }
};

Subscriber.prototype.unsubscribe = function unsubscribe(handler, eventName) {
    this._subscribers[eventName] = this.get(eventName).filter(function (subscriber) {
        return handler !== subscriber.handler;
    });
};

Subscriber.prototype.unsubscribeAll = function unsubscribeAll() {
    this._subscribers = {};
};

Subscriber.prototype.trigger = function(eventName, data) {
    var that = this;
    var subscribers = this.get(eventName)
        .concat(this.get('*'));

    subscribers.forEach(function (subscriber) {
        setTimeout(function () {
            if (that.isHandlerAttached(subscriber.handler, subscriber.eventName)) {
                subscriber.handler.call(subscriber.context, data);
            }
        }, 0);
    });
};

Subscriber.prototype.triggerSync = function(eventName, data) {
    var subscribers = this.get(eventName)
        .concat(this.get('*'));

    subscribers.forEach(function (subscriber) {
        subscriber.handler.call(subscriber.context, data);
    });
};

Subscriber.prototype.get = function get(eventName) {
    if (!this._subscribers[eventName]) {
        this._subscribers[eventName] = [];
    }
    return this._subscribers[eventName];
};

Subscriber.prototype.isHandlerAttached = function isHandlerAttached(handler, eventName) {
    return this.get(eventName).some(function(subscriber) {
        return handler === subscriber.handler;
    })
};

module.exports = Subscriber;


},{}],5:[function(require,module,exports){
'use strict';

/**
 * noop a empty function
 */
function noop() {}

/**
 * validate if is not validate will return an Error with the message
 *
 * @param {boolean} isValid
 * @param {string} message
 */
function validate(isValid, message) {
    return isValid ? null : new Error(message);
}

/**
 * callbackTimeout if the onSuccess is not called and returns true in the timelimit then onTimeout will be called
 *
 * @param {number} timer
 * @param {function} onSuccess
 * @param {function} onTimeout
 */
function callbackTimeout(timer, onSuccess, onTimeout) {
    var callback, timeout;

    timeout = setTimeout(function () {
        onSuccess = noop;
        onTimeout();
    }, timer);

    callback = function () {
        // TODO avoid leaking arguments
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        if (onSuccess.apply(this, arguments)) {
            clearTimeout(timeout);
        }
    };

    return callback;
}


/**
 * createElementInEl
 *
 * @param {HTMLElement} parent
 * @param {string} tagName
 * @param {string} id
 */
function createElementInEl(parent, tagName, id) {
    var nEl = document.createElement(tagName);
    if (id) nEl.id = id;
    parent.appendChild(nEl);
    return nEl;
}

/**
 * createIframeWithContent
 *
 * @param {HTMLElement} parent
 * @param {string} template simple template using {{var}}
 * @param {object} data
 */
function createIframeWithContent(parent, template, data) {
    var iframe = createIframe(parent, null, data.zIndex);
    if (!setIframeContent(iframe, simpleTemplate(template, data))) return;
    return iframe;
}

/**
 * createIframe
 *
 * @param {HTMLElement} parent
 * @param {string} url
 */
function createIframe(parent, url, zIndex) {
    var nEl = document.createElement('iframe');
    nEl.src = url || 'about:blank';
    nEl.marginWidth = '0';
    nEl.marginHeight = '0';
    nEl.frameBorder = '0';
    nEl.width = '100%';
    nEl.height = '100%';
    setFullSizeStyle(nEl);

    if(zIndex){
        nEl.style.zIndex = zIndex;
    }

    nEl.setAttribute('SCROLLING','NO');
    parent.innerHTML = '';
    parent.appendChild(nEl);
    return nEl;
}

function setFullSizeStyle(element) {
    if(element) {
        element.style.position = 'absolute';
        element.style.left = '0';
        element.style.top = '0';
        element.style.margin = '0px';
        element.style.padding = '0px';
        element.style.border = 'none';
        element.style.width = '100%';
        element.style.height = '100%';
    }
}

/**
 * simpleTemplate
 *
 * @param {string} template
 * @param {object} data
 */
function simpleTemplate(template, data) {
    Object.keys(data).forEach(function (key) {
        var value = (typeof value === 'object') ? JSON.stringify(data[key]) : data[key];
        template = template.replace(new RegExp('{{' + key + '}}', 'g'), value);
    });
    return template;
}

/**
 * setIframeContent
 *
 * @param {HTMLIframeElement} iframeEl
 * @param content
 */
function setIframeContent(iframeEl, content) {
    var iframeDoc = iframeEl.contentWindow && iframeEl.contentWindow.document;
    if (!iframeDoc) return false;

    iframeDoc.write(content);

    return true;
}


/**
 * extend object with keys from another object
 *
 * @param {object} toExtend
 * @param {object} fromSource
 */
function extend(toExtend, fromSource) {
    Object.keys(fromSource).forEach(function(key) {
        toExtend[key] = fromSource[key];
    });
    return toExtend;
}


/**
 * unique will create a unique string everytime is called, sequentially and prefixed
 *
 * @param {string} prefix
 */
function unique(prefix) {
    var count = -1;
    return function () {
        return prefix + '_' + (++count);
    };
}

module.exports = {
    noop: noop,
    validate: validate,
    callbackTimeout: callbackTimeout,
    createElementInEl: createElementInEl,
    createIframeWithContent: createIframeWithContent,
    createIframe: createIframe,
    setFullSizeStyle: setFullSizeStyle,
    simpleTemplate: simpleTemplate,
    setIframeContent: setIframeContent,
    extend: extend,
    unique: unique
};


},{}],6:[function(require,module,exports){
'use strict';

var InLine = require('./InLine');
var Wrapper = require('./Wrapper');

function Ad(adJTree) {
  if (!(this instanceof Ad)) {
    return new Ad(adJTree);
  }
  this.initialize(adJTree);
}

Ad.prototype.initialize = function(adJTree) {
  this.id = adJTree.attr('id');
  this.sequence = adJTree.attr('sequence');

  if(adJTree.inLine) {
    this.inLine = new InLine(adJTree.inLine);
  }

  if(adJTree.wrapper){
    this.wrapper = new Wrapper(adJTree.wrapper);
  }
};

module.exports = Ad;
},{"./InLine":9,"./Wrapper":19}],7:[function(require,module,exports){
'use strict';

var TrackingEvent = require('./TrackingEvent');

var utilities = require('../../utils/utilityFunctions');

var xml = require('../../utils/xml');

var logger = require ('../../utils/consoleLogger');


function Companion(companionJTree) {
  if (!(this instanceof Companion)) {
    return new Companion(companionJTree);
  }

  logger.info ("<Companion> found companion ad");
  logger.debug ("<Companion>  companionJTree:", companionJTree);

  //Required Elements
  this.creativeType = xml.attr(companionJTree.staticResource, 'creativeType');
  this.staticResource = xml.keyValue(companionJTree.staticResource);

  logger.info ("<Companion>  creativeType: " + this.creativeType);
  logger.info ("<Companion>  staticResource: " + this.staticResource);

  // Weird bug when the JXON tree is built it doesn't handle casing properly in this situation...
  var htmlResource = null;
  if (xml.keyValue(companionJTree.HTMLResource)) {
    htmlResource = xml.keyValue(companionJTree.HTMLResource);
  } else if (xml.keyValue(companionJTree.hTMLResource)) {
    htmlResource = xml.keyValue(companionJTree.hTMLResource);
  }

  if (htmlResource !== null)
  {
    logger.info ("<Companion> found html resource", htmlResource);
  }

  this.htmlResource = htmlResource;

  var iframeResource = null;
  if (xml.keyValue(companionJTree.IFrameResource)) {
    iframeResource = xml.keyValue(companionJTree.IFrameResource);
  } else if (xml.keyValue(companionJTree.iFrameresource)) {
    iframeResource = xml.keyValue(companionJTree.iFrameresource);
  }

  if (iframeResource !== null)
  {
    logger.info ("<Companion> found iframe resource", iframeResource);
  }

  this.iframeResource = iframeResource;

  //Optional fields
  this.id = xml.attr(companionJTree, 'id');
  this.width = xml.attr(companionJTree, 'width');
  this.height = xml.attr(companionJTree, 'height');
  this.expandedWidth = xml.attr(companionJTree, 'expandedWidth');
  this.expandedHeight = xml.attr(companionJTree, 'expandedHeight');
  this.scalable = xml.attr(companionJTree, 'scalable');
  this.maintainAspectRatio = xml.attr(companionJTree, 'maintainAspectRatio');
  this.minSuggestedDuration = xml.attr(companionJTree, 'minSuggestedDuration');
  this.apiFramework = xml.attr(companionJTree, 'apiFramework');
  this.companionClickThrough = xml.keyValue(companionJTree.companionClickThrough);
  this.trackingEvents = parseTrackingEvents(companionJTree.trackingEvents && companionJTree.trackingEvents.tracking);

  logger.info ("<Companion>  companionClickThrough: " + this.companionClickThrough);


  /*** Local functions ***/
  function parseTrackingEvents(trackingEvents) {
    var trackings = [];
    if (utilities.isDefined(trackingEvents)) {
      trackingEvents = utilities.isArray(trackingEvents) ? trackingEvents : [trackingEvents];
      trackingEvents.forEach(function (trackingData) {
        trackings.push(new TrackingEvent(trackingData));
      });
    }
    return trackings;
  }
}

module.exports = Companion;
},{"../../utils/consoleLogger":31,"../../utils/utilityFunctions":37,"../../utils/xml":38,"./TrackingEvent":12}],8:[function(require,module,exports){
'use strict';

var Linear = require('./Linear');
var Companion = require('./Companion');
var utilities = require('../../utils/utilityFunctions');

function Creative(creativeJTree) {
  if(!(this instanceof Creative)) {
    return new Creative(creativeJTree);
  }

  this.id = creativeJTree.attr('id');
  this.sequence = creativeJTree.attr('sequence');
  this.adId = creativeJTree.attr('adId');
  this.apiFramework = creativeJTree.attr('apiFramework');

  if(creativeJTree.linear) {
    this.linear = new Linear(creativeJTree.linear);
  }

  if (creativeJTree.companionAds) {
    var companions = [];
    var companionAds = creativeJTree.companionAds && creativeJTree.companionAds.companion;
    if (utilities.isDefined(companionAds)) {
      companionAds = utilities.isArray(companionAds) ? companionAds : [companionAds];
      companionAds.forEach(function (companionData) {
        companions.push(new Companion(companionData));
      });
    }
    this.companionAds = companions;
  }
}

/**
 * Returns true if the browser supports at the creative.
 */
Creative.prototype.isSupported = function(){
  if(this.linear) {
    return this.linear.isSupported();
  }

  return true;
};

Creative.parseCreatives = function parseCreatives(creativesJTree) {
  var creatives = [];
  var creativesData;
  if (utilities.isDefined(creativesJTree) && utilities.isDefined(creativesJTree.creative)) {
    creativesData = utilities.isArray(creativesJTree.creative) ? creativesJTree.creative : [creativesJTree.creative];
    creativesData.forEach(function (creative) {
      creatives.push(new Creative(creative));
    });
  }
  return creatives;
};

module.exports = Creative;

},{"../../utils/utilityFunctions":37,"./Companion":7,"./Linear":10}],9:[function(require,module,exports){
'use strict';

var vastUtil = require('./vastUtil');
var Creative = require('./Creative');

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function InLine(inlineJTree) {
  if (!(this instanceof InLine)) {
    return new InLine(inlineJTree);
  }

  //Required Fields
  this.adTitle = xml.keyValue(inlineJTree.adTitle);
  this.adSystem = xml.keyValue(inlineJTree.adSystem);
  this.impressions = vastUtil.parseImpressions(inlineJTree.impression);
  this.creatives = Creative.parseCreatives(inlineJTree.creatives);

  //Optional Fields
  this.description = xml.keyValue(inlineJTree.description);
  this.advertiser = xml.keyValue(inlineJTree.advertiser);
  this.surveys = parseSurveys(inlineJTree.survey);
  this.error = xml.keyValue(inlineJTree.error);
  this.pricing = xml.keyValue(inlineJTree.pricing);
  this.extensions = inlineJTree.extensions;

  /*** Local Functions ***/
  function parseSurveys(inlineSurveys) {
    if (inlineSurveys) {
      return utilities.transformArray(utilities.isArray(inlineSurveys) ? inlineSurveys : [inlineSurveys], function (survey) {
        if(utilities.isNotEmptyString(survey.keyValue)){
          return {
            uri: survey.keyValue,
            type: survey.attr('type')
          };
        }

        return undefined;
      });
    }
    return [];
  }
}


/**
 * Returns true if the browser supports all the creatives.
 */
InLine.prototype.isSupported = function(){
  var i,len;

  if(this.creatives.length === 0) {
    return false;
  }

  for(i = 0, len = this.creatives.length; i< len; i+=1){
    if(!this.creatives[i].isSupported()){
      return false;
    }
  }
  return true;
};

module.exports = InLine;

},{"../../utils/utilityFunctions":37,"../../utils/xml":38,"./Creative":8,"./vastUtil":21}],10:[function(require,module,exports){
'use strict';

var TrackingEvent = require('./TrackingEvent');
var MediaFile = require('./MediaFile');
var VideoClicks = require('./VideoClicks');

var utilities = require('../../utils/utilityFunctions');
var parsers = require('./parsers');

var xml = require('../../utils/xml');


function Linear(linearJTree) {
  if (!(this instanceof Linear)) {
    return new Linear(linearJTree);
  }

  //Required Elements
  this.duration = parsers.duration(xml.keyValue(linearJTree.duration));
  this.mediaFiles = parseMediaFiles(linearJTree.mediaFiles && linearJTree.mediaFiles.mediaFile);

  //Optional fields
  this.trackingEvents = parseTrackingEvents(linearJTree.trackingEvents && linearJTree.trackingEvents.tracking, this.duration);
  this.skipoffset = parsers.offset(xml.attr(linearJTree, 'skipoffset'), this.duration);

  if (linearJTree.videoClicks) {
    this.videoClicks = new VideoClicks(linearJTree.videoClicks);
  }

  if(linearJTree.adParameters) {
    this.adParameters = xml.keyValue(linearJTree.adParameters);

    if(xml.attr(linearJTree.adParameters, 'xmlEncoded')) {
      this.adParameters = xml.decode(this.adParameters);
    }
  }

  /*** Local functions ***/
  function parseTrackingEvents(trackingEvents, duration) {
    var trackings = [];
    if (utilities.isDefined(trackingEvents)) {
      trackingEvents = utilities.isArray(trackingEvents) ? trackingEvents : [trackingEvents];
      trackingEvents.forEach(function (trackingData) {
        trackings.push(new TrackingEvent(trackingData, duration));
      });
    }
    return trackings;
  }

  function parseMediaFiles(mediaFilesJxonTree) {
    var mediaFiles = [];
    if (utilities.isDefined(mediaFilesJxonTree)) {
      mediaFilesJxonTree = utilities.isArray(mediaFilesJxonTree) ? mediaFilesJxonTree : [mediaFilesJxonTree];

      mediaFilesJxonTree.forEach(function (mfData) {
        mediaFiles.push(new MediaFile(mfData));
      });
    }
    return mediaFiles;
  }
}

/**
 * Must return true if at least one of the MediaFiles' type is supported
 */
Linear.prototype.isSupported = function () {
  var i, len;
  for(i=0, len=this.mediaFiles.length; i<len; i+=1) {
    if(this.mediaFiles[i].isSupported()) {
      return true;
    }
  }

  return false;
};

module.exports = Linear;

},{"../../utils/utilityFunctions":37,"../../utils/xml":38,"./MediaFile":11,"./TrackingEvent":12,"./VideoClicks":18,"./parsers":20}],11:[function(require,module,exports){
'use strict';

var xml = require('../../utils/xml');
var vastUtil = require('./vastUtil');

var attributesList = [
  //Required attributes
  'delivery',
  'type',
  'width',
  'height',
  //Optional attributes
  'codec',
  'id',
  'bitrate',
  'minBitrate',
  'maxBitrate',
  'scalable',
  'maintainAspectRatio',
  'apiFramework'
];

function MediaFile(mediaFileJTree) {
  if (!(this instanceof MediaFile)) {
    return new MediaFile(mediaFileJTree);
  }

  //Required attributes
  this.src = xml.keyValue(mediaFileJTree);

  for(var x=0; x<attributesList.length; x++) {
    var attribute = attributesList[x];
    this[attribute] = mediaFileJTree.attr(attribute);
  }
}

MediaFile.prototype.isSupported = function(){
  if(vastUtil.isVPAID(this)) {
    return !!vastUtil.findSupportedVPAIDTech(this.type);
  }

  return true;
};

module.exports = MediaFile;

},{"../../utils/xml":38,"./vastUtil":21}],12:[function(require,module,exports){
'use strict';

var parsers = require('./parsers');

var xml = require('../../utils/xml');

function TrackingEvent(trackingJTree, duration) {
  if (!(this instanceof TrackingEvent)) {
    return new TrackingEvent(trackingJTree, duration);
  }

  this.name = trackingJTree.attr('event');
  this.uri = xml.keyValue(trackingJTree);

  if('progress' === this.name) {
    this.offset = parsers.offset(trackingJTree.attr('offset'), duration);
  }
}

module.exports = TrackingEvent;
},{"../../utils/xml":38,"./parsers":20}],13:[function(require,module,exports){
'use strict';

var Ad = require('./Ad');
var VASTError = require('./VASTError');
var VASTResponse = require('./VASTResponse');
var vastUtil = require('./vastUtil');

var async = require('../../utils/async');
var http = require('../../utils/http').http;
var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

var logger = require ('../../utils/consoleLogger');

function VASTClient(options) {
  if (!(this instanceof VASTClient)) {
    return new VASTClient(options);
  }
  var defaultOptions = {
    WRAPPER_LIMIT: 10
  };

  options = options || {};
  this.settings = utilities.extend({}, options, defaultOptions);
  this.errorURLMacros = [];
}

VASTClient.prototype.getVASTResponse = function getVASTResponse(adTagUrl, callback) {
  var that = this;

  var error = sanityCheck(adTagUrl, callback);
  if (error) {
    if (utilities.isFunction(callback)) {
      return callback(error);
    }
    throw error;
  }

  async.waterfall([
      this._getVASTAd.bind(this, adTagUrl),
      buildVASTResponse
    ],
    callback);

  /*** Local functions ***/
  function buildVASTResponse(adsChain, cb) {
    try {
      var response = that._buildVASTResponse(adsChain);
      cb(null, response);
    } catch (e) {
      cb(e);
    }
  }

  function sanityCheck(adTagUrl, cb) {
    if (!adTagUrl) {
      return new VASTError('on VASTClient.getVASTResponse, missing ad tag URL');
    }

    if (!utilities.isFunction(cb)) {
      return new VASTError('on VASTClient.getVASTResponse, missing callback function');
    }
  }
};

VASTClient.prototype._getVASTAd = function (adTagUrl, callback) {
  var that = this;

  getAdWaterfall(adTagUrl, function (error, vastTree) {
    var waterfallAds = vastTree && utilities.isArray(vastTree.ads) ? vastTree.ads : null;
    if (error) {
      that._trackError(error, waterfallAds);
      return callback(error, waterfallAds);
    }

    getAd(waterfallAds.shift(), [], waterfallHandler);

    /*** Local functions ***/
    function waterfallHandler(error, adChain) {
      if (error) {
        that._trackError(error, adChain);
        if (waterfallAds.length > 0) {
          getAd(waterfallAds.shift(),[], waterfallHandler);
        } else {
          callback(error, adChain);
        }
      } else {
        callback(null, adChain);
      }
    }
  });

  /*** Local functions ***/
  function getAdWaterfall(adTagUrl, callback) {
    var requestVastXML = that._requestVASTXml.bind(that, adTagUrl);
    async.waterfall([
      requestVastXML,
      buildVastWaterfall
    ], callback);
  }

  function buildVastWaterfall(xmlStr, callback) {
    var vastTree;
    try {
      vastTree = xml.toJXONTree(xmlStr);
      logger.debug("built JXONTree from VAST response:", vastTree);

      if(utilities.isArray(vastTree.ad)) {
        vastTree.ads = vastTree.ad;
      } else if(vastTree.ad){
        vastTree.ads = [vastTree.ad];
      } else {
        vastTree.ads = [];
      }
      callback(validateVASTTree(vastTree), vastTree);

    } catch (e) {
      callback(new VASTError("on VASTClient.getVASTAd.buildVastWaterfall, error parsing xml", 100), null);
    }
  }

  function validateVASTTree(vastTree) {
    var vastVersion = xml.attr(vastTree, 'version');

    if (!vastTree.ad) {
      return new VASTError('on VASTClient.getVASTAd.validateVASTTree, no Ad in VAST tree', 303);
    }

    if (vastVersion && (vastVersion != 3 && vastVersion != 2)) {
      return new VASTError('on VASTClient.getVASTAd.validateVASTTree, not supported VAST version "' + vastVersion + '"', 102);
    }

    return null;
  }

  function getAd(adTagUrl, adChain, callback) {
    if (adChain.length >= that.WRAPPER_LIMIT) {
      return callback(new VASTError("on VASTClient.getVASTAd.getAd, players wrapper limit reached (the limit is " + that.WRAPPER_LIMIT + ")", 302), adChain);
    }

    async.waterfall([
      function (next) {
        if (utilities.isString(adTagUrl)) {
          requestVASTAd(adTagUrl, next);
        } else {
          next(null, adTagUrl);
        }
      },
      buildAd
    ], function (error, ad) {
      if (ad) {
        adChain.push(ad);
      }

      if (error) {
        return callback(error, adChain);
      }

      if (ad.wrapper) {
        return getAd(ad.wrapper.VASTAdTagURI, adChain, callback);
      }

      return callback(null, adChain);
    });
  }

  function buildAd(adJxonTree, callback) {
    try {
      var ad = new Ad(adJxonTree);
      callback(validateAd(ad), ad);
    } catch (e) {
      callback(new VASTError('on VASTClient.getVASTAd.buildAd, error parsing xml', 100), null);
    }
  }

  function validateAd(ad) {
    var wrapper = ad.wrapper;
    var inLine = ad.inLine;
    var errMsgPrefix = 'on VASTClient.getVASTAd.validateAd, ';

    if (inLine && wrapper) {
      return new VASTError(errMsgPrefix +"InLine and Wrapper both found on the same Ad", 101);
    }

    if (!inLine && !wrapper) {
      return new VASTError(errMsgPrefix + "nor wrapper nor inline elements found on the Ad", 101);
    }

    if (inLine && !inLine.isSupported()) {
      return new VASTError(errMsgPrefix + "could not find MediaFile that is supported by this video player", 403);
    }

    if (wrapper && !wrapper.VASTAdTagURI) {
      return new VASTError(errMsgPrefix + "missing 'VASTAdTagURI' in wrapper", 101);
    }

    return null;
  }

  function requestVASTAd(adTagUrl, callback) {
    that._requestVASTXml(adTagUrl, function (error, xmlStr) {
      if (error) {
        return callback(error);
      }
      try {
        var vastTree = xml.toJXONTree(xmlStr);
        callback(validateVASTTree(vastTree), vastTree.ad);
      } catch (e) {
        callback(new VASTError("on VASTClient.getVASTAd.requestVASTAd, error parsing xml", 100));
      }
    });
  }
};

VASTClient.prototype._requestVASTXml = function requestVASTXml(adTagUrl, callback) {
  try {
    if (utilities.isFunction(adTagUrl)) {
      adTagUrl(requestHandler);
    } else {
      logger.info ("requesting adTagUrl: " + adTagUrl);
      http.get(adTagUrl, requestHandler, {
        withCredentials: true
      });
    }
  } catch (e) {
    callback(e);
  }

  /*** Local functions ***/
  function requestHandler(error, response, status) {
    if (error) {
      var errMsg = utilities.isDefined(status) ?
      "on VASTClient.requestVastXML, HTTP request error with status '" + status + "'" :
        "on VASTClient.requestVastXML, Error getting the the VAST XML with he passed adTagXML fn";
      return callback(new VASTError(errMsg, 301), null);
    }

    callback(null, response);
  }
};

VASTClient.prototype._buildVASTResponse = function buildVASTResponse(adsChain) {
  var response = new VASTResponse();
  addAdsToResponse(response, adsChain);
  validateResponse(response);

  return response;

  //*** Local function ****
  function addAdsToResponse(response, ads) {
    ads.forEach(function (ad) {
      response.addAd(ad);
    });
  }

  function validateResponse(response) {
    var progressEvents = response.trackingEvents.progress;

    if (!response.hasLinear()) {
      throw new VASTError("on VASTClient._buildVASTResponse, Received an Ad type that is not supported", 200);
    }

    if (response.duration === undefined) {
      throw new VASTError("on VASTClient._buildVASTResponse, Missing duration field in VAST response", 101);
    }

    if (progressEvents) {
      progressEvents.forEach(function (progressEvent) {
        if (!utilities.isNumber(progressEvent.offset)) {
          throw new VASTError("on VASTClient._buildVASTResponse, missing or wrong offset attribute on progress tracking event", 101);
        }
      });
    }
  }
};

VASTClient.prototype._trackError = function (error, adChain) {
  if (!utilities.isArray(adChain) || adChain.length === 0) { //There is nothing to track
    return;
  }

  var errorURLMacros = [];
  adChain.forEach(addErrorUrlMacros);
  vastUtil.track(errorURLMacros, {ERRORCODE: error.code || 900});  //900 <== Undefined error

  /*** Local functions  ***/
  function addErrorUrlMacros(ad) {
    if (ad.wrapper && ad.wrapper.error) {
      errorURLMacros.push(ad.wrapper.error);
    }

    if (ad.inLine && ad.inLine.error) {
      errorURLMacros.push(ad.inLine.error);
    }
  }
};

module.exports = VASTClient;

},{"../../utils/async":30,"../../utils/consoleLogger":31,"../../utils/http":33,"../../utils/utilityFunctions":37,"../../utils/xml":38,"./Ad":6,"./VASTError":14,"./VASTResponse":16,"./vastUtil":21}],14:[function(require,module,exports){
'use strict';

function VASTError(message, code) {
  this.message = 'VAST Error: ' + (message || '');
  if (code) {
    this.code = code;
  }
}

VASTError.prototype = new Error();
VASTError.prototype.name = "VAST Error";

module.exports = VASTError;
},{}],15:[function(require,module,exports){
'use strict';

/**
 * Inner helper class that deals with the logic of the individual steps needed to setup an ad in the player.
 *
 * @param player {object} instance of the player that will play the ad. It assumes that the videojs-contrib-ads plugin
 *                        has been initialized when you use its utility functions.
 *
 * @constructor
 */

var VASTResponse = require('./VASTResponse');
var VASTError = require('./VASTError');
var VASTTracker = require('./VASTTracker');
var vastUtil = require('./vastUtil');

var async = require('../../utils/async');
var dom = require('../../utils/dom');
var playerUtils = require('../../utils/playerUtils');
var utilities = require('../../utils/utilityFunctions');

var logger = require ('../../utils/consoleLogger');

function VASTIntegrator(player) {
  if (!(this instanceof VASTIntegrator)) {
    return new VASTIntegrator(player);
  }

  this.player = player;
}

VASTIntegrator.prototype.playAd = function playAd(vastResponse, callback) {
  var that = this;
  callback = callback || utilities.noop;

  if (!(vastResponse instanceof VASTResponse)) {
    return callback(new VASTError('On VASTIntegrator, missing required VASTResponse'));
  }

  async.waterfall([
    function (next) {
      next(null, vastResponse);
    },
    this._selectAdSource.bind(this),
    this._createVASTTracker.bind(this),
    this._addClickThrough.bind(this),
    this._addSkipButton.bind(this),
    this._setupEvents.bind(this),
    this._playSelectedAd.bind(this)
  ], function (error, response) {
    if (error && response) {
      that._trackError(error, response);
    }
    callback(error, response);
  });

  this._adUnit = {
    _src: null,
    type: 'VAST',
    pauseAd: function () {
      that.player.pause(true);
    },

    resumeAd: function () {
      that.player.play(true);
    },

    isPaused: function () {
      return that.player.paused(true);
    },

    getSrc: function () {
      return this._src;
    }
  };

  return this._adUnit;
};

VASTIntegrator.prototype._selectAdSource = function selectAdSource(response, callback) {
  var source;

  var playerWidth = dom.getDimension(this.player.el()).width;
  response.mediaFiles.sort(function compareTo(a, b) {
    var deltaA = Math.abs(playerWidth - a.width);
    var deltaB = Math.abs(playerWidth - b.width);
    return deltaA - deltaB;
  });

  source = this.player.selectSource(response.mediaFiles).source;

  if (source) {
    logger.info ("selected source: ", source);
    if (this._adUnit) {
      this._adUnit._src = source;
    }
    return callback(null, source, response);
  }

  // code 403 <== Couldn't find MediaFile that is supported by this video player
  callback(new VASTError("Could not find Ad mediafile supported by this player", 403), response);
};

VASTIntegrator.prototype._createVASTTracker = function createVASTTracker(adMediaFile, response, callback) {
  try {
    callback(null, adMediaFile, new VASTTracker(adMediaFile.src, response), response);
  } catch (e) {
    callback(e, response);
  }
};

VASTIntegrator.prototype._setupEvents = function setupEvents(adMediaFile, tracker, response, callback) {
  var previouslyMuted;
  var player = this.player;
  player.on('fullscreenchange', trackFullscreenChange);
  player.on('vast.adStart', trackImpressions);
  player.on('pause', trackPause);
  player.on('timeupdate', trackProgress);
  player.on('volumechange', trackVolumeChange);

  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], unbindEvents);
  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel', 'vast.adSkip'], function(evt){
    if(evt.type === 'vast.adEnd'){
      tracker.trackComplete();
    }
  });

  return callback(null, adMediaFile, response);

  /*** Local Functions ***/
  function unbindEvents() {
    player.off('fullscreenchange', trackFullscreenChange);
    player.off('vast.adStart', trackImpressions);
    player.off('pause', trackPause);
    player.off('timeupdate', trackProgress);
    player.off('volumechange', trackVolumeChange);
  }

  function trackFullscreenChange() {
    if (player.isFullscreen()) {
      tracker.trackFullscreen();
    } else {
      tracker.trackExitFullscreen();
    }
  }

  function trackPause() {
    //NOTE: whenever a video ends the video Element triggers a 'pause' event before the 'ended' event.
    //      We should not track this pause event because it makes the VAST tracking confusing again we use a
    //      Threshold of 2 seconds to prevent false positives on IOS.
    if (Math.abs(player.duration() - player.currentTime()) < 2) {
      return;
    }

    tracker.trackPause();
    playerUtils.once(player, ['play', 'vast.adEnd', 'vast.adsCancel'], function (evt) {
      if(evt.type === 'play'){
        tracker.trackResume();
      }
    });
  }

  function trackProgress() {
    var currentTimeInMs = player.currentTime() * 1000;
    tracker.trackProgress(currentTimeInMs);
  }

  function trackImpressions() {
    tracker.trackImpressions();
    tracker.trackCreativeView();
  }

  function trackVolumeChange() {
    var muted = player.muted();
    if (muted) {
      tracker.trackMute();
    } else if (previouslyMuted) {
      tracker.trackUnmute();
    }
    previouslyMuted = muted;
  }
};

VASTIntegrator.prototype._addSkipButton = function addSkipButton(source, tracker, response, callback) {
  var skipOffsetInSec;
  var that = this;

  if (utilities.isNumber(response.skipoffset)) {
    skipOffsetInSec = response.skipoffset / 1000;
    addSkipButtonToPlayer(this.player, skipOffsetInSec);
  }
  callback(null, source, tracker, response);

  /*** Local function ***/
  function addSkipButtonToPlayer(player, skipOffset) {
    var skipButton = createSkipButton(player);
    var updateSkipButton = updateSkipButtonState.bind(that, skipButton, skipOffset, player);

    player.el().appendChild(skipButton);
    player.on('timeupdate', updateSkipButton);

    playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeSkipButton);

    function removeSkipButton() {
      player.off('timeupdate', updateSkipButton);
      dom.remove(skipButton);
    }
  }

  function createSkipButton(player) {
    var skipButton = window.document.createElement("div");
    dom.addClass(skipButton, "vast-skip-button");

    skipButton.onclick = function (e) {
      if (dom.hasClass(skipButton, 'enabled')) {
        tracker.trackSkip();
        player.trigger('vast.adSkip');
      }

      //We prevent event propagation to avoid problems with the clickThrough and so on
      if (window.Event.prototype.stopPropagation !== undefined) {
        e.stopPropagation();
      } else {
        return false;
      }
    };

    return skipButton;
  }

  function updateSkipButtonState(skipButton, skipOffset, player) {
    var timeLeft = Math.ceil(skipOffset - player.currentTime());
    if (timeLeft > 0) {
      skipButton.innerHTML = "Skip in " + utilities.toFixedDigits(timeLeft, 2) + "...";
    } else {
      if (!dom.hasClass(skipButton, 'enabled')) {
        dom.addClass(skipButton, 'enabled');
        skipButton.innerHTML = "Skip ad";
      }
    }
  }
};

VASTIntegrator.prototype._addClickThrough = function addClickThrough(mediaFile, tracker, response, callback) {
  var player = this.player;
  var blocker = createClickThroughBlocker(player, tracker, response);
  var updateBlocker = updateBlockerURL.bind(this, blocker, response, player);

  player.el().insertBefore(blocker, player.controlBar.el());
  player.on('timeupdate', updateBlocker);
  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeBlocker);

  return callback(null, mediaFile, tracker, response);

  /*** Local Functions ***/

  function createClickThroughBlocker(player, tracker, response) {
    var blocker = window.document.createElement("a");
    var clickThroughMacro = response.clickThrough;

    dom.addClass(blocker, 'vast-blocker');
    blocker.href = generateClickThroughURL(clickThroughMacro, player);

    if (utilities.isString(clickThroughMacro)) {
      blocker.target = "_blank";
    }

    blocker.onclick = function (e) {
      if (player.paused()) {
        player.play();

        //We prevent event propagation to avoid problems with the player's normal pause mechanism
        if (window.Event.prototype.stopPropagation !== undefined) {
          e.stopPropagation();
        }
        return false;
      }

      player.pause();
      tracker.trackClick();
    };

    return blocker;
  }

  function updateBlockerURL(blocker, response, player) {
    blocker.href = generateClickThroughURL(response.clickThrough, player);
  }

  function generateClickThroughURL(clickThroughMacro, player) {
    var variables = {
      ASSETURI: mediaFile.src,
      CONTENTPLAYHEAD: vastUtil.formatProgress(player.currentTime() * 1000)
    };

    return clickThroughMacro ? vastUtil.parseURLMacro(clickThroughMacro, variables) : '#';
  }

  function removeBlocker() {
    player.off('timeupdate', updateBlocker);
    dom.remove(blocker);
  }
};

VASTIntegrator.prototype._playSelectedAd = function playSelectedAd(source, response, callback) {
  var player = this.player;

  player.preload("auto"); //without preload=auto the durationchange event is never fired
  player.src(source);

  logger.debug ("<VASTIntegrator._playSelectedAd> waiting for durationchange to play the ad...");

  playerUtils.once(player, ['durationchange', 'error', 'vast.adsCancel'], function (evt) {
    if (evt.type === 'durationchange') {
      logger.debug ("<VASTIntegrator._playSelectedAd> got durationchange; calling playAd()");
      playAd();
    } else if(evt.type === 'error') {
      callback(new VASTError("on VASTIntegrator, Player is unable to play the Ad", 400), response);
    }
    //NOTE: If the ads get canceled we do nothing/
  });

  /**** local functions ******/
  function playAd() {

    playerUtils.once(player, ['playing', 'vast.adsCancel'], function (evt) {
      if(evt.type === 'vast.adsCancel'){
        return;
      }

      logger.debug ("<VASTIntegrator._playSelectedAd/playAd> got playing event; triggering vast.adStart...");

      player.trigger('vast.adStart');

      player.on('ended', proceed);
      player.on('vast.adsCancel', proceed);
      player.on('vast.adSkip', proceed);

      function proceed(evt) {

        if(evt.type === 'ended' && (player.duration() - player.currentTime()) > 3 ) {
          // Ignore ended event if the Ad time was not 'near' the end
          // avoids issues where IOS controls could skip the Ad
          return;
        }

        player.off('ended', proceed);
        player.off('vast.adsCancel', proceed);
        player.off('vast.adSkip', proceed);

        //NOTE: if the ads get cancel we do nothing apart removing the listners
        if(evt.type === 'ended' || evt.type === 'vast.adSkip'){
          callback(null, response);
        }
      }
    });

    logger.debug ("<VASTIntegrator._playSelectedAd/playAd> calling player.play()...");

    player.play();
  }
};

VASTIntegrator.prototype._trackError = function trackError(error, response) {
  vastUtil.track(response.errorURLMacros, {ERRORCODE: error.code || 900});
};

module.exports = VASTIntegrator;
},{"../../utils/async":30,"../../utils/consoleLogger":31,"../../utils/dom":32,"../../utils/playerUtils":35,"../../utils/utilityFunctions":37,"./VASTError":14,"./VASTResponse":16,"./VASTTracker":17,"./vastUtil":21}],16:[function(require,module,exports){
'use strict';

var Ad = require('./Ad');
var VideoClicks = require('./VideoClicks');
var Linear = require('./Linear');
var InLine = require('./InLine');
var Wrapper = require('./Wrapper');

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

window.InLine__A = InLine;
function VASTResponse() {
  if (!(this instanceof VASTResponse)) {
    return new VASTResponse();
  }

  this._linearAdded = false;
  this.ads = [];
  this.errorURLMacros = [];
  this.impressions = [];
  this.clickTrackings = [];
  this.customClicks = [];
  this.trackingEvents = {};
  this.mediaFiles = [];
  this.clickThrough = undefined;
  this.adTitle = '';
  this.duration = undefined;
  this.skipoffset = undefined;
}

VASTResponse.prototype.addAd = function (ad) {
  var inLine, wrapper;
  if (ad instanceof Ad) {
    inLine = ad.inLine;
    wrapper = ad.wrapper;

    this.ads.push(ad);

    if (inLine) {
      this._addInLine(inLine);
    }

    if (wrapper) {
      this._addWrapper(wrapper);
    }
  }
};

VASTResponse.prototype._addErrorTrackUrl = function (error) {
  var errorURL = error instanceof xml.JXONTree ? xml.keyValue(error) : error;
  if (errorURL) {
    this.errorURLMacros.push(errorURL);
  }
};

VASTResponse.prototype._addImpressions = function (impressions) {
  utilities.isArray(impressions) && appendToArray(this.impressions, impressions);
};

VASTResponse.prototype._addClickThrough = function (clickThrough) {
  if (utilities.isNotEmptyString(clickThrough)) {
    this.clickThrough = clickThrough;
  }
};

VASTResponse.prototype._addClickTrackings = function (clickTrackings) {
  utilities.isArray(clickTrackings) && appendToArray(this.clickTrackings, clickTrackings);
};

VASTResponse.prototype._addCustomClicks = function (customClicks) {
  utilities.isArray(customClicks) && appendToArray(this.customClicks, customClicks);
};

VASTResponse.prototype._addTrackingEvents = function (trackingEvents) {
  var eventsMap = this.trackingEvents;

  if (trackingEvents) {
    trackingEvents = utilities.isArray(trackingEvents) ? trackingEvents : [trackingEvents];
    trackingEvents.forEach(function (trackingEvent) {
      if (!eventsMap[trackingEvent.name]) {
        eventsMap[trackingEvent.name] = [];
      }
      eventsMap[trackingEvent.name].push(trackingEvent);
    });
  }
};

VASTResponse.prototype._addTitle = function (title) {
  if (utilities.isNotEmptyString(title)) {
    this.adTitle = title;
  }
};

VASTResponse.prototype._addDuration = function (duration) {
  if (utilities.isNumber(duration)) {
    this.duration = duration;
  }
};

VASTResponse.prototype._addVideoClicks = function (videoClicks) {
  if (videoClicks instanceof VideoClicks) {
    this._addClickThrough(videoClicks.clickThrough);
    this._addClickTrackings(videoClicks.clickTrackings);
    this._addCustomClicks(videoClicks.customClicks);
  }
};

VASTResponse.prototype._addMediaFiles = function (mediaFiles) {
  utilities.isArray(mediaFiles) && appendToArray(this.mediaFiles, mediaFiles);
};

VASTResponse.prototype._addSkipoffset = function (offset) {
  if (offset) {
    this.skipoffset = offset;
  }
};

VASTResponse.prototype._addAdParameters = function (adParameters) {
  if (adParameters) {
    this.adParameters = adParameters;
  }
};

VASTResponse.prototype._addLinear = function (linear) {
  if (linear instanceof Linear) {
    this._addDuration(linear.duration);
    this._addTrackingEvents(linear.trackingEvents);
    this._addVideoClicks(linear.videoClicks);
    this._addMediaFiles(linear.mediaFiles);
    this._addSkipoffset(linear.skipoffset);
    this._addAdParameters(linear.adParameters);
    this._linearAdded = true;
  }
};

VASTResponse.prototype._addInLine = function (inLine) {
  var that = this;

  if (inLine instanceof InLine) {
    this._addTitle(inLine.adTitle);
    this._addErrorTrackUrl(inLine.error);
    this._addImpressions(inLine.impressions);

    inLine.creatives.forEach(function (creative) {
      if (creative.linear) {
        that._addLinear(creative.linear);
      }
    });
  }
};

VASTResponse.prototype._addWrapper = function (wrapper) {
  var that = this;

  if (wrapper instanceof Wrapper) {
    this._addErrorTrackUrl(wrapper.error);
    this._addImpressions(wrapper.impressions);

    wrapper.creatives.forEach(function (creative) {
      var linear = creative.linear;
      if (linear) {
        that._addVideoClicks(linear.videoClicks);
        that.clickThrough = undefined;//We ensure that no clickThrough has been added
        that._addTrackingEvents(linear.trackingEvents);
      }
    });
  }
};

VASTResponse.prototype.hasLinear = function(){
  return this._linearAdded;
};

function appendToArray(array, items) {
  items.forEach(function (item) {
    array.push(item);
  });
}

module.exports = VASTResponse;


},{"../../utils/utilityFunctions":37,"../../utils/xml":38,"./Ad":6,"./InLine":9,"./Linear":10,"./VideoClicks":18,"./Wrapper":19}],17:[function(require,module,exports){
'use strict';

var VASTError = require('./VASTError');
var VASTResponse = require('./VASTResponse');
var vastUtil = require('./vastUtil');
var utilities = require('../../utils/utilityFunctions');

function VASTTracker(assetURI, vastResponse) {
  if (!(this instanceof VASTTracker)) {
    return new VASTTracker(assetURI, vastResponse);
  }

  this.sanityCheck(assetURI, vastResponse);
  this.initialize(assetURI, vastResponse);

}

VASTTracker.prototype.initialize = function(assetURI, vastResponse) {
  this.response = vastResponse;
  this.assetURI = assetURI;
  this.progress = 0;
  this.quartiles = {
    firstQuartile: {tracked: false, time: Math.round(25 * vastResponse.duration) / 100},
    midpoint: {tracked: false, time: Math.round(50 * vastResponse.duration) / 100},
    thirdQuartile: {tracked: false, time: Math.round(75 * vastResponse.duration) / 100}
  };
};

VASTTracker.prototype.sanityCheck = function(assetURI, vastResponse) {
  if (!utilities.isString(assetURI) || utilities.isEmptyString(assetURI)) {
    throw new VASTError('on VASTTracker constructor, missing required the URI of the ad asset being played');
  }

  if (!(vastResponse instanceof VASTResponse)) {
    throw new VASTError('on VASTTracker constructor, missing required VAST response');
  }
};

VASTTracker.prototype.trackURLs = function trackURLs(urls, variables) {
  if (utilities.isArray(urls) && urls.length > 0) {
    variables = utilities.extend({
      ASSETURI: this.assetURI,
      CONTENTPLAYHEAD: vastUtil.formatProgress(this.progress)
    }, variables || {});

    vastUtil.track(urls, variables);
  }
};

VASTTracker.prototype.trackEvent = function trackEvent(eventName, trackOnce) {
  this.trackURLs(getEventUris(this.response.trackingEvents[eventName]));
  if (trackOnce) {
    this.response.trackingEvents[eventName] = undefined;
  }

  /*** Local function ***/
  function getEventUris(trackingEvents) {
    var uris;

    if (trackingEvents) {
      uris = [];
      trackingEvents.forEach(function (event) {
          if (!event.uri) {
              return;
          }

          uris.push(event.uri);
      });
    }
    return uris;
  }
};

VASTTracker.prototype.trackProgress = function trackProgress(newProgressInMs) {
  var that = this;
  var events = [];
  var ONCE = true;
  var ALWAYS = false;
  var trackingEvents = this.response.trackingEvents;

  if (utilities.isNumber(newProgressInMs)) {
    addTrackEvent('start', ONCE, newProgressInMs > 0);
    addTrackEvent('rewind', ALWAYS, hasRewound(this.progress, newProgressInMs));
    addQuartileEvents(newProgressInMs);
    trackProgressEvents(newProgressInMs);
    trackEvents();
    this.progress = newProgressInMs;
  }

  /*** Local function ***/
  function hasRewound(currentProgress, newProgress) {
    var REWIND_THRESHOLD = 3000; //IOS video clock is very unreliable and we need a 3 seconds threshold to ensure that there was a rewind an that it was on purpose.
    return currentProgress > newProgressInMs && Math.abs(newProgress - currentProgress) > REWIND_THRESHOLD;
  }

  function addTrackEvent(eventName, trackOnce, canBeAdded) {
    if (trackingEvents[eventName] && canBeAdded) {
      events.push({
        name: eventName,
        trackOnce: !!trackOnce
      });
    }
  }

  function addQuartileEvents(progress) {
    var quartiles = that.quartiles;
    var firstQuartile = that.quartiles.firstQuartile;
    var midpoint = that.quartiles.midpoint;
    var thirdQuartile = that.quartiles.thirdQuartile;

    if (!firstQuartile.tracked) {
      trackQuartile('firstQuartile', progress);
    } else if (!midpoint.tracked) {
      trackQuartile('midpoint', progress);
    } else if (!thirdQuartile.tracked){
      trackQuartile('thirdQuartile', progress);
    }

    /*** Local function ***/
    function trackQuartile(quartileName, progress){
      var quartile = quartiles[quartileName];
      if(canBeTracked(quartile, progress)){
        quartile.tracked = true;
        addTrackEvent(quartileName, ONCE, true);
      }
    }
  }

  function canBeTracked(quartile, progress) {
    var quartileTime = quartile.time;
    //We only fire the quartile event if the progress is bigger than the quartile time by 5 seconds at most.
    return progress >= quartileTime && progress <= (quartileTime + 5000);
  }

  function trackProgressEvents(progress) {
    if (!utilities.isArray(trackingEvents.progress)) {
      return; //Nothing to track
    }

    var pendingProgressEvts = [];

    trackingEvents.progress.forEach(function (evt) {
      if (evt.offset <= progress) {
        that.trackURLs([evt.uri]);
      } else {
        pendingProgressEvts.push(evt);
      }
    });
    trackingEvents.progress = pendingProgressEvts;
  }

  function trackEvents() {
    events.forEach(function (event) {
      that.trackEvent(event.name, event.trackOnce);
    });
  }
};

[
  'rewind',
  'fullscreen',
  'exitFullscreen',
  'pause',
  'resume',
  'mute',
  'unmute',
  'acceptInvitation',
  'acceptInvitationLinear',
  'collapse',
  'expand'
].forEach(function (eventName) {
    VASTTracker.prototype['track' + utilities.capitalize(eventName)] = function () {
      this.trackEvent(eventName);
    };
  });

[
  'start',
  'skip',
  'close',
  'closeLinear'
].forEach(function (eventName) {
    VASTTracker.prototype['track' + utilities.capitalize(eventName)] = function () {
      this.trackEvent(eventName, true);
    };
  });

[
  'firstQuartile',
  'midpoint',
  'thirdQuartile'
].forEach(function (quartile) {
    VASTTracker.prototype['track' + utilities.capitalize(quartile)] = function () {
      this.quartiles[quartile].tracked = true;
      this.trackEvent(quartile, true);
    };
  });

VASTTracker.prototype.trackComplete = function () {
  if(this.quartiles.thirdQuartile.tracked){
    this.trackEvent('complete', true);
  }
};

VASTTracker.prototype.trackErrorWithCode = function trackErrorWithCode(errorcode) {
  if (utilities.isNumber(errorcode)) {
    this.trackURLs(this.response.errorURLMacros, {ERRORCODE: errorcode});
  }
};

VASTTracker.prototype.trackImpressions = function trackImpressions() {
  this.trackURLs(this.response.impressions);
};

VASTTracker.prototype.trackCreativeView = function trackCreativeView() {
  this.trackEvent('creativeView');
};

VASTTracker.prototype.trackClick = function trackClick() {
  this.trackURLs(this.response.clickTrackings);
};

module.exports = VASTTracker;

},{"../../utils/utilityFunctions":37,"./VASTError":14,"./VASTResponse":16,"./vastUtil":21}],18:[function(require,module,exports){
'use strict';

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function VideoClicks(videoClickJTree) {
  if (!(this instanceof VideoClicks)) {
    return new VideoClicks(videoClickJTree);
  }

  this.clickThrough = xml.keyValue(videoClickJTree.clickThrough);
  this.clickTrackings = parseClickTrackings(videoClickJTree.clickTracking);
  this.customClicks = parseClickTrackings(videoClickJTree.customClick);

  /*** Local functions ***/
  function parseClickTrackings(trackingData) {
    var clickTrackings = [];
    if (trackingData) {
      trackingData = utilities.isArray(trackingData) ? trackingData : [trackingData];
      trackingData.forEach(function (clickTrackingData) {
        clickTrackings.push(xml.keyValue(clickTrackingData));
      });
    }
    return clickTrackings;
  }
}

module.exports = VideoClicks;
},{"../../utils/utilityFunctions":37,"../../utils/xml":38}],19:[function(require,module,exports){
'use strict';

var vastUtil = require('./vastUtil');
var Creative = require('./Creative');

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function Wrapper(wrapperJTree) {
  if(!(this instanceof Wrapper)) {
    return new Wrapper(wrapperJTree);
  }

  //Required elements
  this.adSystem = xml.keyValue(wrapperJTree.adSystem);
  this.impressions = vastUtil.parseImpressions(wrapperJTree.impression);
  this.VASTAdTagURI = xml.keyValue(wrapperJTree.vASTAdTagURI);

  //Optional elements
  this.creatives = Creative.parseCreatives(wrapperJTree.creatives);
  this.error = xml.keyValue(wrapperJTree.error);
  this.extensions = wrapperJTree.extensions;

  //Optional attrs
  this.followAdditionalWrappers = utilities.isDefined(xml.attr(wrapperJTree, 'followAdditionalWrappers'))? xml.attr(wrapperJTree, 'followAdditionalWrappers'): true;
  this.allowMultipleAds = xml.attr(wrapperJTree, 'allowMultipleAds');
  this.fallbackOnNoAd = xml.attr(wrapperJTree, 'fallbackOnNoAd');
}

module.exports = Wrapper;

},{"../../utils/utilityFunctions":37,"../../utils/xml":38,"./Creative":8,"./vastUtil":21}],20:[function(require,module,exports){
'use strict';

var utilities = require('../../utils/utilityFunctions');

var durationRegex = /(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/;

var parsers = {

  duration: function parseDuration(durationStr) {

    var match, durationInMs;

    if (utilities.isString(durationStr)) {
      match = durationStr.match(durationRegex);
      if (match) {
        durationInMs = parseHoursToMs(match[1]) + parseMinToMs(match[2]) + parseSecToMs(match[3]) + parseInt(match[5] || 0);
      }
    }

    return isNaN(durationInMs) ? null : durationInMs;

    /*** local functions ***/
    function parseHoursToMs(hourStr) {
      return parseInt(hourStr, 10) * 60 * 60 * 1000;
    }

    function parseMinToMs(minStr) {
      return parseInt(minStr, 10) * 60 * 1000;
    }

    function parseSecToMs(secStr) {
      return parseInt(secStr, 10) * 1000;
    }
  },

  offset: function parseOffset(offset, duration) {
    if(isPercentage(offset)){
      return calculatePercentage(offset, duration);
    }
    return parsers.duration(offset);

    /*** Local function ***/
    function isPercentage(offset) {
      var percentageRegex = /^\d+(\.\d+)?%$/g;
      return percentageRegex.test(offset);
    }

    function calculatePercentage(percentStr, duration) {
      if(duration) {
        return calcPercent(duration, parseFloat(percentStr.replace('%', '')));
      }
      return null;
    }

    function calcPercent(quantity, percent){
      return quantity * percent / 100;
    }
  }

};


module.exports = parsers;
},{"../../utils/utilityFunctions":37}],21:[function(require,module,exports){
'use strict';

var utilities = require('../../utils/utilityFunctions');
var VPAIDHTML5Tech = require('../vpaid/VPAIDHTML5Tech');

var vastUtil = {

  track: function track(URLMacros, variables) {
    var sources = vastUtil.parseURLMacros(URLMacros, variables);
    var trackImgs = [];
    sources.forEach(function (src) {
      var img = new Image();
      img.src = src;
      trackImgs.push(img);
    });
    return trackImgs;
  },

  parseURLMacros: function parseMacros(URLMacros, variables) {
    var parsedURLs = [];

    variables = variables || {};

    if (!(variables["CACHEBUSTING"])) {
      variables["CACHEBUSTING"] = Math.round(Math.random() * 1.0e+10);
    }

    URLMacros.forEach(function (URLMacro) {
      parsedURLs.push(vastUtil._parseURLMacro(URLMacro, variables));
    });

    return parsedURLs;
  },

  parseURLMacro: function parseMacro(URLMacro, variables) {
    variables = variables || {};

    if (!(variables["CACHEBUSTING"])) {
      variables["CACHEBUSTING"] = Math.round(Math.random() * 1.0e+10);
    }

    return vastUtil._parseURLMacro(URLMacro, variables);
  },

  _parseURLMacro: function parseMacro(URLMacro, variables) {
    variables = variables || {};

    utilities.forEach(variables, function (value, key) {
      URLMacro = URLMacro.replace(new RegExp("\\[" + key + "\\\]", 'gm'), value);
    });

    return URLMacro;
  },

  parseDuration: function parseDuration(durationStr) {
    var durationRegex = /(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/;
    var match, durationInMs;

    if (utilities.isString(durationStr)) {
      match = durationStr.match(durationRegex);
      if (match) {
        durationInMs = parseHoursToMs(match[1]) + parseMinToMs(match[2]) + parseSecToMs(match[3]) + parseInt(match[5] || 0);
      }
    }

    return isNaN(durationInMs) ? null : durationInMs;

    /*** local functions ***/
    function parseHoursToMs(hourStr) {
      return parseInt(hourStr, 10) * 60 * 60 * 1000;
    }

    function parseMinToMs(minStr) {
      return parseInt(minStr, 10) * 60 * 1000;
    }

    function parseSecToMs(secStr) {
      return parseInt(secStr, 10) * 1000;
    }
  },

  parseImpressions: function parseImpressions(impressions) {
    if (impressions) {
      impressions = utilities.isArray(impressions) ? impressions : [impressions];
      return utilities.transformArray(impressions, function (impression) {
        if (utilities.isNotEmptyString(impression.keyValue)) {
          return impression.keyValue;
        }
        return undefined;
      });
    }
    return [];
  },


  //We assume that the progress is going to arrive in milliseconds
  formatProgress: function formatProgress(progress) {
    var hours, minutes, seconds, milliseconds;
    hours = progress / (60 * 60 * 1000);
    hours = Math.floor(hours);
    minutes = (progress / (60 * 1000)) % 60;
    minutes = Math.floor(minutes);
    seconds = (progress / 1000) % 60;
    seconds = Math.floor(seconds);
    milliseconds = progress % 1000;
    return utilities.toFixedDigits(hours, 2) + ':' + utilities.toFixedDigits(minutes, 2) + ':' + utilities.toFixedDigits(seconds, 2) + '.' + utilities.toFixedDigits(milliseconds, 3);
  },

  parseOffset: function parseOffset(offset, duration) {
    if (isPercentage(offset)) {
      return calculatePercentage(offset, duration);
    }
    return vastUtil.parseDuration(offset);

    /*** Local function ***/
    function isPercentage(offset) {
      var percentageRegex = /^\d+(\.\d+)?%$/g;
      return percentageRegex.test(offset);
    }

    function calculatePercentage(percentStr, duration) {
      if (duration) {
        return calcPercent(duration, parseFloat(percentStr.replace('%', '')));
      }
      return null;
    }

    function calcPercent(quantity, percent) {
      return quantity * percent / 100;
    }
  },


  //List of supported VPAID technologies
  VPAID_techs: [
    VPAIDHTML5Tech
  ],

  isVPAID: function isVPAIDMediaFile(mediaFile) {
    return !!mediaFile && mediaFile.apiFramework === 'VPAID';
  },

  findSupportedVPAIDTech: function findSupportedVPAIDTech(mimeType) {
    var i, len, VPAIDTech;

    for (i = 0, len = this.VPAID_techs.length; i < len; i += 1) {
      VPAIDTech = this.VPAID_techs[i];
      if (VPAIDTech.supports(mimeType)) {
        return VPAIDTech;
      }
    }
    return null;
  }

};

module.exports = vastUtil;

},{"../../utils/utilityFunctions":37,"../vpaid/VPAIDHTML5Tech":23}],22:[function(require,module,exports){
'use strict';

var VASTError = require('../vast/VASTError');

var utilities = require('../../utils/utilityFunctions');

function VPAIDAdUnitWrapper(vpaidAdUnit, opts) {
  if (!(this instanceof VPAIDAdUnitWrapper)) {
    return new VPAIDAdUnitWrapper(vpaidAdUnit, opts);
  }
  sanityCheck(vpaidAdUnit, opts);

  this.options = utilities.extend({}, opts);

  this._adUnit = vpaidAdUnit;

  /*** Local Functions ***/
  function sanityCheck(adUnit, opts) {
    if (!adUnit || !VPAIDAdUnitWrapper.checkVPAIDInterface(adUnit)) {
      throw new VASTError('on VPAIDAdUnitWrapper, the passed VPAID adUnit does not fully implement the VPAID interface');
    }

    if (!utilities.isObject(opts)) {
      throw new VASTError("on VPAIDAdUnitWrapper, expected options hash  but got '" + opts + "'");
    }

    if (!("responseTimeout" in opts) || !utilities.isNumber(opts.responseTimeout) ){
      throw new VASTError("on VPAIDAdUnitWrapper, expected responseTimeout in options");
    }
  }
}

VPAIDAdUnitWrapper.checkVPAIDInterface = function checkVPAIDInterface(VPAIDAdUnit) {
  //NOTE: skipAd is not part of the method list because it only appears in VPAID 2.0 and we support VPAID 1.0
  var VPAIDInterfaceMethods = [
    'handshakeVersion', 'initAd', 'startAd', 'stopAd', 'resizeAd', 'pauseAd', 'expandAd', 'collapseAd'
  ];

  for (var i = 0, len = VPAIDInterfaceMethods.length; i < len; i++) {
    if (!VPAIDAdUnit || !utilities.isFunction(VPAIDAdUnit[VPAIDInterfaceMethods[i]])) {
      return false;
    }
  }


  return canSubscribeToEvents(VPAIDAdUnit) && canUnsubscribeFromEvents(VPAIDAdUnit);

  /*** Local Functions ***/

  function canSubscribeToEvents(adUnit) {
    return utilities.isFunction(adUnit.subscribe) || utilities.isFunction(adUnit.addEventListener) || utilities.isFunction(adUnit.on);
  }

  function canUnsubscribeFromEvents(adUnit) {
    return utilities.isFunction(adUnit.unsubscribe) || utilities.isFunction(adUnit.removeEventListener) || utilities.isFunction(adUnit.off);

  }
};

VPAIDAdUnitWrapper.prototype.adUnitAsyncCall = function () {
  var args = utilities.arrayLikeObjToArray(arguments);
  var method = args.shift();
  var cb = args.pop();
  var timeoutId;

  sanityCheck(method, cb, this._adUnit);
  args.push(wrapCallback());

  this._adUnit[method].apply(this._adUnit, args);
  timeoutId = setTimeout(function () {
    timeoutId = null;
    cb(new VASTError("on VPAIDAdUnitWrapper, timeout while waiting for a response on call '" + method + "'"));
    cb = utilities.noop;
  }, this.options.responseTimeout);

  /*** Local functions ***/
  function sanityCheck(method, cb, adUnit) {
    if (!utilities.isString(method) || !utilities.isFunction(adUnit[method])) {
      throw new VASTError("on VPAIDAdUnitWrapper.adUnitAsyncCall, invalid method name");
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError("on VPAIDAdUnitWrapper.adUnitAsyncCall, missing callback");
    }
  }

  function wrapCallback() {
    return function () {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      cb.apply(this, arguments);
    };
  }
};

VPAIDAdUnitWrapper.prototype.on = function (evtName, handler) {
  var addEventListener = this._adUnit.addEventListener || this._adUnit.subscribe || this._adUnit.on;
  addEventListener.call(this._adUnit, evtName, handler);
};

VPAIDAdUnitWrapper.prototype.off = function (evtName, handler) {
  var removeEventListener = this._adUnit.removeEventListener || this._adUnit.unsubscribe || this._adUnit.off;
  removeEventListener.call(this._adUnit, evtName, handler);
};

VPAIDAdUnitWrapper.prototype.waitForEvent = function (evtName, cb, context) {
  var timeoutId;
  sanityCheck(evtName, cb);
  context = context || null;

  this.on(evtName, responseListener);

  // JM: We're troubleshooting an issue with a live creative that's under test for
  // the VAST DriveBy - it appears that the VPAID content is failing to load 
  // intermittently, which in turn prevents the AdStarted event from firing. Until
  // resolved properly, this incredibly dangerous hack ensure we push on with
  // rolling the video.
  //
  // https://trello.com/c/cstDgx9p/2749-continental-vast-troubleshoot-low-playback-rate
  /* if (evtName === 'AdStarted') {
    timeoutId = setTimeout(responseListener, 3000);
  } else { */
  timeoutId = setTimeout(function () {
    cb(new VASTError("on VPAIDAdUnitWrapper.waitForEvent, timeout while waiting for event '" + evtName + "'"));
    timeoutId = null;
    cb = utilities.noop;
  }, this.options.responseTimeout);
  // }

  /*** Local functions ***/
  function sanityCheck(evtName, cb) {
    if (!utilities.isString(evtName)) {
      throw new VASTError("on VPAIDAdUnitWrapper.waitForEvent, missing evt name");
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError("on VPAIDAdUnitWrapper.waitForEvent, missing callback");
    }
  }

  function responseListener() {
    var args = utilities.arrayLikeObjToArray(arguments);

    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    args.unshift(null);
    cb.apply(context, args);
  }
};

// VPAID METHODS
VPAIDAdUnitWrapper.prototype.handshakeVersion = function (version, cb) {
  this.adUnitAsyncCall('handshakeVersion', version, cb);
};

/* jshint maxparams:6 */
VPAIDAdUnitWrapper.prototype.initAd = function (width, height, viewMode, desiredBitrate, adUnitData, cb) {
  this.waitForEvent('AdLoaded', cb);
  this._adUnit.initAd(width, height, viewMode, desiredBitrate, adUnitData);
};

VPAIDAdUnitWrapper.prototype.resizeAd = function (width, height, viewMode, cb) {
  // NOTE: AdSizeChange event is only supported on VPAID 2.0 so for the moment we are not going to use it
  // and will assume that everything is fine after the async call
  this.adUnitAsyncCall('resizeAd', width, height, viewMode, cb);
};

VPAIDAdUnitWrapper.prototype.startAd = function (cb) {
  this.waitForEvent('AdStarted', cb);
  this._adUnit.startAd();
};

VPAIDAdUnitWrapper.prototype.stopAd = function (cb) {
  this.waitForEvent('AdStopped', cb);
  this._adUnit.stopAd();
};

VPAIDAdUnitWrapper.prototype.pauseAd = function (cb) {
  this.waitForEvent('AdPaused', cb);
  this._adUnit.pauseAd();
};

VPAIDAdUnitWrapper.prototype.resumeAd = function (cb) {
  this.waitForEvent('AdPlaying', cb);
  this._adUnit.resumeAd();
};

VPAIDAdUnitWrapper.prototype.expandAd = function (cb) {
  this.waitForEvent('AdExpandedChange', cb);
  this._adUnit.expandAd();
};

VPAIDAdUnitWrapper.prototype.collapseAd = function (cb) {
  this.waitForEvent('AdExpandedChange', cb);
  this._adUnit.collapseAd();
};

VPAIDAdUnitWrapper.prototype.skipAd = function (cb) {
  this.waitForEvent('AdSkipped', cb);
  this._adUnit.skipAd();
};

//VPAID property getters
[
  'adLinear',
  'adWidth',
  'adHeight',
  'adExpanded',
  'adSkippableState',
  'adRemainingTime',
  'adDuration',
  'adVolume',
  'adCompanions',
  'adIcons'
].forEach(function (property) {
  var getterName = 'get' + utilities.capitalize(property);

  VPAIDAdUnitWrapper.prototype[getterName] = function (cb) {
    this.adUnitAsyncCall(getterName, cb);
  };
});

//VPAID property setters
VPAIDAdUnitWrapper.prototype.setAdVolume = function(volume, cb){
  this.adUnitAsyncCall('setAdVolume',volume, cb);
};

module.exports = VPAIDAdUnitWrapper;

},{"../../utils/utilityFunctions":37,"../vast/VASTError":14}],23:[function(require,module,exports){
'use strict';

var MimeTypes = require('../../utils/mimetypes');

var VASTError = require('../vast/VASTError');

var VPAIDHTML5Client = require('VPAIDHTML5Client/js/VPAIDHTML5Client');

var utilities = require('../../utils/utilityFunctions');
var dom = require('../../utils/dom');

var logger = require ('../../utils/consoleLogger');

function VPAIDHTML5Tech(mediaFile) {

  if(!(this instanceof VPAIDHTML5Tech)) {
    return new VPAIDHTML5Tech(mediaFile);
  }

  sanityCheck(mediaFile);

  this.name = 'vpaid-html5';
  this.containerEl = null;
  this.videoEl = null;
  this.vpaidHTMLClient = null;

  this.mediaFile = mediaFile;

  function sanityCheck(mediaFile) {
      if (!mediaFile || !utilities.isString(mediaFile.src)) {
        throw new VASTError(VPAIDHTML5Tech.INVALID_MEDIA_FILE);
      }
  }
}

VPAIDHTML5Tech.VPAIDHTML5Client = VPAIDHTML5Client;

VPAIDHTML5Tech.supports = function (type) {
  return !utilities.isOldIE() && MimeTypes.html5.indexOf(type) > -1;
};

VPAIDHTML5Tech.prototype.loadAdUnit = function loadAdUnit(containerEl, videoEl, callback) {
  sanityCheck(containerEl, videoEl, callback);

  this.containerEl = containerEl;
  this.videoEl = videoEl;
  this.vpaidHTMLClient = new VPAIDHTML5Tech.VPAIDHTML5Client(containerEl, videoEl, {});
  this.vpaidHTMLClient.loadAdUnit(this.mediaFile.src, callback);

  function sanityCheck(container, video, cb) {
    if (!dom.isDomElement(container)) {
      throw new VASTError(VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL);
    }

    if (!dom.isDomElement(video) || video.tagName.toLowerCase() !== 'video') {
      throw new VASTError(VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL);
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError(VPAIDHTML5Tech.MISSING_CALLBACK);
    }
  }
};

VPAIDHTML5Tech.prototype.unloadAdUnit = function unloadAdUnit() {
  if (this.vpaidHTMLClient) {
    try {
      this.vpaidHTMLClient.destroy();
    } catch(e) {
      logger.error ('VAST ERROR: trying to unload the VPAID adunit');
    }

    this.vpaidHTMLClient = null;
  }

  if (this.containerEl) {
    dom.remove(this.containerEl);
    this.containerEl = null;
  }
};

var PREFIX = 'on VPAIDHTML5Tech';
VPAIDHTML5Tech.INVALID_MEDIA_FILE = PREFIX + ', invalid MediaFile';
VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL = PREFIX + ', invalid container HtmlElement';
VPAIDHTML5Tech.INVALID_DOM_VIDEO_EL = PREFIX + ', invalid HTMLVideoElement';
VPAIDHTML5Tech.MISSING_CALLBACK = PREFIX + ', missing valid callback';

module.exports = VPAIDHTML5Tech;

},{"../../utils/consoleLogger":31,"../../utils/dom":32,"../../utils/mimetypes":34,"../../utils/utilityFunctions":37,"../vast/VASTError":14,"VPAIDHTML5Client/js/VPAIDHTML5Client":3}],24:[function(require,module,exports){
'use strict';

var MimeTypes = require('../../utils/mimetypes');
var VASTError = require('../vast/VASTError');
var VASTResponse = require('../vast/VASTResponse');
var VASTTracker = require('../vast/VASTTracker');
var vastUtil = require('../vast/vastUtil');

var VPAIDAdUnitWrapper = require('./VPAIDAdUnitWrapper');

var async = require('../../utils/async');
var dom = require('../../utils/dom');
var playerUtils = require('../../utils/playerUtils');
var utilities = require('../../utils/utilityFunctions');

var logger = require ('../../utils/consoleLogger');

function VPAIDIntegrator(player, settings) {

  if (!(this instanceof VPAIDIntegrator)) {
    return new VPAIDIntegrator(player);
  }

  this.VIEW_MODE = {
    NORMAL: 'normal',
    FULLSCREEN: "fullscreen",
    THUMBNAIL: "thumbnail"
  };
  this.player = player;
  this.containerEl = createVPAIDContainerEl(player);
  this.options = {
    responseTimeout: 10000,
    VPAID_VERSION: '2.0'
  };
  this.settings = settings;

  /*** Local functions ***/

  function createVPAIDContainerEl() {
    var containerEl = document.createElement('div');
    dom.addClass(containerEl, 'VPAID-container');
    player.el().insertBefore(containerEl, player.controlBar.el());
    return containerEl;

  }
}

VPAIDIntegrator.prototype.playAd = function playVPaidAd(vastResponse, callback) {
  if (!(vastResponse instanceof VASTResponse)) {
    return callback(new VASTError('on VASTIntegrator.playAd, missing required VASTResponse'));
  }

  var that = this;
  var player = this.player;
  logger.debug ("<VPAIDIntegrator.playAd> looking for supported tech...");
  var tech = this._findSupportedTech(vastResponse, this.settings);

  callback = callback || utilities.noop;

  this._adUnit = null;

  dom.addClass(player.el(), 'vjs-vpaid-ad');

  player.on('vast.adsCancel', triggerVpaidAdEnd);
  player.one('vpaid.adEnd', function(){
    player.off('vast.adsCancel', triggerVpaidAdEnd);
    removeAdUnit();
  });

  if (tech) {
    logger.info ("<VPAIDIntegrator.playAd> found tech: ", tech);

    async.waterfall([
      function (next) {
        next(null, tech, vastResponse);
      },
      this._loadAdUnit.bind(this),
      this._playAdUnit.bind(this),
      this._finishPlaying.bind(this)

    ], adComplete);

    this._adUnit = {
      _paused: true,
      type: 'VPAID',
      pauseAd: function() {
        player.trigger('vpaid.pauseAd');
        player.pause(true);//we make sure that the video content gets stopped.
      },
      resumeAd: function() {
          player.trigger('vpaid.resumeAd');
      },
      isPaused: function() {
        return this._paused;
      },
      getSrc: function() {
        return tech.mediaFile;
      }
    };

  } else {
    logger.debug ("<VPAIDIntegrator.playAd> could not find suitable tech");
    var error = new VASTError('on VPAIDIntegrator.playAd, could not find a supported mediaFile', 403);
    adComplete(error, this._adUnit, vastResponse);
  }

  return this._adUnit;

  /*** Local functions ***/
  function adComplete(error, adUnit, vastResponse) {
    if (error && vastResponse) {
      that._trackError(vastResponse, error.code);
    }
    player.trigger('vpaid.adEnd');
    callback(error, vastResponse);
  }

  function triggerVpaidAdEnd(){
    player.trigger('vpaid.adEnd');
  }

  function removeAdUnit() {
    if (tech) {
      tech.unloadAdUnit();
    }
    dom.removeClass(player.el(), 'vjs-vpaid-ad');
  }
};

VPAIDIntegrator.prototype._findSupportedTech = function (vastResponse, settings) {
  if (!(vastResponse instanceof VASTResponse)) {
    return null;
  }

  var vpaidMediaFiles = vastResponse.mediaFiles.filter(vastUtil.isVPAID);
  var preferredTech = settings && settings.preferredTech;
  var skippedSupportTechs = [];
  var i, len, mediaFile, VPAIDTech, isPreferedTech;

  for (i = 0, len = vpaidMediaFiles.length; i < len; i += 1) {
    mediaFile = vpaidMediaFiles[i];
    VPAIDTech = vastUtil.findSupportedVPAIDTech(mediaFile.type);

    // no supported VPAID tech found, skip mediafile
    if (!VPAIDTech) { continue; }

    // do we have a prefered tech, does it play this media file ?
    isPreferedTech = preferredTech ?
      (mediaFile.type === preferredTech || (MimeTypes[preferredTech] && MimeTypes[preferredTech].indexOf(mediaFile.type) > -1 )) :
      false;

    // our prefered tech can read this mediafile, defaulting to it.
    if (isPreferedTech) {
      return new VPAIDTech(mediaFile, settings);
    }

    skippedSupportTechs.push({ mediaFile: mediaFile, tech: VPAIDTech });
  }

  if (skippedSupportTechs.length) {
    var firstTech = skippedSupportTechs[0];
    return new firstTech.tech(firstTech.mediaFile, settings);
  }

  return null;
};

VPAIDIntegrator.prototype._createVPAIDAdUnitWrapper = function(adUnit, src, responseTimeout) {
  return new VPAIDAdUnitWrapper(adUnit, {src: src, responseTimeout: responseTimeout});
};

VPAIDIntegrator.prototype._loadAdUnit = function (tech, vastResponse, next) {
  var that = this;
  var player = this.player;
  var vjsTechEl = player.el().querySelector('.vjs-tech');
  var responseTimeout = this.settings.responseTimeout || this.options.responseTimeout;
  tech.loadAdUnit(this.containerEl, vjsTechEl, function (error, adUnit) {
    if (error) {
      return next(error, adUnit, vastResponse);
    }

    try {
      var WrappedAdUnit = that._createVPAIDAdUnitWrapper(adUnit, tech.mediaFile.src, responseTimeout);
      var techClass = 'vjs-' + tech.name + '-ad';
      dom.addClass(player.el(), techClass);
      player.one('vpaid.adEnd', function() {
        dom.removeClass(player.el(),techClass);
      });
      next(null, WrappedAdUnit, vastResponse);
    } catch (e) {
      next(e, adUnit, vastResponse);
    }
  });
};

VPAIDIntegrator.prototype._playAdUnit = function (adUnit, vastResponse, callback) {
  async.waterfall([
    function (next) {
      next(null, adUnit, vastResponse);
    },
    this._handshake.bind(this),
    this._initAd.bind(this),
    this._setupEvents.bind(this),
    this._addSkipButton.bind(this),
    this._linkPlayerControls.bind(this),
    this._startAd.bind(this)
  ], callback);
};

VPAIDIntegrator.prototype._handshake = function handshake(adUnit, vastResponse, next) {
  adUnit.handshakeVersion(this.options.VPAID_VERSION, function (error, version) {
    if (error) {
      return next(error, adUnit, vastResponse);
    }

    if (version && isSupportedVersion(version)) {
      return next(null, adUnit, vastResponse);
    }

    return next(new VASTError('on VPAIDIntegrator._handshake, unsupported version "' + version + '"'), adUnit, vastResponse);
  });

  function isSupportedVersion(version) {
    var majorNum = major(version);
    return majorNum >= 1 && majorNum <= 2;
  }

  function major(version) {
    var parts = version.split('.');
    return parseInt(parts[0], 10);
  }
};

VPAIDIntegrator.prototype._initAd = function (adUnit, vastResponse, next) {
  var tech = this.player.el().querySelector('.vjs-tech');
  var dimension = dom.getDimension(tech);
  adUnit.initAd(dimension.width, dimension.height, this.VIEW_MODE.NORMAL, -1, {AdParameters: vastResponse.adParameters || ''}, function (error) {
    next(error, adUnit, vastResponse);
  });
};

VPAIDIntegrator.prototype._createVASTTracker = function(adUnitSrc, vastResponse) {
  return new VASTTracker(adUnitSrc, vastResponse);
};

VPAIDIntegrator.prototype._setupEvents = function (adUnit, vastResponse, next) {
  var adUnitSrc = adUnit.options.src;
  var tracker = this._createVASTTracker(adUnitSrc, vastResponse);
  var player = this.player;
  var that = this;
  var previouslyMuted;
  player.on('timeupdate', trackProgress);
  player.on('volumechange', trackVolumeChange);
  player.on('vast.adStart', trackImpressions);

  adUnit.on('AdSkipped', function () {
    player.trigger('vpaid.AdSkipped');
    tracker.trackSkip();
  });

  adUnit.on('AdImpression', function () {
    player.trigger('vpaid.AdImpression');
    tracker.trackImpressions();
  });

  adUnit.on('AdStarted', function () {
    player.trigger('vpaid.AdStarted');
    tracker.trackCreativeView();
    notifyPlayToPlayer();
  });

  adUnit.on('AdVideoStart', function () {
    player.trigger('vpaid.AdVideoStart');
    tracker.trackStart();
    notifyPlayToPlayer();
  });

  adUnit.on('AdPlaying', function () {
    player.trigger('vpaid.AdPlaying');
    tracker.trackResume();
    notifyPlayToPlayer();
  });

  adUnit.on('AdPaused', function () {
    player.trigger('vpaid.AdPaused');
    tracker.trackPause();
    notifyPauseToPlayer();
  });

  function notifyPlayToPlayer(){
    if(that._adUnit && that._adUnit.isPaused()){
      that._adUnit._paused = false;
    }
    player.trigger('play');

  }

  function notifyPauseToPlayer() {
    if(that._adUnit){
      that._adUnit._paused = true;
    }
    player.trigger('pause');
  }

  adUnit.on('AdVideoFirstQuartile', function () {
    player.trigger('vpaid.AdVideoFirstQuartile');
    tracker.trackFirstQuartile();
  });

  adUnit.on('AdVideoMidpoint', function () {
    player.trigger('vpaid.AdVideoMidpoint');
    tracker.trackMidpoint();
  });

  adUnit.on('AdVideoThirdQuartile', function () {
    player.trigger('vpaid.AdVideoThirdQuartile');
    tracker.trackThirdQuartile();
  });

  adUnit.on('AdVideoComplete', function () {
    player.trigger('vpaid.AdVideoComplete');
    tracker.trackComplete();
  });

  adUnit.on('AdClickThru', function (data) {
    player.trigger('vpaid.AdClickThru');
    var url = data.url;
    var playerHandles = data.playerHandles;
    var clickThruUrl = utilities.isNotEmptyString(url) ? url : generateClickThroughURL(vastResponse.clickThrough);

    tracker.trackClick();
    if (playerHandles && clickThruUrl) {
      window.open(clickThruUrl, '_blank');
    }

    function generateClickThroughURL(clickThroughMacro) {
      var variables = {
        ASSETURI: adUnit.options.src,
        CONTENTPLAYHEAD: 0 //In VPAID there is no method to know the current time from the adUnit
      };

      return clickThroughMacro ? vastUtil.parseURLMacro(clickThroughMacro, variables) : null;
    }
  });

  adUnit.on('AdUserAcceptInvitation', function () {
    player.trigger('vpaid.AdUserAcceptInvitation');
    tracker.trackAcceptInvitation();
    tracker.trackAcceptInvitationLinear();
  });

  adUnit.on('AdUserClose', function () {
    player.trigger('vpaid.AdUserClose');
    tracker.trackClose();
    tracker.trackCloseLinear();
  });

  adUnit.on('AdUserMinimize', function () {
    player.trigger('vpaid.AdUserMinimize');
    tracker.trackCollapse();
  });

  adUnit.on('AdError', function () {
    player.trigger('vpaid.AdError');
    //NOTE: we track errors code 901, as noted in VAST 3.0
    tracker.trackErrorWithCode(901);
  });

  adUnit.on('AdVolumeChange', function () {
    player.trigger('vpaid.AdVolumeChange');
    var lastVolume = player.volume();
    adUnit.getAdVolume(function (error, currentVolume) {
      if (lastVolume !== currentVolume) {
        if (currentVolume === 0 && lastVolume > 0) {
          tracker.trackMute();
        }

        if (currentVolume > 0 && lastVolume === 0) {
          tracker.trackUnmute();
        }

        player.volume(currentVolume);
      }
    });
  });

  var updateViewSize = resizeAd.bind(this, player, adUnit, this.VIEW_MODE);
  var updateViewSizeThrottled = utilities.throttle(updateViewSize, 100);
  var autoResize = this.settings.autoResize;

  if (autoResize) {
    dom.addEventListener(window, 'resize', updateViewSizeThrottled);
    dom.addEventListener(window, 'orientationchange', updateViewSizeThrottled);
  }

  player.on('vast.resize', updateViewSize);
  player.on('vpaid.pauseAd', pauseAdUnit);
  player.on('vpaid.resumeAd', resumeAdUnit);

  player.one('vpaid.adEnd', function () {
    player.off('vast.resize', updateViewSize);
    player.off('vpaid.pauseAd', pauseAdUnit);
    player.off('vpaid.resumeAd', resumeAdUnit);

    if (autoResize) {
      dom.removeEventListener(window, 'resize', updateViewSizeThrottled);
      dom.removeEventListener(window, 'orientationchange', updateViewSizeThrottled);
    }
  });

  next(null, adUnit, vastResponse);

  /*** Local Functions ***/
  function pauseAdUnit() {
    adUnit.pauseAd(utilities.noop);
  }

  function resumeAdUnit() {
    adUnit.resumeAd(utilities.noop);
  }

  function trackProgress() {
    var currentTimeInMs = player.currentTime() * 1000;
    tracker.trackProgress(currentTimeInMs);
  }

  function trackImpressions() {
    tracker.trackImpressions();
    tracker.trackCreativeView();
  }

  function trackVolumeChange() {
    var muted = player.muted();
    if (muted) {
      tracker.trackMute();
    } else if (previouslyMuted) {
      tracker.trackUnmute();
    }
    previouslyMuted = muted;
  }

};

VPAIDIntegrator.prototype._addSkipButton = function (adUnit, vastResponse, next) {
  var skipButton;
  var player = this.player;

  adUnit.on('AdSkippableStateChange', updateSkipButtonState);

  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeSkipButton);

  next(null, adUnit, vastResponse);

  /*** Local function ***/
  function updateSkipButtonState() {
    player.trigger('vpaid.AdSkippableStateChange');
    adUnit.getAdSkippableState(function (error, isSkippable) {
      if (isSkippable) {
        if (!skipButton) {
          addSkipButton(player);
        }
      } else {
        removeSkipButton(player);
      }
    });
  }

  function addSkipButton(player) {
    skipButton = createSkipButton(player);
    player.el().appendChild(skipButton);
  }

  function removeSkipButton() {
    dom.remove(skipButton);
    skipButton = null;
  }

  function createSkipButton() {
    var skipButton = window.document.createElement("div");
    dom.addClass(skipButton, "vast-skip-button");
    dom.addClass(skipButton, "enabled");
    skipButton.innerHTML = "Skip ad";

    skipButton.onclick = function (e) {
      adUnit.skipAd(utilities.noop);//We skip the adUnit

      //We prevent event propagation to avoid problems with the clickThrough and so on
      if (window.Event.prototype.stopPropagation !== undefined) {
        e.stopPropagation();
      } else {
        return false;
      }
    };

    return skipButton;
  }
};

VPAIDIntegrator.prototype._linkPlayerControls = function (adUnit, vastResponse, next) {
  var that = this;
  linkVolumeControl(this.player, adUnit);
  linkFullScreenControl(this.player, adUnit, this.VIEW_MODE);

  next(null, adUnit, vastResponse);

  /*** Local functions ***/
  function linkVolumeControl(player, adUnit) {
    player.on('volumechange', updateAdUnitVolume);
    adUnit.on('AdVolumeChange', updatePlayerVolume);

    player.one('vpaid.adEnd', function () {
      player.off('volumechange', updateAdUnitVolume);
    });


    /*** local functions ***/
    function updateAdUnitVolume() {
      var vol = player.muted() ? 0 : player.volume();
      adUnit.setAdVolume(vol, logError);
    }

    function updatePlayerVolume() {
      player.trigger('vpaid.AdVolumeChange');
      var lastVolume = player.volume();
      adUnit.getAdVolume(function (error, vol) {
        if (error) {
          logError(error);
        } else {
          if (lastVolume !== vol) {
            player.volume(vol);
          }
        }
      });
    }
  }

  function linkFullScreenControl(player, adUnit, VIEW_MODE) {
    var updateViewSize = resizeAd.bind(that, player, adUnit, VIEW_MODE);

    player.on('fullscreenchange', updateViewSize);

    player.one('vpaid.adEnd', function () {
      player.off('fullscreenchange', updateViewSize);
    });
  }
};

VPAIDIntegrator.prototype._startAd = function (adUnit, vastResponse, next) {
  var player = this.player;

  adUnit.startAd(function (error) {
    if (!error) {
      player.trigger('vast.adStart');
    }
    next(error, adUnit, vastResponse);
  });
};

VPAIDIntegrator.prototype._finishPlaying = function (adUnit, vastResponse, next) {
  var player = this.player;
  adUnit.on('AdStopped', function () {
   player.trigger('vpaid.AdStopped');
   finishPlayingAd(null);
  });

  adUnit.on('AdError', function (error) {
    var errMsg = error? error.message : 'on VPAIDIntegrator, error while waiting for the adUnit to finish playing';
    finishPlayingAd(new VASTError(errMsg));
  });

  /*** local functions ***/
  function finishPlayingAd(error) {
    next(error, adUnit, vastResponse);
  }
};

VPAIDIntegrator.prototype._trackError = function trackError(response, errorCode) {
  vastUtil.track(response.errorURLMacros, {ERRORCODE: errorCode || 901});
};

function resizeAd(player, adUnit, VIEW_MODE) {
  var tech = player.el().querySelector('.vjs-tech');
  var dimension = dom.getDimension(tech);
  var MODE = player.isFullscreen() ? VIEW_MODE.FULLSCREEN : VIEW_MODE.NORMAL;
  adUnit.resizeAd(dimension.width, dimension.height, MODE, logError);
}

function logError(error) {
  if (error) {
    logger.error ('ERROR: ' + error.message, error);
  }
}

module.exports = VPAIDIntegrator;

},{"../../utils/async":30,"../../utils/consoleLogger":31,"../../utils/dom":32,"../../utils/mimetypes":34,"../../utils/playerUtils":35,"../../utils/utilityFunctions":37,"../vast/VASTError":14,"../vast/VASTResponse":16,"../vast/VASTTracker":17,"../vast/vastUtil":21,"./VPAIDAdUnitWrapper":22}],25:[function(require,module,exports){
'use strict';

var dom = require('../../utils/dom');

var element = document.createElement('div');
element.className = 'vjs-ads-label vjs-control vjs-label-hidden';
element.innerHTML = 'Advertisement';

var AdsLabelFactory = function(baseComponent) {
  return {
    /** @constructor */
    init: function init(player, options) {
      options.el = element;
      baseComponent.call(this, player, options);

      // We asynchronously reposition the ads label element
      setTimeout(function () {
        var currentTimeComp = player.controlBar &&( player.controlBar.getChild("timerControls") || player.controlBar.getChild("currentTimeDisplay") );
        if(currentTimeComp) {
          player.controlBar.el().insertBefore(element, currentTimeComp.el());
        }
        dom.removeClass(element, 'vjs-label-hidden');
      }, 0);
    },

    el: function getElement() {
      return element;
    }
  };
};

module.exports = AdsLabelFactory;
},{"../../utils/dom":32}],26:[function(require,module,exports){
'use strict';

var baseVideoJsComponent = videojs.getComponent('Component');

var AdsLabel = require('./ads-label')(baseVideoJsComponent);

videojs.registerComponent('AdsLabel', videojs.extend(baseVideoJsComponent, AdsLabel));

},{"./ads-label":25}],27:[function(require,module,exports){
'use strict';

/**
 * The component that shows a black screen until the ads plugin has decided if it can or it can not play the ad.
 *
 * Note: In case you wonder why instead of this black poster we don't just show the spinner loader.
 *       IOS devices do not work well with animations and the browser chrashes from time to time That is why we chose to
 *       have a secondary black poster.
 *
 *       It also makes it much more easier for the users of the plugin since it does not change the default behaviour of the
 *       spinner and the player works the same way with and without the plugin.
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
var element = document.createElement('div');

var BlackPosterFactory = function(baseComponent) {
  return {
    /** @constructor */
    init: function init(player, options) {
      options.el = element;
      element.className = 'vjs-black-poster';
      baseComponent.call(this, player, options);

      var posterImg = player.getChild('posterImage');

      //We need to do it asynchronously to be sure that the black poster el is on the dom.
      setTimeout(function() {
        if(posterImg && player && player.el()) {
          player.el().insertBefore(element, posterImg.el());
        }
      }, 0);
    },
    el: function getElement() {
      return element;
    }
  };
};

module.exports = BlackPosterFactory;
},{}],28:[function(require,module,exports){
'use strict';

var baseVideoJsComponent = videojs.getComponent('Component');

var BlackPoster = require('./black-poster')(baseVideoJsComponent);

videojs.registerComponent('BlackPoster', videojs.extend(baseVideoJsComponent, BlackPoster));

},{"./black-poster":27}],29:[function(require,module,exports){
'use strict';

var VASTClient = require('../ads/vast/VASTClient');
var VASTError = require('../ads/vast/VASTError');
var vastUtil = require('../ads/vast/vastUtil');

var VASTIntegrator = require('../ads/vast/VASTIntegrator');
var VPAIDIntegrator = require('../ads/vpaid/VPAIDIntegrator');

var async = require('../utils/async');
var dom = require('../utils/dom');
var playerUtils = require('../utils/playerUtils');
var utilities = require('../utils/utilityFunctions');

var logger = require ('../utils/consoleLogger');

module.exports = function VASTPlugin(options) {
  var snapshot;
  var player = this;
  var vast = new VASTClient();
  var adsCanceled = false;
  var defaultOpts = {
    // maximum amount of time in ms to wait to receive `adsready` from the ad
    // implementation after play has been requested. Ad implementations are
    // expected to load any dynamic libraries and make any requests to determine
    // ad policies for a video during this time.
    timeout: 500,

    //TODO:finish this IOS FIX
    //Whenever you play an add on IOS, the native player kicks in and we loose control of it. On very heavy pages the 'play' event
    // May occur after the video content has already started. This is wrong if you want to play a preroll ad that needs to happen before the user
    // starts watching the content. To prevent this usec
    iosPrerollCancelTimeout: 2000,

    // maximun amount of time for the ad to actually start playing. If this timeout gets
    // triggered the ads will be cancelled
    adCancelTimeout: 3000,

    // Boolean flag that configures the player to play a new ad before the user sees the video again
    // the current video
    playAdAlways: false,

    // Flag to enable or disable the ads by default.
    adsEnabled: true,

    // Boolean flag to enable or disable the resize with window.resize or orientationchange
    autoResize: true,

    // verbosity of console logging:
    // 0 - error
    // 1 - error, warn
    // 2 - error, warn, info
    // 3 - error, warn, info, log
    // 4 - error, warn, info, log, debug
    verbosity: 0
  };

  var settings = utilities.extend({}, defaultOpts, options || {});

  if(utilities.isUndefined(settings.adTagUrl) && utilities.isDefined(settings.url)){
    settings.adTagUrl = settings.url;
  }

  if (utilities.isString(settings.adTagUrl)) {
    settings.adTagUrl = utilities.echoFn(settings.adTagUrl);
  }

  if (utilities.isDefined(settings.adTagXML) && !utilities.isFunction(settings.adTagXML)) {
    return trackAdError(new VASTError('on VideoJS VAST plugin, the passed adTagXML option does not contain a function'));
  }

  if (!utilities.isDefined(settings.adTagUrl) && !utilities.isFunction(settings.adTagXML)) {
    return trackAdError(new VASTError('on VideoJS VAST plugin, missing adTagUrl on options object'));
  }

  logger.setVerbosity (settings.verbosity);

  playerUtils.prepareForAds(player);

  if (settings.playAdAlways) {
    // No matter what happens we play a new ad before the user sees the video again.
    player.on('vast.contentEnd', function () {
      setTimeout(function () {
        player.trigger('vast.reset');
      }, 0);
    });
  }

  player.on('vast.firstPlay', tryToPlayPrerollAd);

  player.on('vast.reset', function () {
    //If we are reseting the plugin, we don't want to restore the content
    snapshot = null;
    cancelAds();
  });

  player.vast = {
    isEnabled: function () {
      return settings.adsEnabled;
    },

    enable: function () {
      settings.adsEnabled = true;
    },

    disable: function () {
      settings.adsEnabled = false;
    }
  };

  return player.vast;

  /**** Local functions ****/
  function tryToPlayPrerollAd() {
    //We remove the poster to prevent flickering whenever the content starts playing
    playerUtils.removeNativePoster(player);

    playerUtils.once(player, ['vast.adsCancel', 'vast.adEnd'], function () {
      removeAdUnit();
      restoreVideoContent();
    });

    async.waterfall([
      checkAdsEnabled,
      preparePlayerForAd,
      startAdCancelTimeout,
      playPrerollAd
    ], function (error, response) {
      if (error) {
        trackAdError(error, response);
      } else {
        player.trigger('vast.adEnd');
      }
    });

    /*** Local functions ***/

    function removeAdUnit() {
      if (player.vast && player.vast.adUnit) {
        player.vast.adUnit = null; //We remove the adUnit
      }
    }

    function restoreVideoContent() {
      setupContentEvents();
      if (snapshot) {
        playerUtils.restorePlayerSnapshot(player, snapshot);
        snapshot = null;
      }
    }

    function setupContentEvents() {
      playerUtils.once(player, ['playing', 'vast.reset', 'vast.firstPlay'], function (evt) {
        if (evt.type !== 'playing') {
          return;
        }

        player.trigger('vast.contentStart');

        playerUtils.once(player, ['ended', 'vast.reset', 'vast.firstPlay'], function (evt) {
          if (evt.type === 'ended') {
            player.trigger('vast.contentEnd');
          }
        });
      });
    }

    function checkAdsEnabled(next) {
      if (settings.adsEnabled) {
        return next(null);
      }
      next(new VASTError('Ads are not enabled'));
    }

    function preparePlayerForAd(next) {
      if (canPlayPrerollAd()) {
        snapshot = playerUtils.getPlayerSnapshot(player);
        player.pause();
        addSpinnerIcon();

        if(player.paused()) {
          next(null);
        } else {
          playerUtils.once(player, ['playing'], function() {
            player.pause();
            next(null);
          });
        }
      } else {
        next(new VASTError('video content has been playing before preroll ad'));
      }
    }

    function canPlayPrerollAd() {
      return !utilities.isIPhone() || player.currentTime() <= settings.iosPrerollCancelTimeout;
    }

    function startAdCancelTimeout(next) {
      var adCancelTimeoutId;
      adsCanceled = false;

      adCancelTimeoutId = setTimeout(function () {
        trackAdError(new VASTError('timeout while waiting for the video to start playing', 402));
      }, settings.adCancelTimeout);

      playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], clearAdCancelTimeout);

      /*** local functions ***/
      function clearAdCancelTimeout() {
        if (adCancelTimeoutId) {
          clearTimeout(adCancelTimeoutId);
          adCancelTimeoutId = null;
        }
      }

      next(null);
    }

    function addSpinnerIcon() {
      dom.addClass(player.el(), 'vjs-vast-ad-loading');
      playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], removeSpinnerIcon);
    }

    function removeSpinnerIcon() {
      //IMPORTANT NOTE: We remove the spinnerIcon asynchronously to give time to the browser to start the video.
      // If we remove it synchronously we see a flash of the content video before the ad starts playing.
      setTimeout(function () {
        dom.removeClass(player.el(), 'vjs-vast-ad-loading');
      }, 100);
    }

  }

  function cancelAds() {
    player.trigger('vast.adsCancel');
    adsCanceled = true;
  }

  function playPrerollAd(callback) {
    async.waterfall([
      getVastResponse,
      playAd
    ], callback);
  }

  function getVastResponse(callback) {
    vast.getVASTResponse(settings.adTagUrl ? settings.adTagUrl() : settings.adTagXML, callback);
  }

  function playAd(vastResponse, callback) {
    //TODO: Find a better way to stop the play. The 'playPrerollWaterfall' ends in an inconsistent situation
    //If the state is not 'preroll?' it means the ads were canceled therefore, we break the waterfall
    if (adsCanceled) {
      return;
    }

    var adIntegrator = isVPAID(vastResponse) ? new VPAIDIntegrator(player, settings) : new VASTIntegrator(player);
    var adFinished = false;

    playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], function (evt) {
      if (evt.type === 'vast.adStart') {
        addAdsLabel();
      }
    });

    playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeAdsLabel);

    if (utilities.isIDevice()) {
      preventManualProgress();
    }

    player.vast.vastResponse = vastResponse;
    logger.debug ("calling adIntegrator.playAd() with vastResponse:", vastResponse);
    player.vast.adUnit = adIntegrator.playAd(vastResponse, callback);

    /*** Local functions ****/
    function addAdsLabel() {
      if (adFinished || player.controlBar.getChild('AdsLabel')) {
        return;
      }

      player.controlBar.addChild('AdsLabel');
    }

    function removeAdsLabel() {
      player.controlBar.removeChild('AdsLabel');
      adFinished = true;
    }

    function preventManualProgress() {
      //IOS video clock is very unreliable and we need a 3 seconds threshold to ensure that the user forwarded/rewound the ad
      var PROGRESS_THRESHOLD = 3;
      var previousTime = 0;
      var skipad_attempts = 0;

      player.on('timeupdate', preventAdSeek);
      player.on('ended', preventAdSkip);

      playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel', 'vast.adError'], stopPreventManualProgress);

      /*** Local functions ***/
      function preventAdSkip() {
        // Ignore ended event if the Ad time was not 'near' the end
        // and revert time to the previous 'valid' time
        if ((player.duration() - previousTime) > PROGRESS_THRESHOLD) {
          player.pause(true); // this reduce the video jitter if the IOS skip button is pressed
          player.play(true); // we need to trigger the play to put the video element back in a valid state
          player.currentTime(previousTime);
        }
      }

      function preventAdSeek() {
        var currentTime = player.currentTime();
        var progressDelta = Math.abs(currentTime - previousTime);
        if (progressDelta > PROGRESS_THRESHOLD) {
          skipad_attempts += 1;
          if (skipad_attempts >= 2) {
            player.pause(true);
          }
          player.currentTime(previousTime);
        } else {
          previousTime = currentTime;
        }
      }

      function stopPreventManualProgress() {
        player.off('timeupdate', preventAdSeek);
        player.off('ended', preventAdSkip);
      }
    }
  }

  function trackAdError(error, vastResponse) {
    player.trigger({type: 'vast.adError', error: error});
    cancelAds();
    logger.error ('AD ERROR:', error.message, error, vastResponse);
  }

  function isVPAID(vastResponse) {
    var i, len;
    var mediaFiles = vastResponse.mediaFiles;
    for (i = 0, len = mediaFiles.length; i < len; i++) {
      if (vastUtil.isVPAID(mediaFiles[i])) {
        return true;
      }
    }
    return false;
  }
};

},{"../ads/vast/VASTClient":13,"../ads/vast/VASTError":14,"../ads/vast/VASTIntegrator":15,"../ads/vast/vastUtil":21,"../ads/vpaid/VPAIDIntegrator":24,"../utils/async":30,"../utils/consoleLogger":31,"../utils/dom":32,"../utils/playerUtils":35,"../utils/utilityFunctions":37}],30:[function(require,module,exports){
//Small subset of async

var utilities = require('./utilityFunctions');

var async = {};

async.setImmediate = function (fn) {
  setTimeout(fn, 0);
};

async.iterator = function (tasks) {
  var makeCallback = function (index) {
    var fn = function () {
      if (tasks.length) {
        tasks[index].apply(null, arguments);
      }
      return fn.next();
    };
    fn.next = function () {
      return (index < tasks.length - 1) ? makeCallback(index + 1) : null;
    };
    return fn;
  };
  return makeCallback(0);
};


async.waterfall = function (tasks, callback) {
  callback = callback || function () { };
  if (!utilities.isArray(tasks)) {
    var err = new Error('First argument to waterfall must be an array of functions');
    return callback(err);
  }
  if (!tasks.length) {
    return callback();
  }
  var wrapIterator = function (iterator) {
    return function (err) {
      if (err) {
        callback.apply(null, arguments);
        callback = function () {
        };
      }
      else {
        var args = Array.prototype.slice.call(arguments, 1);
        var next = iterator.next();
        if (next) {
          args.push(wrapIterator(next));
        }
        else {
          args.push(callback);
        }
        async.setImmediate(function () {
          iterator.apply(null, args);
        });
      }
    };
  };
  wrapIterator(async.iterator(tasks))();
};

async.when = function (condition, callback) {
  if (!utilities.isFunction(callback)) {
    throw new Error("async.when error: missing callback argument");
  }

  var isAllowed = utilities.isFunction(condition) ? condition : function () {
    return !!condition;
  };

  return function () {
    var args = utilities.arrayLikeObjToArray(arguments);
    var next = args.pop();

    if (isAllowed.apply(null, args)) {
      return callback.apply(this, arguments);
    }

    args.unshift(null);
    return next.apply(null, args);
  };
};

module.exports = async;


},{"./utilityFunctions":37}],31:[function(require,module,exports){
/*jshint unused:false */
"use strict";

var _verbosity = 0;
var _prefix = "[videojs-vast-vpaid] ";

function setVerbosity (v)
{
    _verbosity = v;
}

function handleMsg (method, args)
{
    if ((args.length) > 0 && (typeof args[0] === 'string'))
    {
        args[0] = _prefix + args[0];
    }

    if (method.apply)
    {
        method.apply (console, Array.prototype.slice.call(args));
    }
    else
    {
        method (Array.prototype.slice.call(args));
    }
}

function debug ()
{
    if (_verbosity < 4)
    {
        return;
    }

    if (typeof console.debug === 'undefined')
    {
        // IE 10 doesn't have a console.debug() function
        handleMsg (console.log, arguments);
    }
    else
    {
        handleMsg (console.debug, arguments);
    }
}

function log ()
{
    if (_verbosity < 3)
    {
        return;
    }

    handleMsg (console.log, arguments);
}

function info ()
{
    if (_verbosity < 2)
    {
        return;
    }

    handleMsg (console.info, arguments);
}


function warn ()
{
    if (_verbosity < 1)
    {
        return;
    }

    handleMsg (console.warn, arguments);
}

function error ()
{
    handleMsg (console.error, arguments);
}

var consoleLogger = {
    setVerbosity: setVerbosity,
    debug: debug,
    log: log,
    info: info,
    warn: warn,
    error: error
};

if ((typeof (console) === 'undefined') || !console.log)
{
    // no console available; make functions no-op
    consoleLogger.debug = function () {};
    consoleLogger.log = function () {};
    consoleLogger.info = function () {};
    consoleLogger.warn = function () {};
    consoleLogger.error = function () {};
}

module.exports = consoleLogger;

},{}],32:[function(require,module,exports){
'use strict';

var utilities = require('./utilityFunctions');

var dom = {};

dom.isVisible = function isVisible(el) {
  var style = window.getComputedStyle(el);
  return style.visibility !== 'hidden';
};

dom.isHidden = function isHidden(el) {
  var style = window.getComputedStyle(el);
  return style.display === 'none';
};

dom.isShown = function isShown(el) {
  return !dom.isHidden(el);
};

dom.hide = function hide(el) {
  el.__prev_style_display_ = el.style.display;
  el.style.display = 'none';
};

dom.show = function show(el) {
  if (dom.isHidden(el)) {
    el.style.display = el.__prev_style_display_;
  }
  el.__prev_style_display_ = undefined;
};

dom.hasClass = function hasClass(el, cssClass) {
  var classes, i, len;

  if (utilities.isNotEmptyString(cssClass)) {
    if (el.classList) {
      return el.classList.contains(cssClass);
    }

    classes = utilities.isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\s+/) : [];
    cssClass = (cssClass || '');

    for (i = 0, len = classes.length; i < len; i += 1) {
      if (classes[i] === cssClass) {
        return true;
      }
    }
  }
  return false;
};

dom.addClass = function (el, cssClass) {
  var classes;

  if (utilities.isNotEmptyString(cssClass)) {
    if (el.classList) {
      return el.classList.add(cssClass);
    }

    classes = utilities.isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\s+/) : [];
    if (utilities.isString(cssClass) && utilities.isNotEmptyString(cssClass.replace(/\s+/, ''))) {
      classes.push(cssClass);
      el.setAttribute('class', classes.join(' '));
    }
  }
};

dom.removeClass = function (el, cssClass) {
  var classes;

  if (utilities.isNotEmptyString(cssClass)) {
    if (el.classList) {
      return el.classList.remove(cssClass);
    }

    classes = utilities.isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\s+/) : [];
    var newClasses = [];
    var i, len;
    if (utilities.isString(cssClass) && utilities.isNotEmptyString(cssClass.replace(/\s+/, ''))) {

      for (i = 0, len = classes.length; i < len; i += 1) {
        if (cssClass !== classes[i]) {
          newClasses.push(classes[i]);
        }
      }
      el.setAttribute('class', newClasses.join(' '));
    }
  }
};

dom.addEventListener = function addEventListener(el, type, handler) {
  if(utilities.isArray(el)){
    utilities.forEach(el, function(e) {
      dom.addEventListener(e, type, handler);
    });
    return;
  }

  if(utilities.isArray(type)){
    utilities.forEach(type, function(t) {
      dom.addEventListener(el, t, handler);
    });
    return;
  }

  if (el.addEventListener) {
    el.addEventListener(type, handler, false);
  } else if (el.attachEvent) {
    // WARNING!!! this is a very naive implementation !
    // the event object that should be passed to the handler
    // would not be there for IE8
    // we should use "window.event" and then "event.srcElement"
    // instead of "event.target"
    el.attachEvent("on" + type, handler);
  }
};

dom.removeEventListener = function removeEventListener(el, type, handler) {
  if(utilities.isArray(el)){
    utilities.forEach(el, function(e) {
      dom.removeEventListener(e, type, handler);
    });
    return;
  }

  if(utilities.isArray(type)){
    utilities.forEach(type, function(t) {
      dom.removeEventListener(el, t, handler);
    });
    return;
  }

  if (el.removeEventListener) {
    el.removeEventListener(type, handler, false);
  } else if (el.detachEvent) {
    el.detachEvent("on" + type, handler);
  } else {
    el["on" + type] = null;
  }
};

dom.dispatchEvent = function dispatchEvent(el, event) {
  if (el.dispatchEvent) {
    el.dispatchEvent(event);
  } else {
    el.fireEvent("on" + event.eventType, event);
  }
};

dom.isDescendant = function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

dom.getTextContent = function getTextContent(el){
  return el.textContent || el.text;
};

dom.prependChild = function prependChild(parent, child) {
  if(child.parentNode){
    child.parentNode.removeChild(child);
  }
  return parent.insertBefore(child, parent.firstChild);
};

dom.remove = function removeNode(node){
  if(node && node.parentNode){
    node.parentNode.removeChild(node);
  }
};

dom.isDomElement = function isDomElement(o) {
  return o instanceof Element;
};

dom.click = function(el, handler) {
  dom.addEventListener(el, 'click', handler);
};

dom.once = function(el, type, handler) {
  function handlerWrap() {
    handler.apply(null, arguments);
    dom.removeEventListener(el, type, handlerWrap);
  }

  dom.addEventListener(el, type, handlerWrap);
};

//Note: there is no getBoundingClientRect on iPad so we need a fallback
dom.getDimension = function getDimension(element) {
  var rect;

  //On IE9 and below getBoundingClientRect does not work consistently
  if(!utilities.isOldIE() && element.getBoundingClientRect) {
    rect = element.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height
    };
  }

  return {
    width: element.offsetWidth,
    height: element.offsetHeight
  };
};

module.exports = dom;
},{"./utilityFunctions":37}],33:[function(require,module,exports){
'use strict';

var urlUtils = require('./urlUtils');
var utilities = require('./utilityFunctions');

function HttpRequestError(message) {
  this.message = 'HttpRequest Error: ' + (message || '');
}
HttpRequestError.prototype = new Error();
HttpRequestError.prototype.name = "HttpRequest Error";

function HttpRequest(createXhr) {
  if (!utilities.isFunction(createXhr)) {
    throw new HttpRequestError('Missing XMLHttpRequest factory method');
  }

  this.createXhr = createXhr;
}

HttpRequest.prototype.run = function (method, url, callback, options) {
  sanityCheck(url, callback, options);
  var timeout, timeoutId;
  var xhr = this.createXhr();
  options = options || {};
  timeout = utilities.isNumber(options.timeout) ? options.timeout : 0;

  xhr.open(method, urlUtils.urlParts(url).href, true);

  if (options.headers) {
    setHeaders(xhr, options.headers);
  }

  if (options.withCredentials) {
    xhr.withCredentials = true;
  }

  xhr.onload = function () {
    var statusText, response, status;

    /**
     * The only way to do a secure request on IE8 and IE9 is with the XDomainRequest object. Unfortunately, microsoft is
     * so nice that decided that the status property and the 'getAllResponseHeaders' method where not needed so we have to
     * fake them. If the request gets done with an XDomainRequest instance, we will assume that there are no headers and
     * the status will always be 200. If you don't like it, DO NOT USE ANCIENT BROWSERS!!!
     *
     * For mor info go to: https://msdn.microsoft.com/en-us/library/cc288060(v=vs.85).aspx
     */
    if (!xhr.getAllResponseHeaders) {
      xhr.getAllResponseHeaders = function () {
        return null;
      };
    }

    if (!xhr.status) {
      xhr.status = 200;
    }

    if (utilities.isDefined(timeoutId)) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }

    statusText = xhr.statusText || '';

    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
    // response/responseType properties were introduced in XHR Level2 spec (supported by IE10)
    response = ('response' in xhr) ? xhr.response : xhr.responseText;

    // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
    status = xhr.status === 1223 ? 204 : xhr.status;

    callback(
      status,
      response,
      xhr.getAllResponseHeaders(),
      statusText);
  };

  xhr.onerror = requestError;
  xhr.onabort = requestError;

  xhr.send();

  if (timeout > 0) {
    timeoutId = setTimeout(function () {
      xhr && xhr.abort();
    }, timeout);
  }

  function sanityCheck(url, callback, options) {
    if (!utilities.isString(url) || utilities.isEmptyString(url)) {
      throw new HttpRequestError("Invalid url '" + url + "'");
    }

    if (!utilities.isFunction(callback)) {
      throw new HttpRequestError("Invalid handler '" + callback + "' for the http request");
    }

    if (utilities.isDefined(options) && !utilities.isObject(options)) {
      throw new HttpRequestError("Invalid options map '" + options + "'");
    }
  }

  function setHeaders(xhr, headers) {
    utilities.forEach(headers, function (value, key) {
      if (utilities.isDefined(value)) {
        xhr.setRequestHeader(key, value);
      }
    });
  }

  function requestError() {
    callback(-1, null, null, '');
  }
};

HttpRequest.prototype.get = function (url, callback, options) {
  this.run('GET', url, processResponse, options);

  function processResponse(status, response, headersString, statusText) {
    if (isSuccess(status)) {
      callback(null, response, status, headersString, statusText);
    } else {
      callback(new HttpRequestError(statusText), response, status, headersString, statusText);
    }
  }

  function isSuccess(status) {
    return 200 <= status && status < 300;
  }
};

function createXhr() {
  var xhr = new XMLHttpRequest();
  if (!("withCredentials" in xhr)) {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
  }
  return xhr;
}

var http = new HttpRequest(createXhr);

module.exports = {
  http: http,
  HttpRequest: HttpRequest,
  HttpRequestError: HttpRequestError,
  createXhr: createXhr
};

},{"./urlUtils":36,"./utilityFunctions":37}],34:[function(require,module,exports){
'use strict';

module.exports = {
  html5: [
    'text/javascript',
    'text/javascript1.0',
    'text/javascript1.2',
    'text/javascript1.4',
    'text/jscript',
    'application/javascript',
    'application/x-javascript',
    'text/ecmascript',
    'text/ecmascript1.0',
    'text/ecmascript1.2',
    'text/ecmascript1.4',
    'text/livescript',
    'application/ecmascript',
    'application/x-ecmascript',
  ],

  flash: [
    'application/x-shockwave-flash'
  ],
};

},{}],35:[function(require,module,exports){
'use strict';

var dom = require('./dom');
var utilities = require('./utilityFunctions');

var playerUtils = {};

/**
 * Returns an object that captures the portions of player state relevant to
 * video playback. The result of this function can be passed to
 * restorePlayerSnapshot with a player to return the player to the state it
 * was in when this function was invoked.
 * @param {object} player The videojs player object
 */
playerUtils.getPlayerSnapshot = function getPlayerSnapshot(player) {
  var tech = player.el().querySelector('.vjs-tech');

  var snapshot = {
    ended: player.ended(),
    src: player.currentSrc(),
    currentTime: player.currentTime(),
    type: player.currentType(),
    playing: !player.paused(),
    suppressedTracks: getSuppressedTracks(player)
  };

  if (tech) {
    snapshot.nativePoster = tech.poster;
    snapshot.style = tech.getAttribute('style');
  }
  return snapshot;

  /**** Local Functions ****/
  function getSuppressedTracks(player) {
    var tracks = player.remoteTextTracks ? player.remoteTextTracks() : [];

    if (tracks && utilities.isArray(tracks.tracks_)) {
      tracks = tracks.tracks_;
    }

    if (!utilities.isArray(tracks)) {
      tracks = [];
    }

    var suppressedTracks = [];
    tracks.forEach(function (track) {
      suppressedTracks.push({
        track: track,
        mode: track.mode
      });
      track.mode = 'disabled';
    });

    return suppressedTracks;
  }
};

/**
 * Attempts to modify the specified player so that its state is equivalent to
 * the state of the snapshot.
 * @param {object} snapshot - the player state to apply
 */
playerUtils.restorePlayerSnapshot = function restorePlayerSnapshot(player, snapshot) {
  var tech = player.el().querySelector('.vjs-tech');
  var attempts = 20; // the number of remaining attempts to restore the snapshot

  if (snapshot.nativePoster) {
    tech.poster = snapshot.nativePoster;
  }

  if ('style' in snapshot) {
    // overwrite all css style properties to restore state precisely
    tech.setAttribute('style', snapshot.style || '');
  }

  if (hasSrcChanged(player, snapshot)) {

    // on ios7, fiddling with textTracks too early will cause safari to crash
    player.one('contentloadedmetadata', restoreTracks);

    player.one('canplay', tryToResume);
    ensureCanplayEvtGetsFired();

    // if the src changed for ad playback, reset it
    player.src({src: snapshot.src, type: snapshot.type});

    // safari requires a call to `load` to pick up a changed source
    player.load();

  } else {
    restoreTracks();

    if (snapshot.playing) {
      player.play();
    }
  }

  /*** Local Functions ***/

  /**
   * Sometimes firefox does not trigger the 'canplay' evt.
   * This code ensure that it always gets triggered triggered.
   */
  function ensureCanplayEvtGetsFired() {
    var timeoutId = setTimeout(function() {
      player.trigger('canplay');
    }, 1000);

    player.one('canplay', function(){
      clearTimeout(timeoutId);
    });
  }

  /**
   * Determine whether the player needs to be restored to its state
   * before ad playback began. With a custom ad display or burned-in
   * ads, the content player state hasn't been modified and so no
   * restoration is required
   */
  function hasSrcChanged(player, snapshot) {
    if (player.src()) {
      return player.src() !== snapshot.src;
    }
    // the player was configured through source element children
    return player.currentSrc() !== snapshot.src;
  }

  function restoreTracks() {
    var suppressedTracks = snapshot.suppressedTracks;
    suppressedTracks.forEach(function (trackSnapshot) {
      trackSnapshot.track.mode = trackSnapshot.mode;
    });
  }

  /**
   * Determine if the video element has loaded enough of the snapshot source
   * to be ready to apply the rest of the state
   */
  function tryToResume() {

    // if some period of the video is seekable, resume playback
    // otherwise delay a bit and then check again unless we're out of attempts

    if (!playerUtils.isReadyToResume(player) && attempts--) {
      setTimeout(tryToResume, 50);
    } else {
      try {
        if(player.currentTime() !== snapshot.currentTime) {
          if (snapshot.playing) { // if needed restore playing status after seek completes
            player.one('seeked', function() {
              player.play();
            });
          }
          player.currentTime(snapshot.currentTime);

        } else if (snapshot.playing) {
          // if needed and no seek has been performed, restore playing status immediately
          player.play();
        }

      } catch (e) {
        videojs.log.warn('Failed to resume the content after an advertisement', e);
      }
    }
  }
};

playerUtils.isReadyToResume = function (player) {

  if (player.readyState() > 1) {
    // some browsers and media aren't "seekable".
    // readyState greater than 1 allows for seeking without exceptions
    return true;
  }

  if (player.seekable() === undefined) {
    // if the player doesn't expose the seekable time ranges, try to
    // resume playback immediately
    return true;
  }

  if (player.seekable().length > 0) {
    // if some period of the video is seekable, resume playback
    return true;
  }

  return false;
};

/**
 * This function prepares the player to display ads.
 * Adding convenience events like the 'vast.firsPlay' that gets fired when the video is first played
 * and ads the blackPoster to the player to prevent content from being displayed before the preroll ad.
 *
 * @param player
 */
playerUtils.prepareForAds = function (player) {
  var blackPoster = player.addChild('blackPoster');
  var _firstPlay = true;
  var volumeSnapshot;


  monkeyPatchPlayerApi();

  player.on('play', tryToTriggerFirstPlay);
  player.on('vast.reset', resetFirstPlay);//Every time we change the sources we reset the first play.
  player.on('vast.firstPlay', restoreContentVolume);
  player.on('error', hideBlackPoster);//If there is an error in the player we remove the blackposter to show the err msg
  player.on('vast.adStart', hideBlackPoster);
  player.on('vast.adsCancel', hideBlackPoster);
  player.on('vast.adError', hideBlackPoster);
  player.on('vast.adStart', addStyles);
  player.on('vast.adEnd', removeStyles);
  player.on('vast.adsCancel', removeStyles);

  /*** Local Functions ***/

  /**
   What this function does is ugly and horrible and I should think twice before calling myself a good developer. With that said,
   it is the best solution I could find to mute the video until the 'play' event happens (on mobile devices) and the plugin can decide whether
   to play the ad or not.

   We also need this monkeypatch to be able to pause and resume an ad using the player's API

   If you have a better solution please do tell me.
   */
  function monkeyPatchPlayerApi() {

    /**
     * Monkey patch needed to handle firstPlay and resume of playing ad.
     *
     * @param callOrigPlay necessary flag to prevent infinite loop when you are restoring a VAST ad.
     * @returns {player}
     */
    var origPlay = player.play;
    player.play = function (callOrigPlay) {
      var that = this;

      if (isFirstPlay()) {
        firstPlay();
      } else {
        resume(callOrigPlay);
      }

      return this;

      /*** local functions ***/
      function firstPlay() {
        if (!utilities.isIPhone()) {
          volumeSnapshot = saveVolumeSnapshot();
          player.muted(true);
        }

        origPlay.apply(that, arguments);
      }

      function resume(callOrigPlay) {
        if (isAdPlaying() && !callOrigPlay) {
          player.vast.adUnit.resumeAd();
        } else {
          origPlay.apply(that, arguments);
        }
      }
    };


    /**
     * Needed monkey patch to handle pause of playing ad.
     *
     * @param callOrigPlay necessary flag to prevent infinite loop when you are pausing a VAST ad.
     * @returns {player}
     */
    var origPause = player.pause;
    player.pause = function (callOrigPause) {
      if (isAdPlaying() && !callOrigPause) {
        player.vast.adUnit.pauseAd();
      } else {
        origPause.apply(this, arguments);
      }
      return this;
    };


    /**
     * Needed monkey patch to handle paused state of the player when ads are playing.
     *
     * @param callOrigPlay necessary flag to prevent infinite loop when you are pausing a VAST ad.
     * @returns {player}
     */
    var origPaused = player.paused;
    player.paused = function (callOrigPaused) {
      if (isAdPlaying() && !callOrigPaused) {
        return player.vast.adUnit.isPaused();
      }
      return origPaused.apply(this, arguments);
    };
  }

  function isAdPlaying() {
    return player.vast && player.vast.adUnit;
  }

  function tryToTriggerFirstPlay() {
    if (isFirstPlay()) {
      _firstPlay = false;
      player.trigger('vast.firstPlay');
    }
  }

  function resetFirstPlay() {
    _firstPlay = true;
    blackPoster.show();
    restoreContentVolume();
  }

  function isFirstPlay() {
    return _firstPlay;
  }

  function saveVolumeSnapshot() {
    return {
      muted: player.muted(),
      volume: player.volume()
    };
  }

  function restoreContentVolume() {
    if (volumeSnapshot) {
      player.currentTime(0);
      restoreVolumeSnapshot(volumeSnapshot);
      volumeSnapshot = null;
    }
  }

  function restoreVolumeSnapshot(snapshot) {
    if (utilities.isObject(snapshot)) {
      player.volume(snapshot.volume);
      player.muted(snapshot.muted);
    }
  }

  function hideBlackPoster() {
    if (!dom.hasClass(blackPoster.el(), 'vjs-hidden')) {
      blackPoster.hide();
    }
  }

  function addStyles() {
    dom.addClass(player.el(), 'vjs-ad-playing');
  }

  function removeStyles() {
    dom.removeClass(player.el(), 'vjs-ad-playing');
  }
};

/**
 * Remove the poster attribute from the video element tech, if present. When
 * reusing a video element for multiple videos, the poster image will briefly
 * reappear while the new source loads. Removing the attribute ahead of time
 * prevents the poster from showing up between videos.
 * @param {object} player The videojs player object
 */
playerUtils.removeNativePoster = function (player) {
  var tech = player.el().querySelector('.vjs-tech');
  if (tech) {
    tech.removeAttribute('poster');
  }
};

/**
 * Helper function to listen to many events until one of them gets fired, then we
 * execute the handler and unsubscribe all the event listeners;
 *
 * @param player specific player from where to listen for the events
 * @param events array of events
 * @param handler function to execute once one of the events fires
 */
playerUtils.once = function once(player, events, handler) {
  function listener() {
    handler.apply(null, arguments);

    events.forEach(function (event) {
      player.off(event, listener);
    });
  }

  events.forEach(function (event) {
    player.on(event, listener);
  });
};


module.exports = playerUtils;
},{"./dom":32,"./utilityFunctions":37}],36:[function(require,module,exports){
'use strict';

var utilities = require('./utilityFunctions');

/**
 *
 * IMPORTANT NOTE: This function comes from angularJs and was originally called urlResolve
 *                 you can take a look at the original code here https://github.com/angular/angular.js/blob/master/src/ng/urlUtils.js
 *
 * Implementation Notes for non-IE browsers
 * ----------------------------------------
 * Assigning a URL to the href property of an anchor DOM node, even one attached to the DOM,
 * results both in the normalizing and parsing of the URL.  Normalizing means that a relative
 * URL will be resolved into an absolute URL in the context of the application document.
 * Parsing means that the anchor node's host, hostname, protocol, port, pathname and related
 * properties are all populated to reflect the normalized URL.  This approach has wide
 * compatibility - Safari 1+, Mozilla 1+, Opera 7+,e etc.  See
 * http://www.aptana.com/reference/html/api/HTMLAnchorElement.html
 *
 * Implementation Notes for IE
 * ---------------------------
 * IE >= 8 and <= 10 normalizes the URL when assigned to the anchor node similar to the other
 * browsers.  However, the parsed components will not be set if the URL assigned did not specify
 * them.  (e.g. if you assign a.href = "foo", then a.protocol, a.host, etc. will be empty.)  We
 * work around that by performing the parsing in a 2nd step by taking a previously normalized
 * URL (e.g. by assigning to a.href) and assigning it a.href again.  This correctly populates the
 * properties such as protocol, hostname, port, etc.
 *
 * IE7 does not normalize the URL when assigned to an anchor node.  (Apparently, it does, if one
 * uses the inner HTML approach to assign the URL as part of an HTML snippet -
 * http://stackoverflow.com/a/472729)  However, setting img[src] does normalize the URL.
 * Unfortunately, setting img[src] to something like "javascript:foo" on IE throws an exception.
 * Since the primary usage for normalizing URLs is to sanitize such URLs, we can't use that
 * method and IE < 8 is unsupported.
 *
 * References:
 *   http://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement
 *   http://www.aptana.com/reference/html/api/HTMLAnchorElement.html
 *   http://url.spec.whatwg.org/#urlutils
 *   https://github.com/angular/angular.js/pull/2902
 *   http://james.padolsey.com/javascript/parsing-urls-with-the-dom/
 *
 * @kind function
 * @param {string} url The URL to be parsed.
 * @description Normalizes and parses a URL.
 * @returns {object} Returns the normalized URL as a dictionary.
 *
 *   | member name   | Description    |
 *   |---------------|----------------|
 *   | href          | A normalized version of the provided URL if it was not an absolute URL |
 *   | protocol      | The protocol including the trailing colon                              |
 *   | host          | The host and port (if the port is non-default) of the normalizedUrl    |
 *   | search        | The search params, minus the question mark                             |
 *   | hash          | The hash string, minus the hash symbol
 *   | hostname      | The hostname
 *   | port          | The port, without ":"
 *   | pathname      | The pathname, beginning with "/"
 *
 */

var urlParsingNode = document.createElement("a");
/**
 * documentMode is an IE-only property
 * http://msdn.microsoft.com/en-us/library/ie/cc196988(v=vs.85).aspx
 */
var msie = document.documentMode;

function urlParts(url) {
  var href = url;

  if (msie) {
    // Normalize before parse.  Refer Implementation Notes on why this is
    // done in two steps on IE.
    urlParsingNode.setAttribute("href", href);
    href = urlParsingNode.href;
  }

  urlParsingNode.setAttribute('href', href);

  // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
  return {
    href: urlParsingNode.href,
    protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
    host: urlParsingNode.host,
    search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
    hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
    hostname: urlParsingNode.hostname,
    port: utilities.isNotEmptyString(urlParsingNode.port)? urlParsingNode.port: 80,
    pathname: (urlParsingNode.pathname.charAt(0) === '/')
      ? urlParsingNode.pathname
      : '/' + urlParsingNode.pathname
  };
}


/**
 * This function accepts a query string (search part of a url) and returns a dictionary with
 * the different key value pairs
 * @param {string} qs queryString
 */
function queryStringToObj(qs, cond) {
  var pairs, qsObj;

  cond = utilities.isFunction(cond)? cond : function() {
    return true;
  };

  qs = qs.trim().replace(/^\?/, '');
  pairs = qs.split('&');
  qsObj = {};

  utilities.forEach(pairs, function (pair) {
    var keyValue, key, value;
    if (pair !== '') {
      keyValue = pair.split('=');
      key = keyValue[0];
      value = keyValue[1];
      if(cond(key, value)){
        qsObj[key] = value;
      }
    }
  });

  return qsObj;
}

/**
 * This function accepts an object and serializes it into a query string without the leading '?'
 * @param obj
 * @returns {string}
 */
function objToQueryString(obj) {
  var pairs = [];
  utilities.forEach(obj, function (value, key) {
    pairs.push(key + '=' + value);
  });
  return pairs.join('&');
}

module.exports = {
  urlParts: urlParts,
  queryStringToObj: queryStringToObj,
  objToQueryString: objToQueryString
};

},{"./utilityFunctions":37}],37:[function(require,module,exports){
/*jshint unused:false */
"use strict";

var NODE_TYPE_ELEMENT = 1;
var SNAKE_CASE_REGEXP = /[A-Z]/g;
var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i;
/*jslint maxlen: 500 */
var ISO8086_REGEXP = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;


function noop(){ }

function isNull(o) {
  return o === null;
}

function isDefined(o){
  return o !== undefined;
}

function isUndefined(o){
  return o === undefined;
}

function isObject(obj) {
  return typeof obj === 'object';
}

function isFunction(str){
  return typeof str === 'function';
}

function isNumber(num){
  return typeof num === 'number';
}

function isWindow(obj) {
  return utilities.isObject(obj) && obj.window === obj;
}

function isArray(array){
  return Object.prototype.toString.call( array ) === '[object Array]';
}

function isArrayLike(obj) {
  if (obj === null || utilities.isWindow(obj) || utilities.isFunction(obj) || utilities.isUndefined(obj)) {
    return false;
  }

  var length = obj.length;

  if (obj.nodeType === NODE_TYPE_ELEMENT && length) {
    return true;
  }

  return utilities.isString(obj) || utilities.isArray(obj) || length === 0 ||
    typeof length === 'number' && length > 0 && (length - 1) in obj;
}

function isString(str) {
  return typeof str === 'string';
}

function isEmptyString(str) {
  return utilities.isString(str) && str.length === 0;
}

function isNotEmptyString(str) {
  return utilities.isString(str) && str.length !== 0;
}

function arrayLikeObjToArray(args) {
  return Array.prototype.slice.call(args);
}

function forEach(obj, iterator, context) {
  var key, length;
  if (obj) {
    if (isFunction(obj)) {
      for (key in obj) {
        // Need to check if hasOwnProperty exists,
        // as on IE8 the result of querySelectorAll is an object without a hasOwnProperty function
        if (key !== 'prototype' && key !== 'length' && key !== 'name' && (!obj.hasOwnProperty || obj.hasOwnProperty(key))) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else if (isArray(obj)) {
      var isPrimitive = typeof obj !== 'object';
      for (key = 0, length = obj.length; key < length; key++) {
        if (isPrimitive || key in obj) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else if (obj.forEach && obj.forEach !== forEach) {
      obj.forEach(iterator, context, obj);
    } else {
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    }
  }
  return obj;
}

function snake_case(name, separator) {
  separator = separator || '_';
  return name.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
    return (pos ? separator : '') + letter.toLowerCase();
  });
}

function isValidEmail(email){
  if(!utilities.isString(email)){
    return false;
  }

  return EMAIL_REGEXP.test(email.trim());
}

function extend (obj) {
  var arg, i, k;
  for (i = 1; i < arguments.length; i++) {
    arg = arguments[i];
    for (k in arg) {
      if (arg.hasOwnProperty(k)) {
        if(isObject(obj[k]) && !isNull(obj[k]) && isObject(arg[k])){
          obj[k] = extend({}, obj[k], arg[k]);
        }else {
          obj[k] = arg[k];
        }
      }
    }
  }
  return obj;
}

function capitalize(s){
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function decapitalize(s) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

/**
 * This method works the same way array.prototype.map works but if the transformer returns undefine, then
 * it won't be added to the transformed Array.
 */
function transformArray(array, transformer) {
  var transformedArray = [];

  array.forEach(function(item, index){
    var transformedItem = transformer(item, index);
    if(utilities.isDefined(transformedItem)) {
      transformedArray.push(transformedItem);
    }
  });

  return transformedArray;
}

function toFixedDigits(num, digits) {
  var formattedNum = num + '';
  digits = utilities.isNumber(digits) ? digits : 0;
  num = utilities.isNumber(num) ? num : parseInt(num, 10);
  if(utilities.isNumber(num) && !isNaN(num)){
    formattedNum = num + '';
    while(formattedNum.length < digits) {
      formattedNum = '0' + formattedNum;
    }
    return formattedNum;
  }
  return NaN + '';
}

function throttle(callback, delay) {
  var previousCall = new Date().getTime() - (delay + 1);
  return function() {
    var time = new Date().getTime();
    if ((time - previousCall) >= delay) {
      previousCall = time;
      callback.apply(this, arguments);
    }
  };
}

function debounce (callback, wait) {
  var timeoutId;

  return function (){
    if(timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function(){
      callback.apply(this, arguments);
      timeoutId = undefined;
    }, wait);
  };
}

// a function designed to blow up the stack in a naive way
// but it is ok for videoJs children components
function treeSearch(root, getChildren, found){
  var children = getChildren(root);
  for (var i = 0; i < children.length; i++){
    if (found(children[i])) {
      return children[i];
    }
    else {
      var el = treeSearch(children[i], getChildren, found);
      if (el){
        return el;
      }
    }
  }
}

function echoFn(val) {
  return function () {
    return val;
  };
}

//Note: Supported formats come from http://www.w3.org/TR/NOTE-datetime
// and the iso8601 regex comes from http://www.pelagodesign.com/blog/2009/05/20/iso-8601-date-validation-that-doesnt-suck/
function isISO8601(value) {
  if(utilities.isNumber(value)){
    value = value + '';  //we make sure that we are working with strings
  }

  if(!utilities.isString(value)){
    return false;
  }

  return ISO8086_REGEXP.test(value.trim());
}

/**
 * Checks if the Browser is IE9 and below
 * @returns {boolean}
 */
function isOldIE() {
  var version = utilities.getInternetExplorerVersion(navigator);
  if (version === -1) {
    return false;
  }

  return version < 10;
}

/**
 * Returns the version of Internet Explorer or a -1 (indicating the use of another browser).
 * Source: https://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx
 * @returns {number} the version of Internet Explorer or a -1 (indicating the use of another browser).
 */
function getInternetExplorerVersion(navigator) {
  var rv = -1;

  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    var res = re.exec(ua);
    if (res !== null) {
      rv = parseFloat(res[1]);
    }
  }

  return rv;
}

/*** Mobile Utility functions ***/
function isIDevice() {
  return /iP(hone|ad)/.test(utilities._UA);
}

function isMobile() {
  return /iP(hone|ad|od)|Android|Windows Phone/.test(utilities._UA);
}

function isIPhone() {
  return /iP(hone|od)/.test(utilities._UA);
}

function isAndroid() {
  return /Android/.test(utilities._UA);
}

var utilities = {
  _UA: navigator.userAgent,
  noop: noop,
  isNull: isNull,
  isDefined: isDefined,
  isUndefined: isUndefined,
  isObject: isObject,
  isFunction: isFunction,
  isNumber: isNumber,
  isWindow: isWindow,
  isArray: isArray,
  isArrayLike: isArrayLike,
  isString: isString,
  isEmptyString: isEmptyString,
  isNotEmptyString: isNotEmptyString,
  arrayLikeObjToArray: arrayLikeObjToArray,
  forEach: forEach,
  snake_case: snake_case,
  isValidEmail: isValidEmail,
  extend: extend,
  capitalize: capitalize,
  decapitalize: decapitalize,
  transformArray: transformArray,
  toFixedDigits: toFixedDigits,
  throttle: throttle,
  debounce: debounce,
  treeSearch: treeSearch,
  echoFn: echoFn,
  isISO8601: isISO8601,
  isOldIE: isOldIE,
  getInternetExplorerVersion: getInternetExplorerVersion,
  isIDevice: isIDevice,
  isMobile: isMobile,
  isIPhone: isIPhone,
  isAndroid: isAndroid
};

module.exports = utilities;

},{}],38:[function(require,module,exports){
'use strict';

var utilities = require('./utilityFunctions');

var xml = {};

xml.strToXMLDoc = function strToXMLDoc(stringContainingXMLSource){
  //IE 8
  if(typeof window.DOMParser === 'undefined'){
    var xmlDocument = new ActiveXObject('Microsoft.XMLDOM');
    xmlDocument.async = false;
    xmlDocument.loadXML(stringContainingXMLSource);
    return xmlDocument;
  }

  return parseString(stringContainingXMLSource);

  function parseString(stringContainingXMLSource){
    var parser = new DOMParser();
    var parsedDocument;

    //Note: This try catch is to deal with the fact that on IE parser.parseFromString does throw an error but the rest of the browsers don't.
    try {
      parsedDocument = parser.parseFromString(stringContainingXMLSource, "application/xml");

      if(isParseError(parsedDocument) || utilities.isEmptyString(stringContainingXMLSource)){
        throw new Error();
      }
    }catch(e){
      throw new Error("xml.strToXMLDOC: Error parsing the string: '" + stringContainingXMLSource + "'");
    }

    return parsedDocument;
  }

  function isParseError(parsedDocument) {
    try { // parser and parsererrorNS could be cached on startup for efficiency
      var parser = new DOMParser(),
        erroneousParse = parser.parseFromString('INVALID', 'text/xml'),
        parsererrorNS = erroneousParse.getElementsByTagName("parsererror")[0].namespaceURI;

      if (parsererrorNS === 'http://www.w3.org/1999/xhtml') {
        // In PhantomJS the parseerror element doesn't seem to have a special namespace, so we are just guessing here :(
        return parsedDocument.getElementsByTagName("parsererror").length > 0;
      }

      return parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0;
    } catch (e) {
      //Note on IE parseString throws an error by itself and it will never reach this code. Because it will have failed before
    }
  }
};

xml.parseText = function parseText (sValue) {
  if (/^\s*$/.test(sValue)) { return null; }
  if (/^(?:true|false)$/i.test(sValue)) { return sValue.toLowerCase() === "true"; }
  if (isFinite(sValue)) { return parseFloat(sValue); }
  if (utilities.isISO8601(sValue)) { return new Date(sValue); }
  return sValue.trim();
};

xml.JXONTree = function JXONTree (oXMLParent) {
  var parseText = xml.parseText;

  //The document object is an especial object that it may miss some functions or attrs depending on the browser.
  //To prevent this problem with create the JXONTree using the root childNode which is a fully fleshed node on all supported
  //browsers.
  if(oXMLParent.documentElement){
    return new xml.JXONTree(oXMLParent.documentElement);
  }

  if (oXMLParent.hasChildNodes()) {
    var sCollectedTxt = "";
    for (var oNode, sProp, vContent, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
      oNode = oXMLParent.childNodes.item(nItem);
      /*jshint bitwise: false*/
      if ((oNode.nodeType - 1 | 1) === 3) { sCollectedTxt += oNode.nodeType === 3 ? oNode.nodeValue.trim() : oNode.nodeValue; }
      else if (oNode.nodeType === 1 && !oNode.prefix) {
        sProp = utilities.decapitalize(oNode.nodeName);
        vContent = new xml.JXONTree(oNode);
        if (this.hasOwnProperty(sProp)) {
          if (this[sProp].constructor !== Array) { this[sProp] = [this[sProp]]; }
          this[sProp].push(vContent);
        } else { this[sProp] = vContent; }
      }
    }
    if (sCollectedTxt) { this.keyValue = parseText(sCollectedTxt); }
  }

  //IE8 Stupid fix
  var hasAttr = typeof oXMLParent.hasAttributes === 'undefined'? oXMLParent.attributes.length > 0: oXMLParent.hasAttributes();
  if (hasAttr) {
    var oAttrib;
    for (var nAttrib = 0; nAttrib < oXMLParent.attributes.length; nAttrib++) {
      oAttrib = oXMLParent.attributes.item(nAttrib);
      this["@" + utilities.decapitalize(oAttrib.name)] = parseText(oAttrib.value.trim());
    }
  }
};

xml.JXONTree.prototype.attr = function(attr) {
  return this['@' + utilities.decapitalize(attr)];
};

xml.toJXONTree = function toJXONTree(xmlString){
  var xmlDoc = xml.strToXMLDoc(xmlString);
  return new xml.JXONTree(xmlDoc);
};

/**
 * Helper function to extract the keyvalue of a JXONTree obj
 *
 * @param xmlObj {JXONTree}
 * return the key value or undefined;
 */
xml.keyValue = function getKeyValue(xmlObj) {
  if(xmlObj){
    return xmlObj.keyValue;
  }
  return undefined;
};

xml.attr = function getAttrValue(xmlObj, attr) {
  if(xmlObj) {
    return xmlObj['@' + utilities.decapitalize(attr)];
  }
  return undefined;
};

xml.encode = function encodeXML(str) {
  if (!utilities.isString(str)) return undefined;

  return str.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
};

xml.decode = function decodeXML(str) {
  if (!utilities.isString(str)) return undefined;

  return str.replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&amp;/g, '&');
};

module.exports = xml;

},{"./utilityFunctions":37}],39:[function(require,module,exports){
'use strict';

require('./plugin/components/ads-label_5');
require('./plugin/components/black-poster_5');

var videoJsVAST = require('./plugin/videojs.vast.vpaid');

videojs.plugin('vastClient', videoJsVAST);

},{"./plugin/components/ads-label_5":26,"./plugin/components/black-poster_5":28,"./plugin/videojs.vast.vpaid":29}]},{},[39])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvc3Vic2NyaWJlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvVlBBSURIVE1MNUNsaWVudC9qcy91dGlscy5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0FkLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvQ29tcGFuaW9uLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvQ3JlYXRpdmUuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9JbkxpbmUuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9MaW5lYXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9NZWRpYUZpbGUuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9UcmFja2luZ0V2ZW50LmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVENsaWVudC5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZBU1RFcnJvci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZBU1RJbnRlZ3JhdG9yLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVFJlc3BvbnNlLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVFRyYWNrZXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WaWRlb0NsaWNrcy5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1dyYXBwZXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9wYXJzZXJzLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvdmFzdFV0aWwuanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURBZFVuaXRXcmFwcGVyLmpzIiwic3JjL3NjcmlwdHMvYWRzL3ZwYWlkL1ZQQUlESFRNTDVUZWNoLmpzIiwic3JjL3NjcmlwdHMvYWRzL3ZwYWlkL1ZQQUlESW50ZWdyYXRvci5qcyIsInNyYy9zY3JpcHRzL3BsdWdpbi9jb21wb25lbnRzL2Fkcy1sYWJlbC5qcyIsInNyYy9zY3JpcHRzL3BsdWdpbi9jb21wb25lbnRzL2Fkcy1sYWJlbF81LmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYmxhY2stcG9zdGVyLmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYmxhY2stcG9zdGVyXzUuanMiLCJzcmMvc2NyaXB0cy9wbHVnaW4vdmlkZW9qcy52YXN0LnZwYWlkLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvYXN5bmMuanMiLCJzcmMvc2NyaXB0cy91dGlscy9jb25zb2xlTG9nZ2VyLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvZG9tLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvaHR0cC5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL21pbWV0eXBlcy5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL3BsYXllclV0aWxzLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvdXJsVXRpbHMuanMiLCJzcmMvc2NyaXB0cy91dGlscy91dGlsaXR5RnVuY3Rpb25zLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMveG1sLmpzIiwic3JjL3NjcmlwdHMvdmlkZW9qc181LnZhc3QudnBhaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL1dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdlVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTUVUSE9EUyA9IFtcbiAgICAnaGFuZHNoYWtlVmVyc2lvbicsXG4gICAgJ2luaXRBZCcsXG4gICAgJ3N0YXJ0QWQnLFxuICAgICdzdG9wQWQnLFxuICAgICdza2lwQWQnLCAvLyBWUEFJRCAyLjAgbmV3IG1ldGhvZFxuICAgICdyZXNpemVBZCcsXG4gICAgJ3BhdXNlQWQnLFxuICAgICdyZXN1bWVBZCcsXG4gICAgJ2V4cGFuZEFkJyxcbiAgICAnY29sbGFwc2VBZCcsXG4gICAgJ3N1YnNjcmliZScsXG4gICAgJ3Vuc3Vic2NyaWJlJ1xuXTtcblxudmFyIEVWRU5UUyA9IFtcbiAgICAnQWRMb2FkZWQnLFxuICAgICdBZFN0YXJ0ZWQnLFxuICAgICdBZFN0b3BwZWQnLFxuICAgICdBZFNraXBwZWQnLFxuICAgICdBZFNraXBwYWJsZVN0YXRlQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZFNpemVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgJ0FkTGluZWFyQ2hhbmdlJyxcbiAgICAnQWREdXJhdGlvbkNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRFeHBhbmRlZENoYW5nZScsXG4gICAgJ0FkUmVtYWluaW5nVGltZUNoYW5nZScsIC8vIFtEZXByZWNhdGVkIGluIDIuMF0gYnV0IHdpbGwgYmUgc3RpbGwgZmlyZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgJ0FkVm9sdW1lQ2hhbmdlJyxcbiAgICAnQWRJbXByZXNzaW9uJyxcbiAgICAnQWRWaWRlb1N0YXJ0JyxcbiAgICAnQWRWaWRlb0ZpcnN0UXVhcnRpbGUnLFxuICAgICdBZFZpZGVvTWlkcG9pbnQnLFxuICAgICdBZFZpZGVvVGhpcmRRdWFydGlsZScsXG4gICAgJ0FkVmlkZW9Db21wbGV0ZScsXG4gICAgJ0FkQ2xpY2tUaHJ1JyxcbiAgICAnQWRJbnRlcmFjdGlvbicsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRVc2VyQWNjZXB0SW52aXRhdGlvbicsXG4gICAgJ0FkVXNlck1pbmltaXplJyxcbiAgICAnQWRVc2VyQ2xvc2UnLFxuICAgICdBZFBhdXNlZCcsXG4gICAgJ0FkUGxheWluZycsXG4gICAgJ0FkTG9nJyxcbiAgICAnQWRFcnJvcidcbl07XG5cbnZhciBHRVRURVJTID0gW1xuICAgICdnZXRBZExpbmVhcicsXG4gICAgJ2dldEFkV2lkdGgnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZEhlaWdodCcsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkRXhwYW5kZWQnLFxuICAgICdnZXRBZFNraXBwYWJsZVN0YXRlJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRSZW1haW5pbmdUaW1lJyxcbiAgICAnZ2V0QWREdXJhdGlvbicsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkVm9sdW1lJyxcbiAgICAnZ2V0QWRDb21wYW5pb25zJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRJY29ucycgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbl07XG5cbnZhciBTRVRURVJTID0gW1xuICAgICdzZXRBZFZvbHVtZSdcbl07XG5cblxuLyoqXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBnbG9iYWwgbWVtYmVyLiBUaGUgY2FsbGJhY2sgdXNlIG5vZGVqcyBlcnJvci1maXJzdCBjYWxsYmFjayBzdHlsZVxuICogQGNhbGxiYWNrIE5vZGVTdHlsZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfVxuICogQHBhcmFtIHt1bmRlZmluZWR8b2JqZWN0fVxuICovXG5cblxuLyoqXG4gKiBJVlBBSURBZFVuaXRcbiAqXG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY3JlYXRpdmVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IHZpZGVvXG4gKi9cbmZ1bmN0aW9uIElWUEFJREFkVW5pdChjcmVhdGl2ZSwgZWwsIHZpZGVvKSB7fVxuXG5cbi8qKlxuICogaGFuZHNoYWtlVmVyc2lvblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBWUEFJRFZlcnNpb25cbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuaGFuZHNoYWtlVmVyc2lvbiA9IGZ1bmN0aW9uIChWUEFJRFZlcnNpb24sIGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBpbml0QWRcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAqIEBwYXJhbSB7c3RyaW5nfSB2aWV3TW9kZSBjYW4gYmUgJ25vcm1hbCcsICd0aHVtYm5haWwnIG9yICdmdWxsc2NyZWVuJ1xuICogQHBhcmFtIHtudW1iZXJ9IGRlc2lyZWRCaXRyYXRlIGluZGljYXRlcyB0aGUgZGVzaXJlZCBiaXRyYXRlIGluIGticHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY3JlYXRpdmVEYXRhXSB1c2VkIGZvciBhZGRpdGlvbmFsIGluaXRpYWxpemF0aW9uIGRhdGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBbZW52aXJvbm1lbnRWYXJzXSB1c2VkIGZvciBwYXNzaW5nIGltcGxlbWVudGF0aW9uLXNwZWNpZmljIG9mIGpzIHZlcnNpb25cbiAqIEBwYXJhbSB7Tm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuaW5pdEFkID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEsIGVudmlyb25tZW50VmFycywgY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHN0YXJ0QWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnN0YXJ0QWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc3RvcEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zdG9wQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc2tpcEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5za2lwQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogcmVzaXplQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnJlc2l6ZUFkID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBwYXVzZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5wYXVzZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHJlc3VtZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5yZXN1bWVBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBleHBhbmRBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZXhwYW5kQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogY29sbGFwc2VBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuY29sbGFwc2VBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBzdWJzY3JpYmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGhhbmRsZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIsIGNvbnRleHQpIHt9O1xuXG4vKipcbiAqIHN0YXJ0QWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyKSB7fTtcblxuXG5cbi8qKlxuICogZ2V0QWRMaW5lYXJcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkTGluZWFyID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkV2lkdGhcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkV2lkdGggPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRIZWlnaHRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkSGVpZ2h0ID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkRXhwYW5kZWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkRXhwYW5kZWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRTa2lwcGFibGVTdGF0ZVxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRTa2lwcGFibGVTdGF0ZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZFJlbWFpbmluZ1RpbWVcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkUmVtYWluaW5nVGltZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZER1cmF0aW9uXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZER1cmF0aW9uID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZFZvbHVtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZENvbXBhbmlvbnNcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkQ29tcGFuaW9ucyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZEljb25zXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZEljb25zID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHNldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZVxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zZXRBZFZvbHVtZSA9IGZ1bmN0aW9uKHZvbHVtZSwgY2FsbGJhY2spIHt9O1xuXG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdNRVRIT0RTJywgTUVUSE9EUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdHRVRURVJTJywgR0VUVEVSUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdTRVRURVJTJywgU0VUVEVSUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdFVkVOVFMnLCAgRVZFTlRTKTtcblxuXG52YXIgVlBBSUQxX01FVEhPRFMgPSBNRVRIT0RTLmZpbHRlcihmdW5jdGlvbihtZXRob2QpIHtcbiAgICByZXR1cm4gWydza2lwQWQnXS5pbmRleE9mKG1ldGhvZCkgPT09IC0xO1xufSk7XG5cbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ2NoZWNrVlBBSURJbnRlcmZhY2UnLCBmdW5jdGlvbiBjaGVja1ZQQUlESW50ZXJmYWNlIChjcmVhdGl2ZSkge1xuICAgIHZhciByZXN1bHQgPSBWUEFJRDFfTUVUSE9EUy5ldmVyeShmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjcmVhdGl2ZVtrZXldID09PSAnZnVuY3Rpb24nO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJVlBBSURBZFVuaXQ7XG5cbmZ1bmN0aW9uIGFkZFN0YXRpY1RvSW50ZXJmYWNlKEludGVyZmFjZSwgbmFtZSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSW50ZXJmYWNlLCBuYW1lLCB7XG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG59XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIElWUEFJREFkVW5pdCA9IHJlcXVpcmUoJy4vSVZQQUlEQWRVbml0Jyk7XG52YXIgU3Vic2NyaWJlciA9IHJlcXVpcmUoJy4vc3Vic2NyaWJlcicpO1xudmFyIGNoZWNrVlBBSURJbnRlcmZhY2UgPSBJVlBBSURBZFVuaXQuY2hlY2tWUEFJREludGVyZmFjZTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBNRVRIT0RTID0gSVZQQUlEQWRVbml0Lk1FVEhPRFM7XG52YXIgRVJST1IgPSAnQWRFcnJvcic7XG52YXIgQURfQ0xJQ0sgPSAnQWRDbGlja1RocnUnO1xudmFyIEZJTFRFUkVEX0VWRU5UUyA9IElWUEFJREFkVW5pdC5FVkVOVFMuZmlsdGVyKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBldmVudCAhPSBBRF9DTElDSztcbn0pO1xuXG4vKipcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGdsb2JhbCBtZW1iZXIuIFRoZSBjYWxsYmFjayB1c2Ugbm9kZWpzIGVycm9yLWZpcnN0IGNhbGxiYWNrIHN0eWxlXG4gKiBAY2FsbGJhY2sgTm9kZVN0eWxlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9XG4gKiBAcGFyYW0ge3VuZGVmaW5lZHxvYmplY3R9XG4gKi9cblxuXG4vKipcbiAqIFZQQUlEQWRVbml0XG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0gVlBBSURDcmVhdGl2ZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2VsXSB0aGlzIHdpbGwgYmUgdXNlZCBpbiBpbml0QWQgZW52aXJvbm1lbnRWYXJzLnNsb3QgaWYgZGVmaW5lZFxuICogQHBhcmFtIHtIVE1MVmlkZW9FbGVtZW50fSBbdmlkZW9dIHRoaXMgd2lsbCBiZSB1c2VkIGluIGluaXRBZCBlbnZpcm9ubWVudFZhcnMudmlkZW9TbG90IGlmIGRlZmluZWRcbiAqL1xuZnVuY3Rpb24gVlBBSURBZFVuaXQoVlBBSURDcmVhdGl2ZSwgZWwsIHZpZGVvLCBpZnJhbWUpIHtcbiAgICB0aGlzLl9pc1ZhbGlkID0gY2hlY2tWUEFJREludGVyZmFjZShWUEFJRENyZWF0aXZlKTtcbiAgICBpZiAodGhpcy5faXNWYWxpZCkge1xuICAgICAgICB0aGlzLl9jcmVhdGl2ZSA9IFZQQUlEQ3JlYXRpdmU7XG4gICAgICAgIHRoaXMuX2VsID0gZWw7XG4gICAgICAgIHRoaXMuX3ZpZGVvRWwgPSB2aWRlbztcbiAgICAgICAgdGhpcy5faWZyYW1lID0gaWZyYW1lO1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVycyA9IG5ldyBTdWJzY3JpYmVyKCk7XG4gICAgICAgIHV0aWxzLnNldEZ1bGxTaXplU3R5bGUoZWwpO1xuICAgICAgICAkYWRkRXZlbnRzU3Vic2NyaWJlcnMuY2FsbCh0aGlzKTtcbiAgICB9XG59XG5cblZQQUlEQWRVbml0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSVZQQUlEQWRVbml0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogaXNWYWxpZFZQQUlEQWQgd2lsbCByZXR1cm4gaWYgdGhlIFZQQUlEQ3JlYXRpdmUgcGFzc2VkIGluIGNvbnN0cnVjdG9yIGlzIHZhbGlkIG9yIG5vdFxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS5pc1ZhbGlkVlBBSURBZCA9IGZ1bmN0aW9uIGlzVmFsaWRWUEFJREFkKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xufTtcblxuSVZQQUlEQWRVbml0Lk1FVEhPRFMuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAvL05PVEU6IHRoaXMgbWV0aG9kcyBhcmd1bWVudHMgb3JkZXIgYXJlIGltcGxlbWVudGVkIGRpZmZlcmVudGx5IGZyb20gdGhlIHNwZWNcbiAgICB2YXIgaWdub3JlcyA9IFtcbiAgICAgICAgJ3N1YnNjcmliZScsXG4gICAgICAgICd1bnN1YnNjcmliZScsXG4gICAgICAgICdpbml0QWQnXG4gICAgXTtcblxuICAgIGlmIChpZ25vcmVzLmluZGV4T2YobWV0aG9kKSAhPT0gLTEpIHJldHVybjtcblxuICAgIFZQQUlEQWRVbml0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJpYXR5ID0gSVZQQUlEQWRVbml0LnByb3RvdHlwZVttZXRob2RdLmxlbmd0aDtcbiAgICAgICAgLy8gVE9ETyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50c1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkL3dpa2kvT3B0aW1pemF0aW9uLWtpbGxlcnMjMzItbGVha2luZy1hcmd1bWVudHNcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSAoYXJpYXR5ID09PSBhcmdzLmxlbmd0aCkgPyBhcmdzLnBvcCgpIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCwgZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9jcmVhdGl2ZVttZXRob2RdLmFwcGx5KHRoaXMuX2NyZWF0aXZlLCBhcmdzKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgMCk7XG4gICAgfTtcbn0pO1xuXG5cbi8qKlxuICogaW5pdEFkIGNvbmNyZWF0ZSBpbXBsZW1lbnRhdGlvblxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICogQHBhcmFtIHtzdHJpbmd9IHZpZXdNb2RlIGNhbiBiZSAnbm9ybWFsJywgJ3RodW1ibmFpbCcgb3IgJ2Z1bGxzY3JlZW4nXG4gKiBAcGFyYW0ge251bWJlcn0gZGVzaXJlZEJpdHJhdGUgaW5kaWNhdGVzIHRoZSBkZXNpcmVkIGJpdHJhdGUgaW4ga2Jwc1xuICogQHBhcmFtIHtvYmplY3R9IFtjcmVhdGl2ZURhdGFdIHVzZWQgZm9yIGFkZGl0aW9uYWwgaW5pdGlhbGl6YXRpb24gZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IFtlbnZpcm9ubWVudFZhcnNdIHVzZWQgZm9yIHBhc3NpbmcgaW1wbGVtZW50YXRpb24tc3BlY2lmaWMgb2YganMgdmVyc2lvbiwgaWYgZWwgJiB2aWRlbyB3YXMgdXNlZCBpbiBjb25zdHJ1Y3RvciBzbG90ICYgdmlkZW9TbG90IHdpbGwgYmUgYWRkZWQgdG8gdGhlIG9iamVjdFxuICogQHBhcmFtIHtOb2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLmluaXRBZCA9IGZ1bmN0aW9uIGluaXRBZCh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSwgZW52aXJvbm1lbnRWYXJzLCBjYWxsYmFjaykge1xuICAgIGNyZWF0aXZlRGF0YSA9IGNyZWF0aXZlRGF0YSB8fCB7fTtcbiAgICBlbnZpcm9ubWVudFZhcnMgPSB1dGlscy5leHRlbmQoe1xuICAgICAgICBzbG90OiB0aGlzLl9lbCxcbiAgICAgICAgdmlkZW9TbG90OiB0aGlzLl92aWRlb0VsXG4gICAgfSwgZW52aXJvbm1lbnRWYXJzIHx8IHt9KTtcblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGl2ZS5pbml0QWQod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEsIGVudmlyb25tZW50VmFycyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgdGhpcy5fc3Vic2NyaWJlcnMsIGVycm9yKTtcbiAgICB9LmJpbmQodGhpcyksIDApO1xufTtcblxuLyoqXG4gKiBzdWJzY3JpYmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGhhbmRsZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnQsIGhhbmRsZXIsIGNvbnRleHQpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy5zdWJzY3JpYmUoaGFuZGxlciwgZXZlbnQsIGNvbnRleHQpO1xufTtcblxuXG4vKipcbiAqIHVuc3Vic2NyaWJlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBoYW5kbGVyXG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMudW5zdWJzY3JpYmUoaGFuZGxlciwgZXZlbnQpO1xufTtcblxuLy9hbGlhc1xuVlBBSURBZFVuaXQucHJvdG90eXBlLm9uID0gVlBBSURBZFVuaXQucHJvdG90eXBlLnN1YnNjcmliZTtcblZQQUlEQWRVbml0LnByb3RvdHlwZS5vZmYgPSBWUEFJREFkVW5pdC5wcm90b3R5cGUudW5zdWJzY3JpYmU7XG5cbklWUEFJREFkVW5pdC5HRVRURVJTLmZvckVhY2goZnVuY3Rpb24oZ2V0dGVyKSB7XG4gICAgVlBBSURBZFVuaXQucHJvdG90eXBlW2dldHRlcl0gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIHZhciByZXN1bHQsIGVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fY3JlYXRpdmVbZ2V0dGVyXSgpO1xuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvciwgcmVzdWx0KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAwKTtcbiAgICB9O1xufSk7XG5cbi8qKlxuICogc2V0QWRWb2x1bWVcbiAqXG4gKiBAcGFyYW0gdm9sdW1lXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuc2V0QWRWb2x1bWUgPSBmdW5jdGlvbiBzZXRBZFZvbHVtZSh2b2x1bWUsIGNhbGxiYWNrKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIHJlc3VsdCwgZXJyb3IgPSBudWxsO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRpdmUuc2V0QWRWb2x1bWUodm9sdW1lKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0aXZlLmdldEFkVm9sdW1lKCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgZXJyb3IgPSB1dGlscy52YWxpZGF0ZShyZXN1bHQgPT09IHZvbHVtZSwgJ2ZhaWxlZCB0byBhcHBseSB2b2x1bWU6ICcgKyB2b2x1bWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgdGhpcy5fc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpO1xuICAgIH0uYmluZCh0aGlzKSwgMCk7XG59O1xuXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuX2Rlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHRoaXMuc3RvcEFkKCk7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMudW5zdWJzY3JpYmVBbGwoKTtcbn07XG5cbmZ1bmN0aW9uICRhZGRFdmVudHNTdWJzY3JpYmVycygpIHtcbiAgICAvLyBzb21lIGFkcyBpbXBsZW1lbnRcbiAgICAvLyBzbyB0aGV5IG9ubHkgaGFuZGxlIG9uZSBzdWJzY3JpYmVyXG4gICAgLy8gdG8gaGFuZGxlIHRoaXMgd2UgY3JlYXRlIG91ciBvbmVcbiAgICBGSUxURVJFRF9FVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRpdmUuc3Vic2NyaWJlKCR0cmlnZ2VyLmJpbmQodGhpcywgZXZlbnQpLCBldmVudCk7XG4gICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIC8vIG1hcCB0aGUgY2xpY2sgZXZlbnQgdG8gYmUgYW4gb2JqZWN0IGluc3RlYWQgb2YgZGVwZW5kaW5nIG9mIHRoZSBvcmRlciBvZiB0aGUgYXJndW1lbnRzXG4gICAgLy8gYW5kIHRvIGJlIGNvbnNpc3RlbnQgd2l0aCB0aGUgZmxhc2hcbiAgICB0aGlzLl9jcmVhdGl2ZS5zdWJzY3JpYmUoJGNsaWNrVGhydUhvb2suYmluZCh0aGlzKSwgQURfQ0xJQ0spO1xuXG4gICAgLy8gYmVjYXVzZSB3ZSBhcmUgYWRkaW5nIHRoZSBlbGVtZW50IGluc2lkZSB0aGUgaWZyYW1lXG4gICAgLy8gdGhlIHVzZXIgaXMgbm90IGFibGUgdG8gY2xpY2sgaW4gdGhlIHZpZGVvXG4gICAgaWYgKHRoaXMuX3ZpZGVvRWwpIHtcbiAgICAgICAgdmFyIGRvY3VtZW50RWxlbWVudCA9IHRoaXMuX2lmcmFtZS5jb250ZW50RG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICB2YXIgdmlkZW9FbCA9IHRoaXMuX3ZpZGVvRWw7XG4gICAgICAgIGRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgdmlkZW9FbC5jbGljaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uICRjbGlja1RocnVIb29rKHVybCwgaWQsIHBsYXllckhhbmRsZXMpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy50cmlnZ2VyU3luYyhBRF9DTElDSywge3VybDogdXJsLCBpZDogaWQsIHBsYXllckhhbmRsZXM6IHBsYXllckhhbmRsZXN9KTtcbn1cblxuZnVuY3Rpb24gJHRyaWdnZXIoZXZlbnQpIHtcbiAgICAvLyBUT0RPIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzMyLWxlYWtpbmctYXJndW1lbnRzXG4gICAgdGhpcy5fc3Vic2NyaWJlcnMudHJpZ2dlcihldmVudCwgQXJyYXkucHJvdG90eXBlLnNsaWNlKGFyZ3VtZW50cywgMSkpO1xufVxuXG5mdW5jdGlvbiBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHN1YnNjcmliZXJzLCBlcnJvciwgcmVzdWx0KSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCByZXN1bHQpO1xuICAgIH0gZWxzZSBpZiAoZXJyb3IpIHtcbiAgICAgICAgc3Vic2NyaWJlcnMudHJpZ2dlcihFUlJPUiwgZXJyb3IpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREFkVW5pdDtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgdW5pcXVlID0gdXRpbHMudW5pcXVlKCd2cGFpZElmcmFtZScpO1xudmFyIFZQQUlEQWRVbml0ID0gcmVxdWlyZSgnLi9WUEFJREFkVW5pdCcpO1xuXG52YXIgZGVmYXVsdFRlbXBsYXRlID0gJzwhRE9DVFlQRSBodG1sPicgK1xuICAgICc8aHRtbCBsYW5nPVwiZW5cIj4nICtcbiAgICAnPGhlYWQ+PG1ldGEgY2hhcnNldD1cIlVURi04XCI+PC9oZWFkPicgK1xuICAgICc8Ym9keSBzdHlsZT1cIm1hcmdpbjowO3BhZGRpbmc6MFwiPjxkaXYgY2xhc3M9XCJhZC1lbGVtZW50XCI+PC9kaXY+JyArXG4gICAgJzxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cInt7aWZyYW1lVVJMX0pTfX1cIj48L3NjcmlwdD4nICtcbiAgICAnPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+JyArXG4gICAgJ3dpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoXFwne1wiZXZlbnRcIjogXCJyZWFkeVwiLCBcImlkXCI6IFwie3tpZnJhbWVJRH19XCJ9XFwnLCBcXCd7e29yaWdpbn19XFwnKTsnICtcbiAgICAnPC9zY3JpcHQ+JyArXG4gICAgJzwvYm9keT4nICtcbiAgICAnPC9odG1sPic7XG5cbnZhciBBRF9TVE9QUEVEID0gJ0FkU3RvcHBlZCc7XG5cbi8qKlxuICogVGhpcyBjYWxsYmFjayBpcyBkaXNwbGF5ZWQgYXMgZ2xvYmFsIG1lbWJlci4gVGhlIGNhbGxiYWNrIHVzZSBub2RlanMgZXJyb3ItZmlyc3QgY2FsbGJhY2sgc3R5bGVcbiAqIEBjYWxsYmFjayBOb2RlU3R5bGVDYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd8bnVsbH1cbiAqIEBwYXJhbSB7dW5kZWZpbmVkfG9iamVjdH1cbiAqL1xuXG4vKipcbiAqIFZQQUlESFRNTDVDbGllbnRcbiAqIEBjbGFzc1xuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIHRoYXQgd2lsbCBjb250YWluIHRoZSBpZnJhbWUgdG8gbG9hZCBhZFVuaXQgYW5kIGEgZWwgdG8gYWRkIHRvIGFkVW5pdCBzbG90XG4gKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IHZpZGVvIGRlZmF1bHQgdmlkZW8gZWxlbWVudCB0byBiZSB1c2VkIGJ5IGFkVW5pdFxuICogQHBhcmFtIHtvYmplY3R9IFt0ZW1wbGF0ZUNvbmZpZ10gdGVtcGxhdGU6IGh0bWwgdGVtcGxhdGUgdG8gYmUgdXNlZCBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0LCBleHRyYU9wdGlvbnM6IHRvIGJlIHVzZWQgd2hlbiByZW5kZXJpbmcgdGhlIHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3ZwYWlkT3B0aW9uc10gdGltZW91dDogd2hlbiBsb2FkaW5nIGFkVW5pdFxuICovXG5mdW5jdGlvbiBWUEFJREhUTUw1Q2xpZW50KGVsLCB2aWRlbywgdGVtcGxhdGVDb25maWcsIHZwYWlkT3B0aW9ucykge1xuICAgIHRlbXBsYXRlQ29uZmlnID0gdGVtcGxhdGVDb25maWcgfHwge307XG5cbiAgICB0aGlzLl9pZCA9IHVuaXF1ZSgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5fZnJhbWVDb250YWluZXIgPSB1dGlscy5jcmVhdGVFbGVtZW50SW5FbChlbCwgJ2RpdicpO1xuICAgIHRoaXMuX3ZpZGVvRWwgPSB2aWRlbztcbiAgICB0aGlzLl92cGFpZE9wdGlvbnMgPSB2cGFpZE9wdGlvbnMgfHwge3RpbWVvdXQ6IDEwMDAwfTtcblxuICAgIHRoaXMuX3RlbXBsYXRlQ29uZmlnID0ge1xuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVDb25maWcudGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlLFxuICAgICAgICBleHRyYU9wdGlvbnM6IHRlbXBsYXRlQ29uZmlnLmV4dHJhT3B0aW9ucyB8fCB7fVxuICAgIH07XG59XG5cbi8qKlxuICogZGVzdHJveVxuICpcbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgJHVubG9hZFByZXZpb3VzQWRVbml0LmNhbGwodGhpcyk7XG59O1xuXG4vKipcbiAqIGlzRGVzdHJveWVkXG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUuaXNEZXN0cm95ZWQgPSBmdW5jdGlvbiBpc0Rlc3Ryb3llZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZGVzdHJveWVkO1xufTtcblxuLyoqXG4gKiBsb2FkQWRVbml0XG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGFkVVJMIHVybCBvZiB0aGUganMgb2YgdGhlIGFkVW5pdFxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIGxvYWRBZFVuaXQoYWRVUkwsIGNhbGxiYWNrKSB7XG4gICAgaWYodGhpcy5fb25Mb2FkKXsgcmV0dXJuIH1cblxuICAgICR0aHJvd0lmRGVzdHJveWVkLmNhbGwodGhpcyk7XG4gICAgJHVubG9hZFByZXZpb3VzQWRVbml0LmNhbGwodGhpcyk7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgdmFyIGZyYW1lID0gdXRpbHMuY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQoXG4gICAgICAgIHRoaXMuX2ZyYW1lQ29udGFpbmVyLFxuICAgICAgICB0aGlzLl90ZW1wbGF0ZUNvbmZpZy50ZW1wbGF0ZSxcbiAgICAgICAgdXRpbHMuZXh0ZW5kKHtcbiAgICAgICAgICAgIGlmcmFtZVVSTF9KUzogYWRVUkwsXG4gICAgICAgICAgICBpZnJhbWVJRDogdGhpcy5nZXRJRCgpLFxuICAgICAgICAgICAgb3JpZ2luOiBnZXRPcmlnaW4oKVxuICAgICAgICB9LCB0aGlzLl90ZW1wbGF0ZUNvbmZpZy5leHRyYU9wdGlvbnMpXG4gICAgKTtcblxuICAgIHRoaXMuX2ZyYW1lID0gZnJhbWU7XG5cbiAgICB0aGlzLl9vbkxvYWQgPSB1dGlscy5jYWxsYmFja1RpbWVvdXQoXG4gICAgICAgIHRoaXMuX3ZwYWlkT3B0aW9ucy50aW1lb3V0LFxuICAgICAgICBvbkxvYWQuYmluZCh0aGlzKSxcbiAgICAgICAgb25UaW1lb3V0LmJpbmQodGhpcylcbiAgICApO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLl9vbkxvYWQpO1xuXG4gICAgZnVuY3Rpb24gb25Mb2FkIChlKSB7XG4gICAgICAgIC8qanNoaW50IHZhbGlkdGhpczogZmFsc2UgKi9cbiAgICAgICAgLy9kb24ndCBjbGVhciB0aW1lb3V0XG4gICAgICAgIGlmIChlLm9yaWdpbiAhPT0gZ2V0T3JpZ2luKCkpIHJldHVybjtcbiAgICAgICAgdmFyIHJlc3VsdCA9IEpTT04ucGFyc2UoZS5kYXRhKTtcblxuICAgICAgICAvL2Rvbid0IGNsZWFyIHRpbWVvdXRcbiAgICAgICAgaWYgKHJlc3VsdC5pZCAhPT0gdGhhdC5nZXRJRCgpKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGFkVW5pdCwgZXJyb3IsIGNyZWF0ZUFkO1xuICAgICAgICBpZiAoIXRoYXQuX2ZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcblxuICAgICAgICAgICAgZXJyb3IgPSAndGhlIGlmcmFtZSBpcyBub3QgYW55bW9yZSBpbiB0aGUgRE9NIHRyZWUnO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjcmVhdGVBZCA9IHRoYXQuX2ZyYW1lLmNvbnRlbnRXaW5kb3cuZ2V0VlBBSURBZDtcbiAgICAgICAgICAgIGVycm9yID0gdXRpbHMudmFsaWRhdGUodHlwZW9mIGNyZWF0ZUFkID09PSAnZnVuY3Rpb24nLCAndGhlIGFkIGRpZG5cXCd0IHJldHVybiBhIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhbiBhZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgdmFyIGFkRWwgPSB0aGF0Ll9mcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZC1lbGVtZW50Jyk7XG4gICAgICAgICAgICBhZFVuaXQgPSBuZXcgVlBBSURBZFVuaXQoY3JlYXRlQWQoKSwgYWRFbCwgdGhhdC5fdmlkZW9FbCwgdGhhdC5fZnJhbWUpO1xuICAgICAgICAgICAgYWRVbml0LnN1YnNjcmliZShBRF9TVE9QUEVELCAkYWREZXN0cm95ZWQuYmluZCh0aGF0KSk7XG4gICAgICAgICAgICBlcnJvciA9IHV0aWxzLnZhbGlkYXRlKGFkVW5pdC5pc1ZhbGlkVlBBSURBZCgpLCAndGhlIGFkZCBpcyBub3QgZnVsbHkgY29tcGxhaW50IHdpdGggVlBBSUQgc3BlY2lmaWNhdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhhdC5fYWRVbml0ID0gYWRVbml0O1xuICAgICAgICAkZGVzdHJveUxvYWRMaXN0ZW5lci5jYWxsKHRoYXQpO1xuICAgICAgICBjYWxsYmFjayhlcnJvciwgZXJyb3IgPyBudWxsIDogYWRVbml0KTtcblxuICAgICAgICAvL2NsZWFyIHRpbWVvdXRcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgICBjYWxsYmFjaygndGltZW91dCcsIG51bGwpO1xuICAgIH1cbn07XG5cbi8qKlxuICogdW5sb2FkQWRVbml0XG4gKlxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS51bmxvYWRBZFVuaXQgPSBmdW5jdGlvbiB1bmxvYWRBZFVuaXQoKSB7XG4gICAgJHVubG9hZFByZXZpb3VzQWRVbml0LmNhbGwodGhpcyk7XG59O1xuXG4vKipcbiAqIGdldElEIHdpbGwgcmV0dXJuIHRoZSB1bmlxdWUgaWRcbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmdldElEID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbn07XG5cblxuLyoqXG4gKiAkcmVtb3ZlRWxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cbmZ1bmN0aW9uICRyZW1vdmVFbChrZXkpIHtcbiAgICB2YXIgZWwgPSB0aGlzW2tleV07XG4gICAgaWYgKGVsICYmIGVsLnBhcmVudE5vZGUpIHtcbiAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XG4gICAgfVxufVxuXG5mdW5jdGlvbiAkYWREZXN0cm95ZWQoKSB7XG4gICAgJHJlbW92ZUFkRWxlbWVudHMuY2FsbCh0aGlzKTtcbiAgICBkZWxldGUgdGhpcy5fYWRVbml0O1xufVxuXG5mdW5jdGlvbiAkdW5sb2FkUHJldmlvdXNBZFVuaXQoKSB7XG4gICAgJHJlbW92ZUFkRWxlbWVudHMuY2FsbCh0aGlzKTtcbiAgICAkZGVzdHJveUFkVW5pdC5jYWxsKHRoaXMpO1xufVxuXG5mdW5jdGlvbiAkcmVtb3ZlQWRFbGVtZW50cygpIHtcbiAgICAkcmVtb3ZlRWwuY2FsbCh0aGlzLCAnX2ZyYW1lJyk7XG4gICAgJGRlc3Ryb3lMb2FkTGlzdGVuZXIuY2FsbCh0aGlzKTtcbn1cblxuLyoqXG4gKiAkZGVzdHJveUxvYWRMaXN0ZW5lclxuICpcbiAqL1xuZnVuY3Rpb24gJGRlc3Ryb3lMb2FkTGlzdGVuZXIoKSB7XG4gICAgaWYgKHRoaXMuX29uTG9hZCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuX29uTG9hZCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9vbkxvYWQ7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uICRkZXN0cm95QWRVbml0KCkge1xuICAgIGlmICh0aGlzLl9hZFVuaXQpIHtcbiAgICAgICAgdGhpcy5fYWRVbml0LnN0b3BBZCgpO1xuICAgICAgICBkZWxldGUgdGhpcy5fYWRVbml0O1xuICAgIH1cbn1cblxuLyoqXG4gKiAkdGhyb3dJZkRlc3Ryb3llZFxuICpcbiAqL1xuZnVuY3Rpb24gJHRocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdWUEFJREhUTUw1Q2xpZW50IGFscmVhZHkgZGVzdHJveWVkIScpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0T3JpZ2luKCkge1xuICAgIHZhciBfbG9jYXRpb24gPSB3aW5kb3cucGFyZW50LmxvY2F0aW9uO1xuICAgIHJldHVybiBfbG9jYXRpb24ub3JpZ2luIHx8IChcbiAgICAgICAgX2xvY2F0aW9uLnByb3RvY29sICsgJy8vJyArXG4gICAgICAgIF9sb2NhdGlvbi5ob3N0bmFtZSArXG4gICAgICAgIChfbG9jYXRpb24ucG9ydCA/ICc6JyArIF9sb2NhdGlvbi5wb3J0OiAnJylcbiAgICApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlESFRNTDVDbGllbnQ7XG53aW5kb3cuVlBBSURIVE1MNUNsaWVudCA9IFZQQUlESFRNTDVDbGllbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFN1YnNjcmliZXIoKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSB7fTtcbn1cblxuU3Vic2NyaWJlci5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50TmFtZSwgY29udGV4dCkge1xuICAgIGlmICghdGhpcy5pc0hhbmRsZXJBdHRhY2hlZChoYW5kbGVyLCBldmVudE5hbWUpKSB7XG4gICAgICAgIHRoaXMuZ2V0KGV2ZW50TmFtZSkucHVzaCh7aGFuZGxlcjogaGFuZGxlciwgY29udGV4dDogY29udGV4dCwgZXZlbnROYW1lOiBldmVudE5hbWV9KTtcbiAgICB9XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50TmFtZSkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSB0aGlzLmdldChldmVudE5hbWUpLmZpbHRlcihmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICByZXR1cm4gaGFuZGxlciAhPT0gc3Vic2NyaWJlci5oYW5kbGVyO1xuICAgIH0pO1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmVBbGwgPSBmdW5jdGlvbiB1bnN1YnNjcmliZUFsbCgpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IHt9O1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgc3Vic2NyaWJlcnMgPSB0aGlzLmdldChldmVudE5hbWUpXG4gICAgICAgIC5jb25jYXQodGhpcy5nZXQoJyonKSk7XG5cbiAgICBzdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoYXQuaXNIYW5kbGVyQXR0YWNoZWQoc3Vic2NyaWJlci5oYW5kbGVyLCBzdWJzY3JpYmVyLmV2ZW50TmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmhhbmRsZXIuY2FsbChzdWJzY3JpYmVyLmNvbnRleHQsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnRyaWdnZXJTeW5jID0gZnVuY3Rpb24oZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgdmFyIHN1YnNjcmliZXJzID0gdGhpcy5nZXQoZXZlbnROYW1lKVxuICAgICAgICAuY29uY2F0KHRoaXMuZ2V0KCcqJykpO1xuXG4gICAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBzdWJzY3JpYmVyLmhhbmRsZXIuY2FsbChzdWJzY3JpYmVyLmNvbnRleHQsIGRhdGEpO1xuICAgIH0pO1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGV2ZW50TmFtZSkge1xuICAgIGlmICghdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkge1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdO1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUuaXNIYW5kbGVyQXR0YWNoZWQgPSBmdW5jdGlvbiBpc0hhbmRsZXJBdHRhY2hlZChoYW5kbGVyLCBldmVudE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoZXZlbnROYW1lKS5zb21lKGZ1bmN0aW9uKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIgPT09IHN1YnNjcmliZXIuaGFuZGxlcjtcbiAgICB9KVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdWJzY3JpYmVyO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogbm9vcCBhIGVtcHR5IGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vKipcbiAqIHZhbGlkYXRlIGlmIGlzIG5vdCB2YWxpZGF0ZSB3aWxsIHJldHVybiBhbiBFcnJvciB3aXRoIHRoZSBtZXNzYWdlXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBpc1ZhbGlkXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZShpc1ZhbGlkLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGlzVmFsaWQgPyBudWxsIDogbmV3IEVycm9yKG1lc3NhZ2UpO1xufVxuXG4vKipcbiAqIGNhbGxiYWNrVGltZW91dCBpZiB0aGUgb25TdWNjZXNzIGlzIG5vdCBjYWxsZWQgYW5kIHJldHVybnMgdHJ1ZSBpbiB0aGUgdGltZWxpbWl0IHRoZW4gb25UaW1lb3V0IHdpbGwgYmUgY2FsbGVkXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblN1Y2Nlc3NcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uVGltZW91dFxuICovXG5mdW5jdGlvbiBjYWxsYmFja1RpbWVvdXQodGltZXIsIG9uU3VjY2Vzcywgb25UaW1lb3V0KSB7XG4gICAgdmFyIGNhbGxiYWNrLCB0aW1lb3V0O1xuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvblN1Y2Nlc3MgPSBub29wO1xuICAgICAgICBvblRpbWVvdXQoKTtcbiAgICB9LCB0aW1lcik7XG5cbiAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVE9ETyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50c1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkL3dpa2kvT3B0aW1pemF0aW9uLWtpbGxlcnMjMzItbGVha2luZy1hcmd1bWVudHNcbiAgICAgICAgaWYgKG9uU3VjY2Vzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGNhbGxiYWNrO1xufVxuXG5cbi8qKlxuICogY3JlYXRlRWxlbWVudEluRWxcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudEluRWwocGFyZW50LCB0YWdOYW1lLCBpZCkge1xuICAgIHZhciBuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgIGlmIChpZCkgbkVsLmlkID0gaWQ7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5FbCk7XG4gICAgcmV0dXJuIG5FbDtcbn1cblxuLyoqXG4gKiBjcmVhdGVJZnJhbWVXaXRoQ29udGVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIHNpbXBsZSB0ZW1wbGF0ZSB1c2luZyB7e3Zhcn19XG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICovXG5mdW5jdGlvbiBjcmVhdGVJZnJhbWVXaXRoQ29udGVudChwYXJlbnQsIHRlbXBsYXRlLCBkYXRhKSB7XG4gICAgdmFyIGlmcmFtZSA9IGNyZWF0ZUlmcmFtZShwYXJlbnQsIG51bGwsIGRhdGEuekluZGV4KTtcbiAgICBpZiAoIXNldElmcmFtZUNvbnRlbnQoaWZyYW1lLCBzaW1wbGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YSkpKSByZXR1cm47XG4gICAgcmV0dXJuIGlmcmFtZTtcbn1cblxuLyoqXG4gKiBjcmVhdGVJZnJhbWVcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSWZyYW1lKHBhcmVudCwgdXJsLCB6SW5kZXgpIHtcbiAgICB2YXIgbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgbkVsLnNyYyA9IHVybCB8fCAnYWJvdXQ6YmxhbmsnO1xuICAgIG5FbC5tYXJnaW5XaWR0aCA9ICcwJztcbiAgICBuRWwubWFyZ2luSGVpZ2h0ID0gJzAnO1xuICAgIG5FbC5mcmFtZUJvcmRlciA9ICcwJztcbiAgICBuRWwud2lkdGggPSAnMTAwJSc7XG4gICAgbkVsLmhlaWdodCA9ICcxMDAlJztcbiAgICBzZXRGdWxsU2l6ZVN0eWxlKG5FbCk7XG5cbiAgICBpZih6SW5kZXgpe1xuICAgICAgICBuRWwuc3R5bGUuekluZGV4ID0gekluZGV4O1xuICAgIH1cblxuICAgIG5FbC5zZXRBdHRyaWJ1dGUoJ1NDUk9MTElORycsJ05PJyk7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuRWwpO1xuICAgIHJldHVybiBuRWw7XG59XG5cbmZ1bmN0aW9uIHNldEZ1bGxTaXplU3R5bGUoZWxlbWVudCkge1xuICAgIGlmKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUubWFyZ2luID0gJzBweCc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZyA9ICcwcHgnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmJvcmRlciA9ICdub25lJztcbiAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgfVxufVxuXG4vKipcbiAqIHNpbXBsZVRlbXBsYXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICovXG5mdW5jdGlvbiBzaW1wbGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgPyBKU09OLnN0cmluZ2lmeShkYXRhW2tleV0pIDogZGF0YVtrZXldO1xuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UobmV3IFJlZ0V4cCgne3snICsga2V5ICsgJ319JywgJ2cnKSwgdmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn1cblxuLyoqXG4gKiBzZXRJZnJhbWVDb250ZW50XG4gKlxuICogQHBhcmFtIHtIVE1MSWZyYW1lRWxlbWVudH0gaWZyYW1lRWxcbiAqIEBwYXJhbSBjb250ZW50XG4gKi9cbmZ1bmN0aW9uIHNldElmcmFtZUNvbnRlbnQoaWZyYW1lRWwsIGNvbnRlbnQpIHtcbiAgICB2YXIgaWZyYW1lRG9jID0gaWZyYW1lRWwuY29udGVudFdpbmRvdyAmJiBpZnJhbWVFbC5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICAgIGlmICghaWZyYW1lRG9jKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZnJhbWVEb2Mud3JpdGUoY29udGVudCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuXG4vKipcbiAqIGV4dGVuZCBvYmplY3Qgd2l0aCBrZXlzIGZyb20gYW5vdGhlciBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdG9FeHRlbmRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmcm9tU291cmNlXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCh0b0V4dGVuZCwgZnJvbVNvdXJjZSkge1xuICAgIE9iamVjdC5rZXlzKGZyb21Tb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHRvRXh0ZW5kW2tleV0gPSBmcm9tU291cmNlW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIHRvRXh0ZW5kO1xufVxuXG5cbi8qKlxuICogdW5pcXVlIHdpbGwgY3JlYXRlIGEgdW5pcXVlIHN0cmluZyBldmVyeXRpbWUgaXMgY2FsbGVkLCBzZXF1ZW50aWFsbHkgYW5kIHByZWZpeGVkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuICovXG5mdW5jdGlvbiB1bmlxdWUocHJlZml4KSB7XG4gICAgdmFyIGNvdW50ID0gLTE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdfJyArICgrK2NvdW50KTtcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBub29wOiBub29wLFxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZSxcbiAgICBjYWxsYmFja1RpbWVvdXQ6IGNhbGxiYWNrVGltZW91dCxcbiAgICBjcmVhdGVFbGVtZW50SW5FbDogY3JlYXRlRWxlbWVudEluRWwsXG4gICAgY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQ6IGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50LFxuICAgIGNyZWF0ZUlmcmFtZTogY3JlYXRlSWZyYW1lLFxuICAgIHNldEZ1bGxTaXplU3R5bGU6IHNldEZ1bGxTaXplU3R5bGUsXG4gICAgc2ltcGxlVGVtcGxhdGU6IHNpbXBsZVRlbXBsYXRlLFxuICAgIHNldElmcmFtZUNvbnRlbnQ6IHNldElmcmFtZUNvbnRlbnQsXG4gICAgZXh0ZW5kOiBleHRlbmQsXG4gICAgdW5pcXVlOiB1bmlxdWVcbn07XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEluTGluZSA9IHJlcXVpcmUoJy4vSW5MaW5lJyk7XG52YXIgV3JhcHBlciA9IHJlcXVpcmUoJy4vV3JhcHBlcicpO1xuXG5mdW5jdGlvbiBBZChhZEpUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBBZCkpIHtcbiAgICByZXR1cm4gbmV3IEFkKGFkSlRyZWUpO1xuICB9XG4gIHRoaXMuaW5pdGlhbGl6ZShhZEpUcmVlKTtcbn1cblxuQWQucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihhZEpUcmVlKSB7XG4gIHRoaXMuaWQgPSBhZEpUcmVlLmF0dHIoJ2lkJyk7XG4gIHRoaXMuc2VxdWVuY2UgPSBhZEpUcmVlLmF0dHIoJ3NlcXVlbmNlJyk7XG5cbiAgaWYoYWRKVHJlZS5pbkxpbmUpIHtcbiAgICB0aGlzLmluTGluZSA9IG5ldyBJbkxpbmUoYWRKVHJlZS5pbkxpbmUpO1xuICB9XG5cbiAgaWYoYWRKVHJlZS53cmFwcGVyKXtcbiAgICB0aGlzLndyYXBwZXIgPSBuZXcgV3JhcHBlcihhZEpUcmVlLndyYXBwZXIpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFkOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFRyYWNraW5nRXZlbnQgPSByZXF1aXJlKCcuL1RyYWNraW5nRXZlbnQnKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG52YXIgbG9nZ2VyID0gcmVxdWlyZSAoJy4uLy4uL3V0aWxzL2NvbnNvbGVMb2dnZXInKTtcblxuXG5mdW5jdGlvbiBDb21wYW5pb24oY29tcGFuaW9uSlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIENvbXBhbmlvbikpIHtcbiAgICByZXR1cm4gbmV3IENvbXBhbmlvbihjb21wYW5pb25KVHJlZSk7XG4gIH1cblxuICBsb2dnZXIuaW5mbyAoXCI8Q29tcGFuaW9uPiBmb3VuZCBjb21wYW5pb24gYWRcIik7XG4gIGxvZ2dlci5kZWJ1ZyAoXCI8Q29tcGFuaW9uPiAgY29tcGFuaW9uSlRyZWU6XCIsIGNvbXBhbmlvbkpUcmVlKTtcblxuICAvL1JlcXVpcmVkIEVsZW1lbnRzXG4gIHRoaXMuY3JlYXRpdmVUeXBlID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUuc3RhdGljUmVzb3VyY2UsICdjcmVhdGl2ZVR5cGUnKTtcbiAgdGhpcy5zdGF0aWNSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5zdGF0aWNSZXNvdXJjZSk7XG5cbiAgbG9nZ2VyLmluZm8gKFwiPENvbXBhbmlvbj4gIGNyZWF0aXZlVHlwZTogXCIgKyB0aGlzLmNyZWF0aXZlVHlwZSk7XG4gIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+ICBzdGF0aWNSZXNvdXJjZTogXCIgKyB0aGlzLnN0YXRpY1Jlc291cmNlKTtcblxuICAvLyBXZWlyZCBidWcgd2hlbiB0aGUgSlhPTiB0cmVlIGlzIGJ1aWx0IGl0IGRvZXNuJ3QgaGFuZGxlIGNhc2luZyBwcm9wZXJseSBpbiB0aGlzIHNpdHVhdGlvbi4uLlxuICB2YXIgaHRtbFJlc291cmNlID0gbnVsbDtcbiAgaWYgKHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5IVE1MUmVzb3VyY2UpKSB7XG4gICAgaHRtbFJlc291cmNlID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLkhUTUxSZXNvdXJjZSk7XG4gIH0gZWxzZSBpZiAoeG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmhUTUxSZXNvdXJjZSkpIHtcbiAgICBodG1sUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuaFRNTFJlc291cmNlKTtcbiAgfVxuXG4gIGlmIChodG1sUmVzb3VyY2UgIT09IG51bGwpXG4gIHtcbiAgICBsb2dnZXIuaW5mbyAoXCI8Q29tcGFuaW9uPiBmb3VuZCBodG1sIHJlc291cmNlXCIsIGh0bWxSZXNvdXJjZSk7XG4gIH1cblxuICB0aGlzLmh0bWxSZXNvdXJjZSA9IGh0bWxSZXNvdXJjZTtcblxuICB2YXIgaWZyYW1lUmVzb3VyY2UgPSBudWxsO1xuICBpZiAoeG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLklGcmFtZVJlc291cmNlKSkge1xuICAgIGlmcmFtZVJlc291cmNlID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLklGcmFtZVJlc291cmNlKTtcbiAgfSBlbHNlIGlmICh4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuaUZyYW1lcmVzb3VyY2UpKSB7XG4gICAgaWZyYW1lUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuaUZyYW1lcmVzb3VyY2UpO1xuICB9XG5cbiAgaWYgKGlmcmFtZVJlc291cmNlICE9PSBudWxsKVxuICB7XG4gICAgbG9nZ2VyLmluZm8gKFwiPENvbXBhbmlvbj4gZm91bmQgaWZyYW1lIHJlc291cmNlXCIsIGlmcmFtZVJlc291cmNlKTtcbiAgfVxuXG4gIHRoaXMuaWZyYW1lUmVzb3VyY2UgPSBpZnJhbWVSZXNvdXJjZTtcblxuICAvL09wdGlvbmFsIGZpZWxkc1xuICB0aGlzLmlkID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdpZCcpO1xuICB0aGlzLndpZHRoID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICd3aWR0aCcpO1xuICB0aGlzLmhlaWdodCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnaGVpZ2h0Jyk7XG4gIHRoaXMuZXhwYW5kZWRXaWR0aCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnZXhwYW5kZWRXaWR0aCcpO1xuICB0aGlzLmV4cGFuZGVkSGVpZ2h0ID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdleHBhbmRlZEhlaWdodCcpO1xuICB0aGlzLnNjYWxhYmxlID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdzY2FsYWJsZScpO1xuICB0aGlzLm1haW50YWluQXNwZWN0UmF0aW8gPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ21haW50YWluQXNwZWN0UmF0aW8nKTtcbiAgdGhpcy5taW5TdWdnZXN0ZWREdXJhdGlvbiA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnbWluU3VnZ2VzdGVkRHVyYXRpb24nKTtcbiAgdGhpcy5hcGlGcmFtZXdvcmsgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2FwaUZyYW1ld29yaycpO1xuICB0aGlzLmNvbXBhbmlvbkNsaWNrVGhyb3VnaCA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5jb21wYW5pb25DbGlja1Rocm91Z2gpO1xuICB0aGlzLnRyYWNraW5nRXZlbnRzID0gcGFyc2VUcmFja2luZ0V2ZW50cyhjb21wYW5pb25KVHJlZS50cmFja2luZ0V2ZW50cyAmJiBjb21wYW5pb25KVHJlZS50cmFja2luZ0V2ZW50cy50cmFja2luZyk7XG5cbiAgbG9nZ2VyLmluZm8gKFwiPENvbXBhbmlvbj4gIGNvbXBhbmlvbkNsaWNrVGhyb3VnaDogXCIgKyB0aGlzLmNvbXBhbmlvbkNsaWNrVGhyb3VnaCk7XG5cblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHBhcnNlVHJhY2tpbmdFdmVudHModHJhY2tpbmdFdmVudHMpIHtcbiAgICB2YXIgdHJhY2tpbmdzID0gW107XG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQodHJhY2tpbmdFdmVudHMpKSB7XG4gICAgICB0cmFja2luZ0V2ZW50cyA9IHV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRXZlbnRzKSA/IHRyYWNraW5nRXZlbnRzIDogW3RyYWNraW5nRXZlbnRzXTtcbiAgICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNraW5nRGF0YSkge1xuICAgICAgICB0cmFja2luZ3MucHVzaChuZXcgVHJhY2tpbmdFdmVudCh0cmFja2luZ0RhdGEpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJhY2tpbmdzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcGFuaW9uOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIExpbmVhciA9IHJlcXVpcmUoJy4vTGluZWFyJyk7XG52YXIgQ29tcGFuaW9uID0gcmVxdWlyZSgnLi9Db21wYW5pb24nKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIENyZWF0aXZlKGNyZWF0aXZlSlRyZWUpIHtcbiAgaWYoISh0aGlzIGluc3RhbmNlb2YgQ3JlYXRpdmUpKSB7XG4gICAgcmV0dXJuIG5ldyBDcmVhdGl2ZShjcmVhdGl2ZUpUcmVlKTtcbiAgfVxuXG4gIHRoaXMuaWQgPSBjcmVhdGl2ZUpUcmVlLmF0dHIoJ2lkJyk7XG4gIHRoaXMuc2VxdWVuY2UgPSBjcmVhdGl2ZUpUcmVlLmF0dHIoJ3NlcXVlbmNlJyk7XG4gIHRoaXMuYWRJZCA9IGNyZWF0aXZlSlRyZWUuYXR0cignYWRJZCcpO1xuICB0aGlzLmFwaUZyYW1ld29yayA9IGNyZWF0aXZlSlRyZWUuYXR0cignYXBpRnJhbWV3b3JrJyk7XG5cbiAgaWYoY3JlYXRpdmVKVHJlZS5saW5lYXIpIHtcbiAgICB0aGlzLmxpbmVhciA9IG5ldyBMaW5lYXIoY3JlYXRpdmVKVHJlZS5saW5lYXIpO1xuICB9XG5cbiAgaWYgKGNyZWF0aXZlSlRyZWUuY29tcGFuaW9uQWRzKSB7XG4gICAgdmFyIGNvbXBhbmlvbnMgPSBbXTtcbiAgICB2YXIgY29tcGFuaW9uQWRzID0gY3JlYXRpdmVKVHJlZS5jb21wYW5pb25BZHMgJiYgY3JlYXRpdmVKVHJlZS5jb21wYW5pb25BZHMuY29tcGFuaW9uO1xuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKGNvbXBhbmlvbkFkcykpIHtcbiAgICAgIGNvbXBhbmlvbkFkcyA9IHV0aWxpdGllcy5pc0FycmF5KGNvbXBhbmlvbkFkcykgPyBjb21wYW5pb25BZHMgOiBbY29tcGFuaW9uQWRzXTtcbiAgICAgIGNvbXBhbmlvbkFkcy5mb3JFYWNoKGZ1bmN0aW9uIChjb21wYW5pb25EYXRhKSB7XG4gICAgICAgIGNvbXBhbmlvbnMucHVzaChuZXcgQ29tcGFuaW9uKGNvbXBhbmlvbkRhdGEpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLmNvbXBhbmlvbkFkcyA9IGNvbXBhbmlvbnM7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYXQgdGhlIGNyZWF0aXZlLlxuICovXG5DcmVhdGl2ZS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpe1xuICBpZih0aGlzLmxpbmVhcikge1xuICAgIHJldHVybiB0aGlzLmxpbmVhci5pc1N1cHBvcnRlZCgpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5DcmVhdGl2ZS5wYXJzZUNyZWF0aXZlcyA9IGZ1bmN0aW9uIHBhcnNlQ3JlYXRpdmVzKGNyZWF0aXZlc0pUcmVlKSB7XG4gIHZhciBjcmVhdGl2ZXMgPSBbXTtcbiAgdmFyIGNyZWF0aXZlc0RhdGE7XG4gIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKGNyZWF0aXZlc0pUcmVlKSAmJiB1dGlsaXRpZXMuaXNEZWZpbmVkKGNyZWF0aXZlc0pUcmVlLmNyZWF0aXZlKSkge1xuICAgIGNyZWF0aXZlc0RhdGEgPSB1dGlsaXRpZXMuaXNBcnJheShjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZSkgPyBjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZSA6IFtjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZV07XG4gICAgY3JlYXRpdmVzRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChjcmVhdGl2ZSkge1xuICAgICAgY3JlYXRpdmVzLnB1c2gobmV3IENyZWF0aXZlKGNyZWF0aXZlKSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGNyZWF0aXZlcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ3JlYXRpdmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcbnZhciBDcmVhdGl2ZSA9IHJlcXVpcmUoJy4vQ3JlYXRpdmUnKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxuZnVuY3Rpb24gSW5MaW5lKGlubGluZUpUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBJbkxpbmUpKSB7XG4gICAgcmV0dXJuIG5ldyBJbkxpbmUoaW5saW5lSlRyZWUpO1xuICB9XG5cbiAgLy9SZXF1aXJlZCBGaWVsZHNcbiAgdGhpcy5hZFRpdGxlID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmFkVGl0bGUpO1xuICB0aGlzLmFkU3lzdGVtID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmFkU3lzdGVtKTtcbiAgdGhpcy5pbXByZXNzaW9ucyA9IHZhc3RVdGlsLnBhcnNlSW1wcmVzc2lvbnMoaW5saW5lSlRyZWUuaW1wcmVzc2lvbik7XG4gIHRoaXMuY3JlYXRpdmVzID0gQ3JlYXRpdmUucGFyc2VDcmVhdGl2ZXMoaW5saW5lSlRyZWUuY3JlYXRpdmVzKTtcblxuICAvL09wdGlvbmFsIEZpZWxkc1xuICB0aGlzLmRlc2NyaXB0aW9uID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmRlc2NyaXB0aW9uKTtcbiAgdGhpcy5hZHZlcnRpc2VyID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmFkdmVydGlzZXIpO1xuICB0aGlzLnN1cnZleXMgPSBwYXJzZVN1cnZleXMoaW5saW5lSlRyZWUuc3VydmV5KTtcbiAgdGhpcy5lcnJvciA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5lcnJvcik7XG4gIHRoaXMucHJpY2luZyA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5wcmljaW5nKTtcbiAgdGhpcy5leHRlbnNpb25zID0gaW5saW5lSlRyZWUuZXh0ZW5zaW9ucztcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHBhcnNlU3VydmV5cyhpbmxpbmVTdXJ2ZXlzKSB7XG4gICAgaWYgKGlubGluZVN1cnZleXMpIHtcbiAgICAgIHJldHVybiB1dGlsaXRpZXMudHJhbnNmb3JtQXJyYXkodXRpbGl0aWVzLmlzQXJyYXkoaW5saW5lU3VydmV5cykgPyBpbmxpbmVTdXJ2ZXlzIDogW2lubGluZVN1cnZleXNdLCBmdW5jdGlvbiAoc3VydmV5KSB7XG4gICAgICAgIGlmKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHN1cnZleS5rZXlWYWx1ZSkpe1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1cmk6IHN1cnZleS5rZXlWYWx1ZSxcbiAgICAgICAgICAgIHR5cGU6IHN1cnZleS5hdHRyKCd0eXBlJylcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYnJvd3NlciBzdXBwb3J0cyBhbGwgdGhlIGNyZWF0aXZlcy5cbiAqL1xuSW5MaW5lLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpLGxlbjtcblxuICBpZih0aGlzLmNyZWF0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IoaSA9IDAsIGxlbiA9IHRoaXMuY3JlYXRpdmVzLmxlbmd0aDsgaTwgbGVuOyBpKz0xKXtcbiAgICBpZighdGhpcy5jcmVhdGl2ZXNbaV0uaXNTdXBwb3J0ZWQoKSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbkxpbmU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBUcmFja2luZ0V2ZW50ID0gcmVxdWlyZSgnLi9UcmFja2luZ0V2ZW50Jyk7XG52YXIgTWVkaWFGaWxlID0gcmVxdWlyZSgnLi9NZWRpYUZpbGUnKTtcbnZhciBWaWRlb0NsaWNrcyA9IHJlcXVpcmUoJy4vVmlkZW9DbGlja3MnKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciBwYXJzZXJzID0gcmVxdWlyZSgnLi9wYXJzZXJzJyk7XG5cbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxuXG5mdW5jdGlvbiBMaW5lYXIobGluZWFySlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIExpbmVhcikpIHtcbiAgICByZXR1cm4gbmV3IExpbmVhcihsaW5lYXJKVHJlZSk7XG4gIH1cblxuICAvL1JlcXVpcmVkIEVsZW1lbnRzXG4gIHRoaXMuZHVyYXRpb24gPSBwYXJzZXJzLmR1cmF0aW9uKHhtbC5rZXlWYWx1ZShsaW5lYXJKVHJlZS5kdXJhdGlvbikpO1xuICB0aGlzLm1lZGlhRmlsZXMgPSBwYXJzZU1lZGlhRmlsZXMobGluZWFySlRyZWUubWVkaWFGaWxlcyAmJiBsaW5lYXJKVHJlZS5tZWRpYUZpbGVzLm1lZGlhRmlsZSk7XG5cbiAgLy9PcHRpb25hbCBmaWVsZHNcbiAgdGhpcy50cmFja2luZ0V2ZW50cyA9IHBhcnNlVHJhY2tpbmdFdmVudHMobGluZWFySlRyZWUudHJhY2tpbmdFdmVudHMgJiYgbGluZWFySlRyZWUudHJhY2tpbmdFdmVudHMudHJhY2tpbmcsIHRoaXMuZHVyYXRpb24pO1xuICB0aGlzLnNraXBvZmZzZXQgPSBwYXJzZXJzLm9mZnNldCh4bWwuYXR0cihsaW5lYXJKVHJlZSwgJ3NraXBvZmZzZXQnKSwgdGhpcy5kdXJhdGlvbik7XG5cbiAgaWYgKGxpbmVhckpUcmVlLnZpZGVvQ2xpY2tzKSB7XG4gICAgdGhpcy52aWRlb0NsaWNrcyA9IG5ldyBWaWRlb0NsaWNrcyhsaW5lYXJKVHJlZS52aWRlb0NsaWNrcyk7XG4gIH1cblxuICBpZihsaW5lYXJKVHJlZS5hZFBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLmFkUGFyYW1ldGVycyA9IHhtbC5rZXlWYWx1ZShsaW5lYXJKVHJlZS5hZFBhcmFtZXRlcnMpO1xuXG4gICAgaWYoeG1sLmF0dHIobGluZWFySlRyZWUuYWRQYXJhbWV0ZXJzLCAneG1sRW5jb2RlZCcpKSB7XG4gICAgICB0aGlzLmFkUGFyYW1ldGVycyA9IHhtbC5kZWNvZGUodGhpcy5hZFBhcmFtZXRlcnMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGFyc2VUcmFja2luZ0V2ZW50cyh0cmFja2luZ0V2ZW50cywgZHVyYXRpb24pIHtcbiAgICB2YXIgdHJhY2tpbmdzID0gW107XG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQodHJhY2tpbmdFdmVudHMpKSB7XG4gICAgICB0cmFja2luZ0V2ZW50cyA9IHV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRXZlbnRzKSA/IHRyYWNraW5nRXZlbnRzIDogW3RyYWNraW5nRXZlbnRzXTtcbiAgICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNraW5nRGF0YSkge1xuICAgICAgICB0cmFja2luZ3MucHVzaChuZXcgVHJhY2tpbmdFdmVudCh0cmFja2luZ0RhdGEsIGR1cmF0aW9uKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYWNraW5ncztcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTWVkaWFGaWxlcyhtZWRpYUZpbGVzSnhvblRyZWUpIHtcbiAgICB2YXIgbWVkaWFGaWxlcyA9IFtdO1xuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKG1lZGlhRmlsZXNKeG9uVHJlZSkpIHtcbiAgICAgIG1lZGlhRmlsZXNKeG9uVHJlZSA9IHV0aWxpdGllcy5pc0FycmF5KG1lZGlhRmlsZXNKeG9uVHJlZSkgPyBtZWRpYUZpbGVzSnhvblRyZWUgOiBbbWVkaWFGaWxlc0p4b25UcmVlXTtcblxuICAgICAgbWVkaWFGaWxlc0p4b25UcmVlLmZvckVhY2goZnVuY3Rpb24gKG1mRGF0YSkge1xuICAgICAgICBtZWRpYUZpbGVzLnB1c2gobmV3IE1lZGlhRmlsZShtZkRhdGEpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbWVkaWFGaWxlcztcbiAgfVxufVxuXG4vKipcbiAqIE11c3QgcmV0dXJuIHRydWUgaWYgYXQgbGVhc3Qgb25lIG9mIHRoZSBNZWRpYUZpbGVzJyB0eXBlIGlzIHN1cHBvcnRlZFxuICovXG5MaW5lYXIucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaSwgbGVuO1xuICBmb3IoaT0wLCBsZW49dGhpcy5tZWRpYUZpbGVzLmxlbmd0aDsgaTxsZW47IGkrPTEpIHtcbiAgICBpZih0aGlzLm1lZGlhRmlsZXNbaV0uaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBMaW5lYXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcblxudmFyIGF0dHJpYnV0ZXNMaXN0ID0gW1xuICAvL1JlcXVpcmVkIGF0dHJpYnV0ZXNcbiAgJ2RlbGl2ZXJ5JyxcbiAgJ3R5cGUnLFxuICAnd2lkdGgnLFxuICAnaGVpZ2h0JyxcbiAgLy9PcHRpb25hbCBhdHRyaWJ1dGVzXG4gICdjb2RlYycsXG4gICdpZCcsXG4gICdiaXRyYXRlJyxcbiAgJ21pbkJpdHJhdGUnLFxuICAnbWF4Qml0cmF0ZScsXG4gICdzY2FsYWJsZScsXG4gICdtYWludGFpbkFzcGVjdFJhdGlvJyxcbiAgJ2FwaUZyYW1ld29yaydcbl07XG5cbmZ1bmN0aW9uIE1lZGlhRmlsZShtZWRpYUZpbGVKVHJlZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWVkaWFGaWxlKSkge1xuICAgIHJldHVybiBuZXcgTWVkaWFGaWxlKG1lZGlhRmlsZUpUcmVlKTtcbiAgfVxuXG4gIC8vUmVxdWlyZWQgYXR0cmlidXRlc1xuICB0aGlzLnNyYyA9IHhtbC5rZXlWYWx1ZShtZWRpYUZpbGVKVHJlZSk7XG5cbiAgZm9yKHZhciB4PTA7IHg8YXR0cmlidXRlc0xpc3QubGVuZ3RoOyB4KyspIHtcbiAgICB2YXIgYXR0cmlidXRlID0gYXR0cmlidXRlc0xpc3RbeF07XG4gICAgdGhpc1thdHRyaWJ1dGVdID0gbWVkaWFGaWxlSlRyZWUuYXR0cihhdHRyaWJ1dGUpO1xuICB9XG59XG5cbk1lZGlhRmlsZS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpe1xuICBpZih2YXN0VXRpbC5pc1ZQQUlEKHRoaXMpKSB7XG4gICAgcmV0dXJuICEhdmFzdFV0aWwuZmluZFN1cHBvcnRlZFZQQUlEVGVjaCh0aGlzLnR5cGUpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhRmlsZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHBhcnNlcnMgPSByZXF1aXJlKCcuL3BhcnNlcnMnKTtcblxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG5mdW5jdGlvbiBUcmFja2luZ0V2ZW50KHRyYWNraW5nSlRyZWUsIGR1cmF0aW9uKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBUcmFja2luZ0V2ZW50KSkge1xuICAgIHJldHVybiBuZXcgVHJhY2tpbmdFdmVudCh0cmFja2luZ0pUcmVlLCBkdXJhdGlvbik7XG4gIH1cblxuICB0aGlzLm5hbWUgPSB0cmFja2luZ0pUcmVlLmF0dHIoJ2V2ZW50Jyk7XG4gIHRoaXMudXJpID0geG1sLmtleVZhbHVlKHRyYWNraW5nSlRyZWUpO1xuXG4gIGlmKCdwcm9ncmVzcycgPT09IHRoaXMubmFtZSkge1xuICAgIHRoaXMub2Zmc2V0ID0gcGFyc2Vycy5vZmZzZXQodHJhY2tpbmdKVHJlZS5hdHRyKCdvZmZzZXQnKSwgZHVyYXRpb24pO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhY2tpbmdFdmVudDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBBZCA9IHJlcXVpcmUoJy4vQWQnKTtcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuL1ZBU1RFcnJvcicpO1xudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4vVkFTVFJlc3BvbnNlJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG5cbnZhciBhc3luYyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2FzeW5jJyk7XG52YXIgaHR0cCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2h0dHAnKS5odHRwO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cbmZ1bmN0aW9uIFZBU1RDbGllbnQob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVkFTVENsaWVudCkpIHtcbiAgICByZXR1cm4gbmV3IFZBU1RDbGllbnQob3B0aW9ucyk7XG4gIH1cbiAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIFdSQVBQRVJfTElNSVQ6IDEwXG4gIH07XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMuc2V0dGluZ3MgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBvcHRpb25zLCBkZWZhdWx0T3B0aW9ucyk7XG4gIHRoaXMuZXJyb3JVUkxNYWNyb3MgPSBbXTtcbn1cblxuVkFTVENsaWVudC5wcm90b3R5cGUuZ2V0VkFTVFJlc3BvbnNlID0gZnVuY3Rpb24gZ2V0VkFTVFJlc3BvbnNlKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgdmFyIGVycm9yID0gc2FuaXR5Q2hlY2soYWRUYWdVcmwsIGNhbGxiYWNrKTtcbiAgaWYgKGVycm9yKSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgdGhpcy5fZ2V0VkFTVEFkLmJpbmQodGhpcywgYWRUYWdVcmwpLFxuICAgICAgYnVpbGRWQVNUUmVzcG9uc2VcbiAgICBdLFxuICAgIGNhbGxiYWNrKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIGJ1aWxkVkFTVFJlc3BvbnNlKGFkc0NoYWluLCBjYikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB0aGF0Ll9idWlsZFZBU1RSZXNwb25zZShhZHNDaGFpbik7XG4gICAgICBjYihudWxsLCByZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY2IoZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soYWRUYWdVcmwsIGNiKSB7XG4gICAgaWYgKCFhZFRhZ1VybCkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVFJlc3BvbnNlLCBtaXNzaW5nIGFkIHRhZyBVUkwnKTtcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNiKSkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVFJlc3BvbnNlLCBtaXNzaW5nIGNhbGxiYWNrIGZ1bmN0aW9uJyk7XG4gICAgfVxuICB9XG59O1xuXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fZ2V0VkFTVEFkID0gZnVuY3Rpb24gKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgZ2V0QWRXYXRlcmZhbGwoYWRUYWdVcmwsIGZ1bmN0aW9uIChlcnJvciwgdmFzdFRyZWUpIHtcbiAgICB2YXIgd2F0ZXJmYWxsQWRzID0gdmFzdFRyZWUgJiYgdXRpbGl0aWVzLmlzQXJyYXkodmFzdFRyZWUuYWRzKSA/IHZhc3RUcmVlLmFkcyA6IG51bGw7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGF0Ll90cmFja0Vycm9yKGVycm9yLCB3YXRlcmZhbGxBZHMpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yLCB3YXRlcmZhbGxBZHMpO1xuICAgIH1cblxuICAgIGdldEFkKHdhdGVyZmFsbEFkcy5zaGlmdCgpLCBbXSwgd2F0ZXJmYWxsSGFuZGxlcik7XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgZnVuY3Rpb24gd2F0ZXJmYWxsSGFuZGxlcihlcnJvciwgYWRDaGFpbikge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHRoYXQuX3RyYWNrRXJyb3IoZXJyb3IsIGFkQ2hhaW4pO1xuICAgICAgICBpZiAod2F0ZXJmYWxsQWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBnZXRBZCh3YXRlcmZhbGxBZHMuc2hpZnQoKSxbXSwgd2F0ZXJmYWxsSGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2soZXJyb3IsIGFkQ2hhaW4pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBhZENoYWluKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gZ2V0QWRXYXRlcmZhbGwoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3RWYXN0WE1MID0gdGhhdC5fcmVxdWVzdFZBU1RYbWwuYmluZCh0aGF0LCBhZFRhZ1VybCk7XG4gICAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICAgIHJlcXVlc3RWYXN0WE1MLFxuICAgICAgYnVpbGRWYXN0V2F0ZXJmYWxsXG4gICAgXSwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRWYXN0V2F0ZXJmYWxsKHhtbFN0ciwgY2FsbGJhY2spIHtcbiAgICB2YXIgdmFzdFRyZWU7XG4gICAgdHJ5IHtcbiAgICAgIHZhc3RUcmVlID0geG1sLnRvSlhPTlRyZWUoeG1sU3RyKTtcbiAgICAgIGxvZ2dlci5kZWJ1ZyhcImJ1aWx0IEpYT05UcmVlIGZyb20gVkFTVCByZXNwb25zZTpcIiwgdmFzdFRyZWUpO1xuXG4gICAgICBpZih1dGlsaXRpZXMuaXNBcnJheSh2YXN0VHJlZS5hZCkpIHtcbiAgICAgICAgdmFzdFRyZWUuYWRzID0gdmFzdFRyZWUuYWQ7XG4gICAgICB9IGVsc2UgaWYodmFzdFRyZWUuYWQpe1xuICAgICAgICB2YXN0VHJlZS5hZHMgPSBbdmFzdFRyZWUuYWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFzdFRyZWUuYWRzID0gW107XG4gICAgICB9XG4gICAgICBjYWxsYmFjayh2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSwgdmFzdFRyZWUpO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLmJ1aWxkVmFzdFdhdGVyZmFsbCwgZXJyb3IgcGFyc2luZyB4bWxcIiwgMTAwKSwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVWQVNUVHJlZSh2YXN0VHJlZSkge1xuICAgIHZhciB2YXN0VmVyc2lvbiA9IHhtbC5hdHRyKHZhc3RUcmVlLCAndmVyc2lvbicpO1xuXG4gICAgaWYgKCF2YXN0VHJlZS5hZCkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLnZhbGlkYXRlVkFTVFRyZWUsIG5vIEFkIGluIFZBU1QgdHJlZScsIDMwMyk7XG4gICAgfVxuXG4gICAgaWYgKHZhc3RWZXJzaW9uICYmICh2YXN0VmVyc2lvbiAhPSAzICYmIHZhc3RWZXJzaW9uICE9IDIpKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUQWQudmFsaWRhdGVWQVNUVHJlZSwgbm90IHN1cHBvcnRlZCBWQVNUIHZlcnNpb24gXCInICsgdmFzdFZlcnNpb24gKyAnXCInLCAxMDIpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QWQoYWRUYWdVcmwsIGFkQ2hhaW4sIGNhbGxiYWNrKSB7XG4gICAgaWYgKGFkQ2hhaW4ubGVuZ3RoID49IHRoYXQuV1JBUFBFUl9MSU1JVCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC5nZXRBZCwgcGxheWVycyB3cmFwcGVyIGxpbWl0IHJlYWNoZWQgKHRoZSBsaW1pdCBpcyBcIiArIHRoYXQuV1JBUFBFUl9MSU1JVCArIFwiKVwiLCAzMDIpLCBhZENoYWluKTtcbiAgICB9XG5cbiAgICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhhZFRhZ1VybCkpIHtcbiAgICAgICAgICByZXF1ZXN0VkFTVEFkKGFkVGFnVXJsLCBuZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0KG51bGwsIGFkVGFnVXJsKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJ1aWxkQWRcbiAgICBdLCBmdW5jdGlvbiAoZXJyb3IsIGFkKSB7XG4gICAgICBpZiAoYWQpIHtcbiAgICAgICAgYWRDaGFpbi5wdXNoKGFkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvciwgYWRDaGFpbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChhZC53cmFwcGVyKSB7XG4gICAgICAgIHJldHVybiBnZXRBZChhZC53cmFwcGVyLlZBU1RBZFRhZ1VSSSwgYWRDaGFpbiwgY2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgYWRDaGFpbik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEFkKGFkSnhvblRyZWUsIGNhbGxiYWNrKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhZCA9IG5ldyBBZChhZEp4b25UcmVlKTtcbiAgICAgIGNhbGxiYWNrKHZhbGlkYXRlQWQoYWQpLCBhZCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUQWQuYnVpbGRBZCwgZXJyb3IgcGFyc2luZyB4bWwnLCAxMDApLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZUFkKGFkKSB7XG4gICAgdmFyIHdyYXBwZXIgPSBhZC53cmFwcGVyO1xuICAgIHZhciBpbkxpbmUgPSBhZC5pbkxpbmU7XG4gICAgdmFyIGVyck1zZ1ByZWZpeCA9ICdvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC52YWxpZGF0ZUFkLCAnO1xuXG4gICAgaWYgKGluTGluZSAmJiB3cmFwcGVyKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcihlcnJNc2dQcmVmaXggK1wiSW5MaW5lIGFuZCBXcmFwcGVyIGJvdGggZm91bmQgb24gdGhlIHNhbWUgQWRcIiwgMTAxKTtcbiAgICB9XG5cbiAgICBpZiAoIWluTGluZSAmJiAhd3JhcHBlcikge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoZXJyTXNnUHJlZml4ICsgXCJub3Igd3JhcHBlciBub3IgaW5saW5lIGVsZW1lbnRzIGZvdW5kIG9uIHRoZSBBZFwiLCAxMDEpO1xuICAgIH1cblxuICAgIGlmIChpbkxpbmUgJiYgIWluTGluZS5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcihlcnJNc2dQcmVmaXggKyBcImNvdWxkIG5vdCBmaW5kIE1lZGlhRmlsZSB0aGF0IGlzIHN1cHBvcnRlZCBieSB0aGlzIHZpZGVvIHBsYXllclwiLCA0MDMpO1xuICAgIH1cblxuICAgIGlmICh3cmFwcGVyICYmICF3cmFwcGVyLlZBU1RBZFRhZ1VSSSkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoZXJyTXNnUHJlZml4ICsgXCJtaXNzaW5nICdWQVNUQWRUYWdVUkknIGluIHdyYXBwZXJcIiwgMTAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcXVlc3RWQVNUQWQoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XG4gICAgdGhhdC5fcmVxdWVzdFZBU1RYbWwoYWRUYWdVcmwsIGZ1bmN0aW9uIChlcnJvciwgeG1sU3RyKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciB2YXN0VHJlZSA9IHhtbC50b0pYT05UcmVlKHhtbFN0cik7XG4gICAgICAgIGNhbGxiYWNrKHZhbGlkYXRlVkFTVFRyZWUodmFzdFRyZWUpLCB2YXN0VHJlZS5hZCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC5yZXF1ZXN0VkFTVEFkLCBlcnJvciBwYXJzaW5nIHhtbFwiLCAxMDApKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuVkFTVENsaWVudC5wcm90b3R5cGUuX3JlcXVlc3RWQVNUWG1sID0gZnVuY3Rpb24gcmVxdWVzdFZBU1RYbWwoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XG4gIHRyeSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVGFnVXJsKSkge1xuICAgICAgYWRUYWdVcmwocmVxdWVzdEhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dnZXIuaW5mbyAoXCJyZXF1ZXN0aW5nIGFkVGFnVXJsOiBcIiArIGFkVGFnVXJsKTtcbiAgICAgIGh0dHAuZ2V0KGFkVGFnVXJsLCByZXF1ZXN0SGFuZGxlciwge1xuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhbGxiYWNrKGUpO1xuICB9XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiByZXF1ZXN0SGFuZGxlcihlcnJvciwgcmVzcG9uc2UsIHN0YXR1cykge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdmFyIGVyck1zZyA9IHV0aWxpdGllcy5pc0RlZmluZWQoc3RhdHVzKSA/XG4gICAgICBcIm9uIFZBU1RDbGllbnQucmVxdWVzdFZhc3RYTUwsIEhUVFAgcmVxdWVzdCBlcnJvciB3aXRoIHN0YXR1cyAnXCIgKyBzdGF0dXMgKyBcIidcIiA6XG4gICAgICAgIFwib24gVkFTVENsaWVudC5yZXF1ZXN0VmFzdFhNTCwgRXJyb3IgZ2V0dGluZyB0aGUgdGhlIFZBU1QgWE1MIHdpdGggaGUgcGFzc2VkIGFkVGFnWE1MIGZuXCI7XG4gICAgICByZXR1cm4gY2FsbGJhY2sobmV3IFZBU1RFcnJvcihlcnJNc2csIDMwMSksIG51bGwpO1xuICAgIH1cblxuICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlKTtcbiAgfVxufTtcblxuVkFTVENsaWVudC5wcm90b3R5cGUuX2J1aWxkVkFTVFJlc3BvbnNlID0gZnVuY3Rpb24gYnVpbGRWQVNUUmVzcG9uc2UoYWRzQ2hhaW4pIHtcbiAgdmFyIHJlc3BvbnNlID0gbmV3IFZBU1RSZXNwb25zZSgpO1xuICBhZGRBZHNUb1Jlc3BvbnNlKHJlc3BvbnNlLCBhZHNDaGFpbik7XG4gIHZhbGlkYXRlUmVzcG9uc2UocmVzcG9uc2UpO1xuXG4gIHJldHVybiByZXNwb25zZTtcblxuICAvLyoqKiBMb2NhbCBmdW5jdGlvbiAqKioqXG4gIGZ1bmN0aW9uIGFkZEFkc1RvUmVzcG9uc2UocmVzcG9uc2UsIGFkcykge1xuICAgIGFkcy5mb3JFYWNoKGZ1bmN0aW9uIChhZCkge1xuICAgICAgcmVzcG9uc2UuYWRkQWQoYWQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVSZXNwb25zZShyZXNwb25zZSkge1xuICAgIHZhciBwcm9ncmVzc0V2ZW50cyA9IHJlc3BvbnNlLnRyYWNraW5nRXZlbnRzLnByb2dyZXNzO1xuXG4gICAgaWYgKCFyZXNwb25zZS5oYXNMaW5lYXIoKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuX2J1aWxkVkFTVFJlc3BvbnNlLCBSZWNlaXZlZCBhbiBBZCB0eXBlIHRoYXQgaXMgbm90IHN1cHBvcnRlZFwiLCAyMDApO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5kdXJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5fYnVpbGRWQVNUUmVzcG9uc2UsIE1pc3NpbmcgZHVyYXRpb24gZmllbGQgaW4gVkFTVCByZXNwb25zZVwiLCAxMDEpO1xuICAgIH1cblxuICAgIGlmIChwcm9ncmVzc0V2ZW50cykge1xuICAgICAgcHJvZ3Jlc3NFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAocHJvZ3Jlc3NFdmVudCkge1xuICAgICAgICBpZiAoIXV0aWxpdGllcy5pc051bWJlcihwcm9ncmVzc0V2ZW50Lm9mZnNldCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5fYnVpbGRWQVNUUmVzcG9uc2UsIG1pc3Npbmcgb3Igd3Jvbmcgb2Zmc2V0IGF0dHJpYnV0ZSBvbiBwcm9ncmVzcyB0cmFja2luZyBldmVudFwiLCAxMDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cblZBU1RDbGllbnQucHJvdG90eXBlLl90cmFja0Vycm9yID0gZnVuY3Rpb24gKGVycm9yLCBhZENoYWluKSB7XG4gIGlmICghdXRpbGl0aWVzLmlzQXJyYXkoYWRDaGFpbikgfHwgYWRDaGFpbi5sZW5ndGggPT09IDApIHsgLy9UaGVyZSBpcyBub3RoaW5nIHRvIHRyYWNrXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGVycm9yVVJMTWFjcm9zID0gW107XG4gIGFkQ2hhaW4uZm9yRWFjaChhZGRFcnJvclVybE1hY3Jvcyk7XG4gIHZhc3RVdGlsLnRyYWNrKGVycm9yVVJMTWFjcm9zLCB7RVJST1JDT0RFOiBlcnJvci5jb2RlIHx8IDkwMH0pOyAgLy85MDAgPD09IFVuZGVmaW5lZCBlcnJvclxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICAqKiovXG4gIGZ1bmN0aW9uIGFkZEVycm9yVXJsTWFjcm9zKGFkKSB7XG4gICAgaWYgKGFkLndyYXBwZXIgJiYgYWQud3JhcHBlci5lcnJvcikge1xuICAgICAgZXJyb3JVUkxNYWNyb3MucHVzaChhZC53cmFwcGVyLmVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoYWQuaW5MaW5lICYmIGFkLmluTGluZS5lcnJvcikge1xuICAgICAgZXJyb3JVUkxNYWNyb3MucHVzaChhZC5pbkxpbmUuZXJyb3IpO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWQVNUQ2xpZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBWQVNURXJyb3IobWVzc2FnZSwgY29kZSkge1xuICB0aGlzLm1lc3NhZ2UgPSAnVkFTVCBFcnJvcjogJyArIChtZXNzYWdlIHx8ICcnKTtcbiAgaWYgKGNvZGUpIHtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICB9XG59XG5cblZBU1RFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcblZBU1RFcnJvci5wcm90b3R5cGUubmFtZSA9IFwiVkFTVCBFcnJvclwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RFcnJvcjsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogSW5uZXIgaGVscGVyIGNsYXNzIHRoYXQgZGVhbHMgd2l0aCB0aGUgbG9naWMgb2YgdGhlIGluZGl2aWR1YWwgc3RlcHMgbmVlZGVkIHRvIHNldHVwIGFuIGFkIGluIHRoZSBwbGF5ZXIuXG4gKlxuICogQHBhcmFtIHBsYXllciB7b2JqZWN0fSBpbnN0YW5jZSBvZiB0aGUgcGxheWVyIHRoYXQgd2lsbCBwbGF5IHRoZSBhZC4gSXQgYXNzdW1lcyB0aGF0IHRoZSB2aWRlb2pzLWNvbnRyaWItYWRzIHBsdWdpblxuICogICAgICAgICAgICAgICAgICAgICAgICBoYXMgYmVlbiBpbml0aWFsaXplZCB3aGVuIHlvdSB1c2UgaXRzIHV0aWxpdHkgZnVuY3Rpb25zLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbnZhciBWQVNUUmVzcG9uc2UgPSByZXF1aXJlKCcuL1ZBU1RSZXNwb25zZScpO1xudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4vVkFTVEVycm9yJyk7XG52YXIgVkFTVFRyYWNrZXIgPSByZXF1aXJlKCcuL1ZBU1RUcmFja2VyJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG5cbnZhciBhc3luYyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2FzeW5jJyk7XG52YXIgZG9tID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZG9tJyk7XG52YXIgcGxheWVyVXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9wbGF5ZXJVdGlscycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cbmZ1bmN0aW9uIFZBU1RJbnRlZ3JhdG9yKHBsYXllcikge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVkFTVEludGVncmF0b3IpKSB7XG4gICAgcmV0dXJuIG5ldyBWQVNUSW50ZWdyYXRvcihwbGF5ZXIpO1xuICB9XG5cbiAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG59XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5wbGF5QWQgPSBmdW5jdGlvbiBwbGF5QWQodmFzdFJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgdXRpbGl0aWVzLm5vb3A7XG5cbiAgaWYgKCEodmFzdFJlc3BvbnNlIGluc3RhbmNlb2YgVkFTVFJlc3BvbnNlKSkge1xuICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKCdPbiBWQVNUSW50ZWdyYXRvciwgbWlzc2luZyByZXF1aXJlZCBWQVNUUmVzcG9uc2UnKSk7XG4gIH1cblxuICBhc3luYy53YXRlcmZhbGwoW1xuICAgIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICBuZXh0KG51bGwsIHZhc3RSZXNwb25zZSk7XG4gICAgfSxcbiAgICB0aGlzLl9zZWxlY3RBZFNvdXJjZS5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX2NyZWF0ZVZBU1RUcmFja2VyLmJpbmQodGhpcyksXG4gICAgdGhpcy5fYWRkQ2xpY2tUaHJvdWdoLmJpbmQodGhpcyksXG4gICAgdGhpcy5fYWRkU2tpcEJ1dHRvbi5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX3NldHVwRXZlbnRzLmJpbmQodGhpcyksXG4gICAgdGhpcy5fcGxheVNlbGVjdGVkQWQuYmluZCh0aGlzKVxuICBdLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgaWYgKGVycm9yICYmIHJlc3BvbnNlKSB7XG4gICAgICB0aGF0Ll90cmFja0Vycm9yKGVycm9yLCByZXNwb25zZSk7XG4gICAgfVxuICAgIGNhbGxiYWNrKGVycm9yLCByZXNwb25zZSk7XG4gIH0pO1xuXG4gIHRoaXMuX2FkVW5pdCA9IHtcbiAgICBfc3JjOiBudWxsLFxuICAgIHR5cGU6ICdWQVNUJyxcbiAgICBwYXVzZUFkOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0LnBsYXllci5wYXVzZSh0cnVlKTtcbiAgICB9LFxuXG4gICAgcmVzdW1lQWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQucGxheWVyLnBsYXkodHJ1ZSk7XG4gICAgfSxcblxuICAgIGlzUGF1c2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhhdC5wbGF5ZXIucGF1c2VkKHRydWUpO1xuICAgIH0sXG5cbiAgICBnZXRTcmM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zcmM7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB0aGlzLl9hZFVuaXQ7XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3NlbGVjdEFkU291cmNlID0gZnVuY3Rpb24gc2VsZWN0QWRTb3VyY2UocmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHZhciBzb3VyY2U7XG5cbiAgdmFyIHBsYXllcldpZHRoID0gZG9tLmdldERpbWVuc2lvbih0aGlzLnBsYXllci5lbCgpKS53aWR0aDtcbiAgcmVzcG9uc2UubWVkaWFGaWxlcy5zb3J0KGZ1bmN0aW9uIGNvbXBhcmVUbyhhLCBiKSB7XG4gICAgdmFyIGRlbHRhQSA9IE1hdGguYWJzKHBsYXllcldpZHRoIC0gYS53aWR0aCk7XG4gICAgdmFyIGRlbHRhQiA9IE1hdGguYWJzKHBsYXllcldpZHRoIC0gYi53aWR0aCk7XG4gICAgcmV0dXJuIGRlbHRhQSAtIGRlbHRhQjtcbiAgfSk7XG5cbiAgc291cmNlID0gdGhpcy5wbGF5ZXIuc2VsZWN0U291cmNlKHJlc3BvbnNlLm1lZGlhRmlsZXMpLnNvdXJjZTtcblxuICBpZiAoc291cmNlKSB7XG4gICAgbG9nZ2VyLmluZm8gKFwic2VsZWN0ZWQgc291cmNlOiBcIiwgc291cmNlKTtcbiAgICBpZiAodGhpcy5fYWRVbml0KSB7XG4gICAgICB0aGlzLl9hZFVuaXQuX3NyYyA9IHNvdXJjZTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHNvdXJjZSwgcmVzcG9uc2UpO1xuICB9XG5cbiAgLy8gY29kZSA0MDMgPD09IENvdWxkbid0IGZpbmQgTWVkaWFGaWxlIHRoYXQgaXMgc3VwcG9ydGVkIGJ5IHRoaXMgdmlkZW8gcGxheWVyXG4gIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJDb3VsZCBub3QgZmluZCBBZCBtZWRpYWZpbGUgc3VwcG9ydGVkIGJ5IHRoaXMgcGxheWVyXCIsIDQwMyksIHJlc3BvbnNlKTtcbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fY3JlYXRlVkFTVFRyYWNrZXIgPSBmdW5jdGlvbiBjcmVhdGVWQVNUVHJhY2tlcihhZE1lZGlhRmlsZSwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHRyeSB7XG4gICAgY2FsbGJhY2sobnVsbCwgYWRNZWRpYUZpbGUsIG5ldyBWQVNUVHJhY2tlcihhZE1lZGlhRmlsZS5zcmMsIHJlc3BvbnNlKSwgcmVzcG9uc2UpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FsbGJhY2soZSwgcmVzcG9uc2UpO1xuICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3NldHVwRXZlbnRzID0gZnVuY3Rpb24gc2V0dXBFdmVudHMoYWRNZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgcHJldmlvdXNseU11dGVkO1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHBsYXllci5vbignZnVsbHNjcmVlbmNoYW5nZScsIHRyYWNrRnVsbHNjcmVlbkNoYW5nZSk7XG4gIHBsYXllci5vbigndmFzdC5hZFN0YXJ0JywgdHJhY2tJbXByZXNzaW9ucyk7XG4gIHBsYXllci5vbigncGF1c2UnLCB0cmFja1BhdXNlKTtcbiAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdHJhY2tQcm9ncmVzcyk7XG4gIHBsYXllci5vbigndm9sdW1lY2hhbmdlJywgdHJhY2tWb2x1bWVDaGFuZ2UpO1xuXG4gIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgdW5iaW5kRXZlbnRzKTtcbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCcsICd2YXN0LmFkU2tpcCddLCBmdW5jdGlvbihldnQpe1xuICAgIGlmKGV2dC50eXBlID09PSAndmFzdC5hZEVuZCcpe1xuICAgICAgdHJhY2tlci50cmFja0NvbXBsZXRlKCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2FsbGJhY2sobnVsbCwgYWRNZWRpYUZpbGUsIHJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHtcbiAgICBwbGF5ZXIub2ZmKCdmdWxsc2NyZWVuY2hhbmdlJywgdHJhY2tGdWxsc2NyZWVuQ2hhbmdlKTtcbiAgICBwbGF5ZXIub2ZmKCd2YXN0LmFkU3RhcnQnLCB0cmFja0ltcHJlc3Npb25zKTtcbiAgICBwbGF5ZXIub2ZmKCdwYXVzZScsIHRyYWNrUGF1c2UpO1xuICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB0cmFja1Byb2dyZXNzKTtcbiAgICBwbGF5ZXIub2ZmKCd2b2x1bWVjaGFuZ2UnLCB0cmFja1ZvbHVtZUNoYW5nZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja0Z1bGxzY3JlZW5DaGFuZ2UoKSB7XG4gICAgaWYgKHBsYXllci5pc0Z1bGxzY3JlZW4oKSkge1xuICAgICAgdHJhY2tlci50cmFja0Z1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhY2tlci50cmFja0V4aXRGdWxsc2NyZWVuKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tQYXVzZSgpIHtcbiAgICAvL05PVEU6IHdoZW5ldmVyIGEgdmlkZW8gZW5kcyB0aGUgdmlkZW8gRWxlbWVudCB0cmlnZ2VycyBhICdwYXVzZScgZXZlbnQgYmVmb3JlIHRoZSAnZW5kZWQnIGV2ZW50LlxuICAgIC8vICAgICAgV2Ugc2hvdWxkIG5vdCB0cmFjayB0aGlzIHBhdXNlIGV2ZW50IGJlY2F1c2UgaXQgbWFrZXMgdGhlIFZBU1QgdHJhY2tpbmcgY29uZnVzaW5nIGFnYWluIHdlIHVzZSBhXG4gICAgLy8gICAgICBUaHJlc2hvbGQgb2YgMiBzZWNvbmRzIHRvIHByZXZlbnQgZmFsc2UgcG9zaXRpdmVzIG9uIElPUy5cbiAgICBpZiAoTWF0aC5hYnMocGxheWVyLmR1cmF0aW9uKCkgLSBwbGF5ZXIuY3VycmVudFRpbWUoKSkgPCAyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhY2tlci50cmFja1BhdXNlKCk7XG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsncGxheScsICd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmKGV2dC50eXBlID09PSAncGxheScpe1xuICAgICAgICB0cmFja2VyLnRyYWNrUmVzdW1lKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja1Byb2dyZXNzKCkge1xuICAgIHZhciBjdXJyZW50VGltZUluTXMgPSBwbGF5ZXIuY3VycmVudFRpbWUoKSAqIDEwMDA7XG4gICAgdHJhY2tlci50cmFja1Byb2dyZXNzKGN1cnJlbnRUaW1lSW5Ncyk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja0ltcHJlc3Npb25zKCkge1xuICAgIHRyYWNrZXIudHJhY2tJbXByZXNzaW9ucygpO1xuICAgIHRyYWNrZXIudHJhY2tDcmVhdGl2ZVZpZXcoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrVm9sdW1lQ2hhbmdlKCkge1xuICAgIHZhciBtdXRlZCA9IHBsYXllci5tdXRlZCgpO1xuICAgIGlmIChtdXRlZCkge1xuICAgICAgdHJhY2tlci50cmFja011dGUoKTtcbiAgICB9IGVsc2UgaWYgKHByZXZpb3VzbHlNdXRlZCkge1xuICAgICAgdHJhY2tlci50cmFja1VubXV0ZSgpO1xuICAgIH1cbiAgICBwcmV2aW91c2x5TXV0ZWQgPSBtdXRlZDtcbiAgfVxufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9hZGRTa2lwQnV0dG9uID0gZnVuY3Rpb24gYWRkU2tpcEJ1dHRvbihzb3VyY2UsIHRyYWNrZXIsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgc2tpcE9mZnNldEluU2VjO1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihyZXNwb25zZS5za2lwb2Zmc2V0KSkge1xuICAgIHNraXBPZmZzZXRJblNlYyA9IHJlc3BvbnNlLnNraXBvZmZzZXQgLyAxMDAwO1xuICAgIGFkZFNraXBCdXR0b25Ub1BsYXllcih0aGlzLnBsYXllciwgc2tpcE9mZnNldEluU2VjKTtcbiAgfVxuICBjYWxsYmFjayhudWxsLCBzb3VyY2UsIHRyYWNrZXIsIHJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgZnVuY3Rpb24gYWRkU2tpcEJ1dHRvblRvUGxheWVyKHBsYXllciwgc2tpcE9mZnNldCkge1xuICAgIHZhciBza2lwQnV0dG9uID0gY3JlYXRlU2tpcEJ1dHRvbihwbGF5ZXIpO1xuICAgIHZhciB1cGRhdGVTa2lwQnV0dG9uID0gdXBkYXRlU2tpcEJ1dHRvblN0YXRlLmJpbmQodGhhdCwgc2tpcEJ1dHRvbiwgc2tpcE9mZnNldCwgcGxheWVyKTtcblxuICAgIHBsYXllci5lbCgpLmFwcGVuZENoaWxkKHNraXBCdXR0b24pO1xuICAgIHBsYXllci5vbigndGltZXVwZGF0ZScsIHVwZGF0ZVNraXBCdXR0b24pO1xuXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVTa2lwQnV0dG9uKTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZVNraXBCdXR0b24oKSB7XG4gICAgICBwbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgdXBkYXRlU2tpcEJ1dHRvbik7XG4gICAgICBkb20ucmVtb3ZlKHNraXBCdXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNraXBCdXR0b24ocGxheWVyKSB7XG4gICAgdmFyIHNraXBCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgXCJ2YXN0LXNraXAtYnV0dG9uXCIpO1xuXG4gICAgc2tpcEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChkb20uaGFzQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKSkge1xuICAgICAgICB0cmFja2VyLnRyYWNrU2tpcCgpO1xuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZFNraXAnKTtcbiAgICAgIH1cblxuICAgICAgLy9XZSBwcmV2ZW50IGV2ZW50IHByb3BhZ2F0aW9uIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggdGhlIGNsaWNrVGhyb3VnaCBhbmQgc28gb25cbiAgICAgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBza2lwQnV0dG9uO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2tpcEJ1dHRvblN0YXRlKHNraXBCdXR0b24sIHNraXBPZmZzZXQsIHBsYXllcikge1xuICAgIHZhciB0aW1lTGVmdCA9IE1hdGguY2VpbChza2lwT2Zmc2V0IC0gcGxheWVyLmN1cnJlbnRUaW1lKCkpO1xuICAgIGlmICh0aW1lTGVmdCA+IDApIHtcbiAgICAgIHNraXBCdXR0b24uaW5uZXJIVE1MID0gXCJTa2lwIGluIFwiICsgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHModGltZUxlZnQsIDIpICsgXCIuLi5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFkb20uaGFzQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKSkge1xuICAgICAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKTtcbiAgICAgICAgc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNraXAgYWRcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fYWRkQ2xpY2tUaHJvdWdoID0gZnVuY3Rpb24gYWRkQ2xpY2tUaHJvdWdoKG1lZGlhRmlsZSwgdHJhY2tlciwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgdmFyIGJsb2NrZXIgPSBjcmVhdGVDbGlja1Rocm91Z2hCbG9ja2VyKHBsYXllciwgdHJhY2tlciwgcmVzcG9uc2UpO1xuICB2YXIgdXBkYXRlQmxvY2tlciA9IHVwZGF0ZUJsb2NrZXJVUkwuYmluZCh0aGlzLCBibG9ja2VyLCByZXNwb25zZSwgcGxheWVyKTtcblxuICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoYmxvY2tlciwgcGxheWVyLmNvbnRyb2xCYXIuZWwoKSk7XG4gIHBsYXllci5vbigndGltZXVwZGF0ZScsIHVwZGF0ZUJsb2NrZXIpO1xuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZUJsb2NrZXIpO1xuXG4gIHJldHVybiBjYWxsYmFjayhudWxsLCBtZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2xpY2tUaHJvdWdoQmxvY2tlcihwbGF5ZXIsIHRyYWNrZXIsIHJlc3BvbnNlKSB7XG4gICAgdmFyIGJsb2NrZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgdmFyIGNsaWNrVGhyb3VnaE1hY3JvID0gcmVzcG9uc2UuY2xpY2tUaHJvdWdoO1xuXG4gICAgZG9tLmFkZENsYXNzKGJsb2NrZXIsICd2YXN0LWJsb2NrZXInKTtcbiAgICBibG9ja2VyLmhyZWYgPSBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChjbGlja1Rocm91Z2hNYWNybywgcGxheWVyKTtcblxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoY2xpY2tUaHJvdWdoTWFjcm8pKSB7XG4gICAgICBibG9ja2VyLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgfVxuXG4gICAgYmxvY2tlci5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChwbGF5ZXIucGF1c2VkKCkpIHtcbiAgICAgICAgcGxheWVyLnBsYXkoKTtcblxuICAgICAgICAvL1dlIHByZXZlbnQgZXZlbnQgcHJvcGFnYXRpb24gdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgcGxheWVyJ3Mgbm9ybWFsIHBhdXNlIG1lY2hhbmlzbVxuICAgICAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgIHRyYWNrZXIudHJhY2tDbGljaygpO1xuICAgIH07XG5cbiAgICByZXR1cm4gYmxvY2tlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUJsb2NrZXJVUkwoYmxvY2tlciwgcmVzcG9uc2UsIHBsYXllcikge1xuICAgIGJsb2NrZXIuaHJlZiA9IGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKHJlc3BvbnNlLmNsaWNrVGhyb3VnaCwgcGxheWVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKGNsaWNrVGhyb3VnaE1hY3JvLCBwbGF5ZXIpIHtcbiAgICB2YXIgdmFyaWFibGVzID0ge1xuICAgICAgQVNTRVRVUkk6IG1lZGlhRmlsZS5zcmMsXG4gICAgICBDT05URU5UUExBWUhFQUQ6IHZhc3RVdGlsLmZvcm1hdFByb2dyZXNzKHBsYXllci5jdXJyZW50VGltZSgpICogMTAwMClcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNsaWNrVGhyb3VnaE1hY3JvID8gdmFzdFV0aWwucGFyc2VVUkxNYWNybyhjbGlja1Rocm91Z2hNYWNybywgdmFyaWFibGVzKSA6ICcjJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUJsb2NrZXIoKSB7XG4gICAgcGxheWVyLm9mZigndGltZXVwZGF0ZScsIHVwZGF0ZUJsb2NrZXIpO1xuICAgIGRvbS5yZW1vdmUoYmxvY2tlcik7XG4gIH1cbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fcGxheVNlbGVjdGVkQWQgPSBmdW5jdGlvbiBwbGF5U2VsZWN0ZWRBZChzb3VyY2UsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cbiAgcGxheWVyLnByZWxvYWQoXCJhdXRvXCIpOyAvL3dpdGhvdXQgcHJlbG9hZD1hdXRvIHRoZSBkdXJhdGlvbmNoYW5nZSBldmVudCBpcyBuZXZlciBmaXJlZFxuICBwbGF5ZXIuc3JjKHNvdXJjZSk7XG5cbiAgbG9nZ2VyLmRlYnVnIChcIjxWQVNUSW50ZWdyYXRvci5fcGxheVNlbGVjdGVkQWQ+IHdhaXRpbmcgZm9yIGR1cmF0aW9uY2hhbmdlIHRvIHBsYXkgdGhlIGFkLi4uXCIpO1xuXG4gIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ2R1cmF0aW9uY2hhbmdlJywgJ2Vycm9yJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoZXZ0LnR5cGUgPT09ICdkdXJhdGlvbmNoYW5nZScpIHtcbiAgICAgIGxvZ2dlci5kZWJ1ZyAoXCI8VkFTVEludGVncmF0b3IuX3BsYXlTZWxlY3RlZEFkPiBnb3QgZHVyYXRpb25jaGFuZ2U7IGNhbGxpbmcgcGxheUFkKClcIik7XG4gICAgICBwbGF5QWQoKTtcbiAgICB9IGVsc2UgaWYoZXZ0LnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUSW50ZWdyYXRvciwgUGxheWVyIGlzIHVuYWJsZSB0byBwbGF5IHRoZSBBZFwiLCA0MDApLCByZXNwb25zZSk7XG4gICAgfVxuICAgIC8vTk9URTogSWYgdGhlIGFkcyBnZXQgY2FuY2VsZWQgd2UgZG8gbm90aGluZy9cbiAgfSk7XG5cbiAgLyoqKiogbG9jYWwgZnVuY3Rpb25zICoqKioqKi9cbiAgZnVuY3Rpb24gcGxheUFkKCkge1xuXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsncGxheWluZycsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZihldnQudHlwZSA9PT0gJ3Zhc3QuYWRzQ2FuY2VsJyl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbG9nZ2VyLmRlYnVnIChcIjxWQVNUSW50ZWdyYXRvci5fcGxheVNlbGVjdGVkQWQvcGxheUFkPiBnb3QgcGxheWluZyBldmVudDsgdHJpZ2dlcmluZyB2YXN0LmFkU3RhcnQuLi5cIik7XG5cbiAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkU3RhcnQnKTtcblxuICAgICAgcGxheWVyLm9uKCdlbmRlZCcsIHByb2NlZWQpO1xuICAgICAgcGxheWVyLm9uKCd2YXN0LmFkc0NhbmNlbCcsIHByb2NlZWQpO1xuICAgICAgcGxheWVyLm9uKCd2YXN0LmFkU2tpcCcsIHByb2NlZWQpO1xuXG4gICAgICBmdW5jdGlvbiBwcm9jZWVkKGV2dCkge1xuXG4gICAgICAgIGlmKGV2dC50eXBlID09PSAnZW5kZWQnICYmIChwbGF5ZXIuZHVyYXRpb24oKSAtIHBsYXllci5jdXJyZW50VGltZSgpKSA+IDMgKSB7XG4gICAgICAgICAgLy8gSWdub3JlIGVuZGVkIGV2ZW50IGlmIHRoZSBBZCB0aW1lIHdhcyBub3QgJ25lYXInIHRoZSBlbmRcbiAgICAgICAgICAvLyBhdm9pZHMgaXNzdWVzIHdoZXJlIElPUyBjb250cm9scyBjb3VsZCBza2lwIHRoZSBBZFxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYXllci5vZmYoJ2VuZGVkJywgcHJvY2VlZCk7XG4gICAgICAgIHBsYXllci5vZmYoJ3Zhc3QuYWRzQ2FuY2VsJywgcHJvY2VlZCk7XG4gICAgICAgIHBsYXllci5vZmYoJ3Zhc3QuYWRTa2lwJywgcHJvY2VlZCk7XG5cbiAgICAgICAgLy9OT1RFOiBpZiB0aGUgYWRzIGdldCBjYW5jZWwgd2UgZG8gbm90aGluZyBhcGFydCByZW1vdmluZyB0aGUgbGlzdG5lcnNcbiAgICAgICAgaWYoZXZ0LnR5cGUgPT09ICdlbmRlZCcgfHwgZXZ0LnR5cGUgPT09ICd2YXN0LmFkU2tpcCcpe1xuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbG9nZ2VyLmRlYnVnIChcIjxWQVNUSW50ZWdyYXRvci5fcGxheVNlbGVjdGVkQWQvcGxheUFkPiBjYWxsaW5nIHBsYXllci5wbGF5KCkuLi5cIik7XG5cbiAgICBwbGF5ZXIucGxheSgpO1xuICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3RyYWNrRXJyb3IgPSBmdW5jdGlvbiB0cmFja0Vycm9yKGVycm9yLCByZXNwb25zZSkge1xuICB2YXN0VXRpbC50cmFjayhyZXNwb25zZS5lcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3IuY29kZSB8fCA5MDB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVkFTVEludGVncmF0b3I7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWQgPSByZXF1aXJlKCcuL0FkJyk7XG52YXIgVmlkZW9DbGlja3MgPSByZXF1aXJlKCcuL1ZpZGVvQ2xpY2tzJyk7XG52YXIgTGluZWFyID0gcmVxdWlyZSgnLi9MaW5lYXInKTtcbnZhciBJbkxpbmUgPSByZXF1aXJlKCcuL0luTGluZScpO1xudmFyIFdyYXBwZXIgPSByZXF1aXJlKCcuL1dyYXBwZXInKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxud2luZG93LkluTGluZV9fQSA9IEluTGluZTtcbmZ1bmN0aW9uIFZBU1RSZXNwb25zZSgpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcbiAgICByZXR1cm4gbmV3IFZBU1RSZXNwb25zZSgpO1xuICB9XG5cbiAgdGhpcy5fbGluZWFyQWRkZWQgPSBmYWxzZTtcbiAgdGhpcy5hZHMgPSBbXTtcbiAgdGhpcy5lcnJvclVSTE1hY3JvcyA9IFtdO1xuICB0aGlzLmltcHJlc3Npb25zID0gW107XG4gIHRoaXMuY2xpY2tUcmFja2luZ3MgPSBbXTtcbiAgdGhpcy5jdXN0b21DbGlja3MgPSBbXTtcbiAgdGhpcy50cmFja2luZ0V2ZW50cyA9IHt9O1xuICB0aGlzLm1lZGlhRmlsZXMgPSBbXTtcbiAgdGhpcy5jbGlja1Rocm91Z2ggPSB1bmRlZmluZWQ7XG4gIHRoaXMuYWRUaXRsZSA9ICcnO1xuICB0aGlzLmR1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB0aGlzLnNraXBvZmZzZXQgPSB1bmRlZmluZWQ7XG59XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuYWRkQWQgPSBmdW5jdGlvbiAoYWQpIHtcbiAgdmFyIGluTGluZSwgd3JhcHBlcjtcbiAgaWYgKGFkIGluc3RhbmNlb2YgQWQpIHtcbiAgICBpbkxpbmUgPSBhZC5pbkxpbmU7XG4gICAgd3JhcHBlciA9IGFkLndyYXBwZXI7XG5cbiAgICB0aGlzLmFkcy5wdXNoKGFkKTtcblxuICAgIGlmIChpbkxpbmUpIHtcbiAgICAgIHRoaXMuX2FkZEluTGluZShpbkxpbmUpO1xuICAgIH1cblxuICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICB0aGlzLl9hZGRXcmFwcGVyKHdyYXBwZXIpO1xuICAgIH1cbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkRXJyb3JUcmFja1VybCA9IGZ1bmN0aW9uIChlcnJvcikge1xuICB2YXIgZXJyb3JVUkwgPSBlcnJvciBpbnN0YW5jZW9mIHhtbC5KWE9OVHJlZSA/IHhtbC5rZXlWYWx1ZShlcnJvcikgOiBlcnJvcjtcbiAgaWYgKGVycm9yVVJMKSB7XG4gICAgdGhpcy5lcnJvclVSTE1hY3Jvcy5wdXNoKGVycm9yVVJMKTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkSW1wcmVzc2lvbnMgPSBmdW5jdGlvbiAoaW1wcmVzc2lvbnMpIHtcbiAgdXRpbGl0aWVzLmlzQXJyYXkoaW1wcmVzc2lvbnMpICYmIGFwcGVuZFRvQXJyYXkodGhpcy5pbXByZXNzaW9ucywgaW1wcmVzc2lvbnMpO1xufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkQ2xpY2tUaHJvdWdoID0gZnVuY3Rpb24gKGNsaWNrVGhyb3VnaCkge1xuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY2xpY2tUaHJvdWdoKSkge1xuICAgIHRoaXMuY2xpY2tUaHJvdWdoID0gY2xpY2tUaHJvdWdoO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRDbGlja1RyYWNraW5ncyA9IGZ1bmN0aW9uIChjbGlja1RyYWNraW5ncykge1xuICB1dGlsaXRpZXMuaXNBcnJheShjbGlja1RyYWNraW5ncykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmNsaWNrVHJhY2tpbmdzLCBjbGlja1RyYWNraW5ncyk7XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRDdXN0b21DbGlja3MgPSBmdW5jdGlvbiAoY3VzdG9tQ2xpY2tzKSB7XG4gIHV0aWxpdGllcy5pc0FycmF5KGN1c3RvbUNsaWNrcykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmN1c3RvbUNsaWNrcywgY3VzdG9tQ2xpY2tzKTtcbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFRyYWNraW5nRXZlbnRzID0gZnVuY3Rpb24gKHRyYWNraW5nRXZlbnRzKSB7XG4gIHZhciBldmVudHNNYXAgPSB0aGlzLnRyYWNraW5nRXZlbnRzO1xuXG4gIGlmICh0cmFja2luZ0V2ZW50cykge1xuICAgIHRyYWNraW5nRXZlbnRzID0gdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdFdmVudHMpID8gdHJhY2tpbmdFdmVudHMgOiBbdHJhY2tpbmdFdmVudHNdO1xuICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNraW5nRXZlbnQpIHtcbiAgICAgIGlmICghZXZlbnRzTWFwW3RyYWNraW5nRXZlbnQubmFtZV0pIHtcbiAgICAgICAgZXZlbnRzTWFwW3RyYWNraW5nRXZlbnQubmFtZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGV2ZW50c01hcFt0cmFja2luZ0V2ZW50Lm5hbWVdLnB1c2godHJhY2tpbmdFdmVudCk7XG4gICAgfSk7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFRpdGxlID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyh0aXRsZSkpIHtcbiAgICB0aGlzLmFkVGl0bGUgPSB0aXRsZTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkRHVyYXRpb24gPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihkdXJhdGlvbikpIHtcbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFZpZGVvQ2xpY2tzID0gZnVuY3Rpb24gKHZpZGVvQ2xpY2tzKSB7XG4gIGlmICh2aWRlb0NsaWNrcyBpbnN0YW5jZW9mIFZpZGVvQ2xpY2tzKSB7XG4gICAgdGhpcy5fYWRkQ2xpY2tUaHJvdWdoKHZpZGVvQ2xpY2tzLmNsaWNrVGhyb3VnaCk7XG4gICAgdGhpcy5fYWRkQ2xpY2tUcmFja2luZ3ModmlkZW9DbGlja3MuY2xpY2tUcmFja2luZ3MpO1xuICAgIHRoaXMuX2FkZEN1c3RvbUNsaWNrcyh2aWRlb0NsaWNrcy5jdXN0b21DbGlja3MpO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRNZWRpYUZpbGVzID0gZnVuY3Rpb24gKG1lZGlhRmlsZXMpIHtcbiAgdXRpbGl0aWVzLmlzQXJyYXkobWVkaWFGaWxlcykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLm1lZGlhRmlsZXMsIG1lZGlhRmlsZXMpO1xufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkU2tpcG9mZnNldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgaWYgKG9mZnNldCkge1xuICAgIHRoaXMuc2tpcG9mZnNldCA9IG9mZnNldDtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkQWRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKGFkUGFyYW1ldGVycykge1xuICBpZiAoYWRQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5hZFBhcmFtZXRlcnMgPSBhZFBhcmFtZXRlcnM7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZExpbmVhciA9IGZ1bmN0aW9uIChsaW5lYXIpIHtcbiAgaWYgKGxpbmVhciBpbnN0YW5jZW9mIExpbmVhcikge1xuICAgIHRoaXMuX2FkZER1cmF0aW9uKGxpbmVhci5kdXJhdGlvbik7XG4gICAgdGhpcy5fYWRkVHJhY2tpbmdFdmVudHMobGluZWFyLnRyYWNraW5nRXZlbnRzKTtcbiAgICB0aGlzLl9hZGRWaWRlb0NsaWNrcyhsaW5lYXIudmlkZW9DbGlja3MpO1xuICAgIHRoaXMuX2FkZE1lZGlhRmlsZXMobGluZWFyLm1lZGlhRmlsZXMpO1xuICAgIHRoaXMuX2FkZFNraXBvZmZzZXQobGluZWFyLnNraXBvZmZzZXQpO1xuICAgIHRoaXMuX2FkZEFkUGFyYW1ldGVycyhsaW5lYXIuYWRQYXJhbWV0ZXJzKTtcbiAgICB0aGlzLl9saW5lYXJBZGRlZCA9IHRydWU7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEluTGluZSA9IGZ1bmN0aW9uIChpbkxpbmUpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gIGlmIChpbkxpbmUgaW5zdGFuY2VvZiBJbkxpbmUpIHtcbiAgICB0aGlzLl9hZGRUaXRsZShpbkxpbmUuYWRUaXRsZSk7XG4gICAgdGhpcy5fYWRkRXJyb3JUcmFja1VybChpbkxpbmUuZXJyb3IpO1xuICAgIHRoaXMuX2FkZEltcHJlc3Npb25zKGluTGluZS5pbXByZXNzaW9ucyk7XG5cbiAgICBpbkxpbmUuY3JlYXRpdmVzLmZvckVhY2goZnVuY3Rpb24gKGNyZWF0aXZlKSB7XG4gICAgICBpZiAoY3JlYXRpdmUubGluZWFyKSB7XG4gICAgICAgIHRoYXQuX2FkZExpbmVhcihjcmVhdGl2ZS5saW5lYXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRXcmFwcGVyID0gZnVuY3Rpb24gKHdyYXBwZXIpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gIGlmICh3cmFwcGVyIGluc3RhbmNlb2YgV3JhcHBlcikge1xuICAgIHRoaXMuX2FkZEVycm9yVHJhY2tVcmwod3JhcHBlci5lcnJvcik7XG4gICAgdGhpcy5fYWRkSW1wcmVzc2lvbnMod3JhcHBlci5pbXByZXNzaW9ucyk7XG5cbiAgICB3cmFwcGVyLmNyZWF0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChjcmVhdGl2ZSkge1xuICAgICAgdmFyIGxpbmVhciA9IGNyZWF0aXZlLmxpbmVhcjtcbiAgICAgIGlmIChsaW5lYXIpIHtcbiAgICAgICAgdGhhdC5fYWRkVmlkZW9DbGlja3MobGluZWFyLnZpZGVvQ2xpY2tzKTtcbiAgICAgICAgdGhhdC5jbGlja1Rocm91Z2ggPSB1bmRlZmluZWQ7Ly9XZSBlbnN1cmUgdGhhdCBubyBjbGlja1Rocm91Z2ggaGFzIGJlZW4gYWRkZWRcbiAgICAgICAgdGhhdC5fYWRkVHJhY2tpbmdFdmVudHMobGluZWFyLnRyYWNraW5nRXZlbnRzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5oYXNMaW5lYXIgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5fbGluZWFyQWRkZWQ7XG59O1xuXG5mdW5jdGlvbiBhcHBlbmRUb0FycmF5KGFycmF5LCBpdGVtcykge1xuICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgYXJyYXkucHVzaChpdGVtKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVkFTVFJlc3BvbnNlO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuL1ZBU1RFcnJvcicpO1xudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4vVkFTVFJlc3BvbnNlJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBWQVNUVHJhY2tlcihhc3NldFVSSSwgdmFzdFJlc3BvbnNlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWQVNUVHJhY2tlcikpIHtcbiAgICByZXR1cm4gbmV3IFZBU1RUcmFja2VyKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpO1xuICB9XG5cbiAgdGhpcy5zYW5pdHlDaGVjayhhc3NldFVSSSwgdmFzdFJlc3BvbnNlKTtcbiAgdGhpcy5pbml0aWFsaXplKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpO1xuXG59XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oYXNzZXRVUkksIHZhc3RSZXNwb25zZSkge1xuICB0aGlzLnJlc3BvbnNlID0gdmFzdFJlc3BvbnNlO1xuICB0aGlzLmFzc2V0VVJJID0gYXNzZXRVUkk7XG4gIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICB0aGlzLnF1YXJ0aWxlcyA9IHtcbiAgICBmaXJzdFF1YXJ0aWxlOiB7dHJhY2tlZDogZmFsc2UsIHRpbWU6IE1hdGgucm91bmQoMjUgKiB2YXN0UmVzcG9uc2UuZHVyYXRpb24pIC8gMTAwfSxcbiAgICBtaWRwb2ludDoge3RyYWNrZWQ6IGZhbHNlLCB0aW1lOiBNYXRoLnJvdW5kKDUwICogdmFzdFJlc3BvbnNlLmR1cmF0aW9uKSAvIDEwMH0sXG4gICAgdGhpcmRRdWFydGlsZToge3RyYWNrZWQ6IGZhbHNlLCB0aW1lOiBNYXRoLnJvdW5kKDc1ICogdmFzdFJlc3BvbnNlLmR1cmF0aW9uKSAvIDEwMH1cbiAgfTtcbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS5zYW5pdHlDaGVjayA9IGZ1bmN0aW9uKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpIHtcbiAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcoYXNzZXRVUkkpIHx8IHV0aWxpdGllcy5pc0VtcHR5U3RyaW5nKGFzc2V0VVJJKSkge1xuICAgIHRocm93IG5ldyBWQVNURXJyb3IoJ29uIFZBU1RUcmFja2VyIGNvbnN0cnVjdG9yLCBtaXNzaW5nIHJlcXVpcmVkIHRoZSBVUkkgb2YgdGhlIGFkIGFzc2V0IGJlaW5nIHBsYXllZCcpO1xuICB9XG5cbiAgaWYgKCEodmFzdFJlc3BvbnNlIGluc3RhbmNlb2YgVkFTVFJlc3BvbnNlKSkge1xuICAgIHRocm93IG5ldyBWQVNURXJyb3IoJ29uIFZBU1RUcmFja2VyIGNvbnN0cnVjdG9yLCBtaXNzaW5nIHJlcXVpcmVkIFZBU1QgcmVzcG9uc2UnKTtcbiAgfVxufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrVVJMcyA9IGZ1bmN0aW9uIHRyYWNrVVJMcyh1cmxzLCB2YXJpYWJsZXMpIHtcbiAgaWYgKHV0aWxpdGllcy5pc0FycmF5KHVybHMpICYmIHVybHMubGVuZ3RoID4gMCkge1xuICAgIHZhcmlhYmxlcyA9IHV0aWxpdGllcy5leHRlbmQoe1xuICAgICAgQVNTRVRVUkk6IHRoaXMuYXNzZXRVUkksXG4gICAgICBDT05URU5UUExBWUhFQUQ6IHZhc3RVdGlsLmZvcm1hdFByb2dyZXNzKHRoaXMucHJvZ3Jlc3MpXG4gICAgfSwgdmFyaWFibGVzIHx8IHt9KTtcblxuICAgIHZhc3RVdGlsLnRyYWNrKHVybHMsIHZhcmlhYmxlcyk7XG4gIH1cbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0V2ZW50ID0gZnVuY3Rpb24gdHJhY2tFdmVudChldmVudE5hbWUsIHRyYWNrT25jZSkge1xuICB0aGlzLnRyYWNrVVJMcyhnZXRFdmVudFVyaXModGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50c1tldmVudE5hbWVdKSk7XG4gIGlmICh0cmFja09uY2UpIHtcbiAgICB0aGlzLnJlc3BvbnNlLnRyYWNraW5nRXZlbnRzW2V2ZW50TmFtZV0gPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgZnVuY3Rpb24gZ2V0RXZlbnRVcmlzKHRyYWNraW5nRXZlbnRzKSB7XG4gICAgdmFyIHVyaXM7XG5cbiAgICBpZiAodHJhY2tpbmdFdmVudHMpIHtcbiAgICAgIHVyaXMgPSBbXTtcbiAgICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKCFldmVudC51cmkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVyaXMucHVzaChldmVudC51cmkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB1cmlzO1xuICB9XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tQcm9ncmVzcyA9IGZ1bmN0aW9uIHRyYWNrUHJvZ3Jlc3MobmV3UHJvZ3Jlc3NJbk1zKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIGV2ZW50cyA9IFtdO1xuICB2YXIgT05DRSA9IHRydWU7XG4gIHZhciBBTFdBWVMgPSBmYWxzZTtcbiAgdmFyIHRyYWNraW5nRXZlbnRzID0gdGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50cztcblxuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKG5ld1Byb2dyZXNzSW5NcykpIHtcbiAgICBhZGRUcmFja0V2ZW50KCdzdGFydCcsIE9OQ0UsIG5ld1Byb2dyZXNzSW5NcyA+IDApO1xuICAgIGFkZFRyYWNrRXZlbnQoJ3Jld2luZCcsIEFMV0FZUywgaGFzUmV3b3VuZCh0aGlzLnByb2dyZXNzLCBuZXdQcm9ncmVzc0luTXMpKTtcbiAgICBhZGRRdWFydGlsZUV2ZW50cyhuZXdQcm9ncmVzc0luTXMpO1xuICAgIHRyYWNrUHJvZ3Jlc3NFdmVudHMobmV3UHJvZ3Jlc3NJbk1zKTtcbiAgICB0cmFja0V2ZW50cygpO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBuZXdQcm9ncmVzc0luTXM7XG4gIH1cblxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgZnVuY3Rpb24gaGFzUmV3b3VuZChjdXJyZW50UHJvZ3Jlc3MsIG5ld1Byb2dyZXNzKSB7XG4gICAgdmFyIFJFV0lORF9USFJFU0hPTEQgPSAzMDAwOyAvL0lPUyB2aWRlbyBjbG9jayBpcyB2ZXJ5IHVucmVsaWFibGUgYW5kIHdlIG5lZWQgYSAzIHNlY29uZHMgdGhyZXNob2xkIHRvIGVuc3VyZSB0aGF0IHRoZXJlIHdhcyBhIHJld2luZCBhbiB0aGF0IGl0IHdhcyBvbiBwdXJwb3NlLlxuICAgIHJldHVybiBjdXJyZW50UHJvZ3Jlc3MgPiBuZXdQcm9ncmVzc0luTXMgJiYgTWF0aC5hYnMobmV3UHJvZ3Jlc3MgLSBjdXJyZW50UHJvZ3Jlc3MpID4gUkVXSU5EX1RIUkVTSE9MRDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRyYWNrRXZlbnQoZXZlbnROYW1lLCB0cmFja09uY2UsIGNhbkJlQWRkZWQpIHtcbiAgICBpZiAodHJhY2tpbmdFdmVudHNbZXZlbnROYW1lXSAmJiBjYW5CZUFkZGVkKSB7XG4gICAgICBldmVudHMucHVzaCh7XG4gICAgICAgIG5hbWU6IGV2ZW50TmFtZSxcbiAgICAgICAgdHJhY2tPbmNlOiAhIXRyYWNrT25jZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkUXVhcnRpbGVFdmVudHMocHJvZ3Jlc3MpIHtcbiAgICB2YXIgcXVhcnRpbGVzID0gdGhhdC5xdWFydGlsZXM7XG4gICAgdmFyIGZpcnN0UXVhcnRpbGUgPSB0aGF0LnF1YXJ0aWxlcy5maXJzdFF1YXJ0aWxlO1xuICAgIHZhciBtaWRwb2ludCA9IHRoYXQucXVhcnRpbGVzLm1pZHBvaW50O1xuICAgIHZhciB0aGlyZFF1YXJ0aWxlID0gdGhhdC5xdWFydGlsZXMudGhpcmRRdWFydGlsZTtcblxuICAgIGlmICghZmlyc3RRdWFydGlsZS50cmFja2VkKSB7XG4gICAgICB0cmFja1F1YXJ0aWxlKCdmaXJzdFF1YXJ0aWxlJywgcHJvZ3Jlc3MpO1xuICAgIH0gZWxzZSBpZiAoIW1pZHBvaW50LnRyYWNrZWQpIHtcbiAgICAgIHRyYWNrUXVhcnRpbGUoJ21pZHBvaW50JywgcHJvZ3Jlc3MpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXJkUXVhcnRpbGUudHJhY2tlZCl7XG4gICAgICB0cmFja1F1YXJ0aWxlKCd0aGlyZFF1YXJ0aWxlJywgcHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xuICAgIGZ1bmN0aW9uIHRyYWNrUXVhcnRpbGUocXVhcnRpbGVOYW1lLCBwcm9ncmVzcyl7XG4gICAgICB2YXIgcXVhcnRpbGUgPSBxdWFydGlsZXNbcXVhcnRpbGVOYW1lXTtcbiAgICAgIGlmKGNhbkJlVHJhY2tlZChxdWFydGlsZSwgcHJvZ3Jlc3MpKXtcbiAgICAgICAgcXVhcnRpbGUudHJhY2tlZCA9IHRydWU7XG4gICAgICAgIGFkZFRyYWNrRXZlbnQocXVhcnRpbGVOYW1lLCBPTkNFLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5CZVRyYWNrZWQocXVhcnRpbGUsIHByb2dyZXNzKSB7XG4gICAgdmFyIHF1YXJ0aWxlVGltZSA9IHF1YXJ0aWxlLnRpbWU7XG4gICAgLy9XZSBvbmx5IGZpcmUgdGhlIHF1YXJ0aWxlIGV2ZW50IGlmIHRoZSBwcm9ncmVzcyBpcyBiaWdnZXIgdGhhbiB0aGUgcXVhcnRpbGUgdGltZSBieSA1IHNlY29uZHMgYXQgbW9zdC5cbiAgICByZXR1cm4gcHJvZ3Jlc3MgPj0gcXVhcnRpbGVUaW1lICYmIHByb2dyZXNzIDw9IChxdWFydGlsZVRpbWUgKyA1MDAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrUHJvZ3Jlc3NFdmVudHMocHJvZ3Jlc3MpIHtcbiAgICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRXZlbnRzLnByb2dyZXNzKSkge1xuICAgICAgcmV0dXJuOyAvL05vdGhpbmcgdG8gdHJhY2tcbiAgICB9XG5cbiAgICB2YXIgcGVuZGluZ1Byb2dyZXNzRXZ0cyA9IFtdO1xuXG4gICAgdHJhY2tpbmdFdmVudHMucHJvZ3Jlc3MuZm9yRWFjaChmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoZXZ0Lm9mZnNldCA8PSBwcm9ncmVzcykge1xuICAgICAgICB0aGF0LnRyYWNrVVJMcyhbZXZ0LnVyaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVuZGluZ1Byb2dyZXNzRXZ0cy5wdXNoKGV2dCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdHJhY2tpbmdFdmVudHMucHJvZ3Jlc3MgPSBwZW5kaW5nUHJvZ3Jlc3NFdnRzO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tFdmVudHMoKSB7XG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB0aGF0LnRyYWNrRXZlbnQoZXZlbnQubmFtZSwgZXZlbnQudHJhY2tPbmNlKTtcbiAgICB9KTtcbiAgfVxufTtcblxuW1xuICAncmV3aW5kJyxcbiAgJ2Z1bGxzY3JlZW4nLFxuICAnZXhpdEZ1bGxzY3JlZW4nLFxuICAncGF1c2UnLFxuICAncmVzdW1lJyxcbiAgJ211dGUnLFxuICAndW5tdXRlJyxcbiAgJ2FjY2VwdEludml0YXRpb24nLFxuICAnYWNjZXB0SW52aXRhdGlvbkxpbmVhcicsXG4gICdjb2xsYXBzZScsXG4gICdleHBhbmQnXG5dLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgIFZBU1RUcmFja2VyLnByb3RvdHlwZVsndHJhY2snICsgdXRpbGl0aWVzLmNhcGl0YWxpemUoZXZlbnROYW1lKV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnRyYWNrRXZlbnQoZXZlbnROYW1lKTtcbiAgICB9O1xuICB9KTtcblxuW1xuICAnc3RhcnQnLFxuICAnc2tpcCcsXG4gICdjbG9zZScsXG4gICdjbG9zZUxpbmVhcidcbl0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgVkFTVFRyYWNrZXIucHJvdG90eXBlWyd0cmFjaycgKyB1dGlsaXRpZXMuY2FwaXRhbGl6ZShldmVudE5hbWUpXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudHJhY2tFdmVudChldmVudE5hbWUsIHRydWUpO1xuICAgIH07XG4gIH0pO1xuXG5bXG4gICdmaXJzdFF1YXJ0aWxlJyxcbiAgJ21pZHBvaW50JyxcbiAgJ3RoaXJkUXVhcnRpbGUnXG5dLmZvckVhY2goZnVuY3Rpb24gKHF1YXJ0aWxlKSB7XG4gICAgVkFTVFRyYWNrZXIucHJvdG90eXBlWyd0cmFjaycgKyB1dGlsaXRpZXMuY2FwaXRhbGl6ZShxdWFydGlsZSldID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5xdWFydGlsZXNbcXVhcnRpbGVdLnRyYWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy50cmFja0V2ZW50KHF1YXJ0aWxlLCB0cnVlKTtcbiAgICB9O1xuICB9KTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmKHRoaXMucXVhcnRpbGVzLnRoaXJkUXVhcnRpbGUudHJhY2tlZCl7XG4gICAgdGhpcy50cmFja0V2ZW50KCdjb21wbGV0ZScsIHRydWUpO1xuICB9XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tFcnJvcldpdGhDb2RlID0gZnVuY3Rpb24gdHJhY2tFcnJvcldpdGhDb2RlKGVycm9yY29kZSkge1xuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKGVycm9yY29kZSkpIHtcbiAgICB0aGlzLnRyYWNrVVJMcyh0aGlzLnJlc3BvbnNlLmVycm9yVVJMTWFjcm9zLCB7RVJST1JDT0RFOiBlcnJvcmNvZGV9KTtcbiAgfVxufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrSW1wcmVzc2lvbnMgPSBmdW5jdGlvbiB0cmFja0ltcHJlc3Npb25zKCkge1xuICB0aGlzLnRyYWNrVVJMcyh0aGlzLnJlc3BvbnNlLmltcHJlc3Npb25zKTtcbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0NyZWF0aXZlVmlldyA9IGZ1bmN0aW9uIHRyYWNrQ3JlYXRpdmVWaWV3KCkge1xuICB0aGlzLnRyYWNrRXZlbnQoJ2NyZWF0aXZlVmlldycpO1xufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrQ2xpY2sgPSBmdW5jdGlvbiB0cmFja0NsaWNrKCkge1xuICB0aGlzLnRyYWNrVVJMcyh0aGlzLnJlc3BvbnNlLmNsaWNrVHJhY2tpbmdzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVkFTVFRyYWNrZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbmZ1bmN0aW9uIFZpZGVvQ2xpY2tzKHZpZGVvQ2xpY2tKVHJlZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmlkZW9DbGlja3MpKSB7XG4gICAgcmV0dXJuIG5ldyBWaWRlb0NsaWNrcyh2aWRlb0NsaWNrSlRyZWUpO1xuICB9XG5cbiAgdGhpcy5jbGlja1Rocm91Z2ggPSB4bWwua2V5VmFsdWUodmlkZW9DbGlja0pUcmVlLmNsaWNrVGhyb3VnaCk7XG4gIHRoaXMuY2xpY2tUcmFja2luZ3MgPSBwYXJzZUNsaWNrVHJhY2tpbmdzKHZpZGVvQ2xpY2tKVHJlZS5jbGlja1RyYWNraW5nKTtcbiAgdGhpcy5jdXN0b21DbGlja3MgPSBwYXJzZUNsaWNrVHJhY2tpbmdzKHZpZGVvQ2xpY2tKVHJlZS5jdXN0b21DbGljayk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBwYXJzZUNsaWNrVHJhY2tpbmdzKHRyYWNraW5nRGF0YSkge1xuICAgIHZhciBjbGlja1RyYWNraW5ncyA9IFtdO1xuICAgIGlmICh0cmFja2luZ0RhdGEpIHtcbiAgICAgIHRyYWNraW5nRGF0YSA9IHV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRGF0YSkgPyB0cmFja2luZ0RhdGEgOiBbdHJhY2tpbmdEYXRhXTtcbiAgICAgIHRyYWNraW5nRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChjbGlja1RyYWNraW5nRGF0YSkge1xuICAgICAgICBjbGlja1RyYWNraW5ncy5wdXNoKHhtbC5rZXlWYWx1ZShjbGlja1RyYWNraW5nRGF0YSkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjbGlja1RyYWNraW5ncztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZGVvQ2xpY2tzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xudmFyIENyZWF0aXZlID0gcmVxdWlyZSgnLi9DcmVhdGl2ZScpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG5mdW5jdGlvbiBXcmFwcGVyKHdyYXBwZXJKVHJlZSkge1xuICBpZighKHRoaXMgaW5zdGFuY2VvZiBXcmFwcGVyKSkge1xuICAgIHJldHVybiBuZXcgV3JhcHBlcih3cmFwcGVySlRyZWUpO1xuICB9XG5cbiAgLy9SZXF1aXJlZCBlbGVtZW50c1xuICB0aGlzLmFkU3lzdGVtID0geG1sLmtleVZhbHVlKHdyYXBwZXJKVHJlZS5hZFN5c3RlbSk7XG4gIHRoaXMuaW1wcmVzc2lvbnMgPSB2YXN0VXRpbC5wYXJzZUltcHJlc3Npb25zKHdyYXBwZXJKVHJlZS5pbXByZXNzaW9uKTtcbiAgdGhpcy5WQVNUQWRUYWdVUkkgPSB4bWwua2V5VmFsdWUod3JhcHBlckpUcmVlLnZBU1RBZFRhZ1VSSSk7XG5cbiAgLy9PcHRpb25hbCBlbGVtZW50c1xuICB0aGlzLmNyZWF0aXZlcyA9IENyZWF0aXZlLnBhcnNlQ3JlYXRpdmVzKHdyYXBwZXJKVHJlZS5jcmVhdGl2ZXMpO1xuICB0aGlzLmVycm9yID0geG1sLmtleVZhbHVlKHdyYXBwZXJKVHJlZS5lcnJvcik7XG4gIHRoaXMuZXh0ZW5zaW9ucyA9IHdyYXBwZXJKVHJlZS5leHRlbnNpb25zO1xuXG4gIC8vT3B0aW9uYWwgYXR0cnNcbiAgdGhpcy5mb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnMgPSB1dGlsaXRpZXMuaXNEZWZpbmVkKHhtbC5hdHRyKHdyYXBwZXJKVHJlZSwgJ2ZvbGxvd0FkZGl0aW9uYWxXcmFwcGVycycpKT8geG1sLmF0dHIod3JhcHBlckpUcmVlLCAnZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzJyk6IHRydWU7XG4gIHRoaXMuYWxsb3dNdWx0aXBsZUFkcyA9IHhtbC5hdHRyKHdyYXBwZXJKVHJlZSwgJ2FsbG93TXVsdGlwbGVBZHMnKTtcbiAgdGhpcy5mYWxsYmFja09uTm9BZCA9IHhtbC5hdHRyKHdyYXBwZXJKVHJlZSwgJ2ZhbGxiYWNrT25Ob0FkJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV3JhcHBlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIGR1cmF0aW9uUmVnZXggPSAvKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkoXFwuKFxcZFxcZFxcZCkpPy87XG5cbnZhciBwYXJzZXJzID0ge1xuXG4gIGR1cmF0aW9uOiBmdW5jdGlvbiBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uU3RyKSB7XG5cbiAgICB2YXIgbWF0Y2gsIGR1cmF0aW9uSW5NcztcblxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoZHVyYXRpb25TdHIpKSB7XG4gICAgICBtYXRjaCA9IGR1cmF0aW9uU3RyLm1hdGNoKGR1cmF0aW9uUmVnZXgpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGR1cmF0aW9uSW5NcyA9IHBhcnNlSG91cnNUb01zKG1hdGNoWzFdKSArIHBhcnNlTWluVG9NcyhtYXRjaFsyXSkgKyBwYXJzZVNlY1RvTXMobWF0Y2hbM10pICsgcGFyc2VJbnQobWF0Y2hbNV0gfHwgMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTmFOKGR1cmF0aW9uSW5NcykgPyBudWxsIDogZHVyYXRpb25Jbk1zO1xuXG4gICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgIGZ1bmN0aW9uIHBhcnNlSG91cnNUb01zKGhvdXJTdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChob3VyU3RyLCAxMCkgKiA2MCAqIDYwICogMTAwMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZU1pblRvTXMobWluU3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQobWluU3RyLCAxMCkgKiA2MCAqIDEwMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VTZWNUb01zKHNlY1N0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHNlY1N0ciwgMTApICogMTAwMDtcbiAgICB9XG4gIH0sXG5cbiAgb2Zmc2V0OiBmdW5jdGlvbiBwYXJzZU9mZnNldChvZmZzZXQsIGR1cmF0aW9uKSB7XG4gICAgaWYoaXNQZXJjZW50YWdlKG9mZnNldCkpe1xuICAgICAgcmV0dXJuIGNhbGN1bGF0ZVBlcmNlbnRhZ2Uob2Zmc2V0LCBkdXJhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZXJzLmR1cmF0aW9uKG9mZnNldCk7XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgICBmdW5jdGlvbiBpc1BlcmNlbnRhZ2Uob2Zmc2V0KSB7XG4gICAgICB2YXIgcGVyY2VudGFnZVJlZ2V4ID0gL15cXGQrKFxcLlxcZCspPyUkL2c7XG4gICAgICByZXR1cm4gcGVyY2VudGFnZVJlZ2V4LnRlc3Qob2Zmc2V0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVQZXJjZW50YWdlKHBlcmNlbnRTdHIsIGR1cmF0aW9uKSB7XG4gICAgICBpZihkdXJhdGlvbikge1xuICAgICAgICByZXR1cm4gY2FsY1BlcmNlbnQoZHVyYXRpb24sIHBhcnNlRmxvYXQocGVyY2VudFN0ci5yZXBsYWNlKCclJywgJycpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjUGVyY2VudChxdWFudGl0eSwgcGVyY2VudCl7XG4gICAgICByZXR1cm4gcXVhbnRpdHkgKiBwZXJjZW50IC8gMTAwO1xuICAgIH1cbiAgfVxuXG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VyczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgVlBBSURIVE1MNVRlY2ggPSByZXF1aXJlKCcuLi92cGFpZC9WUEFJREhUTUw1VGVjaCcpO1xuXG52YXIgdmFzdFV0aWwgPSB7XG5cbiAgdHJhY2s6IGZ1bmN0aW9uIHRyYWNrKFVSTE1hY3JvcywgdmFyaWFibGVzKSB7XG4gICAgdmFyIHNvdXJjZXMgPSB2YXN0VXRpbC5wYXJzZVVSTE1hY3JvcyhVUkxNYWNyb3MsIHZhcmlhYmxlcyk7XG4gICAgdmFyIHRyYWNrSW1ncyA9IFtdO1xuICAgIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc3JjKSB7XG4gICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gc3JjO1xuICAgICAgdHJhY2tJbWdzLnB1c2goaW1nKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJhY2tJbWdzO1xuICB9LFxuXG4gIHBhcnNlVVJMTWFjcm9zOiBmdW5jdGlvbiBwYXJzZU1hY3JvcyhVUkxNYWNyb3MsIHZhcmlhYmxlcykge1xuICAgIHZhciBwYXJzZWRVUkxzID0gW107XG5cbiAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgfHwge307XG5cbiAgICBpZiAoISh2YXJpYWJsZXNbXCJDQUNIRUJVU1RJTkdcIl0pKSB7XG4gICAgICB2YXJpYWJsZXNbXCJDQUNIRUJVU1RJTkdcIl0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxLjBlKzEwKTtcbiAgICB9XG5cbiAgICBVUkxNYWNyb3MuZm9yRWFjaChmdW5jdGlvbiAoVVJMTWFjcm8pIHtcbiAgICAgIHBhcnNlZFVSTHMucHVzaCh2YXN0VXRpbC5fcGFyc2VVUkxNYWNybyhVUkxNYWNybywgdmFyaWFibGVzKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyc2VkVVJMcztcbiAgfSxcblxuICBwYXJzZVVSTE1hY3JvOiBmdW5jdGlvbiBwYXJzZU1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpIHtcbiAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgfHwge307XG5cbiAgICBpZiAoISh2YXJpYWJsZXNbXCJDQUNIRUJVU1RJTkdcIl0pKSB7XG4gICAgICB2YXJpYWJsZXNbXCJDQUNIRUJVU1RJTkdcIl0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxLjBlKzEwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFzdFV0aWwuX3BhcnNlVVJMTWFjcm8oVVJMTWFjcm8sIHZhcmlhYmxlcyk7XG4gIH0sXG5cbiAgX3BhcnNlVVJMTWFjcm86IGZ1bmN0aW9uIHBhcnNlTWFjcm8oVVJMTWFjcm8sIHZhcmlhYmxlcykge1xuICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyB8fCB7fTtcblxuICAgIHV0aWxpdGllcy5mb3JFYWNoKHZhcmlhYmxlcywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIFVSTE1hY3JvID0gVVJMTWFjcm8ucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXFtcIiArIGtleSArIFwiXFxcXFxcXVwiLCAnZ20nKSwgdmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFVSTE1hY3JvO1xuICB9LFxuXG4gIHBhcnNlRHVyYXRpb246IGZ1bmN0aW9uIHBhcnNlRHVyYXRpb24oZHVyYXRpb25TdHIpIHtcbiAgICB2YXIgZHVyYXRpb25SZWdleCA9IC8oXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKShcXC4oXFxkXFxkXFxkKSk/LztcbiAgICB2YXIgbWF0Y2gsIGR1cmF0aW9uSW5NcztcblxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoZHVyYXRpb25TdHIpKSB7XG4gICAgICBtYXRjaCA9IGR1cmF0aW9uU3RyLm1hdGNoKGR1cmF0aW9uUmVnZXgpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGR1cmF0aW9uSW5NcyA9IHBhcnNlSG91cnNUb01zKG1hdGNoWzFdKSArIHBhcnNlTWluVG9NcyhtYXRjaFsyXSkgKyBwYXJzZVNlY1RvTXMobWF0Y2hbM10pICsgcGFyc2VJbnQobWF0Y2hbNV0gfHwgMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTmFOKGR1cmF0aW9uSW5NcykgPyBudWxsIDogZHVyYXRpb25Jbk1zO1xuXG4gICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgIGZ1bmN0aW9uIHBhcnNlSG91cnNUb01zKGhvdXJTdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChob3VyU3RyLCAxMCkgKiA2MCAqIDYwICogMTAwMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZU1pblRvTXMobWluU3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQobWluU3RyLCAxMCkgKiA2MCAqIDEwMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VTZWNUb01zKHNlY1N0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHNlY1N0ciwgMTApICogMTAwMDtcbiAgICB9XG4gIH0sXG5cbiAgcGFyc2VJbXByZXNzaW9uczogZnVuY3Rpb24gcGFyc2VJbXByZXNzaW9ucyhpbXByZXNzaW9ucykge1xuICAgIGlmIChpbXByZXNzaW9ucykge1xuICAgICAgaW1wcmVzc2lvbnMgPSB1dGlsaXRpZXMuaXNBcnJheShpbXByZXNzaW9ucykgPyBpbXByZXNzaW9ucyA6IFtpbXByZXNzaW9uc107XG4gICAgICByZXR1cm4gdXRpbGl0aWVzLnRyYW5zZm9ybUFycmF5KGltcHJlc3Npb25zLCBmdW5jdGlvbiAoaW1wcmVzc2lvbikge1xuICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoaW1wcmVzc2lvbi5rZXlWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gaW1wcmVzc2lvbi5rZXlWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfSxcblxuXG4gIC8vV2UgYXNzdW1lIHRoYXQgdGhlIHByb2dyZXNzIGlzIGdvaW5nIHRvIGFycml2ZSBpbiBtaWxsaXNlY29uZHNcbiAgZm9ybWF0UHJvZ3Jlc3M6IGZ1bmN0aW9uIGZvcm1hdFByb2dyZXNzKHByb2dyZXNzKSB7XG4gICAgdmFyIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBtaWxsaXNlY29uZHM7XG4gICAgaG91cnMgPSBwcm9ncmVzcyAvICg2MCAqIDYwICogMTAwMCk7XG4gICAgaG91cnMgPSBNYXRoLmZsb29yKGhvdXJzKTtcbiAgICBtaW51dGVzID0gKHByb2dyZXNzIC8gKDYwICogMTAwMCkpICUgNjA7XG4gICAgbWludXRlcyA9IE1hdGguZmxvb3IobWludXRlcyk7XG4gICAgc2Vjb25kcyA9IChwcm9ncmVzcyAvIDEwMDApICUgNjA7XG4gICAgc2Vjb25kcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyk7XG4gICAgbWlsbGlzZWNvbmRzID0gcHJvZ3Jlc3MgJSAxMDAwO1xuICAgIHJldHVybiB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhob3VycywgMikgKyAnOicgKyB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhtaW51dGVzLCAyKSArICc6JyArIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKHNlY29uZHMsIDIpICsgJy4nICsgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHMobWlsbGlzZWNvbmRzLCAzKTtcbiAgfSxcblxuICBwYXJzZU9mZnNldDogZnVuY3Rpb24gcGFyc2VPZmZzZXQob2Zmc2V0LCBkdXJhdGlvbikge1xuICAgIGlmIChpc1BlcmNlbnRhZ2Uob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIGNhbGN1bGF0ZVBlcmNlbnRhZ2Uob2Zmc2V0LCBkdXJhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiB2YXN0VXRpbC5wYXJzZUR1cmF0aW9uKG9mZnNldCk7XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgICBmdW5jdGlvbiBpc1BlcmNlbnRhZ2Uob2Zmc2V0KSB7XG4gICAgICB2YXIgcGVyY2VudGFnZVJlZ2V4ID0gL15cXGQrKFxcLlxcZCspPyUkL2c7XG4gICAgICByZXR1cm4gcGVyY2VudGFnZVJlZ2V4LnRlc3Qob2Zmc2V0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVQZXJjZW50YWdlKHBlcmNlbnRTdHIsIGR1cmF0aW9uKSB7XG4gICAgICBpZiAoZHVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGNhbGNQZXJjZW50KGR1cmF0aW9uLCBwYXJzZUZsb2F0KHBlcmNlbnRTdHIucmVwbGFjZSgnJScsICcnKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY1BlcmNlbnQocXVhbnRpdHksIHBlcmNlbnQpIHtcbiAgICAgIHJldHVybiBxdWFudGl0eSAqIHBlcmNlbnQgLyAxMDA7XG4gICAgfVxuICB9LFxuXG5cbiAgLy9MaXN0IG9mIHN1cHBvcnRlZCBWUEFJRCB0ZWNobm9sb2dpZXNcbiAgVlBBSURfdGVjaHM6IFtcbiAgICBWUEFJREhUTUw1VGVjaFxuICBdLFxuXG4gIGlzVlBBSUQ6IGZ1bmN0aW9uIGlzVlBBSURNZWRpYUZpbGUobWVkaWFGaWxlKSB7XG4gICAgcmV0dXJuICEhbWVkaWFGaWxlICYmIG1lZGlhRmlsZS5hcGlGcmFtZXdvcmsgPT09ICdWUEFJRCc7XG4gIH0sXG5cbiAgZmluZFN1cHBvcnRlZFZQQUlEVGVjaDogZnVuY3Rpb24gZmluZFN1cHBvcnRlZFZQQUlEVGVjaChtaW1lVHlwZSkge1xuICAgIHZhciBpLCBsZW4sIFZQQUlEVGVjaDtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IHRoaXMuVlBBSURfdGVjaHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIFZQQUlEVGVjaCA9IHRoaXMuVlBBSURfdGVjaHNbaV07XG4gICAgICBpZiAoVlBBSURUZWNoLnN1cHBvcnRzKG1pbWVUeXBlKSkge1xuICAgICAgICByZXR1cm4gVlBBSURUZWNoO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZhc3RVdGlsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNURXJyb3InKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gVlBBSURBZFVuaXRXcmFwcGVyKHZwYWlkQWRVbml0LCBvcHRzKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWUEFJREFkVW5pdFdyYXBwZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBWUEFJREFkVW5pdFdyYXBwZXIodnBhaWRBZFVuaXQsIG9wdHMpO1xuICB9XG4gIHNhbml0eUNoZWNrKHZwYWlkQWRVbml0LCBvcHRzKTtcblxuICB0aGlzLm9wdGlvbnMgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBvcHRzKTtcblxuICB0aGlzLl9hZFVuaXQgPSB2cGFpZEFkVW5pdDtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGFkVW5pdCwgb3B0cykge1xuICAgIGlmICghYWRVbml0IHx8ICFWUEFJREFkVW5pdFdyYXBwZXIuY2hlY2tWUEFJREludGVyZmFjZShhZFVuaXQpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWUEFJREFkVW5pdFdyYXBwZXIsIHRoZSBwYXNzZWQgVlBBSUQgYWRVbml0IGRvZXMgbm90IGZ1bGx5IGltcGxlbWVudCB0aGUgVlBBSUQgaW50ZXJmYWNlJyk7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNPYmplY3Qob3B0cykpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIGV4cGVjdGVkIG9wdGlvbnMgaGFzaCAgYnV0IGdvdCAnXCIgKyBvcHRzICsgXCInXCIpO1xuICAgIH1cblxuICAgIGlmICghKFwicmVzcG9uc2VUaW1lb3V0XCIgaW4gb3B0cykgfHwgIXV0aWxpdGllcy5pc051bWJlcihvcHRzLnJlc3BvbnNlVGltZW91dCkgKXtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIGV4cGVjdGVkIHJlc3BvbnNlVGltZW91dCBpbiBvcHRpb25zXCIpO1xuICAgIH1cbiAgfVxufVxuXG5WUEFJREFkVW5pdFdyYXBwZXIuY2hlY2tWUEFJREludGVyZmFjZSA9IGZ1bmN0aW9uIGNoZWNrVlBBSURJbnRlcmZhY2UoVlBBSURBZFVuaXQpIHtcbiAgLy9OT1RFOiBza2lwQWQgaXMgbm90IHBhcnQgb2YgdGhlIG1ldGhvZCBsaXN0IGJlY2F1c2UgaXQgb25seSBhcHBlYXJzIGluIFZQQUlEIDIuMCBhbmQgd2Ugc3VwcG9ydCBWUEFJRCAxLjBcbiAgdmFyIFZQQUlESW50ZXJmYWNlTWV0aG9kcyA9IFtcbiAgICAnaGFuZHNoYWtlVmVyc2lvbicsICdpbml0QWQnLCAnc3RhcnRBZCcsICdzdG9wQWQnLCAncmVzaXplQWQnLCAncGF1c2VBZCcsICdleHBhbmRBZCcsICdjb2xsYXBzZUFkJ1xuICBdO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBWUEFJREludGVyZmFjZU1ldGhvZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIVZQQUlEQWRVbml0IHx8ICF1dGlsaXRpZXMuaXNGdW5jdGlvbihWUEFJREFkVW5pdFtWUEFJREludGVyZmFjZU1ldGhvZHNbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIGNhblN1YnNjcmliZVRvRXZlbnRzKFZQQUlEQWRVbml0KSAmJiBjYW5VbnN1YnNjcmliZUZyb21FdmVudHMoVlBBSURBZFVuaXQpO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cblxuICBmdW5jdGlvbiBjYW5TdWJzY3JpYmVUb0V2ZW50cyhhZFVuaXQpIHtcbiAgICByZXR1cm4gdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LnN1YnNjcmliZSkgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LmFkZEV2ZW50TGlzdGVuZXIpIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5vbik7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5VbnN1YnNjcmliZUZyb21FdmVudHMoYWRVbml0KSB7XG4gICAgcmV0dXJuIHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC51bnN1YnNjcmliZSkgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5vZmYpO1xuXG4gIH1cbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuYWRVbml0QXN5bmNDYWxsID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYXJncyA9IHV0aWxpdGllcy5hcnJheUxpa2VPYmpUb0FycmF5KGFyZ3VtZW50cyk7XG4gIHZhciBtZXRob2QgPSBhcmdzLnNoaWZ0KCk7XG4gIHZhciBjYiA9IGFyZ3MucG9wKCk7XG4gIHZhciB0aW1lb3V0SWQ7XG5cbiAgc2FuaXR5Q2hlY2sobWV0aG9kLCBjYiwgdGhpcy5fYWRVbml0KTtcbiAgYXJncy5wdXNoKHdyYXBDYWxsYmFjaygpKTtcblxuICB0aGlzLl9hZFVuaXRbbWV0aG9kXS5hcHBseSh0aGlzLl9hZFVuaXQsIGFyZ3MpO1xuICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB0aW1lb3V0SWQgPSBudWxsO1xuICAgIGNiKG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIHRpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgYSByZXNwb25zZSBvbiBjYWxsICdcIiArIG1ldGhvZCArIFwiJ1wiKSk7XG4gICAgY2IgPSB1dGlsaXRpZXMubm9vcDtcbiAgfSwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dCk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhtZXRob2QsIGNiLCBhZFVuaXQpIHtcbiAgICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhtZXRob2QpIHx8ICF1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXRbbWV0aG9kXSkpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIuYWRVbml0QXN5bmNDYWxsLCBpbnZhbGlkIG1ldGhvZCBuYW1lXCIpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLmFkVW5pdEFzeW5jQ2FsbCwgbWlzc2luZyBjYWxsYmFja1wiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwQ2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICB9XG4gICAgICBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXZ0TmFtZSwgaGFuZGxlcikge1xuICB2YXIgYWRkRXZlbnRMaXN0ZW5lciA9IHRoaXMuX2FkVW5pdC5hZGRFdmVudExpc3RlbmVyIHx8IHRoaXMuX2FkVW5pdC5zdWJzY3JpYmUgfHwgdGhpcy5fYWRVbml0Lm9uO1xuICBhZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcy5fYWRVbml0LCBldnROYW1lLCBoYW5kbGVyKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKGV2dE5hbWUsIGhhbmRsZXIpIHtcbiAgdmFyIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLl9hZFVuaXQucmVtb3ZlRXZlbnRMaXN0ZW5lciB8fCB0aGlzLl9hZFVuaXQudW5zdWJzY3JpYmUgfHwgdGhpcy5fYWRVbml0Lm9mZjtcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMuX2FkVW5pdCwgZXZ0TmFtZSwgaGFuZGxlcik7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLndhaXRGb3JFdmVudCA9IGZ1bmN0aW9uIChldnROYW1lLCBjYiwgY29udGV4dCkge1xuICB2YXIgdGltZW91dElkO1xuICBzYW5pdHlDaGVjayhldnROYW1lLCBjYik7XG4gIGNvbnRleHQgPSBjb250ZXh0IHx8IG51bGw7XG5cbiAgdGhpcy5vbihldnROYW1lLCByZXNwb25zZUxpc3RlbmVyKTtcblxuICAvLyBKTTogV2UncmUgdHJvdWJsZXNob290aW5nIGFuIGlzc3VlIHdpdGggYSBsaXZlIGNyZWF0aXZlIHRoYXQncyB1bmRlciB0ZXN0IGZvclxuICAvLyB0aGUgVkFTVCBEcml2ZUJ5IC0gaXQgYXBwZWFycyB0aGF0IHRoZSBWUEFJRCBjb250ZW50IGlzIGZhaWxpbmcgdG8gbG9hZCBcbiAgLy8gaW50ZXJtaXR0ZW50bHksIHdoaWNoIGluIHR1cm4gcHJldmVudHMgdGhlIEFkU3RhcnRlZCBldmVudCBmcm9tIGZpcmluZy4gVW50aWxcbiAgLy8gcmVzb2x2ZWQgcHJvcGVybHksIHRoaXMgaW5jcmVkaWJseSBkYW5nZXJvdXMgaGFjayBlbnN1cmUgd2UgcHVzaCBvbiB3aXRoXG4gIC8vIHJvbGxpbmcgdGhlIHZpZGVvLlxuICAvL1xuICAvLyBodHRwczovL3RyZWxsby5jb20vYy9jc3REZ3g5cC8yNzQ5LWNvbnRpbmVudGFsLXZhc3QtdHJvdWJsZXNob290LWxvdy1wbGF5YmFjay1yYXRlXG4gIC8qIGlmIChldnROYW1lID09PSAnQWRTdGFydGVkJykge1xuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQocmVzcG9uc2VMaXN0ZW5lciwgMzAwMCk7XG4gIH0gZWxzZSB7ICovXG4gIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGNiKG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIud2FpdEZvckV2ZW50LCB0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIGV2ZW50ICdcIiArIGV2dE5hbWUgKyBcIidcIikpO1xuICAgIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgY2IgPSB1dGlsaXRpZXMubm9vcDtcbiAgfSwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dCk7XG4gIC8vIH1cblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGV2dE5hbWUsIGNiKSB7XG4gICAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcoZXZ0TmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIud2FpdEZvckV2ZW50LCBtaXNzaW5nIGV2dCBuYW1lXCIpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLndhaXRGb3JFdmVudCwgbWlzc2luZyBjYWxsYmFja1wiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNwb25zZUxpc3RlbmVyKCkge1xuICAgIHZhciBhcmdzID0gdXRpbGl0aWVzLmFycmF5TGlrZU9ialRvQXJyYXkoYXJndW1lbnRzKTtcblxuICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgdGltZW91dElkID0gbnVsbDtcbiAgICB9XG5cbiAgICBhcmdzLnVuc2hpZnQobnVsbCk7XG4gICAgY2IuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gIH1cbn07XG5cbi8vIFZQQUlEIE1FVEhPRFNcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuaGFuZHNoYWtlVmVyc2lvbiA9IGZ1bmN0aW9uICh2ZXJzaW9uLCBjYikge1xuICB0aGlzLmFkVW5pdEFzeW5jQ2FsbCgnaGFuZHNoYWtlVmVyc2lvbicsIHZlcnNpb24sIGNiKTtcbn07XG5cbi8qIGpzaGludCBtYXhwYXJhbXM6NiAqL1xuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5pbml0QWQgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBhZFVuaXREYXRhLCBjYikge1xuICB0aGlzLndhaXRGb3JFdmVudCgnQWRMb2FkZWQnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5pbml0QWQod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBhZFVuaXREYXRhKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUucmVzaXplQWQgPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNiKSB7XG4gIC8vIE5PVEU6IEFkU2l6ZUNoYW5nZSBldmVudCBpcyBvbmx5IHN1cHBvcnRlZCBvbiBWUEFJRCAyLjAgc28gZm9yIHRoZSBtb21lbnQgd2UgYXJlIG5vdCBnb2luZyB0byB1c2UgaXRcbiAgLy8gYW5kIHdpbGwgYXNzdW1lIHRoYXQgZXZlcnl0aGluZyBpcyBmaW5lIGFmdGVyIHRoZSBhc3luYyBjYWxsXG4gIHRoaXMuYWRVbml0QXN5bmNDYWxsKCdyZXNpemVBZCcsIHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBjYik7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnN0YXJ0QWQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkU3RhcnRlZCcsIGNiKTtcbiAgdGhpcy5fYWRVbml0LnN0YXJ0QWQoKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc3RvcEFkID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFN0b3BwZWQnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5zdG9wQWQoKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUucGF1c2VBZCA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLndhaXRGb3JFdmVudCgnQWRQYXVzZWQnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5wYXVzZUFkKCk7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnJlc3VtZUFkID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFBsYXlpbmcnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5yZXN1bWVBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5leHBhbmRBZCA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLndhaXRGb3JFdmVudCgnQWRFeHBhbmRlZENoYW5nZScsIGNiKTtcbiAgdGhpcy5fYWRVbml0LmV4cGFuZEFkKCk7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLmNvbGxhcHNlQWQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkRXhwYW5kZWRDaGFuZ2UnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5jb2xsYXBzZUFkKCk7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnNraXBBZCA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLndhaXRGb3JFdmVudCgnQWRTa2lwcGVkJywgY2IpO1xuICB0aGlzLl9hZFVuaXQuc2tpcEFkKCk7XG59O1xuXG4vL1ZQQUlEIHByb3BlcnR5IGdldHRlcnNcbltcbiAgJ2FkTGluZWFyJyxcbiAgJ2FkV2lkdGgnLFxuICAnYWRIZWlnaHQnLFxuICAnYWRFeHBhbmRlZCcsXG4gICdhZFNraXBwYWJsZVN0YXRlJyxcbiAgJ2FkUmVtYWluaW5nVGltZScsXG4gICdhZER1cmF0aW9uJyxcbiAgJ2FkVm9sdW1lJyxcbiAgJ2FkQ29tcGFuaW9ucycsXG4gICdhZEljb25zJ1xuXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICB2YXIgZ2V0dGVyTmFtZSA9ICdnZXQnICsgdXRpbGl0aWVzLmNhcGl0YWxpemUocHJvcGVydHkpO1xuXG4gIFZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGVbZ2V0dGVyTmFtZV0gPSBmdW5jdGlvbiAoY2IpIHtcbiAgICB0aGlzLmFkVW5pdEFzeW5jQ2FsbChnZXR0ZXJOYW1lLCBjYik7XG4gIH07XG59KTtcblxuLy9WUEFJRCBwcm9wZXJ0eSBzZXR0ZXJzXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnNldEFkVm9sdW1lID0gZnVuY3Rpb24odm9sdW1lLCBjYil7XG4gIHRoaXMuYWRVbml0QXN5bmNDYWxsKCdzZXRBZFZvbHVtZScsdm9sdW1lLCBjYik7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlEQWRVbml0V3JhcHBlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1pbWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL21pbWV0eXBlcycpO1xuXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNURXJyb3InKTtcblxudmFyIFZQQUlESFRNTDVDbGllbnQgPSByZXF1aXJlKCdWUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQnKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcblxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cbmZ1bmN0aW9uIFZQQUlESFRNTDVUZWNoKG1lZGlhRmlsZSkge1xuXG4gIGlmKCEodGhpcyBpbnN0YW5jZW9mIFZQQUlESFRNTDVUZWNoKSkge1xuICAgIHJldHVybiBuZXcgVlBBSURIVE1MNVRlY2gobWVkaWFGaWxlKTtcbiAgfVxuXG4gIHNhbml0eUNoZWNrKG1lZGlhRmlsZSk7XG5cbiAgdGhpcy5uYW1lID0gJ3ZwYWlkLWh0bWw1JztcbiAgdGhpcy5jb250YWluZXJFbCA9IG51bGw7XG4gIHRoaXMudmlkZW9FbCA9IG51bGw7XG4gIHRoaXMudnBhaWRIVE1MQ2xpZW50ID0gbnVsbDtcblxuICB0aGlzLm1lZGlhRmlsZSA9IG1lZGlhRmlsZTtcblxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhtZWRpYUZpbGUpIHtcbiAgICAgIGlmICghbWVkaWFGaWxlIHx8ICF1dGlsaXRpZXMuaXNTdHJpbmcobWVkaWFGaWxlLnNyYykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5JTlZBTElEX01FRElBX0ZJTEUpO1xuICAgICAgfVxuICB9XG59XG5cblZQQUlESFRNTDVUZWNoLlZQQUlESFRNTDVDbGllbnQgPSBWUEFJREhUTUw1Q2xpZW50O1xuXG5WUEFJREhUTUw1VGVjaC5zdXBwb3J0cyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHJldHVybiAhdXRpbGl0aWVzLmlzT2xkSUUoKSAmJiBNaW1lVHlwZXMuaHRtbDUuaW5kZXhPZih0eXBlKSA+IC0xO1xufTtcblxuVlBBSURIVE1MNVRlY2gucHJvdG90eXBlLmxvYWRBZFVuaXQgPSBmdW5jdGlvbiBsb2FkQWRVbml0KGNvbnRhaW5lckVsLCB2aWRlb0VsLCBjYWxsYmFjaykge1xuICBzYW5pdHlDaGVjayhjb250YWluZXJFbCwgdmlkZW9FbCwgY2FsbGJhY2spO1xuXG4gIHRoaXMuY29udGFpbmVyRWwgPSBjb250YWluZXJFbDtcbiAgdGhpcy52aWRlb0VsID0gdmlkZW9FbDtcbiAgdGhpcy52cGFpZEhUTUxDbGllbnQgPSBuZXcgVlBBSURIVE1MNVRlY2guVlBBSURIVE1MNUNsaWVudChjb250YWluZXJFbCwgdmlkZW9FbCwge30pO1xuICB0aGlzLnZwYWlkSFRNTENsaWVudC5sb2FkQWRVbml0KHRoaXMubWVkaWFGaWxlLnNyYywgY2FsbGJhY2spO1xuXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGNvbnRhaW5lciwgdmlkZW8sIGNiKSB7XG4gICAgaWYgKCFkb20uaXNEb21FbGVtZW50KGNvbnRhaW5lcikpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoVlBBSURIVE1MNVRlY2guSU5WQUxJRF9ET01fQ09OVEFJTkVSX0VMKTtcbiAgICB9XG5cbiAgICBpZiAoIWRvbS5pc0RvbUVsZW1lbnQodmlkZW8pIHx8IHZpZGVvLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3ZpZGVvJykge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9DT05UQUlORVJfRUwpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFZQQUlESFRNTDVUZWNoLk1JU1NJTkdfQ0FMTEJBQ0spO1xuICAgIH1cbiAgfVxufTtcblxuVlBBSURIVE1MNVRlY2gucHJvdG90eXBlLnVubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIHVubG9hZEFkVW5pdCgpIHtcbiAgaWYgKHRoaXMudnBhaWRIVE1MQ2xpZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMudnBhaWRIVE1MQ2xpZW50LmRlc3Ryb3koKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGxvZ2dlci5lcnJvciAoJ1ZBU1QgRVJST1I6IHRyeWluZyB0byB1bmxvYWQgdGhlIFZQQUlEIGFkdW5pdCcpO1xuICAgIH1cblxuICAgIHRoaXMudnBhaWRIVE1MQ2xpZW50ID0gbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLmNvbnRhaW5lckVsKSB7XG4gICAgZG9tLnJlbW92ZSh0aGlzLmNvbnRhaW5lckVsKTtcbiAgICB0aGlzLmNvbnRhaW5lckVsID0gbnVsbDtcbiAgfVxufTtcblxudmFyIFBSRUZJWCA9ICdvbiBWUEFJREhUTUw1VGVjaCc7XG5WUEFJREhUTUw1VGVjaC5JTlZBTElEX01FRElBX0ZJTEUgPSBQUkVGSVggKyAnLCBpbnZhbGlkIE1lZGlhRmlsZSc7XG5WUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9DT05UQUlORVJfRUwgPSBQUkVGSVggKyAnLCBpbnZhbGlkIGNvbnRhaW5lciBIdG1sRWxlbWVudCc7XG5WUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9WSURFT19FTCA9IFBSRUZJWCArICcsIGludmFsaWQgSFRNTFZpZGVvRWxlbWVudCc7XG5WUEFJREhUTUw1VGVjaC5NSVNTSU5HX0NBTExCQUNLID0gUFJFRklYICsgJywgbWlzc2luZyB2YWxpZCBjYWxsYmFjayc7XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURIVE1MNVRlY2g7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBNaW1lVHlwZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9taW1ldHlwZXMnKTtcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RFcnJvcicpO1xudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVFJlc3BvbnNlJyk7XG52YXIgVkFTVFRyYWNrZXIgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RUcmFja2VyJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuLi92YXN0L3Zhc3RVdGlsJyk7XG5cbnZhciBWUEFJREFkVW5pdFdyYXBwZXIgPSByZXF1aXJlKCcuL1ZQQUlEQWRVbml0V3JhcHBlcicpO1xuXG52YXIgYXN5bmMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9hc3luYycpO1xudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xudmFyIHBsYXllclV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvcGxheWVyVXRpbHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xuXG5mdW5jdGlvbiBWUEFJREludGVncmF0b3IocGxheWVyLCBzZXR0aW5ncykge1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWUEFJREludGVncmF0b3IpKSB7XG4gICAgcmV0dXJuIG5ldyBWUEFJREludGVncmF0b3IocGxheWVyKTtcbiAgfVxuXG4gIHRoaXMuVklFV19NT0RFID0ge1xuICAgIE5PUk1BTDogJ25vcm1hbCcsXG4gICAgRlVMTFNDUkVFTjogXCJmdWxsc2NyZWVuXCIsXG4gICAgVEhVTUJOQUlMOiBcInRodW1ibmFpbFwiXG4gIH07XG4gIHRoaXMucGxheWVyID0gcGxheWVyO1xuICB0aGlzLmNvbnRhaW5lckVsID0gY3JlYXRlVlBBSURDb250YWluZXJFbChwbGF5ZXIpO1xuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgcmVzcG9uc2VUaW1lb3V0OiAxMDAwMCxcbiAgICBWUEFJRF9WRVJTSU9OOiAnMi4wJ1xuICB9O1xuICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZVZQQUlEQ29udGFpbmVyRWwoKSB7XG4gICAgdmFyIGNvbnRhaW5lckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9tLmFkZENsYXNzKGNvbnRhaW5lckVsLCAnVlBBSUQtY29udGFpbmVyJyk7XG4gICAgcGxheWVyLmVsKCkuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lckVsLCBwbGF5ZXIuY29udHJvbEJhci5lbCgpKTtcbiAgICByZXR1cm4gY29udGFpbmVyRWw7XG5cbiAgfVxufVxuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLnBsYXlBZCA9IGZ1bmN0aW9uIHBsYXlWUGFpZEFkKHZhc3RSZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodmFzdFJlc3BvbnNlIGluc3RhbmNlb2YgVkFTVFJlc3BvbnNlKSkge1xuICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKCdvbiBWQVNUSW50ZWdyYXRvci5wbGF5QWQsIG1pc3NpbmcgcmVxdWlyZWQgVkFTVFJlc3BvbnNlJykpO1xuICB9XG5cbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIGxvZ2dlci5kZWJ1ZyAoXCI8VlBBSURJbnRlZ3JhdG9yLnBsYXlBZD4gbG9va2luZyBmb3Igc3VwcG9ydGVkIHRlY2guLi5cIik7XG4gIHZhciB0ZWNoID0gdGhpcy5fZmluZFN1cHBvcnRlZFRlY2godmFzdFJlc3BvbnNlLCB0aGlzLnNldHRpbmdzKTtcblxuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IHV0aWxpdGllcy5ub29wO1xuXG4gIHRoaXMuX2FkVW5pdCA9IG51bGw7XG5cbiAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCAndmpzLXZwYWlkLWFkJyk7XG5cbiAgcGxheWVyLm9uKCd2YXN0LmFkc0NhbmNlbCcsIHRyaWdnZXJWcGFpZEFkRW5kKTtcbiAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbigpe1xuICAgIHBsYXllci5vZmYoJ3Zhc3QuYWRzQ2FuY2VsJywgdHJpZ2dlclZwYWlkQWRFbmQpO1xuICAgIHJlbW92ZUFkVW5pdCgpO1xuICB9KTtcblxuICBpZiAodGVjaCkge1xuICAgIGxvZ2dlci5pbmZvIChcIjxWUEFJREludGVncmF0b3IucGxheUFkPiBmb3VuZCB0ZWNoOiBcIiwgdGVjaCk7XG5cbiAgICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgbmV4dChudWxsLCB0ZWNoLCB2YXN0UmVzcG9uc2UpO1xuICAgICAgfSxcbiAgICAgIHRoaXMuX2xvYWRBZFVuaXQuYmluZCh0aGlzKSxcbiAgICAgIHRoaXMuX3BsYXlBZFVuaXQuYmluZCh0aGlzKSxcbiAgICAgIHRoaXMuX2ZpbmlzaFBsYXlpbmcuYmluZCh0aGlzKVxuXG4gICAgXSwgYWRDb21wbGV0ZSk7XG5cbiAgICB0aGlzLl9hZFVuaXQgPSB7XG4gICAgICBfcGF1c2VkOiB0cnVlLFxuICAgICAgdHlwZTogJ1ZQQUlEJyxcbiAgICAgIHBhdXNlQWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQucGF1c2VBZCcpO1xuICAgICAgICBwbGF5ZXIucGF1c2UodHJ1ZSk7Ly93ZSBtYWtlIHN1cmUgdGhhdCB0aGUgdmlkZW8gY29udGVudCBnZXRzIHN0b3BwZWQuXG4gICAgICB9LFxuICAgICAgcmVzdW1lQWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5yZXN1bWVBZCcpO1xuICAgICAgfSxcbiAgICAgIGlzUGF1c2VkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhdXNlZDtcbiAgICAgIH0sXG4gICAgICBnZXRTcmM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGVjaC5tZWRpYUZpbGU7XG4gICAgICB9XG4gICAgfTtcblxuICB9IGVsc2Uge1xuICAgIGxvZ2dlci5kZWJ1ZyAoXCI8VlBBSURJbnRlZ3JhdG9yLnBsYXlBZD4gY291bGQgbm90IGZpbmQgc3VpdGFibGUgdGVjaFwiKTtcbiAgICB2YXIgZXJyb3IgPSBuZXcgVkFTVEVycm9yKCdvbiBWUEFJREludGVncmF0b3IucGxheUFkLCBjb3VsZCBub3QgZmluZCBhIHN1cHBvcnRlZCBtZWRpYUZpbGUnLCA0MDMpO1xuICAgIGFkQ29tcGxldGUoZXJyb3IsIHRoaXMuX2FkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLl9hZFVuaXQ7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBhZENvbXBsZXRlKGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSkge1xuICAgIGlmIChlcnJvciAmJiB2YXN0UmVzcG9uc2UpIHtcbiAgICAgIHRoYXQuX3RyYWNrRXJyb3IodmFzdFJlc3BvbnNlLCBlcnJvci5jb2RlKTtcbiAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLmFkRW5kJyk7XG4gICAgY2FsbGJhY2soZXJyb3IsIHZhc3RSZXNwb25zZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyVnBhaWRBZEVuZCgpe1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5hZEVuZCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQWRVbml0KCkge1xuICAgIGlmICh0ZWNoKSB7XG4gICAgICB0ZWNoLnVubG9hZEFkVW5pdCgpO1xuICAgIH1cbiAgICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmVsKCksICd2anMtdnBhaWQtYWQnKTtcbiAgfVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fZmluZFN1cHBvcnRlZFRlY2ggPSBmdW5jdGlvbiAodmFzdFJlc3BvbnNlLCBzZXR0aW5ncykge1xuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgdnBhaWRNZWRpYUZpbGVzID0gdmFzdFJlc3BvbnNlLm1lZGlhRmlsZXMuZmlsdGVyKHZhc3RVdGlsLmlzVlBBSUQpO1xuICB2YXIgcHJlZmVycmVkVGVjaCA9IHNldHRpbmdzICYmIHNldHRpbmdzLnByZWZlcnJlZFRlY2g7XG4gIHZhciBza2lwcGVkU3VwcG9ydFRlY2hzID0gW107XG4gIHZhciBpLCBsZW4sIG1lZGlhRmlsZSwgVlBBSURUZWNoLCBpc1ByZWZlcmVkVGVjaDtcblxuICBmb3IgKGkgPSAwLCBsZW4gPSB2cGFpZE1lZGlhRmlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBtZWRpYUZpbGUgPSB2cGFpZE1lZGlhRmlsZXNbaV07XG4gICAgVlBBSURUZWNoID0gdmFzdFV0aWwuZmluZFN1cHBvcnRlZFZQQUlEVGVjaChtZWRpYUZpbGUudHlwZSk7XG5cbiAgICAvLyBubyBzdXBwb3J0ZWQgVlBBSUQgdGVjaCBmb3VuZCwgc2tpcCBtZWRpYWZpbGVcbiAgICBpZiAoIVZQQUlEVGVjaCkgeyBjb250aW51ZTsgfVxuXG4gICAgLy8gZG8gd2UgaGF2ZSBhIHByZWZlcmVkIHRlY2gsIGRvZXMgaXQgcGxheSB0aGlzIG1lZGlhIGZpbGUgP1xuICAgIGlzUHJlZmVyZWRUZWNoID0gcHJlZmVycmVkVGVjaCA/XG4gICAgICAobWVkaWFGaWxlLnR5cGUgPT09IHByZWZlcnJlZFRlY2ggfHwgKE1pbWVUeXBlc1twcmVmZXJyZWRUZWNoXSAmJiBNaW1lVHlwZXNbcHJlZmVycmVkVGVjaF0uaW5kZXhPZihtZWRpYUZpbGUudHlwZSkgPiAtMSApKSA6XG4gICAgICBmYWxzZTtcblxuICAgIC8vIG91ciBwcmVmZXJlZCB0ZWNoIGNhbiByZWFkIHRoaXMgbWVkaWFmaWxlLCBkZWZhdWx0aW5nIHRvIGl0LlxuICAgIGlmIChpc1ByZWZlcmVkVGVjaCkge1xuICAgICAgcmV0dXJuIG5ldyBWUEFJRFRlY2gobWVkaWFGaWxlLCBzZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgc2tpcHBlZFN1cHBvcnRUZWNocy5wdXNoKHsgbWVkaWFGaWxlOiBtZWRpYUZpbGUsIHRlY2g6IFZQQUlEVGVjaCB9KTtcbiAgfVxuXG4gIGlmIChza2lwcGVkU3VwcG9ydFRlY2hzLmxlbmd0aCkge1xuICAgIHZhciBmaXJzdFRlY2ggPSBza2lwcGVkU3VwcG9ydFRlY2hzWzBdO1xuICAgIHJldHVybiBuZXcgZmlyc3RUZWNoLnRlY2goZmlyc3RUZWNoLm1lZGlhRmlsZSwgc2V0dGluZ3MpO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9jcmVhdGVWUEFJREFkVW5pdFdyYXBwZXIgPSBmdW5jdGlvbihhZFVuaXQsIHNyYywgcmVzcG9uc2VUaW1lb3V0KSB7XG4gIHJldHVybiBuZXcgVlBBSURBZFVuaXRXcmFwcGVyKGFkVW5pdCwge3NyYzogc3JjLCByZXNwb25zZVRpbWVvdXQ6IHJlc3BvbnNlVGltZW91dH0pO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fbG9hZEFkVW5pdCA9IGZ1bmN0aW9uICh0ZWNoLCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHZhciB2anNUZWNoRWwgPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcbiAgdmFyIHJlc3BvbnNlVGltZW91dCA9IHRoaXMuc2V0dGluZ3MucmVzcG9uc2VUaW1lb3V0IHx8IHRoaXMub3B0aW9ucy5yZXNwb25zZVRpbWVvdXQ7XG4gIHRlY2gubG9hZEFkVW5pdCh0aGlzLmNvbnRhaW5lckVsLCB2anNUZWNoRWwsIGZ1bmN0aW9uIChlcnJvciwgYWRVbml0KSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB2YXIgV3JhcHBlZEFkVW5pdCA9IHRoYXQuX2NyZWF0ZVZQQUlEQWRVbml0V3JhcHBlcihhZFVuaXQsIHRlY2gubWVkaWFGaWxlLnNyYywgcmVzcG9uc2VUaW1lb3V0KTtcbiAgICAgIHZhciB0ZWNoQ2xhc3MgPSAndmpzLScgKyB0ZWNoLm5hbWUgKyAnLWFkJztcbiAgICAgIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgdGVjaENsYXNzKTtcbiAgICAgIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSx0ZWNoQ2xhc3MpO1xuICAgICAgfSk7XG4gICAgICBuZXh0KG51bGwsIFdyYXBwZWRBZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgbmV4dChlLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfVxuICB9KTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX3BsYXlBZFVuaXQgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIGFzeW5jLndhdGVyZmFsbChbXG4gICAgZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH0sXG4gICAgdGhpcy5faGFuZHNoYWtlLmJpbmQodGhpcyksXG4gICAgdGhpcy5faW5pdEFkLmJpbmQodGhpcyksXG4gICAgdGhpcy5fc2V0dXBFdmVudHMuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9hZGRTa2lwQnV0dG9uLmJpbmQodGhpcyksXG4gICAgdGhpcy5fbGlua1BsYXllckNvbnRyb2xzLmJpbmQodGhpcyksXG4gICAgdGhpcy5fc3RhcnRBZC5iaW5kKHRoaXMpXG4gIF0sIGNhbGxiYWNrKTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2hhbmRzaGFrZSA9IGZ1bmN0aW9uIGhhbmRzaGFrZShhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICBhZFVuaXQuaGFuZHNoYWtlVmVyc2lvbih0aGlzLm9wdGlvbnMuVlBBSURfVkVSU0lPTiwgZnVuY3Rpb24gKGVycm9yLCB2ZXJzaW9uKSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH1cblxuICAgIGlmICh2ZXJzaW9uICYmIGlzU3VwcG9ydGVkVmVyc2lvbih2ZXJzaW9uKSkge1xuICAgICAgcmV0dXJuIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0KG5ldyBWQVNURXJyb3IoJ29uIFZQQUlESW50ZWdyYXRvci5faGFuZHNoYWtlLCB1bnN1cHBvcnRlZCB2ZXJzaW9uIFwiJyArIHZlcnNpb24gKyAnXCInKSwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICB9KTtcblxuICBmdW5jdGlvbiBpc1N1cHBvcnRlZFZlcnNpb24odmVyc2lvbikge1xuICAgIHZhciBtYWpvck51bSA9IG1ham9yKHZlcnNpb24pO1xuICAgIHJldHVybiBtYWpvck51bSA+PSAxICYmIG1ham9yTnVtIDw9IDI7XG4gIH1cblxuICBmdW5jdGlvbiBtYWpvcih2ZXJzaW9uKSB7XG4gICAgdmFyIHBhcnRzID0gdmVyc2lvbi5zcGxpdCgnLicpO1xuICAgIHJldHVybiBwYXJzZUludChwYXJ0c1swXSwgMTApO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9pbml0QWQgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHRlY2ggPSB0aGlzLnBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuICB2YXIgZGltZW5zaW9uID0gZG9tLmdldERpbWVuc2lvbih0ZWNoKTtcbiAgYWRVbml0LmluaXRBZChkaW1lbnNpb24ud2lkdGgsIGRpbWVuc2lvbi5oZWlnaHQsIHRoaXMuVklFV19NT0RFLk5PUk1BTCwgLTEsIHtBZFBhcmFtZXRlcnM6IHZhc3RSZXNwb25zZS5hZFBhcmFtZXRlcnMgfHwgJyd9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gIH0pO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fY3JlYXRlVkFTVFRyYWNrZXIgPSBmdW5jdGlvbihhZFVuaXRTcmMsIHZhc3RSZXNwb25zZSkge1xuICByZXR1cm4gbmV3IFZBU1RUcmFja2VyKGFkVW5pdFNyYywgdmFzdFJlc3BvbnNlKTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX3NldHVwRXZlbnRzID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciBhZFVuaXRTcmMgPSBhZFVuaXQub3B0aW9ucy5zcmM7XG4gIHZhciB0cmFja2VyID0gdGhpcy5fY3JlYXRlVkFTVFRyYWNrZXIoYWRVbml0U3JjLCB2YXN0UmVzcG9uc2UpO1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIHByZXZpb3VzbHlNdXRlZDtcbiAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdHJhY2tQcm9ncmVzcyk7XG4gIHBsYXllci5vbigndm9sdW1lY2hhbmdlJywgdHJhY2tWb2x1bWVDaGFuZ2UpO1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRTdGFydCcsIHRyYWNrSW1wcmVzc2lvbnMpO1xuXG4gIGFkVW5pdC5vbignQWRTa2lwcGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFNraXBwZWQnKTtcbiAgICB0cmFja2VyLnRyYWNrU2tpcCgpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkSW1wcmVzc2lvbicsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRJbXByZXNzaW9uJyk7XG4gICAgdHJhY2tlci50cmFja0ltcHJlc3Npb25zKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRTdGFydGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFN0YXJ0ZWQnKTtcbiAgICB0cmFja2VyLnRyYWNrQ3JlYXRpdmVWaWV3KCk7XG4gICAgbm90aWZ5UGxheVRvUGxheWVyKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRWaWRlb1N0YXJ0JywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvU3RhcnQnKTtcbiAgICB0cmFja2VyLnRyYWNrU3RhcnQoKTtcbiAgICBub3RpZnlQbGF5VG9QbGF5ZXIoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFBsYXlpbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkUGxheWluZycpO1xuICAgIHRyYWNrZXIudHJhY2tSZXN1bWUoKTtcbiAgICBub3RpZnlQbGF5VG9QbGF5ZXIoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFBhdXNlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRQYXVzZWQnKTtcbiAgICB0cmFja2VyLnRyYWNrUGF1c2UoKTtcbiAgICBub3RpZnlQYXVzZVRvUGxheWVyKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG5vdGlmeVBsYXlUb1BsYXllcigpe1xuICAgIGlmKHRoYXQuX2FkVW5pdCAmJiB0aGF0Ll9hZFVuaXQuaXNQYXVzZWQoKSl7XG4gICAgICB0aGF0Ll9hZFVuaXQuX3BhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBwbGF5ZXIudHJpZ2dlcigncGxheScpO1xuXG4gIH1cblxuICBmdW5jdGlvbiBub3RpZnlQYXVzZVRvUGxheWVyKCkge1xuICAgIGlmKHRoYXQuX2FkVW5pdCl7XG4gICAgICB0aGF0Ll9hZFVuaXQuX3BhdXNlZCA9IHRydWU7XG4gICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCdwYXVzZScpO1xuICB9XG5cbiAgYWRVbml0Lm9uKCdBZFZpZGVvRmlyc3RRdWFydGlsZScsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb0ZpcnN0UXVhcnRpbGUnKTtcbiAgICB0cmFja2VyLnRyYWNrRmlyc3RRdWFydGlsZSgpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVmlkZW9NaWRwb2ludCcsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb01pZHBvaW50Jyk7XG4gICAgdHJhY2tlci50cmFja01pZHBvaW50KCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRWaWRlb1RoaXJkUXVhcnRpbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9UaGlyZFF1YXJ0aWxlJyk7XG4gICAgdHJhY2tlci50cmFja1RoaXJkUXVhcnRpbGUoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFZpZGVvQ29tcGxldGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9Db21wbGV0ZScpO1xuICAgIHRyYWNrZXIudHJhY2tDb21wbGV0ZSgpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkQ2xpY2tUaHJ1JywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRDbGlja1RocnUnKTtcbiAgICB2YXIgdXJsID0gZGF0YS51cmw7XG4gICAgdmFyIHBsYXllckhhbmRsZXMgPSBkYXRhLnBsYXllckhhbmRsZXM7XG4gICAgdmFyIGNsaWNrVGhydVVybCA9IHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHVybCkgPyB1cmwgOiBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTCh2YXN0UmVzcG9uc2UuY2xpY2tUaHJvdWdoKTtcblxuICAgIHRyYWNrZXIudHJhY2tDbGljaygpO1xuICAgIGlmIChwbGF5ZXJIYW5kbGVzICYmIGNsaWNrVGhydVVybCkge1xuICAgICAgd2luZG93Lm9wZW4oY2xpY2tUaHJ1VXJsLCAnX2JsYW5rJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwoY2xpY2tUaHJvdWdoTWFjcm8pIHtcbiAgICAgIHZhciB2YXJpYWJsZXMgPSB7XG4gICAgICAgIEFTU0VUVVJJOiBhZFVuaXQub3B0aW9ucy5zcmMsXG4gICAgICAgIENPTlRFTlRQTEFZSEVBRDogMCAvL0luIFZQQUlEIHRoZXJlIGlzIG5vIG1ldGhvZCB0byBrbm93IHRoZSBjdXJyZW50IHRpbWUgZnJvbSB0aGUgYWRVbml0XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gY2xpY2tUaHJvdWdoTWFjcm8gPyB2YXN0VXRpbC5wYXJzZVVSTE1hY3JvKGNsaWNrVGhyb3VnaE1hY3JvLCB2YXJpYWJsZXMpIDogbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRVc2VyQWNjZXB0SW52aXRhdGlvbicsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRVc2VyQWNjZXB0SW52aXRhdGlvbicpO1xuICAgIHRyYWNrZXIudHJhY2tBY2NlcHRJbnZpdGF0aW9uKCk7XG4gICAgdHJhY2tlci50cmFja0FjY2VwdEludml0YXRpb25MaW5lYXIoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFVzZXJDbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRVc2VyQ2xvc2UnKTtcbiAgICB0cmFja2VyLnRyYWNrQ2xvc2UoKTtcbiAgICB0cmFja2VyLnRyYWNrQ2xvc2VMaW5lYXIoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFVzZXJNaW5pbWl6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRVc2VyTWluaW1pemUnKTtcbiAgICB0cmFja2VyLnRyYWNrQ29sbGFwc2UoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZEVycm9yJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZEVycm9yJyk7XG4gICAgLy9OT1RFOiB3ZSB0cmFjayBlcnJvcnMgY29kZSA5MDEsIGFzIG5vdGVkIGluIFZBU1QgMy4wXG4gICAgdHJhY2tlci50cmFja0Vycm9yV2l0aENvZGUoOTAxKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFZvbHVtZUNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWb2x1bWVDaGFuZ2UnKTtcbiAgICB2YXIgbGFzdFZvbHVtZSA9IHBsYXllci52b2x1bWUoKTtcbiAgICBhZFVuaXQuZ2V0QWRWb2x1bWUoZnVuY3Rpb24gKGVycm9yLCBjdXJyZW50Vm9sdW1lKSB7XG4gICAgICBpZiAobGFzdFZvbHVtZSAhPT0gY3VycmVudFZvbHVtZSkge1xuICAgICAgICBpZiAoY3VycmVudFZvbHVtZSA9PT0gMCAmJiBsYXN0Vm9sdW1lID4gMCkge1xuICAgICAgICAgIHRyYWNrZXIudHJhY2tNdXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY3VycmVudFZvbHVtZSA+IDAgJiYgbGFzdFZvbHVtZSA9PT0gMCkge1xuICAgICAgICAgIHRyYWNrZXIudHJhY2tVbm11dGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYXllci52b2x1bWUoY3VycmVudFZvbHVtZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHZhciB1cGRhdGVWaWV3U2l6ZSA9IHJlc2l6ZUFkLmJpbmQodGhpcywgcGxheWVyLCBhZFVuaXQsIHRoaXMuVklFV19NT0RFKTtcbiAgdmFyIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkID0gdXRpbGl0aWVzLnRocm90dGxlKHVwZGF0ZVZpZXdTaXplLCAxMDApO1xuICB2YXIgYXV0b1Jlc2l6ZSA9IHRoaXMuc2V0dGluZ3MuYXV0b1Jlc2l6ZTtcblxuICBpZiAoYXV0b1Jlc2l6ZSkge1xuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3Jlc2l6ZScsIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkKTtcbiAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdvcmllbnRhdGlvbmNoYW5nZScsIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkKTtcbiAgfVxuXG4gIHBsYXllci5vbigndmFzdC5yZXNpemUnLCB1cGRhdGVWaWV3U2l6ZSk7XG4gIHBsYXllci5vbigndnBhaWQucGF1c2VBZCcsIHBhdXNlQWRVbml0KTtcbiAgcGxheWVyLm9uKCd2cGFpZC5yZXN1bWVBZCcsIHJlc3VtZUFkVW5pdCk7XG5cbiAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLm9mZigndmFzdC5yZXNpemUnLCB1cGRhdGVWaWV3U2l6ZSk7XG4gICAgcGxheWVyLm9mZigndnBhaWQucGF1c2VBZCcsIHBhdXNlQWRVbml0KTtcbiAgICBwbGF5ZXIub2ZmKCd2cGFpZC5yZXN1bWVBZCcsIHJlc3VtZUFkVW5pdCk7XG5cbiAgICBpZiAoYXV0b1Jlc2l6ZSkge1xuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnb3JpZW50YXRpb25jaGFuZ2UnLCB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCk7XG4gICAgfVxuICB9KTtcblxuICBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHBhdXNlQWRVbml0KCkge1xuICAgIGFkVW5pdC5wYXVzZUFkKHV0aWxpdGllcy5ub29wKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3VtZUFkVW5pdCgpIHtcbiAgICBhZFVuaXQucmVzdW1lQWQodXRpbGl0aWVzLm5vb3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tQcm9ncmVzcygpIHtcbiAgICB2YXIgY3VycmVudFRpbWVJbk1zID0gcGxheWVyLmN1cnJlbnRUaW1lKCkgKiAxMDAwO1xuICAgIHRyYWNrZXIudHJhY2tQcm9ncmVzcyhjdXJyZW50VGltZUluTXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tJbXByZXNzaW9ucygpIHtcbiAgICB0cmFja2VyLnRyYWNrSW1wcmVzc2lvbnMoKTtcbiAgICB0cmFja2VyLnRyYWNrQ3JlYXRpdmVWaWV3KCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja1ZvbHVtZUNoYW5nZSgpIHtcbiAgICB2YXIgbXV0ZWQgPSBwbGF5ZXIubXV0ZWQoKTtcbiAgICBpZiAobXV0ZWQpIHtcbiAgICAgIHRyYWNrZXIudHJhY2tNdXRlKCk7XG4gICAgfSBlbHNlIGlmIChwcmV2aW91c2x5TXV0ZWQpIHtcbiAgICAgIHRyYWNrZXIudHJhY2tVbm11dGUoKTtcbiAgICB9XG4gICAgcHJldmlvdXNseU11dGVkID0gbXV0ZWQ7XG4gIH1cblxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fYWRkU2tpcEJ1dHRvbiA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgc2tpcEJ1dHRvbjtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuXG4gIGFkVW5pdC5vbignQWRTa2lwcGFibGVTdGF0ZUNoYW5nZScsIHVwZGF0ZVNraXBCdXR0b25TdGF0ZSk7XG5cbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVTa2lwQnV0dG9uKTtcblxuICBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgZnVuY3Rpb24gdXBkYXRlU2tpcEJ1dHRvblN0YXRlKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFNraXBwYWJsZVN0YXRlQ2hhbmdlJyk7XG4gICAgYWRVbml0LmdldEFkU2tpcHBhYmxlU3RhdGUoZnVuY3Rpb24gKGVycm9yLCBpc1NraXBwYWJsZSkge1xuICAgICAgaWYgKGlzU2tpcHBhYmxlKSB7XG4gICAgICAgIGlmICghc2tpcEJ1dHRvbikge1xuICAgICAgICAgIGFkZFNraXBCdXR0b24ocGxheWVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlU2tpcEJ1dHRvbihwbGF5ZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkU2tpcEJ1dHRvbihwbGF5ZXIpIHtcbiAgICBza2lwQnV0dG9uID0gY3JlYXRlU2tpcEJ1dHRvbihwbGF5ZXIpO1xuICAgIHBsYXllci5lbCgpLmFwcGVuZENoaWxkKHNraXBCdXR0b24pO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlU2tpcEJ1dHRvbigpIHtcbiAgICBkb20ucmVtb3ZlKHNraXBCdXR0b24pO1xuICAgIHNraXBCdXR0b24gPSBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2tpcEJ1dHRvbigpIHtcbiAgICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCBcInZhc3Qtc2tpcC1idXR0b25cIik7XG4gICAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sIFwiZW5hYmxlZFwiKTtcbiAgICBza2lwQnV0dG9uLmlubmVySFRNTCA9IFwiU2tpcCBhZFwiO1xuXG4gICAgc2tpcEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGFkVW5pdC5za2lwQWQodXRpbGl0aWVzLm5vb3ApOy8vV2Ugc2tpcCB0aGUgYWRVbml0XG5cbiAgICAgIC8vV2UgcHJldmVudCBldmVudCBwcm9wYWdhdGlvbiB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBjbGlja1Rocm91Z2ggYW5kIHNvIG9uXG4gICAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gc2tpcEJ1dHRvbjtcbiAgfVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fbGlua1BsYXllckNvbnRyb2xzID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgbGlua1ZvbHVtZUNvbnRyb2wodGhpcy5wbGF5ZXIsIGFkVW5pdCk7XG4gIGxpbmtGdWxsU2NyZWVuQ29udHJvbCh0aGlzLnBsYXllciwgYWRVbml0LCB0aGlzLlZJRVdfTU9ERSk7XG5cbiAgbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBsaW5rVm9sdW1lQ29udHJvbChwbGF5ZXIsIGFkVW5pdCkge1xuICAgIHBsYXllci5vbigndm9sdW1lY2hhbmdlJywgdXBkYXRlQWRVbml0Vm9sdW1lKTtcbiAgICBhZFVuaXQub24oJ0FkVm9sdW1lQ2hhbmdlJywgdXBkYXRlUGxheWVyVm9sdW1lKTtcblxuICAgIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgcGxheWVyLm9mZigndm9sdW1lY2hhbmdlJywgdXBkYXRlQWRVbml0Vm9sdW1lKTtcbiAgICB9KTtcblxuXG4gICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZUFkVW5pdFZvbHVtZSgpIHtcbiAgICAgIHZhciB2b2wgPSBwbGF5ZXIubXV0ZWQoKSA/IDAgOiBwbGF5ZXIudm9sdW1lKCk7XG4gICAgICBhZFVuaXQuc2V0QWRWb2x1bWUodm9sLCBsb2dFcnJvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlUGxheWVyVm9sdW1lKCkge1xuICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVm9sdW1lQ2hhbmdlJyk7XG4gICAgICB2YXIgbGFzdFZvbHVtZSA9IHBsYXllci52b2x1bWUoKTtcbiAgICAgIGFkVW5pdC5nZXRBZFZvbHVtZShmdW5jdGlvbiAoZXJyb3IsIHZvbCkge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBsb2dFcnJvcihlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGxhc3RWb2x1bWUgIT09IHZvbCkge1xuICAgICAgICAgICAgcGxheWVyLnZvbHVtZSh2b2wpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbGlua0Z1bGxTY3JlZW5Db250cm9sKHBsYXllciwgYWRVbml0LCBWSUVXX01PREUpIHtcbiAgICB2YXIgdXBkYXRlVmlld1NpemUgPSByZXNpemVBZC5iaW5kKHRoYXQsIHBsYXllciwgYWRVbml0LCBWSUVXX01PREUpO1xuXG4gICAgcGxheWVyLm9uKCdmdWxsc2NyZWVuY2hhbmdlJywgdXBkYXRlVmlld1NpemUpO1xuXG4gICAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBwbGF5ZXIub2ZmKCdmdWxsc2NyZWVuY2hhbmdlJywgdXBkYXRlVmlld1NpemUpO1xuICAgIH0pO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9zdGFydEFkID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcblxuICBhZFVuaXQuc3RhcnRBZChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBpZiAoIWVycm9yKSB7XG4gICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZFN0YXJ0Jyk7XG4gICAgfVxuICAgIG5leHQoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgfSk7XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9maW5pc2hQbGF5aW5nID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgYWRVbml0Lm9uKCdBZFN0b3BwZWQnLCBmdW5jdGlvbiAoKSB7XG4gICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRTdG9wcGVkJyk7XG4gICBmaW5pc2hQbGF5aW5nQWQobnVsbCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRFcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIHZhciBlcnJNc2cgPSBlcnJvcj8gZXJyb3IubWVzc2FnZSA6ICdvbiBWUEFJREludGVncmF0b3IsIGVycm9yIHdoaWxlIHdhaXRpbmcgZm9yIHRoZSBhZFVuaXQgdG8gZmluaXNoIHBsYXlpbmcnO1xuICAgIGZpbmlzaFBsYXlpbmdBZChuZXcgVkFTVEVycm9yKGVyck1zZykpO1xuICB9KTtcblxuICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIGZpbmlzaFBsYXlpbmdBZChlcnJvcikge1xuICAgIG5leHQoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgfVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fdHJhY2tFcnJvciA9IGZ1bmN0aW9uIHRyYWNrRXJyb3IocmVzcG9uc2UsIGVycm9yQ29kZSkge1xuICB2YXN0VXRpbC50cmFjayhyZXNwb25zZS5lcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3JDb2RlIHx8IDkwMX0pO1xufTtcblxuZnVuY3Rpb24gcmVzaXplQWQocGxheWVyLCBhZFVuaXQsIFZJRVdfTU9ERSkge1xuICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuICB2YXIgZGltZW5zaW9uID0gZG9tLmdldERpbWVuc2lvbih0ZWNoKTtcbiAgdmFyIE1PREUgPSBwbGF5ZXIuaXNGdWxsc2NyZWVuKCkgPyBWSUVXX01PREUuRlVMTFNDUkVFTiA6IFZJRVdfTU9ERS5OT1JNQUw7XG4gIGFkVW5pdC5yZXNpemVBZChkaW1lbnNpb24ud2lkdGgsIGRpbWVuc2lvbi5oZWlnaHQsIE1PREUsIGxvZ0Vycm9yKTtcbn1cblxuZnVuY3Rpb24gbG9nRXJyb3IoZXJyb3IpIHtcbiAgaWYgKGVycm9yKSB7XG4gICAgbG9nZ2VyLmVycm9yICgnRVJST1I6ICcgKyBlcnJvci5tZXNzYWdlLCBlcnJvcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREludGVncmF0b3I7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcblxudmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmVsZW1lbnQuY2xhc3NOYW1lID0gJ3Zqcy1hZHMtbGFiZWwgdmpzLWNvbnRyb2wgdmpzLWxhYmVsLWhpZGRlbic7XG5lbGVtZW50LmlubmVySFRNTCA9ICdBZHZlcnRpc2VtZW50JztcblxudmFyIEFkc0xhYmVsRmFjdG9yeSA9IGZ1bmN0aW9uKGJhc2VDb21wb25lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiogQGNvbnN0cnVjdG9yICovXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMuZWwgPSBlbGVtZW50O1xuICAgICAgYmFzZUNvbXBvbmVudC5jYWxsKHRoaXMsIHBsYXllciwgb3B0aW9ucyk7XG5cbiAgICAgIC8vIFdlIGFzeW5jaHJvbm91c2x5IHJlcG9zaXRpb24gdGhlIGFkcyBsYWJlbCBlbGVtZW50XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lQ29tcCA9IHBsYXllci5jb250cm9sQmFyICYmKCBwbGF5ZXIuY29udHJvbEJhci5nZXRDaGlsZChcInRpbWVyQ29udHJvbHNcIikgfHwgcGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoXCJjdXJyZW50VGltZURpc3BsYXlcIikgKTtcbiAgICAgICAgaWYoY3VycmVudFRpbWVDb21wKSB7XG4gICAgICAgICAgcGxheWVyLmNvbnRyb2xCYXIuZWwoKS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgY3VycmVudFRpbWVDb21wLmVsKCkpO1xuICAgICAgICB9XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhlbGVtZW50LCAndmpzLWxhYmVsLWhpZGRlbicpO1xuICAgICAgfSwgMCk7XG4gICAgfSxcblxuICAgIGVsOiBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBZHNMYWJlbEZhY3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFzZVZpZGVvSnNDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5cbnZhciBBZHNMYWJlbCA9IHJlcXVpcmUoJy4vYWRzLWxhYmVsJykoYmFzZVZpZGVvSnNDb21wb25lbnQpO1xuXG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdBZHNMYWJlbCcsIHZpZGVvanMuZXh0ZW5kKGJhc2VWaWRlb0pzQ29tcG9uZW50LCBBZHNMYWJlbCkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFRoZSBjb21wb25lbnQgdGhhdCBzaG93cyBhIGJsYWNrIHNjcmVlbiB1bnRpbCB0aGUgYWRzIHBsdWdpbiBoYXMgZGVjaWRlZCBpZiBpdCBjYW4gb3IgaXQgY2FuIG5vdCBwbGF5IHRoZSBhZC5cbiAqXG4gKiBOb3RlOiBJbiBjYXNlIHlvdSB3b25kZXIgd2h5IGluc3RlYWQgb2YgdGhpcyBibGFjayBwb3N0ZXIgd2UgZG9uJ3QganVzdCBzaG93IHRoZSBzcGlubmVyIGxvYWRlci5cbiAqICAgICAgIElPUyBkZXZpY2VzIGRvIG5vdCB3b3JrIHdlbGwgd2l0aCBhbmltYXRpb25zIGFuZCB0aGUgYnJvd3NlciBjaHJhc2hlcyBmcm9tIHRpbWUgdG8gdGltZSBUaGF0IGlzIHdoeSB3ZSBjaG9zZSB0b1xuICogICAgICAgaGF2ZSBhIHNlY29uZGFyeSBibGFjayBwb3N0ZXIuXG4gKlxuICogICAgICAgSXQgYWxzbyBtYWtlcyBpdCBtdWNoIG1vcmUgZWFzaWVyIGZvciB0aGUgdXNlcnMgb2YgdGhlIHBsdWdpbiBzaW5jZSBpdCBkb2VzIG5vdCBjaGFuZ2UgdGhlIGRlZmF1bHQgYmVoYXZpb3VyIG9mIHRoZVxuICogICAgICAgc3Bpbm5lciBhbmQgdGhlIHBsYXllciB3b3JrcyB0aGUgc2FtZSB3YXkgd2l0aCBhbmQgd2l0aG91dCB0aGUgcGx1Z2luLlxuICpcbiAqIEBwYXJhbSB7dmpzLlBsYXllcnxPYmplY3R9IHBsYXllclxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxudmFyIEJsYWNrUG9zdGVyRmFjdG9yeSA9IGZ1bmN0aW9uKGJhc2VDb21wb25lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiogQGNvbnN0cnVjdG9yICovXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMuZWwgPSBlbGVtZW50O1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAndmpzLWJsYWNrLXBvc3Rlcic7XG4gICAgICBiYXNlQ29tcG9uZW50LmNhbGwodGhpcywgcGxheWVyLCBvcHRpb25zKTtcblxuICAgICAgdmFyIHBvc3RlckltZyA9IHBsYXllci5nZXRDaGlsZCgncG9zdGVySW1hZ2UnKTtcblxuICAgICAgLy9XZSBuZWVkIHRvIGRvIGl0IGFzeW5jaHJvbm91c2x5IHRvIGJlIHN1cmUgdGhhdCB0aGUgYmxhY2sgcG9zdGVyIGVsIGlzIG9uIHRoZSBkb20uXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBpZihwb3N0ZXJJbWcgJiYgcGxheWVyICYmIHBsYXllci5lbCgpKSB7XG4gICAgICAgICAgcGxheWVyLmVsKCkuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHBvc3RlckltZy5lbCgpKTtcbiAgICAgICAgfVxuICAgICAgfSwgMCk7XG4gICAgfSxcbiAgICBlbDogZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQmxhY2tQb3N0ZXJGYWN0b3J5OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhc2VWaWRlb0pzQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuXG52YXIgQmxhY2tQb3N0ZXIgPSByZXF1aXJlKCcuL2JsYWNrLXBvc3RlcicpKGJhc2VWaWRlb0pzQ29tcG9uZW50KTtcblxudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnQmxhY2tQb3N0ZXInLCB2aWRlb2pzLmV4dGVuZChiYXNlVmlkZW9Kc0NvbXBvbmVudCwgQmxhY2tQb3N0ZXIpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFZBU1RDbGllbnQgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC9WQVNUQ2xpZW50Jyk7XG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vYWRzL3Zhc3QvVkFTVEVycm9yJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC92YXN0VXRpbCcpO1xuXG52YXIgVkFTVEludGVncmF0b3IgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC9WQVNUSW50ZWdyYXRvcicpO1xudmFyIFZQQUlESW50ZWdyYXRvciA9IHJlcXVpcmUoJy4uL2Fkcy92cGFpZC9WUEFJREludGVncmF0b3InKTtcblxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vdXRpbHMvYXN5bmMnKTtcbnZhciBkb20gPSByZXF1aXJlKCcuLi91dGlscy9kb20nKTtcbnZhciBwbGF5ZXJVdGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3BsYXllclV0aWxzJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgbG9nZ2VyID0gcmVxdWlyZSAoJy4uL3V0aWxzL2NvbnNvbGVMb2dnZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBWQVNUUGx1Z2luKG9wdGlvbnMpIHtcbiAgdmFyIHNuYXBzaG90O1xuICB2YXIgcGxheWVyID0gdGhpcztcbiAgdmFyIHZhc3QgPSBuZXcgVkFTVENsaWVudCgpO1xuICB2YXIgYWRzQ2FuY2VsZWQgPSBmYWxzZTtcbiAgdmFyIGRlZmF1bHRPcHRzID0ge1xuICAgIC8vIG1heGltdW0gYW1vdW50IG9mIHRpbWUgaW4gbXMgdG8gd2FpdCB0byByZWNlaXZlIGBhZHNyZWFkeWAgZnJvbSB0aGUgYWRcbiAgICAvLyBpbXBsZW1lbnRhdGlvbiBhZnRlciBwbGF5IGhhcyBiZWVuIHJlcXVlc3RlZC4gQWQgaW1wbGVtZW50YXRpb25zIGFyZVxuICAgIC8vIGV4cGVjdGVkIHRvIGxvYWQgYW55IGR5bmFtaWMgbGlicmFyaWVzIGFuZCBtYWtlIGFueSByZXF1ZXN0cyB0byBkZXRlcm1pbmVcbiAgICAvLyBhZCBwb2xpY2llcyBmb3IgYSB2aWRlbyBkdXJpbmcgdGhpcyB0aW1lLlxuICAgIHRpbWVvdXQ6IDUwMCxcblxuICAgIC8vVE9ETzpmaW5pc2ggdGhpcyBJT1MgRklYXG4gICAgLy9XaGVuZXZlciB5b3UgcGxheSBhbiBhZGQgb24gSU9TLCB0aGUgbmF0aXZlIHBsYXllciBraWNrcyBpbiBhbmQgd2UgbG9vc2UgY29udHJvbCBvZiBpdC4gT24gdmVyeSBoZWF2eSBwYWdlcyB0aGUgJ3BsYXknIGV2ZW50XG4gICAgLy8gTWF5IG9jY3VyIGFmdGVyIHRoZSB2aWRlbyBjb250ZW50IGhhcyBhbHJlYWR5IHN0YXJ0ZWQuIFRoaXMgaXMgd3JvbmcgaWYgeW91IHdhbnQgdG8gcGxheSBhIHByZXJvbGwgYWQgdGhhdCBuZWVkcyB0byBoYXBwZW4gYmVmb3JlIHRoZSB1c2VyXG4gICAgLy8gc3RhcnRzIHdhdGNoaW5nIHRoZSBjb250ZW50LiBUbyBwcmV2ZW50IHRoaXMgdXNlY1xuICAgIGlvc1ByZXJvbGxDYW5jZWxUaW1lb3V0OiAyMDAwLFxuXG4gICAgLy8gbWF4aW11biBhbW91bnQgb2YgdGltZSBmb3IgdGhlIGFkIHRvIGFjdHVhbGx5IHN0YXJ0IHBsYXlpbmcuIElmIHRoaXMgdGltZW91dCBnZXRzXG4gICAgLy8gdHJpZ2dlcmVkIHRoZSBhZHMgd2lsbCBiZSBjYW5jZWxsZWRcbiAgICBhZENhbmNlbFRpbWVvdXQ6IDMwMDAsXG5cbiAgICAvLyBCb29sZWFuIGZsYWcgdGhhdCBjb25maWd1cmVzIHRoZSBwbGF5ZXIgdG8gcGxheSBhIG5ldyBhZCBiZWZvcmUgdGhlIHVzZXIgc2VlcyB0aGUgdmlkZW8gYWdhaW5cbiAgICAvLyB0aGUgY3VycmVudCB2aWRlb1xuICAgIHBsYXlBZEFsd2F5czogZmFsc2UsXG5cbiAgICAvLyBGbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBhZHMgYnkgZGVmYXVsdC5cbiAgICBhZHNFbmFibGVkOiB0cnVlLFxuXG4gICAgLy8gQm9vbGVhbiBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSByZXNpemUgd2l0aCB3aW5kb3cucmVzaXplIG9yIG9yaWVudGF0aW9uY2hhbmdlXG4gICAgYXV0b1Jlc2l6ZTogdHJ1ZSxcblxuICAgIC8vIHZlcmJvc2l0eSBvZiBjb25zb2xlIGxvZ2dpbmc6XG4gICAgLy8gMCAtIGVycm9yXG4gICAgLy8gMSAtIGVycm9yLCB3YXJuXG4gICAgLy8gMiAtIGVycm9yLCB3YXJuLCBpbmZvXG4gICAgLy8gMyAtIGVycm9yLCB3YXJuLCBpbmZvLCBsb2dcbiAgICAvLyA0IC0gZXJyb3IsIHdhcm4sIGluZm8sIGxvZywgZGVidWdcbiAgICB2ZXJib3NpdHk6IDBcbiAgfTtcblxuICB2YXIgc2V0dGluZ3MgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0cywgb3B0aW9ucyB8fCB7fSk7XG5cbiAgaWYodXRpbGl0aWVzLmlzVW5kZWZpbmVkKHNldHRpbmdzLmFkVGFnVXJsKSAmJiB1dGlsaXRpZXMuaXNEZWZpbmVkKHNldHRpbmdzLnVybCkpe1xuICAgIHNldHRpbmdzLmFkVGFnVXJsID0gc2V0dGluZ3MudXJsO1xuICB9XG5cbiAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhzZXR0aW5ncy5hZFRhZ1VybCkpIHtcbiAgICBzZXR0aW5ncy5hZFRhZ1VybCA9IHV0aWxpdGllcy5lY2hvRm4oc2V0dGluZ3MuYWRUYWdVcmwpO1xuICB9XG5cbiAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQoc2V0dGluZ3MuYWRUYWdYTUwpICYmICF1dGlsaXRpZXMuaXNGdW5jdGlvbihzZXR0aW5ncy5hZFRhZ1hNTCkpIHtcbiAgICByZXR1cm4gdHJhY2tBZEVycm9yKG5ldyBWQVNURXJyb3IoJ29uIFZpZGVvSlMgVkFTVCBwbHVnaW4sIHRoZSBwYXNzZWQgYWRUYWdYTUwgb3B0aW9uIGRvZXMgbm90IGNvbnRhaW4gYSBmdW5jdGlvbicpKTtcbiAgfVxuXG4gIGlmICghdXRpbGl0aWVzLmlzRGVmaW5lZChzZXR0aW5ncy5hZFRhZ1VybCkgJiYgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKHNldHRpbmdzLmFkVGFnWE1MKSkge1xuICAgIHJldHVybiB0cmFja0FkRXJyb3IobmV3IFZBU1RFcnJvcignb24gVmlkZW9KUyBWQVNUIHBsdWdpbiwgbWlzc2luZyBhZFRhZ1VybCBvbiBvcHRpb25zIG9iamVjdCcpKTtcbiAgfVxuXG4gIGxvZ2dlci5zZXRWZXJib3NpdHkgKHNldHRpbmdzLnZlcmJvc2l0eSk7XG5cbiAgcGxheWVyVXRpbHMucHJlcGFyZUZvckFkcyhwbGF5ZXIpO1xuXG4gIGlmIChzZXR0aW5ncy5wbGF5QWRBbHdheXMpIHtcbiAgICAvLyBObyBtYXR0ZXIgd2hhdCBoYXBwZW5zIHdlIHBsYXkgYSBuZXcgYWQgYmVmb3JlIHRoZSB1c2VyIHNlZXMgdGhlIHZpZGVvIGFnYWluLlxuICAgIHBsYXllci5vbigndmFzdC5jb250ZW50RW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LnJlc2V0Jyk7XG4gICAgICB9LCAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHBsYXllci5vbigndmFzdC5maXJzdFBsYXknLCB0cnlUb1BsYXlQcmVyb2xsQWQpO1xuXG4gIHBsYXllci5vbigndmFzdC5yZXNldCcsIGZ1bmN0aW9uICgpIHtcbiAgICAvL0lmIHdlIGFyZSByZXNldGluZyB0aGUgcGx1Z2luLCB3ZSBkb24ndCB3YW50IHRvIHJlc3RvcmUgdGhlIGNvbnRlbnRcbiAgICBzbmFwc2hvdCA9IG51bGw7XG4gICAgY2FuY2VsQWRzKCk7XG4gIH0pO1xuXG4gIHBsYXllci52YXN0ID0ge1xuICAgIGlzRW5hYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNldHRpbmdzLmFkc0VuYWJsZWQ7XG4gICAgfSxcblxuICAgIGVuYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgc2V0dGluZ3MuYWRzRW5hYmxlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIGRpc2FibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldHRpbmdzLmFkc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHBsYXllci52YXN0O1xuXG4gIC8qKioqIExvY2FsIGZ1bmN0aW9ucyAqKioqL1xuICBmdW5jdGlvbiB0cnlUb1BsYXlQcmVyb2xsQWQoKSB7XG4gICAgLy9XZSByZW1vdmUgdGhlIHBvc3RlciB0byBwcmV2ZW50IGZsaWNrZXJpbmcgd2hlbmV2ZXIgdGhlIGNvbnRlbnQgc3RhcnRzIHBsYXlpbmdcbiAgICBwbGF5ZXJVdGlscy5yZW1vdmVOYXRpdmVQb3N0ZXIocGxheWVyKTtcblxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRzQ2FuY2VsJywgJ3Zhc3QuYWRFbmQnXSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlQWRVbml0KCk7XG4gICAgICByZXN0b3JlVmlkZW9Db250ZW50KCk7XG4gICAgfSk7XG5cbiAgICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgY2hlY2tBZHNFbmFibGVkLFxuICAgICAgcHJlcGFyZVBsYXllckZvckFkLFxuICAgICAgc3RhcnRBZENhbmNlbFRpbWVvdXQsXG4gICAgICBwbGF5UHJlcm9sbEFkXG4gICAgXSwgZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSkge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHRyYWNrQWRFcnJvcihlcnJvciwgcmVzcG9uc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRFbmQnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUFkVW5pdCgpIHtcbiAgICAgIGlmIChwbGF5ZXIudmFzdCAmJiBwbGF5ZXIudmFzdC5hZFVuaXQpIHtcbiAgICAgICAgcGxheWVyLnZhc3QuYWRVbml0ID0gbnVsbDsgLy9XZSByZW1vdmUgdGhlIGFkVW5pdFxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3RvcmVWaWRlb0NvbnRlbnQoKSB7XG4gICAgICBzZXR1cENvbnRlbnRFdmVudHMoKTtcbiAgICAgIGlmIChzbmFwc2hvdCkge1xuICAgICAgICBwbGF5ZXJVdGlscy5yZXN0b3JlUGxheWVyU25hcHNob3QocGxheWVyLCBzbmFwc2hvdCk7XG4gICAgICAgIHNuYXBzaG90ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR1cENvbnRlbnRFdmVudHMoKSB7XG4gICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydwbGF5aW5nJywgJ3Zhc3QucmVzZXQnLCAndmFzdC5maXJzdFBsYXknXSwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBpZiAoZXZ0LnR5cGUgIT09ICdwbGF5aW5nJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmNvbnRlbnRTdGFydCcpO1xuXG4gICAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ2VuZGVkJywgJ3Zhc3QucmVzZXQnLCAndmFzdC5maXJzdFBsYXknXSwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2VuZGVkJykge1xuICAgICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuY29udGVudEVuZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0Fkc0VuYWJsZWQobmV4dCkge1xuICAgICAgaWYgKHNldHRpbmdzLmFkc0VuYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIG5leHQobnVsbCk7XG4gICAgICB9XG4gICAgICBuZXh0KG5ldyBWQVNURXJyb3IoJ0FkcyBhcmUgbm90IGVuYWJsZWQnKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJlcGFyZVBsYXllckZvckFkKG5leHQpIHtcbiAgICAgIGlmIChjYW5QbGF5UHJlcm9sbEFkKCkpIHtcbiAgICAgICAgc25hcHNob3QgPSBwbGF5ZXJVdGlscy5nZXRQbGF5ZXJTbmFwc2hvdChwbGF5ZXIpO1xuICAgICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgYWRkU3Bpbm5lckljb24oKTtcblxuICAgICAgICBpZihwbGF5ZXIucGF1c2VkKCkpIHtcbiAgICAgICAgICBuZXh0KG51bGwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnXSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgICAgICAgIG5leHQobnVsbCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQobmV3IFZBU1RFcnJvcigndmlkZW8gY29udGVudCBoYXMgYmVlbiBwbGF5aW5nIGJlZm9yZSBwcmVyb2xsIGFkJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblBsYXlQcmVyb2xsQWQoKSB7XG4gICAgICByZXR1cm4gIXV0aWxpdGllcy5pc0lQaG9uZSgpIHx8IHBsYXllci5jdXJyZW50VGltZSgpIDw9IHNldHRpbmdzLmlvc1ByZXJvbGxDYW5jZWxUaW1lb3V0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0QWRDYW5jZWxUaW1lb3V0KG5leHQpIHtcbiAgICAgIHZhciBhZENhbmNlbFRpbWVvdXRJZDtcbiAgICAgIGFkc0NhbmNlbGVkID0gZmFsc2U7XG5cbiAgICAgIGFkQ2FuY2VsVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyYWNrQWRFcnJvcihuZXcgVkFTVEVycm9yKCd0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIHRoZSB2aWRlbyB0byBzdGFydCBwbGF5aW5nJywgNDAyKSk7XG4gICAgICB9LCBzZXR0aW5ncy5hZENhbmNlbFRpbWVvdXQpO1xuXG4gICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkU3RhcnQnLCAndmFzdC5hZHNDYW5jZWwnXSwgY2xlYXJBZENhbmNlbFRpbWVvdXQpO1xuXG4gICAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgICBmdW5jdGlvbiBjbGVhckFkQ2FuY2VsVGltZW91dCgpIHtcbiAgICAgICAgaWYgKGFkQ2FuY2VsVGltZW91dElkKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGFkQ2FuY2VsVGltZW91dElkKTtcbiAgICAgICAgICBhZENhbmNlbFRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbmV4dChudWxsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRTcGlubmVySWNvbigpIHtcbiAgICAgIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy12YXN0LWFkLWxvYWRpbmcnKTtcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRTdGFydCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVTcGlubmVySWNvbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3Bpbm5lckljb24oKSB7XG4gICAgICAvL0lNUE9SVEFOVCBOT1RFOiBXZSByZW1vdmUgdGhlIHNwaW5uZXJJY29uIGFzeW5jaHJvbm91c2x5IHRvIGdpdmUgdGltZSB0byB0aGUgYnJvd3NlciB0byBzdGFydCB0aGUgdmlkZW8uXG4gICAgICAvLyBJZiB3ZSByZW1vdmUgaXQgc3luY2hyb25vdXNseSB3ZSBzZWUgYSBmbGFzaCBvZiB0aGUgY29udGVudCB2aWRlbyBiZWZvcmUgdGhlIGFkIHN0YXJ0cyBwbGF5aW5nLlxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy12YXN0LWFkLWxvYWRpbmcnKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxBZHMoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRzQ2FuY2VsJyk7XG4gICAgYWRzQ2FuY2VsZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheVByZXJvbGxBZChjYWxsYmFjaykge1xuICAgIGFzeW5jLndhdGVyZmFsbChbXG4gICAgICBnZXRWYXN0UmVzcG9uc2UsXG4gICAgICBwbGF5QWRcbiAgICBdLCBjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRWYXN0UmVzcG9uc2UoY2FsbGJhY2spIHtcbiAgICB2YXN0LmdldFZBU1RSZXNwb25zZShzZXR0aW5ncy5hZFRhZ1VybCA/IHNldHRpbmdzLmFkVGFnVXJsKCkgOiBzZXR0aW5ncy5hZFRhZ1hNTCwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheUFkKHZhc3RSZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgICAvL1RPRE86IEZpbmQgYSBiZXR0ZXIgd2F5IHRvIHN0b3AgdGhlIHBsYXkuIFRoZSAncGxheVByZXJvbGxXYXRlcmZhbGwnIGVuZHMgaW4gYW4gaW5jb25zaXN0ZW50IHNpdHVhdGlvblxuICAgIC8vSWYgdGhlIHN0YXRlIGlzIG5vdCAncHJlcm9sbD8nIGl0IG1lYW5zIHRoZSBhZHMgd2VyZSBjYW5jZWxlZCB0aGVyZWZvcmUsIHdlIGJyZWFrIHRoZSB3YXRlcmZhbGxcbiAgICBpZiAoYWRzQ2FuY2VsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYWRJbnRlZ3JhdG9yID0gaXNWUEFJRCh2YXN0UmVzcG9uc2UpID8gbmV3IFZQQUlESW50ZWdyYXRvcihwbGF5ZXIsIHNldHRpbmdzKSA6IG5ldyBWQVNUSW50ZWdyYXRvcihwbGF5ZXIpO1xuICAgIHZhciBhZEZpbmlzaGVkID0gZmFsc2U7XG5cbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkU3RhcnQnLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKGV2dC50eXBlID09PSAndmFzdC5hZFN0YXJ0Jykge1xuICAgICAgICBhZGRBZHNMYWJlbCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVBZHNMYWJlbCk7XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzSURldmljZSgpKSB7XG4gICAgICBwcmV2ZW50TWFudWFsUHJvZ3Jlc3MoKTtcbiAgICB9XG5cbiAgICBwbGF5ZXIudmFzdC52YXN0UmVzcG9uc2UgPSB2YXN0UmVzcG9uc2U7XG4gICAgbG9nZ2VyLmRlYnVnIChcImNhbGxpbmcgYWRJbnRlZ3JhdG9yLnBsYXlBZCgpIHdpdGggdmFzdFJlc3BvbnNlOlwiLCB2YXN0UmVzcG9uc2UpO1xuICAgIHBsYXllci52YXN0LmFkVW5pdCA9IGFkSW50ZWdyYXRvci5wbGF5QWQodmFzdFJlc3BvbnNlLCBjYWxsYmFjayk7XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKioqL1xuICAgIGZ1bmN0aW9uIGFkZEFkc0xhYmVsKCkge1xuICAgICAgaWYgKGFkRmluaXNoZWQgfHwgcGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoJ0Fkc0xhYmVsJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwbGF5ZXIuY29udHJvbEJhci5hZGRDaGlsZCgnQWRzTGFiZWwnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBZHNMYWJlbCgpIHtcbiAgICAgIHBsYXllci5jb250cm9sQmFyLnJlbW92ZUNoaWxkKCdBZHNMYWJlbCcpO1xuICAgICAgYWRGaW5pc2hlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJldmVudE1hbnVhbFByb2dyZXNzKCkge1xuICAgICAgLy9JT1MgdmlkZW8gY2xvY2sgaXMgdmVyeSB1bnJlbGlhYmxlIGFuZCB3ZSBuZWVkIGEgMyBzZWNvbmRzIHRocmVzaG9sZCB0byBlbnN1cmUgdGhhdCB0aGUgdXNlciBmb3J3YXJkZWQvcmV3b3VuZCB0aGUgYWRcbiAgICAgIHZhciBQUk9HUkVTU19USFJFU0hPTEQgPSAzO1xuICAgICAgdmFyIHByZXZpb3VzVGltZSA9IDA7XG4gICAgICB2YXIgc2tpcGFkX2F0dGVtcHRzID0gMDtcblxuICAgICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgcHJldmVudEFkU2Vlayk7XG4gICAgICBwbGF5ZXIub24oJ2VuZGVkJywgcHJldmVudEFkU2tpcCk7XG5cbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnLCAndmFzdC5hZEVycm9yJ10sIHN0b3BQcmV2ZW50TWFudWFsUHJvZ3Jlc3MpO1xuXG4gICAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgICBmdW5jdGlvbiBwcmV2ZW50QWRTa2lwKCkge1xuICAgICAgICAvLyBJZ25vcmUgZW5kZWQgZXZlbnQgaWYgdGhlIEFkIHRpbWUgd2FzIG5vdCAnbmVhcicgdGhlIGVuZFxuICAgICAgICAvLyBhbmQgcmV2ZXJ0IHRpbWUgdG8gdGhlIHByZXZpb3VzICd2YWxpZCcgdGltZVxuICAgICAgICBpZiAoKHBsYXllci5kdXJhdGlvbigpIC0gcHJldmlvdXNUaW1lKSA+IFBST0dSRVNTX1RIUkVTSE9MRCkge1xuICAgICAgICAgIHBsYXllci5wYXVzZSh0cnVlKTsgLy8gdGhpcyByZWR1Y2UgdGhlIHZpZGVvIGppdHRlciBpZiB0aGUgSU9TIHNraXAgYnV0dG9uIGlzIHByZXNzZWRcbiAgICAgICAgICBwbGF5ZXIucGxheSh0cnVlKTsgLy8gd2UgbmVlZCB0byB0cmlnZ2VyIHRoZSBwbGF5IHRvIHB1dCB0aGUgdmlkZW8gZWxlbWVudCBiYWNrIGluIGEgdmFsaWQgc3RhdGVcbiAgICAgICAgICBwbGF5ZXIuY3VycmVudFRpbWUocHJldmlvdXNUaW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwcmV2ZW50QWRTZWVrKCkge1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBwbGF5ZXIuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdmFyIHByb2dyZXNzRGVsdGEgPSBNYXRoLmFicyhjdXJyZW50VGltZSAtIHByZXZpb3VzVGltZSk7XG4gICAgICAgIGlmIChwcm9ncmVzc0RlbHRhID4gUFJPR1JFU1NfVEhSRVNIT0xEKSB7XG4gICAgICAgICAgc2tpcGFkX2F0dGVtcHRzICs9IDE7XG4gICAgICAgICAgaWYgKHNraXBhZF9hdHRlbXB0cyA+PSAyKSB7XG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYXllci5jdXJyZW50VGltZShwcmV2aW91c1RpbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZpb3VzVGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHN0b3BQcmV2ZW50TWFudWFsUHJvZ3Jlc3MoKSB7XG4gICAgICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCBwcmV2ZW50QWRTZWVrKTtcbiAgICAgICAgcGxheWVyLm9mZignZW5kZWQnLCBwcmV2ZW50QWRTa2lwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja0FkRXJyb3IoZXJyb3IsIHZhc3RSZXNwb25zZSkge1xuICAgIHBsYXllci50cmlnZ2VyKHt0eXBlOiAndmFzdC5hZEVycm9yJywgZXJyb3I6IGVycm9yfSk7XG4gICAgY2FuY2VsQWRzKCk7XG4gICAgbG9nZ2VyLmVycm9yICgnQUQgRVJST1I6JywgZXJyb3IubWVzc2FnZSwgZXJyb3IsIHZhc3RSZXNwb25zZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1ZQQUlEKHZhc3RSZXNwb25zZSkge1xuICAgIHZhciBpLCBsZW47XG4gICAgdmFyIG1lZGlhRmlsZXMgPSB2YXN0UmVzcG9uc2UubWVkaWFGaWxlcztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBtZWRpYUZpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAodmFzdFV0aWwuaXNWUEFJRChtZWRpYUZpbGVzW2ldKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuIiwiLy9TbWFsbCBzdWJzZXQgb2YgYXN5bmNcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgYXN5bmMgPSB7fTtcblxuYXN5bmMuc2V0SW1tZWRpYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHNldFRpbWVvdXQoZm4sIDApO1xufTtcblxuYXN5bmMuaXRlcmF0b3IgPSBmdW5jdGlvbiAodGFza3MpIHtcbiAgdmFyIG1ha2VDYWxsYmFjayA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHZhciBmbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgdGFza3NbaW5kZXhdLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm4ubmV4dCgpO1xuICAgIH07XG4gICAgZm4ubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAoaW5kZXggPCB0YXNrcy5sZW5ndGggLSAxKSA/IG1ha2VDYWxsYmFjayhpbmRleCArIDEpIDogbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBmbjtcbiAgfTtcbiAgcmV0dXJuIG1ha2VDYWxsYmFjaygwKTtcbn07XG5cblxuYXN5bmMud2F0ZXJmYWxsID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHsgfTtcbiAgaWYgKCF1dGlsaXRpZXMuaXNBcnJheSh0YXNrcykpIHtcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCB0byB3YXRlcmZhbGwgbXVzdCBiZSBhbiBhcnJheSBvZiBmdW5jdGlvbnMnKTtcbiAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgfVxuICBpZiAoIXRhc2tzLmxlbmd0aCkge1xuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9XG4gIHZhciB3cmFwSXRlcmF0b3IgPSBmdW5jdGlvbiAoaXRlcmF0b3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVycikge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIHZhciBuZXh0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwSXRlcmF0b3IobmV4dCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGFyZ3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMuc2V0SW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpdGVyYXRvci5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgd3JhcEl0ZXJhdG9yKGFzeW5jLml0ZXJhdG9yKHRhc2tzKSkoKTtcbn07XG5cbmFzeW5jLndoZW4gPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBjYWxsYmFjaykge1xuICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImFzeW5jLndoZW4gZXJyb3I6IG1pc3NpbmcgY2FsbGJhY2sgYXJndW1lbnRcIik7XG4gIH1cblxuICB2YXIgaXNBbGxvd2VkID0gdXRpbGl0aWVzLmlzRnVuY3Rpb24oY29uZGl0aW9uKSA/IGNvbmRpdGlvbiA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISFjb25kaXRpb247XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IHV0aWxpdGllcy5hcnJheUxpa2VPYmpUb0FycmF5KGFyZ3VtZW50cyk7XG4gICAgdmFyIG5leHQgPSBhcmdzLnBvcCgpO1xuXG4gICAgaWYgKGlzQWxsb3dlZC5hcHBseShudWxsLCBhcmdzKSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgYXJncy51bnNoaWZ0KG51bGwpO1xuICAgIHJldHVybiBuZXh0LmFwcGx5KG51bGwsIGFyZ3MpO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhc3luYztcblxuIiwiLypqc2hpbnQgdW51c2VkOmZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF92ZXJib3NpdHkgPSAwO1xudmFyIF9wcmVmaXggPSBcIlt2aWRlb2pzLXZhc3QtdnBhaWRdIFwiO1xuXG5mdW5jdGlvbiBzZXRWZXJib3NpdHkgKHYpXG57XG4gICAgX3ZlcmJvc2l0eSA9IHY7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1zZyAobWV0aG9kLCBhcmdzKVxue1xuICAgIGlmICgoYXJncy5sZW5ndGgpID4gMCAmJiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnKSlcbiAgICB7XG4gICAgICAgIGFyZ3NbMF0gPSBfcHJlZml4ICsgYXJnc1swXTtcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kLmFwcGx5KVxuICAgIHtcbiAgICAgICAgbWV0aG9kLmFwcGx5IChjb25zb2xlLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIG1ldGhvZCAoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncykpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVidWcgKClcbntcbiAgICBpZiAoX3ZlcmJvc2l0eSA8IDQpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlLmRlYnVnID09PSAndW5kZWZpbmVkJylcbiAgICB7XG4gICAgICAgIC8vIElFIDEwIGRvZXNuJ3QgaGF2ZSBhIGNvbnNvbGUuZGVidWcoKSBmdW5jdGlvblxuICAgICAgICBoYW5kbGVNc2cgKGNvbnNvbGUubG9nLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBoYW5kbGVNc2cgKGNvbnNvbGUuZGVidWcsIGFyZ3VtZW50cyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2cgKClcbntcbiAgICBpZiAoX3ZlcmJvc2l0eSA8IDMpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFuZGxlTXNnIChjb25zb2xlLmxvZywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gaW5mbyAoKVxue1xuICAgIGlmIChfdmVyYm9zaXR5IDwgMilcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoYW5kbGVNc2cgKGNvbnNvbGUuaW5mbywgYXJndW1lbnRzKTtcbn1cblxuXG5mdW5jdGlvbiB3YXJuICgpXG57XG4gICAgaWYgKF92ZXJib3NpdHkgPCAxKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhhbmRsZU1zZyAoY29uc29sZS53YXJuLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBlcnJvciAoKVxue1xuICAgIGhhbmRsZU1zZyAoY29uc29sZS5lcnJvciwgYXJndW1lbnRzKTtcbn1cblxudmFyIGNvbnNvbGVMb2dnZXIgPSB7XG4gICAgc2V0VmVyYm9zaXR5OiBzZXRWZXJib3NpdHksXG4gICAgZGVidWc6IGRlYnVnLFxuICAgIGxvZzogbG9nLFxuICAgIGluZm86IGluZm8sXG4gICAgd2Fybjogd2FybixcbiAgICBlcnJvcjogZXJyb3Jcbn07XG5cbmlmICgodHlwZW9mIChjb25zb2xlKSA9PT0gJ3VuZGVmaW5lZCcpIHx8ICFjb25zb2xlLmxvZylcbntcbiAgICAvLyBubyBjb25zb2xlIGF2YWlsYWJsZTsgbWFrZSBmdW5jdGlvbnMgbm8tb3BcbiAgICBjb25zb2xlTG9nZ2VyLmRlYnVnID0gZnVuY3Rpb24gKCkge307XG4gICAgY29uc29sZUxvZ2dlci5sb2cgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjb25zb2xlTG9nZ2VyLmluZm8gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjb25zb2xlTG9nZ2VyLndhcm4gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjb25zb2xlTG9nZ2VyLmVycm9yID0gZnVuY3Rpb24gKCkge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29uc29sZUxvZ2dlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgZG9tID0ge307XG5cbmRvbS5pc1Zpc2libGUgPSBmdW5jdGlvbiBpc1Zpc2libGUoZWwpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICByZXR1cm4gc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbic7XG59O1xuXG5kb20uaXNIaWRkZW4gPSBmdW5jdGlvbiBpc0hpZGRlbihlbCkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gIHJldHVybiBzdHlsZS5kaXNwbGF5ID09PSAnbm9uZSc7XG59O1xuXG5kb20uaXNTaG93biA9IGZ1bmN0aW9uIGlzU2hvd24oZWwpIHtcbiAgcmV0dXJuICFkb20uaXNIaWRkZW4oZWwpO1xufTtcblxuZG9tLmhpZGUgPSBmdW5jdGlvbiBoaWRlKGVsKSB7XG4gIGVsLl9fcHJldl9zdHlsZV9kaXNwbGF5XyA9IGVsLnN0eWxlLmRpc3BsYXk7XG4gIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuXG5kb20uc2hvdyA9IGZ1bmN0aW9uIHNob3coZWwpIHtcbiAgaWYgKGRvbS5pc0hpZGRlbihlbCkpIHtcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX19wcmV2X3N0eWxlX2Rpc3BsYXlfO1xuICB9XG4gIGVsLl9fcHJldl9zdHlsZV9kaXNwbGF5XyA9IHVuZGVmaW5lZDtcbn07XG5cbmRvbS5oYXNDbGFzcyA9IGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjc3NDbGFzcykge1xuICB2YXIgY2xhc3NlcywgaSwgbGVuO1xuXG4gIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcykpIHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzKTtcbiAgICB9XG5cbiAgICBjbGFzc2VzID0gdXRpbGl0aWVzLmlzU3RyaW5nKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkgPyBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoL1xccysvKSA6IFtdO1xuICAgIGNzc0NsYXNzID0gKGNzc0NsYXNzIHx8ICcnKTtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IGNsYXNzZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGlmIChjbGFzc2VzW2ldID09PSBjc3NDbGFzcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZG9tLmFkZENsYXNzID0gZnVuY3Rpb24gKGVsLCBjc3NDbGFzcykge1xuICB2YXIgY2xhc3NlcztcblxuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MpKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIH1cblxuICAgIGNsYXNzZXMgPSB1dGlsaXRpZXMuaXNTdHJpbmcoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpKSA/IGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5zcGxpdCgvXFxzKy8pIDogW107XG4gICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhjc3NDbGFzcykgJiYgdXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MucmVwbGFjZSgvXFxzKy8sICcnKSkpIHtcbiAgICAgIGNsYXNzZXMucHVzaChjc3NDbGFzcyk7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3Nlcy5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxufTtcblxuZG9tLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGVsLCBjc3NDbGFzcykge1xuICB2YXIgY2xhc3NlcztcblxuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MpKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3MpO1xuICAgIH1cblxuICAgIGNsYXNzZXMgPSB1dGlsaXRpZXMuaXNTdHJpbmcoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpKSA/IGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5zcGxpdCgvXFxzKy8pIDogW107XG4gICAgdmFyIG5ld0NsYXNzZXMgPSBbXTtcbiAgICB2YXIgaSwgbGVuO1xuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoY3NzQ2xhc3MpICYmIHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzLnJlcGxhY2UoL1xccysvLCAnJykpKSB7XG5cbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGNsYXNzZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGNzc0NsYXNzICE9PSBjbGFzc2VzW2ldKSB7XG4gICAgICAgICAgbmV3Q2xhc3Nlcy5wdXNoKGNsYXNzZXNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbmV3Q2xhc3Nlcy5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxufTtcblxuZG9tLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGVsLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KGVsKSl7XG4gICAgdXRpbGl0aWVzLmZvckVhY2goZWwsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKGUsIHR5cGUsIGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KHR5cGUpKXtcbiAgICB1dGlsaXRpZXMuZm9yRWFjaCh0eXBlLCBmdW5jdGlvbih0KSB7XG4gICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlbCwgdCwgaGFuZGxlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgfSBlbHNlIGlmIChlbC5hdHRhY2hFdmVudCkge1xuICAgIC8vIFdBUk5JTkchISEgdGhpcyBpcyBhIHZlcnkgbmFpdmUgaW1wbGVtZW50YXRpb24gIVxuICAgIC8vIHRoZSBldmVudCBvYmplY3QgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBoYW5kbGVyXG4gICAgLy8gd291bGQgbm90IGJlIHRoZXJlIGZvciBJRThcbiAgICAvLyB3ZSBzaG91bGQgdXNlIFwid2luZG93LmV2ZW50XCIgYW5kIHRoZW4gXCJldmVudC5zcmNFbGVtZW50XCJcbiAgICAvLyBpbnN0ZWFkIG9mIFwiZXZlbnQudGFyZ2V0XCJcbiAgICBlbC5hdHRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBoYW5kbGVyKTtcbiAgfVxufTtcblxuZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKGVsLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KGVsKSl7XG4gICAgdXRpbGl0aWVzLmZvckVhY2goZWwsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKGUsIHR5cGUsIGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KHR5cGUpKXtcbiAgICB1dGlsaXRpZXMuZm9yRWFjaCh0eXBlLCBmdW5jdGlvbih0KSB7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdCwgaGFuZGxlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgfSBlbHNlIGlmIChlbC5kZXRhY2hFdmVudCkge1xuICAgIGVsLmRldGFjaEV2ZW50KFwib25cIiArIHR5cGUsIGhhbmRsZXIpO1xuICB9IGVsc2Uge1xuICAgIGVsW1wib25cIiArIHR5cGVdID0gbnVsbDtcbiAgfVxufTtcblxuZG9tLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVsLCBldmVudCkge1xuICBpZiAoZWwuZGlzcGF0Y2hFdmVudCkge1xuICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9IGVsc2Uge1xuICAgIGVsLmZpcmVFdmVudChcIm9uXCIgKyBldmVudC5ldmVudFR5cGUsIGV2ZW50KTtcbiAgfVxufTtcblxuZG9tLmlzRGVzY2VuZGFudCA9IGZ1bmN0aW9uIGlzRGVzY2VuZGFudChwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciBub2RlID0gY2hpbGQucGFyZW50Tm9kZTtcbiAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5kb20uZ2V0VGV4dENvbnRlbnQgPSBmdW5jdGlvbiBnZXRUZXh0Q29udGVudChlbCl7XG4gIHJldHVybiBlbC50ZXh0Q29udGVudCB8fCBlbC50ZXh0O1xufTtcblxuZG9tLnByZXBlbmRDaGlsZCA9IGZ1bmN0aW9uIHByZXBlbmRDaGlsZChwYXJlbnQsIGNoaWxkKSB7XG4gIGlmKGNoaWxkLnBhcmVudE5vZGUpe1xuICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICB9XG4gIHJldHVybiBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCBwYXJlbnQuZmlyc3RDaGlsZCk7XG59O1xuXG5kb20ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKXtcbiAgaWYobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpe1xuICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgfVxufTtcblxuZG9tLmlzRG9tRWxlbWVudCA9IGZ1bmN0aW9uIGlzRG9tRWxlbWVudChvKSB7XG4gIHJldHVybiBvIGluc3RhbmNlb2YgRWxlbWVudDtcbn07XG5cbmRvbS5jbGljayA9IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKSB7XG4gIGRvbS5hZGRFdmVudExpc3RlbmVyKGVsLCAnY2xpY2snLCBoYW5kbGVyKTtcbn07XG5cbmRvbS5vbmNlID0gZnVuY3Rpb24oZWwsIHR5cGUsIGhhbmRsZXIpIHtcbiAgZnVuY3Rpb24gaGFuZGxlcldyYXAoKSB7XG4gICAgaGFuZGxlci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKGVsLCB0eXBlLCBoYW5kbGVyV3JhcCk7XG4gIH1cblxuICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcldyYXApO1xufTtcblxuLy9Ob3RlOiB0aGVyZSBpcyBubyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gaVBhZCBzbyB3ZSBuZWVkIGEgZmFsbGJhY2tcbmRvbS5nZXREaW1lbnNpb24gPSBmdW5jdGlvbiBnZXREaW1lbnNpb24oZWxlbWVudCkge1xuICB2YXIgcmVjdDtcblxuICAvL09uIElFOSBhbmQgYmVsb3cgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGRvZXMgbm90IHdvcmsgY29uc2lzdGVudGx5XG4gIGlmKCF1dGlsaXRpZXMuaXNPbGRJRSgpICYmIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHVybFV0aWxzID0gcmVxdWlyZSgnLi91cmxVdGlscycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBIdHRwUmVxdWVzdEVycm9yKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ0h0dHBSZXF1ZXN0IEVycm9yOiAnICsgKG1lc3NhZ2UgfHwgJycpO1xufVxuSHR0cFJlcXVlc3RFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcbkh0dHBSZXF1ZXN0RXJyb3IucHJvdG90eXBlLm5hbWUgPSBcIkh0dHBSZXF1ZXN0IEVycm9yXCI7XG5cbmZ1bmN0aW9uIEh0dHBSZXF1ZXN0KGNyZWF0ZVhocikge1xuICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNyZWF0ZVhocikpIHtcbiAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcignTWlzc2luZyBYTUxIdHRwUmVxdWVzdCBmYWN0b3J5IG1ldGhvZCcpO1xuICB9XG5cbiAgdGhpcy5jcmVhdGVYaHIgPSBjcmVhdGVYaHI7XG59XG5cbkh0dHBSZXF1ZXN0LnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIHNhbml0eUNoZWNrKHVybCwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICB2YXIgdGltZW91dCwgdGltZW91dElkO1xuICB2YXIgeGhyID0gdGhpcy5jcmVhdGVYaHIoKTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRpbWVvdXQgPSB1dGlsaXRpZXMuaXNOdW1iZXIob3B0aW9ucy50aW1lb3V0KSA/IG9wdGlvbnMudGltZW91dCA6IDA7XG5cbiAgeGhyLm9wZW4obWV0aG9kLCB1cmxVdGlscy51cmxQYXJ0cyh1cmwpLmhyZWYsIHRydWUpO1xuXG4gIGlmIChvcHRpb25zLmhlYWRlcnMpIHtcbiAgICBzZXRIZWFkZXJzKHhociwgb3B0aW9ucy5oZWFkZXJzKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xuICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICB9XG5cbiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdHVzVGV4dCwgcmVzcG9uc2UsIHN0YXR1cztcblxuICAgIC8qKlxuICAgICAqIFRoZSBvbmx5IHdheSB0byBkbyBhIHNlY3VyZSByZXF1ZXN0IG9uIElFOCBhbmQgSUU5IGlzIHdpdGggdGhlIFhEb21haW5SZXF1ZXN0IG9iamVjdC4gVW5mb3J0dW5hdGVseSwgbWljcm9zb2Z0IGlzXG4gICAgICogc28gbmljZSB0aGF0IGRlY2lkZWQgdGhhdCB0aGUgc3RhdHVzIHByb3BlcnR5IGFuZCB0aGUgJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgbWV0aG9kIHdoZXJlIG5vdCBuZWVkZWQgc28gd2UgaGF2ZSB0b1xuICAgICAqIGZha2UgdGhlbS4gSWYgdGhlIHJlcXVlc3QgZ2V0cyBkb25lIHdpdGggYW4gWERvbWFpblJlcXVlc3QgaW5zdGFuY2UsIHdlIHdpbGwgYXNzdW1lIHRoYXQgdGhlcmUgYXJlIG5vIGhlYWRlcnMgYW5kXG4gICAgICogdGhlIHN0YXR1cyB3aWxsIGFsd2F5cyBiZSAyMDAuIElmIHlvdSBkb24ndCBsaWtlIGl0LCBETyBOT1QgVVNFIEFOQ0lFTlQgQlJPV1NFUlMhISFcbiAgICAgKlxuICAgICAqIEZvciBtb3IgaW5mbyBnbyB0bzogaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9jYzI4ODA2MCh2PXZzLjg1KS5hc3B4XG4gICAgICovXG4gICAgaWYgKCF4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKSB7XG4gICAgICB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCF4aHIuc3RhdHVzKSB7XG4gICAgICB4aHIuc3RhdHVzID0gMjAwO1xuICAgIH1cblxuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKHRpbWVvdXRJZCkpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgdGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dCB8fCAnJztcblxuICAgIC8vIHJlc3BvbnNlVGV4dCBpcyB0aGUgb2xkLXNjaG9vbCB3YXkgb2YgcmV0cmlldmluZyByZXNwb25zZSAoc3VwcG9ydGVkIGJ5IElFOCAmIDkpXG4gICAgLy8gcmVzcG9uc2UvcmVzcG9uc2VUeXBlIHByb3BlcnRpZXMgd2VyZSBpbnRyb2R1Y2VkIGluIFhIUiBMZXZlbDIgc3BlYyAoc3VwcG9ydGVkIGJ5IElFMTApXG4gICAgcmVzcG9uc2UgPSAoJ3Jlc3BvbnNlJyBpbiB4aHIpID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dDtcblxuICAgIC8vIG5vcm1hbGl6ZSBJRTkgYnVnIChodHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xNDUwKVxuICAgIHN0YXR1cyA9IHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzO1xuXG4gICAgY2FsbGJhY2soXG4gICAgICBzdGF0dXMsXG4gICAgICByZXNwb25zZSxcbiAgICAgIHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSxcbiAgICAgIHN0YXR1c1RleHQpO1xuICB9O1xuXG4gIHhoci5vbmVycm9yID0gcmVxdWVzdEVycm9yO1xuICB4aHIub25hYm9ydCA9IHJlcXVlc3RFcnJvcjtcblxuICB4aHIuc2VuZCgpO1xuXG4gIGlmICh0aW1lb3V0ID4gMCkge1xuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgeGhyICYmIHhoci5hYm9ydCgpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2sodXJsLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKHVybCkgfHwgdXRpbGl0aWVzLmlzRW1wdHlTdHJpbmcodXJsKSkge1xuICAgICAgdGhyb3cgbmV3IEh0dHBSZXF1ZXN0RXJyb3IoXCJJbnZhbGlkIHVybCAnXCIgKyB1cmwgKyBcIidcIik7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgIHRocm93IG5ldyBIdHRwUmVxdWVzdEVycm9yKFwiSW52YWxpZCBoYW5kbGVyICdcIiArIGNhbGxiYWNrICsgXCInIGZvciB0aGUgaHR0cCByZXF1ZXN0XCIpO1xuICAgIH1cblxuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKG9wdGlvbnMpICYmICF1dGlsaXRpZXMuaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICAgIHRocm93IG5ldyBIdHRwUmVxdWVzdEVycm9yKFwiSW52YWxpZCBvcHRpb25zIG1hcCAnXCIgKyBvcHRpb25zICsgXCInXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEhlYWRlcnMoeGhyLCBoZWFkZXJzKSB7XG4gICAgdXRpbGl0aWVzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcXVlc3RFcnJvcigpIHtcbiAgICBjYWxsYmFjaygtMSwgbnVsbCwgbnVsbCwgJycpO1xuICB9XG59O1xuXG5IdHRwUmVxdWVzdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHVybCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgdGhpcy5ydW4oJ0dFVCcsIHVybCwgcHJvY2Vzc1Jlc3BvbnNlLCBvcHRpb25zKTtcblxuICBmdW5jdGlvbiBwcm9jZXNzUmVzcG9uc2Uoc3RhdHVzLCByZXNwb25zZSwgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCkge1xuICAgIGlmIChpc1N1Y2Nlc3Moc3RhdHVzKSkge1xuICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBIdHRwUmVxdWVzdEVycm9yKHN0YXR1c1RleHQpLCByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzU3RyaW5nLCBzdGF0dXNUZXh0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N1Y2Nlc3Moc3RhdHVzKSB7XG4gICAgcmV0dXJuIDIwMCA8PSBzdGF0dXMgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVYaHIoKSB7XG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgaWYgKCEoXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB4aHIpKSB7XG4gICAgLy8gWERvbWFpblJlcXVlc3QgZm9yIElFLlxuICAgIHhociA9IG5ldyBYRG9tYWluUmVxdWVzdCgpO1xuICB9XG4gIHJldHVybiB4aHI7XG59XG5cbnZhciBodHRwID0gbmV3IEh0dHBSZXF1ZXN0KGNyZWF0ZVhocik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBodHRwOiBodHRwLFxuICBIdHRwUmVxdWVzdDogSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXF1ZXN0RXJyb3I6IEh0dHBSZXF1ZXN0RXJyb3IsXG4gIGNyZWF0ZVhocjogY3JlYXRlWGhyXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaHRtbDU6IFtcbiAgICAndGV4dC9qYXZhc2NyaXB0JyxcbiAgICAndGV4dC9qYXZhc2NyaXB0MS4wJyxcbiAgICAndGV4dC9qYXZhc2NyaXB0MS4yJyxcbiAgICAndGV4dC9qYXZhc2NyaXB0MS40JyxcbiAgICAndGV4dC9qc2NyaXB0JyxcbiAgICAnYXBwbGljYXRpb24vamF2YXNjcmlwdCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtamF2YXNjcmlwdCcsXG4gICAgJ3RleHQvZWNtYXNjcmlwdCcsXG4gICAgJ3RleHQvZWNtYXNjcmlwdDEuMCcsXG4gICAgJ3RleHQvZWNtYXNjcmlwdDEuMicsXG4gICAgJ3RleHQvZWNtYXNjcmlwdDEuNCcsXG4gICAgJ3RleHQvbGl2ZXNjcmlwdCcsXG4gICAgJ2FwcGxpY2F0aW9uL2VjbWFzY3JpcHQnLFxuICAgICdhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHQnLFxuICBdLFxuXG4gIGZsYXNoOiBbXG4gICAgJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJ1xuICBdLFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRvbSA9IHJlcXVpcmUoJy4vZG9tJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciBwbGF5ZXJVdGlscyA9IHt9O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY2FwdHVyZXMgdGhlIHBvcnRpb25zIG9mIHBsYXllciBzdGF0ZSByZWxldmFudCB0b1xuICogdmlkZW8gcGxheWJhY2suIFRoZSByZXN1bHQgb2YgdGhpcyBmdW5jdGlvbiBjYW4gYmUgcGFzc2VkIHRvXG4gKiByZXN0b3JlUGxheWVyU25hcHNob3Qgd2l0aCBhIHBsYXllciB0byByZXR1cm4gdGhlIHBsYXllciB0byB0aGUgc3RhdGUgaXRcbiAqIHdhcyBpbiB3aGVuIHRoaXMgZnVuY3Rpb24gd2FzIGludm9rZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gcGxheWVyIFRoZSB2aWRlb2pzIHBsYXllciBvYmplY3RcbiAqL1xucGxheWVyVXRpbHMuZ2V0UGxheWVyU25hcHNob3QgPSBmdW5jdGlvbiBnZXRQbGF5ZXJTbmFwc2hvdChwbGF5ZXIpIHtcbiAgdmFyIHRlY2ggPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcblxuICB2YXIgc25hcHNob3QgPSB7XG4gICAgZW5kZWQ6IHBsYXllci5lbmRlZCgpLFxuICAgIHNyYzogcGxheWVyLmN1cnJlbnRTcmMoKSxcbiAgICBjdXJyZW50VGltZTogcGxheWVyLmN1cnJlbnRUaW1lKCksXG4gICAgdHlwZTogcGxheWVyLmN1cnJlbnRUeXBlKCksXG4gICAgcGxheWluZzogIXBsYXllci5wYXVzZWQoKSxcbiAgICBzdXBwcmVzc2VkVHJhY2tzOiBnZXRTdXBwcmVzc2VkVHJhY2tzKHBsYXllcilcbiAgfTtcblxuICBpZiAodGVjaCkge1xuICAgIHNuYXBzaG90Lm5hdGl2ZVBvc3RlciA9IHRlY2gucG9zdGVyO1xuICAgIHNuYXBzaG90LnN0eWxlID0gdGVjaC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gIH1cbiAgcmV0dXJuIHNuYXBzaG90O1xuXG4gIC8qKioqIExvY2FsIEZ1bmN0aW9ucyAqKioqL1xuICBmdW5jdGlvbiBnZXRTdXBwcmVzc2VkVHJhY2tzKHBsYXllcikge1xuICAgIHZhciB0cmFja3MgPSBwbGF5ZXIucmVtb3RlVGV4dFRyYWNrcyA/IHBsYXllci5yZW1vdGVUZXh0VHJhY2tzKCkgOiBbXTtcblxuICAgIGlmICh0cmFja3MgJiYgdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tzLnRyYWNrc18pKSB7XG4gICAgICB0cmFja3MgPSB0cmFja3MudHJhY2tzXztcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KHRyYWNrcykpIHtcbiAgICAgIHRyYWNrcyA9IFtdO1xuICAgIH1cblxuICAgIHZhciBzdXBwcmVzc2VkVHJhY2tzID0gW107XG4gICAgdHJhY2tzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNrKSB7XG4gICAgICBzdXBwcmVzc2VkVHJhY2tzLnB1c2goe1xuICAgICAgICB0cmFjazogdHJhY2ssXG4gICAgICAgIG1vZGU6IHRyYWNrLm1vZGVcbiAgICAgIH0pO1xuICAgICAgdHJhY2subW9kZSA9ICdkaXNhYmxlZCc7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwcHJlc3NlZFRyYWNrcztcbiAgfVxufTtcblxuLyoqXG4gKiBBdHRlbXB0cyB0byBtb2RpZnkgdGhlIHNwZWNpZmllZCBwbGF5ZXIgc28gdGhhdCBpdHMgc3RhdGUgaXMgZXF1aXZhbGVudCB0b1xuICogdGhlIHN0YXRlIG9mIHRoZSBzbmFwc2hvdC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBzbmFwc2hvdCAtIHRoZSBwbGF5ZXIgc3RhdGUgdG8gYXBwbHlcbiAqL1xucGxheWVyVXRpbHMucmVzdG9yZVBsYXllclNuYXBzaG90ID0gZnVuY3Rpb24gcmVzdG9yZVBsYXllclNuYXBzaG90KHBsYXllciwgc25hcHNob3QpIHtcbiAgdmFyIHRlY2ggPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcbiAgdmFyIGF0dGVtcHRzID0gMjA7IC8vIHRoZSBudW1iZXIgb2YgcmVtYWluaW5nIGF0dGVtcHRzIHRvIHJlc3RvcmUgdGhlIHNuYXBzaG90XG5cbiAgaWYgKHNuYXBzaG90Lm5hdGl2ZVBvc3Rlcikge1xuICAgIHRlY2gucG9zdGVyID0gc25hcHNob3QubmF0aXZlUG9zdGVyO1xuICB9XG5cbiAgaWYgKCdzdHlsZScgaW4gc25hcHNob3QpIHtcbiAgICAvLyBvdmVyd3JpdGUgYWxsIGNzcyBzdHlsZSBwcm9wZXJ0aWVzIHRvIHJlc3RvcmUgc3RhdGUgcHJlY2lzZWx5XG4gICAgdGVjaC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc25hcHNob3Quc3R5bGUgfHwgJycpO1xuICB9XG5cbiAgaWYgKGhhc1NyY0NoYW5nZWQocGxheWVyLCBzbmFwc2hvdCkpIHtcblxuICAgIC8vIG9uIGlvczcsIGZpZGRsaW5nIHdpdGggdGV4dFRyYWNrcyB0b28gZWFybHkgd2lsbCBjYXVzZSBzYWZhcmkgdG8gY3Jhc2hcbiAgICBwbGF5ZXIub25lKCdjb250ZW50bG9hZGVkbWV0YWRhdGEnLCByZXN0b3JlVHJhY2tzKTtcblxuICAgIHBsYXllci5vbmUoJ2NhbnBsYXknLCB0cnlUb1Jlc3VtZSk7XG4gICAgZW5zdXJlQ2FucGxheUV2dEdldHNGaXJlZCgpO1xuXG4gICAgLy8gaWYgdGhlIHNyYyBjaGFuZ2VkIGZvciBhZCBwbGF5YmFjaywgcmVzZXQgaXRcbiAgICBwbGF5ZXIuc3JjKHtzcmM6IHNuYXBzaG90LnNyYywgdHlwZTogc25hcHNob3QudHlwZX0pO1xuXG4gICAgLy8gc2FmYXJpIHJlcXVpcmVzIGEgY2FsbCB0byBgbG9hZGAgdG8gcGljayB1cCBhIGNoYW5nZWQgc291cmNlXG4gICAgcGxheWVyLmxvYWQoKTtcblxuICB9IGVsc2Uge1xuICAgIHJlc3RvcmVUcmFja3MoKTtcblxuICAgIGlmIChzbmFwc2hvdC5wbGF5aW5nKSB7XG4gICAgICBwbGF5ZXIucGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cblxuICAvKipcbiAgICogU29tZXRpbWVzIGZpcmVmb3ggZG9lcyBub3QgdHJpZ2dlciB0aGUgJ2NhbnBsYXknIGV2dC5cbiAgICogVGhpcyBjb2RlIGVuc3VyZSB0aGF0IGl0IGFsd2F5cyBnZXRzIHRyaWdnZXJlZCB0cmlnZ2VyZWQuXG4gICAqL1xuICBmdW5jdGlvbiBlbnN1cmVDYW5wbGF5RXZ0R2V0c0ZpcmVkKCkge1xuICAgIHZhciB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgcGxheWVyLnRyaWdnZXIoJ2NhbnBsYXknKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHBsYXllci5vbmUoJ2NhbnBsYXknLCBmdW5jdGlvbigpe1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHBsYXllciBuZWVkcyB0byBiZSByZXN0b3JlZCB0byBpdHMgc3RhdGVcbiAgICogYmVmb3JlIGFkIHBsYXliYWNrIGJlZ2FuLiBXaXRoIGEgY3VzdG9tIGFkIGRpc3BsYXkgb3IgYnVybmVkLWluXG4gICAqIGFkcywgdGhlIGNvbnRlbnQgcGxheWVyIHN0YXRlIGhhc24ndCBiZWVuIG1vZGlmaWVkIGFuZCBzbyBub1xuICAgKiByZXN0b3JhdGlvbiBpcyByZXF1aXJlZFxuICAgKi9cbiAgZnVuY3Rpb24gaGFzU3JjQ2hhbmdlZChwbGF5ZXIsIHNuYXBzaG90KSB7XG4gICAgaWYgKHBsYXllci5zcmMoKSkge1xuICAgICAgcmV0dXJuIHBsYXllci5zcmMoKSAhPT0gc25hcHNob3Quc3JjO1xuICAgIH1cbiAgICAvLyB0aGUgcGxheWVyIHdhcyBjb25maWd1cmVkIHRocm91Z2ggc291cmNlIGVsZW1lbnQgY2hpbGRyZW5cbiAgICByZXR1cm4gcGxheWVyLmN1cnJlbnRTcmMoKSAhPT0gc25hcHNob3Quc3JjO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdG9yZVRyYWNrcygpIHtcbiAgICB2YXIgc3VwcHJlc3NlZFRyYWNrcyA9IHNuYXBzaG90LnN1cHByZXNzZWRUcmFja3M7XG4gICAgc3VwcHJlc3NlZFRyYWNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFja1NuYXBzaG90KSB7XG4gICAgICB0cmFja1NuYXBzaG90LnRyYWNrLm1vZGUgPSB0cmFja1NuYXBzaG90Lm1vZGU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSB2aWRlbyBlbGVtZW50IGhhcyBsb2FkZWQgZW5vdWdoIG9mIHRoZSBzbmFwc2hvdCBzb3VyY2VcbiAgICogdG8gYmUgcmVhZHkgdG8gYXBwbHkgdGhlIHJlc3Qgb2YgdGhlIHN0YXRlXG4gICAqL1xuICBmdW5jdGlvbiB0cnlUb1Jlc3VtZSgpIHtcblxuICAgIC8vIGlmIHNvbWUgcGVyaW9kIG9mIHRoZSB2aWRlbyBpcyBzZWVrYWJsZSwgcmVzdW1lIHBsYXliYWNrXG4gICAgLy8gb3RoZXJ3aXNlIGRlbGF5IGEgYml0IGFuZCB0aGVuIGNoZWNrIGFnYWluIHVubGVzcyB3ZSdyZSBvdXQgb2YgYXR0ZW1wdHNcblxuICAgIGlmICghcGxheWVyVXRpbHMuaXNSZWFkeVRvUmVzdW1lKHBsYXllcikgJiYgYXR0ZW1wdHMtLSkge1xuICAgICAgc2V0VGltZW91dCh0cnlUb1Jlc3VtZSwgNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZihwbGF5ZXIuY3VycmVudFRpbWUoKSAhPT0gc25hcHNob3QuY3VycmVudFRpbWUpIHtcbiAgICAgICAgICBpZiAoc25hcHNob3QucGxheWluZykgeyAvLyBpZiBuZWVkZWQgcmVzdG9yZSBwbGF5aW5nIHN0YXR1cyBhZnRlciBzZWVrIGNvbXBsZXRlc1xuICAgICAgICAgICAgcGxheWVyLm9uZSgnc2Vla2VkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGxheWVyLmN1cnJlbnRUaW1lKHNuYXBzaG90LmN1cnJlbnRUaW1lKTtcblxuICAgICAgICB9IGVsc2UgaWYgKHNuYXBzaG90LnBsYXlpbmcpIHtcbiAgICAgICAgICAvLyBpZiBuZWVkZWQgYW5kIG5vIHNlZWsgaGFzIGJlZW4gcGVyZm9ybWVkLCByZXN0b3JlIHBsYXlpbmcgc3RhdHVzIGltbWVkaWF0ZWx5XG4gICAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgICAgfVxuXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHZpZGVvanMubG9nLndhcm4oJ0ZhaWxlZCB0byByZXN1bWUgdGhlIGNvbnRlbnQgYWZ0ZXIgYW4gYWR2ZXJ0aXNlbWVudCcsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxucGxheWVyVXRpbHMuaXNSZWFkeVRvUmVzdW1lID0gZnVuY3Rpb24gKHBsYXllcikge1xuXG4gIGlmIChwbGF5ZXIucmVhZHlTdGF0ZSgpID4gMSkge1xuICAgIC8vIHNvbWUgYnJvd3NlcnMgYW5kIG1lZGlhIGFyZW4ndCBcInNlZWthYmxlXCIuXG4gICAgLy8gcmVhZHlTdGF0ZSBncmVhdGVyIHRoYW4gMSBhbGxvd3MgZm9yIHNlZWtpbmcgd2l0aG91dCBleGNlcHRpb25zXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAocGxheWVyLnNlZWthYmxlKCkgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIGlmIHRoZSBwbGF5ZXIgZG9lc24ndCBleHBvc2UgdGhlIHNlZWthYmxlIHRpbWUgcmFuZ2VzLCB0cnkgdG9cbiAgICAvLyByZXN1bWUgcGxheWJhY2sgaW1tZWRpYXRlbHlcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChwbGF5ZXIuc2Vla2FibGUoKS5sZW5ndGggPiAwKSB7XG4gICAgLy8gaWYgc29tZSBwZXJpb2Qgb2YgdGhlIHZpZGVvIGlzIHNlZWthYmxlLCByZXN1bWUgcGxheWJhY2tcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBwcmVwYXJlcyB0aGUgcGxheWVyIHRvIGRpc3BsYXkgYWRzLlxuICogQWRkaW5nIGNvbnZlbmllbmNlIGV2ZW50cyBsaWtlIHRoZSAndmFzdC5maXJzUGxheScgdGhhdCBnZXRzIGZpcmVkIHdoZW4gdGhlIHZpZGVvIGlzIGZpcnN0IHBsYXllZFxuICogYW5kIGFkcyB0aGUgYmxhY2tQb3N0ZXIgdG8gdGhlIHBsYXllciB0byBwcmV2ZW50IGNvbnRlbnQgZnJvbSBiZWluZyBkaXNwbGF5ZWQgYmVmb3JlIHRoZSBwcmVyb2xsIGFkLlxuICpcbiAqIEBwYXJhbSBwbGF5ZXJcbiAqL1xucGxheWVyVXRpbHMucHJlcGFyZUZvckFkcyA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgdmFyIGJsYWNrUG9zdGVyID0gcGxheWVyLmFkZENoaWxkKCdibGFja1Bvc3RlcicpO1xuICB2YXIgX2ZpcnN0UGxheSA9IHRydWU7XG4gIHZhciB2b2x1bWVTbmFwc2hvdDtcblxuXG4gIG1vbmtleVBhdGNoUGxheWVyQXBpKCk7XG5cbiAgcGxheWVyLm9uKCdwbGF5JywgdHJ5VG9UcmlnZ2VyRmlyc3RQbGF5KTtcbiAgcGxheWVyLm9uKCd2YXN0LnJlc2V0JywgcmVzZXRGaXJzdFBsYXkpOy8vRXZlcnkgdGltZSB3ZSBjaGFuZ2UgdGhlIHNvdXJjZXMgd2UgcmVzZXQgdGhlIGZpcnN0IHBsYXkuXG4gIHBsYXllci5vbigndmFzdC5maXJzdFBsYXknLCByZXN0b3JlQ29udGVudFZvbHVtZSk7XG4gIHBsYXllci5vbignZXJyb3InLCBoaWRlQmxhY2tQb3N0ZXIpOy8vSWYgdGhlcmUgaXMgYW4gZXJyb3IgaW4gdGhlIHBsYXllciB3ZSByZW1vdmUgdGhlIGJsYWNrcG9zdGVyIHRvIHNob3cgdGhlIGVyciBtc2dcbiAgcGxheWVyLm9uKCd2YXN0LmFkU3RhcnQnLCBoaWRlQmxhY2tQb3N0ZXIpO1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRzQ2FuY2VsJywgaGlkZUJsYWNrUG9zdGVyKTtcbiAgcGxheWVyLm9uKCd2YXN0LmFkRXJyb3InLCBoaWRlQmxhY2tQb3N0ZXIpO1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRTdGFydCcsIGFkZFN0eWxlcyk7XG4gIHBsYXllci5vbigndmFzdC5hZEVuZCcsIHJlbW92ZVN0eWxlcyk7XG4gIHBsYXllci5vbigndmFzdC5hZHNDYW5jZWwnLCByZW1vdmVTdHlsZXMpO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cblxuICAvKipcbiAgIFdoYXQgdGhpcyBmdW5jdGlvbiBkb2VzIGlzIHVnbHkgYW5kIGhvcnJpYmxlIGFuZCBJIHNob3VsZCB0aGluayB0d2ljZSBiZWZvcmUgY2FsbGluZyBteXNlbGYgYSBnb29kIGRldmVsb3Blci4gV2l0aCB0aGF0IHNhaWQsXG4gICBpdCBpcyB0aGUgYmVzdCBzb2x1dGlvbiBJIGNvdWxkIGZpbmQgdG8gbXV0ZSB0aGUgdmlkZW8gdW50aWwgdGhlICdwbGF5JyBldmVudCBoYXBwZW5zIChvbiBtb2JpbGUgZGV2aWNlcykgYW5kIHRoZSBwbHVnaW4gY2FuIGRlY2lkZSB3aGV0aGVyXG4gICB0byBwbGF5IHRoZSBhZCBvciBub3QuXG5cbiAgIFdlIGFsc28gbmVlZCB0aGlzIG1vbmtleXBhdGNoIHRvIGJlIGFibGUgdG8gcGF1c2UgYW5kIHJlc3VtZSBhbiBhZCB1c2luZyB0aGUgcGxheWVyJ3MgQVBJXG5cbiAgIElmIHlvdSBoYXZlIGEgYmV0dGVyIHNvbHV0aW9uIHBsZWFzZSBkbyB0ZWxsIG1lLlxuICAgKi9cbiAgZnVuY3Rpb24gbW9ua2V5UGF0Y2hQbGF5ZXJBcGkoKSB7XG5cbiAgICAvKipcbiAgICAgKiBNb25rZXkgcGF0Y2ggbmVlZGVkIHRvIGhhbmRsZSBmaXJzdFBsYXkgYW5kIHJlc3VtZSBvZiBwbGF5aW5nIGFkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxPcmlnUGxheSBuZWNlc3NhcnkgZmxhZyB0byBwcmV2ZW50IGluZmluaXRlIGxvb3Agd2hlbiB5b3UgYXJlIHJlc3RvcmluZyBhIFZBU1QgYWQuXG4gICAgICogQHJldHVybnMge3BsYXllcn1cbiAgICAgKi9cbiAgICB2YXIgb3JpZ1BsYXkgPSBwbGF5ZXIucGxheTtcbiAgICBwbGF5ZXIucGxheSA9IGZ1bmN0aW9uIChjYWxsT3JpZ1BsYXkpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICAgaWYgKGlzRmlyc3RQbGF5KCkpIHtcbiAgICAgICAgZmlyc3RQbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bWUoY2FsbE9yaWdQbGF5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICAgIGZ1bmN0aW9uIGZpcnN0UGxheSgpIHtcbiAgICAgICAgaWYgKCF1dGlsaXRpZXMuaXNJUGhvbmUoKSkge1xuICAgICAgICAgIHZvbHVtZVNuYXBzaG90ID0gc2F2ZVZvbHVtZVNuYXBzaG90KCk7XG4gICAgICAgICAgcGxheWVyLm11dGVkKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3JpZ1BsYXkuYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVzdW1lKGNhbGxPcmlnUGxheSkge1xuICAgICAgICBpZiAoaXNBZFBsYXlpbmcoKSAmJiAhY2FsbE9yaWdQbGF5KSB7XG4gICAgICAgICAgcGxheWVyLnZhc3QuYWRVbml0LnJlc3VtZUFkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3JpZ1BsYXkuYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIE5lZWRlZCBtb25rZXkgcGF0Y2ggdG8gaGFuZGxlIHBhdXNlIG9mIHBsYXlpbmcgYWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbE9yaWdQbGF5IG5lY2Vzc2FyeSBmbGFnIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCB3aGVuIHlvdSBhcmUgcGF1c2luZyBhIFZBU1QgYWQuXG4gICAgICogQHJldHVybnMge3BsYXllcn1cbiAgICAgKi9cbiAgICB2YXIgb3JpZ1BhdXNlID0gcGxheWVyLnBhdXNlO1xuICAgIHBsYXllci5wYXVzZSA9IGZ1bmN0aW9uIChjYWxsT3JpZ1BhdXNlKSB7XG4gICAgICBpZiAoaXNBZFBsYXlpbmcoKSAmJiAhY2FsbE9yaWdQYXVzZSkge1xuICAgICAgICBwbGF5ZXIudmFzdC5hZFVuaXQucGF1c2VBZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3JpZ1BhdXNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBOZWVkZWQgbW9ua2V5IHBhdGNoIHRvIGhhbmRsZSBwYXVzZWQgc3RhdGUgb2YgdGhlIHBsYXllciB3aGVuIGFkcyBhcmUgcGxheWluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsT3JpZ1BsYXkgbmVjZXNzYXJ5IGZsYWcgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wIHdoZW4geW91IGFyZSBwYXVzaW5nIGEgVkFTVCBhZC5cbiAgICAgKiBAcmV0dXJucyB7cGxheWVyfVxuICAgICAqL1xuICAgIHZhciBvcmlnUGF1c2VkID0gcGxheWVyLnBhdXNlZDtcbiAgICBwbGF5ZXIucGF1c2VkID0gZnVuY3Rpb24gKGNhbGxPcmlnUGF1c2VkKSB7XG4gICAgICBpZiAoaXNBZFBsYXlpbmcoKSAmJiAhY2FsbE9yaWdQYXVzZWQpIHtcbiAgICAgICAgcmV0dXJuIHBsYXllci52YXN0LmFkVW5pdC5pc1BhdXNlZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9yaWdQYXVzZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNBZFBsYXlpbmcoKSB7XG4gICAgcmV0dXJuIHBsYXllci52YXN0ICYmIHBsYXllci52YXN0LmFkVW5pdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeVRvVHJpZ2dlckZpcnN0UGxheSgpIHtcbiAgICBpZiAoaXNGaXJzdFBsYXkoKSkge1xuICAgICAgX2ZpcnN0UGxheSA9IGZhbHNlO1xuICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuZmlyc3RQbGF5Jyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRGaXJzdFBsYXkoKSB7XG4gICAgX2ZpcnN0UGxheSA9IHRydWU7XG4gICAgYmxhY2tQb3N0ZXIuc2hvdygpO1xuICAgIHJlc3RvcmVDb250ZW50Vm9sdW1lKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0ZpcnN0UGxheSgpIHtcbiAgICByZXR1cm4gX2ZpcnN0UGxheTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhdmVWb2x1bWVTbmFwc2hvdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbXV0ZWQ6IHBsYXllci5tdXRlZCgpLFxuICAgICAgdm9sdW1lOiBwbGF5ZXIudm9sdW1lKClcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdG9yZUNvbnRlbnRWb2x1bWUoKSB7XG4gICAgaWYgKHZvbHVtZVNuYXBzaG90KSB7XG4gICAgICBwbGF5ZXIuY3VycmVudFRpbWUoMCk7XG4gICAgICByZXN0b3JlVm9sdW1lU25hcHNob3Qodm9sdW1lU25hcHNob3QpO1xuICAgICAgdm9sdW1lU25hcHNob3QgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3RvcmVWb2x1bWVTbmFwc2hvdChzbmFwc2hvdCkge1xuICAgIGlmICh1dGlsaXRpZXMuaXNPYmplY3Qoc25hcHNob3QpKSB7XG4gICAgICBwbGF5ZXIudm9sdW1lKHNuYXBzaG90LnZvbHVtZSk7XG4gICAgICBwbGF5ZXIubXV0ZWQoc25hcHNob3QubXV0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVCbGFja1Bvc3RlcigpIHtcbiAgICBpZiAoIWRvbS5oYXNDbGFzcyhibGFja1Bvc3Rlci5lbCgpLCAndmpzLWhpZGRlbicpKSB7XG4gICAgICBibGFja1Bvc3Rlci5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3R5bGVzKCkge1xuICAgIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy1hZC1wbGF5aW5nJyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVTdHlsZXMoKSB7XG4gICAgZG9tLnJlbW92ZUNsYXNzKHBsYXllci5lbCgpLCAndmpzLWFkLXBsYXlpbmcnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIHBvc3RlciBhdHRyaWJ1dGUgZnJvbSB0aGUgdmlkZW8gZWxlbWVudCB0ZWNoLCBpZiBwcmVzZW50LiBXaGVuXG4gKiByZXVzaW5nIGEgdmlkZW8gZWxlbWVudCBmb3IgbXVsdGlwbGUgdmlkZW9zLCB0aGUgcG9zdGVyIGltYWdlIHdpbGwgYnJpZWZseVxuICogcmVhcHBlYXIgd2hpbGUgdGhlIG5ldyBzb3VyY2UgbG9hZHMuIFJlbW92aW5nIHRoZSBhdHRyaWJ1dGUgYWhlYWQgb2YgdGltZVxuICogcHJldmVudHMgdGhlIHBvc3RlciBmcm9tIHNob3dpbmcgdXAgYmV0d2VlbiB2aWRlb3MuXG4gKiBAcGFyYW0ge29iamVjdH0gcGxheWVyIFRoZSB2aWRlb2pzIHBsYXllciBvYmplY3RcbiAqL1xucGxheWVyVXRpbHMucmVtb3ZlTmF0aXZlUG9zdGVyID0gZnVuY3Rpb24gKHBsYXllcikge1xuICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuICBpZiAodGVjaCkge1xuICAgIHRlY2gucmVtb3ZlQXR0cmlidXRlKCdwb3N0ZXInKTtcbiAgfVxufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gbGlzdGVuIHRvIG1hbnkgZXZlbnRzIHVudGlsIG9uZSBvZiB0aGVtIGdldHMgZmlyZWQsIHRoZW4gd2VcbiAqIGV4ZWN1dGUgdGhlIGhhbmRsZXIgYW5kIHVuc3Vic2NyaWJlIGFsbCB0aGUgZXZlbnQgbGlzdGVuZXJzO1xuICpcbiAqIEBwYXJhbSBwbGF5ZXIgc3BlY2lmaWMgcGxheWVyIGZyb20gd2hlcmUgdG8gbGlzdGVuIGZvciB0aGUgZXZlbnRzXG4gKiBAcGFyYW0gZXZlbnRzIGFycmF5IG9mIGV2ZW50c1xuICogQHBhcmFtIGhhbmRsZXIgZnVuY3Rpb24gdG8gZXhlY3V0ZSBvbmNlIG9uZSBvZiB0aGUgZXZlbnRzIGZpcmVzXG4gKi9cbnBsYXllclV0aWxzLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHBsYXllciwgZXZlbnRzLCBoYW5kbGVyKSB7XG4gIGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgIGhhbmRsZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcblxuICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcGxheWVyLm9mZihldmVudCwgbGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcGxheWVyLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllclV0aWxzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG4vKipcbiAqXG4gKiBJTVBPUlRBTlQgTk9URTogVGhpcyBmdW5jdGlvbiBjb21lcyBmcm9tIGFuZ3VsYXJKcyBhbmQgd2FzIG9yaWdpbmFsbHkgY2FsbGVkIHVybFJlc29sdmVcbiAqICAgICAgICAgICAgICAgICB5b3UgY2FuIHRha2UgYSBsb29rIGF0IHRoZSBvcmlnaW5hbCBjb2RlIGhlcmUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iL21hc3Rlci9zcmMvbmcvdXJsVXRpbHMuanNcbiAqXG4gKiBJbXBsZW1lbnRhdGlvbiBOb3RlcyBmb3Igbm9uLUlFIGJyb3dzZXJzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBc3NpZ25pbmcgYSBVUkwgdG8gdGhlIGhyZWYgcHJvcGVydHkgb2YgYW4gYW5jaG9yIERPTSBub2RlLCBldmVuIG9uZSBhdHRhY2hlZCB0byB0aGUgRE9NLFxuICogcmVzdWx0cyBib3RoIGluIHRoZSBub3JtYWxpemluZyBhbmQgcGFyc2luZyBvZiB0aGUgVVJMLiAgTm9ybWFsaXppbmcgbWVhbnMgdGhhdCBhIHJlbGF0aXZlXG4gKiBVUkwgd2lsbCBiZSByZXNvbHZlZCBpbnRvIGFuIGFic29sdXRlIFVSTCBpbiB0aGUgY29udGV4dCBvZiB0aGUgYXBwbGljYXRpb24gZG9jdW1lbnQuXG4gKiBQYXJzaW5nIG1lYW5zIHRoYXQgdGhlIGFuY2hvciBub2RlJ3MgaG9zdCwgaG9zdG5hbWUsIHByb3RvY29sLCBwb3J0LCBwYXRobmFtZSBhbmQgcmVsYXRlZFxuICogcHJvcGVydGllcyBhcmUgYWxsIHBvcHVsYXRlZCB0byByZWZsZWN0IHRoZSBub3JtYWxpemVkIFVSTC4gIFRoaXMgYXBwcm9hY2ggaGFzIHdpZGVcbiAqIGNvbXBhdGliaWxpdHkgLSBTYWZhcmkgMSssIE1vemlsbGEgMSssIE9wZXJhIDcrLGUgZXRjLiAgU2VlXG4gKiBodHRwOi8vd3d3LmFwdGFuYS5jb20vcmVmZXJlbmNlL2h0bWwvYXBpL0hUTUxBbmNob3JFbGVtZW50Lmh0bWxcbiAqXG4gKiBJbXBsZW1lbnRhdGlvbiBOb3RlcyBmb3IgSUVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogSUUgPj0gOCBhbmQgPD0gMTAgbm9ybWFsaXplcyB0aGUgVVJMIHdoZW4gYXNzaWduZWQgdG8gdGhlIGFuY2hvciBub2RlIHNpbWlsYXIgdG8gdGhlIG90aGVyXG4gKiBicm93c2Vycy4gIEhvd2V2ZXIsIHRoZSBwYXJzZWQgY29tcG9uZW50cyB3aWxsIG5vdCBiZSBzZXQgaWYgdGhlIFVSTCBhc3NpZ25lZCBkaWQgbm90IHNwZWNpZnlcbiAqIHRoZW0uICAoZS5nLiBpZiB5b3UgYXNzaWduIGEuaHJlZiA9IFwiZm9vXCIsIHRoZW4gYS5wcm90b2NvbCwgYS5ob3N0LCBldGMuIHdpbGwgYmUgZW1wdHkuKSAgV2VcbiAqIHdvcmsgYXJvdW5kIHRoYXQgYnkgcGVyZm9ybWluZyB0aGUgcGFyc2luZyBpbiBhIDJuZCBzdGVwIGJ5IHRha2luZyBhIHByZXZpb3VzbHkgbm9ybWFsaXplZFxuICogVVJMIChlLmcuIGJ5IGFzc2lnbmluZyB0byBhLmhyZWYpIGFuZCBhc3NpZ25pbmcgaXQgYS5ocmVmIGFnYWluLiAgVGhpcyBjb3JyZWN0bHkgcG9wdWxhdGVzIHRoZVxuICogcHJvcGVydGllcyBzdWNoIGFzIHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCwgZXRjLlxuICpcbiAqIElFNyBkb2VzIG5vdCBub3JtYWxpemUgdGhlIFVSTCB3aGVuIGFzc2lnbmVkIHRvIGFuIGFuY2hvciBub2RlLiAgKEFwcGFyZW50bHksIGl0IGRvZXMsIGlmIG9uZVxuICogdXNlcyB0aGUgaW5uZXIgSFRNTCBhcHByb2FjaCB0byBhc3NpZ24gdGhlIFVSTCBhcyBwYXJ0IG9mIGFuIEhUTUwgc25pcHBldCAtXG4gKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NzI3MjkpICBIb3dldmVyLCBzZXR0aW5nIGltZ1tzcmNdIGRvZXMgbm9ybWFsaXplIHRoZSBVUkwuXG4gKiBVbmZvcnR1bmF0ZWx5LCBzZXR0aW5nIGltZ1tzcmNdIHRvIHNvbWV0aGluZyBsaWtlIFwiamF2YXNjcmlwdDpmb29cIiBvbiBJRSB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuICogU2luY2UgdGhlIHByaW1hcnkgdXNhZ2UgZm9yIG5vcm1hbGl6aW5nIFVSTHMgaXMgdG8gc2FuaXRpemUgc3VjaCBVUkxzLCB3ZSBjYW4ndCB1c2UgdGhhdFxuICogbWV0aG9kIGFuZCBJRSA8IDggaXMgdW5zdXBwb3J0ZWQuXG4gKlxuICogUmVmZXJlbmNlczpcbiAqICAgaHR0cDovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEFuY2hvckVsZW1lbnRcbiAqICAgaHR0cDovL3d3dy5hcHRhbmEuY29tL3JlZmVyZW5jZS9odG1sL2FwaS9IVE1MQW5jaG9yRWxlbWVudC5odG1sXG4gKiAgIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICogICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL3B1bGwvMjkwMlxuICogICBodHRwOi8vamFtZXMucGFkb2xzZXkuY29tL2phdmFzY3JpcHQvcGFyc2luZy11cmxzLXdpdGgtdGhlLWRvbS9cbiAqXG4gKiBAa2luZCBmdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZC5cbiAqIEBkZXNjcmlwdGlvbiBOb3JtYWxpemVzIGFuZCBwYXJzZXMgYSBVUkwuXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBSZXR1cm5zIHRoZSBub3JtYWxpemVkIFVSTCBhcyBhIGRpY3Rpb25hcnkuXG4gKlxuICogICB8IG1lbWJlciBuYW1lICAgfCBEZXNjcmlwdGlvbiAgICB8XG4gKiAgIHwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLXxcbiAqICAgfCBocmVmICAgICAgICAgIHwgQSBub3JtYWxpemVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIFVSTCBpZiBpdCB3YXMgbm90IGFuIGFic29sdXRlIFVSTCB8XG4gKiAgIHwgcHJvdG9jb2wgICAgICB8IFRoZSBwcm90b2NvbCBpbmNsdWRpbmcgdGhlIHRyYWlsaW5nIGNvbG9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogICB8IGhvc3QgICAgICAgICAgfCBUaGUgaG9zdCBhbmQgcG9ydCAoaWYgdGhlIHBvcnQgaXMgbm9uLWRlZmF1bHQpIG9mIHRoZSBub3JtYWxpemVkVXJsICAgIHxcbiAqICAgfCBzZWFyY2ggICAgICAgIHwgVGhlIHNlYXJjaCBwYXJhbXMsIG1pbnVzIHRoZSBxdWVzdGlvbiBtYXJrICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgIHwgaGFzaCAgICAgICAgICB8IFRoZSBoYXNoIHN0cmluZywgbWludXMgdGhlIGhhc2ggc3ltYm9sXG4gKiAgIHwgaG9zdG5hbWUgICAgICB8IFRoZSBob3N0bmFtZVxuICogICB8IHBvcnQgICAgICAgICAgfCBUaGUgcG9ydCwgd2l0aG91dCBcIjpcIlxuICogICB8IHBhdGhuYW1lICAgICAgfCBUaGUgcGF0aG5hbWUsIGJlZ2lubmluZyB3aXRoIFwiL1wiXG4gKlxuICovXG5cbnZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuLyoqXG4gKiBkb2N1bWVudE1vZGUgaXMgYW4gSUUtb25seSBwcm9wZXJ0eVxuICogaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2NjMTk2OTg4KHY9dnMuODUpLmFzcHhcbiAqL1xudmFyIG1zaWUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XG5cbmZ1bmN0aW9uIHVybFBhcnRzKHVybCkge1xuICB2YXIgaHJlZiA9IHVybDtcblxuICBpZiAobXNpZSkge1xuICAgIC8vIE5vcm1hbGl6ZSBiZWZvcmUgcGFyc2UuICBSZWZlciBJbXBsZW1lbnRhdGlvbiBOb3RlcyBvbiB3aHkgdGhpcyBpc1xuICAgIC8vIGRvbmUgaW4gdHdvIHN0ZXBzIG9uIElFLlxuICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XG4gICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gIH1cblxuICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gIHJldHVybiB7XG4gICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgIHBvcnQ6IHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHVybFBhcnNpbmdOb2RlLnBvcnQpPyB1cmxQYXJzaW5nTm9kZS5wb3J0OiA4MCxcbiAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKVxuICAgICAgPyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgOiAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICB9O1xufVxuXG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGEgcXVlcnkgc3RyaW5nIChzZWFyY2ggcGFydCBvZiBhIHVybCkgYW5kIHJldHVybnMgYSBkaWN0aW9uYXJ5IHdpdGhcbiAqIHRoZSBkaWZmZXJlbnQga2V5IHZhbHVlIHBhaXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gcXMgcXVlcnlTdHJpbmdcbiAqL1xuZnVuY3Rpb24gcXVlcnlTdHJpbmdUb09iaihxcywgY29uZCkge1xuICB2YXIgcGFpcnMsIHFzT2JqO1xuXG4gIGNvbmQgPSB1dGlsaXRpZXMuaXNGdW5jdGlvbihjb25kKT8gY29uZCA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHFzID0gcXMudHJpbSgpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG4gIHBhaXJzID0gcXMuc3BsaXQoJyYnKTtcbiAgcXNPYmogPSB7fTtcblxuICB1dGlsaXRpZXMuZm9yRWFjaChwYWlycywgZnVuY3Rpb24gKHBhaXIpIHtcbiAgICB2YXIga2V5VmFsdWUsIGtleSwgdmFsdWU7XG4gICAgaWYgKHBhaXIgIT09ICcnKSB7XG4gICAgICBrZXlWYWx1ZSA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICAgIGtleSA9IGtleVZhbHVlWzBdO1xuICAgICAgdmFsdWUgPSBrZXlWYWx1ZVsxXTtcbiAgICAgIGlmKGNvbmQoa2V5LCB2YWx1ZSkpe1xuICAgICAgICBxc09ialtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcXNPYmo7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuIG9iamVjdCBhbmQgc2VyaWFsaXplcyBpdCBpbnRvIGEgcXVlcnkgc3RyaW5nIHdpdGhvdXQgdGhlIGxlYWRpbmcgJz8nXG4gKiBAcGFyYW0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBvYmpUb1F1ZXJ5U3RyaW5nKG9iaikge1xuICB2YXIgcGFpcnMgPSBbXTtcbiAgdXRpbGl0aWVzLmZvckVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIHBhaXJzLnB1c2goa2V5ICsgJz0nICsgdmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHVybFBhcnRzOiB1cmxQYXJ0cyxcbiAgcXVlcnlTdHJpbmdUb09iajogcXVlcnlTdHJpbmdUb09iaixcbiAgb2JqVG9RdWVyeVN0cmluZzogb2JqVG9RdWVyeVN0cmluZ1xufTtcbiIsIi8qanNoaW50IHVudXNlZDpmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBOT0RFX1RZUEVfRUxFTUVOVCA9IDE7XG52YXIgU05BS0VfQ0FTRV9SRUdFWFAgPSAvW0EtWl0vZztcbnZhciBFTUFJTF9SRUdFWFAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKyQvaTtcbi8qanNsaW50IG1heGxlbjogNTAwICovXG52YXIgSVNPODA4Nl9SRUdFWFAgPSAvXihbXFwrLV0/XFxkezR9KD8hXFxkezJ9XFxiKSkoKC0/KSgoMFsxLTldfDFbMC0yXSkoXFwzKFsxMl1cXGR8MFsxLTldfDNbMDFdKSk/fFcoWzAtNF1cXGR8NVswLTJdKSgtP1sxLTddKT98KDAwWzEtOV18MFsxLTldXFxkfFsxMl1cXGR7Mn18MyhbMC01XVxcZHw2WzEtNl0pKSkoW1RcXHNdKCgoWzAxXVxcZHwyWzAtM10pKCg6PylbMC01XVxcZCk/fDI0XFw6PzAwKShbXFwuLF1cXGQrKD8hOikpPyk/KFxcMTdbMC01XVxcZChbXFwuLF1cXGQrKT8pPyhbelpdfChbXFwrLV0pKFswMV1cXGR8MlswLTNdKTo/KFswLTVdXFxkKT8pPyk/KT8kLztcblxuXG5mdW5jdGlvbiBub29wKCl7IH1cblxuZnVuY3Rpb24gaXNOdWxsKG8pIHtcbiAgcmV0dXJuIG8gPT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZChvKXtcbiAgcmV0dXJuIG8gIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQobyl7XG4gIHJldHVybiBvID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKG51bSl7XG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gIHJldHVybiB1dGlsaXRpZXMuaXNPYmplY3Qob2JqKSAmJiBvYmoud2luZG93ID09PSBvYmo7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkoYXJyYXkpe1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCBhcnJheSApID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5TGlrZShvYmopIHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB1dGlsaXRpZXMuaXNXaW5kb3cob2JqKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihvYmopIHx8IHV0aWxpdGllcy5pc1VuZGVmaW5lZChvYmopKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGxlbmd0aCA9IG9iai5sZW5ndGg7XG5cbiAgaWYgKG9iai5ub2RlVHlwZSA9PT0gTk9ERV9UWVBFX0VMRU1FTlQgJiYgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gdXRpbGl0aWVzLmlzU3RyaW5nKG9iaikgfHwgdXRpbGl0aWVzLmlzQXJyYXkob2JqKSB8fCBsZW5ndGggPT09IDAgfHxcbiAgICB0eXBlb2YgbGVuZ3RoID09PSAnbnVtYmVyJyAmJiBsZW5ndGggPiAwICYmIChsZW5ndGggLSAxKSBpbiBvYmo7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlTdHJpbmcoc3RyKSB7XG4gIHJldHVybiB1dGlsaXRpZXMuaXNTdHJpbmcoc3RyKSAmJiBzdHIubGVuZ3RoID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc05vdEVtcHR5U3RyaW5nKHN0cikge1xuICByZXR1cm4gdXRpbGl0aWVzLmlzU3RyaW5nKHN0cikgJiYgc3RyLmxlbmd0aCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gYXJyYXlMaWtlT2JqVG9BcnJheShhcmdzKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGl0ZXJhdG9yLCBjb250ZXh0KSB7XG4gIHZhciBrZXksIGxlbmd0aDtcbiAgaWYgKG9iaikge1xuICAgIGlmIChpc0Z1bmN0aW9uKG9iaikpIHtcbiAgICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgICAvLyBOZWVkIHRvIGNoZWNrIGlmIGhhc093blByb3BlcnR5IGV4aXN0cyxcbiAgICAgICAgLy8gYXMgb24gSUU4IHRoZSByZXN1bHQgb2YgcXVlcnlTZWxlY3RvckFsbCBpcyBhbiBvYmplY3Qgd2l0aG91dCBhIGhhc093blByb3BlcnR5IGZ1bmN0aW9uXG4gICAgICAgIGlmIChrZXkgIT09ICdwcm90b3R5cGUnICYmIGtleSAhPT0gJ2xlbmd0aCcgJiYga2V5ICE9PSAnbmFtZScgJiYgKCFvYmouaGFzT3duUHJvcGVydHkgfHwgb2JqLmhhc093blByb3BlcnR5KGtleSkpKSB7XG4gICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgIHZhciBpc1ByaW1pdGl2ZSA9IHR5cGVvZiBvYmogIT09ICdvYmplY3QnO1xuICAgICAgZm9yIChrZXkgPSAwLCBsZW5ndGggPSBvYmoubGVuZ3RoOyBrZXkgPCBsZW5ndGg7IGtleSsrKSB7XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSB8fCBrZXkgaW4gb2JqKSB7XG4gICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvYmouZm9yRWFjaCAmJiBvYmouZm9yRWFjaCAhPT0gZm9yRWFjaCkge1xuICAgICAgb2JqLmZvckVhY2goaXRlcmF0b3IsIGNvbnRleHQsIG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gc25ha2VfY2FzZShuYW1lLCBzZXBhcmF0b3IpIHtcbiAgc2VwYXJhdG9yID0gc2VwYXJhdG9yIHx8ICdfJztcbiAgcmV0dXJuIG5hbWUucmVwbGFjZShTTkFLRV9DQVNFX1JFR0VYUCwgZnVuY3Rpb24obGV0dGVyLCBwb3MpIHtcbiAgICByZXR1cm4gKHBvcyA/IHNlcGFyYXRvciA6ICcnKSArIGxldHRlci50b0xvd2VyQ2FzZSgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVtYWlsKGVtYWlsKXtcbiAgaWYoIXV0aWxpdGllcy5pc1N0cmluZyhlbWFpbCkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBFTUFJTF9SRUdFWFAudGVzdChlbWFpbC50cmltKCkpO1xufVxuXG5mdW5jdGlvbiBleHRlbmQgKG9iaikge1xuICB2YXIgYXJnLCBpLCBrO1xuICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgYXJnID0gYXJndW1lbnRzW2ldO1xuICAgIGZvciAoayBpbiBhcmcpIHtcbiAgICAgIGlmIChhcmcuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgaWYoaXNPYmplY3Qob2JqW2tdKSAmJiAhaXNOdWxsKG9ialtrXSkgJiYgaXNPYmplY3QoYXJnW2tdKSl7XG4gICAgICAgICAgb2JqW2tdID0gZXh0ZW5kKHt9LCBvYmpba10sIGFyZ1trXSk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICBvYmpba10gPSBhcmdba107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZShzKXtcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiBkZWNhcGl0YWxpemUocykge1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2Qgd29ya3MgdGhlIHNhbWUgd2F5IGFycmF5LnByb3RvdHlwZS5tYXAgd29ya3MgYnV0IGlmIHRoZSB0cmFuc2Zvcm1lciByZXR1cm5zIHVuZGVmaW5lLCB0aGVuXG4gKiBpdCB3b24ndCBiZSBhZGRlZCB0byB0aGUgdHJhbnNmb3JtZWQgQXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHRyYW5zZm9ybUFycmF5KGFycmF5LCB0cmFuc2Zvcm1lcikge1xuICB2YXIgdHJhbnNmb3JtZWRBcnJheSA9IFtdO1xuXG4gIGFycmF5LmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaW5kZXgpe1xuICAgIHZhciB0cmFuc2Zvcm1lZEl0ZW0gPSB0cmFuc2Zvcm1lcihpdGVtLCBpbmRleCk7XG4gICAgaWYodXRpbGl0aWVzLmlzRGVmaW5lZCh0cmFuc2Zvcm1lZEl0ZW0pKSB7XG4gICAgICB0cmFuc2Zvcm1lZEFycmF5LnB1c2godHJhbnNmb3JtZWRJdGVtKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0cmFuc2Zvcm1lZEFycmF5O1xufVxuXG5mdW5jdGlvbiB0b0ZpeGVkRGlnaXRzKG51bSwgZGlnaXRzKSB7XG4gIHZhciBmb3JtYXR0ZWROdW0gPSBudW0gKyAnJztcbiAgZGlnaXRzID0gdXRpbGl0aWVzLmlzTnVtYmVyKGRpZ2l0cykgPyBkaWdpdHMgOiAwO1xuICBudW0gPSB1dGlsaXRpZXMuaXNOdW1iZXIobnVtKSA/IG51bSA6IHBhcnNlSW50KG51bSwgMTApO1xuICBpZih1dGlsaXRpZXMuaXNOdW1iZXIobnVtKSAmJiAhaXNOYU4obnVtKSl7XG4gICAgZm9ybWF0dGVkTnVtID0gbnVtICsgJyc7XG4gICAgd2hpbGUoZm9ybWF0dGVkTnVtLmxlbmd0aCA8IGRpZ2l0cykge1xuICAgICAgZm9ybWF0dGVkTnVtID0gJzAnICsgZm9ybWF0dGVkTnVtO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGVkTnVtO1xuICB9XG4gIHJldHVybiBOYU4gKyAnJztcbn1cblxuZnVuY3Rpb24gdGhyb3R0bGUoY2FsbGJhY2ssIGRlbGF5KSB7XG4gIHZhciBwcmV2aW91c0NhbGwgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIChkZWxheSArIDEpO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBpZiAoKHRpbWUgLSBwcmV2aW91c0NhbGwpID49IGRlbGF5KSB7XG4gICAgICBwcmV2aW91c0NhbGwgPSB0aW1lO1xuICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlYm91bmNlIChjYWxsYmFjaywgd2FpdCkge1xuICB2YXIgdGltZW91dElkO1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKXtcbiAgICBpZih0aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIH1cbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgdGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgIH0sIHdhaXQpO1xuICB9O1xufVxuXG4vLyBhIGZ1bmN0aW9uIGRlc2lnbmVkIHRvIGJsb3cgdXAgdGhlIHN0YWNrIGluIGEgbmFpdmUgd2F5XG4vLyBidXQgaXQgaXMgb2sgZm9yIHZpZGVvSnMgY2hpbGRyZW4gY29tcG9uZW50c1xuZnVuY3Rpb24gdHJlZVNlYXJjaChyb290LCBnZXRDaGlsZHJlbiwgZm91bmQpe1xuICB2YXIgY2hpbGRyZW4gPSBnZXRDaGlsZHJlbihyb290KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgaWYgKGZvdW5kKGNoaWxkcmVuW2ldKSkge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuW2ldO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciBlbCA9IHRyZWVTZWFyY2goY2hpbGRyZW5baV0sIGdldENoaWxkcmVuLCBmb3VuZCk7XG4gICAgICBpZiAoZWwpe1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGVjaG9Gbih2YWwpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9O1xufVxuXG4vL05vdGU6IFN1cHBvcnRlZCBmb3JtYXRzIGNvbWUgZnJvbSBodHRwOi8vd3d3LnczLm9yZy9UUi9OT1RFLWRhdGV0aW1lXG4vLyBhbmQgdGhlIGlzbzg2MDEgcmVnZXggY29tZXMgZnJvbSBodHRwOi8vd3d3LnBlbGFnb2Rlc2lnbi5jb20vYmxvZy8yMDA5LzA1LzIwL2lzby04NjAxLWRhdGUtdmFsaWRhdGlvbi10aGF0LWRvZXNudC1zdWNrL1xuZnVuY3Rpb24gaXNJU084NjAxKHZhbHVlKSB7XG4gIGlmKHV0aWxpdGllcy5pc051bWJlcih2YWx1ZSkpe1xuICAgIHZhbHVlID0gdmFsdWUgKyAnJzsgIC8vd2UgbWFrZSBzdXJlIHRoYXQgd2UgYXJlIHdvcmtpbmcgd2l0aCBzdHJpbmdzXG4gIH1cblxuICBpZighdXRpbGl0aWVzLmlzU3RyaW5nKHZhbHVlKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIElTTzgwODZfUkVHRVhQLnRlc3QodmFsdWUudHJpbSgpKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIEJyb3dzZXIgaXMgSUU5IGFuZCBiZWxvd1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciB2ZXJzaW9uID0gdXRpbGl0aWVzLmdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uKG5hdmlnYXRvcik7XG4gIGlmICh2ZXJzaW9uID09PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB2ZXJzaW9uIDwgMTA7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgdmVyc2lvbiBvZiBJbnRlcm5ldCBFeHBsb3JlciBvciBhIC0xIChpbmRpY2F0aW5nIHRoZSB1c2Ugb2YgYW5vdGhlciBicm93c2VyKS5cbiAqIFNvdXJjZTogaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNzUwOSh2PXZzLjg1KS5hc3B4XG4gKiBAcmV0dXJucyB7bnVtYmVyfSB0aGUgdmVyc2lvbiBvZiBJbnRlcm5ldCBFeHBsb3JlciBvciBhIC0xIChpbmRpY2F0aW5nIHRoZSB1c2Ugb2YgYW5vdGhlciBicm93c2VyKS5cbiAqL1xuZnVuY3Rpb24gZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24obmF2aWdhdG9yKSB7XG4gIHZhciBydiA9IC0xO1xuXG4gIGlmIChuYXZpZ2F0b3IuYXBwTmFtZSA9PSAnTWljcm9zb2Z0IEludGVybmV0IEV4cGxvcmVyJykge1xuICAgIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gICAgdmFyIHJlID0gbmV3IFJlZ0V4cChcIk1TSUUgKFswLTldezEsfVtcXC4wLTldezAsfSlcIik7XG4gICAgdmFyIHJlcyA9IHJlLmV4ZWModWEpO1xuICAgIGlmIChyZXMgIT09IG51bGwpIHtcbiAgICAgIHJ2ID0gcGFyc2VGbG9hdChyZXNbMV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBydjtcbn1cblxuLyoqKiBNb2JpbGUgVXRpbGl0eSBmdW5jdGlvbnMgKioqL1xuZnVuY3Rpb24gaXNJRGV2aWNlKCkge1xuICByZXR1cm4gL2lQKGhvbmV8YWQpLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xufVxuXG5mdW5jdGlvbiBpc01vYmlsZSgpIHtcbiAgcmV0dXJuIC9pUChob25lfGFkfG9kKXxBbmRyb2lkfFdpbmRvd3MgUGhvbmUvLnRlc3QodXRpbGl0aWVzLl9VQSk7XG59XG5cbmZ1bmN0aW9uIGlzSVBob25lKCkge1xuICByZXR1cm4gL2lQKGhvbmV8b2QpLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xufVxuXG5mdW5jdGlvbiBpc0FuZHJvaWQoKSB7XG4gIHJldHVybiAvQW5kcm9pZC8udGVzdCh1dGlsaXRpZXMuX1VBKTtcbn1cblxudmFyIHV0aWxpdGllcyA9IHtcbiAgX1VBOiBuYXZpZ2F0b3IudXNlckFnZW50LFxuICBub29wOiBub29wLFxuICBpc051bGw6IGlzTnVsbCxcbiAgaXNEZWZpbmVkOiBpc0RlZmluZWQsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzV2luZG93OiBpc1dpbmRvdyxcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUxpa2U6IGlzQXJyYXlMaWtlLFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzRW1wdHlTdHJpbmc6IGlzRW1wdHlTdHJpbmcsXG4gIGlzTm90RW1wdHlTdHJpbmc6IGlzTm90RW1wdHlTdHJpbmcsXG4gIGFycmF5TGlrZU9ialRvQXJyYXk6IGFycmF5TGlrZU9ialRvQXJyYXksXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIHNuYWtlX2Nhc2U6IHNuYWtlX2Nhc2UsXG4gIGlzVmFsaWRFbWFpbDogaXNWYWxpZEVtYWlsLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgY2FwaXRhbGl6ZTogY2FwaXRhbGl6ZSxcbiAgZGVjYXBpdGFsaXplOiBkZWNhcGl0YWxpemUsXG4gIHRyYW5zZm9ybUFycmF5OiB0cmFuc2Zvcm1BcnJheSxcbiAgdG9GaXhlZERpZ2l0czogdG9GaXhlZERpZ2l0cyxcbiAgdGhyb3R0bGU6IHRocm90dGxlLFxuICBkZWJvdW5jZTogZGVib3VuY2UsXG4gIHRyZWVTZWFyY2g6IHRyZWVTZWFyY2gsXG4gIGVjaG9GbjogZWNob0ZuLFxuICBpc0lTTzg2MDE6IGlzSVNPODYwMSxcbiAgaXNPbGRJRTogaXNPbGRJRSxcbiAgZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb246IGdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uLFxuICBpc0lEZXZpY2U6IGlzSURldmljZSxcbiAgaXNNb2JpbGU6IGlzTW9iaWxlLFxuICBpc0lQaG9uZTogaXNJUGhvbmUsXG4gIGlzQW5kcm9pZDogaXNBbmRyb2lkXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV0aWxpdGllcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgeG1sID0ge307XG5cbnhtbC5zdHJUb1hNTERvYyA9IGZ1bmN0aW9uIHN0clRvWE1MRG9jKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2Upe1xuICAvL0lFIDhcbiAgaWYodHlwZW9mIHdpbmRvdy5ET01QYXJzZXIgPT09ICd1bmRlZmluZWQnKXtcbiAgICB2YXIgeG1sRG9jdW1lbnQgPSBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTERPTScpO1xuICAgIHhtbERvY3VtZW50LmFzeW5jID0gZmFsc2U7XG4gICAgeG1sRG9jdW1lbnQubG9hZFhNTChzdHJpbmdDb250YWluaW5nWE1MU291cmNlKTtcbiAgICByZXR1cm4geG1sRG9jdW1lbnQ7XG4gIH1cblxuICByZXR1cm4gcGFyc2VTdHJpbmcoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSk7XG5cbiAgZnVuY3Rpb24gcGFyc2VTdHJpbmcoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSl7XG4gICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICB2YXIgcGFyc2VkRG9jdW1lbnQ7XG5cbiAgICAvL05vdGU6IFRoaXMgdHJ5IGNhdGNoIGlzIHRvIGRlYWwgd2l0aCB0aGUgZmFjdCB0aGF0IG9uIElFIHBhcnNlci5wYXJzZUZyb21TdHJpbmcgZG9lcyB0aHJvdyBhbiBlcnJvciBidXQgdGhlIHJlc3Qgb2YgdGhlIGJyb3dzZXJzIGRvbid0LlxuICAgIHRyeSB7XG4gICAgICBwYXJzZWREb2N1bWVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSwgXCJhcHBsaWNhdGlvbi94bWxcIik7XG5cbiAgICAgIGlmKGlzUGFyc2VFcnJvcihwYXJzZWREb2N1bWVudCkgfHwgdXRpbGl0aWVzLmlzRW1wdHlTdHJpbmcoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSkpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgIH1cbiAgICB9Y2F0Y2goZSl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ4bWwuc3RyVG9YTUxET0M6IEVycm9yIHBhcnNpbmcgdGhlIHN0cmluZzogJ1wiICsgc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSArIFwiJ1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkRG9jdW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBpc1BhcnNlRXJyb3IocGFyc2VkRG9jdW1lbnQpIHtcbiAgICB0cnkgeyAvLyBwYXJzZXIgYW5kIHBhcnNlcmVycm9yTlMgY291bGQgYmUgY2FjaGVkIG9uIHN0YXJ0dXAgZm9yIGVmZmljaWVuY3lcbiAgICAgIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCksXG4gICAgICAgIGVycm9uZW91c1BhcnNlID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZygnSU5WQUxJRCcsICd0ZXh0L3htbCcpLFxuICAgICAgICBwYXJzZXJlcnJvck5TID0gZXJyb25lb3VzUGFyc2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKVswXS5uYW1lc3BhY2VVUkk7XG5cbiAgICAgIGlmIChwYXJzZXJlcnJvck5TID09PSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcpIHtcbiAgICAgICAgLy8gSW4gUGhhbnRvbUpTIHRoZSBwYXJzZWVycm9yIGVsZW1lbnQgZG9lc24ndCBzZWVtIHRvIGhhdmUgYSBzcGVjaWFsIG5hbWVzcGFjZSwgc28gd2UgYXJlIGp1c3QgZ3Vlc3NpbmcgaGVyZSA6KFxuICAgICAgICByZXR1cm4gcGFyc2VkRG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGggPiAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VkRG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWVOUyhwYXJzZXJlcnJvck5TLCAncGFyc2VyZXJyb3InKS5sZW5ndGggPiAwO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vTm90ZSBvbiBJRSBwYXJzZVN0cmluZyB0aHJvd3MgYW4gZXJyb3IgYnkgaXRzZWxmIGFuZCBpdCB3aWxsIG5ldmVyIHJlYWNoIHRoaXMgY29kZS4gQmVjYXVzZSBpdCB3aWxsIGhhdmUgZmFpbGVkIGJlZm9yZVxuICAgIH1cbiAgfVxufTtcblxueG1sLnBhcnNlVGV4dCA9IGZ1bmN0aW9uIHBhcnNlVGV4dCAoc1ZhbHVlKSB7XG4gIGlmICgvXlxccyokLy50ZXN0KHNWYWx1ZSkpIHsgcmV0dXJuIG51bGw7IH1cbiAgaWYgKC9eKD86dHJ1ZXxmYWxzZSkkL2kudGVzdChzVmFsdWUpKSB7IHJldHVybiBzVmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0cnVlXCI7IH1cbiAgaWYgKGlzRmluaXRlKHNWYWx1ZSkpIHsgcmV0dXJuIHBhcnNlRmxvYXQoc1ZhbHVlKTsgfVxuICBpZiAodXRpbGl0aWVzLmlzSVNPODYwMShzVmFsdWUpKSB7IHJldHVybiBuZXcgRGF0ZShzVmFsdWUpOyB9XG4gIHJldHVybiBzVmFsdWUudHJpbSgpO1xufTtcblxueG1sLkpYT05UcmVlID0gZnVuY3Rpb24gSlhPTlRyZWUgKG9YTUxQYXJlbnQpIHtcbiAgdmFyIHBhcnNlVGV4dCA9IHhtbC5wYXJzZVRleHQ7XG5cbiAgLy9UaGUgZG9jdW1lbnQgb2JqZWN0IGlzIGFuIGVzcGVjaWFsIG9iamVjdCB0aGF0IGl0IG1heSBtaXNzIHNvbWUgZnVuY3Rpb25zIG9yIGF0dHJzIGRlcGVuZGluZyBvbiB0aGUgYnJvd3Nlci5cbiAgLy9UbyBwcmV2ZW50IHRoaXMgcHJvYmxlbSB3aXRoIGNyZWF0ZSB0aGUgSlhPTlRyZWUgdXNpbmcgdGhlIHJvb3QgY2hpbGROb2RlIHdoaWNoIGlzIGEgZnVsbHkgZmxlc2hlZCBub2RlIG9uIGFsbCBzdXBwb3J0ZWRcbiAgLy9icm93c2Vycy5cbiAgaWYob1hNTFBhcmVudC5kb2N1bWVudEVsZW1lbnQpe1xuICAgIHJldHVybiBuZXcgeG1sLkpYT05UcmVlKG9YTUxQYXJlbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgfVxuXG4gIGlmIChvWE1MUGFyZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHZhciBzQ29sbGVjdGVkVHh0ID0gXCJcIjtcbiAgICBmb3IgKHZhciBvTm9kZSwgc1Byb3AsIHZDb250ZW50LCBuSXRlbSA9IDA7IG5JdGVtIDwgb1hNTFBhcmVudC5jaGlsZE5vZGVzLmxlbmd0aDsgbkl0ZW0rKykge1xuICAgICAgb05vZGUgPSBvWE1MUGFyZW50LmNoaWxkTm9kZXMuaXRlbShuSXRlbSk7XG4gICAgICAvKmpzaGludCBiaXR3aXNlOiBmYWxzZSovXG4gICAgICBpZiAoKG9Ob2RlLm5vZGVUeXBlIC0gMSB8IDEpID09PSAzKSB7IHNDb2xsZWN0ZWRUeHQgKz0gb05vZGUubm9kZVR5cGUgPT09IDMgPyBvTm9kZS5ub2RlVmFsdWUudHJpbSgpIDogb05vZGUubm9kZVZhbHVlOyB9XG4gICAgICBlbHNlIGlmIChvTm9kZS5ub2RlVHlwZSA9PT0gMSAmJiAhb05vZGUucHJlZml4KSB7XG4gICAgICAgIHNQcm9wID0gdXRpbGl0aWVzLmRlY2FwaXRhbGl6ZShvTm9kZS5ub2RlTmFtZSk7XG4gICAgICAgIHZDb250ZW50ID0gbmV3IHhtbC5KWE9OVHJlZShvTm9kZSk7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHNQcm9wKSkge1xuICAgICAgICAgIGlmICh0aGlzW3NQcm9wXS5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHsgdGhpc1tzUHJvcF0gPSBbdGhpc1tzUHJvcF1dOyB9XG4gICAgICAgICAgdGhpc1tzUHJvcF0ucHVzaCh2Q29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7IHRoaXNbc1Byb3BdID0gdkNvbnRlbnQ7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNDb2xsZWN0ZWRUeHQpIHsgdGhpcy5rZXlWYWx1ZSA9IHBhcnNlVGV4dChzQ29sbGVjdGVkVHh0KTsgfVxuICB9XG5cbiAgLy9JRTggU3R1cGlkIGZpeFxuICB2YXIgaGFzQXR0ciA9IHR5cGVvZiBvWE1MUGFyZW50Lmhhc0F0dHJpYnV0ZXMgPT09ICd1bmRlZmluZWQnPyBvWE1MUGFyZW50LmF0dHJpYnV0ZXMubGVuZ3RoID4gMDogb1hNTFBhcmVudC5oYXNBdHRyaWJ1dGVzKCk7XG4gIGlmIChoYXNBdHRyKSB7XG4gICAgdmFyIG9BdHRyaWI7XG4gICAgZm9yICh2YXIgbkF0dHJpYiA9IDA7IG5BdHRyaWIgPCBvWE1MUGFyZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBuQXR0cmliKyspIHtcbiAgICAgIG9BdHRyaWIgPSBvWE1MUGFyZW50LmF0dHJpYnV0ZXMuaXRlbShuQXR0cmliKTtcbiAgICAgIHRoaXNbXCJAXCIgKyB1dGlsaXRpZXMuZGVjYXBpdGFsaXplKG9BdHRyaWIubmFtZSldID0gcGFyc2VUZXh0KG9BdHRyaWIudmFsdWUudHJpbSgpKTtcbiAgICB9XG4gIH1cbn07XG5cbnhtbC5KWE9OVHJlZS5wcm90b3R5cGUuYXR0ciA9IGZ1bmN0aW9uKGF0dHIpIHtcbiAgcmV0dXJuIHRoaXNbJ0AnICsgdXRpbGl0aWVzLmRlY2FwaXRhbGl6ZShhdHRyKV07XG59O1xuXG54bWwudG9KWE9OVHJlZSA9IGZ1bmN0aW9uIHRvSlhPTlRyZWUoeG1sU3RyaW5nKXtcbiAgdmFyIHhtbERvYyA9IHhtbC5zdHJUb1hNTERvYyh4bWxTdHJpbmcpO1xuICByZXR1cm4gbmV3IHhtbC5KWE9OVHJlZSh4bWxEb2MpO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gZXh0cmFjdCB0aGUga2V5dmFsdWUgb2YgYSBKWE9OVHJlZSBvYmpcbiAqXG4gKiBAcGFyYW0geG1sT2JqIHtKWE9OVHJlZX1cbiAqIHJldHVybiB0aGUga2V5IHZhbHVlIG9yIHVuZGVmaW5lZDtcbiAqL1xueG1sLmtleVZhbHVlID0gZnVuY3Rpb24gZ2V0S2V5VmFsdWUoeG1sT2JqKSB7XG4gIGlmKHhtbE9iail7XG4gICAgcmV0dXJuIHhtbE9iai5rZXlWYWx1ZTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxueG1sLmF0dHIgPSBmdW5jdGlvbiBnZXRBdHRyVmFsdWUoeG1sT2JqLCBhdHRyKSB7XG4gIGlmKHhtbE9iaikge1xuICAgIHJldHVybiB4bWxPYmpbJ0AnICsgdXRpbGl0aWVzLmRlY2FwaXRhbGl6ZShhdHRyKV07XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbnhtbC5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGVYTUwoc3RyKSB7XG4gIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKHN0cikpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgLnJlcGxhY2UoLycvZywgJyZhcG9zOycpO1xufTtcblxueG1sLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZVhNTChzdHIpIHtcbiAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcoc3RyKSkgcmV0dXJuIHVuZGVmaW5lZDtcblxuICByZXR1cm4gc3RyLnJlcGxhY2UoLyZhcG9zOy9nLCBcIidcIilcbiAgICAucmVwbGFjZSgvJnF1b3Q7L2csICdcIicpXG4gICAgLnJlcGxhY2UoLyZndDsvZywgJz4nKVxuICAgIC5yZXBsYWNlKC8mbHQ7L2csICc8JylcbiAgICAucmVwbGFjZSgvJmFtcDsvZywgJyYnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0geG1sO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuL3BsdWdpbi9jb21wb25lbnRzL2Fkcy1sYWJlbF81Jyk7XG5yZXF1aXJlKCcuL3BsdWdpbi9jb21wb25lbnRzL2JsYWNrLXBvc3Rlcl81Jyk7XG5cbnZhciB2aWRlb0pzVkFTVCA9IHJlcXVpcmUoJy4vcGx1Z2luL3ZpZGVvanMudmFzdC52cGFpZCcpO1xuXG52aWRlb2pzLnBsdWdpbigndmFzdENsaWVudCcsIHZpZGVvSnNWQVNUKTtcbiJdfQ==
