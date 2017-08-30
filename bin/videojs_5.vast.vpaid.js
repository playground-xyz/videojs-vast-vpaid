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
    if (el) {
        el.remove();
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
        utils.clearCallbackTimeout(this._onLoad);
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
    if( window.location.origin ) {
        return window.location.origin;
    }
    else {
        return window.location.protocol + "//" +
            window.location.hostname +
            (window.location.port ? ':' + window.location.port: '');
    }
}

module.exports = VPAIDHTML5Client;


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

var timeouts = {};
/**
 * clearCallbackTimeout
 *
 * @param {function} func handler to remove
 */
function clearCallbackTimeout(func) {
    var timeout = timeouts[func];
    if (timeout) {
        clearTimeout(timeout);
        delete timeouts[func];
    }
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
        delete timeout[callback];
        onTimeout();
    }, timer);

    callback = function () {
        // TODO avoid leaking arguments
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        if (onSuccess.apply(this, arguments)) {
            clearCallbackTimeout(callback);
        }
    };

    timeouts[callback] = timeout;

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
    element.style.position = 'absolute';
    element.style.left = '0';
    element.style.top = '0';
    element.style.margin = '0px';
    element.style.padding = '0px';
    element.style.border = 'none';
    element.style.width = '100%';
    element.style.height = '100%';
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
    clearCallbackTimeout: clearCallbackTimeout,
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
    WRAPPER_LIMIT: 5
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
      logger.debug ("built JXONTree from VAST response:", vastTree);

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
  if (evtName === 'AdStarted') {
    timeoutId = setTimeout(responseListener, 3000);
  } else {
    timeoutId = setTimeout(function () {
      cb(new VASTError("on VPAIDAdUnitWrapper.waitForEvent, timeout while waiting for event '" + evtName + "'"));
      timeoutId = null;
      cb = utilities.noop;
    }, this.options.responseTimeout);
  }

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
    responseTimeout: 5000,
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

      console.log('adCancelTimeout', settings.adCancelTimeout);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvc3Vic2NyaWJlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvVlBBSURIVE1MNUNsaWVudC9qcy91dGlscy5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L0FkLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvQ29tcGFuaW9uLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvQ3JlYXRpdmUuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9JbkxpbmUuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9MaW5lYXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9NZWRpYUZpbGUuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9UcmFja2luZ0V2ZW50LmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVENsaWVudC5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZBU1RFcnJvci5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1ZBU1RJbnRlZ3JhdG9yLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVFJlc3BvbnNlLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvVkFTVFRyYWNrZXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9WaWRlb0NsaWNrcy5qcyIsInNyYy9zY3JpcHRzL2Fkcy92YXN0L1dyYXBwZXIuanMiLCJzcmMvc2NyaXB0cy9hZHMvdmFzdC9wYXJzZXJzLmpzIiwic3JjL3NjcmlwdHMvYWRzL3Zhc3QvdmFzdFV0aWwuanMiLCJzcmMvc2NyaXB0cy9hZHMvdnBhaWQvVlBBSURBZFVuaXRXcmFwcGVyLmpzIiwic3JjL3NjcmlwdHMvYWRzL3ZwYWlkL1ZQQUlESFRNTDVUZWNoLmpzIiwic3JjL3NjcmlwdHMvYWRzL3ZwYWlkL1ZQQUlESW50ZWdyYXRvci5qcyIsInNyYy9zY3JpcHRzL3BsdWdpbi9jb21wb25lbnRzL2Fkcy1sYWJlbC5qcyIsInNyYy9zY3JpcHRzL3BsdWdpbi9jb21wb25lbnRzL2Fkcy1sYWJlbF81LmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYmxhY2stcG9zdGVyLmpzIiwic3JjL3NjcmlwdHMvcGx1Z2luL2NvbXBvbmVudHMvYmxhY2stcG9zdGVyXzUuanMiLCJzcmMvc2NyaXB0cy9wbHVnaW4vdmlkZW9qcy52YXN0LnZwYWlkLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvYXN5bmMuanMiLCJzcmMvc2NyaXB0cy91dGlscy9jb25zb2xlTG9nZ2VyLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvZG9tLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvaHR0cC5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL21pbWV0eXBlcy5qcyIsInNyYy9zY3JpcHRzL3V0aWxzL3BsYXllclV0aWxzLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMvdXJsVXRpbHMuanMiLCJzcmMvc2NyaXB0cy91dGlscy91dGlsaXR5RnVuY3Rpb25zLmpzIiwic3JjL3NjcmlwdHMvdXRpbHMveG1sLmpzIiwic3JjL3NjcmlwdHMvdmlkZW9qc181LnZhc3QudnBhaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9XQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDamxCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ROQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6WUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1FVEhPRFMgPSBbXG4gICAgJ2hhbmRzaGFrZVZlcnNpb24nLFxuICAgICdpbml0QWQnLFxuICAgICdzdGFydEFkJyxcbiAgICAnc3RvcEFkJyxcbiAgICAnc2tpcEFkJywgLy8gVlBBSUQgMi4wIG5ldyBtZXRob2RcbiAgICAncmVzaXplQWQnLFxuICAgICdwYXVzZUFkJyxcbiAgICAncmVzdW1lQWQnLFxuICAgICdleHBhbmRBZCcsXG4gICAgJ2NvbGxhcHNlQWQnLFxuICAgICdzdWJzY3JpYmUnLFxuICAgICd1bnN1YnNjcmliZSdcbl07XG5cbnZhciBFVkVOVFMgPSBbXG4gICAgJ0FkTG9hZGVkJyxcbiAgICAnQWRTdGFydGVkJyxcbiAgICAnQWRTdG9wcGVkJyxcbiAgICAnQWRTa2lwcGVkJyxcbiAgICAnQWRTa2lwcGFibGVTdGF0ZUNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRTaXplQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZExpbmVhckNoYW5nZScsXG4gICAgJ0FkRHVyYXRpb25DaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgJ0FkRXhwYW5kZWRDaGFuZ2UnLFxuICAgICdBZFJlbWFpbmluZ1RpbWVDaGFuZ2UnLCAvLyBbRGVwcmVjYXRlZCBpbiAyLjBdIGJ1dCB3aWxsIGJlIHN0aWxsIGZpcmVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICdBZFZvbHVtZUNoYW5nZScsXG4gICAgJ0FkSW1wcmVzc2lvbicsXG4gICAgJ0FkVmlkZW9TdGFydCcsXG4gICAgJ0FkVmlkZW9GaXJzdFF1YXJ0aWxlJyxcbiAgICAnQWRWaWRlb01pZHBvaW50JyxcbiAgICAnQWRWaWRlb1RoaXJkUXVhcnRpbGUnLFxuICAgICdBZFZpZGVvQ29tcGxldGUnLFxuICAgICdBZENsaWNrVGhydScsXG4gICAgJ0FkSW50ZXJhY3Rpb24nLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgJ0FkVXNlckFjY2VwdEludml0YXRpb24nLFxuICAgICdBZFVzZXJNaW5pbWl6ZScsXG4gICAgJ0FkVXNlckNsb3NlJyxcbiAgICAnQWRQYXVzZWQnLFxuICAgICdBZFBsYXlpbmcnLFxuICAgICdBZExvZycsXG4gICAgJ0FkRXJyb3InXG5dO1xuXG52YXIgR0VUVEVSUyA9IFtcbiAgICAnZ2V0QWRMaW5lYXInLFxuICAgICdnZXRBZFdpZHRoJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRIZWlnaHQnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZEV4cGFuZGVkJyxcbiAgICAnZ2V0QWRTa2lwcGFibGVTdGF0ZScsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkUmVtYWluaW5nVGltZScsXG4gICAgJ2dldEFkRHVyYXRpb24nLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZFZvbHVtZScsXG4gICAgJ2dldEFkQ29tcGFuaW9ucycsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkSWNvbnMnIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG5dO1xuXG52YXIgU0VUVEVSUyA9IFtcbiAgICAnc2V0QWRWb2x1bWUnXG5dO1xuXG5cbi8qKlxuICogVGhpcyBjYWxsYmFjayBpcyBkaXNwbGF5ZWQgYXMgZ2xvYmFsIG1lbWJlci4gVGhlIGNhbGxiYWNrIHVzZSBub2RlanMgZXJyb3ItZmlyc3QgY2FsbGJhY2sgc3R5bGVcbiAqIEBjYWxsYmFjayBOb2RlU3R5bGVDYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd8bnVsbH1cbiAqIEBwYXJhbSB7dW5kZWZpbmVkfG9iamVjdH1cbiAqL1xuXG5cbi8qKlxuICogSVZQQUlEQWRVbml0XG4gKlxuICogQGNsYXNzXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNyZWF0aXZlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbFxuICogQHBhcmFtIHtIVE1MVmlkZW9FbGVtZW50fSB2aWRlb1xuICovXG5mdW5jdGlvbiBJVlBBSURBZFVuaXQoY3JlYXRpdmUsIGVsLCB2aWRlbykge31cblxuXG4vKipcbiAqIGhhbmRzaGFrZVZlcnNpb25cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gVlBBSURWZXJzaW9uXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmhhbmRzaGFrZVZlcnNpb24gPSBmdW5jdGlvbiAoVlBBSURWZXJzaW9uLCBjYWxsYmFjaykge307XG5cbi8qKlxuICogaW5pdEFkXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKiBAcGFyYW0ge3N0cmluZ30gdmlld01vZGUgY2FuIGJlICdub3JtYWwnLCAndGh1bWJuYWlsJyBvciAnZnVsbHNjcmVlbidcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXNpcmVkQml0cmF0ZSBpbmRpY2F0ZXMgdGhlIGRlc2lyZWQgYml0cmF0ZSBpbiBrYnBzXG4gKiBAcGFyYW0ge29iamVjdH0gW2NyZWF0aXZlRGF0YV0gdXNlZCBmb3IgYWRkaXRpb25hbCBpbml0aWFsaXphdGlvbiBkYXRhXG4gKiBAcGFyYW0ge29iamVjdH0gW2Vudmlyb25tZW50VmFyc10gdXNlZCBmb3IgcGFzc2luZyBpbXBsZW1lbnRhdGlvbi1zcGVjaWZpYyBvZiBqcyB2ZXJzaW9uXG4gKiBAcGFyYW0ge05vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmluaXRBZCA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhLCBlbnZpcm9ubWVudFZhcnMsIGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBzdGFydEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zdGFydEFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHN0b3BBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc3RvcEFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHNraXBBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc2tpcEFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHJlc2l6ZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5yZXNpemVBZCA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBjYWxsYmFjaykge307XG5cbi8qKlxuICogcGF1c2VBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUucGF1c2VBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiByZXN1bWVBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUucmVzdW1lQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZXhwYW5kQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmV4cGFuZEFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGNvbGxhcHNlQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmNvbGxhcHNlQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc3Vic2NyaWJlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBoYW5kbGVyXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyLCBjb250ZXh0KSB7fTtcblxuLyoqXG4gKiBzdGFydEFkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlcikge307XG5cblxuXG4vKipcbiAqIGdldEFkTGluZWFyXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZExpbmVhciA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZFdpZHRoXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZFdpZHRoID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkSGVpZ2h0XG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZEhlaWdodCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZEV4cGFuZGVkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZEV4cGFuZGVkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkU2tpcHBhYmxlU3RhdGVcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkU2tpcHBhYmxlU3RhdGUgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRSZW1haW5pbmdUaW1lXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZFJlbWFpbmluZ1RpbWUgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWREdXJhdGlvblxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWREdXJhdGlvbiA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZFZvbHVtZVxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRWb2x1bWUgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRDb21wYW5pb25zXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZENvbXBhbmlvbnMgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRJY29uc1xuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRJY29ucyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBzZXRBZFZvbHVtZVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB2b2x1bWVcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc2V0QWRWb2x1bWUgPSBmdW5jdGlvbih2b2x1bWUsIGNhbGxiYWNrKSB7fTtcblxuYWRkU3RhdGljVG9JbnRlcmZhY2UoSVZQQUlEQWRVbml0LCAnTUVUSE9EUycsIE1FVEhPRFMpO1xuYWRkU3RhdGljVG9JbnRlcmZhY2UoSVZQQUlEQWRVbml0LCAnR0VUVEVSUycsIEdFVFRFUlMpO1xuYWRkU3RhdGljVG9JbnRlcmZhY2UoSVZQQUlEQWRVbml0LCAnU0VUVEVSUycsIFNFVFRFUlMpO1xuYWRkU3RhdGljVG9JbnRlcmZhY2UoSVZQQUlEQWRVbml0LCAnRVZFTlRTJywgIEVWRU5UUyk7XG5cblxudmFyIFZQQUlEMV9NRVRIT0RTID0gTUVUSE9EUy5maWx0ZXIoZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgcmV0dXJuIFsnc2tpcEFkJ10uaW5kZXhPZihtZXRob2QpID09PSAtMTtcbn0pO1xuXG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdjaGVja1ZQQUlESW50ZXJmYWNlJywgZnVuY3Rpb24gY2hlY2tWUEFJREludGVyZmFjZSAoY3JlYXRpdmUpIHtcbiAgICB2YXIgcmVzdWx0ID0gVlBBSUQxX01FVEhPRFMuZXZlcnkoZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgY3JlYXRpdmVba2V5XSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gSVZQQUlEQWRVbml0O1xuXG5mdW5jdGlvbiBhZGRTdGF0aWNUb0ludGVyZmFjZShJbnRlcmZhY2UsIG5hbWUsIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEludGVyZmFjZSwgbmFtZSwge1xuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xufVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBJVlBBSURBZFVuaXQgPSByZXF1aXJlKCcuL0lWUEFJREFkVW5pdCcpO1xudmFyIFN1YnNjcmliZXIgPSByZXF1aXJlKCcuL3N1YnNjcmliZXInKTtcbnZhciBjaGVja1ZQQUlESW50ZXJmYWNlID0gSVZQQUlEQWRVbml0LmNoZWNrVlBBSURJbnRlcmZhY2U7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgTUVUSE9EUyA9IElWUEFJREFkVW5pdC5NRVRIT0RTO1xudmFyIEVSUk9SID0gJ0FkRXJyb3InO1xudmFyIEFEX0NMSUNLID0gJ0FkQ2xpY2tUaHJ1JztcbnZhciBGSUxURVJFRF9FVkVOVFMgPSBJVlBBSURBZFVuaXQuRVZFTlRTLmZpbHRlcihmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4gZXZlbnQgIT0gQURfQ0xJQ0s7XG59KTtcblxuLyoqXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBnbG9iYWwgbWVtYmVyLiBUaGUgY2FsbGJhY2sgdXNlIG5vZGVqcyBlcnJvci1maXJzdCBjYWxsYmFjayBzdHlsZVxuICogQGNhbGxiYWNrIE5vZGVTdHlsZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfVxuICogQHBhcmFtIHt1bmRlZmluZWR8b2JqZWN0fVxuICovXG5cblxuLyoqXG4gKiBWUEFJREFkVW5pdFxuICogQGNsYXNzXG4gKlxuICogQHBhcmFtIFZQQUlEQ3JlYXRpdmVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IFtlbF0gdGhpcyB3aWxsIGJlIHVzZWQgaW4gaW5pdEFkIGVudmlyb25tZW50VmFycy5zbG90IGlmIGRlZmluZWRcbiAqIEBwYXJhbSB7SFRNTFZpZGVvRWxlbWVudH0gW3ZpZGVvXSB0aGlzIHdpbGwgYmUgdXNlZCBpbiBpbml0QWQgZW52aXJvbm1lbnRWYXJzLnZpZGVvU2xvdCBpZiBkZWZpbmVkXG4gKi9cbmZ1bmN0aW9uIFZQQUlEQWRVbml0KFZQQUlEQ3JlYXRpdmUsIGVsLCB2aWRlbywgaWZyYW1lKSB7XG4gICAgdGhpcy5faXNWYWxpZCA9IGNoZWNrVlBBSURJbnRlcmZhY2UoVlBBSURDcmVhdGl2ZSk7XG4gICAgaWYgKHRoaXMuX2lzVmFsaWQpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRpdmUgPSBWUEFJRENyZWF0aXZlO1xuICAgICAgICB0aGlzLl9lbCA9IGVsO1xuICAgICAgICB0aGlzLl92aWRlb0VsID0gdmlkZW87XG4gICAgICAgIHRoaXMuX2lmcmFtZSA9IGlmcmFtZTtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlcnMgPSBuZXcgU3Vic2NyaWJlcigpO1xuICAgICAgICB1dGlscy5zZXRGdWxsU2l6ZVN0eWxlKGVsKTtcbiAgICAgICAgJGFkZEV2ZW50c1N1YnNjcmliZXJzLmNhbGwodGhpcyk7XG4gICAgfVxufVxuXG5WUEFJREFkVW5pdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKElWUEFJREFkVW5pdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIGlzVmFsaWRWUEFJREFkIHdpbGwgcmV0dXJuIGlmIHRoZSBWUEFJRENyZWF0aXZlIHBhc3NlZCBpbiBjb25zdHJ1Y3RvciBpcyB2YWxpZCBvciBub3RcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuaXNWYWxpZFZQQUlEQWQgPSBmdW5jdGlvbiBpc1ZhbGlkVlBBSURBZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNWYWxpZDtcbn07XG5cbklWUEFJREFkVW5pdC5NRVRIT0RTLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgLy9OT1RFOiB0aGlzIG1ldGhvZHMgYXJndW1lbnRzIG9yZGVyIGFyZSBpbXBsZW1lbnRlZCBkaWZmZXJlbnRseSBmcm9tIHRoZSBzcGVjXG4gICAgdmFyIGlnbm9yZXMgPSBbXG4gICAgICAgICdzdWJzY3JpYmUnLFxuICAgICAgICAndW5zdWJzY3JpYmUnLFxuICAgICAgICAnaW5pdEFkJ1xuICAgIF07XG5cbiAgICBpZiAoaWdub3Jlcy5pbmRleE9mKG1ldGhvZCkgIT09IC0xKSByZXR1cm47XG5cbiAgICBWUEFJREFkVW5pdC5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyaWF0eSA9IElWUEFJREFkVW5pdC5wcm90b3R5cGVbbWV0aG9kXS5sZW5ndGg7XG4gICAgICAgIC8vIFRPRE8gYXZvaWQgbGVha2luZyBhcmd1bWVudHNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzMyLWxlYWtpbmctYXJndW1lbnRzXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gKGFyaWF0eSA9PT0gYXJncy5sZW5ndGgpID8gYXJncy5wb3AoKSA6IHVuZGVmaW5lZDtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQsIGVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fY3JlYXRpdmVbbWV0aG9kXS5hcHBseSh0aGlzLl9jcmVhdGl2ZSwgYXJncyk7XG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgdGhpcy5fc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpO1xuICAgICAgICB9LmJpbmQodGhpcyksIDApO1xuICAgIH07XG59KTtcblxuXG4vKipcbiAqIGluaXRBZCBjb25jcmVhdGUgaW1wbGVtZW50YXRpb25cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAqIEBwYXJhbSB7c3RyaW5nfSB2aWV3TW9kZSBjYW4gYmUgJ25vcm1hbCcsICd0aHVtYm5haWwnIG9yICdmdWxsc2NyZWVuJ1xuICogQHBhcmFtIHtudW1iZXJ9IGRlc2lyZWRCaXRyYXRlIGluZGljYXRlcyB0aGUgZGVzaXJlZCBiaXRyYXRlIGluIGticHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY3JlYXRpdmVEYXRhXSB1c2VkIGZvciBhZGRpdGlvbmFsIGluaXRpYWxpemF0aW9uIGRhdGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBbZW52aXJvbm1lbnRWYXJzXSB1c2VkIGZvciBwYXNzaW5nIGltcGxlbWVudGF0aW9uLXNwZWNpZmljIG9mIGpzIHZlcnNpb24sIGlmIGVsICYgdmlkZW8gd2FzIHVzZWQgaW4gY29uc3RydWN0b3Igc2xvdCAmIHZpZGVvU2xvdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqIEBwYXJhbSB7Tm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS5pbml0QWQgPSBmdW5jdGlvbiBpbml0QWQod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEsIGVudmlyb25tZW50VmFycywgY2FsbGJhY2spIHtcbiAgICBjcmVhdGl2ZURhdGEgPSBjcmVhdGl2ZURhdGEgfHwge307XG4gICAgZW52aXJvbm1lbnRWYXJzID0gdXRpbHMuZXh0ZW5kKHtcbiAgICAgICAgc2xvdDogdGhpcy5fZWwsXG4gICAgICAgIHZpZGVvU2xvdDogdGhpcy5fdmlkZW9FbFxuICAgIH0sIGVudmlyb25tZW50VmFycyB8fCB7fSk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRpdmUuaW5pdEFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhLCBlbnZpcm9ubWVudFZhcnMpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvcik7XG4gICAgfS5iaW5kKHRoaXMpLCAwKTtcbn07XG5cbi8qKlxuICogc3Vic2NyaWJlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBoYW5kbGVyXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50LCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMuc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50LCBjb250ZXh0KTtcbn07XG5cblxuLyoqXG4gKiB1bnN1YnNjcmliZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gaGFuZGxlclxuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZShldmVudCwgaGFuZGxlcikge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnVuc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50KTtcbn07XG5cbi8vYWxpYXNcblZQQUlEQWRVbml0LnByb3RvdHlwZS5vbiA9IFZQQUlEQWRVbml0LnByb3RvdHlwZS5zdWJzY3JpYmU7XG5WUEFJREFkVW5pdC5wcm90b3R5cGUub2ZmID0gVlBBSURBZFVuaXQucHJvdG90eXBlLnVuc3Vic2NyaWJlO1xuXG5JVlBBSURBZFVuaXQuR0VUVEVSUy5mb3JFYWNoKGZ1bmN0aW9uKGdldHRlcikge1xuICAgIFZQQUlEQWRVbml0LnByb3RvdHlwZVtnZXR0ZXJdID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0LCBlcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0aXZlW2dldHRlcl0oKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgMCk7XG4gICAgfTtcbn0pO1xuXG4vKipcbiAqIHNldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHZvbHVtZVxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLnNldEFkVm9sdW1lID0gZnVuY3Rpb24gc2V0QWRWb2x1bWUodm9sdW1lLCBjYWxsYmFjaykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciByZXN1bHQsIGVycm9yID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0aXZlLnNldEFkVm9sdW1lKHZvbHVtZSk7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9jcmVhdGl2ZS5nZXRBZFZvbHVtZSgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIGVycm9yID0gdXRpbHMudmFsaWRhdGUocmVzdWx0ID09PSB2b2x1bWUsICdmYWlsZWQgdG8gYXBwbHkgdm9sdW1lOiAnICsgdm9sdW1lKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvciwgcmVzdWx0KTtcbiAgICB9LmJpbmQodGhpcyksIDApO1xufTtcblxuVlBBSURBZFVuaXQucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB0aGlzLnN0b3BBZCgpO1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnVuc3Vic2NyaWJlQWxsKCk7XG59O1xuXG5mdW5jdGlvbiAkYWRkRXZlbnRzU3Vic2NyaWJlcnMoKSB7XG4gICAgLy8gc29tZSBhZHMgaW1wbGVtZW50XG4gICAgLy8gc28gdGhleSBvbmx5IGhhbmRsZSBvbmUgc3Vic2NyaWJlclxuICAgIC8vIHRvIGhhbmRsZSB0aGlzIHdlIGNyZWF0ZSBvdXIgb25lXG4gICAgRklMVEVSRURfRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2NyZWF0aXZlLnN1YnNjcmliZSgkdHJpZ2dlci5iaW5kKHRoaXMsIGV2ZW50KSwgZXZlbnQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAvLyBtYXAgdGhlIGNsaWNrIGV2ZW50IHRvIGJlIGFuIG9iamVjdCBpbnN0ZWFkIG9mIGRlcGVuZGluZyBvZiB0aGUgb3JkZXIgb2YgdGhlIGFyZ3VtZW50c1xuICAgIC8vIGFuZCB0byBiZSBjb25zaXN0ZW50IHdpdGggdGhlIGZsYXNoXG4gICAgdGhpcy5fY3JlYXRpdmUuc3Vic2NyaWJlKCRjbGlja1RocnVIb29rLmJpbmQodGhpcyksIEFEX0NMSUNLKTtcblxuICAgIC8vIGJlY2F1c2Ugd2UgYXJlIGFkZGluZyB0aGUgZWxlbWVudCBpbnNpZGUgdGhlIGlmcmFtZVxuICAgIC8vIHRoZSB1c2VyIGlzIG5vdCBhYmxlIHRvIGNsaWNrIGluIHRoZSB2aWRlb1xuICAgIGlmICh0aGlzLl92aWRlb0VsKSB7XG4gICAgICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSB0aGlzLl9pZnJhbWUuY29udGVudERvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHZpZGVvRWwgPSB0aGlzLl92aWRlb0VsO1xuICAgICAgICBkb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZpZGVvRWwuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiAkY2xpY2tUaHJ1SG9vayh1cmwsIGlkLCBwbGF5ZXJIYW5kbGVzKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMudHJpZ2dlclN5bmMoQURfQ0xJQ0ssIHt1cmw6IHVybCwgaWQ6IGlkLCBwbGF5ZXJIYW5kbGVzOiBwbGF5ZXJIYW5kbGVzfSk7XG59XG5cbmZ1bmN0aW9uICR0cmlnZ2VyKGV2ZW50KSB7XG4gICAgLy8gVE9ETyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50c1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRrYWFudG9ub3YvYmx1ZWJpcmQvd2lraS9PcHRpbWl6YXRpb24ta2lsbGVycyMzMi1sZWFraW5nLWFyZ3VtZW50c1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnRyaWdnZXIoZXZlbnQsIEFycmF5LnByb3RvdHlwZS5zbGljZShhcmd1bWVudHMsIDEpKTtcbn1cblxuZnVuY3Rpb24gY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCBzdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCkge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhlcnJvciwgcmVzdWx0KTtcbiAgICB9IGVsc2UgaWYgKGVycm9yKSB7XG4gICAgICAgIHN1YnNjcmliZXJzLnRyaWdnZXIoRVJST1IsIGVycm9yKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURBZFVuaXQ7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIHVuaXF1ZSA9IHV0aWxzLnVuaXF1ZSgndnBhaWRJZnJhbWUnKTtcbnZhciBWUEFJREFkVW5pdCA9IHJlcXVpcmUoJy4vVlBBSURBZFVuaXQnKTtcblxudmFyIGRlZmF1bHRUZW1wbGF0ZSA9ICc8IURPQ1RZUEUgaHRtbD4nICtcbiAgICAnPGh0bWwgbGFuZz1cImVuXCI+JyArXG4gICAgJzxoZWFkPjxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPjwvaGVhZD4nICtcbiAgICAnPGJvZHkgc3R5bGU9XCJtYXJnaW46MDtwYWRkaW5nOjBcIj48ZGl2IGNsYXNzPVwiYWQtZWxlbWVudFwiPjwvZGl2PicgK1xuICAgICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJ7e2lmcmFtZVVSTF9KU319XCI+PC9zY3JpcHQ+JyArXG4gICAgJzxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPicgK1xuICAgICd3aW5kb3cucGFyZW50LnBvc3RNZXNzYWdlKFxcJ3tcImV2ZW50XCI6IFwicmVhZHlcIiwgXCJpZFwiOiBcInt7aWZyYW1lSUR9fVwifVxcJywgXFwne3tvcmlnaW59fVxcJyk7JyArXG4gICAgJzwvc2NyaXB0PicgK1xuICAgICc8L2JvZHk+JyArXG4gICAgJzwvaHRtbD4nO1xuXG52YXIgQURfU1RPUFBFRCA9ICdBZFN0b3BwZWQnO1xuXG4vKipcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGdsb2JhbCBtZW1iZXIuIFRoZSBjYWxsYmFjayB1c2Ugbm9kZWpzIGVycm9yLWZpcnN0IGNhbGxiYWNrIHN0eWxlXG4gKiBAY2FsbGJhY2sgTm9kZVN0eWxlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9XG4gKiBAcGFyYW0ge3VuZGVmaW5lZHxvYmplY3R9XG4gKi9cblxuLyoqXG4gKiBWUEFJREhUTUw1Q2xpZW50XG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbCB0aGF0IHdpbGwgY29udGFpbiB0aGUgaWZyYW1lIHRvIGxvYWQgYWRVbml0IGFuZCBhIGVsIHRvIGFkZCB0byBhZFVuaXQgc2xvdFxuICogQHBhcmFtIHtIVE1MVmlkZW9FbGVtZW50fSB2aWRlbyBkZWZhdWx0IHZpZGVvIGVsZW1lbnQgdG8gYmUgdXNlZCBieSBhZFVuaXRcbiAqIEBwYXJhbSB7b2JqZWN0fSBbdGVtcGxhdGVDb25maWddIHRlbXBsYXRlOiBodG1sIHRlbXBsYXRlIHRvIGJlIHVzZWQgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCwgZXh0cmFPcHRpb25zOiB0byBiZSB1c2VkIHdoZW4gcmVuZGVyaW5nIHRoZSB0ZW1wbGF0ZVxuICogQHBhcmFtIHtvYmplY3R9IFt2cGFpZE9wdGlvbnNdIHRpbWVvdXQ6IHdoZW4gbG9hZGluZyBhZFVuaXRcbiAqL1xuZnVuY3Rpb24gVlBBSURIVE1MNUNsaWVudChlbCwgdmlkZW8sIHRlbXBsYXRlQ29uZmlnLCB2cGFpZE9wdGlvbnMpIHtcbiAgICB0ZW1wbGF0ZUNvbmZpZyA9IHRlbXBsYXRlQ29uZmlnIHx8IHt9O1xuXG4gICAgdGhpcy5faWQgPSB1bmlxdWUoKTtcbiAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuX2ZyYW1lQ29udGFpbmVyID0gdXRpbHMuY3JlYXRlRWxlbWVudEluRWwoZWwsICdkaXYnKTtcbiAgICB0aGlzLl92aWRlb0VsID0gdmlkZW87XG4gICAgdGhpcy5fdnBhaWRPcHRpb25zID0gdnBhaWRPcHRpb25zIHx8IHt0aW1lb3V0OiAxMDAwMH07XG5cbiAgICB0aGlzLl90ZW1wbGF0ZUNvbmZpZyA9IHtcbiAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlQ29uZmlnLnRlbXBsYXRlIHx8IGRlZmF1bHRUZW1wbGF0ZSxcbiAgICAgICAgZXh0cmFPcHRpb25zOiB0ZW1wbGF0ZUNvbmZpZy5leHRyYU9wdGlvbnMgfHwge31cbiAgICB9O1xufVxuXG4vKipcbiAqIGRlc3Ryb3lcbiAqXG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBpc0Rlc3Ryb3llZFxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmlzRGVzdHJveWVkID0gZnVuY3Rpb24gaXNEZXN0cm95ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3Ryb3llZDtcbn07XG5cbi8qKlxuICogbG9hZEFkVW5pdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhZFVSTCB1cmwgb2YgdGhlIGpzIG9mIHRoZSBhZFVuaXRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmxvYWRBZFVuaXQgPSBmdW5jdGlvbiBsb2FkQWRVbml0KGFkVVJMLCBjYWxsYmFjaykge1xuICAgICR0aHJvd0lmRGVzdHJveWVkLmNhbGwodGhpcyk7XG4gICAgJHVubG9hZFByZXZpb3VzQWRVbml0LmNhbGwodGhpcyk7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgdmFyIGZyYW1lID0gdXRpbHMuY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQoXG4gICAgICAgIHRoaXMuX2ZyYW1lQ29udGFpbmVyLFxuICAgICAgICB0aGlzLl90ZW1wbGF0ZUNvbmZpZy50ZW1wbGF0ZSxcbiAgICAgICAgdXRpbHMuZXh0ZW5kKHtcbiAgICAgICAgICAgIGlmcmFtZVVSTF9KUzogYWRVUkwsXG4gICAgICAgICAgICBpZnJhbWVJRDogdGhpcy5nZXRJRCgpLFxuICAgICAgICAgICAgb3JpZ2luOiBnZXRPcmlnaW4oKVxuICAgICAgICB9LCB0aGlzLl90ZW1wbGF0ZUNvbmZpZy5leHRyYU9wdGlvbnMpXG4gICAgKTtcblxuICAgIHRoaXMuX2ZyYW1lID0gZnJhbWU7XG5cbiAgICB0aGlzLl9vbkxvYWQgPSB1dGlscy5jYWxsYmFja1RpbWVvdXQoXG4gICAgICAgIHRoaXMuX3ZwYWlkT3B0aW9ucy50aW1lb3V0LFxuICAgICAgICBvbkxvYWQuYmluZCh0aGlzKSxcbiAgICAgICAgb25UaW1lb3V0LmJpbmQodGhpcylcbiAgICApO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLl9vbkxvYWQpO1xuXG4gICAgZnVuY3Rpb24gb25Mb2FkIChlKSB7XG4gICAgICAgIC8qanNoaW50IHZhbGlkdGhpczogZmFsc2UgKi9cbiAgICAgICAgLy9kb24ndCBjbGVhciB0aW1lb3V0XG4gICAgICAgIGlmIChlLm9yaWdpbiAhPT0gZ2V0T3JpZ2luKCkpIHJldHVybjtcbiAgICAgICAgdmFyIHJlc3VsdCA9IEpTT04ucGFyc2UoZS5kYXRhKTtcblxuICAgICAgICAvL2Rvbid0IGNsZWFyIHRpbWVvdXRcbiAgICAgICAgaWYgKHJlc3VsdC5pZCAhPT0gdGhhdC5nZXRJRCgpKSByZXR1cm47XG5cbiAgICAgICAgdmFyIGFkVW5pdCwgZXJyb3IsIGNyZWF0ZUFkO1xuICAgICAgICBpZiAoIXRoYXQuX2ZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcblxuICAgICAgICAgICAgZXJyb3IgPSAndGhlIGlmcmFtZSBpcyBub3QgYW55bW9yZSBpbiB0aGUgRE9NIHRyZWUnO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjcmVhdGVBZCA9IHRoYXQuX2ZyYW1lLmNvbnRlbnRXaW5kb3cuZ2V0VlBBSURBZDtcbiAgICAgICAgICAgIGVycm9yID0gdXRpbHMudmFsaWRhdGUodHlwZW9mIGNyZWF0ZUFkID09PSAnZnVuY3Rpb24nLCAndGhlIGFkIGRpZG5cXCd0IHJldHVybiBhIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhbiBhZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgdmFyIGFkRWwgPSB0aGF0Ll9mcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZC1lbGVtZW50Jyk7XG4gICAgICAgICAgICBhZFVuaXQgPSBuZXcgVlBBSURBZFVuaXQoY3JlYXRlQWQoKSwgYWRFbCwgdGhhdC5fdmlkZW9FbCwgdGhhdC5fZnJhbWUpO1xuICAgICAgICAgICAgYWRVbml0LnN1YnNjcmliZShBRF9TVE9QUEVELCAkYWREZXN0cm95ZWQuYmluZCh0aGF0KSk7XG4gICAgICAgICAgICBlcnJvciA9IHV0aWxzLnZhbGlkYXRlKGFkVW5pdC5pc1ZhbGlkVlBBSURBZCgpLCAndGhlIGFkZCBpcyBub3QgZnVsbHkgY29tcGxhaW50IHdpdGggVlBBSUQgc3BlY2lmaWNhdGlvbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhhdC5fYWRVbml0ID0gYWRVbml0O1xuICAgICAgICAkZGVzdHJveUxvYWRMaXN0ZW5lci5jYWxsKHRoYXQpO1xuICAgICAgICBjYWxsYmFjayhlcnJvciwgZXJyb3IgPyBudWxsIDogYWRVbml0KTtcblxuICAgICAgICAvL2NsZWFyIHRpbWVvdXRcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgICBjYWxsYmFjaygndGltZW91dCcsIG51bGwpO1xuICAgIH1cbn07XG5cbi8qKlxuICogdW5sb2FkQWRVbml0XG4gKlxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS51bmxvYWRBZFVuaXQgPSBmdW5jdGlvbiB1bmxvYWRBZFVuaXQoKSB7XG4gICAgJHVubG9hZFByZXZpb3VzQWRVbml0LmNhbGwodGhpcyk7XG59O1xuXG4vKipcbiAqIGdldElEIHdpbGwgcmV0dXJuIHRoZSB1bmlxdWUgaWRcbiAqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmdldElEID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbn07XG5cblxuLyoqXG4gKiAkcmVtb3ZlRWxcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cbmZ1bmN0aW9uICRyZW1vdmVFbChrZXkpIHtcbiAgICB2YXIgZWwgPSB0aGlzW2tleV07XG4gICAgaWYgKGVsKSB7XG4gICAgICAgIGVsLnJlbW92ZSgpO1xuICAgICAgICBkZWxldGUgdGhpc1trZXldO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gJGFkRGVzdHJveWVkKCkge1xuICAgICRyZW1vdmVBZEVsZW1lbnRzLmNhbGwodGhpcyk7XG4gICAgZGVsZXRlIHRoaXMuX2FkVW5pdDtcbn1cblxuZnVuY3Rpb24gJHVubG9hZFByZXZpb3VzQWRVbml0KCkge1xuICAgICRyZW1vdmVBZEVsZW1lbnRzLmNhbGwodGhpcyk7XG4gICAgJGRlc3Ryb3lBZFVuaXQuY2FsbCh0aGlzKTtcbn1cblxuZnVuY3Rpb24gJHJlbW92ZUFkRWxlbWVudHMoKSB7XG4gICAgJHJlbW92ZUVsLmNhbGwodGhpcywgJ19mcmFtZScpO1xuICAgICRkZXN0cm95TG9hZExpc3RlbmVyLmNhbGwodGhpcyk7XG59XG5cbi8qKlxuICogJGRlc3Ryb3lMb2FkTGlzdGVuZXJcbiAqXG4gKi9cbmZ1bmN0aW9uICRkZXN0cm95TG9hZExpc3RlbmVyKCkge1xuICAgIGlmICh0aGlzLl9vbkxvYWQpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLl9vbkxvYWQpO1xuICAgICAgICB1dGlscy5jbGVhckNhbGxiYWNrVGltZW91dCh0aGlzLl9vbkxvYWQpO1xuICAgICAgICBkZWxldGUgdGhpcy5fb25Mb2FkO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiAkZGVzdHJveUFkVW5pdCgpIHtcbiAgICBpZiAodGhpcy5fYWRVbml0KSB7XG4gICAgICAgIHRoaXMuX2FkVW5pdC5zdG9wQWQoKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2FkVW5pdDtcbiAgICB9XG59XG5cbi8qKlxuICogJHRocm93SWZEZXN0cm95ZWRcbiAqXG4gKi9cbmZ1bmN0aW9uICR0aHJvd0lmRGVzdHJveWVkKCkge1xuICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yICgnVlBBSURIVE1MNUNsaWVudCBhbHJlYWR5IGRlc3Ryb3llZCEnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldE9yaWdpbigpIHtcbiAgICBpZiggd2luZG93LmxvY2F0aW9uLm9yaWdpbiApIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArXG4gICAgICAgICAgICAod2luZG93LmxvY2F0aW9uLnBvcnQgPyAnOicgKyB3aW5kb3cubG9jYXRpb24ucG9ydDogJycpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREhUTUw1Q2xpZW50O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFN1YnNjcmliZXIoKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSB7fTtcbn1cblxuU3Vic2NyaWJlci5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50TmFtZSwgY29udGV4dCkge1xuICAgIGlmICghdGhpcy5pc0hhbmRsZXJBdHRhY2hlZChoYW5kbGVyLCBldmVudE5hbWUpKSB7XG4gICAgICAgIHRoaXMuZ2V0KGV2ZW50TmFtZSkucHVzaCh7aGFuZGxlcjogaGFuZGxlciwgY29udGV4dDogY29udGV4dCwgZXZlbnROYW1lOiBldmVudE5hbWV9KTtcbiAgICB9XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50TmFtZSkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSB0aGlzLmdldChldmVudE5hbWUpLmZpbHRlcihmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICByZXR1cm4gaGFuZGxlciAhPT0gc3Vic2NyaWJlci5oYW5kbGVyO1xuICAgIH0pO1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmVBbGwgPSBmdW5jdGlvbiB1bnN1YnNjcmliZUFsbCgpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IHt9O1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgc3Vic2NyaWJlcnMgPSB0aGlzLmdldChldmVudE5hbWUpXG4gICAgICAgIC5jb25jYXQodGhpcy5nZXQoJyonKSk7XG5cbiAgICBzdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoYXQuaXNIYW5kbGVyQXR0YWNoZWQoc3Vic2NyaWJlci5oYW5kbGVyLCBzdWJzY3JpYmVyLmV2ZW50TmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmhhbmRsZXIuY2FsbChzdWJzY3JpYmVyLmNvbnRleHQsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnRyaWdnZXJTeW5jID0gZnVuY3Rpb24oZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgdmFyIHN1YnNjcmliZXJzID0gdGhpcy5nZXQoZXZlbnROYW1lKVxuICAgICAgICAuY29uY2F0KHRoaXMuZ2V0KCcqJykpO1xuXG4gICAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBzdWJzY3JpYmVyLmhhbmRsZXIuY2FsbChzdWJzY3JpYmVyLmNvbnRleHQsIGRhdGEpO1xuICAgIH0pO1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGV2ZW50TmFtZSkge1xuICAgIGlmICghdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXSkge1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdID0gW107XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdO1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUuaXNIYW5kbGVyQXR0YWNoZWQgPSBmdW5jdGlvbiBpc0hhbmRsZXJBdHRhY2hlZChoYW5kbGVyLCBldmVudE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXQoZXZlbnROYW1lKS5zb21lKGZ1bmN0aW9uKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIgPT09IHN1YnNjcmliZXIuaGFuZGxlcjtcbiAgICB9KVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdWJzY3JpYmVyO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogbm9vcCBhIGVtcHR5IGZ1bmN0aW9uXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vKipcbiAqIHZhbGlkYXRlIGlmIGlzIG5vdCB2YWxpZGF0ZSB3aWxsIHJldHVybiBhbiBFcnJvciB3aXRoIHRoZSBtZXNzYWdlXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBpc1ZhbGlkXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZShpc1ZhbGlkLCBtZXNzYWdlKSB7XG4gICAgcmV0dXJuIGlzVmFsaWQgPyBudWxsIDogbmV3IEVycm9yKG1lc3NhZ2UpO1xufVxuXG52YXIgdGltZW91dHMgPSB7fTtcbi8qKlxuICogY2xlYXJDYWxsYmFja1RpbWVvdXRcbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIGhhbmRsZXIgdG8gcmVtb3ZlXG4gKi9cbmZ1bmN0aW9uIGNsZWFyQ2FsbGJhY2tUaW1lb3V0KGZ1bmMpIHtcbiAgICB2YXIgdGltZW91dCA9IHRpbWVvdXRzW2Z1bmNdO1xuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgZGVsZXRlIHRpbWVvdXRzW2Z1bmNdO1xuICAgIH1cbn1cblxuLyoqXG4gKiBjYWxsYmFja1RpbWVvdXQgaWYgdGhlIG9uU3VjY2VzcyBpcyBub3QgY2FsbGVkIGFuZCByZXR1cm5zIHRydWUgaW4gdGhlIHRpbWVsaW1pdCB0aGVuIG9uVGltZW91dCB3aWxsIGJlIGNhbGxlZFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lclxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25TdWNjZXNzXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblRpbWVvdXRcbiAqL1xuZnVuY3Rpb24gY2FsbGJhY2tUaW1lb3V0KHRpbWVyLCBvblN1Y2Nlc3MsIG9uVGltZW91dCkge1xuICAgIHZhciBjYWxsYmFjaywgdGltZW91dDtcblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25TdWNjZXNzID0gbm9vcDtcbiAgICAgICAgZGVsZXRlIHRpbWVvdXRbY2FsbGJhY2tdO1xuICAgICAgICBvblRpbWVvdXQoKTtcbiAgICB9LCB0aW1lcik7XG5cbiAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVE9ETyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50c1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkL3dpa2kvT3B0aW1pemF0aW9uLWtpbGxlcnMjMzItbGVha2luZy1hcmd1bWVudHNcbiAgICAgICAgaWYgKG9uU3VjY2Vzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICBjbGVhckNhbGxiYWNrVGltZW91dChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdGltZW91dHNbY2FsbGJhY2tdID0gdGltZW91dDtcblxuICAgIHJldHVybiBjYWxsYmFjaztcbn1cblxuXG4vKipcbiAqIGNyZWF0ZUVsZW1lbnRJbkVsXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnTmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRJbkVsKHBhcmVudCwgdGFnTmFtZSwgaWQpIHtcbiAgICB2YXIgbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICBpZiAoaWQpIG5FbC5pZCA9IGlkO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuRWwpO1xuICAgIHJldHVybiBuRWw7XG59XG5cbi8qKlxuICogY3JlYXRlSWZyYW1lV2l0aENvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZW1wbGF0ZSBzaW1wbGUgdGVtcGxhdGUgdXNpbmcge3t2YXJ9fVxuICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQocGFyZW50LCB0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIHZhciBpZnJhbWUgPSBjcmVhdGVJZnJhbWUocGFyZW50LCBudWxsLCBkYXRhLnpJbmRleCk7XG4gICAgaWYgKCFzZXRJZnJhbWVDb250ZW50KGlmcmFtZSwgc2ltcGxlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpKSkgcmV0dXJuO1xuICAgIHJldHVybiBpZnJhbWU7XG59XG5cbi8qKlxuICogY3JlYXRlSWZyYW1lXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUlmcmFtZShwYXJlbnQsIHVybCwgekluZGV4KSB7XG4gICAgdmFyIG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIG5FbC5zcmMgPSB1cmwgfHwgJ2Fib3V0OmJsYW5rJztcbiAgICBuRWwubWFyZ2luV2lkdGggPSAnMCc7XG4gICAgbkVsLm1hcmdpbkhlaWdodCA9ICcwJztcbiAgICBuRWwuZnJhbWVCb3JkZXIgPSAnMCc7XG4gICAgbkVsLndpZHRoID0gJzEwMCUnO1xuICAgIG5FbC5oZWlnaHQgPSAnMTAwJSc7XG4gICAgc2V0RnVsbFNpemVTdHlsZShuRWwpO1xuXG4gICAgaWYoekluZGV4KXtcbiAgICAgICAgbkVsLnN0eWxlLnpJbmRleCA9IHpJbmRleDtcbiAgICB9XG5cbiAgICBuRWwuc2V0QXR0cmlidXRlKCdTQ1JPTExJTkcnLCdOTycpO1xuICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobkVsKTtcbiAgICByZXR1cm4gbkVsO1xufVxuXG5mdW5jdGlvbiBzZXRGdWxsU2l6ZVN0eWxlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgZWxlbWVudC5zdHlsZS50b3AgPSAnMCc7XG4gICAgZWxlbWVudC5zdHlsZS5tYXJnaW4gPSAnMHB4JztcbiAgICBlbGVtZW50LnN0eWxlLnBhZGRpbmcgPSAnMHB4JztcbiAgICBlbGVtZW50LnN0eWxlLmJvcmRlciA9ICdub25lJztcbiAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xufVxuXG4vKipcbiAqIHNpbXBsZVRlbXBsYXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICovXG5mdW5jdGlvbiBzaW1wbGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgPyBKU09OLnN0cmluZ2lmeShkYXRhW2tleV0pIDogZGF0YVtrZXldO1xuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UobmV3IFJlZ0V4cCgne3snICsga2V5ICsgJ319JywgJ2cnKSwgdmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn1cblxuLyoqXG4gKiBzZXRJZnJhbWVDb250ZW50XG4gKlxuICogQHBhcmFtIHtIVE1MSWZyYW1lRWxlbWVudH0gaWZyYW1lRWxcbiAqIEBwYXJhbSBjb250ZW50XG4gKi9cbmZ1bmN0aW9uIHNldElmcmFtZUNvbnRlbnQoaWZyYW1lRWwsIGNvbnRlbnQpIHtcbiAgICB2YXIgaWZyYW1lRG9jID0gaWZyYW1lRWwuY29udGVudFdpbmRvdyAmJiBpZnJhbWVFbC5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICAgIGlmICghaWZyYW1lRG9jKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZnJhbWVEb2Mud3JpdGUoY29udGVudCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuXG4vKipcbiAqIGV4dGVuZCBvYmplY3Qgd2l0aCBrZXlzIGZyb20gYW5vdGhlciBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdG9FeHRlbmRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmcm9tU291cmNlXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCh0b0V4dGVuZCwgZnJvbVNvdXJjZSkge1xuICAgIE9iamVjdC5rZXlzKGZyb21Tb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHRvRXh0ZW5kW2tleV0gPSBmcm9tU291cmNlW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIHRvRXh0ZW5kO1xufVxuXG5cbi8qKlxuICogdW5pcXVlIHdpbGwgY3JlYXRlIGEgdW5pcXVlIHN0cmluZyBldmVyeXRpbWUgaXMgY2FsbGVkLCBzZXF1ZW50aWFsbHkgYW5kIHByZWZpeGVkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuICovXG5mdW5jdGlvbiB1bmlxdWUocHJlZml4KSB7XG4gICAgdmFyIGNvdW50ID0gLTE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdfJyArICgrK2NvdW50KTtcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBub29wOiBub29wLFxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZSxcbiAgICBjbGVhckNhbGxiYWNrVGltZW91dDogY2xlYXJDYWxsYmFja1RpbWVvdXQsXG4gICAgY2FsbGJhY2tUaW1lb3V0OiBjYWxsYmFja1RpbWVvdXQsXG4gICAgY3JlYXRlRWxlbWVudEluRWw6IGNyZWF0ZUVsZW1lbnRJbkVsLFxuICAgIGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50OiBjcmVhdGVJZnJhbWVXaXRoQ29udGVudCxcbiAgICBjcmVhdGVJZnJhbWU6IGNyZWF0ZUlmcmFtZSxcbiAgICBzZXRGdWxsU2l6ZVN0eWxlOiBzZXRGdWxsU2l6ZVN0eWxlLFxuICAgIHNpbXBsZVRlbXBsYXRlOiBzaW1wbGVUZW1wbGF0ZSxcbiAgICBzZXRJZnJhbWVDb250ZW50OiBzZXRJZnJhbWVDb250ZW50LFxuICAgIGV4dGVuZDogZXh0ZW5kLFxuICAgIHVuaXF1ZTogdW5pcXVlXG59O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBJbkxpbmUgPSByZXF1aXJlKCcuL0luTGluZScpO1xudmFyIFdyYXBwZXIgPSByZXF1aXJlKCcuL1dyYXBwZXInKTtcblxuZnVuY3Rpb24gQWQoYWRKVHJlZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQWQpKSB7XG4gICAgcmV0dXJuIG5ldyBBZChhZEpUcmVlKTtcbiAgfVxuICB0aGlzLmluaXRpYWxpemUoYWRKVHJlZSk7XG59XG5cbkFkLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oYWRKVHJlZSkge1xuICB0aGlzLmlkID0gYWRKVHJlZS5hdHRyKCdpZCcpO1xuICB0aGlzLnNlcXVlbmNlID0gYWRKVHJlZS5hdHRyKCdzZXF1ZW5jZScpO1xuXG4gIGlmKGFkSlRyZWUuaW5MaW5lKSB7XG4gICAgdGhpcy5pbkxpbmUgPSBuZXcgSW5MaW5lKGFkSlRyZWUuaW5MaW5lKTtcbiAgfVxuXG4gIGlmKGFkSlRyZWUud3JhcHBlcil7XG4gICAgdGhpcy53cmFwcGVyID0gbmV3IFdyYXBwZXIoYWRKVHJlZS53cmFwcGVyKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBZDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBUcmFja2luZ0V2ZW50ID0gcmVxdWlyZSgnLi9UcmFja2luZ0V2ZW50Jyk7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cblxuZnVuY3Rpb24gQ29tcGFuaW9uKGNvbXBhbmlvbkpUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBDb21wYW5pb24pKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wYW5pb24oY29tcGFuaW9uSlRyZWUpO1xuICB9XG5cbiAgbG9nZ2VyLmluZm8gKFwiPENvbXBhbmlvbj4gZm91bmQgY29tcGFuaW9uIGFkXCIpO1xuICBsb2dnZXIuZGVidWcgKFwiPENvbXBhbmlvbj4gIGNvbXBhbmlvbkpUcmVlOlwiLCBjb21wYW5pb25KVHJlZSk7XG5cbiAgLy9SZXF1aXJlZCBFbGVtZW50c1xuICB0aGlzLmNyZWF0aXZlVHlwZSA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLnN0YXRpY1Jlc291cmNlLCAnY3JlYXRpdmVUeXBlJyk7XG4gIHRoaXMuc3RhdGljUmVzb3VyY2UgPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuc3RhdGljUmVzb3VyY2UpO1xuXG4gIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+ICBjcmVhdGl2ZVR5cGU6IFwiICsgdGhpcy5jcmVhdGl2ZVR5cGUpO1xuICBsb2dnZXIuaW5mbyAoXCI8Q29tcGFuaW9uPiAgc3RhdGljUmVzb3VyY2U6IFwiICsgdGhpcy5zdGF0aWNSZXNvdXJjZSk7XG5cbiAgLy8gV2VpcmQgYnVnIHdoZW4gdGhlIEpYT04gdHJlZSBpcyBidWlsdCBpdCBkb2Vzbid0IGhhbmRsZSBjYXNpbmcgcHJvcGVybHkgaW4gdGhpcyBzaXR1YXRpb24uLi5cbiAgdmFyIGh0bWxSZXNvdXJjZSA9IG51bGw7XG4gIGlmICh4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuSFRNTFJlc291cmNlKSkge1xuICAgIGh0bWxSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5IVE1MUmVzb3VyY2UpO1xuICB9IGVsc2UgaWYgKHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5oVE1MUmVzb3VyY2UpKSB7XG4gICAgaHRtbFJlc291cmNlID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmhUTUxSZXNvdXJjZSk7XG4gIH1cblxuICBpZiAoaHRtbFJlc291cmNlICE9PSBudWxsKVxuICB7XG4gICAgbG9nZ2VyLmluZm8gKFwiPENvbXBhbmlvbj4gZm91bmQgaHRtbCByZXNvdXJjZVwiLCBodG1sUmVzb3VyY2UpO1xuICB9XG5cbiAgdGhpcy5odG1sUmVzb3VyY2UgPSBodG1sUmVzb3VyY2U7XG5cbiAgdmFyIGlmcmFtZVJlc291cmNlID0gbnVsbDtcbiAgaWYgKHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5JRnJhbWVSZXNvdXJjZSkpIHtcbiAgICBpZnJhbWVSZXNvdXJjZSA9IHhtbC5rZXlWYWx1ZShjb21wYW5pb25KVHJlZS5JRnJhbWVSZXNvdXJjZSk7XG4gIH0gZWxzZSBpZiAoeG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmlGcmFtZXJlc291cmNlKSkge1xuICAgIGlmcmFtZVJlc291cmNlID0geG1sLmtleVZhbHVlKGNvbXBhbmlvbkpUcmVlLmlGcmFtZXJlc291cmNlKTtcbiAgfVxuXG4gIGlmIChpZnJhbWVSZXNvdXJjZSAhPT0gbnVsbClcbiAge1xuICAgIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+IGZvdW5kIGlmcmFtZSByZXNvdXJjZVwiLCBpZnJhbWVSZXNvdXJjZSk7XG4gIH1cblxuICB0aGlzLmlmcmFtZVJlc291cmNlID0gaWZyYW1lUmVzb3VyY2U7XG5cbiAgLy9PcHRpb25hbCBmaWVsZHNcbiAgdGhpcy5pZCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnaWQnKTtcbiAgdGhpcy53aWR0aCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnd2lkdGgnKTtcbiAgdGhpcy5oZWlnaHQgPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2hlaWdodCcpO1xuICB0aGlzLmV4cGFuZGVkV2lkdGggPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ2V4cGFuZGVkV2lkdGgnKTtcbiAgdGhpcy5leHBhbmRlZEhlaWdodCA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnZXhwYW5kZWRIZWlnaHQnKTtcbiAgdGhpcy5zY2FsYWJsZSA9IHhtbC5hdHRyKGNvbXBhbmlvbkpUcmVlLCAnc2NhbGFibGUnKTtcbiAgdGhpcy5tYWludGFpbkFzcGVjdFJhdGlvID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdtYWludGFpbkFzcGVjdFJhdGlvJyk7XG4gIHRoaXMubWluU3VnZ2VzdGVkRHVyYXRpb24gPSB4bWwuYXR0cihjb21wYW5pb25KVHJlZSwgJ21pblN1Z2dlc3RlZER1cmF0aW9uJyk7XG4gIHRoaXMuYXBpRnJhbWV3b3JrID0geG1sLmF0dHIoY29tcGFuaW9uSlRyZWUsICdhcGlGcmFtZXdvcmsnKTtcbiAgdGhpcy5jb21wYW5pb25DbGlja1Rocm91Z2ggPSB4bWwua2V5VmFsdWUoY29tcGFuaW9uSlRyZWUuY29tcGFuaW9uQ2xpY2tUaHJvdWdoKTtcbiAgdGhpcy50cmFja2luZ0V2ZW50cyA9IHBhcnNlVHJhY2tpbmdFdmVudHMoY29tcGFuaW9uSlRyZWUudHJhY2tpbmdFdmVudHMgJiYgY29tcGFuaW9uSlRyZWUudHJhY2tpbmdFdmVudHMudHJhY2tpbmcpO1xuXG4gIGxvZ2dlci5pbmZvIChcIjxDb21wYW5pb24+ICBjb21wYW5pb25DbGlja1Rocm91Z2g6IFwiICsgdGhpcy5jb21wYW5pb25DbGlja1Rocm91Z2gpO1xuXG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBwYXJzZVRyYWNraW5nRXZlbnRzKHRyYWNraW5nRXZlbnRzKSB7XG4gICAgdmFyIHRyYWNraW5ncyA9IFtdO1xuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKHRyYWNraW5nRXZlbnRzKSkge1xuICAgICAgdHJhY2tpbmdFdmVudHMgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0V2ZW50cykgPyB0cmFja2luZ0V2ZW50cyA6IFt0cmFja2luZ0V2ZW50c107XG4gICAgICB0cmFja2luZ0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFja2luZ0RhdGEpIHtcbiAgICAgICAgdHJhY2tpbmdzLnB1c2gobmV3IFRyYWNraW5nRXZlbnQodHJhY2tpbmdEYXRhKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYWNraW5ncztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBhbmlvbjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBMaW5lYXIgPSByZXF1aXJlKCcuL0xpbmVhcicpO1xudmFyIENvbXBhbmlvbiA9IHJlcXVpcmUoJy4vQ29tcGFuaW9uJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBDcmVhdGl2ZShjcmVhdGl2ZUpUcmVlKSB7XG4gIGlmKCEodGhpcyBpbnN0YW5jZW9mIENyZWF0aXZlKSkge1xuICAgIHJldHVybiBuZXcgQ3JlYXRpdmUoY3JlYXRpdmVKVHJlZSk7XG4gIH1cblxuICB0aGlzLmlkID0gY3JlYXRpdmVKVHJlZS5hdHRyKCdpZCcpO1xuICB0aGlzLnNlcXVlbmNlID0gY3JlYXRpdmVKVHJlZS5hdHRyKCdzZXF1ZW5jZScpO1xuICB0aGlzLmFkSWQgPSBjcmVhdGl2ZUpUcmVlLmF0dHIoJ2FkSWQnKTtcbiAgdGhpcy5hcGlGcmFtZXdvcmsgPSBjcmVhdGl2ZUpUcmVlLmF0dHIoJ2FwaUZyYW1ld29yaycpO1xuXG4gIGlmKGNyZWF0aXZlSlRyZWUubGluZWFyKSB7XG4gICAgdGhpcy5saW5lYXIgPSBuZXcgTGluZWFyKGNyZWF0aXZlSlRyZWUubGluZWFyKTtcbiAgfVxuXG4gIGlmIChjcmVhdGl2ZUpUcmVlLmNvbXBhbmlvbkFkcykge1xuICAgIHZhciBjb21wYW5pb25zID0gW107XG4gICAgdmFyIGNvbXBhbmlvbkFkcyA9IGNyZWF0aXZlSlRyZWUuY29tcGFuaW9uQWRzICYmIGNyZWF0aXZlSlRyZWUuY29tcGFuaW9uQWRzLmNvbXBhbmlvbjtcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChjb21wYW5pb25BZHMpKSB7XG4gICAgICBjb21wYW5pb25BZHMgPSB1dGlsaXRpZXMuaXNBcnJheShjb21wYW5pb25BZHMpID8gY29tcGFuaW9uQWRzIDogW2NvbXBhbmlvbkFkc107XG4gICAgICBjb21wYW5pb25BZHMuZm9yRWFjaChmdW5jdGlvbiAoY29tcGFuaW9uRGF0YSkge1xuICAgICAgICBjb21wYW5pb25zLnB1c2gobmV3IENvbXBhbmlvbihjb21wYW5pb25EYXRhKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5jb21wYW5pb25BZHMgPSBjb21wYW5pb25zO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIGF0IHRoZSBjcmVhdGl2ZS5cbiAqL1xuQ3JlYXRpdmUucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24oKXtcbiAgaWYodGhpcy5saW5lYXIpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lYXIuaXNTdXBwb3J0ZWQoKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuQ3JlYXRpdmUucGFyc2VDcmVhdGl2ZXMgPSBmdW5jdGlvbiBwYXJzZUNyZWF0aXZlcyhjcmVhdGl2ZXNKVHJlZSkge1xuICB2YXIgY3JlYXRpdmVzID0gW107XG4gIHZhciBjcmVhdGl2ZXNEYXRhO1xuICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChjcmVhdGl2ZXNKVHJlZSkgJiYgdXRpbGl0aWVzLmlzRGVmaW5lZChjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZSkpIHtcbiAgICBjcmVhdGl2ZXNEYXRhID0gdXRpbGl0aWVzLmlzQXJyYXkoY3JlYXRpdmVzSlRyZWUuY3JlYXRpdmUpID8gY3JlYXRpdmVzSlRyZWUuY3JlYXRpdmUgOiBbY3JlYXRpdmVzSlRyZWUuY3JlYXRpdmVdO1xuICAgIGNyZWF0aXZlc0RhdGEuZm9yRWFjaChmdW5jdGlvbiAoY3JlYXRpdmUpIHtcbiAgICAgIGNyZWF0aXZlcy5wdXNoKG5ldyBDcmVhdGl2ZShjcmVhdGl2ZSkpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBjcmVhdGl2ZXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENyZWF0aXZlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG52YXIgQ3JlYXRpdmUgPSByZXF1aXJlKCcuL0NyZWF0aXZlJyk7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbmZ1bmN0aW9uIEluTGluZShpbmxpbmVKVHJlZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgSW5MaW5lKSkge1xuICAgIHJldHVybiBuZXcgSW5MaW5lKGlubGluZUpUcmVlKTtcbiAgfVxuXG4gIC8vUmVxdWlyZWQgRmllbGRzXG4gIHRoaXMuYWRUaXRsZSA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5hZFRpdGxlKTtcbiAgdGhpcy5hZFN5c3RlbSA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5hZFN5c3RlbSk7XG4gIHRoaXMuaW1wcmVzc2lvbnMgPSB2YXN0VXRpbC5wYXJzZUltcHJlc3Npb25zKGlubGluZUpUcmVlLmltcHJlc3Npb24pO1xuICB0aGlzLmNyZWF0aXZlcyA9IENyZWF0aXZlLnBhcnNlQ3JlYXRpdmVzKGlubGluZUpUcmVlLmNyZWF0aXZlcyk7XG5cbiAgLy9PcHRpb25hbCBGaWVsZHNcbiAgdGhpcy5kZXNjcmlwdGlvbiA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5kZXNjcmlwdGlvbik7XG4gIHRoaXMuYWR2ZXJ0aXNlciA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5hZHZlcnRpc2VyKTtcbiAgdGhpcy5zdXJ2ZXlzID0gcGFyc2VTdXJ2ZXlzKGlubGluZUpUcmVlLnN1cnZleSk7XG4gIHRoaXMuZXJyb3IgPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuZXJyb3IpO1xuICB0aGlzLnByaWNpbmcgPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUucHJpY2luZyk7XG4gIHRoaXMuZXh0ZW5zaW9ucyA9IGlubGluZUpUcmVlLmV4dGVuc2lvbnM7XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBwYXJzZVN1cnZleXMoaW5saW5lU3VydmV5cykge1xuICAgIGlmIChpbmxpbmVTdXJ2ZXlzKSB7XG4gICAgICByZXR1cm4gdXRpbGl0aWVzLnRyYW5zZm9ybUFycmF5KHV0aWxpdGllcy5pc0FycmF5KGlubGluZVN1cnZleXMpID8gaW5saW5lU3VydmV5cyA6IFtpbmxpbmVTdXJ2ZXlzXSwgZnVuY3Rpb24gKHN1cnZleSkge1xuICAgICAgICBpZih1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhzdXJ2ZXkua2V5VmFsdWUpKXtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXJpOiBzdXJ2ZXkua2V5VmFsdWUsXG4gICAgICAgICAgICB0eXBlOiBzdXJ2ZXkuYXR0cigndHlwZScpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgYWxsIHRoZSBjcmVhdGl2ZXMuXG4gKi9cbkluTGluZS5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpe1xuICB2YXIgaSxsZW47XG5cbiAgaWYodGhpcy5jcmVhdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yKGkgPSAwLCBsZW4gPSB0aGlzLmNyZWF0aXZlcy5sZW5ndGg7IGk8IGxlbjsgaSs9MSl7XG4gICAgaWYoIXRoaXMuY3JlYXRpdmVzW2ldLmlzU3VwcG9ydGVkKCkpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW5MaW5lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHJhY2tpbmdFdmVudCA9IHJlcXVpcmUoJy4vVHJhY2tpbmdFdmVudCcpO1xudmFyIE1lZGlhRmlsZSA9IHJlcXVpcmUoJy4vTWVkaWFGaWxlJyk7XG52YXIgVmlkZW9DbGlja3MgPSByZXF1aXJlKCcuL1ZpZGVvQ2xpY2tzJyk7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgcGFyc2VycyA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xuXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cblxuZnVuY3Rpb24gTGluZWFyKGxpbmVhckpUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBMaW5lYXIpKSB7XG4gICAgcmV0dXJuIG5ldyBMaW5lYXIobGluZWFySlRyZWUpO1xuICB9XG5cbiAgLy9SZXF1aXJlZCBFbGVtZW50c1xuICB0aGlzLmR1cmF0aW9uID0gcGFyc2Vycy5kdXJhdGlvbih4bWwua2V5VmFsdWUobGluZWFySlRyZWUuZHVyYXRpb24pKTtcbiAgdGhpcy5tZWRpYUZpbGVzID0gcGFyc2VNZWRpYUZpbGVzKGxpbmVhckpUcmVlLm1lZGlhRmlsZXMgJiYgbGluZWFySlRyZWUubWVkaWFGaWxlcy5tZWRpYUZpbGUpO1xuXG4gIC8vT3B0aW9uYWwgZmllbGRzXG4gIHRoaXMudHJhY2tpbmdFdmVudHMgPSBwYXJzZVRyYWNraW5nRXZlbnRzKGxpbmVhckpUcmVlLnRyYWNraW5nRXZlbnRzICYmIGxpbmVhckpUcmVlLnRyYWNraW5nRXZlbnRzLnRyYWNraW5nLCB0aGlzLmR1cmF0aW9uKTtcbiAgdGhpcy5za2lwb2Zmc2V0ID0gcGFyc2Vycy5vZmZzZXQoeG1sLmF0dHIobGluZWFySlRyZWUsICdza2lwb2Zmc2V0JyksIHRoaXMuZHVyYXRpb24pO1xuXG4gIGlmIChsaW5lYXJKVHJlZS52aWRlb0NsaWNrcykge1xuICAgIHRoaXMudmlkZW9DbGlja3MgPSBuZXcgVmlkZW9DbGlja3MobGluZWFySlRyZWUudmlkZW9DbGlja3MpO1xuICB9XG5cbiAgaWYobGluZWFySlRyZWUuYWRQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5hZFBhcmFtZXRlcnMgPSB4bWwua2V5VmFsdWUobGluZWFySlRyZWUuYWRQYXJhbWV0ZXJzKTtcblxuICAgIGlmKHhtbC5hdHRyKGxpbmVhckpUcmVlLmFkUGFyYW1ldGVycywgJ3htbEVuY29kZWQnKSkge1xuICAgICAgdGhpcy5hZFBhcmFtZXRlcnMgPSB4bWwuZGVjb2RlKHRoaXMuYWRQYXJhbWV0ZXJzKTtcbiAgICB9XG4gIH1cblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHBhcnNlVHJhY2tpbmdFdmVudHModHJhY2tpbmdFdmVudHMsIGR1cmF0aW9uKSB7XG4gICAgdmFyIHRyYWNraW5ncyA9IFtdO1xuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKHRyYWNraW5nRXZlbnRzKSkge1xuICAgICAgdHJhY2tpbmdFdmVudHMgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0V2ZW50cykgPyB0cmFja2luZ0V2ZW50cyA6IFt0cmFja2luZ0V2ZW50c107XG4gICAgICB0cmFja2luZ0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFja2luZ0RhdGEpIHtcbiAgICAgICAgdHJhY2tpbmdzLnB1c2gobmV3IFRyYWNraW5nRXZlbnQodHJhY2tpbmdEYXRhLCBkdXJhdGlvbikpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cmFja2luZ3M7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZU1lZGlhRmlsZXMobWVkaWFGaWxlc0p4b25UcmVlKSB7XG4gICAgdmFyIG1lZGlhRmlsZXMgPSBbXTtcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChtZWRpYUZpbGVzSnhvblRyZWUpKSB7XG4gICAgICBtZWRpYUZpbGVzSnhvblRyZWUgPSB1dGlsaXRpZXMuaXNBcnJheShtZWRpYUZpbGVzSnhvblRyZWUpID8gbWVkaWFGaWxlc0p4b25UcmVlIDogW21lZGlhRmlsZXNKeG9uVHJlZV07XG5cbiAgICAgIG1lZGlhRmlsZXNKeG9uVHJlZS5mb3JFYWNoKGZ1bmN0aW9uIChtZkRhdGEpIHtcbiAgICAgICAgbWVkaWFGaWxlcy5wdXNoKG5ldyBNZWRpYUZpbGUobWZEYXRhKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG1lZGlhRmlsZXM7XG4gIH1cbn1cblxuLyoqXG4gKiBNdXN0IHJldHVybiB0cnVlIGlmIGF0IGxlYXN0IG9uZSBvZiB0aGUgTWVkaWFGaWxlcycgdHlwZSBpcyBzdXBwb3J0ZWRcbiAqL1xuTGluZWFyLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGksIGxlbjtcbiAgZm9yKGk9MCwgbGVuPXRoaXMubWVkaWFGaWxlcy5sZW5ndGg7IGk8bGVuOyBpKz0xKSB7XG4gICAgaWYodGhpcy5tZWRpYUZpbGVzW2ldLmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTGluZWFyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG5cbnZhciBhdHRyaWJ1dGVzTGlzdCA9IFtcbiAgLy9SZXF1aXJlZCBhdHRyaWJ1dGVzXG4gICdkZWxpdmVyeScsXG4gICd0eXBlJyxcbiAgJ3dpZHRoJyxcbiAgJ2hlaWdodCcsXG4gIC8vT3B0aW9uYWwgYXR0cmlidXRlc1xuICAnY29kZWMnLFxuICAnaWQnLFxuICAnYml0cmF0ZScsXG4gICdtaW5CaXRyYXRlJyxcbiAgJ21heEJpdHJhdGUnLFxuICAnc2NhbGFibGUnLFxuICAnbWFpbnRhaW5Bc3BlY3RSYXRpbycsXG4gICdhcGlGcmFtZXdvcmsnXG5dO1xuXG5mdW5jdGlvbiBNZWRpYUZpbGUobWVkaWFGaWxlSlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1lZGlhRmlsZSkpIHtcbiAgICByZXR1cm4gbmV3IE1lZGlhRmlsZShtZWRpYUZpbGVKVHJlZSk7XG4gIH1cblxuICAvL1JlcXVpcmVkIGF0dHJpYnV0ZXNcbiAgdGhpcy5zcmMgPSB4bWwua2V5VmFsdWUobWVkaWFGaWxlSlRyZWUpO1xuXG4gIGZvcih2YXIgeD0wOyB4PGF0dHJpYnV0ZXNMaXN0Lmxlbmd0aDsgeCsrKSB7XG4gICAgdmFyIGF0dHJpYnV0ZSA9IGF0dHJpYnV0ZXNMaXN0W3hdO1xuICAgIHRoaXNbYXR0cmlidXRlXSA9IG1lZGlhRmlsZUpUcmVlLmF0dHIoYXR0cmlidXRlKTtcbiAgfVxufVxuXG5NZWRpYUZpbGUucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24oKXtcbiAgaWYodmFzdFV0aWwuaXNWUEFJRCh0aGlzKSkge1xuICAgIHJldHVybiAhIXZhc3RVdGlsLmZpbmRTdXBwb3J0ZWRWUEFJRFRlY2godGhpcy50eXBlKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYUZpbGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBwYXJzZXJzID0gcmVxdWlyZSgnLi9wYXJzZXJzJyk7XG5cbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxuZnVuY3Rpb24gVHJhY2tpbmdFdmVudCh0cmFja2luZ0pUcmVlLCBkdXJhdGlvbikge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVHJhY2tpbmdFdmVudCkpIHtcbiAgICByZXR1cm4gbmV3IFRyYWNraW5nRXZlbnQodHJhY2tpbmdKVHJlZSwgZHVyYXRpb24pO1xuICB9XG5cbiAgdGhpcy5uYW1lID0gdHJhY2tpbmdKVHJlZS5hdHRyKCdldmVudCcpO1xuICB0aGlzLnVyaSA9IHhtbC5rZXlWYWx1ZSh0cmFja2luZ0pUcmVlKTtcblxuICBpZigncHJvZ3Jlc3MnID09PSB0aGlzLm5hbWUpIHtcbiAgICB0aGlzLm9mZnNldCA9IHBhcnNlcnMub2Zmc2V0KHRyYWNraW5nSlRyZWUuYXR0cignb2Zmc2V0JyksIGR1cmF0aW9uKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYWNraW5nRXZlbnQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWQgPSByZXF1aXJlKCcuL0FkJyk7XG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi9WQVNURXJyb3InKTtcbnZhciBWQVNUUmVzcG9uc2UgPSByZXF1aXJlKCcuL1ZBU1RSZXNwb25zZScpO1xudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xuXG52YXIgYXN5bmMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9hc3luYycpO1xudmFyIGh0dHAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9odHRwJykuaHR0cDtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xuXG5mdW5jdGlvbiBWQVNUQ2xpZW50KG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RDbGllbnQpKSB7XG4gICAgcmV0dXJuIG5ldyBWQVNUQ2xpZW50KG9wdGlvbnMpO1xuICB9XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBXUkFQUEVSX0xJTUlUOiA1XG4gIH07XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMuc2V0dGluZ3MgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBvcHRpb25zLCBkZWZhdWx0T3B0aW9ucyk7XG4gIHRoaXMuZXJyb3JVUkxNYWNyb3MgPSBbXTtcbn1cblxuVkFTVENsaWVudC5wcm90b3R5cGUuZ2V0VkFTVFJlc3BvbnNlID0gZnVuY3Rpb24gZ2V0VkFTVFJlc3BvbnNlKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgdmFyIGVycm9yID0gc2FuaXR5Q2hlY2soYWRUYWdVcmwsIGNhbGxiYWNrKTtcbiAgaWYgKGVycm9yKSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgdGhpcy5fZ2V0VkFTVEFkLmJpbmQodGhpcywgYWRUYWdVcmwpLFxuICAgICAgYnVpbGRWQVNUUmVzcG9uc2VcbiAgICBdLFxuICAgIGNhbGxiYWNrKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIGJ1aWxkVkFTVFJlc3BvbnNlKGFkc0NoYWluLCBjYikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB0aGF0Ll9idWlsZFZBU1RSZXNwb25zZShhZHNDaGFpbik7XG4gICAgICBjYihudWxsLCByZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY2IoZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soYWRUYWdVcmwsIGNiKSB7XG4gICAgaWYgKCFhZFRhZ1VybCkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVFJlc3BvbnNlLCBtaXNzaW5nIGFkIHRhZyBVUkwnKTtcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNiKSkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVFJlc3BvbnNlLCBtaXNzaW5nIGNhbGxiYWNrIGZ1bmN0aW9uJyk7XG4gICAgfVxuICB9XG59O1xuXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fZ2V0VkFTVEFkID0gZnVuY3Rpb24gKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgZ2V0QWRXYXRlcmZhbGwoYWRUYWdVcmwsIGZ1bmN0aW9uIChlcnJvciwgdmFzdFRyZWUpIHtcbiAgICB2YXIgd2F0ZXJmYWxsQWRzID0gdmFzdFRyZWUgJiYgdXRpbGl0aWVzLmlzQXJyYXkodmFzdFRyZWUuYWRzKSA/IHZhc3RUcmVlLmFkcyA6IG51bGw7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGF0Ll90cmFja0Vycm9yKGVycm9yLCB3YXRlcmZhbGxBZHMpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yLCB3YXRlcmZhbGxBZHMpO1xuICAgIH1cblxuICAgIGdldEFkKHdhdGVyZmFsbEFkcy5zaGlmdCgpLCBbXSwgd2F0ZXJmYWxsSGFuZGxlcik7XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgZnVuY3Rpb24gd2F0ZXJmYWxsSGFuZGxlcihlcnJvciwgYWRDaGFpbikge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHRoYXQuX3RyYWNrRXJyb3IoZXJyb3IsIGFkQ2hhaW4pO1xuICAgICAgICBpZiAod2F0ZXJmYWxsQWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBnZXRBZCh3YXRlcmZhbGxBZHMuc2hpZnQoKSxbXSwgd2F0ZXJmYWxsSGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2soZXJyb3IsIGFkQ2hhaW4pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBhZENoYWluKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gZ2V0QWRXYXRlcmZhbGwoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3RWYXN0WE1MID0gdGhhdC5fcmVxdWVzdFZBU1RYbWwuYmluZCh0aGF0LCBhZFRhZ1VybCk7XG4gICAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICAgIHJlcXVlc3RWYXN0WE1MLFxuICAgICAgYnVpbGRWYXN0V2F0ZXJmYWxsXG4gICAgXSwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRWYXN0V2F0ZXJmYWxsKHhtbFN0ciwgY2FsbGJhY2spIHtcbiAgICB2YXIgdmFzdFRyZWU7XG4gICAgdHJ5IHtcbiAgICAgIHZhc3RUcmVlID0geG1sLnRvSlhPTlRyZWUoeG1sU3RyKTtcbiAgICAgIGxvZ2dlci5kZWJ1ZyAoXCJidWlsdCBKWE9OVHJlZSBmcm9tIFZBU1QgcmVzcG9uc2U6XCIsIHZhc3RUcmVlKTtcblxuICAgICAgaWYodXRpbGl0aWVzLmlzQXJyYXkodmFzdFRyZWUuYWQpKSB7XG4gICAgICAgIHZhc3RUcmVlLmFkcyA9IHZhc3RUcmVlLmFkO1xuICAgICAgfSBlbHNlIGlmKHZhc3RUcmVlLmFkKXtcbiAgICAgICAgdmFzdFRyZWUuYWRzID0gW3Zhc3RUcmVlLmFkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhc3RUcmVlLmFkcyA9IFtdO1xuICAgICAgfVxuICAgICAgY2FsbGJhY2sodmFsaWRhdGVWQVNUVHJlZSh2YXN0VHJlZSksIHZhc3RUcmVlKTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC5idWlsZFZhc3RXYXRlcmZhbGwsIGVycm9yIHBhcnNpbmcgeG1sXCIsIDEwMCksIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlVkFTVFRyZWUodmFzdFRyZWUpIHtcbiAgICB2YXIgdmFzdFZlcnNpb24gPSB4bWwuYXR0cih2YXN0VHJlZSwgJ3ZlcnNpb24nKTtcblxuICAgIGlmICghdmFzdFRyZWUuYWQpIHtcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKCdvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC52YWxpZGF0ZVZBU1RUcmVlLCBubyBBZCBpbiBWQVNUIHRyZWUnLCAzMDMpO1xuICAgIH1cblxuICAgIGlmICh2YXN0VmVyc2lvbiAmJiAodmFzdFZlcnNpb24gIT0gMyAmJiB2YXN0VmVyc2lvbiAhPSAyKSkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLnZhbGlkYXRlVkFTVFRyZWUsIG5vdCBzdXBwb3J0ZWQgVkFTVCB2ZXJzaW9uIFwiJyArIHZhc3RWZXJzaW9uICsgJ1wiJywgMTAyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFkKGFkVGFnVXJsLCBhZENoYWluLCBjYWxsYmFjaykge1xuICAgIGlmIChhZENoYWluLmxlbmd0aCA+PSB0aGF0LldSQVBQRVJfTElNSVQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5nZXRWQVNUQWQuZ2V0QWQsIHBsYXllcnMgd3JhcHBlciBsaW1pdCByZWFjaGVkICh0aGUgbGltaXQgaXMgXCIgKyB0aGF0LldSQVBQRVJfTElNSVQgKyBcIilcIiwgMzAyKSwgYWRDaGFpbik7XG4gICAgfVxuXG4gICAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICAgIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoYWRUYWdVcmwpKSB7XG4gICAgICAgICAgcmVxdWVzdFZBU1RBZChhZFRhZ1VybCwgbmV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dChudWxsLCBhZFRhZ1VybCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBidWlsZEFkXG4gICAgXSwgZnVuY3Rpb24gKGVycm9yLCBhZCkge1xuICAgICAgaWYgKGFkKSB7XG4gICAgICAgIGFkQ2hhaW4ucHVzaChhZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IsIGFkQ2hhaW4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWQud3JhcHBlcikge1xuICAgICAgICByZXR1cm4gZ2V0QWQoYWQud3JhcHBlci5WQVNUQWRUYWdVUkksIGFkQ2hhaW4sIGNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIGFkQ2hhaW4pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRBZChhZEp4b25UcmVlLCBjYWxsYmFjaykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgYWQgPSBuZXcgQWQoYWRKeG9uVHJlZSk7XG4gICAgICBjYWxsYmFjayh2YWxpZGF0ZUFkKGFkKSwgYWQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLmJ1aWxkQWQsIGVycm9yIHBhcnNpbmcgeG1sJywgMTAwKSwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVBZChhZCkge1xuICAgIHZhciB3cmFwcGVyID0gYWQud3JhcHBlcjtcbiAgICB2YXIgaW5MaW5lID0gYWQuaW5MaW5lO1xuICAgIHZhciBlcnJNc2dQcmVmaXggPSAnb24gVkFTVENsaWVudC5nZXRWQVNUQWQudmFsaWRhdGVBZCwgJztcblxuICAgIGlmIChpbkxpbmUgJiYgd3JhcHBlcikge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoZXJyTXNnUHJlZml4ICtcIkluTGluZSBhbmQgV3JhcHBlciBib3RoIGZvdW5kIG9uIHRoZSBzYW1lIEFkXCIsIDEwMSk7XG4gICAgfVxuXG4gICAgaWYgKCFpbkxpbmUgJiYgIXdyYXBwZXIpIHtcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArIFwibm9yIHdyYXBwZXIgbm9yIGlubGluZSBlbGVtZW50cyBmb3VuZCBvbiB0aGUgQWRcIiwgMTAxKTtcbiAgICB9XG5cbiAgICBpZiAoaW5MaW5lICYmICFpbkxpbmUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoZXJyTXNnUHJlZml4ICsgXCJjb3VsZCBub3QgZmluZCBNZWRpYUZpbGUgdGhhdCBpcyBzdXBwb3J0ZWQgYnkgdGhpcyB2aWRlbyBwbGF5ZXJcIiwgNDAzKTtcbiAgICB9XG5cbiAgICBpZiAod3JhcHBlciAmJiAhd3JhcHBlci5WQVNUQWRUYWdVUkkpIHtcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArIFwibWlzc2luZyAnVkFTVEFkVGFnVVJJJyBpbiB3cmFwcGVyXCIsIDEwMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiByZXF1ZXN0VkFTVEFkKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICAgIHRoYXQuX3JlcXVlc3RWQVNUWG1sKGFkVGFnVXJsLCBmdW5jdGlvbiAoZXJyb3IsIHhtbFN0cikge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgdmFzdFRyZWUgPSB4bWwudG9KWE9OVHJlZSh4bWxTdHIpO1xuICAgICAgICBjYWxsYmFjayh2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSwgdmFzdFRyZWUuYWQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5nZXRWQVNUQWQucmVxdWVzdFZBU1RBZCwgZXJyb3IgcGFyc2luZyB4bWxcIiwgMTAwKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblZBU1RDbGllbnQucHJvdG90eXBlLl9yZXF1ZXN0VkFTVFhtbCA9IGZ1bmN0aW9uIHJlcXVlc3RWQVNUWG1sKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICB0cnkge1xuICAgIGlmICh1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFRhZ1VybCkpIHtcbiAgICAgIGFkVGFnVXJsKHJlcXVlc3RIYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9nZ2VyLmluZm8gKFwicmVxdWVzdGluZyBhZFRhZ1VybDogXCIgKyBhZFRhZ1VybCk7XG4gICAgICBodHRwLmdldChhZFRhZ1VybCwgcmVxdWVzdEhhbmRsZXIsIHtcbiAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWxsYmFjayhlKTtcbiAgfVxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcmVxdWVzdEhhbmRsZXIoZXJyb3IsIHJlc3BvbnNlLCBzdGF0dXMpIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHZhciBlcnJNc2cgPSB1dGlsaXRpZXMuaXNEZWZpbmVkKHN0YXR1cykgP1xuICAgICAgXCJvbiBWQVNUQ2xpZW50LnJlcXVlc3RWYXN0WE1MLCBIVFRQIHJlcXVlc3QgZXJyb3Igd2l0aCBzdGF0dXMgJ1wiICsgc3RhdHVzICsgXCInXCIgOlxuICAgICAgICBcIm9uIFZBU1RDbGllbnQucmVxdWVzdFZhc3RYTUwsIEVycm9yIGdldHRpbmcgdGhlIHRoZSBWQVNUIFhNTCB3aXRoIGhlIHBhc3NlZCBhZFRhZ1hNTCBmblwiO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoZXJyTXNnLCAzMDEpLCBudWxsKTtcbiAgICB9XG5cbiAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSk7XG4gIH1cbn07XG5cblZBU1RDbGllbnQucHJvdG90eXBlLl9idWlsZFZBU1RSZXNwb25zZSA9IGZ1bmN0aW9uIGJ1aWxkVkFTVFJlc3BvbnNlKGFkc0NoYWluKSB7XG4gIHZhciByZXNwb25zZSA9IG5ldyBWQVNUUmVzcG9uc2UoKTtcbiAgYWRkQWRzVG9SZXNwb25zZShyZXNwb25zZSwgYWRzQ2hhaW4pO1xuICB2YWxpZGF0ZVJlc3BvbnNlKHJlc3BvbnNlKTtcblxuICByZXR1cm4gcmVzcG9uc2U7XG5cbiAgLy8qKiogTG9jYWwgZnVuY3Rpb24gKioqKlxuICBmdW5jdGlvbiBhZGRBZHNUb1Jlc3BvbnNlKHJlc3BvbnNlLCBhZHMpIHtcbiAgICBhZHMuZm9yRWFjaChmdW5jdGlvbiAoYWQpIHtcbiAgICAgIHJlc3BvbnNlLmFkZEFkKGFkKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICB2YXIgcHJvZ3Jlc3NFdmVudHMgPSByZXNwb25zZS50cmFja2luZ0V2ZW50cy5wcm9ncmVzcztcblxuICAgIGlmICghcmVzcG9uc2UuaGFzTGluZWFyKCkpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50Ll9idWlsZFZBU1RSZXNwb25zZSwgUmVjZWl2ZWQgYW4gQWQgdHlwZSB0aGF0IGlzIG5vdCBzdXBwb3J0ZWRcIiwgMjAwKTtcbiAgICB9XG5cbiAgICBpZiAocmVzcG9uc2UuZHVyYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuX2J1aWxkVkFTVFJlc3BvbnNlLCBNaXNzaW5nIGR1cmF0aW9uIGZpZWxkIGluIFZBU1QgcmVzcG9uc2VcIiwgMTAxKTtcbiAgICB9XG5cbiAgICBpZiAocHJvZ3Jlc3NFdmVudHMpIHtcbiAgICAgIHByb2dyZXNzRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHByb2dyZXNzRXZlbnQpIHtcbiAgICAgICAgaWYgKCF1dGlsaXRpZXMuaXNOdW1iZXIocHJvZ3Jlc3NFdmVudC5vZmZzZXQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuX2J1aWxkVkFTVFJlc3BvbnNlLCBtaXNzaW5nIG9yIHdyb25nIG9mZnNldCBhdHRyaWJ1dGUgb24gcHJvZ3Jlc3MgdHJhY2tpbmcgZXZlbnRcIiwgMTAxKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fdHJhY2tFcnJvciA9IGZ1bmN0aW9uIChlcnJvciwgYWRDaGFpbikge1xuICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KGFkQ2hhaW4pIHx8IGFkQ2hhaW4ubGVuZ3RoID09PSAwKSB7IC8vVGhlcmUgaXMgbm90aGluZyB0byB0cmFja1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBlcnJvclVSTE1hY3JvcyA9IFtdO1xuICBhZENoYWluLmZvckVhY2goYWRkRXJyb3JVcmxNYWNyb3MpO1xuICB2YXN0VXRpbC50cmFjayhlcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3IuY29kZSB8fCA5MDB9KTsgIC8vOTAwIDw9PSBVbmRlZmluZWQgZXJyb3JcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAgKioqL1xuICBmdW5jdGlvbiBhZGRFcnJvclVybE1hY3JvcyhhZCkge1xuICAgIGlmIChhZC53cmFwcGVyICYmIGFkLndyYXBwZXIuZXJyb3IpIHtcbiAgICAgIGVycm9yVVJMTWFjcm9zLnB1c2goYWQud3JhcHBlci5lcnJvcik7XG4gICAgfVxuXG4gICAgaWYgKGFkLmluTGluZSAmJiBhZC5pbkxpbmUuZXJyb3IpIHtcbiAgICAgIGVycm9yVVJMTWFjcm9zLnB1c2goYWQuaW5MaW5lLmVycm9yKTtcbiAgICB9XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVkFTVENsaWVudDtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gVkFTVEVycm9yKG1lc3NhZ2UsIGNvZGUpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ1ZBU1QgRXJyb3I6ICcgKyAobWVzc2FnZSB8fCAnJyk7XG4gIGlmIChjb2RlKSB7XG4gICAgdGhpcy5jb2RlID0gY29kZTtcbiAgfVxufVxuXG5WQVNURXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5WQVNURXJyb3IucHJvdG90eXBlLm5hbWUgPSBcIlZBU1QgRXJyb3JcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBWQVNURXJyb3I7IiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIElubmVyIGhlbHBlciBjbGFzcyB0aGF0IGRlYWxzIHdpdGggdGhlIGxvZ2ljIG9mIHRoZSBpbmRpdmlkdWFsIHN0ZXBzIG5lZWRlZCB0byBzZXR1cCBhbiBhZCBpbiB0aGUgcGxheWVyLlxuICpcbiAqIEBwYXJhbSBwbGF5ZXIge29iamVjdH0gaW5zdGFuY2Ugb2YgdGhlIHBsYXllciB0aGF0IHdpbGwgcGxheSB0aGUgYWQuIEl0IGFzc3VtZXMgdGhhdCB0aGUgdmlkZW9qcy1jb250cmliLWFkcyBwbHVnaW5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgd2hlbiB5b3UgdXNlIGl0cyB1dGlsaXR5IGZ1bmN0aW9ucy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuXG52YXIgVkFTVFJlc3BvbnNlID0gcmVxdWlyZSgnLi9WQVNUUmVzcG9uc2UnKTtcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuL1ZBU1RFcnJvcicpO1xudmFyIFZBU1RUcmFja2VyID0gcmVxdWlyZSgnLi9WQVNUVHJhY2tlcicpO1xudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xuXG52YXIgYXN5bmMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9hc3luYycpO1xudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xudmFyIHBsYXllclV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvcGxheWVyVXRpbHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xuXG5mdW5jdGlvbiBWQVNUSW50ZWdyYXRvcihwbGF5ZXIpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RJbnRlZ3JhdG9yKSkge1xuICAgIHJldHVybiBuZXcgVkFTVEludGVncmF0b3IocGxheWVyKTtcbiAgfVxuXG4gIHRoaXMucGxheWVyID0gcGxheWVyO1xufVxuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUucGxheUFkID0gZnVuY3Rpb24gcGxheUFkKHZhc3RSZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IHV0aWxpdGllcy5ub29wO1xuXG4gIGlmICghKHZhc3RSZXNwb25zZSBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcbiAgICByZXR1cm4gY2FsbGJhY2sobmV3IFZBU1RFcnJvcignT24gVkFTVEludGVncmF0b3IsIG1pc3NpbmcgcmVxdWlyZWQgVkFTVFJlc3BvbnNlJykpO1xuICB9XG5cbiAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgbmV4dChudWxsLCB2YXN0UmVzcG9uc2UpO1xuICAgIH0sXG4gICAgdGhpcy5fc2VsZWN0QWRTb3VyY2UuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9jcmVhdGVWQVNUVHJhY2tlci5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX2FkZENsaWNrVGhyb3VnaC5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX2FkZFNraXBCdXR0b24uYmluZCh0aGlzKSxcbiAgICB0aGlzLl9zZXR1cEV2ZW50cy5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX3BsYXlTZWxlY3RlZEFkLmJpbmQodGhpcylcbiAgXSwgZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSkge1xuICAgIGlmIChlcnJvciAmJiByZXNwb25zZSkge1xuICAgICAgdGhhdC5fdHJhY2tFcnJvcihlcnJvciwgcmVzcG9uc2UpO1xuICAgIH1cbiAgICBjYWxsYmFjayhlcnJvciwgcmVzcG9uc2UpO1xuICB9KTtcblxuICB0aGlzLl9hZFVuaXQgPSB7XG4gICAgX3NyYzogbnVsbCxcbiAgICB0eXBlOiAnVkFTVCcsXG4gICAgcGF1c2VBZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5wbGF5ZXIucGF1c2UodHJ1ZSk7XG4gICAgfSxcblxuICAgIHJlc3VtZUFkOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0LnBsYXllci5wbGF5KHRydWUpO1xuICAgIH0sXG5cbiAgICBpc1BhdXNlZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoYXQucGxheWVyLnBhdXNlZCh0cnVlKTtcbiAgICB9LFxuXG4gICAgZ2V0U3JjOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3JjO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdGhpcy5fYWRVbml0O1xufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9zZWxlY3RBZFNvdXJjZSA9IGZ1bmN0aW9uIHNlbGVjdEFkU291cmNlKHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgc291cmNlO1xuXG4gIHZhciBwbGF5ZXJXaWR0aCA9IGRvbS5nZXREaW1lbnNpb24odGhpcy5wbGF5ZXIuZWwoKSkud2lkdGg7XG4gIHJlc3BvbnNlLm1lZGlhRmlsZXMuc29ydChmdW5jdGlvbiBjb21wYXJlVG8oYSwgYikge1xuICAgIHZhciBkZWx0YUEgPSBNYXRoLmFicyhwbGF5ZXJXaWR0aCAtIGEud2lkdGgpO1xuICAgIHZhciBkZWx0YUIgPSBNYXRoLmFicyhwbGF5ZXJXaWR0aCAtIGIud2lkdGgpO1xuICAgIHJldHVybiBkZWx0YUEgLSBkZWx0YUI7XG4gIH0pO1xuXG4gIHNvdXJjZSA9IHRoaXMucGxheWVyLnNlbGVjdFNvdXJjZShyZXNwb25zZS5tZWRpYUZpbGVzKS5zb3VyY2U7XG5cbiAgaWYgKHNvdXJjZSkge1xuICAgIGxvZ2dlci5pbmZvIChcInNlbGVjdGVkIHNvdXJjZTogXCIsIHNvdXJjZSk7XG4gICAgaWYgKHRoaXMuX2FkVW5pdCkge1xuICAgICAgdGhpcy5fYWRVbml0Ll9zcmMgPSBzb3VyY2U7XG4gICAgfVxuICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBzb3VyY2UsIHJlc3BvbnNlKTtcbiAgfVxuXG4gIC8vIGNvZGUgNDAzIDw9PSBDb3VsZG4ndCBmaW5kIE1lZGlhRmlsZSB0aGF0IGlzIHN1cHBvcnRlZCBieSB0aGlzIHZpZGVvIHBsYXllclxuICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwiQ291bGQgbm90IGZpbmQgQWQgbWVkaWFmaWxlIHN1cHBvcnRlZCBieSB0aGlzIHBsYXllclwiLCA0MDMpLCByZXNwb25zZSk7XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX2NyZWF0ZVZBU1RUcmFja2VyID0gZnVuY3Rpb24gY3JlYXRlVkFTVFRyYWNrZXIoYWRNZWRpYUZpbGUsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB0cnkge1xuICAgIGNhbGxiYWNrKG51bGwsIGFkTWVkaWFGaWxlLCBuZXcgVkFTVFRyYWNrZXIoYWRNZWRpYUZpbGUuc3JjLCByZXNwb25zZSksIHJlc3BvbnNlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhbGxiYWNrKGUsIHJlc3BvbnNlKTtcbiAgfVxufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9zZXR1cEV2ZW50cyA9IGZ1bmN0aW9uIHNldHVwRXZlbnRzKGFkTWVkaWFGaWxlLCB0cmFja2VyLCByZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdmFyIHByZXZpb3VzbHlNdXRlZDtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICBwbGF5ZXIub24oJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB0cmFja0Z1bGxzY3JlZW5DaGFuZ2UpO1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRTdGFydCcsIHRyYWNrSW1wcmVzc2lvbnMpO1xuICBwbGF5ZXIub24oJ3BhdXNlJywgdHJhY2tQYXVzZSk7XG4gIHBsYXllci5vbigndGltZXVwZGF0ZScsIHRyYWNrUHJvZ3Jlc3MpO1xuICBwbGF5ZXIub24oJ3ZvbHVtZWNoYW5nZScsIHRyYWNrVm9sdW1lQ2hhbmdlKTtcblxuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHVuYmluZEV2ZW50cyk7XG4gIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnLCAndmFzdC5hZFNraXAnXSwgZnVuY3Rpb24oZXZ0KXtcbiAgICBpZihldnQudHlwZSA9PT0gJ3Zhc3QuYWRFbmQnKXtcbiAgICAgIHRyYWNrZXIudHJhY2tDb21wbGV0ZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIGFkTWVkaWFGaWxlLCByZXNwb25zZSk7XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiB1bmJpbmRFdmVudHMoKSB7XG4gICAgcGxheWVyLm9mZignZnVsbHNjcmVlbmNoYW5nZScsIHRyYWNrRnVsbHNjcmVlbkNoYW5nZSk7XG4gICAgcGxheWVyLm9mZigndmFzdC5hZFN0YXJ0JywgdHJhY2tJbXByZXNzaW9ucyk7XG4gICAgcGxheWVyLm9mZigncGF1c2UnLCB0cmFja1BhdXNlKTtcbiAgICBwbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgdHJhY2tQcm9ncmVzcyk7XG4gICAgcGxheWVyLm9mZigndm9sdW1lY2hhbmdlJywgdHJhY2tWb2x1bWVDaGFuZ2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tGdWxsc2NyZWVuQ2hhbmdlKCkge1xuICAgIGlmIChwbGF5ZXIuaXNGdWxsc2NyZWVuKCkpIHtcbiAgICAgIHRyYWNrZXIudHJhY2tGdWxsc2NyZWVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYWNrZXIudHJhY2tFeGl0RnVsbHNjcmVlbigpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrUGF1c2UoKSB7XG4gICAgLy9OT1RFOiB3aGVuZXZlciBhIHZpZGVvIGVuZHMgdGhlIHZpZGVvIEVsZW1lbnQgdHJpZ2dlcnMgYSAncGF1c2UnIGV2ZW50IGJlZm9yZSB0aGUgJ2VuZGVkJyBldmVudC5cbiAgICAvLyAgICAgIFdlIHNob3VsZCBub3QgdHJhY2sgdGhpcyBwYXVzZSBldmVudCBiZWNhdXNlIGl0IG1ha2VzIHRoZSBWQVNUIHRyYWNraW5nIGNvbmZ1c2luZyBhZ2FpbiB3ZSB1c2UgYVxuICAgIC8vICAgICAgVGhyZXNob2xkIG9mIDIgc2Vjb25kcyB0byBwcmV2ZW50IGZhbHNlIHBvc2l0aXZlcyBvbiBJT1MuXG4gICAgaWYgKE1hdGguYWJzKHBsYXllci5kdXJhdGlvbigpIC0gcGxheWVyLmN1cnJlbnRUaW1lKCkpIDwgMikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyYWNrZXIudHJhY2tQYXVzZSgpO1xuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXknLCAndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZihldnQudHlwZSA9PT0gJ3BsYXknKXtcbiAgICAgICAgdHJhY2tlci50cmFja1Jlc3VtZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tQcm9ncmVzcygpIHtcbiAgICB2YXIgY3VycmVudFRpbWVJbk1zID0gcGxheWVyLmN1cnJlbnRUaW1lKCkgKiAxMDAwO1xuICAgIHRyYWNrZXIudHJhY2tQcm9ncmVzcyhjdXJyZW50VGltZUluTXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tJbXByZXNzaW9ucygpIHtcbiAgICB0cmFja2VyLnRyYWNrSW1wcmVzc2lvbnMoKTtcbiAgICB0cmFja2VyLnRyYWNrQ3JlYXRpdmVWaWV3KCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja1ZvbHVtZUNoYW5nZSgpIHtcbiAgICB2YXIgbXV0ZWQgPSBwbGF5ZXIubXV0ZWQoKTtcbiAgICBpZiAobXV0ZWQpIHtcbiAgICAgIHRyYWNrZXIudHJhY2tNdXRlKCk7XG4gICAgfSBlbHNlIGlmIChwcmV2aW91c2x5TXV0ZWQpIHtcbiAgICAgIHRyYWNrZXIudHJhY2tVbm11dGUoKTtcbiAgICB9XG4gICAgcHJldmlvdXNseU11dGVkID0gbXV0ZWQ7XG4gIH1cbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fYWRkU2tpcEJ1dHRvbiA9IGZ1bmN0aW9uIGFkZFNraXBCdXR0b24oc291cmNlLCB0cmFja2VyLCByZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdmFyIHNraXBPZmZzZXRJblNlYztcbiAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gIGlmICh1dGlsaXRpZXMuaXNOdW1iZXIocmVzcG9uc2Uuc2tpcG9mZnNldCkpIHtcbiAgICBza2lwT2Zmc2V0SW5TZWMgPSByZXNwb25zZS5za2lwb2Zmc2V0IC8gMTAwMDtcbiAgICBhZGRTa2lwQnV0dG9uVG9QbGF5ZXIodGhpcy5wbGF5ZXIsIHNraXBPZmZzZXRJblNlYyk7XG4gIH1cbiAgY2FsbGJhY2sobnVsbCwgc291cmNlLCB0cmFja2VyLCByZXNwb25zZSk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG4gIGZ1bmN0aW9uIGFkZFNraXBCdXR0b25Ub1BsYXllcihwbGF5ZXIsIHNraXBPZmZzZXQpIHtcbiAgICB2YXIgc2tpcEJ1dHRvbiA9IGNyZWF0ZVNraXBCdXR0b24ocGxheWVyKTtcbiAgICB2YXIgdXBkYXRlU2tpcEJ1dHRvbiA9IHVwZGF0ZVNraXBCdXR0b25TdGF0ZS5iaW5kKHRoYXQsIHNraXBCdXR0b24sIHNraXBPZmZzZXQsIHBsYXllcik7XG5cbiAgICBwbGF5ZXIuZWwoKS5hcHBlbmRDaGlsZChza2lwQnV0dG9uKTtcbiAgICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB1cGRhdGVTa2lwQnV0dG9uKTtcblxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcmVtb3ZlU2tpcEJ1dHRvbik7XG5cbiAgICBmdW5jdGlvbiByZW1vdmVTa2lwQnV0dG9uKCkge1xuICAgICAgcGxheWVyLm9mZigndGltZXVwZGF0ZScsIHVwZGF0ZVNraXBCdXR0b24pO1xuICAgICAgZG9tLnJlbW92ZShza2lwQnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTa2lwQnV0dG9uKHBsYXllcikge1xuICAgIHZhciBza2lwQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sIFwidmFzdC1za2lwLWJ1dHRvblwiKTtcblxuICAgIHNraXBCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZG9tLmhhc0NsYXNzKHNraXBCdXR0b24sICdlbmFibGVkJykpIHtcbiAgICAgICAgdHJhY2tlci50cmFja1NraXAoKTtcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRTa2lwJyk7XG4gICAgICB9XG5cbiAgICAgIC8vV2UgcHJldmVudCBldmVudCBwcm9wYWdhdGlvbiB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBjbGlja1Rocm91Z2ggYW5kIHNvIG9uXG4gICAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gc2tpcEJ1dHRvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNraXBCdXR0b25TdGF0ZShza2lwQnV0dG9uLCBza2lwT2Zmc2V0LCBwbGF5ZXIpIHtcbiAgICB2YXIgdGltZUxlZnQgPSBNYXRoLmNlaWwoc2tpcE9mZnNldCAtIHBsYXllci5jdXJyZW50VGltZSgpKTtcbiAgICBpZiAodGltZUxlZnQgPiAwKSB7XG4gICAgICBza2lwQnV0dG9uLmlubmVySFRNTCA9IFwiU2tpcCBpbiBcIiArIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKHRpbWVMZWZ0LCAyKSArIFwiLi4uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghZG9tLmhhc0NsYXNzKHNraXBCdXR0b24sICdlbmFibGVkJykpIHtcbiAgICAgICAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sICdlbmFibGVkJyk7XG4gICAgICAgIHNraXBCdXR0b24uaW5uZXJIVE1MID0gXCJTa2lwIGFkXCI7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX2FkZENsaWNrVGhyb3VnaCA9IGZ1bmN0aW9uIGFkZENsaWNrVGhyb3VnaChtZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHZhciBibG9ja2VyID0gY3JlYXRlQ2xpY2tUaHJvdWdoQmxvY2tlcihwbGF5ZXIsIHRyYWNrZXIsIHJlc3BvbnNlKTtcbiAgdmFyIHVwZGF0ZUJsb2NrZXIgPSB1cGRhdGVCbG9ja2VyVVJMLmJpbmQodGhpcywgYmxvY2tlciwgcmVzcG9uc2UsIHBsYXllcik7XG5cbiAgcGxheWVyLmVsKCkuaW5zZXJ0QmVmb3JlKGJsb2NrZXIsIHBsYXllci5jb250cm9sQmFyLmVsKCkpO1xuICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB1cGRhdGVCbG9ja2VyKTtcbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVCbG9ja2VyKTtcblxuICByZXR1cm4gY2FsbGJhY2sobnVsbCwgbWVkaWFGaWxlLCB0cmFja2VyLCByZXNwb25zZSk7XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNsaWNrVGhyb3VnaEJsb2NrZXIocGxheWVyLCB0cmFja2VyLCByZXNwb25zZSkge1xuICAgIHZhciBibG9ja2VyID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHZhciBjbGlja1Rocm91Z2hNYWNybyA9IHJlc3BvbnNlLmNsaWNrVGhyb3VnaDtcblxuICAgIGRvbS5hZGRDbGFzcyhibG9ja2VyLCAndmFzdC1ibG9ja2VyJyk7XG4gICAgYmxvY2tlci5ocmVmID0gZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwoY2xpY2tUaHJvdWdoTWFjcm8sIHBsYXllcik7XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGNsaWNrVGhyb3VnaE1hY3JvKSkge1xuICAgICAgYmxvY2tlci50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIH1cblxuICAgIGJsb2NrZXIub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAocGxheWVyLnBhdXNlZCgpKSB7XG4gICAgICAgIHBsYXllci5wbGF5KCk7XG5cbiAgICAgICAgLy9XZSBwcmV2ZW50IGV2ZW50IHByb3BhZ2F0aW9uIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggdGhlIHBsYXllcidzIG5vcm1hbCBwYXVzZSBtZWNoYW5pc21cbiAgICAgICAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICB0cmFja2VyLnRyYWNrQ2xpY2soKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGJsb2NrZXI7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVCbG9ja2VyVVJMKGJsb2NrZXIsIHJlc3BvbnNlLCBwbGF5ZXIpIHtcbiAgICBibG9ja2VyLmhyZWYgPSBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChyZXNwb25zZS5jbGlja1Rocm91Z2gsIHBsYXllcik7XG4gIH1cblxuICBmdW5jdGlvbiBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChjbGlja1Rocm91Z2hNYWNybywgcGxheWVyKSB7XG4gICAgdmFyIHZhcmlhYmxlcyA9IHtcbiAgICAgIEFTU0VUVVJJOiBtZWRpYUZpbGUuc3JjLFxuICAgICAgQ09OVEVOVFBMQVlIRUFEOiB2YXN0VXRpbC5mb3JtYXRQcm9ncmVzcyhwbGF5ZXIuY3VycmVudFRpbWUoKSAqIDEwMDApXG4gICAgfTtcblxuICAgIHJldHVybiBjbGlja1Rocm91Z2hNYWNybyA/IHZhc3RVdGlsLnBhcnNlVVJMTWFjcm8oY2xpY2tUaHJvdWdoTWFjcm8sIHZhcmlhYmxlcykgOiAnIyc7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVCbG9ja2VyKCkge1xuICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB1cGRhdGVCbG9ja2VyKTtcbiAgICBkb20ucmVtb3ZlKGJsb2NrZXIpO1xuICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3BsYXlTZWxlY3RlZEFkID0gZnVuY3Rpb24gcGxheVNlbGVjdGVkQWQoc291cmNlLCByZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuXG4gIHBsYXllci5wcmVsb2FkKFwiYXV0b1wiKTsgLy93aXRob3V0IHByZWxvYWQ9YXV0byB0aGUgZHVyYXRpb25jaGFuZ2UgZXZlbnQgaXMgbmV2ZXIgZmlyZWRcbiAgcGxheWVyLnNyYyhzb3VyY2UpO1xuXG4gIGxvZ2dlci5kZWJ1ZyAoXCI8VkFTVEludGVncmF0b3IuX3BsYXlTZWxlY3RlZEFkPiB3YWl0aW5nIGZvciBkdXJhdGlvbmNoYW5nZSB0byBwbGF5IHRoZSBhZC4uLlwiKTtcblxuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydkdXJhdGlvbmNoYW5nZScsICdlcnJvcicsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKGV2dC50eXBlID09PSAnZHVyYXRpb25jaGFuZ2UnKSB7XG4gICAgICBsb2dnZXIuZGVidWcgKFwiPFZBU1RJbnRlZ3JhdG9yLl9wbGF5U2VsZWN0ZWRBZD4gZ290IGR1cmF0aW9uY2hhbmdlOyBjYWxsaW5nIHBsYXlBZCgpXCIpO1xuICAgICAgcGxheUFkKCk7XG4gICAgfSBlbHNlIGlmKGV2dC50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVEludGVncmF0b3IsIFBsYXllciBpcyB1bmFibGUgdG8gcGxheSB0aGUgQWRcIiwgNDAwKSwgcmVzcG9uc2UpO1xuICAgIH1cbiAgICAvL05PVEU6IElmIHRoZSBhZHMgZ2V0IGNhbmNlbGVkIHdlIGRvIG5vdGhpbmcvXG4gIH0pO1xuXG4gIC8qKioqIGxvY2FsIGZ1bmN0aW9ucyAqKioqKiovXG4gIGZ1bmN0aW9uIHBsYXlBZCgpIHtcblxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYoZXZ0LnR5cGUgPT09ICd2YXN0LmFkc0NhbmNlbCcpe1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGxvZ2dlci5kZWJ1ZyAoXCI8VkFTVEludGVncmF0b3IuX3BsYXlTZWxlY3RlZEFkL3BsYXlBZD4gZ290IHBsYXlpbmcgZXZlbnQ7IHRyaWdnZXJpbmcgdmFzdC5hZFN0YXJ0Li4uXCIpO1xuXG4gICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZFN0YXJ0Jyk7XG5cbiAgICAgIHBsYXllci5vbignZW5kZWQnLCBwcm9jZWVkKTtcbiAgICAgIHBsYXllci5vbigndmFzdC5hZHNDYW5jZWwnLCBwcm9jZWVkKTtcbiAgICAgIHBsYXllci5vbigndmFzdC5hZFNraXAnLCBwcm9jZWVkKTtcblxuICAgICAgZnVuY3Rpb24gcHJvY2VlZChldnQpIHtcblxuICAgICAgICBpZihldnQudHlwZSA9PT0gJ2VuZGVkJyAmJiAocGxheWVyLmR1cmF0aW9uKCkgLSBwbGF5ZXIuY3VycmVudFRpbWUoKSkgPiAzICkge1xuICAgICAgICAgIC8vIElnbm9yZSBlbmRlZCBldmVudCBpZiB0aGUgQWQgdGltZSB3YXMgbm90ICduZWFyJyB0aGUgZW5kXG4gICAgICAgICAgLy8gYXZvaWRzIGlzc3VlcyB3aGVyZSBJT1MgY29udHJvbHMgY291bGQgc2tpcCB0aGUgQWRcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBwbGF5ZXIub2ZmKCdlbmRlZCcsIHByb2NlZWQpO1xuICAgICAgICBwbGF5ZXIub2ZmKCd2YXN0LmFkc0NhbmNlbCcsIHByb2NlZWQpO1xuICAgICAgICBwbGF5ZXIub2ZmKCd2YXN0LmFkU2tpcCcsIHByb2NlZWQpO1xuXG4gICAgICAgIC8vTk9URTogaWYgdGhlIGFkcyBnZXQgY2FuY2VsIHdlIGRvIG5vdGhpbmcgYXBhcnQgcmVtb3ZpbmcgdGhlIGxpc3RuZXJzXG4gICAgICAgIGlmKGV2dC50eXBlID09PSAnZW5kZWQnIHx8IGV2dC50eXBlID09PSAndmFzdC5hZFNraXAnKXtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxvZ2dlci5kZWJ1ZyAoXCI8VkFTVEludGVncmF0b3IuX3BsYXlTZWxlY3RlZEFkL3BsYXlBZD4gY2FsbGluZyBwbGF5ZXIucGxheSgpLi4uXCIpO1xuXG4gICAgcGxheWVyLnBsYXkoKTtcbiAgfVxufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl90cmFja0Vycm9yID0gZnVuY3Rpb24gdHJhY2tFcnJvcihlcnJvciwgcmVzcG9uc2UpIHtcbiAgdmFzdFV0aWwudHJhY2socmVzcG9uc2UuZXJyb3JVUkxNYWNyb3MsIHtFUlJPUkNPREU6IGVycm9yLmNvZGUgfHwgOTAwfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RJbnRlZ3JhdG9yOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFkID0gcmVxdWlyZSgnLi9BZCcpO1xudmFyIFZpZGVvQ2xpY2tzID0gcmVxdWlyZSgnLi9WaWRlb0NsaWNrcycpO1xudmFyIExpbmVhciA9IHJlcXVpcmUoJy4vTGluZWFyJyk7XG52YXIgSW5MaW5lID0gcmVxdWlyZSgnLi9JbkxpbmUnKTtcbnZhciBXcmFwcGVyID0gcmVxdWlyZSgnLi9XcmFwcGVyJyk7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbndpbmRvdy5JbkxpbmVfX0EgPSBJbkxpbmU7XG5mdW5jdGlvbiBWQVNUUmVzcG9uc2UoKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XG4gICAgcmV0dXJuIG5ldyBWQVNUUmVzcG9uc2UoKTtcbiAgfVxuXG4gIHRoaXMuX2xpbmVhckFkZGVkID0gZmFsc2U7XG4gIHRoaXMuYWRzID0gW107XG4gIHRoaXMuZXJyb3JVUkxNYWNyb3MgPSBbXTtcbiAgdGhpcy5pbXByZXNzaW9ucyA9IFtdO1xuICB0aGlzLmNsaWNrVHJhY2tpbmdzID0gW107XG4gIHRoaXMuY3VzdG9tQ2xpY2tzID0gW107XG4gIHRoaXMudHJhY2tpbmdFdmVudHMgPSB7fTtcbiAgdGhpcy5tZWRpYUZpbGVzID0gW107XG4gIHRoaXMuY2xpY2tUaHJvdWdoID0gdW5kZWZpbmVkO1xuICB0aGlzLmFkVGl0bGUgPSAnJztcbiAgdGhpcy5kdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgdGhpcy5za2lwb2Zmc2V0ID0gdW5kZWZpbmVkO1xufVxuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLmFkZEFkID0gZnVuY3Rpb24gKGFkKSB7XG4gIHZhciBpbkxpbmUsIHdyYXBwZXI7XG4gIGlmIChhZCBpbnN0YW5jZW9mIEFkKSB7XG4gICAgaW5MaW5lID0gYWQuaW5MaW5lO1xuICAgIHdyYXBwZXIgPSBhZC53cmFwcGVyO1xuXG4gICAgdGhpcy5hZHMucHVzaChhZCk7XG5cbiAgICBpZiAoaW5MaW5lKSB7XG4gICAgICB0aGlzLl9hZGRJbkxpbmUoaW5MaW5lKTtcbiAgICB9XG5cbiAgICBpZiAod3JhcHBlcikge1xuICAgICAgdGhpcy5fYWRkV3JhcHBlcih3cmFwcGVyKTtcbiAgICB9XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEVycm9yVHJhY2tVcmwgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgdmFyIGVycm9yVVJMID0gZXJyb3IgaW5zdGFuY2VvZiB4bWwuSlhPTlRyZWUgPyB4bWwua2V5VmFsdWUoZXJyb3IpIDogZXJyb3I7XG4gIGlmIChlcnJvclVSTCkge1xuICAgIHRoaXMuZXJyb3JVUkxNYWNyb3MucHVzaChlcnJvclVSTCk7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEltcHJlc3Npb25zID0gZnVuY3Rpb24gKGltcHJlc3Npb25zKSB7XG4gIHV0aWxpdGllcy5pc0FycmF5KGltcHJlc3Npb25zKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMuaW1wcmVzc2lvbnMsIGltcHJlc3Npb25zKTtcbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZENsaWNrVGhyb3VnaCA9IGZ1bmN0aW9uIChjbGlja1Rocm91Z2gpIHtcbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNsaWNrVGhyb3VnaCkpIHtcbiAgICB0aGlzLmNsaWNrVGhyb3VnaCA9IGNsaWNrVGhyb3VnaDtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkQ2xpY2tUcmFja2luZ3MgPSBmdW5jdGlvbiAoY2xpY2tUcmFja2luZ3MpIHtcbiAgdXRpbGl0aWVzLmlzQXJyYXkoY2xpY2tUcmFja2luZ3MpICYmIGFwcGVuZFRvQXJyYXkodGhpcy5jbGlja1RyYWNraW5ncywgY2xpY2tUcmFja2luZ3MpO1xufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkQ3VzdG9tQ2xpY2tzID0gZnVuY3Rpb24gKGN1c3RvbUNsaWNrcykge1xuICB1dGlsaXRpZXMuaXNBcnJheShjdXN0b21DbGlja3MpICYmIGFwcGVuZFRvQXJyYXkodGhpcy5jdXN0b21DbGlja3MsIGN1c3RvbUNsaWNrcyk7XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRUcmFja2luZ0V2ZW50cyA9IGZ1bmN0aW9uICh0cmFja2luZ0V2ZW50cykge1xuICB2YXIgZXZlbnRzTWFwID0gdGhpcy50cmFja2luZ0V2ZW50cztcblxuICBpZiAodHJhY2tpbmdFdmVudHMpIHtcbiAgICB0cmFja2luZ0V2ZW50cyA9IHV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRXZlbnRzKSA/IHRyYWNraW5nRXZlbnRzIDogW3RyYWNraW5nRXZlbnRzXTtcbiAgICB0cmFja2luZ0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFja2luZ0V2ZW50KSB7XG4gICAgICBpZiAoIWV2ZW50c01hcFt0cmFja2luZ0V2ZW50Lm5hbWVdKSB7XG4gICAgICAgIGV2ZW50c01hcFt0cmFja2luZ0V2ZW50Lm5hbWVdID0gW107XG4gICAgICB9XG4gICAgICBldmVudHNNYXBbdHJhY2tpbmdFdmVudC5uYW1lXS5wdXNoKHRyYWNraW5nRXZlbnQpO1xuICAgIH0pO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRUaXRsZSA9IGZ1bmN0aW9uICh0aXRsZSkge1xuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcodGl0bGUpKSB7XG4gICAgdGhpcy5hZFRpdGxlID0gdGl0bGU7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZER1cmF0aW9uID0gZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gIGlmICh1dGlsaXRpZXMuaXNOdW1iZXIoZHVyYXRpb24pKSB7XG4gICAgdGhpcy5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRWaWRlb0NsaWNrcyA9IGZ1bmN0aW9uICh2aWRlb0NsaWNrcykge1xuICBpZiAodmlkZW9DbGlja3MgaW5zdGFuY2VvZiBWaWRlb0NsaWNrcykge1xuICAgIHRoaXMuX2FkZENsaWNrVGhyb3VnaCh2aWRlb0NsaWNrcy5jbGlja1Rocm91Z2gpO1xuICAgIHRoaXMuX2FkZENsaWNrVHJhY2tpbmdzKHZpZGVvQ2xpY2tzLmNsaWNrVHJhY2tpbmdzKTtcbiAgICB0aGlzLl9hZGRDdXN0b21DbGlja3ModmlkZW9DbGlja3MuY3VzdG9tQ2xpY2tzKTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkTWVkaWFGaWxlcyA9IGZ1bmN0aW9uIChtZWRpYUZpbGVzKSB7XG4gIHV0aWxpdGllcy5pc0FycmF5KG1lZGlhRmlsZXMpICYmIGFwcGVuZFRvQXJyYXkodGhpcy5tZWRpYUZpbGVzLCBtZWRpYUZpbGVzKTtcbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFNraXBvZmZzZXQgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gIGlmIChvZmZzZXQpIHtcbiAgICB0aGlzLnNraXBvZmZzZXQgPSBvZmZzZXQ7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEFkUGFyYW1ldGVycyA9IGZ1bmN0aW9uIChhZFBhcmFtZXRlcnMpIHtcbiAgaWYgKGFkUGFyYW1ldGVycykge1xuICAgIHRoaXMuYWRQYXJhbWV0ZXJzID0gYWRQYXJhbWV0ZXJzO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRMaW5lYXIgPSBmdW5jdGlvbiAobGluZWFyKSB7XG4gIGlmIChsaW5lYXIgaW5zdGFuY2VvZiBMaW5lYXIpIHtcbiAgICB0aGlzLl9hZGREdXJhdGlvbihsaW5lYXIuZHVyYXRpb24pO1xuICAgIHRoaXMuX2FkZFRyYWNraW5nRXZlbnRzKGxpbmVhci50cmFja2luZ0V2ZW50cyk7XG4gICAgdGhpcy5fYWRkVmlkZW9DbGlja3MobGluZWFyLnZpZGVvQ2xpY2tzKTtcbiAgICB0aGlzLl9hZGRNZWRpYUZpbGVzKGxpbmVhci5tZWRpYUZpbGVzKTtcbiAgICB0aGlzLl9hZGRTa2lwb2Zmc2V0KGxpbmVhci5za2lwb2Zmc2V0KTtcbiAgICB0aGlzLl9hZGRBZFBhcmFtZXRlcnMobGluZWFyLmFkUGFyYW1ldGVycyk7XG4gICAgdGhpcy5fbGluZWFyQWRkZWQgPSB0cnVlO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRJbkxpbmUgPSBmdW5jdGlvbiAoaW5MaW5lKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICBpZiAoaW5MaW5lIGluc3RhbmNlb2YgSW5MaW5lKSB7XG4gICAgdGhpcy5fYWRkVGl0bGUoaW5MaW5lLmFkVGl0bGUpO1xuICAgIHRoaXMuX2FkZEVycm9yVHJhY2tVcmwoaW5MaW5lLmVycm9yKTtcbiAgICB0aGlzLl9hZGRJbXByZXNzaW9ucyhpbkxpbmUuaW1wcmVzc2lvbnMpO1xuXG4gICAgaW5MaW5lLmNyZWF0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChjcmVhdGl2ZSkge1xuICAgICAgaWYgKGNyZWF0aXZlLmxpbmVhcikge1xuICAgICAgICB0aGF0Ll9hZGRMaW5lYXIoY3JlYXRpdmUubGluZWFyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkV3JhcHBlciA9IGZ1bmN0aW9uICh3cmFwcGVyKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICBpZiAod3JhcHBlciBpbnN0YW5jZW9mIFdyYXBwZXIpIHtcbiAgICB0aGlzLl9hZGRFcnJvclRyYWNrVXJsKHdyYXBwZXIuZXJyb3IpO1xuICAgIHRoaXMuX2FkZEltcHJlc3Npb25zKHdyYXBwZXIuaW1wcmVzc2lvbnMpO1xuXG4gICAgd3JhcHBlci5jcmVhdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoY3JlYXRpdmUpIHtcbiAgICAgIHZhciBsaW5lYXIgPSBjcmVhdGl2ZS5saW5lYXI7XG4gICAgICBpZiAobGluZWFyKSB7XG4gICAgICAgIHRoYXQuX2FkZFZpZGVvQ2xpY2tzKGxpbmVhci52aWRlb0NsaWNrcyk7XG4gICAgICAgIHRoYXQuY2xpY2tUaHJvdWdoID0gdW5kZWZpbmVkOy8vV2UgZW5zdXJlIHRoYXQgbm8gY2xpY2tUaHJvdWdoIGhhcyBiZWVuIGFkZGVkXG4gICAgICAgIHRoYXQuX2FkZFRyYWNraW5nRXZlbnRzKGxpbmVhci50cmFja2luZ0V2ZW50cyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuaGFzTGluZWFyID0gZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRoaXMuX2xpbmVhckFkZGVkO1xufTtcblxuZnVuY3Rpb24gYXBwZW5kVG9BcnJheShhcnJheSwgaXRlbXMpIHtcbiAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgIGFycmF5LnB1c2goaXRlbSk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RSZXNwb25zZTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi9WQVNURXJyb3InKTtcbnZhciBWQVNUUmVzcG9uc2UgPSByZXF1aXJlKCcuL1ZBU1RSZXNwb25zZScpO1xudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gVkFTVFRyYWNrZXIoYXNzZXRVUkksIHZhc3RSZXNwb25zZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVkFTVFRyYWNrZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBWQVNUVHJhY2tlcihhc3NldFVSSSwgdmFzdFJlc3BvbnNlKTtcbiAgfVxuXG4gIHRoaXMuc2FuaXR5Q2hlY2soYXNzZXRVUkksIHZhc3RSZXNwb25zZSk7XG4gIHRoaXMuaW5pdGlhbGl6ZShhc3NldFVSSSwgdmFzdFJlc3BvbnNlKTtcblxufVxuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpIHtcbiAgdGhpcy5yZXNwb25zZSA9IHZhc3RSZXNwb25zZTtcbiAgdGhpcy5hc3NldFVSSSA9IGFzc2V0VVJJO1xuICB0aGlzLnByb2dyZXNzID0gMDtcbiAgdGhpcy5xdWFydGlsZXMgPSB7XG4gICAgZmlyc3RRdWFydGlsZToge3RyYWNrZWQ6IGZhbHNlLCB0aW1lOiBNYXRoLnJvdW5kKDI1ICogdmFzdFJlc3BvbnNlLmR1cmF0aW9uKSAvIDEwMH0sXG4gICAgbWlkcG9pbnQ6IHt0cmFja2VkOiBmYWxzZSwgdGltZTogTWF0aC5yb3VuZCg1MCAqIHZhc3RSZXNwb25zZS5kdXJhdGlvbikgLyAxMDB9LFxuICAgIHRoaXJkUXVhcnRpbGU6IHt0cmFja2VkOiBmYWxzZSwgdGltZTogTWF0aC5yb3VuZCg3NSAqIHZhc3RSZXNwb25zZS5kdXJhdGlvbikgLyAxMDB9XG4gIH07XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUuc2FuaXR5Q2hlY2sgPSBmdW5jdGlvbihhc3NldFVSSSwgdmFzdFJlc3BvbnNlKSB7XG4gIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKGFzc2V0VVJJKSB8fCB1dGlsaXRpZXMuaXNFbXB0eVN0cmluZyhhc3NldFVSSSkpIHtcbiAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWQVNUVHJhY2tlciBjb25zdHJ1Y3RvciwgbWlzc2luZyByZXF1aXJlZCB0aGUgVVJJIG9mIHRoZSBhZCBhc3NldCBiZWluZyBwbGF5ZWQnKTtcbiAgfVxuXG4gIGlmICghKHZhc3RSZXNwb25zZSBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcbiAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWQVNUVHJhY2tlciBjb25zdHJ1Y3RvciwgbWlzc2luZyByZXF1aXJlZCBWQVNUIHJlc3BvbnNlJyk7XG4gIH1cbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja1VSTHMgPSBmdW5jdGlvbiB0cmFja1VSTHModXJscywgdmFyaWFibGVzKSB7XG4gIGlmICh1dGlsaXRpZXMuaXNBcnJheSh1cmxzKSAmJiB1cmxzLmxlbmd0aCA+IDApIHtcbiAgICB2YXJpYWJsZXMgPSB1dGlsaXRpZXMuZXh0ZW5kKHtcbiAgICAgIEFTU0VUVVJJOiB0aGlzLmFzc2V0VVJJLFxuICAgICAgQ09OVEVOVFBMQVlIRUFEOiB2YXN0VXRpbC5mb3JtYXRQcm9ncmVzcyh0aGlzLnByb2dyZXNzKVxuICAgIH0sIHZhcmlhYmxlcyB8fCB7fSk7XG5cbiAgICB2YXN0VXRpbC50cmFjayh1cmxzLCB2YXJpYWJsZXMpO1xuICB9XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tFdmVudCA9IGZ1bmN0aW9uIHRyYWNrRXZlbnQoZXZlbnROYW1lLCB0cmFja09uY2UpIHtcbiAgdGhpcy50cmFja1VSTHMoZ2V0RXZlbnRVcmlzKHRoaXMucmVzcG9uc2UudHJhY2tpbmdFdmVudHNbZXZlbnROYW1lXSkpO1xuICBpZiAodHJhY2tPbmNlKSB7XG4gICAgdGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50c1tldmVudE5hbWVdID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG4gIGZ1bmN0aW9uIGdldEV2ZW50VXJpcyh0cmFja2luZ0V2ZW50cykge1xuICAgIHZhciB1cmlzO1xuXG4gICAgaWYgKHRyYWNraW5nRXZlbnRzKSB7XG4gICAgICB1cmlzID0gW107XG4gICAgICB0cmFja2luZ0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGlmICghZXZlbnQudXJpKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1cmlzLnB1c2goZXZlbnQudXJpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdXJpcztcbiAgfVxufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrUHJvZ3Jlc3MgPSBmdW5jdGlvbiB0cmFja1Byb2dyZXNzKG5ld1Byb2dyZXNzSW5Ncykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHZhciBldmVudHMgPSBbXTtcbiAgdmFyIE9OQ0UgPSB0cnVlO1xuICB2YXIgQUxXQVlTID0gZmFsc2U7XG4gIHZhciB0cmFja2luZ0V2ZW50cyA9IHRoaXMucmVzcG9uc2UudHJhY2tpbmdFdmVudHM7XG5cbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihuZXdQcm9ncmVzc0luTXMpKSB7XG4gICAgYWRkVHJhY2tFdmVudCgnc3RhcnQnLCBPTkNFLCBuZXdQcm9ncmVzc0luTXMgPiAwKTtcbiAgICBhZGRUcmFja0V2ZW50KCdyZXdpbmQnLCBBTFdBWVMsIGhhc1Jld291bmQodGhpcy5wcm9ncmVzcywgbmV3UHJvZ3Jlc3NJbk1zKSk7XG4gICAgYWRkUXVhcnRpbGVFdmVudHMobmV3UHJvZ3Jlc3NJbk1zKTtcbiAgICB0cmFja1Byb2dyZXNzRXZlbnRzKG5ld1Byb2dyZXNzSW5Ncyk7XG4gICAgdHJhY2tFdmVudHMoKTtcbiAgICB0aGlzLnByb2dyZXNzID0gbmV3UHJvZ3Jlc3NJbk1zO1xuICB9XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG4gIGZ1bmN0aW9uIGhhc1Jld291bmQoY3VycmVudFByb2dyZXNzLCBuZXdQcm9ncmVzcykge1xuICAgIHZhciBSRVdJTkRfVEhSRVNIT0xEID0gMzAwMDsgLy9JT1MgdmlkZW8gY2xvY2sgaXMgdmVyeSB1bnJlbGlhYmxlIGFuZCB3ZSBuZWVkIGEgMyBzZWNvbmRzIHRocmVzaG9sZCB0byBlbnN1cmUgdGhhdCB0aGVyZSB3YXMgYSByZXdpbmQgYW4gdGhhdCBpdCB3YXMgb24gcHVycG9zZS5cbiAgICByZXR1cm4gY3VycmVudFByb2dyZXNzID4gbmV3UHJvZ3Jlc3NJbk1zICYmIE1hdGguYWJzKG5ld1Byb2dyZXNzIC0gY3VycmVudFByb2dyZXNzKSA+IFJFV0lORF9USFJFU0hPTEQ7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUcmFja0V2ZW50KGV2ZW50TmFtZSwgdHJhY2tPbmNlLCBjYW5CZUFkZGVkKSB7XG4gICAgaWYgKHRyYWNraW5nRXZlbnRzW2V2ZW50TmFtZV0gJiYgY2FuQmVBZGRlZCkge1xuICAgICAgZXZlbnRzLnB1c2goe1xuICAgICAgICBuYW1lOiBldmVudE5hbWUsXG4gICAgICAgIHRyYWNrT25jZTogISF0cmFja09uY2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFF1YXJ0aWxlRXZlbnRzKHByb2dyZXNzKSB7XG4gICAgdmFyIHF1YXJ0aWxlcyA9IHRoYXQucXVhcnRpbGVzO1xuICAgIHZhciBmaXJzdFF1YXJ0aWxlID0gdGhhdC5xdWFydGlsZXMuZmlyc3RRdWFydGlsZTtcbiAgICB2YXIgbWlkcG9pbnQgPSB0aGF0LnF1YXJ0aWxlcy5taWRwb2ludDtcbiAgICB2YXIgdGhpcmRRdWFydGlsZSA9IHRoYXQucXVhcnRpbGVzLnRoaXJkUXVhcnRpbGU7XG5cbiAgICBpZiAoIWZpcnN0UXVhcnRpbGUudHJhY2tlZCkge1xuICAgICAgdHJhY2tRdWFydGlsZSgnZmlyc3RRdWFydGlsZScsIHByb2dyZXNzKTtcbiAgICB9IGVsc2UgaWYgKCFtaWRwb2ludC50cmFja2VkKSB7XG4gICAgICB0cmFja1F1YXJ0aWxlKCdtaWRwb2ludCcsIHByb2dyZXNzKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlyZFF1YXJ0aWxlLnRyYWNrZWQpe1xuICAgICAgdHJhY2tRdWFydGlsZSgndGhpcmRRdWFydGlsZScsIHByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgICBmdW5jdGlvbiB0cmFja1F1YXJ0aWxlKHF1YXJ0aWxlTmFtZSwgcHJvZ3Jlc3Mpe1xuICAgICAgdmFyIHF1YXJ0aWxlID0gcXVhcnRpbGVzW3F1YXJ0aWxlTmFtZV07XG4gICAgICBpZihjYW5CZVRyYWNrZWQocXVhcnRpbGUsIHByb2dyZXNzKSl7XG4gICAgICAgIHF1YXJ0aWxlLnRyYWNrZWQgPSB0cnVlO1xuICAgICAgICBhZGRUcmFja0V2ZW50KHF1YXJ0aWxlTmFtZSwgT05DRSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2FuQmVUcmFja2VkKHF1YXJ0aWxlLCBwcm9ncmVzcykge1xuICAgIHZhciBxdWFydGlsZVRpbWUgPSBxdWFydGlsZS50aW1lO1xuICAgIC8vV2Ugb25seSBmaXJlIHRoZSBxdWFydGlsZSBldmVudCBpZiB0aGUgcHJvZ3Jlc3MgaXMgYmlnZ2VyIHRoYW4gdGhlIHF1YXJ0aWxlIHRpbWUgYnkgNSBzZWNvbmRzIGF0IG1vc3QuXG4gICAgcmV0dXJuIHByb2dyZXNzID49IHF1YXJ0aWxlVGltZSAmJiBwcm9ncmVzcyA8PSAocXVhcnRpbGVUaW1lICsgNTAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja1Byb2dyZXNzRXZlbnRzKHByb2dyZXNzKSB7XG4gICAgaWYgKCF1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0V2ZW50cy5wcm9ncmVzcykpIHtcbiAgICAgIHJldHVybjsgLy9Ob3RoaW5nIHRvIHRyYWNrXG4gICAgfVxuXG4gICAgdmFyIHBlbmRpbmdQcm9ncmVzc0V2dHMgPSBbXTtcblxuICAgIHRyYWNraW5nRXZlbnRzLnByb2dyZXNzLmZvckVhY2goZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKGV2dC5vZmZzZXQgPD0gcHJvZ3Jlc3MpIHtcbiAgICAgICAgdGhhdC50cmFja1VSTHMoW2V2dC51cmldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlbmRpbmdQcm9ncmVzc0V2dHMucHVzaChldnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRyYWNraW5nRXZlbnRzLnByb2dyZXNzID0gcGVuZGluZ1Byb2dyZXNzRXZ0cztcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrRXZlbnRzKCkge1xuICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgdGhhdC50cmFja0V2ZW50KGV2ZW50Lm5hbWUsIGV2ZW50LnRyYWNrT25jZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbltcbiAgJ3Jld2luZCcsXG4gICdmdWxsc2NyZWVuJyxcbiAgJ2V4aXRGdWxsc2NyZWVuJyxcbiAgJ3BhdXNlJyxcbiAgJ3Jlc3VtZScsXG4gICdtdXRlJyxcbiAgJ3VubXV0ZScsXG4gICdhY2NlcHRJbnZpdGF0aW9uJyxcbiAgJ2FjY2VwdEludml0YXRpb25MaW5lYXInLFxuICAnY29sbGFwc2UnLFxuICAnZXhwYW5kJ1xuXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICBWQVNUVHJhY2tlci5wcm90b3R5cGVbJ3RyYWNrJyArIHV0aWxpdGllcy5jYXBpdGFsaXplKGV2ZW50TmFtZSldID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy50cmFja0V2ZW50KGV2ZW50TmFtZSk7XG4gICAgfTtcbiAgfSk7XG5cbltcbiAgJ3N0YXJ0JyxcbiAgJ3NraXAnLFxuICAnY2xvc2UnLFxuICAnY2xvc2VMaW5lYXInXG5dLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgIFZBU1RUcmFja2VyLnByb3RvdHlwZVsndHJhY2snICsgdXRpbGl0aWVzLmNhcGl0YWxpemUoZXZlbnROYW1lKV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnRyYWNrRXZlbnQoZXZlbnROYW1lLCB0cnVlKTtcbiAgICB9O1xuICB9KTtcblxuW1xuICAnZmlyc3RRdWFydGlsZScsXG4gICdtaWRwb2ludCcsXG4gICd0aGlyZFF1YXJ0aWxlJ1xuXS5mb3JFYWNoKGZ1bmN0aW9uIChxdWFydGlsZSkge1xuICAgIFZBU1RUcmFja2VyLnByb3RvdHlwZVsndHJhY2snICsgdXRpbGl0aWVzLmNhcGl0YWxpemUocXVhcnRpbGUpXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMucXVhcnRpbGVzW3F1YXJ0aWxlXS50cmFja2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMudHJhY2tFdmVudChxdWFydGlsZSwgdHJ1ZSk7XG4gICAgfTtcbiAgfSk7XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICBpZih0aGlzLnF1YXJ0aWxlcy50aGlyZFF1YXJ0aWxlLnRyYWNrZWQpe1xuICAgIHRoaXMudHJhY2tFdmVudCgnY29tcGxldGUnLCB0cnVlKTtcbiAgfVxufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrRXJyb3JXaXRoQ29kZSA9IGZ1bmN0aW9uIHRyYWNrRXJyb3JXaXRoQ29kZShlcnJvcmNvZGUpIHtcbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihlcnJvcmNvZGUpKSB7XG4gICAgdGhpcy50cmFja1VSTHModGhpcy5yZXNwb25zZS5lcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3Jjb2RlfSk7XG4gIH1cbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0ltcHJlc3Npb25zID0gZnVuY3Rpb24gdHJhY2tJbXByZXNzaW9ucygpIHtcbiAgdGhpcy50cmFja1VSTHModGhpcy5yZXNwb25zZS5pbXByZXNzaW9ucyk7XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tDcmVhdGl2ZVZpZXcgPSBmdW5jdGlvbiB0cmFja0NyZWF0aXZlVmlldygpIHtcbiAgdGhpcy50cmFja0V2ZW50KCdjcmVhdGl2ZVZpZXcnKTtcbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0NsaWNrID0gZnVuY3Rpb24gdHJhY2tDbGljaygpIHtcbiAgdGhpcy50cmFja1VSTHModGhpcy5yZXNwb25zZS5jbGlja1RyYWNraW5ncyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RUcmFja2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG5mdW5jdGlvbiBWaWRlb0NsaWNrcyh2aWRlb0NsaWNrSlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZpZGVvQ2xpY2tzKSkge1xuICAgIHJldHVybiBuZXcgVmlkZW9DbGlja3ModmlkZW9DbGlja0pUcmVlKTtcbiAgfVxuXG4gIHRoaXMuY2xpY2tUaHJvdWdoID0geG1sLmtleVZhbHVlKHZpZGVvQ2xpY2tKVHJlZS5jbGlja1Rocm91Z2gpO1xuICB0aGlzLmNsaWNrVHJhY2tpbmdzID0gcGFyc2VDbGlja1RyYWNraW5ncyh2aWRlb0NsaWNrSlRyZWUuY2xpY2tUcmFja2luZyk7XG4gIHRoaXMuY3VzdG9tQ2xpY2tzID0gcGFyc2VDbGlja1RyYWNraW5ncyh2aWRlb0NsaWNrSlRyZWUuY3VzdG9tQ2xpY2spO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGFyc2VDbGlja1RyYWNraW5ncyh0cmFja2luZ0RhdGEpIHtcbiAgICB2YXIgY2xpY2tUcmFja2luZ3MgPSBbXTtcbiAgICBpZiAodHJhY2tpbmdEYXRhKSB7XG4gICAgICB0cmFja2luZ0RhdGEgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0RhdGEpID8gdHJhY2tpbmdEYXRhIDogW3RyYWNraW5nRGF0YV07XG4gICAgICB0cmFja2luZ0RhdGEuZm9yRWFjaChmdW5jdGlvbiAoY2xpY2tUcmFja2luZ0RhdGEpIHtcbiAgICAgICAgY2xpY2tUcmFja2luZ3MucHVzaCh4bWwua2V5VmFsdWUoY2xpY2tUcmFja2luZ0RhdGEpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY2xpY2tUcmFja2luZ3M7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWaWRlb0NsaWNrczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcbnZhciBDcmVhdGl2ZSA9IHJlcXVpcmUoJy4vQ3JlYXRpdmUnKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxuZnVuY3Rpb24gV3JhcHBlcih3cmFwcGVySlRyZWUpIHtcbiAgaWYoISh0aGlzIGluc3RhbmNlb2YgV3JhcHBlcikpIHtcbiAgICByZXR1cm4gbmV3IFdyYXBwZXIod3JhcHBlckpUcmVlKTtcbiAgfVxuXG4gIC8vUmVxdWlyZWQgZWxlbWVudHNcbiAgdGhpcy5hZFN5c3RlbSA9IHhtbC5rZXlWYWx1ZSh3cmFwcGVySlRyZWUuYWRTeXN0ZW0pO1xuICB0aGlzLmltcHJlc3Npb25zID0gdmFzdFV0aWwucGFyc2VJbXByZXNzaW9ucyh3cmFwcGVySlRyZWUuaW1wcmVzc2lvbik7XG4gIHRoaXMuVkFTVEFkVGFnVVJJID0geG1sLmtleVZhbHVlKHdyYXBwZXJKVHJlZS52QVNUQWRUYWdVUkkpO1xuXG4gIC8vT3B0aW9uYWwgZWxlbWVudHNcbiAgdGhpcy5jcmVhdGl2ZXMgPSBDcmVhdGl2ZS5wYXJzZUNyZWF0aXZlcyh3cmFwcGVySlRyZWUuY3JlYXRpdmVzKTtcbiAgdGhpcy5lcnJvciA9IHhtbC5rZXlWYWx1ZSh3cmFwcGVySlRyZWUuZXJyb3IpO1xuICB0aGlzLmV4dGVuc2lvbnMgPSB3cmFwcGVySlRyZWUuZXh0ZW5zaW9ucztcblxuICAvL09wdGlvbmFsIGF0dHJzXG4gIHRoaXMuZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzID0gdXRpbGl0aWVzLmlzRGVmaW5lZCh4bWwuYXR0cih3cmFwcGVySlRyZWUsICdmb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnMnKSk/IHhtbC5hdHRyKHdyYXBwZXJKVHJlZSwgJ2ZvbGxvd0FkZGl0aW9uYWxXcmFwcGVycycpOiB0cnVlO1xuICB0aGlzLmFsbG93TXVsdGlwbGVBZHMgPSB4bWwuYXR0cih3cmFwcGVySlRyZWUsICdhbGxvd011bHRpcGxlQWRzJyk7XG4gIHRoaXMuZmFsbGJhY2tPbk5vQWQgPSB4bWwuYXR0cih3cmFwcGVySlRyZWUsICdmYWxsYmFja09uTm9BZCcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdyYXBwZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciBkdXJhdGlvblJlZ2V4ID0gLyhcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpKFxcLihcXGRcXGRcXGQpKT8vO1xuXG52YXIgcGFyc2VycyA9IHtcblxuICBkdXJhdGlvbjogZnVuY3Rpb24gcGFyc2VEdXJhdGlvbihkdXJhdGlvblN0cikge1xuXG4gICAgdmFyIG1hdGNoLCBkdXJhdGlvbkluTXM7XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGR1cmF0aW9uU3RyKSkge1xuICAgICAgbWF0Y2ggPSBkdXJhdGlvblN0ci5tYXRjaChkdXJhdGlvblJlZ2V4KTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBkdXJhdGlvbkluTXMgPSBwYXJzZUhvdXJzVG9NcyhtYXRjaFsxXSkgKyBwYXJzZU1pblRvTXMobWF0Y2hbMl0pICsgcGFyc2VTZWNUb01zKG1hdGNoWzNdKSArIHBhcnNlSW50KG1hdGNoWzVdIHx8IDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpc05hTihkdXJhdGlvbkluTXMpID8gbnVsbCA6IGR1cmF0aW9uSW5NcztcblxuICAgIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICBmdW5jdGlvbiBwYXJzZUhvdXJzVG9Ncyhob3VyU3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoaG91clN0ciwgMTApICogNjAgKiA2MCAqIDEwMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VNaW5Ub01zKG1pblN0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KG1pblN0ciwgMTApICogNjAgKiAxMDAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlU2VjVG9NcyhzZWNTdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChzZWNTdHIsIDEwKSAqIDEwMDA7XG4gICAgfVxuICB9LFxuXG4gIG9mZnNldDogZnVuY3Rpb24gcGFyc2VPZmZzZXQob2Zmc2V0LCBkdXJhdGlvbikge1xuICAgIGlmKGlzUGVyY2VudGFnZShvZmZzZXQpKXtcbiAgICAgIHJldHVybiBjYWxjdWxhdGVQZXJjZW50YWdlKG9mZnNldCwgZHVyYXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2Vycy5kdXJhdGlvbihvZmZzZXQpO1xuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG4gICAgZnVuY3Rpb24gaXNQZXJjZW50YWdlKG9mZnNldCkge1xuICAgICAgdmFyIHBlcmNlbnRhZ2VSZWdleCA9IC9eXFxkKyhcXC5cXGQrKT8lJC9nO1xuICAgICAgcmV0dXJuIHBlcmNlbnRhZ2VSZWdleC50ZXN0KG9mZnNldCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlUGVyY2VudGFnZShwZXJjZW50U3RyLCBkdXJhdGlvbikge1xuICAgICAgaWYoZHVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGNhbGNQZXJjZW50KGR1cmF0aW9uLCBwYXJzZUZsb2F0KHBlcmNlbnRTdHIucmVwbGFjZSgnJScsICcnKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY1BlcmNlbnQocXVhbnRpdHksIHBlcmNlbnQpe1xuICAgICAgcmV0dXJuIHF1YW50aXR5ICogcGVyY2VudCAvIDEwMDtcbiAgICB9XG4gIH1cblxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlcnM7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIFZQQUlESFRNTDVUZWNoID0gcmVxdWlyZSgnLi4vdnBhaWQvVlBBSURIVE1MNVRlY2gnKTtcblxudmFyIHZhc3RVdGlsID0ge1xuXG4gIHRyYWNrOiBmdW5jdGlvbiB0cmFjayhVUkxNYWNyb3MsIHZhcmlhYmxlcykge1xuICAgIHZhciBzb3VyY2VzID0gdmFzdFV0aWwucGFyc2VVUkxNYWNyb3MoVVJMTWFjcm9zLCB2YXJpYWJsZXMpO1xuICAgIHZhciB0cmFja0ltZ3MgPSBbXTtcbiAgICBzb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNyYykge1xuICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgIHRyYWNrSW1ncy5wdXNoKGltZyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRyYWNrSW1ncztcbiAgfSxcblxuICBwYXJzZVVSTE1hY3JvczogZnVuY3Rpb24gcGFyc2VNYWNyb3MoVVJMTWFjcm9zLCB2YXJpYWJsZXMpIHtcbiAgICB2YXIgcGFyc2VkVVJMcyA9IFtdO1xuXG4gICAgdmFyaWFibGVzID0gdmFyaWFibGVzIHx8IHt9O1xuXG4gICAgaWYgKCEodmFyaWFibGVzW1wiQ0FDSEVCVVNUSU5HXCJdKSkge1xuICAgICAgdmFyaWFibGVzW1wiQ0FDSEVCVVNUSU5HXCJdID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMS4wZSsxMCk7XG4gICAgfVxuXG4gICAgVVJMTWFjcm9zLmZvckVhY2goZnVuY3Rpb24gKFVSTE1hY3JvKSB7XG4gICAgICBwYXJzZWRVUkxzLnB1c2godmFzdFV0aWwuX3BhcnNlVVJMTWFjcm8oVVJMTWFjcm8sIHZhcmlhYmxlcykpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcnNlZFVSTHM7XG4gIH0sXG5cbiAgcGFyc2VVUkxNYWNybzogZnVuY3Rpb24gcGFyc2VNYWNybyhVUkxNYWNybywgdmFyaWFibGVzKSB7XG4gICAgdmFyaWFibGVzID0gdmFyaWFibGVzIHx8IHt9O1xuXG4gICAgaWYgKCEodmFyaWFibGVzW1wiQ0FDSEVCVVNUSU5HXCJdKSkge1xuICAgICAgdmFyaWFibGVzW1wiQ0FDSEVCVVNUSU5HXCJdID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMS4wZSsxMCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhc3RVdGlsLl9wYXJzZVVSTE1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpO1xuICB9LFxuXG4gIF9wYXJzZVVSTE1hY3JvOiBmdW5jdGlvbiBwYXJzZU1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpIHtcbiAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgfHwge307XG5cbiAgICB1dGlsaXRpZXMuZm9yRWFjaCh2YXJpYWJsZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBVUkxNYWNybyA9IFVSTE1hY3JvLnJlcGxhY2UobmV3IFJlZ0V4cChcIlxcXFxbXCIgKyBrZXkgKyBcIlxcXFxcXF1cIiwgJ2dtJyksIHZhbHVlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBVUkxNYWNybztcbiAgfSxcblxuICBwYXJzZUR1cmF0aW9uOiBmdW5jdGlvbiBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uU3RyKSB7XG4gICAgdmFyIGR1cmF0aW9uUmVnZXggPSAvKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkoXFwuKFxcZFxcZFxcZCkpPy87XG4gICAgdmFyIG1hdGNoLCBkdXJhdGlvbkluTXM7XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGR1cmF0aW9uU3RyKSkge1xuICAgICAgbWF0Y2ggPSBkdXJhdGlvblN0ci5tYXRjaChkdXJhdGlvblJlZ2V4KTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBkdXJhdGlvbkluTXMgPSBwYXJzZUhvdXJzVG9NcyhtYXRjaFsxXSkgKyBwYXJzZU1pblRvTXMobWF0Y2hbMl0pICsgcGFyc2VTZWNUb01zKG1hdGNoWzNdKSArIHBhcnNlSW50KG1hdGNoWzVdIHx8IDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpc05hTihkdXJhdGlvbkluTXMpID8gbnVsbCA6IGR1cmF0aW9uSW5NcztcblxuICAgIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICBmdW5jdGlvbiBwYXJzZUhvdXJzVG9Ncyhob3VyU3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoaG91clN0ciwgMTApICogNjAgKiA2MCAqIDEwMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VNaW5Ub01zKG1pblN0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KG1pblN0ciwgMTApICogNjAgKiAxMDAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlU2VjVG9NcyhzZWNTdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChzZWNTdHIsIDEwKSAqIDEwMDA7XG4gICAgfVxuICB9LFxuXG4gIHBhcnNlSW1wcmVzc2lvbnM6IGZ1bmN0aW9uIHBhcnNlSW1wcmVzc2lvbnMoaW1wcmVzc2lvbnMpIHtcbiAgICBpZiAoaW1wcmVzc2lvbnMpIHtcbiAgICAgIGltcHJlc3Npb25zID0gdXRpbGl0aWVzLmlzQXJyYXkoaW1wcmVzc2lvbnMpID8gaW1wcmVzc2lvbnMgOiBbaW1wcmVzc2lvbnNdO1xuICAgICAgcmV0dXJuIHV0aWxpdGllcy50cmFuc2Zvcm1BcnJheShpbXByZXNzaW9ucywgZnVuY3Rpb24gKGltcHJlc3Npb24pIHtcbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGltcHJlc3Npb24ua2V5VmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIGltcHJlc3Npb24ua2V5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH0sXG5cblxuICAvL1dlIGFzc3VtZSB0aGF0IHRoZSBwcm9ncmVzcyBpcyBnb2luZyB0byBhcnJpdmUgaW4gbWlsbGlzZWNvbmRzXG4gIGZvcm1hdFByb2dyZXNzOiBmdW5jdGlvbiBmb3JtYXRQcm9ncmVzcyhwcm9ncmVzcykge1xuICAgIHZhciBob3VycywgbWludXRlcywgc2Vjb25kcywgbWlsbGlzZWNvbmRzO1xuICAgIGhvdXJzID0gcHJvZ3Jlc3MgLyAoNjAgKiA2MCAqIDEwMDApO1xuICAgIGhvdXJzID0gTWF0aC5mbG9vcihob3Vycyk7XG4gICAgbWludXRlcyA9IChwcm9ncmVzcyAvICg2MCAqIDEwMDApKSAlIDYwO1xuICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKG1pbnV0ZXMpO1xuICAgIHNlY29uZHMgPSAocHJvZ3Jlc3MgLyAxMDAwKSAlIDYwO1xuICAgIHNlY29uZHMgPSBNYXRoLmZsb29yKHNlY29uZHMpO1xuICAgIG1pbGxpc2Vjb25kcyA9IHByb2dyZXNzICUgMTAwMDtcbiAgICByZXR1cm4gdXRpbGl0aWVzLnRvRml4ZWREaWdpdHMoaG91cnMsIDIpICsgJzonICsgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHMobWludXRlcywgMikgKyAnOicgKyB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhzZWNvbmRzLCAyKSArICcuJyArIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKG1pbGxpc2Vjb25kcywgMyk7XG4gIH0sXG5cbiAgcGFyc2VPZmZzZXQ6IGZ1bmN0aW9uIHBhcnNlT2Zmc2V0KG9mZnNldCwgZHVyYXRpb24pIHtcbiAgICBpZiAoaXNQZXJjZW50YWdlKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBjYWxjdWxhdGVQZXJjZW50YWdlKG9mZnNldCwgZHVyYXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gdmFzdFV0aWwucGFyc2VEdXJhdGlvbihvZmZzZXQpO1xuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG4gICAgZnVuY3Rpb24gaXNQZXJjZW50YWdlKG9mZnNldCkge1xuICAgICAgdmFyIHBlcmNlbnRhZ2VSZWdleCA9IC9eXFxkKyhcXC5cXGQrKT8lJC9nO1xuICAgICAgcmV0dXJuIHBlcmNlbnRhZ2VSZWdleC50ZXN0KG9mZnNldCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlUGVyY2VudGFnZShwZXJjZW50U3RyLCBkdXJhdGlvbikge1xuICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgIHJldHVybiBjYWxjUGVyY2VudChkdXJhdGlvbiwgcGFyc2VGbG9hdChwZXJjZW50U3RyLnJlcGxhY2UoJyUnLCAnJykpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGNQZXJjZW50KHF1YW50aXR5LCBwZXJjZW50KSB7XG4gICAgICByZXR1cm4gcXVhbnRpdHkgKiBwZXJjZW50IC8gMTAwO1xuICAgIH1cbiAgfSxcblxuXG4gIC8vTGlzdCBvZiBzdXBwb3J0ZWQgVlBBSUQgdGVjaG5vbG9naWVzXG4gIFZQQUlEX3RlY2hzOiBbXG4gICAgVlBBSURIVE1MNVRlY2hcbiAgXSxcblxuICBpc1ZQQUlEOiBmdW5jdGlvbiBpc1ZQQUlETWVkaWFGaWxlKG1lZGlhRmlsZSkge1xuICAgIHJldHVybiAhIW1lZGlhRmlsZSAmJiBtZWRpYUZpbGUuYXBpRnJhbWV3b3JrID09PSAnVlBBSUQnO1xuICB9LFxuXG4gIGZpbmRTdXBwb3J0ZWRWUEFJRFRlY2g6IGZ1bmN0aW9uIGZpbmRTdXBwb3J0ZWRWUEFJRFRlY2gobWltZVR5cGUpIHtcbiAgICB2YXIgaSwgbGVuLCBWUEFJRFRlY2g7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSB0aGlzLlZQQUlEX3RlY2hzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBWUEFJRFRlY2ggPSB0aGlzLlZQQUlEX3RlY2hzW2ldO1xuICAgICAgaWYgKFZQQUlEVGVjaC5zdXBwb3J0cyhtaW1lVHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIFZQQUlEVGVjaDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB2YXN0VXRpbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVEVycm9yJyk7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIFZQQUlEQWRVbml0V3JhcHBlcih2cGFpZEFkVW5pdCwgb3B0cykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVlBBSURBZFVuaXRXcmFwcGVyKSkge1xuICAgIHJldHVybiBuZXcgVlBBSURBZFVuaXRXcmFwcGVyKHZwYWlkQWRVbml0LCBvcHRzKTtcbiAgfVxuICBzYW5pdHlDaGVjayh2cGFpZEFkVW5pdCwgb3B0cyk7XG5cbiAgdGhpcy5vcHRpb25zID0gdXRpbGl0aWVzLmV4dGVuZCh7fSwgb3B0cyk7XG5cbiAgdGhpcy5fYWRVbml0ID0gdnBhaWRBZFVuaXQ7XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhhZFVuaXQsIG9wdHMpIHtcbiAgICBpZiAoIWFkVW5pdCB8fCAhVlBBSURBZFVuaXRXcmFwcGVyLmNoZWNrVlBBSURJbnRlcmZhY2UoYWRVbml0KSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVlBBSURBZFVuaXRXcmFwcGVyLCB0aGUgcGFzc2VkIFZQQUlEIGFkVW5pdCBkb2VzIG5vdCBmdWxseSBpbXBsZW1lbnQgdGhlIFZQQUlEIGludGVyZmFjZScpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzT2JqZWN0KG9wdHMpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLCBleHBlY3RlZCBvcHRpb25zIGhhc2ggIGJ1dCBnb3QgJ1wiICsgb3B0cyArIFwiJ1wiKTtcbiAgICB9XG5cbiAgICBpZiAoIShcInJlc3BvbnNlVGltZW91dFwiIGluIG9wdHMpIHx8ICF1dGlsaXRpZXMuaXNOdW1iZXIob3B0cy5yZXNwb25zZVRpbWVvdXQpICl7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLCBleHBlY3RlZCByZXNwb25zZVRpbWVvdXQgaW4gb3B0aW9uc1wiKTtcbiAgICB9XG4gIH1cbn1cblxuVlBBSURBZFVuaXRXcmFwcGVyLmNoZWNrVlBBSURJbnRlcmZhY2UgPSBmdW5jdGlvbiBjaGVja1ZQQUlESW50ZXJmYWNlKFZQQUlEQWRVbml0KSB7XG4gIC8vTk9URTogc2tpcEFkIGlzIG5vdCBwYXJ0IG9mIHRoZSBtZXRob2QgbGlzdCBiZWNhdXNlIGl0IG9ubHkgYXBwZWFycyBpbiBWUEFJRCAyLjAgYW5kIHdlIHN1cHBvcnQgVlBBSUQgMS4wXG4gIHZhciBWUEFJREludGVyZmFjZU1ldGhvZHMgPSBbXG4gICAgJ2hhbmRzaGFrZVZlcnNpb24nLCAnaW5pdEFkJywgJ3N0YXJ0QWQnLCAnc3RvcEFkJywgJ3Jlc2l6ZUFkJywgJ3BhdXNlQWQnLCAnZXhwYW5kQWQnLCAnY29sbGFwc2VBZCdcbiAgXTtcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gVlBBSURJbnRlcmZhY2VNZXRob2RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFWUEFJREFkVW5pdCB8fCAhdXRpbGl0aWVzLmlzRnVuY3Rpb24oVlBBSURBZFVuaXRbVlBBSURJbnRlcmZhY2VNZXRob2RzW2ldXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiBjYW5TdWJzY3JpYmVUb0V2ZW50cyhWUEFJREFkVW5pdCkgJiYgY2FuVW5zdWJzY3JpYmVGcm9tRXZlbnRzKFZQQUlEQWRVbml0KTtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG5cbiAgZnVuY3Rpb24gY2FuU3Vic2NyaWJlVG9FdmVudHMoYWRVbml0KSB7XG4gICAgcmV0dXJuIHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5zdWJzY3JpYmUpIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5hZGRFdmVudExpc3RlbmVyKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQub24pO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuVW5zdWJzY3JpYmVGcm9tRXZlbnRzKGFkVW5pdCkge1xuICAgIHJldHVybiB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQudW5zdWJzY3JpYmUpIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5yZW1vdmVFdmVudExpc3RlbmVyKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQub2ZmKTtcblxuICB9XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLmFkVW5pdEFzeW5jQ2FsbCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFyZ3MgPSB1dGlsaXRpZXMuYXJyYXlMaWtlT2JqVG9BcnJheShhcmd1bWVudHMpO1xuICB2YXIgbWV0aG9kID0gYXJncy5zaGlmdCgpO1xuICB2YXIgY2IgPSBhcmdzLnBvcCgpO1xuICB2YXIgdGltZW91dElkO1xuXG4gIHNhbml0eUNoZWNrKG1ldGhvZCwgY2IsIHRoaXMuX2FkVW5pdCk7XG4gIGFyZ3MucHVzaCh3cmFwQ2FsbGJhY2soKSk7XG5cbiAgdGhpcy5fYWRVbml0W21ldGhvZF0uYXBwbHkodGhpcy5fYWRVbml0LCBhcmdzKTtcbiAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdGltZW91dElkID0gbnVsbDtcbiAgICBjYihuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLCB0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIGEgcmVzcG9uc2Ugb24gY2FsbCAnXCIgKyBtZXRob2QgKyBcIidcIikpO1xuICAgIGNiID0gdXRpbGl0aWVzLm5vb3A7XG4gIH0sIHRoaXMub3B0aW9ucy5yZXNwb25zZVRpbWVvdXQpO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2sobWV0aG9kLCBjYiwgYWRVbml0KSB7XG4gICAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcobWV0aG9kKSB8fCAhdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0W21ldGhvZF0pKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLmFkVW5pdEFzeW5jQ2FsbCwgaW52YWxpZCBtZXRob2QgbmFtZVwiKTtcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNiKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlci5hZFVuaXRBc3luY0NhbGwsIG1pc3NpbmcgY2FsbGJhY2tcIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gd3JhcENhbGxiYWNrKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGltZW91dElkKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgfVxuICAgICAgY2IuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2dE5hbWUsIGhhbmRsZXIpIHtcbiAgdmFyIGFkZEV2ZW50TGlzdGVuZXIgPSB0aGlzLl9hZFVuaXQuYWRkRXZlbnRMaXN0ZW5lciB8fCB0aGlzLl9hZFVuaXQuc3Vic2NyaWJlIHx8IHRoaXMuX2FkVW5pdC5vbjtcbiAgYWRkRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMuX2FkVW5pdCwgZXZ0TmFtZSwgaGFuZGxlcik7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChldnROYW1lLCBoYW5kbGVyKSB7XG4gIHZhciByZW1vdmVFdmVudExpc3RlbmVyID0gdGhpcy5fYWRVbml0LnJlbW92ZUV2ZW50TGlzdGVuZXIgfHwgdGhpcy5fYWRVbml0LnVuc3Vic2NyaWJlIHx8IHRoaXMuX2FkVW5pdC5vZmY7XG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLl9hZFVuaXQsIGV2dE5hbWUsIGhhbmRsZXIpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS53YWl0Rm9yRXZlbnQgPSBmdW5jdGlvbiAoZXZ0TmFtZSwgY2IsIGNvbnRleHQpIHtcbiAgdmFyIHRpbWVvdXRJZDtcbiAgc2FuaXR5Q2hlY2soZXZ0TmFtZSwgY2IpO1xuICBjb250ZXh0ID0gY29udGV4dCB8fCBudWxsO1xuXG4gIHRoaXMub24oZXZ0TmFtZSwgcmVzcG9uc2VMaXN0ZW5lcik7XG5cbiAgLy8gSk06IFdlJ3JlIHRyb3VibGVzaG9vdGluZyBhbiBpc3N1ZSB3aXRoIGEgbGl2ZSBjcmVhdGl2ZSB0aGF0J3MgdW5kZXIgdGVzdCBmb3JcbiAgLy8gdGhlIFZBU1QgRHJpdmVCeSAtIGl0IGFwcGVhcnMgdGhhdCB0aGUgVlBBSUQgY29udGVudCBpcyBmYWlsaW5nIHRvIGxvYWQgXG4gIC8vIGludGVybWl0dGVudGx5LCB3aGljaCBpbiB0dXJuIHByZXZlbnRzIHRoZSBBZFN0YXJ0ZWQgZXZlbnQgZnJvbSBmaXJpbmcuIFVudGlsXG4gIC8vIHJlc29sdmVkIHByb3Blcmx5LCB0aGlzIGluY3JlZGlibHkgZGFuZ2Vyb3VzIGhhY2sgZW5zdXJlIHdlIHB1c2ggb24gd2l0aFxuICAvLyByb2xsaW5nIHRoZSB2aWRlby5cbiAgLy9cbiAgLy8gaHR0cHM6Ly90cmVsbG8uY29tL2MvY3N0RGd4OXAvMjc0OS1jb250aW5lbnRhbC12YXN0LXRyb3VibGVzaG9vdC1sb3ctcGxheWJhY2stcmF0ZVxuICBpZiAoZXZ0TmFtZSA9PT0gJ0FkU3RhcnRlZCcpIHtcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KHJlc3BvbnNlTGlzdGVuZXIsIDMwMDApO1xuICB9IGVsc2Uge1xuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2IobmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlci53YWl0Rm9yRXZlbnQsIHRpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgZXZlbnQgJ1wiICsgZXZ0TmFtZSArIFwiJ1wiKSk7XG4gICAgICB0aW1lb3V0SWQgPSBudWxsO1xuICAgICAgY2IgPSB1dGlsaXRpZXMubm9vcDtcbiAgICB9LCB0aGlzLm9wdGlvbnMucmVzcG9uc2VUaW1lb3V0KTtcbiAgfVxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soZXZ0TmFtZSwgY2IpIHtcbiAgICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhldnROYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlci53YWl0Rm9yRXZlbnQsIG1pc3NpbmcgZXZ0IG5hbWVcIik7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIud2FpdEZvckV2ZW50LCBtaXNzaW5nIGNhbGxiYWNrXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3BvbnNlTGlzdGVuZXIoKSB7XG4gICAgdmFyIGFyZ3MgPSB1dGlsaXRpZXMuYXJyYXlMaWtlT2JqVG9BcnJheShhcmd1bWVudHMpO1xuXG4gICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICB0aW1lb3V0SWQgPSBudWxsO1xuICAgIH1cblxuICAgIGFyZ3MudW5zaGlmdChudWxsKTtcbiAgICBjYi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgfVxufTtcblxuLy8gVlBBSUQgTUVUSE9EU1xuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5oYW5kc2hha2VWZXJzaW9uID0gZnVuY3Rpb24gKHZlcnNpb24sIGNiKSB7XG4gIHRoaXMuYWRVbml0QXN5bmNDYWxsKCdoYW5kc2hha2VWZXJzaW9uJywgdmVyc2lvbiwgY2IpO1xufTtcblxuLyoganNoaW50IG1heHBhcmFtczo2ICovXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLmluaXRBZCA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGFkVW5pdERhdGEsIGNiKSB7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZExvYWRlZCcsIGNiKTtcbiAgdGhpcy5fYWRVbml0LmluaXRBZCh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGFkVW5pdERhdGEpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5yZXNpemVBZCA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgY2IpIHtcbiAgLy8gTk9URTogQWRTaXplQ2hhbmdlIGV2ZW50IGlzIG9ubHkgc3VwcG9ydGVkIG9uIFZQQUlEIDIuMCBzbyBmb3IgdGhlIG1vbWVudCB3ZSBhcmUgbm90IGdvaW5nIHRvIHVzZSBpdFxuICAvLyBhbmQgd2lsbCBhc3N1bWUgdGhhdCBldmVyeXRoaW5nIGlzIGZpbmUgYWZ0ZXIgdGhlIGFzeW5jIGNhbGxcbiAgdGhpcy5hZFVuaXRBc3luY0NhbGwoJ3Jlc2l6ZUFkJywgd2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNiKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc3RhcnRBZCA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLndhaXRGb3JFdmVudCgnQWRTdGFydGVkJywgY2IpO1xuICB0aGlzLl9hZFVuaXQuc3RhcnRBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5zdG9wQWQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkU3RvcHBlZCcsIGNiKTtcbiAgdGhpcy5fYWRVbml0LnN0b3BBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5wYXVzZUFkID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFBhdXNlZCcsIGNiKTtcbiAgdGhpcy5fYWRVbml0LnBhdXNlQWQoKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUucmVzdW1lQWQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkUGxheWluZycsIGNiKTtcbiAgdGhpcy5fYWRVbml0LnJlc3VtZUFkKCk7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLmV4cGFuZEFkID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZEV4cGFuZGVkQ2hhbmdlJywgY2IpO1xuICB0aGlzLl9hZFVuaXQuZXhwYW5kQWQoKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuY29sbGFwc2VBZCA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLndhaXRGb3JFdmVudCgnQWRFeHBhbmRlZENoYW5nZScsIGNiKTtcbiAgdGhpcy5fYWRVbml0LmNvbGxhcHNlQWQoKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc2tpcEFkID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFNraXBwZWQnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5za2lwQWQoKTtcbn07XG5cbi8vVlBBSUQgcHJvcGVydHkgZ2V0dGVyc1xuW1xuICAnYWRMaW5lYXInLFxuICAnYWRXaWR0aCcsXG4gICdhZEhlaWdodCcsXG4gICdhZEV4cGFuZGVkJyxcbiAgJ2FkU2tpcHBhYmxlU3RhdGUnLFxuICAnYWRSZW1haW5pbmdUaW1lJyxcbiAgJ2FkRHVyYXRpb24nLFxuICAnYWRWb2x1bWUnLFxuICAnYWRDb21wYW5pb25zJyxcbiAgJ2FkSWNvbnMnXG5dLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gIHZhciBnZXR0ZXJOYW1lID0gJ2dldCcgKyB1dGlsaXRpZXMuY2FwaXRhbGl6ZShwcm9wZXJ0eSk7XG5cbiAgVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZVtnZXR0ZXJOYW1lXSA9IGZ1bmN0aW9uIChjYikge1xuICAgIHRoaXMuYWRVbml0QXN5bmNDYWxsKGdldHRlck5hbWUsIGNiKTtcbiAgfTtcbn0pO1xuXG4vL1ZQQUlEIHByb3BlcnR5IHNldHRlcnNcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc2V0QWRWb2x1bWUgPSBmdW5jdGlvbih2b2x1bWUsIGNiKXtcbiAgdGhpcy5hZFVuaXRBc3luY0NhbGwoJ3NldEFkVm9sdW1lJyx2b2x1bWUsIGNiKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURBZFVuaXRXcmFwcGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTWltZVR5cGVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvbWltZXR5cGVzJyk7XG5cbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RFcnJvcicpO1xuXG52YXIgVlBBSURIVE1MNUNsaWVudCA9IHJlcXVpcmUoJ1ZQQUlESFRNTDVDbGllbnQvanMvVlBBSURIVE1MNUNsaWVudCcpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xuXG52YXIgbG9nZ2VyID0gcmVxdWlyZSAoJy4uLy4uL3V0aWxzL2NvbnNvbGVMb2dnZXInKTtcblxuZnVuY3Rpb24gVlBBSURIVE1MNVRlY2gobWVkaWFGaWxlKSB7XG5cbiAgaWYoISh0aGlzIGluc3RhbmNlb2YgVlBBSURIVE1MNVRlY2gpKSB7XG4gICAgcmV0dXJuIG5ldyBWUEFJREhUTUw1VGVjaChtZWRpYUZpbGUpO1xuICB9XG5cbiAgc2FuaXR5Q2hlY2sobWVkaWFGaWxlKTtcblxuICB0aGlzLm5hbWUgPSAndnBhaWQtaHRtbDUnO1xuICB0aGlzLmNvbnRhaW5lckVsID0gbnVsbDtcbiAgdGhpcy52aWRlb0VsID0gbnVsbDtcbiAgdGhpcy52cGFpZEhUTUxDbGllbnQgPSBudWxsO1xuXG4gIHRoaXMubWVkaWFGaWxlID0gbWVkaWFGaWxlO1xuXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKG1lZGlhRmlsZSkge1xuICAgICAgaWYgKCFtZWRpYUZpbGUgfHwgIXV0aWxpdGllcy5pc1N0cmluZyhtZWRpYUZpbGUuc3JjKSkge1xuICAgICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFZQQUlESFRNTDVUZWNoLklOVkFMSURfTUVESUFfRklMRSk7XG4gICAgICB9XG4gIH1cbn1cblxuVlBBSURIVE1MNVRlY2guVlBBSURIVE1MNUNsaWVudCA9IFZQQUlESFRNTDVDbGllbnQ7XG5cblZQQUlESFRNTDVUZWNoLnN1cHBvcnRzID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgcmV0dXJuICF1dGlsaXRpZXMuaXNPbGRJRSgpICYmIE1pbWVUeXBlcy5odG1sNS5pbmRleE9mKHR5cGUpID4gLTE7XG59O1xuXG5WUEFJREhUTUw1VGVjaC5wcm90b3R5cGUubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIGxvYWRBZFVuaXQoY29udGFpbmVyRWwsIHZpZGVvRWwsIGNhbGxiYWNrKSB7XG4gIHNhbml0eUNoZWNrKGNvbnRhaW5lckVsLCB2aWRlb0VsLCBjYWxsYmFjayk7XG5cbiAgdGhpcy5jb250YWluZXJFbCA9IGNvbnRhaW5lckVsO1xuICB0aGlzLnZpZGVvRWwgPSB2aWRlb0VsO1xuICB0aGlzLnZwYWlkSFRNTENsaWVudCA9IG5ldyBWUEFJREhUTUw1VGVjaC5WUEFJREhUTUw1Q2xpZW50KGNvbnRhaW5lckVsLCB2aWRlb0VsLCB7fSk7XG4gIHRoaXMudnBhaWRIVE1MQ2xpZW50LmxvYWRBZFVuaXQodGhpcy5tZWRpYUZpbGUuc3JjLCBjYWxsYmFjayk7XG5cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soY29udGFpbmVyLCB2aWRlbywgY2IpIHtcbiAgICBpZiAoIWRvbS5pc0RvbUVsZW1lbnQoY29udGFpbmVyKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9DT05UQUlORVJfRUwpO1xuICAgIH1cblxuICAgIGlmICghZG9tLmlzRG9tRWxlbWVudCh2aWRlbykgfHwgdmlkZW8udGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAndmlkZW8nKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFZQQUlESFRNTDVUZWNoLklOVkFMSURfRE9NX0NPTlRBSU5FUl9FTCk7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoVlBBSURIVE1MNVRlY2guTUlTU0lOR19DQUxMQkFDSyk7XG4gICAgfVxuICB9XG59O1xuXG5WUEFJREhUTUw1VGVjaC5wcm90b3R5cGUudW5sb2FkQWRVbml0ID0gZnVuY3Rpb24gdW5sb2FkQWRVbml0KCkge1xuICBpZiAodGhpcy52cGFpZEhUTUxDbGllbnQpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy52cGFpZEhUTUxDbGllbnQuZGVzdHJveSgpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgbG9nZ2VyLmVycm9yICgnVkFTVCBFUlJPUjogdHJ5aW5nIHRvIHVubG9hZCB0aGUgVlBBSUQgYWR1bml0Jyk7XG4gICAgfVxuXG4gICAgdGhpcy52cGFpZEhUTUxDbGllbnQgPSBudWxsO1xuICB9XG5cbiAgaWYgKHRoaXMuY29udGFpbmVyRWwpIHtcbiAgICBkb20ucmVtb3ZlKHRoaXMuY29udGFpbmVyRWwpO1xuICAgIHRoaXMuY29udGFpbmVyRWwgPSBudWxsO1xuICB9XG59O1xuXG52YXIgUFJFRklYID0gJ29uIFZQQUlESFRNTDVUZWNoJztcblZQQUlESFRNTDVUZWNoLklOVkFMSURfTUVESUFfRklMRSA9IFBSRUZJWCArICcsIGludmFsaWQgTWVkaWFGaWxlJztcblZQQUlESFRNTDVUZWNoLklOVkFMSURfRE9NX0NPTlRBSU5FUl9FTCA9IFBSRUZJWCArICcsIGludmFsaWQgY29udGFpbmVyIEh0bWxFbGVtZW50JztcblZQQUlESFRNTDVUZWNoLklOVkFMSURfRE9NX1ZJREVPX0VMID0gUFJFRklYICsgJywgaW52YWxpZCBIVE1MVmlkZW9FbGVtZW50JztcblZQQUlESFRNTDVUZWNoLk1JU1NJTkdfQ0FMTEJBQ0sgPSBQUkVGSVggKyAnLCBtaXNzaW5nIHZhbGlkIGNhbGxiYWNrJztcblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREhUTUw1VGVjaDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIE1pbWVUeXBlcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL21pbWV0eXBlcycpO1xudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVEVycm9yJyk7XG52YXIgVkFTVFJlc3BvbnNlID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNUUmVzcG9uc2UnKTtcbnZhciBWQVNUVHJhY2tlciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVFRyYWNrZXInKTtcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4uL3Zhc3QvdmFzdFV0aWwnKTtcblxudmFyIFZQQUlEQWRVbml0V3JhcHBlciA9IHJlcXVpcmUoJy4vVlBBSURBZFVuaXRXcmFwcGVyJyk7XG5cbnZhciBhc3luYyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2FzeW5jJyk7XG52YXIgZG9tID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZG9tJyk7XG52YXIgcGxheWVyVXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9wbGF5ZXJVdGlscycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIGxvZ2dlciA9IHJlcXVpcmUgKCcuLi8uLi91dGlscy9jb25zb2xlTG9nZ2VyJyk7XG5cbmZ1bmN0aW9uIFZQQUlESW50ZWdyYXRvcihwbGF5ZXIsIHNldHRpbmdzKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWUEFJREludGVncmF0b3IpKSB7XG4gICAgcmV0dXJuIG5ldyBWUEFJREludGVncmF0b3IocGxheWVyKTtcbiAgfVxuXG4gIHRoaXMuVklFV19NT0RFID0ge1xuICAgIE5PUk1BTDogJ25vcm1hbCcsXG4gICAgRlVMTFNDUkVFTjogXCJmdWxsc2NyZWVuXCIsXG4gICAgVEhVTUJOQUlMOiBcInRodW1ibmFpbFwiXG4gIH07XG4gIHRoaXMucGxheWVyID0gcGxheWVyO1xuICB0aGlzLmNvbnRhaW5lckVsID0gY3JlYXRlVlBBSURDb250YWluZXJFbChwbGF5ZXIpO1xuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgcmVzcG9uc2VUaW1lb3V0OiA1MDAwLFxuICAgIFZQQUlEX1ZFUlNJT046ICcyLjAnXG4gIH07XG4gIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG5cbiAgZnVuY3Rpb24gY3JlYXRlVlBBSURDb250YWluZXJFbCgpIHtcbiAgICB2YXIgY29udGFpbmVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb20uYWRkQ2xhc3MoY29udGFpbmVyRWwsICdWUEFJRC1jb250YWluZXInKTtcbiAgICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoY29udGFpbmVyRWwsIHBsYXllci5jb250cm9sQmFyLmVsKCkpO1xuICAgIHJldHVybiBjb250YWluZXJFbDtcblxuICB9XG59XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUucGxheUFkID0gZnVuY3Rpb24gcGxheVZQYWlkQWQodmFzdFJlc3BvbnNlLCBjYWxsYmFjaykge1xuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoJ29uIFZBU1RJbnRlZ3JhdG9yLnBsYXlBZCwgbWlzc2luZyByZXF1aXJlZCBWQVNUUmVzcG9uc2UnKSk7XG4gIH1cblxuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgbG9nZ2VyLmRlYnVnIChcIjxWUEFJREludGVncmF0b3IucGxheUFkPiBsb29raW5nIGZvciBzdXBwb3J0ZWQgdGVjaC4uLlwiKTtcbiAgdmFyIHRlY2ggPSB0aGlzLl9maW5kU3VwcG9ydGVkVGVjaCh2YXN0UmVzcG9uc2UsIHRoaXMuc2V0dGluZ3MpO1xuXG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgdXRpbGl0aWVzLm5vb3A7XG5cbiAgdGhpcy5fYWRVbml0ID0gbnVsbDtcblxuICBkb20uYWRkQ2xhc3MocGxheWVyLmVsKCksICd2anMtdnBhaWQtYWQnKTtcblxuICBwbGF5ZXIub24oJ3Zhc3QuYWRzQ2FuY2VsJywgdHJpZ2dlclZwYWlkQWRFbmQpO1xuICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uKCl7XG4gICAgcGxheWVyLm9mZigndmFzdC5hZHNDYW5jZWwnLCB0cmlnZ2VyVnBhaWRBZEVuZCk7XG4gICAgcmVtb3ZlQWRVbml0KCk7XG4gIH0pO1xuXG4gIGlmICh0ZWNoKSB7XG4gICAgbG9nZ2VyLmluZm8gKFwiPFZQQUlESW50ZWdyYXRvci5wbGF5QWQ+IGZvdW5kIHRlY2g6IFwiLCB0ZWNoKTtcblxuICAgIGFzeW5jLndhdGVyZmFsbChbXG4gICAgICBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICBuZXh0KG51bGwsIHRlY2gsIHZhc3RSZXNwb25zZSk7XG4gICAgICB9LFxuICAgICAgdGhpcy5fbG9hZEFkVW5pdC5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy5fcGxheUFkVW5pdC5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy5fZmluaXNoUGxheWluZy5iaW5kKHRoaXMpXG5cbiAgICBdLCBhZENvbXBsZXRlKTtcblxuICAgIHRoaXMuX2FkVW5pdCA9IHtcbiAgICAgIF9wYXVzZWQ6IHRydWUsXG4gICAgICB0eXBlOiAnVlBBSUQnLFxuICAgICAgcGF1c2VBZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5wYXVzZUFkJyk7XG4gICAgICAgIHBsYXllci5wYXVzZSh0cnVlKTsvL3dlIG1ha2Ugc3VyZSB0aGF0IHRoZSB2aWRlbyBjb250ZW50IGdldHMgc3RvcHBlZC5cbiAgICAgIH0sXG4gICAgICByZXN1bWVBZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLnJlc3VtZUFkJyk7XG4gICAgICB9LFxuICAgICAgaXNQYXVzZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF1c2VkO1xuICAgICAgfSxcbiAgICAgIGdldFNyYzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0ZWNoLm1lZGlhRmlsZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gIH0gZWxzZSB7XG4gICAgbG9nZ2VyLmRlYnVnIChcIjxWUEFJREludGVncmF0b3IucGxheUFkPiBjb3VsZCBub3QgZmluZCBzdWl0YWJsZSB0ZWNoXCIpO1xuICAgIHZhciBlcnJvciA9IG5ldyBWQVNURXJyb3IoJ29uIFZQQUlESW50ZWdyYXRvci5wbGF5QWQsIGNvdWxkIG5vdCBmaW5kIGEgc3VwcG9ydGVkIG1lZGlhRmlsZScsIDQwMyk7XG4gICAgYWRDb21wbGV0ZShlcnJvciwgdGhpcy5fYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuX2FkVW5pdDtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIGFkQ29tcGxldGUoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKSB7XG4gICAgaWYgKGVycm9yICYmIHZhc3RSZXNwb25zZSkge1xuICAgICAgdGhhdC5fdHJhY2tFcnJvcih2YXN0UmVzcG9uc2UsIGVycm9yLmNvZGUpO1xuICAgIH1cbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuYWRFbmQnKTtcbiAgICBjYWxsYmFjayhlcnJvciwgdmFzdFJlc3BvbnNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXJWcGFpZEFkRW5kKCl7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLmFkRW5kJyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVBZFVuaXQoKSB7XG4gICAgaWYgKHRlY2gpIHtcbiAgICAgIHRlY2gudW5sb2FkQWRVbml0KCk7XG4gICAgfVxuICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy12cGFpZC1hZCcpO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9maW5kU3VwcG9ydGVkVGVjaCA9IGZ1bmN0aW9uICh2YXN0UmVzcG9uc2UsIHNldHRpbmdzKSB7XG4gIGlmICghKHZhc3RSZXNwb25zZSBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciB2cGFpZE1lZGlhRmlsZXMgPSB2YXN0UmVzcG9uc2UubWVkaWFGaWxlcy5maWx0ZXIodmFzdFV0aWwuaXNWUEFJRCk7XG4gIHZhciBwcmVmZXJyZWRUZWNoID0gc2V0dGluZ3MgJiYgc2V0dGluZ3MucHJlZmVycmVkVGVjaDtcbiAgdmFyIHNraXBwZWRTdXBwb3J0VGVjaHMgPSBbXTtcbiAgdmFyIGksIGxlbiwgbWVkaWFGaWxlLCBWUEFJRFRlY2gsIGlzUHJlZmVyZWRUZWNoO1xuXG4gIGZvciAoaSA9IDAsIGxlbiA9IHZwYWlkTWVkaWFGaWxlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIG1lZGlhRmlsZSA9IHZwYWlkTWVkaWFGaWxlc1tpXTtcbiAgICBWUEFJRFRlY2ggPSB2YXN0VXRpbC5maW5kU3VwcG9ydGVkVlBBSURUZWNoKG1lZGlhRmlsZS50eXBlKTtcblxuICAgIC8vIG5vIHN1cHBvcnRlZCBWUEFJRCB0ZWNoIGZvdW5kLCBza2lwIG1lZGlhZmlsZVxuICAgIGlmICghVlBBSURUZWNoKSB7IGNvbnRpbnVlOyB9XG5cbiAgICAvLyBkbyB3ZSBoYXZlIGEgcHJlZmVyZWQgdGVjaCwgZG9lcyBpdCBwbGF5IHRoaXMgbWVkaWEgZmlsZSA/XG4gICAgaXNQcmVmZXJlZFRlY2ggPSBwcmVmZXJyZWRUZWNoID9cbiAgICAgIChtZWRpYUZpbGUudHlwZSA9PT0gcHJlZmVycmVkVGVjaCB8fCAoTWltZVR5cGVzW3ByZWZlcnJlZFRlY2hdICYmIE1pbWVUeXBlc1twcmVmZXJyZWRUZWNoXS5pbmRleE9mKG1lZGlhRmlsZS50eXBlKSA+IC0xICkpIDpcbiAgICAgIGZhbHNlO1xuXG4gICAgLy8gb3VyIHByZWZlcmVkIHRlY2ggY2FuIHJlYWQgdGhpcyBtZWRpYWZpbGUsIGRlZmF1bHRpbmcgdG8gaXQuXG4gICAgaWYgKGlzUHJlZmVyZWRUZWNoKSB7XG4gICAgICByZXR1cm4gbmV3IFZQQUlEVGVjaChtZWRpYUZpbGUsIHNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBza2lwcGVkU3VwcG9ydFRlY2hzLnB1c2goeyBtZWRpYUZpbGU6IG1lZGlhRmlsZSwgdGVjaDogVlBBSURUZWNoIH0pO1xuICB9XG5cbiAgaWYgKHNraXBwZWRTdXBwb3J0VGVjaHMubGVuZ3RoKSB7XG4gICAgdmFyIGZpcnN0VGVjaCA9IHNraXBwZWRTdXBwb3J0VGVjaHNbMF07XG4gICAgcmV0dXJuIG5ldyBmaXJzdFRlY2gudGVjaChmaXJzdFRlY2gubWVkaWFGaWxlLCBzZXR0aW5ncyk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2NyZWF0ZVZQQUlEQWRVbml0V3JhcHBlciA9IGZ1bmN0aW9uKGFkVW5pdCwgc3JjLCByZXNwb25zZVRpbWVvdXQpIHtcbiAgcmV0dXJuIG5ldyBWUEFJREFkVW5pdFdyYXBwZXIoYWRVbml0LCB7c3JjOiBzcmMsIHJlc3BvbnNlVGltZW91dDogcmVzcG9uc2VUaW1lb3V0fSk7XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9sb2FkQWRVbml0ID0gZnVuY3Rpb24gKHRlY2gsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgdmFyIHZqc1RlY2hFbCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuICB2YXIgcmVzcG9uc2VUaW1lb3V0ID0gdGhpcy5zZXR0aW5ncy5yZXNwb25zZVRpbWVvdXQgfHwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dDtcbiAgdGVjaC5sb2FkQWRVbml0KHRoaXMuY29udGFpbmVyRWwsIHZqc1RlY2hFbCwgZnVuY3Rpb24gKGVycm9yLCBhZFVuaXQpIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBXcmFwcGVkQWRVbml0ID0gdGhhdC5fY3JlYXRlVlBBSURBZFVuaXRXcmFwcGVyKGFkVW5pdCwgdGVjaC5tZWRpYUZpbGUuc3JjLCByZXNwb25zZVRpbWVvdXQpO1xuICAgICAgdmFyIHRlY2hDbGFzcyA9ICd2anMtJyArIHRlY2gubmFtZSArICctYWQnO1xuICAgICAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCB0ZWNoQ2xhc3MpO1xuICAgICAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHBsYXllci5lbCgpLHRlY2hDbGFzcyk7XG4gICAgICB9KTtcbiAgICAgIG5leHQobnVsbCwgV3JhcHBlZEFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBuZXh0KGUsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fcGxheUFkVW5pdCA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfSxcbiAgICB0aGlzLl9oYW5kc2hha2UuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9pbml0QWQuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9zZXR1cEV2ZW50cy5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX2FkZFNraXBCdXR0b24uYmluZCh0aGlzKSxcbiAgICB0aGlzLl9saW5rUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9zdGFydEFkLmJpbmQodGhpcylcbiAgXSwgY2FsbGJhY2spO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5faGFuZHNoYWtlID0gZnVuY3Rpb24gaGFuZHNoYWtlKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIGFkVW5pdC5oYW5kc2hha2VWZXJzaW9uKHRoaXMub3B0aW9ucy5WUEFJRF9WRVJTSU9OLCBmdW5jdGlvbiAoZXJyb3IsIHZlcnNpb24pIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24gJiYgaXNTdXBwb3J0ZWRWZXJzaW9uKHZlcnNpb24pKSB7XG4gICAgICByZXR1cm4gbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQobmV3IFZBU1RFcnJvcignb24gVlBBSURJbnRlZ3JhdG9yLl9oYW5kc2hha2UsIHVuc3VwcG9ydGVkIHZlcnNpb24gXCInICsgdmVyc2lvbiArICdcIicpLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGlzU3VwcG9ydGVkVmVyc2lvbih2ZXJzaW9uKSB7XG4gICAgdmFyIG1ham9yTnVtID0gbWFqb3IodmVyc2lvbik7XG4gICAgcmV0dXJuIG1ham9yTnVtID49IDEgJiYgbWFqb3JOdW0gPD0gMjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ham9yKHZlcnNpb24pIHtcbiAgICB2YXIgcGFydHMgPSB2ZXJzaW9uLnNwbGl0KCcuJyk7XG4gICAgcmV0dXJuIHBhcnNlSW50KHBhcnRzWzBdLCAxMCk7XG4gIH1cbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2luaXRBZCA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgdGVjaCA9IHRoaXMucGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XG4gIHZhciBkaW1lbnNpb24gPSBkb20uZ2V0RGltZW5zaW9uKHRlY2gpO1xuICBhZFVuaXQuaW5pdEFkKGRpbWVuc2lvbi53aWR0aCwgZGltZW5zaW9uLmhlaWdodCwgdGhpcy5WSUVXX01PREUuTk9STUFMLCAtMSwge0FkUGFyYW1ldGVyczogdmFzdFJlc3BvbnNlLmFkUGFyYW1ldGVycyB8fCAnJ30sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIG5leHQoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgfSk7XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9jcmVhdGVWQVNUVHJhY2tlciA9IGZ1bmN0aW9uKGFkVW5pdFNyYywgdmFzdFJlc3BvbnNlKSB7XG4gIHJldHVybiBuZXcgVkFTVFRyYWNrZXIoYWRVbml0U3JjLCB2YXN0UmVzcG9uc2UpO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fc2V0dXBFdmVudHMgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIGFkVW5pdFNyYyA9IGFkVW5pdC5vcHRpb25zLnNyYztcbiAgdmFyIHRyYWNrZXIgPSB0aGlzLl9jcmVhdGVWQVNUVHJhY2tlcihhZFVuaXRTcmMsIHZhc3RSZXNwb25zZSk7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgcHJldmlvdXNseU11dGVkO1xuICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0cmFja1Byb2dyZXNzKTtcbiAgcGxheWVyLm9uKCd2b2x1bWVjaGFuZ2UnLCB0cmFja1ZvbHVtZUNoYW5nZSk7XG4gIHBsYXllci5vbigndmFzdC5hZFN0YXJ0JywgdHJhY2tJbXByZXNzaW9ucyk7XG5cbiAgYWRVbml0Lm9uKCdBZFNraXBwZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU2tpcHBlZCcpO1xuICAgIHRyYWNrZXIudHJhY2tTa2lwKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRJbXByZXNzaW9uJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZEltcHJlc3Npb24nKTtcbiAgICB0cmFja2VyLnRyYWNrSW1wcmVzc2lvbnMoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFN0YXJ0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU3RhcnRlZCcpO1xuICAgIHRyYWNrZXIudHJhY2tDcmVhdGl2ZVZpZXcoKTtcbiAgICBub3RpZnlQbGF5VG9QbGF5ZXIoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFZpZGVvU3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9TdGFydCcpO1xuICAgIHRyYWNrZXIudHJhY2tTdGFydCgpO1xuICAgIG5vdGlmeVBsYXlUb1BsYXllcigpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkUGxheWluZycsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRQbGF5aW5nJyk7XG4gICAgdHJhY2tlci50cmFja1Jlc3VtZSgpO1xuICAgIG5vdGlmeVBsYXlUb1BsYXllcigpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkUGF1c2VkJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFBhdXNlZCcpO1xuICAgIHRyYWNrZXIudHJhY2tQYXVzZSgpO1xuICAgIG5vdGlmeVBhdXNlVG9QbGF5ZXIoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gbm90aWZ5UGxheVRvUGxheWVyKCl7XG4gICAgaWYodGhhdC5fYWRVbml0ICYmIHRoYXQuX2FkVW5pdC5pc1BhdXNlZCgpKXtcbiAgICAgIHRoYXQuX2FkVW5pdC5fcGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCdwbGF5Jyk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGlmeVBhdXNlVG9QbGF5ZXIoKSB7XG4gICAgaWYodGhhdC5fYWRVbml0KXtcbiAgICAgIHRoYXQuX2FkVW5pdC5fcGF1c2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3BhdXNlJyk7XG4gIH1cblxuICBhZFVuaXQub24oJ0FkVmlkZW9GaXJzdFF1YXJ0aWxlJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvRmlyc3RRdWFydGlsZScpO1xuICAgIHRyYWNrZXIudHJhY2tGaXJzdFF1YXJ0aWxlKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRWaWRlb01pZHBvaW50JywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvTWlkcG9pbnQnKTtcbiAgICB0cmFja2VyLnRyYWNrTWlkcG9pbnQoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFZpZGVvVGhpcmRRdWFydGlsZScsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb1RoaXJkUXVhcnRpbGUnKTtcbiAgICB0cmFja2VyLnRyYWNrVGhpcmRRdWFydGlsZSgpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVmlkZW9Db21wbGV0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb0NvbXBsZXRlJyk7XG4gICAgdHJhY2tlci50cmFja0NvbXBsZXRlKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRDbGlja1RocnUnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZENsaWNrVGhydScpO1xuICAgIHZhciB1cmwgPSBkYXRhLnVybDtcbiAgICB2YXIgcGxheWVySGFuZGxlcyA9IGRhdGEucGxheWVySGFuZGxlcztcbiAgICB2YXIgY2xpY2tUaHJ1VXJsID0gdXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcodXJsKSA/IHVybCA6IGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKHZhc3RSZXNwb25zZS5jbGlja1Rocm91Z2gpO1xuXG4gICAgdHJhY2tlci50cmFja0NsaWNrKCk7XG4gICAgaWYgKHBsYXllckhhbmRsZXMgJiYgY2xpY2tUaHJ1VXJsKSB7XG4gICAgICB3aW5kb3cub3BlbihjbGlja1RocnVVcmwsICdfYmxhbmsnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChjbGlja1Rocm91Z2hNYWNybykge1xuICAgICAgdmFyIHZhcmlhYmxlcyA9IHtcbiAgICAgICAgQVNTRVRVUkk6IGFkVW5pdC5vcHRpb25zLnNyYyxcbiAgICAgICAgQ09OVEVOVFBMQVlIRUFEOiAwIC8vSW4gVlBBSUQgdGhlcmUgaXMgbm8gbWV0aG9kIHRvIGtub3cgdGhlIGN1cnJlbnQgdGltZSBmcm9tIHRoZSBhZFVuaXRcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBjbGlja1Rocm91Z2hNYWNybyA/IHZhc3RVdGlsLnBhcnNlVVJMTWFjcm8oY2xpY2tUaHJvdWdoTWFjcm8sIHZhcmlhYmxlcykgOiBudWxsO1xuICAgIH1cbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFVzZXJBY2NlcHRJbnZpdGF0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFVzZXJBY2NlcHRJbnZpdGF0aW9uJyk7XG4gICAgdHJhY2tlci50cmFja0FjY2VwdEludml0YXRpb24oKTtcbiAgICB0cmFja2VyLnRyYWNrQWNjZXB0SW52aXRhdGlvbkxpbmVhcigpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVXNlckNsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFVzZXJDbG9zZScpO1xuICAgIHRyYWNrZXIudHJhY2tDbG9zZSgpO1xuICAgIHRyYWNrZXIudHJhY2tDbG9zZUxpbmVhcigpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVXNlck1pbmltaXplJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFVzZXJNaW5pbWl6ZScpO1xuICAgIHRyYWNrZXIudHJhY2tDb2xsYXBzZSgpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkRXJyb3InLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkRXJyb3InKTtcbiAgICAvL05PVEU6IHdlIHRyYWNrIGVycm9ycyBjb2RlIDkwMSwgYXMgbm90ZWQgaW4gVkFTVCAzLjBcbiAgICB0cmFja2VyLnRyYWNrRXJyb3JXaXRoQ29kZSg5MDEpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVm9sdW1lQ2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZvbHVtZUNoYW5nZScpO1xuICAgIHZhciBsYXN0Vm9sdW1lID0gcGxheWVyLnZvbHVtZSgpO1xuICAgIGFkVW5pdC5nZXRBZFZvbHVtZShmdW5jdGlvbiAoZXJyb3IsIGN1cnJlbnRWb2x1bWUpIHtcbiAgICAgIGlmIChsYXN0Vm9sdW1lICE9PSBjdXJyZW50Vm9sdW1lKSB7XG4gICAgICAgIGlmIChjdXJyZW50Vm9sdW1lID09PSAwICYmIGxhc3RWb2x1bWUgPiAwKSB7XG4gICAgICAgICAgdHJhY2tlci50cmFja011dGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50Vm9sdW1lID4gMCAmJiBsYXN0Vm9sdW1lID09PSAwKSB7XG4gICAgICAgICAgdHJhY2tlci50cmFja1VubXV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGxheWVyLnZvbHVtZShjdXJyZW50Vm9sdW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgdmFyIHVwZGF0ZVZpZXdTaXplID0gcmVzaXplQWQuYmluZCh0aGlzLCBwbGF5ZXIsIGFkVW5pdCwgdGhpcy5WSUVXX01PREUpO1xuICB2YXIgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQgPSB1dGlsaXRpZXMudGhyb3R0bGUodXBkYXRlVmlld1NpemUsIDEwMCk7XG4gIHZhciBhdXRvUmVzaXplID0gdGhpcy5zZXR0aW5ncy5hdXRvUmVzaXplO1xuXG4gIGlmIChhdXRvUmVzaXplKSB7XG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ29yaWVudGF0aW9uY2hhbmdlJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xuICB9XG5cbiAgcGxheWVyLm9uKCd2YXN0LnJlc2l6ZScsIHVwZGF0ZVZpZXdTaXplKTtcbiAgcGxheWVyLm9uKCd2cGFpZC5wYXVzZUFkJywgcGF1c2VBZFVuaXQpO1xuICBwbGF5ZXIub24oJ3ZwYWlkLnJlc3VtZUFkJywgcmVzdW1lQWRVbml0KTtcblxuICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIub2ZmKCd2YXN0LnJlc2l6ZScsIHVwZGF0ZVZpZXdTaXplKTtcbiAgICBwbGF5ZXIub2ZmKCd2cGFpZC5wYXVzZUFkJywgcGF1c2VBZFVuaXQpO1xuICAgIHBsYXllci5vZmYoJ3ZwYWlkLnJlc3VtZUFkJywgcmVzdW1lQWRVbml0KTtcblxuICAgIGlmIChhdXRvUmVzaXplKSB7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCk7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdvcmllbnRhdGlvbmNoYW5nZScsIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkKTtcbiAgICB9XG4gIH0pO1xuXG4gIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGF1c2VBZFVuaXQoKSB7XG4gICAgYWRVbml0LnBhdXNlQWQodXRpbGl0aWVzLm5vb3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdW1lQWRVbml0KCkge1xuICAgIGFkVW5pdC5yZXN1bWVBZCh1dGlsaXRpZXMubm9vcCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja1Byb2dyZXNzKCkge1xuICAgIHZhciBjdXJyZW50VGltZUluTXMgPSBwbGF5ZXIuY3VycmVudFRpbWUoKSAqIDEwMDA7XG4gICAgdHJhY2tlci50cmFja1Byb2dyZXNzKGN1cnJlbnRUaW1lSW5Ncyk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja0ltcHJlc3Npb25zKCkge1xuICAgIHRyYWNrZXIudHJhY2tJbXByZXNzaW9ucygpO1xuICAgIHRyYWNrZXIudHJhY2tDcmVhdGl2ZVZpZXcoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrVm9sdW1lQ2hhbmdlKCkge1xuICAgIHZhciBtdXRlZCA9IHBsYXllci5tdXRlZCgpO1xuICAgIGlmIChtdXRlZCkge1xuICAgICAgdHJhY2tlci50cmFja011dGUoKTtcbiAgICB9IGVsc2UgaWYgKHByZXZpb3VzbHlNdXRlZCkge1xuICAgICAgdHJhY2tlci50cmFja1VubXV0ZSgpO1xuICAgIH1cbiAgICBwcmV2aW91c2x5TXV0ZWQgPSBtdXRlZDtcbiAgfVxuXG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9hZGRTa2lwQnV0dG9uID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciBza2lwQnV0dG9uO1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cbiAgYWRVbml0Lm9uKCdBZFNraXBwYWJsZVN0YXRlQ2hhbmdlJywgdXBkYXRlU2tpcEJ1dHRvblN0YXRlKTtcblxuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZVNraXBCdXR0b24pO1xuXG4gIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xuICBmdW5jdGlvbiB1cGRhdGVTa2lwQnV0dG9uU3RhdGUoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU2tpcHBhYmxlU3RhdGVDaGFuZ2UnKTtcbiAgICBhZFVuaXQuZ2V0QWRTa2lwcGFibGVTdGF0ZShmdW5jdGlvbiAoZXJyb3IsIGlzU2tpcHBhYmxlKSB7XG4gICAgICBpZiAoaXNTa2lwcGFibGUpIHtcbiAgICAgICAgaWYgKCFza2lwQnV0dG9uKSB7XG4gICAgICAgICAgYWRkU2tpcEJ1dHRvbihwbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVTa2lwQnV0dG9uKHBsYXllcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTa2lwQnV0dG9uKHBsYXllcikge1xuICAgIHNraXBCdXR0b24gPSBjcmVhdGVTa2lwQnV0dG9uKHBsYXllcik7XG4gICAgcGxheWVyLmVsKCkuYXBwZW5kQ2hpbGQoc2tpcEJ1dHRvbik7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVTa2lwQnV0dG9uKCkge1xuICAgIGRvbS5yZW1vdmUoc2tpcEJ1dHRvbik7XG4gICAgc2tpcEJ1dHRvbiA9IG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTa2lwQnV0dG9uKCkge1xuICAgIHZhciBza2lwQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sIFwidmFzdC1za2lwLWJ1dHRvblwiKTtcbiAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgXCJlbmFibGVkXCIpO1xuICAgIHNraXBCdXR0b24uaW5uZXJIVE1MID0gXCJTa2lwIGFkXCI7XG5cbiAgICBza2lwQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRVbml0LnNraXBBZCh1dGlsaXRpZXMubm9vcCk7Ly9XZSBza2lwIHRoZSBhZFVuaXRcblxuICAgICAgLy9XZSBwcmV2ZW50IGV2ZW50IHByb3BhZ2F0aW9uIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggdGhlIGNsaWNrVGhyb3VnaCBhbmQgc28gb25cbiAgICAgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBza2lwQnV0dG9uO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9saW5rUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICBsaW5rVm9sdW1lQ29udHJvbCh0aGlzLnBsYXllciwgYWRVbml0KTtcbiAgbGlua0Z1bGxTY3JlZW5Db250cm9sKHRoaXMucGxheWVyLCBhZFVuaXQsIHRoaXMuVklFV19NT0RFKTtcblxuICBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIGxpbmtWb2x1bWVDb250cm9sKHBsYXllciwgYWRVbml0KSB7XG4gICAgcGxheWVyLm9uKCd2b2x1bWVjaGFuZ2UnLCB1cGRhdGVBZFVuaXRWb2x1bWUpO1xuICAgIGFkVW5pdC5vbignQWRWb2x1bWVDaGFuZ2UnLCB1cGRhdGVQbGF5ZXJWb2x1bWUpO1xuXG4gICAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBwbGF5ZXIub2ZmKCd2b2x1bWVjaGFuZ2UnLCB1cGRhdGVBZFVuaXRWb2x1bWUpO1xuICAgIH0pO1xuXG5cbiAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgZnVuY3Rpb24gdXBkYXRlQWRVbml0Vm9sdW1lKCkge1xuICAgICAgdmFyIHZvbCA9IHBsYXllci5tdXRlZCgpID8gMCA6IHBsYXllci52b2x1bWUoKTtcbiAgICAgIGFkVW5pdC5zZXRBZFZvbHVtZSh2b2wsIGxvZ0Vycm9yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQbGF5ZXJWb2x1bWUoKSB7XG4gICAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWb2x1bWVDaGFuZ2UnKTtcbiAgICAgIHZhciBsYXN0Vm9sdW1lID0gcGxheWVyLnZvbHVtZSgpO1xuICAgICAgYWRVbml0LmdldEFkVm9sdW1lKGZ1bmN0aW9uIChlcnJvciwgdm9sKSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGxvZ0Vycm9yKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAobGFzdFZvbHVtZSAhPT0gdm9sKSB7XG4gICAgICAgICAgICBwbGF5ZXIudm9sdW1lKHZvbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsaW5rRnVsbFNjcmVlbkNvbnRyb2wocGxheWVyLCBhZFVuaXQsIFZJRVdfTU9ERSkge1xuICAgIHZhciB1cGRhdGVWaWV3U2l6ZSA9IHJlc2l6ZUFkLmJpbmQodGhhdCwgcGxheWVyLCBhZFVuaXQsIFZJRVdfTU9ERSk7XG5cbiAgICBwbGF5ZXIub24oJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB1cGRhdGVWaWV3U2l6ZSk7XG5cbiAgICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHBsYXllci5vZmYoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB1cGRhdGVWaWV3U2l6ZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX3N0YXJ0QWQgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuXG4gIGFkVW5pdC5zdGFydEFkKGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkU3RhcnQnKTtcbiAgICB9XG4gICAgbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICB9KTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2ZpbmlzaFBsYXlpbmcgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICBhZFVuaXQub24oJ0FkU3RvcHBlZCcsIGZ1bmN0aW9uICgpIHtcbiAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFN0b3BwZWQnKTtcbiAgIGZpbmlzaFBsYXlpbmdBZChudWxsKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZEVycm9yJywgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgdmFyIGVyck1zZyA9IGVycm9yPyBlcnJvci5tZXNzYWdlIDogJ29uIFZQQUlESW50ZWdyYXRvciwgZXJyb3Igd2hpbGUgd2FpdGluZyBmb3IgdGhlIGFkVW5pdCB0byBmaW5pc2ggcGxheWluZyc7XG4gICAgZmluaXNoUGxheWluZ0FkKG5ldyBWQVNURXJyb3IoZXJyTXNnKSk7XG4gIH0pO1xuXG4gIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gZmluaXNoUGxheWluZ0FkKGVycm9yKSB7XG4gICAgbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl90cmFja0Vycm9yID0gZnVuY3Rpb24gdHJhY2tFcnJvcihyZXNwb25zZSwgZXJyb3JDb2RlKSB7XG4gIHZhc3RVdGlsLnRyYWNrKHJlc3BvbnNlLmVycm9yVVJMTWFjcm9zLCB7RVJST1JDT0RFOiBlcnJvckNvZGUgfHwgOTAxfSk7XG59O1xuXG5mdW5jdGlvbiByZXNpemVBZChwbGF5ZXIsIGFkVW5pdCwgVklFV19NT0RFKSB7XG4gIHZhciB0ZWNoID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XG4gIHZhciBkaW1lbnNpb24gPSBkb20uZ2V0RGltZW5zaW9uKHRlY2gpO1xuICB2YXIgTU9ERSA9IHBsYXllci5pc0Z1bGxzY3JlZW4oKSA/IFZJRVdfTU9ERS5GVUxMU0NSRUVOIDogVklFV19NT0RFLk5PUk1BTDtcbiAgYWRVbml0LnJlc2l6ZUFkKGRpbWVuc2lvbi53aWR0aCwgZGltZW5zaW9uLmhlaWdodCwgTU9ERSwgbG9nRXJyb3IpO1xufVxuXG5mdW5jdGlvbiBsb2dFcnJvcihlcnJvcikge1xuICBpZiAoZXJyb3IpIHtcbiAgICBsb2dnZXIuZXJyb3IgKCdFUlJPUjogJyArIGVycm9yLm1lc3NhZ2UsIGVycm9yKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlESW50ZWdyYXRvcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xuXG52YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZWxlbWVudC5jbGFzc05hbWUgPSAndmpzLWFkcy1sYWJlbCB2anMtY29udHJvbCB2anMtbGFiZWwtaGlkZGVuJztcbmVsZW1lbnQuaW5uZXJIVE1MID0gJ0FkdmVydGlzZW1lbnQnO1xuXG52YXIgQWRzTGFiZWxGYWN0b3J5ID0gZnVuY3Rpb24oYmFzZUNvbXBvbmVudCkge1xuICByZXR1cm4ge1xuICAgIC8qKiBAY29uc3RydWN0b3IgKi9cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHBsYXllciwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucy5lbCA9IGVsZW1lbnQ7XG4gICAgICBiYXNlQ29tcG9uZW50LmNhbGwodGhpcywgcGxheWVyLCBvcHRpb25zKTtcblxuICAgICAgLy8gV2UgYXN5bmNocm9ub3VzbHkgcmVwb3NpdGlvbiB0aGUgYWRzIGxhYmVsIGVsZW1lbnRcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VycmVudFRpbWVDb21wID0gcGxheWVyLmNvbnRyb2xCYXIgJiYoIHBsYXllci5jb250cm9sQmFyLmdldENoaWxkKFwidGltZXJDb250cm9sc1wiKSB8fCBwbGF5ZXIuY29udHJvbEJhci5nZXRDaGlsZChcImN1cnJlbnRUaW1lRGlzcGxheVwiKSApO1xuICAgICAgICBpZihjdXJyZW50VGltZUNvbXApIHtcbiAgICAgICAgICBwbGF5ZXIuY29udHJvbEJhci5lbCgpLmluc2VydEJlZm9yZShlbGVtZW50LCBjdXJyZW50VGltZUNvbXAuZWwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKGVsZW1lbnQsICd2anMtbGFiZWwtaGlkZGVuJyk7XG4gICAgICB9LCAwKTtcbiAgICB9LFxuXG4gICAgZWw6IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFkc0xhYmVsRmFjdG9yeTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYXNlVmlkZW9Kc0NvbXBvbmVudCA9IHZpZGVvanMuZ2V0Q29tcG9uZW50KCdDb21wb25lbnQnKTtcblxudmFyIEFkc0xhYmVsID0gcmVxdWlyZSgnLi9hZHMtbGFiZWwnKShiYXNlVmlkZW9Kc0NvbXBvbmVudCk7XG5cbnZpZGVvanMucmVnaXN0ZXJDb21wb25lbnQoJ0Fkc0xhYmVsJywgdmlkZW9qcy5leHRlbmQoYmFzZVZpZGVvSnNDb21wb25lbnQsIEFkc0xhYmVsKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVGhlIGNvbXBvbmVudCB0aGF0IHNob3dzIGEgYmxhY2sgc2NyZWVuIHVudGlsIHRoZSBhZHMgcGx1Z2luIGhhcyBkZWNpZGVkIGlmIGl0IGNhbiBvciBpdCBjYW4gbm90IHBsYXkgdGhlIGFkLlxuICpcbiAqIE5vdGU6IEluIGNhc2UgeW91IHdvbmRlciB3aHkgaW5zdGVhZCBvZiB0aGlzIGJsYWNrIHBvc3RlciB3ZSBkb24ndCBqdXN0IHNob3cgdGhlIHNwaW5uZXIgbG9hZGVyLlxuICogICAgICAgSU9TIGRldmljZXMgZG8gbm90IHdvcmsgd2VsbCB3aXRoIGFuaW1hdGlvbnMgYW5kIHRoZSBicm93c2VyIGNocmFzaGVzIGZyb20gdGltZSB0byB0aW1lIFRoYXQgaXMgd2h5IHdlIGNob3NlIHRvXG4gKiAgICAgICBoYXZlIGEgc2Vjb25kYXJ5IGJsYWNrIHBvc3Rlci5cbiAqXG4gKiAgICAgICBJdCBhbHNvIG1ha2VzIGl0IG11Y2ggbW9yZSBlYXNpZXIgZm9yIHRoZSB1c2VycyBvZiB0aGUgcGx1Z2luIHNpbmNlIGl0IGRvZXMgbm90IGNoYW5nZSB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgb2YgdGhlXG4gKiAgICAgICBzcGlubmVyIGFuZCB0aGUgcGxheWVyIHdvcmtzIHRoZSBzYW1lIHdheSB3aXRoIGFuZCB3aXRob3V0IHRoZSBwbHVnaW4uXG4gKlxuICogQHBhcmFtIHt2anMuUGxheWVyfE9iamVjdH0gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG52YXIgQmxhY2tQb3N0ZXJGYWN0b3J5ID0gZnVuY3Rpb24oYmFzZUNvbXBvbmVudCkge1xuICByZXR1cm4ge1xuICAgIC8qKiBAY29uc3RydWN0b3IgKi9cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHBsYXllciwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucy5lbCA9IGVsZW1lbnQ7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICd2anMtYmxhY2stcG9zdGVyJztcbiAgICAgIGJhc2VDb21wb25lbnQuY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpO1xuXG4gICAgICB2YXIgcG9zdGVySW1nID0gcGxheWVyLmdldENoaWxkKCdwb3N0ZXJJbWFnZScpO1xuXG4gICAgICAvL1dlIG5lZWQgdG8gZG8gaXQgYXN5bmNocm9ub3VzbHkgdG8gYmUgc3VyZSB0aGF0IHRoZSBibGFjayBwb3N0ZXIgZWwgaXMgb24gdGhlIGRvbS5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHBvc3RlckltZyAmJiBwbGF5ZXIgJiYgcGxheWVyLmVsKCkpIHtcbiAgICAgICAgICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgcG9zdGVySW1nLmVsKCkpO1xuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9LFxuICAgIGVsOiBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCbGFja1Bvc3RlckZhY3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFzZVZpZGVvSnNDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5cbnZhciBCbGFja1Bvc3RlciA9IHJlcXVpcmUoJy4vYmxhY2stcG9zdGVyJykoYmFzZVZpZGVvSnNDb21wb25lbnQpO1xuXG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdCbGFja1Bvc3RlcicsIHZpZGVvanMuZXh0ZW5kKGJhc2VWaWRlb0pzQ29tcG9uZW50LCBCbGFja1Bvc3RlcikpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVkFTVENsaWVudCA9IHJlcXVpcmUoJy4uL2Fkcy92YXN0L1ZBU1RDbGllbnQnKTtcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC9WQVNURXJyb3InKTtcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4uL2Fkcy92YXN0L3Zhc3RVdGlsJyk7XG5cbnZhciBWQVNUSW50ZWdyYXRvciA9IHJlcXVpcmUoJy4uL2Fkcy92YXN0L1ZBU1RJbnRlZ3JhdG9yJyk7XG52YXIgVlBBSURJbnRlZ3JhdG9yID0gcmVxdWlyZSgnLi4vYWRzL3ZwYWlkL1ZQQUlESW50ZWdyYXRvcicpO1xuXG52YXIgYXN5bmMgPSByZXF1aXJlKCcuLi91dGlscy9hc3luYycpO1xudmFyIGRvbSA9IHJlcXVpcmUoJy4uL3V0aWxzL2RvbScpO1xudmFyIHBsYXllclV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvcGxheWVyVXRpbHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciBsb2dnZXIgPSByZXF1aXJlICgnLi4vdXRpbHMvY29uc29sZUxvZ2dlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFZBU1RQbHVnaW4ob3B0aW9ucykge1xuICB2YXIgc25hcHNob3Q7XG4gIHZhciBwbGF5ZXIgPSB0aGlzO1xuICB2YXIgdmFzdCA9IG5ldyBWQVNUQ2xpZW50KCk7XG4gIHZhciBhZHNDYW5jZWxlZCA9IGZhbHNlO1xuICB2YXIgZGVmYXVsdE9wdHMgPSB7XG4gICAgLy8gbWF4aW11bSBhbW91bnQgb2YgdGltZSBpbiBtcyB0byB3YWl0IHRvIHJlY2VpdmUgYGFkc3JlYWR5YCBmcm9tIHRoZSBhZFxuICAgIC8vIGltcGxlbWVudGF0aW9uIGFmdGVyIHBsYXkgaGFzIGJlZW4gcmVxdWVzdGVkLiBBZCBpbXBsZW1lbnRhdGlvbnMgYXJlXG4gICAgLy8gZXhwZWN0ZWQgdG8gbG9hZCBhbnkgZHluYW1pYyBsaWJyYXJpZXMgYW5kIG1ha2UgYW55IHJlcXVlc3RzIHRvIGRldGVybWluZVxuICAgIC8vIGFkIHBvbGljaWVzIGZvciBhIHZpZGVvIGR1cmluZyB0aGlzIHRpbWUuXG4gICAgdGltZW91dDogNTAwLFxuXG4gICAgLy9UT0RPOmZpbmlzaCB0aGlzIElPUyBGSVhcbiAgICAvL1doZW5ldmVyIHlvdSBwbGF5IGFuIGFkZCBvbiBJT1MsIHRoZSBuYXRpdmUgcGxheWVyIGtpY2tzIGluIGFuZCB3ZSBsb29zZSBjb250cm9sIG9mIGl0LiBPbiB2ZXJ5IGhlYXZ5IHBhZ2VzIHRoZSAncGxheScgZXZlbnRcbiAgICAvLyBNYXkgb2NjdXIgYWZ0ZXIgdGhlIHZpZGVvIGNvbnRlbnQgaGFzIGFscmVhZHkgc3RhcnRlZC4gVGhpcyBpcyB3cm9uZyBpZiB5b3Ugd2FudCB0byBwbGF5IGEgcHJlcm9sbCBhZCB0aGF0IG5lZWRzIHRvIGhhcHBlbiBiZWZvcmUgdGhlIHVzZXJcbiAgICAvLyBzdGFydHMgd2F0Y2hpbmcgdGhlIGNvbnRlbnQuIFRvIHByZXZlbnQgdGhpcyB1c2VjXG4gICAgaW9zUHJlcm9sbENhbmNlbFRpbWVvdXQ6IDIwMDAsXG5cbiAgICAvLyBtYXhpbXVuIGFtb3VudCBvZiB0aW1lIGZvciB0aGUgYWQgdG8gYWN0dWFsbHkgc3RhcnQgcGxheWluZy4gSWYgdGhpcyB0aW1lb3V0IGdldHNcbiAgICAvLyB0cmlnZ2VyZWQgdGhlIGFkcyB3aWxsIGJlIGNhbmNlbGxlZFxuICAgIGFkQ2FuY2VsVGltZW91dDogMzAwMCxcblxuICAgIC8vIEJvb2xlYW4gZmxhZyB0aGF0IGNvbmZpZ3VyZXMgdGhlIHBsYXllciB0byBwbGF5IGEgbmV3IGFkIGJlZm9yZSB0aGUgdXNlciBzZWVzIHRoZSB2aWRlbyBhZ2FpblxuICAgIC8vIHRoZSBjdXJyZW50IHZpZGVvXG4gICAgcGxheUFkQWx3YXlzOiBmYWxzZSxcblxuICAgIC8vIEZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGFkcyBieSBkZWZhdWx0LlxuICAgIGFkc0VuYWJsZWQ6IHRydWUsXG5cbiAgICAvLyBCb29sZWFuIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIHJlc2l6ZSB3aXRoIHdpbmRvdy5yZXNpemUgb3Igb3JpZW50YXRpb25jaGFuZ2VcbiAgICBhdXRvUmVzaXplOiB0cnVlLFxuXG4gICAgLy8gdmVyYm9zaXR5IG9mIGNvbnNvbGUgbG9nZ2luZzpcbiAgICAvLyAwIC0gZXJyb3JcbiAgICAvLyAxIC0gZXJyb3IsIHdhcm5cbiAgICAvLyAyIC0gZXJyb3IsIHdhcm4sIGluZm9cbiAgICAvLyAzIC0gZXJyb3IsIHdhcm4sIGluZm8sIGxvZ1xuICAgIC8vIDQgLSBlcnJvciwgd2FybiwgaW5mbywgbG9nLCBkZWJ1Z1xuICAgIHZlcmJvc2l0eTogMFxuICB9O1xuXG4gIHZhciBzZXR0aW5ncyA9IHV0aWxpdGllcy5leHRlbmQoe30sIGRlZmF1bHRPcHRzLCBvcHRpb25zIHx8IHt9KTtcblxuICBpZih1dGlsaXRpZXMuaXNVbmRlZmluZWQoc2V0dGluZ3MuYWRUYWdVcmwpICYmIHV0aWxpdGllcy5pc0RlZmluZWQoc2V0dGluZ3MudXJsKSl7XG4gICAgc2V0dGluZ3MuYWRUYWdVcmwgPSBzZXR0aW5ncy51cmw7XG4gIH1cblxuICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKHNldHRpbmdzLmFkVGFnVXJsKSkge1xuICAgIHNldHRpbmdzLmFkVGFnVXJsID0gdXRpbGl0aWVzLmVjaG9GbihzZXR0aW5ncy5hZFRhZ1VybCk7XG4gIH1cblxuICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChzZXR0aW5ncy5hZFRhZ1hNTCkgJiYgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKHNldHRpbmdzLmFkVGFnWE1MKSkge1xuICAgIHJldHVybiB0cmFja0FkRXJyb3IobmV3IFZBU1RFcnJvcignb24gVmlkZW9KUyBWQVNUIHBsdWdpbiwgdGhlIHBhc3NlZCBhZFRhZ1hNTCBvcHRpb24gZG9lcyBub3QgY29udGFpbiBhIGZ1bmN0aW9uJykpO1xuICB9XG5cbiAgaWYgKCF1dGlsaXRpZXMuaXNEZWZpbmVkKHNldHRpbmdzLmFkVGFnVXJsKSAmJiAhdXRpbGl0aWVzLmlzRnVuY3Rpb24oc2V0dGluZ3MuYWRUYWdYTUwpKSB7XG4gICAgcmV0dXJuIHRyYWNrQWRFcnJvcihuZXcgVkFTVEVycm9yKCdvbiBWaWRlb0pTIFZBU1QgcGx1Z2luLCBtaXNzaW5nIGFkVGFnVXJsIG9uIG9wdGlvbnMgb2JqZWN0JykpO1xuICB9XG5cbiAgbG9nZ2VyLnNldFZlcmJvc2l0eSAoc2V0dGluZ3MudmVyYm9zaXR5KTtcblxuICBwbGF5ZXJVdGlscy5wcmVwYXJlRm9yQWRzKHBsYXllcik7XG5cbiAgaWYgKHNldHRpbmdzLnBsYXlBZEFsd2F5cykge1xuICAgIC8vIE5vIG1hdHRlciB3aGF0IGhhcHBlbnMgd2UgcGxheSBhIG5ldyBhZCBiZWZvcmUgdGhlIHVzZXIgc2VlcyB0aGUgdmlkZW8gYWdhaW4uXG4gICAgcGxheWVyLm9uKCd2YXN0LmNvbnRlbnRFbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QucmVzZXQnKTtcbiAgICAgIH0sIDApO1xuICAgIH0pO1xuICB9XG5cbiAgcGxheWVyLm9uKCd2YXN0LmZpcnN0UGxheScsIHRyeVRvUGxheVByZXJvbGxBZCk7XG5cbiAgcGxheWVyLm9uKCd2YXN0LnJlc2V0JywgZnVuY3Rpb24gKCkge1xuICAgIC8vSWYgd2UgYXJlIHJlc2V0aW5nIHRoZSBwbHVnaW4sIHdlIGRvbid0IHdhbnQgdG8gcmVzdG9yZSB0aGUgY29udGVudFxuICAgIHNuYXBzaG90ID0gbnVsbDtcbiAgICBjYW5jZWxBZHMoKTtcbiAgfSk7XG5cbiAgcGxheWVyLnZhc3QgPSB7XG4gICAgaXNFbmFibGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gc2V0dGluZ3MuYWRzRW5hYmxlZDtcbiAgICB9LFxuXG4gICAgZW5hYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXR0aW5ncy5hZHNFbmFibGVkID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgZGlzYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgc2V0dGluZ3MuYWRzRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gcGxheWVyLnZhc3Q7XG5cbiAgLyoqKiogTG9jYWwgZnVuY3Rpb25zICoqKiovXG4gIGZ1bmN0aW9uIHRyeVRvUGxheVByZXJvbGxBZCgpIHtcbiAgICAvL1dlIHJlbW92ZSB0aGUgcG9zdGVyIHRvIHByZXZlbnQgZmxpY2tlcmluZyB3aGVuZXZlciB0aGUgY29udGVudCBzdGFydHMgcGxheWluZ1xuICAgIHBsYXllclV0aWxzLnJlbW92ZU5hdGl2ZVBvc3RlcihwbGF5ZXIpO1xuXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZHNDYW5jZWwnLCAndmFzdC5hZEVuZCddLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZW1vdmVBZFVuaXQoKTtcbiAgICAgIHJlc3RvcmVWaWRlb0NvbnRlbnQoKTtcbiAgICB9KTtcblxuICAgIGFzeW5jLndhdGVyZmFsbChbXG4gICAgICBjaGVja0Fkc0VuYWJsZWQsXG4gICAgICBwcmVwYXJlUGxheWVyRm9yQWQsXG4gICAgICBzdGFydEFkQ2FuY2VsVGltZW91dCxcbiAgICAgIHBsYXlQcmVyb2xsQWRcbiAgICBdLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdHJhY2tBZEVycm9yKGVycm9yLCByZXNwb25zZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZEVuZCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWRVbml0KCkge1xuICAgICAgaWYgKHBsYXllci52YXN0ICYmIHBsYXllci52YXN0LmFkVW5pdCkge1xuICAgICAgICBwbGF5ZXIudmFzdC5hZFVuaXQgPSBudWxsOyAvL1dlIHJlbW92ZSB0aGUgYWRVbml0XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdG9yZVZpZGVvQ29udGVudCgpIHtcbiAgICAgIHNldHVwQ29udGVudEV2ZW50cygpO1xuICAgICAgaWYgKHNuYXBzaG90KSB7XG4gICAgICAgIHBsYXllclV0aWxzLnJlc3RvcmVQbGF5ZXJTbmFwc2hvdChwbGF5ZXIsIHNuYXBzaG90KTtcbiAgICAgICAgc25hcHNob3QgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwQ29udGVudEV2ZW50cygpIHtcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnLCAndmFzdC5yZXNldCcsICd2YXN0LmZpcnN0UGxheSddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGlmIChldnQudHlwZSAhPT0gJ3BsYXlpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuY29udGVudFN0YXJ0Jyk7XG5cbiAgICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsnZW5kZWQnLCAndmFzdC5yZXNldCcsICd2YXN0LmZpcnN0UGxheSddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgaWYgKGV2dC50eXBlID09PSAnZW5kZWQnKSB7XG4gICAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5jb250ZW50RW5kJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrQWRzRW5hYmxlZChuZXh0KSB7XG4gICAgICBpZiAoc2V0dGluZ3MuYWRzRW5hYmxlZCkge1xuICAgICAgICByZXR1cm4gbmV4dChudWxsKTtcbiAgICAgIH1cbiAgICAgIG5leHQobmV3IFZBU1RFcnJvcignQWRzIGFyZSBub3QgZW5hYmxlZCcpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVwYXJlUGxheWVyRm9yQWQobmV4dCkge1xuICAgICAgaWYgKGNhblBsYXlQcmVyb2xsQWQoKSkge1xuICAgICAgICBzbmFwc2hvdCA9IHBsYXllclV0aWxzLmdldFBsYXllclNuYXBzaG90KHBsYXllcik7XG4gICAgICAgIHBsYXllci5wYXVzZSgpO1xuICAgICAgICBhZGRTcGlubmVySWNvbigpO1xuXG4gICAgICAgIGlmKHBsYXllci5wYXVzZWQoKSkge1xuICAgICAgICAgIG5leHQobnVsbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsncGxheWluZyddLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHBsYXllci5wYXVzZSgpO1xuICAgICAgICAgICAgbmV4dChudWxsKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dChuZXcgVkFTVEVycm9yKCd2aWRlbyBjb250ZW50IGhhcyBiZWVuIHBsYXlpbmcgYmVmb3JlIHByZXJvbGwgYWQnKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuUGxheVByZXJvbGxBZCgpIHtcbiAgICAgIHJldHVybiAhdXRpbGl0aWVzLmlzSVBob25lKCkgfHwgcGxheWVyLmN1cnJlbnRUaW1lKCkgPD0gc2V0dGluZ3MuaW9zUHJlcm9sbENhbmNlbFRpbWVvdXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRBZENhbmNlbFRpbWVvdXQobmV4dCkge1xuICAgICAgdmFyIGFkQ2FuY2VsVGltZW91dElkO1xuICAgICAgYWRzQ2FuY2VsZWQgPSBmYWxzZTtcblxuICAgICAgYWRDYW5jZWxUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJhY2tBZEVycm9yKG5ldyBWQVNURXJyb3IoJ3RpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgdGhlIHZpZGVvIHRvIHN0YXJ0IHBsYXlpbmcnLCA0MDIpKTtcbiAgICAgIH0sIHNldHRpbmdzLmFkQ2FuY2VsVGltZW91dCk7XG5cbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRTdGFydCcsICd2YXN0LmFkc0NhbmNlbCddLCBjbGVhckFkQ2FuY2VsVGltZW91dCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdhZENhbmNlbFRpbWVvdXQnLCBzZXR0aW5ncy5hZENhbmNlbFRpbWVvdXQpO1xuXG4gICAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgICBmdW5jdGlvbiBjbGVhckFkQ2FuY2VsVGltZW91dCgpIHtcbiAgICAgICAgaWYgKGFkQ2FuY2VsVGltZW91dElkKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGFkQ2FuY2VsVGltZW91dElkKTtcbiAgICAgICAgICBhZENhbmNlbFRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbmV4dChudWxsKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRTcGlubmVySWNvbigpIHtcbiAgICAgIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy12YXN0LWFkLWxvYWRpbmcnKTtcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRTdGFydCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVTcGlubmVySWNvbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3Bpbm5lckljb24oKSB7XG4gICAgICAvL0lNUE9SVEFOVCBOT1RFOiBXZSByZW1vdmUgdGhlIHNwaW5uZXJJY29uIGFzeW5jaHJvbm91c2x5IHRvIGdpdmUgdGltZSB0byB0aGUgYnJvd3NlciB0byBzdGFydCB0aGUgdmlkZW8uXG4gICAgICAvLyBJZiB3ZSByZW1vdmUgaXQgc3luY2hyb25vdXNseSB3ZSBzZWUgYSBmbGFzaCBvZiB0aGUgY29udGVudCB2aWRlbyBiZWZvcmUgdGhlIGFkIHN0YXJ0cyBwbGF5aW5nLlxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy12YXN0LWFkLWxvYWRpbmcnKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxBZHMoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRzQ2FuY2VsJyk7XG4gICAgYWRzQ2FuY2VsZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheVByZXJvbGxBZChjYWxsYmFjaykge1xuICAgIGFzeW5jLndhdGVyZmFsbChbXG4gICAgICBnZXRWYXN0UmVzcG9uc2UsXG4gICAgICBwbGF5QWRcbiAgICBdLCBjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRWYXN0UmVzcG9uc2UoY2FsbGJhY2spIHtcbiAgICB2YXN0LmdldFZBU1RSZXNwb25zZShzZXR0aW5ncy5hZFRhZ1VybCA/IHNldHRpbmdzLmFkVGFnVXJsKCkgOiBzZXR0aW5ncy5hZFRhZ1hNTCwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheUFkKHZhc3RSZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgICAvL1RPRE86IEZpbmQgYSBiZXR0ZXIgd2F5IHRvIHN0b3AgdGhlIHBsYXkuIFRoZSAncGxheVByZXJvbGxXYXRlcmZhbGwnIGVuZHMgaW4gYW4gaW5jb25zaXN0ZW50IHNpdHVhdGlvblxuICAgIC8vSWYgdGhlIHN0YXRlIGlzIG5vdCAncHJlcm9sbD8nIGl0IG1lYW5zIHRoZSBhZHMgd2VyZSBjYW5jZWxlZCB0aGVyZWZvcmUsIHdlIGJyZWFrIHRoZSB3YXRlcmZhbGxcbiAgICBpZiAoYWRzQ2FuY2VsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYWRJbnRlZ3JhdG9yID0gaXNWUEFJRCh2YXN0UmVzcG9uc2UpID8gbmV3IFZQQUlESW50ZWdyYXRvcihwbGF5ZXIsIHNldHRpbmdzKSA6IG5ldyBWQVNUSW50ZWdyYXRvcihwbGF5ZXIpO1xuICAgIHZhciBhZEZpbmlzaGVkID0gZmFsc2U7XG5cbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkU3RhcnQnLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKGV2dC50eXBlID09PSAndmFzdC5hZFN0YXJ0Jykge1xuICAgICAgICBhZGRBZHNMYWJlbCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVBZHNMYWJlbCk7XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzSURldmljZSgpKSB7XG4gICAgICBwcmV2ZW50TWFudWFsUHJvZ3Jlc3MoKTtcbiAgICB9XG5cbiAgICBwbGF5ZXIudmFzdC52YXN0UmVzcG9uc2UgPSB2YXN0UmVzcG9uc2U7XG4gICAgbG9nZ2VyLmRlYnVnIChcImNhbGxpbmcgYWRJbnRlZ3JhdG9yLnBsYXlBZCgpIHdpdGggdmFzdFJlc3BvbnNlOlwiLCB2YXN0UmVzcG9uc2UpO1xuICAgIHBsYXllci52YXN0LmFkVW5pdCA9IGFkSW50ZWdyYXRvci5wbGF5QWQodmFzdFJlc3BvbnNlLCBjYWxsYmFjayk7XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKioqL1xuICAgIGZ1bmN0aW9uIGFkZEFkc0xhYmVsKCkge1xuICAgICAgaWYgKGFkRmluaXNoZWQgfHwgcGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoJ0Fkc0xhYmVsJykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBwbGF5ZXIuY29udHJvbEJhci5hZGRDaGlsZCgnQWRzTGFiZWwnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBZHNMYWJlbCgpIHtcbiAgICAgIHBsYXllci5jb250cm9sQmFyLnJlbW92ZUNoaWxkKCdBZHNMYWJlbCcpO1xuICAgICAgYWRGaW5pc2hlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJldmVudE1hbnVhbFByb2dyZXNzKCkge1xuICAgICAgLy9JT1MgdmlkZW8gY2xvY2sgaXMgdmVyeSB1bnJlbGlhYmxlIGFuZCB3ZSBuZWVkIGEgMyBzZWNvbmRzIHRocmVzaG9sZCB0byBlbnN1cmUgdGhhdCB0aGUgdXNlciBmb3J3YXJkZWQvcmV3b3VuZCB0aGUgYWRcbiAgICAgIHZhciBQUk9HUkVTU19USFJFU0hPTEQgPSAzO1xuICAgICAgdmFyIHByZXZpb3VzVGltZSA9IDA7XG4gICAgICB2YXIgc2tpcGFkX2F0dGVtcHRzID0gMDtcblxuICAgICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgcHJldmVudEFkU2Vlayk7XG4gICAgICBwbGF5ZXIub24oJ2VuZGVkJywgcHJldmVudEFkU2tpcCk7XG5cbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnLCAndmFzdC5hZEVycm9yJ10sIHN0b3BQcmV2ZW50TWFudWFsUHJvZ3Jlc3MpO1xuXG4gICAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgICBmdW5jdGlvbiBwcmV2ZW50QWRTa2lwKCkge1xuICAgICAgICAvLyBJZ25vcmUgZW5kZWQgZXZlbnQgaWYgdGhlIEFkIHRpbWUgd2FzIG5vdCAnbmVhcicgdGhlIGVuZFxuICAgICAgICAvLyBhbmQgcmV2ZXJ0IHRpbWUgdG8gdGhlIHByZXZpb3VzICd2YWxpZCcgdGltZVxuICAgICAgICBpZiAoKHBsYXllci5kdXJhdGlvbigpIC0gcHJldmlvdXNUaW1lKSA+IFBST0dSRVNTX1RIUkVTSE9MRCkge1xuICAgICAgICAgIHBsYXllci5wYXVzZSh0cnVlKTsgLy8gdGhpcyByZWR1Y2UgdGhlIHZpZGVvIGppdHRlciBpZiB0aGUgSU9TIHNraXAgYnV0dG9uIGlzIHByZXNzZWRcbiAgICAgICAgICBwbGF5ZXIucGxheSh0cnVlKTsgLy8gd2UgbmVlZCB0byB0cmlnZ2VyIHRoZSBwbGF5IHRvIHB1dCB0aGUgdmlkZW8gZWxlbWVudCBiYWNrIGluIGEgdmFsaWQgc3RhdGVcbiAgICAgICAgICBwbGF5ZXIuY3VycmVudFRpbWUocHJldmlvdXNUaW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBwcmV2ZW50QWRTZWVrKCkge1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBwbGF5ZXIuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdmFyIHByb2dyZXNzRGVsdGEgPSBNYXRoLmFicyhjdXJyZW50VGltZSAtIHByZXZpb3VzVGltZSk7XG4gICAgICAgIGlmIChwcm9ncmVzc0RlbHRhID4gUFJPR1JFU1NfVEhSRVNIT0xEKSB7XG4gICAgICAgICAgc2tpcGFkX2F0dGVtcHRzICs9IDE7XG4gICAgICAgICAgaWYgKHNraXBhZF9hdHRlbXB0cyA+PSAyKSB7XG4gICAgICAgICAgICBwbGF5ZXIucGF1c2UodHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYXllci5jdXJyZW50VGltZShwcmV2aW91c1RpbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZpb3VzVGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHN0b3BQcmV2ZW50TWFudWFsUHJvZ3Jlc3MoKSB7XG4gICAgICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCBwcmV2ZW50QWRTZWVrKTtcbiAgICAgICAgcGxheWVyLm9mZignZW5kZWQnLCBwcmV2ZW50QWRTa2lwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja0FkRXJyb3IoZXJyb3IsIHZhc3RSZXNwb25zZSkge1xuICAgIHBsYXllci50cmlnZ2VyKHt0eXBlOiAndmFzdC5hZEVycm9yJywgZXJyb3I6IGVycm9yfSk7XG4gICAgY2FuY2VsQWRzKCk7XG4gICAgbG9nZ2VyLmVycm9yICgnQUQgRVJST1I6JywgZXJyb3IubWVzc2FnZSwgZXJyb3IsIHZhc3RSZXNwb25zZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc1ZQQUlEKHZhc3RSZXNwb25zZSkge1xuICAgIHZhciBpLCBsZW47XG4gICAgdmFyIG1lZGlhRmlsZXMgPSB2YXN0UmVzcG9uc2UubWVkaWFGaWxlcztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBtZWRpYUZpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAodmFzdFV0aWwuaXNWUEFJRChtZWRpYUZpbGVzW2ldKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuIiwiLy9TbWFsbCBzdWJzZXQgb2YgYXN5bmNcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgYXN5bmMgPSB7fTtcblxuYXN5bmMuc2V0SW1tZWRpYXRlID0gZnVuY3Rpb24gKGZuKSB7XG4gIHNldFRpbWVvdXQoZm4sIDApO1xufTtcblxuYXN5bmMuaXRlcmF0b3IgPSBmdW5jdGlvbiAodGFza3MpIHtcbiAgdmFyIG1ha2VDYWxsYmFjayA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHZhciBmbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0YXNrcy5sZW5ndGgpIHtcbiAgICAgICAgdGFza3NbaW5kZXhdLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm4ubmV4dCgpO1xuICAgIH07XG4gICAgZm4ubmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAoaW5kZXggPCB0YXNrcy5sZW5ndGggLSAxKSA/IG1ha2VDYWxsYmFjayhpbmRleCArIDEpIDogbnVsbDtcbiAgICB9O1xuICAgIHJldHVybiBmbjtcbiAgfTtcbiAgcmV0dXJuIG1ha2VDYWxsYmFjaygwKTtcbn07XG5cblxuYXN5bmMud2F0ZXJmYWxsID0gZnVuY3Rpb24gKHRhc2tzLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHsgfTtcbiAgaWYgKCF1dGlsaXRpZXMuaXNBcnJheSh0YXNrcykpIHtcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCB0byB3YXRlcmZhbGwgbXVzdCBiZSBhbiBhcnJheSBvZiBmdW5jdGlvbnMnKTtcbiAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgfVxuICBpZiAoIXRhc2tzLmxlbmd0aCkge1xuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9XG4gIHZhciB3cmFwSXRlcmF0b3IgPSBmdW5jdGlvbiAoaXRlcmF0b3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVycikge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgICAgIHZhciBuZXh0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICBpZiAobmV4dCkge1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwSXRlcmF0b3IobmV4dCkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGFyZ3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMuc2V0SW1tZWRpYXRlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpdGVyYXRvci5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbiAgd3JhcEl0ZXJhdG9yKGFzeW5jLml0ZXJhdG9yKHRhc2tzKSkoKTtcbn07XG5cbmFzeW5jLndoZW4gPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBjYWxsYmFjaykge1xuICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImFzeW5jLndoZW4gZXJyb3I6IG1pc3NpbmcgY2FsbGJhY2sgYXJndW1lbnRcIik7XG4gIH1cblxuICB2YXIgaXNBbGxvd2VkID0gdXRpbGl0aWVzLmlzRnVuY3Rpb24oY29uZGl0aW9uKSA/IGNvbmRpdGlvbiA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gISFjb25kaXRpb247XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJncyA9IHV0aWxpdGllcy5hcnJheUxpa2VPYmpUb0FycmF5KGFyZ3VtZW50cyk7XG4gICAgdmFyIG5leHQgPSBhcmdzLnBvcCgpO1xuXG4gICAgaWYgKGlzQWxsb3dlZC5hcHBseShudWxsLCBhcmdzKSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgYXJncy51bnNoaWZ0KG51bGwpO1xuICAgIHJldHVybiBuZXh0LmFwcGx5KG51bGwsIGFyZ3MpO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBhc3luYztcblxuIiwiLypqc2hpbnQgdW51c2VkOmZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF92ZXJib3NpdHkgPSAwO1xudmFyIF9wcmVmaXggPSBcIlt2aWRlb2pzLXZhc3QtdnBhaWRdIFwiO1xuXG5mdW5jdGlvbiBzZXRWZXJib3NpdHkgKHYpXG57XG4gICAgX3ZlcmJvc2l0eSA9IHY7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1zZyAobWV0aG9kLCBhcmdzKVxue1xuICAgIGlmICgoYXJncy5sZW5ndGgpID4gMCAmJiAodHlwZW9mIGFyZ3NbMF0gPT09ICdzdHJpbmcnKSlcbiAgICB7XG4gICAgICAgIGFyZ3NbMF0gPSBfcHJlZml4ICsgYXJnc1swXTtcbiAgICB9XG5cbiAgICBpZiAobWV0aG9kLmFwcGx5KVxuICAgIHtcbiAgICAgICAgbWV0aG9kLmFwcGx5IChjb25zb2xlLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKSk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIG1ldGhvZCAoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncykpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVidWcgKClcbntcbiAgICBpZiAoX3ZlcmJvc2l0eSA8IDQpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25zb2xlLmRlYnVnID09PSAndW5kZWZpbmVkJylcbiAgICB7XG4gICAgICAgIC8vIElFIDEwIGRvZXNuJ3QgaGF2ZSBhIGNvbnNvbGUuZGVidWcoKSBmdW5jdGlvblxuICAgICAgICBoYW5kbGVNc2cgKGNvbnNvbGUubG9nLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBoYW5kbGVNc2cgKGNvbnNvbGUuZGVidWcsIGFyZ3VtZW50cyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2cgKClcbntcbiAgICBpZiAoX3ZlcmJvc2l0eSA8IDMpXG4gICAge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFuZGxlTXNnIChjb25zb2xlLmxvZywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gaW5mbyAoKVxue1xuICAgIGlmIChfdmVyYm9zaXR5IDwgMilcbiAgICB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoYW5kbGVNc2cgKGNvbnNvbGUuaW5mbywgYXJndW1lbnRzKTtcbn1cblxuXG5mdW5jdGlvbiB3YXJuICgpXG57XG4gICAgaWYgKF92ZXJib3NpdHkgPCAxKVxuICAgIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGhhbmRsZU1zZyAoY29uc29sZS53YXJuLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBlcnJvciAoKVxue1xuICAgIGhhbmRsZU1zZyAoY29uc29sZS5lcnJvciwgYXJndW1lbnRzKTtcbn1cblxudmFyIGNvbnNvbGVMb2dnZXIgPSB7XG4gICAgc2V0VmVyYm9zaXR5OiBzZXRWZXJib3NpdHksXG4gICAgZGVidWc6IGRlYnVnLFxuICAgIGxvZzogbG9nLFxuICAgIGluZm86IGluZm8sXG4gICAgd2Fybjogd2FybixcbiAgICBlcnJvcjogZXJyb3Jcbn07XG5cbmlmICgodHlwZW9mIChjb25zb2xlKSA9PT0gJ3VuZGVmaW5lZCcpIHx8ICFjb25zb2xlLmxvZylcbntcbiAgICAvLyBubyBjb25zb2xlIGF2YWlsYWJsZTsgbWFrZSBmdW5jdGlvbnMgbm8tb3BcbiAgICBjb25zb2xlTG9nZ2VyLmRlYnVnID0gZnVuY3Rpb24gKCkge307XG4gICAgY29uc29sZUxvZ2dlci5sb2cgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjb25zb2xlTG9nZ2VyLmluZm8gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjb25zb2xlTG9nZ2VyLndhcm4gPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjb25zb2xlTG9nZ2VyLmVycm9yID0gZnVuY3Rpb24gKCkge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29uc29sZUxvZ2dlcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIGRvbSA9IHt9O1xuXG5kb20uaXNWaXNpYmxlID0gZnVuY3Rpb24gaXNWaXNpYmxlKGVsKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgcmV0dXJuIHN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nO1xufTtcblxuZG9tLmlzSGlkZGVuID0gZnVuY3Rpb24gaXNIaWRkZW4oZWwpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICByZXR1cm4gc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnO1xufTtcblxuZG9tLmlzU2hvd24gPSBmdW5jdGlvbiBpc1Nob3duKGVsKSB7XG4gIHJldHVybiAhZG9tLmlzSGlkZGVuKGVsKTtcbn07XG5cbmRvbS5oaWRlID0gZnVuY3Rpb24gaGlkZShlbCkge1xuICBlbC5fX3ByZXZfc3R5bGVfZGlzcGxheV8gPSBlbC5zdHlsZS5kaXNwbGF5O1xuICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuZG9tLnNob3cgPSBmdW5jdGlvbiBzaG93KGVsKSB7XG4gIGlmIChkb20uaXNIaWRkZW4oZWwpKSB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLl9fcHJldl9zdHlsZV9kaXNwbGF5XztcbiAgfVxuICBlbC5fX3ByZXZfc3R5bGVfZGlzcGxheV8gPSB1bmRlZmluZWQ7XG59O1xuXG5kb20uaGFzQ2xhc3MgPSBmdW5jdGlvbiBoYXNDbGFzcyhlbCwgY3NzQ2xhc3MpIHtcbiAgdmFyIGNsYXNzZXMsIGksIGxlbjtcblxuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MpKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzcyk7XG4gICAgfVxuXG4gICAgY2xhc3NlcyA9IHV0aWxpdGllcy5pc1N0cmluZyhlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpID8gZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KC9cXHMrLykgOiBbXTtcbiAgICBjc3NDbGFzcyA9IChjc3NDbGFzcyB8fCAnJyk7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBjbGFzc2VzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBpZiAoY2xhc3Nlc1tpXSA9PT0gY3NzQ2xhc3MpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmRvbS5hZGRDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY3NzQ2xhc3MpIHtcbiAgdmFyIGNsYXNzZXM7XG5cbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzKSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICB9XG5cbiAgICBjbGFzc2VzID0gdXRpbGl0aWVzLmlzU3RyaW5nKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkgPyBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoL1xccysvKSA6IFtdO1xuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoY3NzQ2xhc3MpICYmIHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzLnJlcGxhY2UoL1xccysvLCAnJykpKSB7XG4gICAgICBjbGFzc2VzLnB1c2goY3NzQ2xhc3MpO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzZXMuam9pbignICcpKTtcbiAgICB9XG4gIH1cbn07XG5cbmRvbS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY3NzQ2xhc3MpIHtcbiAgdmFyIGNsYXNzZXM7XG5cbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzKSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzKTtcbiAgICB9XG5cbiAgICBjbGFzc2VzID0gdXRpbGl0aWVzLmlzU3RyaW5nKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkgPyBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoL1xccysvKSA6IFtdO1xuICAgIHZhciBuZXdDbGFzc2VzID0gW107XG4gICAgdmFyIGksIGxlbjtcbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGNzc0NsYXNzKSAmJiB1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcy5yZXBsYWNlKC9cXHMrLywgJycpKSkge1xuXG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSBjbGFzc2VzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjc3NDbGFzcyAhPT0gY2xhc3Nlc1tpXSkge1xuICAgICAgICAgIG5ld0NsYXNzZXMucHVzaChjbGFzc2VzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIG5ld0NsYXNzZXMuam9pbignICcpKTtcbiAgICB9XG4gIH1cbn07XG5cbmRvbS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcikge1xuICBpZih1dGlsaXRpZXMuaXNBcnJheShlbCkpe1xuICAgIHV0aWxpdGllcy5mb3JFYWNoKGVsLCBmdW5jdGlvbihlKSB7XG4gICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlLCB0eXBlLCBoYW5kbGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZih1dGlsaXRpZXMuaXNBcnJheSh0eXBlKSl7XG4gICAgdXRpbGl0aWVzLmZvckVhY2godHlwZSwgZnVuY3Rpb24odCkge1xuICAgICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZWwsIHQsIGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XG4gIH0gZWxzZSBpZiAoZWwuYXR0YWNoRXZlbnQpIHtcbiAgICAvLyBXQVJOSU5HISEhIHRoaXMgaXMgYSB2ZXJ5IG5haXZlIGltcGxlbWVudGF0aW9uICFcbiAgICAvLyB0aGUgZXZlbnQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgaGFuZGxlclxuICAgIC8vIHdvdWxkIG5vdCBiZSB0aGVyZSBmb3IgSUU4XG4gICAgLy8gd2Ugc2hvdWxkIHVzZSBcIndpbmRvdy5ldmVudFwiIGFuZCB0aGVuIFwiZXZlbnQuc3JjRWxlbWVudFwiXG4gICAgLy8gaW5zdGVhZCBvZiBcImV2ZW50LnRhcmdldFwiXG4gICAgZWwuYXR0YWNoRXZlbnQoXCJvblwiICsgdHlwZSwgaGFuZGxlcik7XG4gIH1cbn07XG5cbmRvbS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcikge1xuICBpZih1dGlsaXRpZXMuaXNBcnJheShlbCkpe1xuICAgIHV0aWxpdGllcy5mb3JFYWNoKGVsLCBmdW5jdGlvbihlKSB7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCB0eXBlLCBoYW5kbGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZih1dGlsaXRpZXMuaXNBcnJheSh0eXBlKSl7XG4gICAgdXRpbGl0aWVzLmZvckVhY2godHlwZSwgZnVuY3Rpb24odCkge1xuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsIHQsIGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XG4gIH0gZWxzZSBpZiAoZWwuZGV0YWNoRXZlbnQpIHtcbiAgICBlbC5kZXRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBoYW5kbGVyKTtcbiAgfSBlbHNlIHtcbiAgICBlbFtcIm9uXCIgKyB0eXBlXSA9IG51bGw7XG4gIH1cbn07XG5cbmRvbS5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbCwgZXZlbnQpIHtcbiAgaWYgKGVsLmRpc3BhdGNoRXZlbnQpIHtcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBlbC5maXJlRXZlbnQoXCJvblwiICsgZXZlbnQuZXZlbnRUeXBlLCBldmVudCk7XG4gIH1cbn07XG5cbmRvbS5pc0Rlc2NlbmRhbnQgPSBmdW5jdGlvbiBpc0Rlc2NlbmRhbnQocGFyZW50LCBjaGlsZCkge1xuICB2YXIgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGU7XG4gIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZG9tLmdldFRleHRDb250ZW50ID0gZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnQoZWwpe1xuICByZXR1cm4gZWwudGV4dENvbnRlbnQgfHwgZWwudGV4dDtcbn07XG5cbmRvbS5wcmVwZW5kQ2hpbGQgPSBmdW5jdGlvbiBwcmVwZW5kQ2hpbGQocGFyZW50LCBjaGlsZCkge1xuICBpZihjaGlsZC5wYXJlbnROb2RlKXtcbiAgICBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgfVxuICByZXR1cm4gcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xufTtcblxuZG9tLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSl7XG4gIGlmKG5vZGUgJiYgbm9kZS5wYXJlbnROb2RlKXtcbiAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gIH1cbn07XG5cbmRvbS5pc0RvbUVsZW1lbnQgPSBmdW5jdGlvbiBpc0RvbUVsZW1lbnQobykge1xuICByZXR1cm4gbyBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59O1xuXG5kb20uY2xpY2sgPSBmdW5jdGlvbihlbCwgaGFuZGxlcikge1xuICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlbCwgJ2NsaWNrJywgaGFuZGxlcik7XG59O1xuXG5kb20ub25jZSA9IGZ1bmN0aW9uKGVsLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGZ1bmN0aW9uIGhhbmRsZXJXcmFwKCkge1xuICAgIGhhbmRsZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcldyYXApO1xuICB9XG5cbiAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZWwsIHR5cGUsIGhhbmRsZXJXcmFwKTtcbn07XG5cbi8vTm90ZTogdGhlcmUgaXMgbm8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGlQYWQgc28gd2UgbmVlZCBhIGZhbGxiYWNrXG5kb20uZ2V0RGltZW5zaW9uID0gZnVuY3Rpb24gZ2V0RGltZW5zaW9uKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3Q7XG5cbiAgLy9PbiBJRTkgYW5kIGJlbG93IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBkb2VzIG5vdCB3b3JrIGNvbnNpc3RlbnRseVxuICBpZighdXRpbGl0aWVzLmlzT2xkSUUoKSAmJiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1cmxVdGlscyA9IHJlcXVpcmUoJy4vdXJsVXRpbHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gSHR0cFJlcXVlc3RFcnJvcihtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdIdHRwUmVxdWVzdCBFcnJvcjogJyArIChtZXNzYWdlIHx8ICcnKTtcbn1cbkh0dHBSZXF1ZXN0RXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5IdHRwUmVxdWVzdEVycm9yLnByb3RvdHlwZS5uYW1lID0gXCJIdHRwUmVxdWVzdCBFcnJvclwiO1xuXG5mdW5jdGlvbiBIdHRwUmVxdWVzdChjcmVhdGVYaHIpIHtcbiAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjcmVhdGVYaHIpKSB7XG4gICAgdGhyb3cgbmV3IEh0dHBSZXF1ZXN0RXJyb3IoJ01pc3NpbmcgWE1MSHR0cFJlcXVlc3QgZmFjdG9yeSBtZXRob2QnKTtcbiAgfVxuXG4gIHRoaXMuY3JlYXRlWGhyID0gY3JlYXRlWGhyO1xufVxuXG5IdHRwUmVxdWVzdC5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKG1ldGhvZCwgdXJsLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICBzYW5pdHlDaGVjayh1cmwsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgdmFyIHRpbWVvdXQsIHRpbWVvdXRJZDtcbiAgdmFyIHhociA9IHRoaXMuY3JlYXRlWGhyKCk7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aW1lb3V0ID0gdXRpbGl0aWVzLmlzTnVtYmVyKG9wdGlvbnMudGltZW91dCkgPyBvcHRpb25zLnRpbWVvdXQgOiAwO1xuXG4gIHhoci5vcGVuKG1ldGhvZCwgdXJsVXRpbHMudXJsUGFydHModXJsKS5ocmVmLCB0cnVlKTtcblxuICBpZiAob3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgc2V0SGVhZGVycyh4aHIsIG9wdGlvbnMuaGVhZGVycyk7XG4gIH1cblxuICBpZiAob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgfVxuXG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXR1c1RleHQsIHJlc3BvbnNlLCBzdGF0dXM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb25seSB3YXkgdG8gZG8gYSBzZWN1cmUgcmVxdWVzdCBvbiBJRTggYW5kIElFOSBpcyB3aXRoIHRoZSBYRG9tYWluUmVxdWVzdCBvYmplY3QuIFVuZm9ydHVuYXRlbHksIG1pY3Jvc29mdCBpc1xuICAgICAqIHNvIG5pY2UgdGhhdCBkZWNpZGVkIHRoYXQgdGhlIHN0YXR1cyBwcm9wZXJ0eSBhbmQgdGhlICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIG1ldGhvZCB3aGVyZSBub3QgbmVlZGVkIHNvIHdlIGhhdmUgdG9cbiAgICAgKiBmYWtlIHRoZW0uIElmIHRoZSByZXF1ZXN0IGdldHMgZG9uZSB3aXRoIGFuIFhEb21haW5SZXF1ZXN0IGluc3RhbmNlLCB3ZSB3aWxsIGFzc3VtZSB0aGF0IHRoZXJlIGFyZSBubyBoZWFkZXJzIGFuZFxuICAgICAqIHRoZSBzdGF0dXMgd2lsbCBhbHdheXMgYmUgMjAwLiBJZiB5b3UgZG9uJ3QgbGlrZSBpdCwgRE8gTk9UIFVTRSBBTkNJRU5UIEJST1dTRVJTISEhXG4gICAgICpcbiAgICAgKiBGb3IgbW9yIGluZm8gZ28gdG86IGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvY2MyODgwNjAodj12cy44NSkuYXNweFxuICAgICAqL1xuICAgIGlmICgheGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycykge1xuICAgICAgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICgheGhyLnN0YXR1cykge1xuICAgICAgeGhyLnN0YXR1cyA9IDIwMDtcbiAgICB9XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh0aW1lb3V0SWQpKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgIHRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHQgfHwgJyc7XG5cbiAgICAvLyByZXNwb25zZVRleHQgaXMgdGhlIG9sZC1zY2hvb2wgd2F5IG9mIHJldHJpZXZpbmcgcmVzcG9uc2UgKHN1cHBvcnRlZCBieSBJRTggJiA5KVxuICAgIC8vIHJlc3BvbnNlL3Jlc3BvbnNlVHlwZSBwcm9wZXJ0aWVzIHdlcmUgaW50cm9kdWNlZCBpbiBYSFIgTGV2ZWwyIHNwZWMgKHN1cHBvcnRlZCBieSBJRTEwKVxuICAgIHJlc3BvbnNlID0gKCdyZXNwb25zZScgaW4geGhyKSA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHQ7XG5cbiAgICAvLyBub3JtYWxpemUgSUU5IGJ1ZyAoaHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTQ1MClcbiAgICBzdGF0dXMgPSB4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cztcblxuICAgIGNhbGxiYWNrKFxuICAgICAgc3RhdHVzLFxuICAgICAgcmVzcG9uc2UsXG4gICAgICB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCksXG4gICAgICBzdGF0dXNUZXh0KTtcbiAgfTtcblxuICB4aHIub25lcnJvciA9IHJlcXVlc3RFcnJvcjtcbiAgeGhyLm9uYWJvcnQgPSByZXF1ZXN0RXJyb3I7XG5cbiAgeGhyLnNlbmQoKTtcblxuICBpZiAodGltZW91dCA+IDApIHtcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHhociAmJiB4aHIuYWJvcnQoKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKHVybCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyh1cmwpIHx8IHV0aWxpdGllcy5pc0VtcHR5U3RyaW5nKHVybCkpIHtcbiAgICAgIHRocm93IG5ldyBIdHRwUmVxdWVzdEVycm9yKFwiSW52YWxpZCB1cmwgJ1wiICsgdXJsICsgXCInXCIpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcihcIkludmFsaWQgaGFuZGxlciAnXCIgKyBjYWxsYmFjayArIFwiJyBmb3IgdGhlIGh0dHAgcmVxdWVzdFwiKTtcbiAgICB9XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChvcHRpb25zKSAmJiAhdXRpbGl0aWVzLmlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcihcIkludmFsaWQgb3B0aW9ucyBtYXAgJ1wiICsgb3B0aW9ucyArIFwiJ1wiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRIZWFkZXJzKHhociwgaGVhZGVycykge1xuICAgIHV0aWxpdGllcy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXF1ZXN0RXJyb3IoKSB7XG4gICAgY2FsbGJhY2soLTEsIG51bGwsIG51bGwsICcnKTtcbiAgfVxufTtcblxuSHR0cFJlcXVlc3QucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIHRoaXMucnVuKCdHRVQnLCB1cmwsIHByb2Nlc3NSZXNwb25zZSwgb3B0aW9ucyk7XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1Jlc3BvbnNlKHN0YXR1cywgcmVzcG9uc2UsIGhlYWRlcnNTdHJpbmcsIHN0YXR1c1RleHQpIHtcbiAgICBpZiAoaXNTdWNjZXNzKHN0YXR1cykpIHtcbiAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnNTdHJpbmcsIHN0YXR1c1RleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhuZXcgSHR0cFJlcXVlc3RFcnJvcihzdGF0dXNUZXh0KSwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTdWNjZXNzKHN0YXR1cykge1xuICAgIHJldHVybiAyMDAgPD0gc3RhdHVzICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZnVuY3Rpb24gY3JlYXRlWGhyKCkge1xuICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIGlmICghKFwid2l0aENyZWRlbnRpYWxzXCIgaW4geGhyKSkge1xuICAgIC8vIFhEb21haW5SZXF1ZXN0IGZvciBJRS5cbiAgICB4aHIgPSBuZXcgWERvbWFpblJlcXVlc3QoKTtcbiAgfVxuICByZXR1cm4geGhyO1xufVxuXG52YXIgaHR0cCA9IG5ldyBIdHRwUmVxdWVzdChjcmVhdGVYaHIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaHR0cDogaHR0cCxcbiAgSHR0cFJlcXVlc3Q6IEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVxdWVzdEVycm9yOiBIdHRwUmVxdWVzdEVycm9yLFxuICBjcmVhdGVYaHI6IGNyZWF0ZVhoclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGh0bWw1OiBbXG4gICAgJ3RleHQvamF2YXNjcmlwdCcsXG4gICAgJ3RleHQvamF2YXNjcmlwdDEuMCcsXG4gICAgJ3RleHQvamF2YXNjcmlwdDEuMicsXG4gICAgJ3RleHQvamF2YXNjcmlwdDEuNCcsXG4gICAgJ3RleHQvanNjcmlwdCcsXG4gICAgJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnLFxuICAgICdhcHBsaWNhdGlvbi94LWphdmFzY3JpcHQnLFxuICAgICd0ZXh0L2VjbWFzY3JpcHQnLFxuICAgICd0ZXh0L2VjbWFzY3JpcHQxLjAnLFxuICAgICd0ZXh0L2VjbWFzY3JpcHQxLjInLFxuICAgICd0ZXh0L2VjbWFzY3JpcHQxLjQnLFxuICAgICd0ZXh0L2xpdmVzY3JpcHQnLFxuICAgICdhcHBsaWNhdGlvbi9lY21hc2NyaXB0JyxcbiAgICAnYXBwbGljYXRpb24veC1lY21hc2NyaXB0JyxcbiAgXSxcblxuICBmbGFzaDogW1xuICAgICdhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCdcbiAgXSxcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBkb20gPSByZXF1aXJlKCcuL2RvbScpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgcGxheWVyVXRpbHMgPSB7fTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNhcHR1cmVzIHRoZSBwb3J0aW9ucyBvZiBwbGF5ZXIgc3RhdGUgcmVsZXZhbnQgdG9cbiAqIHZpZGVvIHBsYXliYWNrLiBUaGUgcmVzdWx0IG9mIHRoaXMgZnVuY3Rpb24gY2FuIGJlIHBhc3NlZCB0b1xuICogcmVzdG9yZVBsYXllclNuYXBzaG90IHdpdGggYSBwbGF5ZXIgdG8gcmV0dXJuIHRoZSBwbGF5ZXIgdG8gdGhlIHN0YXRlIGl0XG4gKiB3YXMgaW4gd2hlbiB0aGlzIGZ1bmN0aW9uIHdhcyBpbnZva2VkLlxuICogQHBhcmFtIHtvYmplY3R9IHBsYXllciBUaGUgdmlkZW9qcyBwbGF5ZXIgb2JqZWN0XG4gKi9cbnBsYXllclV0aWxzLmdldFBsYXllclNuYXBzaG90ID0gZnVuY3Rpb24gZ2V0UGxheWVyU25hcHNob3QocGxheWVyKSB7XG4gIHZhciB0ZWNoID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XG5cbiAgdmFyIHNuYXBzaG90ID0ge1xuICAgIGVuZGVkOiBwbGF5ZXIuZW5kZWQoKSxcbiAgICBzcmM6IHBsYXllci5jdXJyZW50U3JjKCksXG4gICAgY3VycmVudFRpbWU6IHBsYXllci5jdXJyZW50VGltZSgpLFxuICAgIHR5cGU6IHBsYXllci5jdXJyZW50VHlwZSgpLFxuICAgIHBsYXlpbmc6ICFwbGF5ZXIucGF1c2VkKCksXG4gICAgc3VwcHJlc3NlZFRyYWNrczogZ2V0U3VwcHJlc3NlZFRyYWNrcyhwbGF5ZXIpXG4gIH07XG5cbiAgaWYgKHRlY2gpIHtcbiAgICBzbmFwc2hvdC5uYXRpdmVQb3N0ZXIgPSB0ZWNoLnBvc3RlcjtcbiAgICBzbmFwc2hvdC5zdHlsZSA9IHRlY2guZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuICB9XG4gIHJldHVybiBzbmFwc2hvdDtcblxuICAvKioqKiBMb2NhbCBGdW5jdGlvbnMgKioqKi9cbiAgZnVuY3Rpb24gZ2V0U3VwcHJlc3NlZFRyYWNrcyhwbGF5ZXIpIHtcbiAgICB2YXIgdHJhY2tzID0gcGxheWVyLnJlbW90ZVRleHRUcmFja3MgPyBwbGF5ZXIucmVtb3RlVGV4dFRyYWNrcygpIDogW107XG5cbiAgICBpZiAodHJhY2tzICYmIHV0aWxpdGllcy5pc0FycmF5KHRyYWNrcy50cmFja3NfKSkge1xuICAgICAgdHJhY2tzID0gdHJhY2tzLnRyYWNrc187XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNBcnJheSh0cmFja3MpKSB7XG4gICAgICB0cmFja3MgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgc3VwcHJlc3NlZFRyYWNrcyA9IFtdO1xuICAgIHRyYWNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFjaykge1xuICAgICAgc3VwcHJlc3NlZFRyYWNrcy5wdXNoKHtcbiAgICAgICAgdHJhY2s6IHRyYWNrLFxuICAgICAgICBtb2RlOiB0cmFjay5tb2RlXG4gICAgICB9KTtcbiAgICAgIHRyYWNrLm1vZGUgPSAnZGlzYWJsZWQnO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1cHByZXNzZWRUcmFja3M7XG4gIH1cbn07XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gbW9kaWZ5IHRoZSBzcGVjaWZpZWQgcGxheWVyIHNvIHRoYXQgaXRzIHN0YXRlIGlzIGVxdWl2YWxlbnQgdG9cbiAqIHRoZSBzdGF0ZSBvZiB0aGUgc25hcHNob3QuXG4gKiBAcGFyYW0ge29iamVjdH0gc25hcHNob3QgLSB0aGUgcGxheWVyIHN0YXRlIHRvIGFwcGx5XG4gKi9cbnBsYXllclV0aWxzLnJlc3RvcmVQbGF5ZXJTbmFwc2hvdCA9IGZ1bmN0aW9uIHJlc3RvcmVQbGF5ZXJTbmFwc2hvdChwbGF5ZXIsIHNuYXBzaG90KSB7XG4gIHZhciB0ZWNoID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XG4gIHZhciBhdHRlbXB0cyA9IDIwOyAvLyB0aGUgbnVtYmVyIG9mIHJlbWFpbmluZyBhdHRlbXB0cyB0byByZXN0b3JlIHRoZSBzbmFwc2hvdFxuXG4gIGlmIChzbmFwc2hvdC5uYXRpdmVQb3N0ZXIpIHtcbiAgICB0ZWNoLnBvc3RlciA9IHNuYXBzaG90Lm5hdGl2ZVBvc3RlcjtcbiAgfVxuXG4gIGlmICgnc3R5bGUnIGluIHNuYXBzaG90KSB7XG4gICAgLy8gb3ZlcndyaXRlIGFsbCBjc3Mgc3R5bGUgcHJvcGVydGllcyB0byByZXN0b3JlIHN0YXRlIHByZWNpc2VseVxuICAgIHRlY2guc2V0QXR0cmlidXRlKCdzdHlsZScsIHNuYXBzaG90LnN0eWxlIHx8ICcnKTtcbiAgfVxuXG4gIGlmIChoYXNTcmNDaGFuZ2VkKHBsYXllciwgc25hcHNob3QpKSB7XG5cbiAgICAvLyBvbiBpb3M3LCBmaWRkbGluZyB3aXRoIHRleHRUcmFja3MgdG9vIGVhcmx5IHdpbGwgY2F1c2Ugc2FmYXJpIHRvIGNyYXNoXG4gICAgcGxheWVyLm9uZSgnY29udGVudGxvYWRlZG1ldGFkYXRhJywgcmVzdG9yZVRyYWNrcyk7XG5cbiAgICBwbGF5ZXIub25lKCdjYW5wbGF5JywgdHJ5VG9SZXN1bWUpO1xuICAgIGVuc3VyZUNhbnBsYXlFdnRHZXRzRmlyZWQoKTtcblxuICAgIC8vIGlmIHRoZSBzcmMgY2hhbmdlZCBmb3IgYWQgcGxheWJhY2ssIHJlc2V0IGl0XG4gICAgcGxheWVyLnNyYyh7c3JjOiBzbmFwc2hvdC5zcmMsIHR5cGU6IHNuYXBzaG90LnR5cGV9KTtcblxuICAgIC8vIHNhZmFyaSByZXF1aXJlcyBhIGNhbGwgdG8gYGxvYWRgIHRvIHBpY2sgdXAgYSBjaGFuZ2VkIHNvdXJjZVxuICAgIHBsYXllci5sb2FkKCk7XG5cbiAgfSBlbHNlIHtcbiAgICByZXN0b3JlVHJhY2tzKCk7XG5cbiAgICBpZiAoc25hcHNob3QucGxheWluZykge1xuICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICB9XG4gIH1cblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG5cbiAgLyoqXG4gICAqIFNvbWV0aW1lcyBmaXJlZm94IGRvZXMgbm90IHRyaWdnZXIgdGhlICdjYW5wbGF5JyBldnQuXG4gICAqIFRoaXMgY29kZSBlbnN1cmUgdGhhdCBpdCBhbHdheXMgZ2V0cyB0cmlnZ2VyZWQgdHJpZ2dlcmVkLlxuICAgKi9cbiAgZnVuY3Rpb24gZW5zdXJlQ2FucGxheUV2dEdldHNGaXJlZCgpIHtcbiAgICB2YXIgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHBsYXllci50cmlnZ2VyKCdjYW5wbGF5Jyk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICBwbGF5ZXIub25lKCdjYW5wbGF5JywgZnVuY3Rpb24oKXtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSB3aGV0aGVyIHRoZSBwbGF5ZXIgbmVlZHMgdG8gYmUgcmVzdG9yZWQgdG8gaXRzIHN0YXRlXG4gICAqIGJlZm9yZSBhZCBwbGF5YmFjayBiZWdhbi4gV2l0aCBhIGN1c3RvbSBhZCBkaXNwbGF5IG9yIGJ1cm5lZC1pblxuICAgKiBhZHMsIHRoZSBjb250ZW50IHBsYXllciBzdGF0ZSBoYXNuJ3QgYmVlbiBtb2RpZmllZCBhbmQgc28gbm9cbiAgICogcmVzdG9yYXRpb24gaXMgcmVxdWlyZWRcbiAgICovXG4gIGZ1bmN0aW9uIGhhc1NyY0NoYW5nZWQocGxheWVyLCBzbmFwc2hvdCkge1xuICAgIGlmIChwbGF5ZXIuc3JjKCkpIHtcbiAgICAgIHJldHVybiBwbGF5ZXIuc3JjKCkgIT09IHNuYXBzaG90LnNyYztcbiAgICB9XG4gICAgLy8gdGhlIHBsYXllciB3YXMgY29uZmlndXJlZCB0aHJvdWdoIHNvdXJjZSBlbGVtZW50IGNoaWxkcmVuXG4gICAgcmV0dXJuIHBsYXllci5jdXJyZW50U3JjKCkgIT09IHNuYXBzaG90LnNyYztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3RvcmVUcmFja3MoKSB7XG4gICAgdmFyIHN1cHByZXNzZWRUcmFja3MgPSBzbmFwc2hvdC5zdXBwcmVzc2VkVHJhY2tzO1xuICAgIHN1cHByZXNzZWRUcmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tTbmFwc2hvdCkge1xuICAgICAgdHJhY2tTbmFwc2hvdC50cmFjay5tb2RlID0gdHJhY2tTbmFwc2hvdC5tb2RlO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiB0aGUgdmlkZW8gZWxlbWVudCBoYXMgbG9hZGVkIGVub3VnaCBvZiB0aGUgc25hcHNob3Qgc291cmNlXG4gICAqIHRvIGJlIHJlYWR5IHRvIGFwcGx5IHRoZSByZXN0IG9mIHRoZSBzdGF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gdHJ5VG9SZXN1bWUoKSB7XG5cbiAgICAvLyBpZiBzb21lIHBlcmlvZCBvZiB0aGUgdmlkZW8gaXMgc2Vla2FibGUsIHJlc3VtZSBwbGF5YmFja1xuICAgIC8vIG90aGVyd2lzZSBkZWxheSBhIGJpdCBhbmQgdGhlbiBjaGVjayBhZ2FpbiB1bmxlc3Mgd2UncmUgb3V0IG9mIGF0dGVtcHRzXG5cbiAgICBpZiAoIXBsYXllclV0aWxzLmlzUmVhZHlUb1Jlc3VtZShwbGF5ZXIpICYmIGF0dGVtcHRzLS0pIHtcbiAgICAgIHNldFRpbWVvdXQodHJ5VG9SZXN1bWUsIDUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYocGxheWVyLmN1cnJlbnRUaW1lKCkgIT09IHNuYXBzaG90LmN1cnJlbnRUaW1lKSB7XG4gICAgICAgICAgaWYgKHNuYXBzaG90LnBsYXlpbmcpIHsgLy8gaWYgbmVlZGVkIHJlc3RvcmUgcGxheWluZyBzdGF0dXMgYWZ0ZXIgc2VlayBjb21wbGV0ZXNcbiAgICAgICAgICAgIHBsYXllci5vbmUoJ3NlZWtlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYXllci5jdXJyZW50VGltZShzbmFwc2hvdC5jdXJyZW50VGltZSk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChzbmFwc2hvdC5wbGF5aW5nKSB7XG4gICAgICAgICAgLy8gaWYgbmVlZGVkIGFuZCBubyBzZWVrIGhhcyBiZWVuIHBlcmZvcm1lZCwgcmVzdG9yZSBwbGF5aW5nIHN0YXR1cyBpbW1lZGlhdGVseVxuICAgICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAgIH1cblxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB2aWRlb2pzLmxvZy53YXJuKCdGYWlsZWQgdG8gcmVzdW1lIHRoZSBjb250ZW50IGFmdGVyIGFuIGFkdmVydGlzZW1lbnQnLCBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnBsYXllclV0aWxzLmlzUmVhZHlUb1Jlc3VtZSA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcblxuICBpZiAocGxheWVyLnJlYWR5U3RhdGUoKSA+IDEpIHtcbiAgICAvLyBzb21lIGJyb3dzZXJzIGFuZCBtZWRpYSBhcmVuJ3QgXCJzZWVrYWJsZVwiLlxuICAgIC8vIHJlYWR5U3RhdGUgZ3JlYXRlciB0aGFuIDEgYWxsb3dzIGZvciBzZWVraW5nIHdpdGhvdXQgZXhjZXB0aW9uc1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHBsYXllci5zZWVrYWJsZSgpID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBpZiB0aGUgcGxheWVyIGRvZXNuJ3QgZXhwb3NlIHRoZSBzZWVrYWJsZSB0aW1lIHJhbmdlcywgdHJ5IHRvXG4gICAgLy8gcmVzdW1lIHBsYXliYWNrIGltbWVkaWF0ZWx5XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAocGxheWVyLnNlZWthYmxlKCkubGVuZ3RoID4gMCkge1xuICAgIC8vIGlmIHNvbWUgcGVyaW9kIG9mIHRoZSB2aWRlbyBpcyBzZWVrYWJsZSwgcmVzdW1lIHBsYXliYWNrXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gcHJlcGFyZXMgdGhlIHBsYXllciB0byBkaXNwbGF5IGFkcy5cbiAqIEFkZGluZyBjb252ZW5pZW5jZSBldmVudHMgbGlrZSB0aGUgJ3Zhc3QuZmlyc1BsYXknIHRoYXQgZ2V0cyBmaXJlZCB3aGVuIHRoZSB2aWRlbyBpcyBmaXJzdCBwbGF5ZWRcbiAqIGFuZCBhZHMgdGhlIGJsYWNrUG9zdGVyIHRvIHRoZSBwbGF5ZXIgdG8gcHJldmVudCBjb250ZW50IGZyb20gYmVpbmcgZGlzcGxheWVkIGJlZm9yZSB0aGUgcHJlcm9sbCBhZC5cbiAqXG4gKiBAcGFyYW0gcGxheWVyXG4gKi9cbnBsYXllclV0aWxzLnByZXBhcmVGb3JBZHMgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gIHZhciBibGFja1Bvc3RlciA9IHBsYXllci5hZGRDaGlsZCgnYmxhY2tQb3N0ZXInKTtcbiAgdmFyIF9maXJzdFBsYXkgPSB0cnVlO1xuICB2YXIgdm9sdW1lU25hcHNob3Q7XG5cblxuICBtb25rZXlQYXRjaFBsYXllckFwaSgpO1xuXG4gIHBsYXllci5vbigncGxheScsIHRyeVRvVHJpZ2dlckZpcnN0UGxheSk7XG4gIHBsYXllci5vbigndmFzdC5yZXNldCcsIHJlc2V0Rmlyc3RQbGF5KTsvL0V2ZXJ5IHRpbWUgd2UgY2hhbmdlIHRoZSBzb3VyY2VzIHdlIHJlc2V0IHRoZSBmaXJzdCBwbGF5LlxuICBwbGF5ZXIub24oJ3Zhc3QuZmlyc3RQbGF5JywgcmVzdG9yZUNvbnRlbnRWb2x1bWUpO1xuICBwbGF5ZXIub24oJ2Vycm9yJywgaGlkZUJsYWNrUG9zdGVyKTsvL0lmIHRoZXJlIGlzIGFuIGVycm9yIGluIHRoZSBwbGF5ZXIgd2UgcmVtb3ZlIHRoZSBibGFja3Bvc3RlciB0byBzaG93IHRoZSBlcnIgbXNnXG4gIHBsYXllci5vbigndmFzdC5hZFN0YXJ0JywgaGlkZUJsYWNrUG9zdGVyKTtcbiAgcGxheWVyLm9uKCd2YXN0LmFkc0NhbmNlbCcsIGhpZGVCbGFja1Bvc3Rlcik7XG4gIHBsYXllci5vbigndmFzdC5hZEVycm9yJywgaGlkZUJsYWNrUG9zdGVyKTtcbiAgcGxheWVyLm9uKCd2YXN0LmFkU3RhcnQnLCBhZGRTdHlsZXMpO1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRFbmQnLCByZW1vdmVTdHlsZXMpO1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRzQ2FuY2VsJywgcmVtb3ZlU3R5bGVzKTtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG5cbiAgLyoqXG4gICBXaGF0IHRoaXMgZnVuY3Rpb24gZG9lcyBpcyB1Z2x5IGFuZCBob3JyaWJsZSBhbmQgSSBzaG91bGQgdGhpbmsgdHdpY2UgYmVmb3JlIGNhbGxpbmcgbXlzZWxmIGEgZ29vZCBkZXZlbG9wZXIuIFdpdGggdGhhdCBzYWlkLFxuICAgaXQgaXMgdGhlIGJlc3Qgc29sdXRpb24gSSBjb3VsZCBmaW5kIHRvIG11dGUgdGhlIHZpZGVvIHVudGlsIHRoZSAncGxheScgZXZlbnQgaGFwcGVucyAob24gbW9iaWxlIGRldmljZXMpIGFuZCB0aGUgcGx1Z2luIGNhbiBkZWNpZGUgd2hldGhlclxuICAgdG8gcGxheSB0aGUgYWQgb3Igbm90LlxuXG4gICBXZSBhbHNvIG5lZWQgdGhpcyBtb25rZXlwYXRjaCB0byBiZSBhYmxlIHRvIHBhdXNlIGFuZCByZXN1bWUgYW4gYWQgdXNpbmcgdGhlIHBsYXllcidzIEFQSVxuXG4gICBJZiB5b3UgaGF2ZSBhIGJldHRlciBzb2x1dGlvbiBwbGVhc2UgZG8gdGVsbCBtZS5cbiAgICovXG4gIGZ1bmN0aW9uIG1vbmtleVBhdGNoUGxheWVyQXBpKCkge1xuXG4gICAgLyoqXG4gICAgICogTW9ua2V5IHBhdGNoIG5lZWRlZCB0byBoYW5kbGUgZmlyc3RQbGF5IGFuZCByZXN1bWUgb2YgcGxheWluZyBhZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsT3JpZ1BsYXkgbmVjZXNzYXJ5IGZsYWcgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wIHdoZW4geW91IGFyZSByZXN0b3JpbmcgYSBWQVNUIGFkLlxuICAgICAqIEByZXR1cm5zIHtwbGF5ZXJ9XG4gICAgICovXG4gICAgdmFyIG9yaWdQbGF5ID0gcGxheWVyLnBsYXk7XG4gICAgcGxheWVyLnBsYXkgPSBmdW5jdGlvbiAoY2FsbE9yaWdQbGF5KSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgIGlmIChpc0ZpcnN0UGxheSgpKSB7XG4gICAgICAgIGZpcnN0UGxheSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdW1lKGNhbGxPcmlnUGxheSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgICBmdW5jdGlvbiBmaXJzdFBsYXkoKSB7XG4gICAgICAgIGlmICghdXRpbGl0aWVzLmlzSVBob25lKCkpIHtcbiAgICAgICAgICB2b2x1bWVTbmFwc2hvdCA9IHNhdmVWb2x1bWVTbmFwc2hvdCgpO1xuICAgICAgICAgIHBsYXllci5tdXRlZCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9yaWdQbGF5LmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHJlc3VtZShjYWxsT3JpZ1BsYXkpIHtcbiAgICAgICAgaWYgKGlzQWRQbGF5aW5nKCkgJiYgIWNhbGxPcmlnUGxheSkge1xuICAgICAgICAgIHBsYXllci52YXN0LmFkVW5pdC5yZXN1bWVBZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9yaWdQbGF5LmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBOZWVkZWQgbW9ua2V5IHBhdGNoIHRvIGhhbmRsZSBwYXVzZSBvZiBwbGF5aW5nIGFkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxPcmlnUGxheSBuZWNlc3NhcnkgZmxhZyB0byBwcmV2ZW50IGluZmluaXRlIGxvb3Agd2hlbiB5b3UgYXJlIHBhdXNpbmcgYSBWQVNUIGFkLlxuICAgICAqIEByZXR1cm5zIHtwbGF5ZXJ9XG4gICAgICovXG4gICAgdmFyIG9yaWdQYXVzZSA9IHBsYXllci5wYXVzZTtcbiAgICBwbGF5ZXIucGF1c2UgPSBmdW5jdGlvbiAoY2FsbE9yaWdQYXVzZSkge1xuICAgICAgaWYgKGlzQWRQbGF5aW5nKCkgJiYgIWNhbGxPcmlnUGF1c2UpIHtcbiAgICAgICAgcGxheWVyLnZhc3QuYWRVbml0LnBhdXNlQWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9yaWdQYXVzZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogTmVlZGVkIG1vbmtleSBwYXRjaCB0byBoYW5kbGUgcGF1c2VkIHN0YXRlIG9mIHRoZSBwbGF5ZXIgd2hlbiBhZHMgYXJlIHBsYXlpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbE9yaWdQbGF5IG5lY2Vzc2FyeSBmbGFnIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCB3aGVuIHlvdSBhcmUgcGF1c2luZyBhIFZBU1QgYWQuXG4gICAgICogQHJldHVybnMge3BsYXllcn1cbiAgICAgKi9cbiAgICB2YXIgb3JpZ1BhdXNlZCA9IHBsYXllci5wYXVzZWQ7XG4gICAgcGxheWVyLnBhdXNlZCA9IGZ1bmN0aW9uIChjYWxsT3JpZ1BhdXNlZCkge1xuICAgICAgaWYgKGlzQWRQbGF5aW5nKCkgJiYgIWNhbGxPcmlnUGF1c2VkKSB7XG4gICAgICAgIHJldHVybiBwbGF5ZXIudmFzdC5hZFVuaXQuaXNQYXVzZWQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvcmlnUGF1c2VkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQWRQbGF5aW5nKCkge1xuICAgIHJldHVybiBwbGF5ZXIudmFzdCAmJiBwbGF5ZXIudmFzdC5hZFVuaXQ7XG4gIH1cblxuICBmdW5jdGlvbiB0cnlUb1RyaWdnZXJGaXJzdFBsYXkoKSB7XG4gICAgaWYgKGlzRmlyc3RQbGF5KCkpIHtcbiAgICAgIF9maXJzdFBsYXkgPSBmYWxzZTtcbiAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmZpcnN0UGxheScpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Rmlyc3RQbGF5KCkge1xuICAgIF9maXJzdFBsYXkgPSB0cnVlO1xuICAgIGJsYWNrUG9zdGVyLnNob3coKTtcbiAgICByZXN0b3JlQ29udGVudFZvbHVtZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNGaXJzdFBsYXkoKSB7XG4gICAgcmV0dXJuIF9maXJzdFBsYXk7XG4gIH1cblxuICBmdW5jdGlvbiBzYXZlVm9sdW1lU25hcHNob3QoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG11dGVkOiBwbGF5ZXIubXV0ZWQoKSxcbiAgICAgIHZvbHVtZTogcGxheWVyLnZvbHVtZSgpXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3RvcmVDb250ZW50Vm9sdW1lKCkge1xuICAgIGlmICh2b2x1bWVTbmFwc2hvdCkge1xuICAgICAgcGxheWVyLmN1cnJlbnRUaW1lKDApO1xuICAgICAgcmVzdG9yZVZvbHVtZVNuYXBzaG90KHZvbHVtZVNuYXBzaG90KTtcbiAgICAgIHZvbHVtZVNuYXBzaG90ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXN0b3JlVm9sdW1lU25hcHNob3Qoc25hcHNob3QpIHtcbiAgICBpZiAodXRpbGl0aWVzLmlzT2JqZWN0KHNuYXBzaG90KSkge1xuICAgICAgcGxheWVyLnZvbHVtZShzbmFwc2hvdC52b2x1bWUpO1xuICAgICAgcGxheWVyLm11dGVkKHNuYXBzaG90Lm11dGVkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlQmxhY2tQb3N0ZXIoKSB7XG4gICAgaWYgKCFkb20uaGFzQ2xhc3MoYmxhY2tQb3N0ZXIuZWwoKSwgJ3Zqcy1oaWRkZW4nKSkge1xuICAgICAgYmxhY2tQb3N0ZXIuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFN0eWxlcygpIHtcbiAgICBkb20uYWRkQ2xhc3MocGxheWVyLmVsKCksICd2anMtYWQtcGxheWluZycpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlU3R5bGVzKCkge1xuICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy1hZC1wbGF5aW5nJyk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBwb3N0ZXIgYXR0cmlidXRlIGZyb20gdGhlIHZpZGVvIGVsZW1lbnQgdGVjaCwgaWYgcHJlc2VudC4gV2hlblxuICogcmV1c2luZyBhIHZpZGVvIGVsZW1lbnQgZm9yIG11bHRpcGxlIHZpZGVvcywgdGhlIHBvc3RlciBpbWFnZSB3aWxsIGJyaWVmbHlcbiAqIHJlYXBwZWFyIHdoaWxlIHRoZSBuZXcgc291cmNlIGxvYWRzLiBSZW1vdmluZyB0aGUgYXR0cmlidXRlIGFoZWFkIG9mIHRpbWVcbiAqIHByZXZlbnRzIHRoZSBwb3N0ZXIgZnJvbSBzaG93aW5nIHVwIGJldHdlZW4gdmlkZW9zLlxuICogQHBhcmFtIHtvYmplY3R9IHBsYXllciBUaGUgdmlkZW9qcyBwbGF5ZXIgb2JqZWN0XG4gKi9cbnBsYXllclV0aWxzLnJlbW92ZU5hdGl2ZVBvc3RlciA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgdmFyIHRlY2ggPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcbiAgaWYgKHRlY2gpIHtcbiAgICB0ZWNoLnJlbW92ZUF0dHJpYnV0ZSgncG9zdGVyJyk7XG4gIH1cbn07XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGxpc3RlbiB0byBtYW55IGV2ZW50cyB1bnRpbCBvbmUgb2YgdGhlbSBnZXRzIGZpcmVkLCB0aGVuIHdlXG4gKiBleGVjdXRlIHRoZSBoYW5kbGVyIGFuZCB1bnN1YnNjcmliZSBhbGwgdGhlIGV2ZW50IGxpc3RlbmVycztcbiAqXG4gKiBAcGFyYW0gcGxheWVyIHNwZWNpZmljIHBsYXllciBmcm9tIHdoZXJlIHRvIGxpc3RlbiBmb3IgdGhlIGV2ZW50c1xuICogQHBhcmFtIGV2ZW50cyBhcnJheSBvZiBldmVudHNcbiAqIEBwYXJhbSBoYW5kbGVyIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgb25jZSBvbmUgb2YgdGhlIGV2ZW50cyBmaXJlc1xuICovXG5wbGF5ZXJVdGlscy5vbmNlID0gZnVuY3Rpb24gb25jZShwbGF5ZXIsIGV2ZW50cywgaGFuZGxlcikge1xuICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICBoYW5kbGVyLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG5cbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHBsYXllci5vZmYoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHBsYXllci5vbihldmVudCwgbGlzdGVuZXIpO1xuICB9KTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXJVdGlsczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuLyoqXG4gKlxuICogSU1QT1JUQU5UIE5PVEU6IFRoaXMgZnVuY3Rpb24gY29tZXMgZnJvbSBhbmd1bGFySnMgYW5kIHdhcyBvcmlnaW5hbGx5IGNhbGxlZCB1cmxSZXNvbHZlXG4gKiAgICAgICAgICAgICAgICAgeW91IGNhbiB0YWtlIGEgbG9vayBhdCB0aGUgb3JpZ2luYWwgY29kZSBoZXJlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvYmxvYi9tYXN0ZXIvc3JjL25nL3VybFV0aWxzLmpzXG4gKlxuICogSW1wbGVtZW50YXRpb24gTm90ZXMgZm9yIG5vbi1JRSBicm93c2Vyc1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQXNzaWduaW5nIGEgVVJMIHRvIHRoZSBocmVmIHByb3BlcnR5IG9mIGFuIGFuY2hvciBET00gbm9kZSwgZXZlbiBvbmUgYXR0YWNoZWQgdG8gdGhlIERPTSxcbiAqIHJlc3VsdHMgYm90aCBpbiB0aGUgbm9ybWFsaXppbmcgYW5kIHBhcnNpbmcgb2YgdGhlIFVSTC4gIE5vcm1hbGl6aW5nIG1lYW5zIHRoYXQgYSByZWxhdGl2ZVxuICogVVJMIHdpbGwgYmUgcmVzb2x2ZWQgaW50byBhbiBhYnNvbHV0ZSBVUkwgaW4gdGhlIGNvbnRleHQgb2YgdGhlIGFwcGxpY2F0aW9uIGRvY3VtZW50LlxuICogUGFyc2luZyBtZWFucyB0aGF0IHRoZSBhbmNob3Igbm9kZSdzIGhvc3QsIGhvc3RuYW1lLCBwcm90b2NvbCwgcG9ydCwgcGF0aG5hbWUgYW5kIHJlbGF0ZWRcbiAqIHByb3BlcnRpZXMgYXJlIGFsbCBwb3B1bGF0ZWQgdG8gcmVmbGVjdCB0aGUgbm9ybWFsaXplZCBVUkwuICBUaGlzIGFwcHJvYWNoIGhhcyB3aWRlXG4gKiBjb21wYXRpYmlsaXR5IC0gU2FmYXJpIDErLCBNb3ppbGxhIDErLCBPcGVyYSA3KyxlIGV0Yy4gIFNlZVxuICogaHR0cDovL3d3dy5hcHRhbmEuY29tL3JlZmVyZW5jZS9odG1sL2FwaS9IVE1MQW5jaG9yRWxlbWVudC5odG1sXG4gKlxuICogSW1wbGVtZW50YXRpb24gTm90ZXMgZm9yIElFXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIElFID49IDggYW5kIDw9IDEwIG5vcm1hbGl6ZXMgdGhlIFVSTCB3aGVuIGFzc2lnbmVkIHRvIHRoZSBhbmNob3Igbm9kZSBzaW1pbGFyIHRvIHRoZSBvdGhlclxuICogYnJvd3NlcnMuICBIb3dldmVyLCB0aGUgcGFyc2VkIGNvbXBvbmVudHMgd2lsbCBub3QgYmUgc2V0IGlmIHRoZSBVUkwgYXNzaWduZWQgZGlkIG5vdCBzcGVjaWZ5XG4gKiB0aGVtLiAgKGUuZy4gaWYgeW91IGFzc2lnbiBhLmhyZWYgPSBcImZvb1wiLCB0aGVuIGEucHJvdG9jb2wsIGEuaG9zdCwgZXRjLiB3aWxsIGJlIGVtcHR5LikgIFdlXG4gKiB3b3JrIGFyb3VuZCB0aGF0IGJ5IHBlcmZvcm1pbmcgdGhlIHBhcnNpbmcgaW4gYSAybmQgc3RlcCBieSB0YWtpbmcgYSBwcmV2aW91c2x5IG5vcm1hbGl6ZWRcbiAqIFVSTCAoZS5nLiBieSBhc3NpZ25pbmcgdG8gYS5ocmVmKSBhbmQgYXNzaWduaW5nIGl0IGEuaHJlZiBhZ2Fpbi4gIFRoaXMgY29ycmVjdGx5IHBvcHVsYXRlcyB0aGVcbiAqIHByb3BlcnRpZXMgc3VjaCBhcyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQsIGV0Yy5cbiAqXG4gKiBJRTcgZG9lcyBub3Qgbm9ybWFsaXplIHRoZSBVUkwgd2hlbiBhc3NpZ25lZCB0byBhbiBhbmNob3Igbm9kZS4gIChBcHBhcmVudGx5LCBpdCBkb2VzLCBpZiBvbmVcbiAqIHVzZXMgdGhlIGlubmVyIEhUTUwgYXBwcm9hY2ggdG8gYXNzaWduIHRoZSBVUkwgYXMgcGFydCBvZiBhbiBIVE1MIHNuaXBwZXQgLVxuICogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDcyNzI5KSAgSG93ZXZlciwgc2V0dGluZyBpbWdbc3JjXSBkb2VzIG5vcm1hbGl6ZSB0aGUgVVJMLlxuICogVW5mb3J0dW5hdGVseSwgc2V0dGluZyBpbWdbc3JjXSB0byBzb21ldGhpbmcgbGlrZSBcImphdmFzY3JpcHQ6Zm9vXCIgb24gSUUgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbiAqIFNpbmNlIHRoZSBwcmltYXJ5IHVzYWdlIGZvciBub3JtYWxpemluZyBVUkxzIGlzIHRvIHNhbml0aXplIHN1Y2ggVVJMcywgd2UgY2FuJ3QgdXNlIHRoYXRcbiAqIG1ldGhvZCBhbmQgSUUgPCA4IGlzIHVuc3VwcG9ydGVkLlxuICpcbiAqIFJlZmVyZW5jZXM6XG4gKiAgIGh0dHA6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxBbmNob3JFbGVtZW50XG4gKiAgIGh0dHA6Ly93d3cuYXB0YW5hLmNvbS9yZWZlcmVuY2UvaHRtbC9hcGkvSFRNTEFuY2hvckVsZW1lbnQuaHRtbFxuICogICBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9wdWxsLzI5MDJcbiAqICAgaHR0cDovL2phbWVzLnBhZG9sc2V5LmNvbS9qYXZhc2NyaXB0L3BhcnNpbmctdXJscy13aXRoLXRoZS1kb20vXG4gKlxuICogQGtpbmQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWQuXG4gKiBAZGVzY3JpcHRpb24gTm9ybWFsaXplcyBhbmQgcGFyc2VzIGEgVVJMLlxuICogQHJldHVybnMge29iamVjdH0gUmV0dXJucyB0aGUgbm9ybWFsaXplZCBVUkwgYXMgYSBkaWN0aW9uYXJ5LlxuICpcbiAqICAgfCBtZW1iZXIgbmFtZSAgIHwgRGVzY3JpcHRpb24gICAgfFxuICogICB8LS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS18XG4gKiAgIHwgaHJlZiAgICAgICAgICB8IEEgbm9ybWFsaXplZCB2ZXJzaW9uIG9mIHRoZSBwcm92aWRlZCBVUkwgaWYgaXQgd2FzIG5vdCBhbiBhYnNvbHV0ZSBVUkwgfFxuICogICB8IHByb3RvY29sICAgICAgfCBUaGUgcHJvdG9jb2wgaW5jbHVkaW5nIHRoZSB0cmFpbGluZyBjb2xvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICAgfCBob3N0ICAgICAgICAgIHwgVGhlIGhvc3QgYW5kIHBvcnQgKGlmIHRoZSBwb3J0IGlzIG5vbi1kZWZhdWx0KSBvZiB0aGUgbm9ybWFsaXplZFVybCAgICB8XG4gKiAgIHwgc2VhcmNoICAgICAgICB8IFRoZSBzZWFyY2ggcGFyYW1zLCBtaW51cyB0aGUgcXVlc3Rpb24gbWFyayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogICB8IGhhc2ggICAgICAgICAgfCBUaGUgaGFzaCBzdHJpbmcsIG1pbnVzIHRoZSBoYXNoIHN5bWJvbFxuICogICB8IGhvc3RuYW1lICAgICAgfCBUaGUgaG9zdG5hbWVcbiAqICAgfCBwb3J0ICAgICAgICAgIHwgVGhlIHBvcnQsIHdpdGhvdXQgXCI6XCJcbiAqICAgfCBwYXRobmFtZSAgICAgIHwgVGhlIHBhdGhuYW1lLCBiZWdpbm5pbmcgd2l0aCBcIi9cIlxuICpcbiAqL1xuXG52YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbi8qKlxuICogZG9jdW1lbnRNb2RlIGlzIGFuIElFLW9ubHkgcHJvcGVydHlcbiAqIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9jYzE5Njk4OCh2PXZzLjg1KS5hc3B4XG4gKi9cbnZhciBtc2llID0gZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xuXG5mdW5jdGlvbiB1cmxQYXJ0cyh1cmwpIHtcbiAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgaWYgKG1zaWUpIHtcbiAgICAvLyBOb3JtYWxpemUgYmVmb3JlIHBhcnNlLiAgUmVmZXIgSW1wbGVtZW50YXRpb24gTm90ZXMgb24gd2h5IHRoaXMgaXNcbiAgICAvLyBkb25lIGluIHR3byBzdGVwcyBvbiBJRS5cbiAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGhyZWYpO1xuICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICB9XG5cbiAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICByZXR1cm4ge1xuICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICBwb3J0OiB1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyh1cmxQYXJzaW5nTm9kZS5wb3J0KT8gdXJsUGFyc2luZ05vZGUucG9ydDogODAsXG4gICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJylcbiAgICAgID8gdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgIDogJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgfTtcbn1cblxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhIHF1ZXJ5IHN0cmluZyAoc2VhcmNoIHBhcnQgb2YgYSB1cmwpIGFuZCByZXR1cm5zIGEgZGljdGlvbmFyeSB3aXRoXG4gKiB0aGUgZGlmZmVyZW50IGtleSB2YWx1ZSBwYWlyc1xuICogQHBhcmFtIHtzdHJpbmd9IHFzIHF1ZXJ5U3RyaW5nXG4gKi9cbmZ1bmN0aW9uIHF1ZXJ5U3RyaW5nVG9PYmoocXMsIGNvbmQpIHtcbiAgdmFyIHBhaXJzLCBxc09iajtcblxuICBjb25kID0gdXRpbGl0aWVzLmlzRnVuY3Rpb24oY29uZCk/IGNvbmQgOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBxcyA9IHFzLnRyaW0oKS5yZXBsYWNlKC9eXFw/LywgJycpO1xuICBwYWlycyA9IHFzLnNwbGl0KCcmJyk7XG4gIHFzT2JqID0ge307XG5cbiAgdXRpbGl0aWVzLmZvckVhY2gocGFpcnMsIGZ1bmN0aW9uIChwYWlyKSB7XG4gICAgdmFyIGtleVZhbHVlLCBrZXksIHZhbHVlO1xuICAgIGlmIChwYWlyICE9PSAnJykge1xuICAgICAga2V5VmFsdWUgPSBwYWlyLnNwbGl0KCc9Jyk7XG4gICAgICBrZXkgPSBrZXlWYWx1ZVswXTtcbiAgICAgIHZhbHVlID0ga2V5VmFsdWVbMV07XG4gICAgICBpZihjb25kKGtleSwgdmFsdWUpKXtcbiAgICAgICAgcXNPYmpba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHFzT2JqO1xufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gYWNjZXB0cyBhbiBvYmplY3QgYW5kIHNlcmlhbGl6ZXMgaXQgaW50byBhIHF1ZXJ5IHN0cmluZyB3aXRob3V0IHRoZSBsZWFkaW5nICc/J1xuICogQHBhcmFtIG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gb2JqVG9RdWVyeVN0cmluZyhvYmopIHtcbiAgdmFyIHBhaXJzID0gW107XG4gIHV0aWxpdGllcy5mb3JFYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICBwYWlycy5wdXNoKGtleSArICc9JyArIHZhbHVlKTtcbiAgfSk7XG4gIHJldHVybiBwYWlycy5qb2luKCcmJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB1cmxQYXJ0czogdXJsUGFydHMsXG4gIHF1ZXJ5U3RyaW5nVG9PYmo6IHF1ZXJ5U3RyaW5nVG9PYmosXG4gIG9ialRvUXVlcnlTdHJpbmc6IG9ialRvUXVlcnlTdHJpbmdcbn07XG4iLCIvKmpzaGludCB1bnVzZWQ6ZmFsc2UgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgTk9ERV9UWVBFX0VMRU1FTlQgPSAxO1xudmFyIFNOQUtFX0NBU0VfUkVHRVhQID0gL1tBLVpdL2c7XG52YXIgRU1BSUxfUkVHRVhQID0gL15bYS16MC05ISMkJSYnKitcXC89P15fYHt8fX4uLV0rQFthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KFxcLlthLXowLTldKFthLXowLTktXSpbYS16MC05XSk/KSskL2k7XG4vKmpzbGludCBtYXhsZW46IDUwMCAqL1xudmFyIElTTzgwODZfUkVHRVhQID0gL14oW1xcKy1dP1xcZHs0fSg/IVxcZHsyfVxcYikpKCgtPykoKDBbMS05XXwxWzAtMl0pKFxcMyhbMTJdXFxkfDBbMS05XXwzWzAxXSkpP3xXKFswLTRdXFxkfDVbMC0yXSkoLT9bMS03XSk/fCgwMFsxLTldfDBbMS05XVxcZHxbMTJdXFxkezJ9fDMoWzAtNV1cXGR8NlsxLTZdKSkpKFtUXFxzXSgoKFswMV1cXGR8MlswLTNdKSgoOj8pWzAtNV1cXGQpP3wyNFxcOj8wMCkoW1xcLixdXFxkKyg/ITopKT8pPyhcXDE3WzAtNV1cXGQoW1xcLixdXFxkKyk/KT8oW3paXXwoW1xcKy1dKShbMDFdXFxkfDJbMC0zXSk6PyhbMC01XVxcZCk/KT8pPyk/JC87XG5cblxuZnVuY3Rpb24gbm9vcCgpeyB9XG5cbmZ1bmN0aW9uIGlzTnVsbChvKSB7XG4gIHJldHVybiBvID09PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQobyl7XG4gIHJldHVybiBvICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKG8pe1xuICByZXR1cm4gbyA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHN0cil7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcihudW0pe1xuICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzV2luZG93KG9iaikge1xuICByZXR1cm4gdXRpbGl0aWVzLmlzT2JqZWN0KG9iaikgJiYgb2JqLndpbmRvdyA9PT0gb2JqO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KGFycmF5KXtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCggYXJyYXkgKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuZnVuY3Rpb24gaXNBcnJheUxpa2Uob2JqKSB7XG4gIGlmIChvYmogPT09IG51bGwgfHwgdXRpbGl0aWVzLmlzV2luZG93KG9iaikgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24ob2JqKSB8fCB1dGlsaXRpZXMuaXNVbmRlZmluZWQob2JqKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBvYmoubGVuZ3RoO1xuXG4gIGlmIChvYmoubm9kZVR5cGUgPT09IE5PREVfVFlQRV9FTEVNRU5UICYmIGxlbmd0aCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHV0aWxpdGllcy5pc1N0cmluZyhvYmopIHx8IHV0aWxpdGllcy5pc0FycmF5KG9iaikgfHwgbGVuZ3RoID09PSAwIHx8XG4gICAgdHlwZW9mIGxlbmd0aCA9PT0gJ251bWJlcicgJiYgbGVuZ3RoID4gMCAmJiAobGVuZ3RoIC0gMSkgaW4gb2JqO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc0VtcHR5U3RyaW5nKHN0cikge1xuICByZXR1cm4gdXRpbGl0aWVzLmlzU3RyaW5nKHN0cikgJiYgc3RyLmxlbmd0aCA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNOb3RFbXB0eVN0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHV0aWxpdGllcy5pc1N0cmluZyhzdHIpICYmIHN0ci5sZW5ndGggIT09IDA7XG59XG5cbmZ1bmN0aW9uIGFycmF5TGlrZU9ialRvQXJyYXkoYXJncykge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncyk7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICB2YXIga2V5LCBsZW5ndGg7XG4gIGlmIChvYmopIHtcbiAgICBpZiAoaXNGdW5jdGlvbihvYmopKSB7XG4gICAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgICAgLy8gTmVlZCB0byBjaGVjayBpZiBoYXNPd25Qcm9wZXJ0eSBleGlzdHMsXG4gICAgICAgIC8vIGFzIG9uIElFOCB0aGUgcmVzdWx0IG9mIHF1ZXJ5U2VsZWN0b3JBbGwgaXMgYW4gb2JqZWN0IHdpdGhvdXQgYSBoYXNPd25Qcm9wZXJ0eSBmdW5jdGlvblxuICAgICAgICBpZiAoa2V5ICE9PSAncHJvdG90eXBlJyAmJiBrZXkgIT09ICdsZW5ndGgnICYmIGtleSAhPT0gJ25hbWUnICYmICghb2JqLmhhc093blByb3BlcnR5IHx8IG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSkge1xuICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICB2YXIgaXNQcmltaXRpdmUgPSB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JztcbiAgICAgIGZvciAoa2V5ID0gMCwgbGVuZ3RoID0gb2JqLmxlbmd0aDsga2V5IDwgbGVuZ3RoOyBrZXkrKykge1xuICAgICAgICBpZiAoaXNQcmltaXRpdmUgfHwga2V5IGluIG9iaikge1xuICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob2JqLmZvckVhY2ggJiYgb2JqLmZvckVhY2ggIT09IGZvckVhY2gpIHtcbiAgICAgIG9iai5mb3JFYWNoKGl0ZXJhdG9yLCBjb250ZXh0LCBvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHNuYWtlX2Nhc2UobmFtZSwgc2VwYXJhdG9yKSB7XG4gIHNlcGFyYXRvciA9IHNlcGFyYXRvciB8fCAnXyc7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoU05BS0VfQ0FTRV9SRUdFWFAsIGZ1bmN0aW9uKGxldHRlciwgcG9zKSB7XG4gICAgcmV0dXJuIChwb3MgPyBzZXBhcmF0b3IgOiAnJykgKyBsZXR0ZXIudG9Mb3dlckNhc2UoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbWFpbChlbWFpbCl7XG4gIGlmKCF1dGlsaXRpZXMuaXNTdHJpbmcoZW1haWwpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gRU1BSUxfUkVHRVhQLnRlc3QoZW1haWwudHJpbSgpKTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kIChvYmopIHtcbiAgdmFyIGFyZywgaSwgaztcbiAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGFyZyA9IGFyZ3VtZW50c1tpXTtcbiAgICBmb3IgKGsgaW4gYXJnKSB7XG4gICAgICBpZiAoYXJnLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGlmKGlzT2JqZWN0KG9ialtrXSkgJiYgIWlzTnVsbChvYmpba10pICYmIGlzT2JqZWN0KGFyZ1trXSkpe1xuICAgICAgICAgIG9ialtrXSA9IGV4dGVuZCh7fSwgb2JqW2tdLCBhcmdba10pO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgb2JqW2tdID0gYXJnW2tdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUocyl7XG4gIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gZGVjYXBpdGFsaXplKHMpIHtcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHdvcmtzIHRoZSBzYW1lIHdheSBhcnJheS5wcm90b3R5cGUubWFwIHdvcmtzIGJ1dCBpZiB0aGUgdHJhbnNmb3JtZXIgcmV0dXJucyB1bmRlZmluZSwgdGhlblxuICogaXQgd29uJ3QgYmUgYWRkZWQgdG8gdGhlIHRyYW5zZm9ybWVkIEFycmF5LlxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1BcnJheShhcnJheSwgdHJhbnNmb3JtZXIpIHtcbiAgdmFyIHRyYW5zZm9ybWVkQXJyYXkgPSBbXTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KXtcbiAgICB2YXIgdHJhbnNmb3JtZWRJdGVtID0gdHJhbnNmb3JtZXIoaXRlbSwgaW5kZXgpO1xuICAgIGlmKHV0aWxpdGllcy5pc0RlZmluZWQodHJhbnNmb3JtZWRJdGVtKSkge1xuICAgICAgdHJhbnNmb3JtZWRBcnJheS5wdXNoKHRyYW5zZm9ybWVkSXRlbSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHJhbnNmb3JtZWRBcnJheTtcbn1cblxuZnVuY3Rpb24gdG9GaXhlZERpZ2l0cyhudW0sIGRpZ2l0cykge1xuICB2YXIgZm9ybWF0dGVkTnVtID0gbnVtICsgJyc7XG4gIGRpZ2l0cyA9IHV0aWxpdGllcy5pc051bWJlcihkaWdpdHMpID8gZGlnaXRzIDogMDtcbiAgbnVtID0gdXRpbGl0aWVzLmlzTnVtYmVyKG51bSkgPyBudW0gOiBwYXJzZUludChudW0sIDEwKTtcbiAgaWYodXRpbGl0aWVzLmlzTnVtYmVyKG51bSkgJiYgIWlzTmFOKG51bSkpe1xuICAgIGZvcm1hdHRlZE51bSA9IG51bSArICcnO1xuICAgIHdoaWxlKGZvcm1hdHRlZE51bS5sZW5ndGggPCBkaWdpdHMpIHtcbiAgICAgIGZvcm1hdHRlZE51bSA9ICcwJyArIGZvcm1hdHRlZE51bTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm1hdHRlZE51bTtcbiAgfVxuICByZXR1cm4gTmFOICsgJyc7XG59XG5cbmZ1bmN0aW9uIHRocm90dGxlKGNhbGxiYWNrLCBkZWxheSkge1xuICB2YXIgcHJldmlvdXNDYWxsID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSAoZGVsYXkgKyAxKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgaWYgKCh0aW1lIC0gcHJldmlvdXNDYWxsKSA+PSBkZWxheSkge1xuICAgICAgcHJldmlvdXNDYWxsID0gdGltZTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZSAoY2FsbGJhY2ssIHdhaXQpIHtcbiAgdmFyIHRpbWVvdXRJZDtcblxuICByZXR1cm4gZnVuY3Rpb24gKCl7XG4gICAgaWYodGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG4gICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICB9LCB3YWl0KTtcbiAgfTtcbn1cblxuLy8gYSBmdW5jdGlvbiBkZXNpZ25lZCB0byBibG93IHVwIHRoZSBzdGFjayBpbiBhIG5haXZlIHdheVxuLy8gYnV0IGl0IGlzIG9rIGZvciB2aWRlb0pzIGNoaWxkcmVuIGNvbXBvbmVudHNcbmZ1bmN0aW9uIHRyZWVTZWFyY2gocm9vdCwgZ2V0Q2hpbGRyZW4sIGZvdW5kKXtcbiAgdmFyIGNoaWxkcmVuID0gZ2V0Q2hpbGRyZW4ocm9vdCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgIGlmIChmb3VuZChjaGlsZHJlbltpXSkpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbltpXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgZWwgPSB0cmVlU2VhcmNoKGNoaWxkcmVuW2ldLCBnZXRDaGlsZHJlbiwgZm91bmQpO1xuICAgICAgaWYgKGVsKXtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBlY2hvRm4odmFsKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfTtcbn1cblxuLy9Ob3RlOiBTdXBwb3J0ZWQgZm9ybWF0cyBjb21lIGZyb20gaHR0cDovL3d3dy53My5vcmcvVFIvTk9URS1kYXRldGltZVxuLy8gYW5kIHRoZSBpc284NjAxIHJlZ2V4IGNvbWVzIGZyb20gaHR0cDovL3d3dy5wZWxhZ29kZXNpZ24uY29tL2Jsb2cvMjAwOS8wNS8yMC9pc28tODYwMS1kYXRlLXZhbGlkYXRpb24tdGhhdC1kb2VzbnQtc3Vjay9cbmZ1bmN0aW9uIGlzSVNPODYwMSh2YWx1ZSkge1xuICBpZih1dGlsaXRpZXMuaXNOdW1iZXIodmFsdWUpKXtcbiAgICB2YWx1ZSA9IHZhbHVlICsgJyc7ICAvL3dlIG1ha2Ugc3VyZSB0aGF0IHdlIGFyZSB3b3JraW5nIHdpdGggc3RyaW5nc1xuICB9XG5cbiAgaWYoIXV0aWxpdGllcy5pc1N0cmluZyh2YWx1ZSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBJU084MDg2X1JFR0VYUC50ZXN0KHZhbHVlLnRyaW0oKSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBCcm93c2VyIGlzIElFOSBhbmQgYmVsb3dcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgdmVyc2lvbiA9IHV0aWxpdGllcy5nZXRJbnRlcm5ldEV4cGxvcmVyVmVyc2lvbihuYXZpZ2F0b3IpO1xuICBpZiAodmVyc2lvbiA9PT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdmVyc2lvbiA8IDEwO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHZlcnNpb24gb2YgSW50ZXJuZXQgRXhwbG9yZXIgb3IgYSAtMSAoaW5kaWNhdGluZyB0aGUgdXNlIG9mIGFub3RoZXIgYnJvd3NlcikuXG4gKiBTb3VyY2U6IGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1Mzc1MDkodj12cy44NSkuYXNweFxuICogQHJldHVybnMge251bWJlcn0gdGhlIHZlcnNpb24gb2YgSW50ZXJuZXQgRXhwbG9yZXIgb3IgYSAtMSAoaW5kaWNhdGluZyB0aGUgdXNlIG9mIGFub3RoZXIgYnJvd3NlcikuXG4gKi9cbmZ1bmN0aW9uIGdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uKG5hdmlnYXRvcikge1xuICB2YXIgcnYgPSAtMTtcblxuICBpZiAobmF2aWdhdG9yLmFwcE5hbWUgPT0gJ01pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlcicpIHtcbiAgICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCJNU0lFIChbMC05XXsxLH1bXFwuMC05XXswLH0pXCIpO1xuICAgIHZhciByZXMgPSByZS5leGVjKHVhKTtcbiAgICBpZiAocmVzICE9PSBudWxsKSB7XG4gICAgICBydiA9IHBhcnNlRmxvYXQocmVzWzFdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcnY7XG59XG5cbi8qKiogTW9iaWxlIFV0aWxpdHkgZnVuY3Rpb25zICoqKi9cbmZ1bmN0aW9uIGlzSURldmljZSgpIHtcbiAgcmV0dXJuIC9pUChob25lfGFkKS8udGVzdCh1dGlsaXRpZXMuX1VBKTtcbn1cblxuZnVuY3Rpb24gaXNNb2JpbGUoKSB7XG4gIHJldHVybiAvaVAoaG9uZXxhZHxvZCl8QW5kcm9pZHxXaW5kb3dzIFBob25lLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xufVxuXG5mdW5jdGlvbiBpc0lQaG9uZSgpIHtcbiAgcmV0dXJuIC9pUChob25lfG9kKS8udGVzdCh1dGlsaXRpZXMuX1VBKTtcbn1cblxuZnVuY3Rpb24gaXNBbmRyb2lkKCkge1xuICByZXR1cm4gL0FuZHJvaWQvLnRlc3QodXRpbGl0aWVzLl9VQSk7XG59XG5cbnZhciB1dGlsaXRpZXMgPSB7XG4gIF9VQTogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgbm9vcDogbm9vcCxcbiAgaXNOdWxsOiBpc051bGwsXG4gIGlzRGVmaW5lZDogaXNEZWZpbmVkLFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc1dpbmRvdzogaXNXaW5kb3csXG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlMaWtlOiBpc0FycmF5TGlrZSxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc0VtcHR5U3RyaW5nOiBpc0VtcHR5U3RyaW5nLFxuICBpc05vdEVtcHR5U3RyaW5nOiBpc05vdEVtcHR5U3RyaW5nLFxuICBhcnJheUxpa2VPYmpUb0FycmF5OiBhcnJheUxpa2VPYmpUb0FycmF5LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBzbmFrZV9jYXNlOiBzbmFrZV9jYXNlLFxuICBpc1ZhbGlkRW1haWw6IGlzVmFsaWRFbWFpbCxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIGNhcGl0YWxpemU6IGNhcGl0YWxpemUsXG4gIGRlY2FwaXRhbGl6ZTogZGVjYXBpdGFsaXplLFxuICB0cmFuc2Zvcm1BcnJheTogdHJhbnNmb3JtQXJyYXksXG4gIHRvRml4ZWREaWdpdHM6IHRvRml4ZWREaWdpdHMsXG4gIHRocm90dGxlOiB0aHJvdHRsZSxcbiAgZGVib3VuY2U6IGRlYm91bmNlLFxuICB0cmVlU2VhcmNoOiB0cmVlU2VhcmNoLFxuICBlY2hvRm46IGVjaG9GbixcbiAgaXNJU084NjAxOiBpc0lTTzg2MDEsXG4gIGlzT2xkSUU6IGlzT2xkSUUsXG4gIGdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uOiBnZXRJbnRlcm5ldEV4cGxvcmVyVmVyc2lvbixcbiAgaXNJRGV2aWNlOiBpc0lEZXZpY2UsXG4gIGlzTW9iaWxlOiBpc01vYmlsZSxcbiAgaXNJUGhvbmU6IGlzSVBob25lLFxuICBpc0FuZHJvaWQ6IGlzQW5kcm9pZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsaXRpZXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIHhtbCA9IHt9O1xuXG54bWwuc3RyVG9YTUxEb2MgPSBmdW5jdGlvbiBzdHJUb1hNTERvYyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlKXtcbiAgLy9JRSA4XG4gIGlmKHR5cGVvZiB3aW5kb3cuRE9NUGFyc2VyID09PSAndW5kZWZpbmVkJyl7XG4gICAgdmFyIHhtbERvY3VtZW50ID0gbmV3IEFjdGl2ZVhPYmplY3QoJ01pY3Jvc29mdC5YTUxET00nKTtcbiAgICB4bWxEb2N1bWVudC5hc3luYyA9IGZhbHNlO1xuICAgIHhtbERvY3VtZW50LmxvYWRYTUwoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSk7XG4gICAgcmV0dXJuIHhtbERvY3VtZW50O1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlU3RyaW5nKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UpO1xuXG4gIGZ1bmN0aW9uIHBhcnNlU3RyaW5nKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2Upe1xuICAgIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgdmFyIHBhcnNlZERvY3VtZW50O1xuXG4gICAgLy9Ob3RlOiBUaGlzIHRyeSBjYXRjaCBpcyB0byBkZWFsIHdpdGggdGhlIGZhY3QgdGhhdCBvbiBJRSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nIGRvZXMgdGhyb3cgYW4gZXJyb3IgYnV0IHRoZSByZXN0IG9mIHRoZSBicm93c2VycyBkb24ndC5cbiAgICB0cnkge1xuICAgICAgcGFyc2VkRG9jdW1lbnQgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UsIFwiYXBwbGljYXRpb24veG1sXCIpO1xuXG4gICAgICBpZihpc1BhcnNlRXJyb3IocGFyc2VkRG9jdW1lbnQpIHx8IHV0aWxpdGllcy5pc0VtcHR5U3RyaW5nKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UpKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICB9XG4gICAgfWNhdGNoKGUpe1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwieG1sLnN0clRvWE1MRE9DOiBFcnJvciBwYXJzaW5nIHRoZSBzdHJpbmc6ICdcIiArIHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UgKyBcIidcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlZERvY3VtZW50O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNQYXJzZUVycm9yKHBhcnNlZERvY3VtZW50KSB7XG4gICAgdHJ5IHsgLy8gcGFyc2VyIGFuZCBwYXJzZXJlcnJvck5TIGNvdWxkIGJlIGNhY2hlZCBvbiBzdGFydHVwIGZvciBlZmZpY2llbmN5XG4gICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpLFxuICAgICAgICBlcnJvbmVvdXNQYXJzZSA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoJ0lOVkFMSUQnLCAndGV4dC94bWwnKSxcbiAgICAgICAgcGFyc2VyZXJyb3JOUyA9IGVycm9uZW91c1BhcnNlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIilbMF0ubmFtZXNwYWNlVVJJO1xuXG4gICAgICBpZiAocGFyc2VyZXJyb3JOUyA9PT0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnKSB7XG4gICAgICAgIC8vIEluIFBoYW50b21KUyB0aGUgcGFyc2VlcnJvciBlbGVtZW50IGRvZXNuJ3Qgc2VlbSB0byBoYXZlIGEgc3BlY2lhbCBuYW1lc3BhY2UsIHNvIHdlIGFyZSBqdXN0IGd1ZXNzaW5nIGhlcmUgOihcbiAgICAgICAgcmV0dXJuIHBhcnNlZERvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RoID4gMDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnNlZERvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lTlMocGFyc2VyZXJyb3JOUywgJ3BhcnNlcmVycm9yJykubGVuZ3RoID4gMDtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvL05vdGUgb24gSUUgcGFyc2VTdHJpbmcgdGhyb3dzIGFuIGVycm9yIGJ5IGl0c2VsZiBhbmQgaXQgd2lsbCBuZXZlciByZWFjaCB0aGlzIGNvZGUuIEJlY2F1c2UgaXQgd2lsbCBoYXZlIGZhaWxlZCBiZWZvcmVcbiAgICB9XG4gIH1cbn07XG5cbnhtbC5wYXJzZVRleHQgPSBmdW5jdGlvbiBwYXJzZVRleHQgKHNWYWx1ZSkge1xuICBpZiAoL15cXHMqJC8udGVzdChzVmFsdWUpKSB7IHJldHVybiBudWxsOyB9XG4gIGlmICgvXig/OnRydWV8ZmFsc2UpJC9pLnRlc3Qoc1ZhbHVlKSkgeyByZXR1cm4gc1ZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IFwidHJ1ZVwiOyB9XG4gIGlmIChpc0Zpbml0ZShzVmFsdWUpKSB7IHJldHVybiBwYXJzZUZsb2F0KHNWYWx1ZSk7IH1cbiAgaWYgKHV0aWxpdGllcy5pc0lTTzg2MDEoc1ZhbHVlKSkgeyByZXR1cm4gbmV3IERhdGUoc1ZhbHVlKTsgfVxuICByZXR1cm4gc1ZhbHVlLnRyaW0oKTtcbn07XG5cbnhtbC5KWE9OVHJlZSA9IGZ1bmN0aW9uIEpYT05UcmVlIChvWE1MUGFyZW50KSB7XG4gIHZhciBwYXJzZVRleHQgPSB4bWwucGFyc2VUZXh0O1xuXG4gIC8vVGhlIGRvY3VtZW50IG9iamVjdCBpcyBhbiBlc3BlY2lhbCBvYmplY3QgdGhhdCBpdCBtYXkgbWlzcyBzb21lIGZ1bmN0aW9ucyBvciBhdHRycyBkZXBlbmRpbmcgb24gdGhlIGJyb3dzZXIuXG4gIC8vVG8gcHJldmVudCB0aGlzIHByb2JsZW0gd2l0aCBjcmVhdGUgdGhlIEpYT05UcmVlIHVzaW5nIHRoZSByb290IGNoaWxkTm9kZSB3aGljaCBpcyBhIGZ1bGx5IGZsZXNoZWQgbm9kZSBvbiBhbGwgc3VwcG9ydGVkXG4gIC8vYnJvd3NlcnMuXG4gIGlmKG9YTUxQYXJlbnQuZG9jdW1lbnRFbGVtZW50KXtcbiAgICByZXR1cm4gbmV3IHhtbC5KWE9OVHJlZShvWE1MUGFyZW50LmRvY3VtZW50RWxlbWVudCk7XG4gIH1cblxuICBpZiAob1hNTFBhcmVudC5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICB2YXIgc0NvbGxlY3RlZFR4dCA9IFwiXCI7XG4gICAgZm9yICh2YXIgb05vZGUsIHNQcm9wLCB2Q29udGVudCwgbkl0ZW0gPSAwOyBuSXRlbSA8IG9YTUxQYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7IG5JdGVtKyspIHtcbiAgICAgIG9Ob2RlID0gb1hNTFBhcmVudC5jaGlsZE5vZGVzLml0ZW0obkl0ZW0pO1xuICAgICAgLypqc2hpbnQgYml0d2lzZTogZmFsc2UqL1xuICAgICAgaWYgKChvTm9kZS5ub2RlVHlwZSAtIDEgfCAxKSA9PT0gMykgeyBzQ29sbGVjdGVkVHh0ICs9IG9Ob2RlLm5vZGVUeXBlID09PSAzID8gb05vZGUubm9kZVZhbHVlLnRyaW0oKSA6IG9Ob2RlLm5vZGVWYWx1ZTsgfVxuICAgICAgZWxzZSBpZiAob05vZGUubm9kZVR5cGUgPT09IDEgJiYgIW9Ob2RlLnByZWZpeCkge1xuICAgICAgICBzUHJvcCA9IHV0aWxpdGllcy5kZWNhcGl0YWxpemUob05vZGUubm9kZU5hbWUpO1xuICAgICAgICB2Q29udGVudCA9IG5ldyB4bWwuSlhPTlRyZWUob05vZGUpO1xuICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShzUHJvcCkpIHtcbiAgICAgICAgICBpZiAodGhpc1tzUHJvcF0uY29uc3RydWN0b3IgIT09IEFycmF5KSB7IHRoaXNbc1Byb3BdID0gW3RoaXNbc1Byb3BdXTsgfVxuICAgICAgICAgIHRoaXNbc1Byb3BdLnB1c2godkNvbnRlbnQpO1xuICAgICAgICB9IGVsc2UgeyB0aGlzW3NQcm9wXSA9IHZDb250ZW50OyB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzQ29sbGVjdGVkVHh0KSB7IHRoaXMua2V5VmFsdWUgPSBwYXJzZVRleHQoc0NvbGxlY3RlZFR4dCk7IH1cbiAgfVxuXG4gIC8vSUU4IFN0dXBpZCBmaXhcbiAgdmFyIGhhc0F0dHIgPSB0eXBlb2Ygb1hNTFBhcmVudC5oYXNBdHRyaWJ1dGVzID09PSAndW5kZWZpbmVkJz8gb1hNTFBhcmVudC5hdHRyaWJ1dGVzLmxlbmd0aCA+IDA6IG9YTUxQYXJlbnQuaGFzQXR0cmlidXRlcygpO1xuICBpZiAoaGFzQXR0cikge1xuICAgIHZhciBvQXR0cmliO1xuICAgIGZvciAodmFyIG5BdHRyaWIgPSAwOyBuQXR0cmliIDwgb1hNTFBhcmVudC5hdHRyaWJ1dGVzLmxlbmd0aDsgbkF0dHJpYisrKSB7XG4gICAgICBvQXR0cmliID0gb1hNTFBhcmVudC5hdHRyaWJ1dGVzLml0ZW0obkF0dHJpYik7XG4gICAgICB0aGlzW1wiQFwiICsgdXRpbGl0aWVzLmRlY2FwaXRhbGl6ZShvQXR0cmliLm5hbWUpXSA9IHBhcnNlVGV4dChvQXR0cmliLnZhbHVlLnRyaW0oKSk7XG4gICAgfVxuICB9XG59O1xuXG54bWwuSlhPTlRyZWUucHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbihhdHRyKSB7XG4gIHJldHVybiB0aGlzWydAJyArIHV0aWxpdGllcy5kZWNhcGl0YWxpemUoYXR0cildO1xufTtcblxueG1sLnRvSlhPTlRyZWUgPSBmdW5jdGlvbiB0b0pYT05UcmVlKHhtbFN0cmluZyl7XG4gIHZhciB4bWxEb2MgPSB4bWwuc3RyVG9YTUxEb2MoeG1sU3RyaW5nKTtcbiAgcmV0dXJuIG5ldyB4bWwuSlhPTlRyZWUoeG1sRG9jKTtcbn07XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGV4dHJhY3QgdGhlIGtleXZhbHVlIG9mIGEgSlhPTlRyZWUgb2JqXG4gKlxuICogQHBhcmFtIHhtbE9iaiB7SlhPTlRyZWV9XG4gKiByZXR1cm4gdGhlIGtleSB2YWx1ZSBvciB1bmRlZmluZWQ7XG4gKi9cbnhtbC5rZXlWYWx1ZSA9IGZ1bmN0aW9uIGdldEtleVZhbHVlKHhtbE9iaikge1xuICBpZih4bWxPYmope1xuICAgIHJldHVybiB4bWxPYmoua2V5VmFsdWU7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbnhtbC5hdHRyID0gZnVuY3Rpb24gZ2V0QXR0clZhbHVlKHhtbE9iaiwgYXR0cikge1xuICBpZih4bWxPYmopIHtcbiAgICByZXR1cm4geG1sT2JqWydAJyArIHV0aWxpdGllcy5kZWNhcGl0YWxpemUoYXR0cildO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG54bWwuZW5jb2RlID0gZnVuY3Rpb24gZW5jb2RlWE1MKHN0cikge1xuICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhzdHIpKSByZXR1cm4gdW5kZWZpbmVkO1xuXG4gIHJldHVybiBzdHIucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmYXBvczsnKTtcbn07XG5cbnhtbC5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGVYTUwoc3RyKSB7XG4gIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKHN0cikpIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mYXBvczsvZywgXCInXCIpXG4gICAgLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKVxuICAgIC5yZXBsYWNlKC8mZ3Q7L2csICc+JylcbiAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXG4gICAgLnJlcGxhY2UoLyZhbXA7L2csICcmJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHhtbDtcbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi9wbHVnaW4vY29tcG9uZW50cy9hZHMtbGFiZWxfNScpO1xucmVxdWlyZSgnLi9wbHVnaW4vY29tcG9uZW50cy9ibGFjay1wb3N0ZXJfNScpO1xuXG52YXIgdmlkZW9Kc1ZBU1QgPSByZXF1aXJlKCcuL3BsdWdpbi92aWRlb2pzLnZhc3QudnBhaWQnKTtcblxudmlkZW9qcy5wbHVnaW4oJ3Zhc3RDbGllbnQnLCB2aWRlb0pzVkFTVCk7XG4iXX0=
