(function (global) {
  var domainStart = getHostStart(window.location.host)
  var version = getAttr('data-hp-ver') || '1.3.11',
    domain = (getAttr('data-hp-sld') ? getAttr('data-hp-sld') : domainStart) +
      '.hjfile.cn/',

    script_src = domain + 'co/pass/' + version + '/hjpassport.min.js',
    cc_plugin_src = domain + 'co/pass/' + version + '/plugin.js',
    css_src = domain + 'co/pass/' + version + '/hjpassport.min.css',
    preInited = false,
    preCacheInitOptions,
    preCacheViewName,
    preCacheViewOptions

  var preprocessOptions = function (options) {
    if (/(xiaoxue|yuer|zhongxue|gaokao|bb|zxy)\.hujiang\.com/.test(window.location.host)) {
      options.skipsOnLogin = ['category-select']
      options.skips 		 = ['category-select']
      options.skipsOnThird = ['category-select']
    }

    return options
  }

  var redefineInit = function () {
    var _init = global['HJPassport'].init

    global['HJPassport'].init = function (options) {
      options = preprocessOptions(options)
      _init.call(this, options)
    }
  }

  if (global['HJPassport']) { // rewrite init if res already loaded
    return redefineInit()
  }

  function allscripts () {
    return document.getElementsByTagName('script')
  }

  function getAttr (key) { // 'data-hp-ver'
    var scripts = allscripts()

    for (var i = 0, len = scripts.length; i < len; i++) {
      var scriptNode = scripts[i], ver
      if (ver = scriptNode.getAttribute(key)) {
        return ver
      }
    }
    return null
  }
  function getHostStart (domainStart) {
    var qaReg = /^(qa|dev|local|test)/i
    var yzReg = /^yz/i
    if (qaReg.test(domainStart)) {
      return '//qares'
    }
    if (yzReg.test(domainStart)) {
      return '//yzres'
    }
    return '//res'
  }
  global['HJPassport'] = {
    init: function (options) {
      preInited = true
      preCacheInitOptions = options
    },

    show: function (name, options) {
      preCacheViewName = name
      preCacheViewOptions = options
    }
  }

  var createScript = function (src) {
    var node = document.createElement('script')
    node.type = 'text/javascript'
    node.charset = 'utf-8'
    node.src = src
    return node
  }

  var createLink = function () {
    var node = document.createElement('link')
    node.type = 'text/css'
    node.rel = 'stylesheet'
    node.href = css_src
    return node
  }

  var callback = function () { // call init & show if script loaded async
    if (preCacheInitOptions) {
      preprocessOptions(preCacheInitOptions)
      if (preInited) {
        HJPassport.init(preCacheInitOptions)
      }
      if (preCacheViewName) {
        HJPassport.show(preCacheViewName, preCacheViewOptions)
      }
    } else if (global['HJPassport']) { // rewrite init if js loaded before HJP.init
      return redefineInit()
    }
  }

  var head = document.getElementsByTagName('head')[0]
  var script = createScript(script_src)
  
  head.appendChild(script)
  head.appendChild(createLink())

  document.addEventListener
    ? script.addEventListener('load', callback, false)
    : script.onreadystatechange = function () {
      if (/loaded|complete/.test(script.readyState)) {
        script.onreadystatechange = null
        callback()
      }
    }
})(this)