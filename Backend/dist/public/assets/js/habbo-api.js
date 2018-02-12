"use strict";

!function e(t, n, a) {
  function s(r, o) {
    if (!n[r]) {
      if (!t[r]) {
        var l = "function" == typeof require && require;if (!o && l) return l(r, !0);if (i) return i(r, !0);var c = new Error("Cannot find module '" + r + "'");throw c.code = "MODULE_NOT_FOUND", c;
      }var u = n[r] = { exports: {} };t[r][0].call(u.exports, function (e) {
        var n = t[r][1][e];return s(n || e);
      }, u, u.exports, e, t, n, a);
    }return n[r].exports;
  }for (var i = "function" == typeof require && require, r = 0; r < a.length; r++) {
    s(a[r]);
  }return s;
}({ 1: [function (e, t, n) {
    "use strict";
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }var s = e("./config/config"),
        i = a(s),
        r = e("./config/run"),
        o = a(r);e("./components"), e("./controllers"), e("./directives"), e("./services"), e("./config/template-cache");var l = ["ngAria", "ngSanitize", "ui.router", "ct.ui.router.extras", "ngStorage", "app.templates", "heroic.components", "heroic.controllers", "heroic.directives", "heroic.services"];window.app = angular.module("heroic", l), angular.module("heroic").config(i.default), angular.module("heroic").run(o.default), angular.bootstrap(document, ["heroic"], { strictDi: !0 });
  }, { "./components": 5, "./config/config": 8, "./config/run": 10, "./config/template-cache": 12, "./controllers": 13, "./directives": 30, "./services": 32 }], 2: [function (e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });var a = { templateUrl: "views/common/components/header/header.html" };n.default = a;
  }, {}], 3: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        i = e("../../config/navigation.json"),
        r = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(i),
        o = function () {
      function e(t, n, s) {
        "ngInject";
        var i = this;a(this, e), this.$state = t, this.$scope = n, this.$scope.navigationList = [], this.$scope.loadedStates = t.get(), this.$onInit = function () {
          i.buildNavigation();
        };
      }return e.$inject = ["$state", "$scope", "$localStorage"], s(e, [{ key: "buildNavigation", value: function value() {
          var e = this;null != r.default.navigation && 0 != r.default.navigation.length && angular.forEach(r.default.navigation, function (t, n) {
            if (1 != t.disabled) {
              if (angular.forEach(e.$scope.loadedStates, function (e, n) {
                e.name == t.state && (t.state = e);
              }), void 0 == t.subItems || 0 == t.subItems.length) return e.$scope.navigationList.push(t);if (t.children = [], angular.forEach(t.subItems, function (n, a) {
                1 != n.disabled && angular.forEach(e.$scope.loadedStates, function (e, a) {
                  e.name == n.state && (n.state = e, t.children.push(n));
                });
              }), delete t.subItems, 0 != t.children.length) return e.$scope.navigationList.push(t);
            }
          });
        } }]), e;
    }(),
        l = { controller: o, templateUrl: "views/common/components/header/navigation.html" };n.default = l;
  }, { "../../config/navigation.json": 9 }], 4: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        i = function () {
      function e(t, n, s) {
        "ngInject";
        a(this, e), this.$scope = t, this.$http = n, this.$interval = s, t.online = 0, this.$onInit = this.fetch();
      }return e.$inject = ["$scope", "$http", "$interval"], s(e, [{ key: "fetch", value: function value() {
          var e = this;this.run(), this.$interval(function () {
            return e.run();
          }, 1e4);
        } }, { key: "run", value: function value() {
          var e = this;this.$http({ type: "GET", url: "/api/data/emulator/online/fetch" }).then(function (t) {
            void 0 != t.data ? e.$scope.online = t.data.length : e.$scope.online = 0;
          });
        } }]), e;
    }(),
        r = { controller: i, templateUrl: "views/common/components/header/online.html" };n.default = r;
  }, {}], 5: [function (e, t, n) {
    "use strict";
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = e("./other/news"),
        i = a(s),
        r = e("./other/footer"),
        o = a(r),
        l = e("./header/online"),
        c = a(l),
        u = e("./header/header"),
        d = a(u),
        h = e("./header/navigation"),
        m = a(h),
        p = angular.module("heroic.components", []);p.component("heroicHeader", d.default), p.component("heroicFooter", o.default), p.component("heroicNavigation", m.default), p.component("habboOnline", c.default), p.component("habboNews", i.default), n.default = p;
  }, { "./header/header": 2, "./header/navigation": 3, "./header/online": 4, "./other/footer": 6, "./other/news": 7 }], 6: [function (e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });var a = { templateUrl: "views/common/components/footer.html" };n.default = a;
  }, {}], 7: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        i = function () {
      function e(t, n) {
        "ngInject";
        var s = this;a(this, e), this.$scope = t, this.$http = n, this.$scope.news = [], this.$onInit = function () {
          return s.fetch();
        };
      }return e.$inject = ["$scope", "$http"], s(e, [{ key: "fetch", value: function value() {
          var e = this;this.$http({ type: "GET", url: "/api/data/website/news/fetch" }).then(function (t) {
            e.$scope.news = t.data;
          }).catch(function (e) {
            console.log("Error: ", e);
          });
        } }]), e;
    }(),
        r = { controller: i, templateUrl: "views/common/components/news.html" };n.default = r;
  }, {}], 8: [function (e, t, n) {
    "use strict";
    function a(e, t, n, a) {
      "ngInject";
      e.html5Mode(!0), e.hashPrefix(""), t.otherwise("/login"), null == i.default && 0 == i.default.length || angular.forEach(i.default, function (e, t) {
        n.state(e.name, e);
      }), a.interceptors.push("JWTService"), a.interceptors.push("PromiseService");
    }a.$inject = ["$locationProvider", "$urlRouterProvider", "$stateProvider", "$httpProvider"], Object.defineProperty(n, "__esModule", { value: !0 }), n.default = a;var s = e("./states.json"),
        i = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(s);
  }, { "./states.json": 11 }], 9: [function (e, t, n) {
    t.exports = { navigation: [{ name: "current_username", icon: "home", state: "me", url: "me.home", sort: 1, disabled: !1, subItems: [{ name: "What's Up", state: "me.home", sort: 1, disabled: !1 }, { name: "Website Updates", state: "me.about", sort: 2, disabled: !1 }] }, { name: "Community", icon: "users", state: "community", url: "community.photos", sort: 2, disabled: !1, subItems: [{ name: "Home", state: "community.home", sort: 1, disabled: !1 }, { name: "Photos", state: "community.photos", sort: 2, disabled: !1 }, { name: "Online", state: "community.online", sort: 3, disabled: !1 }, { name: "News", state: "community.news", url: "community.news.category.all", sort: 4, disabled: !1 }, { name: "Leaderboards", state: "community.leaderboards", sort: 5, disabled: !1 }, { name: "Staff", state: "community.staff", sort: 6, disabled: !1 }] }, { name: "Hangouts", icon: "feed", state: "hangouts", url: "hangouts.home.list", sort: 3, disabled: !1, subItems: [{ name: "Home", state: "hangouts.home", url: "hangouts.home.list", sort: 1, disabled: !1 }, { name: "Share A Story", state: "hangouts.create", sort: 2, disabled: !1 }] }, { name: "Home", icon: "home", state: "admin.home", sort: 1, disabled: !1, restricted: !0, subItems: [{ name: "Home", state: "admin.home", sort: 1, disabled: !1 }] }, { name: "Website", icon: "gear", state: "admin.website.settings", sort: 1, disabled: !1, restricted: !0, subItems: [{ name: "Settings", state: "admin.website.settings", sort: 1, disabled: !1 }] }] };
  }, {}], 10: [function (e, t, n) {
    "use strict";
    function a(e, t, n, a, s, i, r, o) {
      "ngInject";
      i.state = s, i.$on("$stateChangeStart", function (e, t, a) {
        if (i.page = t.pretty, i.session = o.session, !t.session) return t.guest && void 0 !== i.session ? (e.preventDefault(), s.go("me.home")) : t;n.validateSession().then(function (e) {
          return t;
        }).catch(function (t) {
          return e.preventDefault(), s.go("login");
        });
      }), i.$on("$stateChangeSuccess", function (e, t, n, r, o) {
        a.scrollTo(0, 0), i.previousState = void 0 == r.name || "" == r.name ? s.get("login") : r, i.previousParams = o, i.currentState = t, i.goBack = function () {
          return s.go(i.previousState.name, i.previousParams);
        };
      });
    }a.$inject = ["SettingsService", "JWTService", "SessionService", "$window", "$state", "$rootScope", "$http", "$localStorage"], Object.defineProperty(n, "__esModule", { value: !0 }), n.default = a;
  }, {}], 11: [function (e, t, n) {
    t.exports = { login: { pretty: "Login", name: "login", url: "/login", templateUrl: "views/session/guest/login.html", controller: "Login", guest: !0 }, register: { pretty: "Register", name: "register", url: "/register", templateUrl: "views/session/guest/register.html", controller: "Register", guest: !0 }, logout: { pretty: "Logout", name: "logout", url: "/logout", controller: "Logout", session: !0 }, client: { pretty: "Client", name: "client", url: "/client", sticky: !0, session: !0, views: { client: { controller: "Client", templateUrl: "views/session/user/home/client.html" } } }, me: { pretty: "Home", abstract: !0, name: "me", template: "<div ui-view></div>", session: !0 }, "me.home": { pretty: "Home", name: "me.home", url: "/me", templateUrl: "views/session/user/home/me.html", session: !0 }, "me.about": { pretty: "About", name: "me.about", url: "/about", templateUrl: "views/session/user/home/about.html", controller: "About", session: !0 }, "me.settings": { pretty: "Settings", name: "me.settings", url: "/settings", templateUrl: "views/session/user/home/settings.html", controller: "Settings", session: !0 }, "me.profile": { pretty: "Profile", name: "me.profile", url: "/profile/:username", templateUrl: "views/session/user/home/profile/view.html", controller: "Profile", session: !0 }, community: { pretty: "Community", abstract: !0, name: "community", url: "/community", template: "<div ui-view></div>" }, "community.photos": { pretty: "Photos", name: "community.photos", url: "/photos", controller: "Photos", templateUrl: "views/session/user/community/photos.html", session: !0 }, "community.online": { pretty: "Online Users", name: "community.online", url: "/online", controller: "Online", templateUrl: "views/session/user/community/online.html", session: !0 }, "community.news": { abstract: !0, name: "community.news", url: "/news", template: "<div ui-view></div>" }, "community.news.category": { abstract: !0, name: "community.news.category", url: "/category", template: "<div ui-view></div>" }, "community.news.category.all": { pretty: "Hotel News", name: "community.news.category.all", url: "/all", controller: "Categories", templateUrl: "views/session/user/community/categories.html", session: !0 }, "community.news.category.view": { pretty: "Hotel News", name: "community.news.category.view", url: "/view/:id", controller: "Categories", templateUrl: "views/session/user/community/categories.html", session: !0 }, "community.news.article": { pretty: "Reading News Article", name: "community.news.article", url: "/article/:id", controller: "Article", templateUrl: "views/session/user/community/article.html", session: !0 }, "community.leaderboards": { pretty: "Top Users", name: "community.leaderboards", url: "/leaderboards", controller: "Leaderboards", templateUrl: "views/session/user/community/leaderboards.html", session: !0 }, "community.staff": { pretty: "Staff Team", name: "community.staff", url: "/staff", controller: "Staff", templateUrl: "views/session/user/community/staff.html", session: !0 }, hangouts: { abstract: !0, pretty: "Hangouts", name: "hangouts", url: "/hangouts", template: "<div ui-view></div>" }, "hangouts.home": { abstract: !0, name: "hangouts.home", url: "", template: "<div ui-view></div>" }, "hangouts.home.list": { pretty: "Hangouts", name: "hangouts.home.list", url: "/", controller: "HangoutsHome", templateUrl: "views/session/user/hangouts/home.html", session: !0 }, "hangouts.home.post": { pretty: "Hangouts (Viewing Post)", name: "hangouts.home.post", url: "/post/:id", controller: "HangoutsPost", templateUrl: "views/session/user/hangouts/post.html", session: !0 }, "hangouts.create": { pretty: "Share New Story", name: "hangouts.create", url: "/create", controller: "HangoutsCreate", templateUrl: "views/session/user/hangouts/create.html", session: !0 }, admin: { abstract: !0, name: "admin", url: "/admin", template: "<div ui-view></div>", restricted: !0 }, "admin.home": { pretty: "Admin", name: "admin.home", url: "/home", templateUrl: "views/session/admin/home.html", session: !0, restricted: !0 }, "admin.website": { abstract: !0, name: "admin.website", url: "/website", template: "<div ui-view></div>", restricted: !0 }, "admin.website.settings": { pretty: "Website Settings", name: "admin.website.settings", url: "/settings", controllers: "AdminWebsiteSettings", templateUrl: "views/session/admin/website/settings.html", session: !0, restricted: !0 } };
  }, {}], 12: [function (e, t, n) {
    "use strict";
    angular.module("app.templates", []).run(["$templateCache", function (e) {
      e.put("views/index.html", '<!DOCTYPE html>\n<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en_US" lang="en_US">\n\n<head>\n    <base href="/">\n    <title>{{ website.name }} - {{ page }}</title>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">\n    <meta http-equiv="content-type" content="text/html; charset=utf-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />\n    <link rel="stylesheet" type="text/css" href="/assets/css/app.css" />\n    <link rel="stylesheet" type="text/css" href="/assets/css/override.css" />\n    <link rel="stylesheet" type="text/css" href="/assets/css/font-awesome.min.css" />\n</head>\n\n<body class="app">\n  <div class="content">\n    <heroic-header></heroic-header>\n      <main ui-view></main>\n  </div>\n  <footer class="wrapper">\n      <div class="footer__media">\n          <p class="footer__media__label">Follow Habbo</p>\n          <ul>\n              <link>\n              <li class="footer__media__item">\n                  <a class="footer__media__link"><i class="icon icon--facebook"></i></a>\n              </li>\n              <li class="footer__media__item">\n                  <a class="footer__media__link"><i class="icon icon--twitter"></i></a>\n              </li>\n              <li class="footer__media__item">\n                  <a class="footer__media__link"><i class="icon icon--youtube"></i></a>\n              </li>\n              <li class="footer__media__item">\n                  <a class="footer__media__link"><i class="icon icon--rss"></i></a>\n              </li>\n          </ul>\n      </div>\n      <div class="footer__content">\n          <ul class="footer__nav">\n              <li class="footer__nav__item">\n                  <a sref="me.about" class="footer__nav__link">About CMS</a>\n              </li>\n          </ul>\n          <p class="footer__copyright"> Powered by Heroic Framework by LeChris <br> Built with Node and Angular <br> Shout out to Bill</p>\n          <a id="footer_logo"></a>\n      </div>\n  </footer>\n    <script type="text/javascript" src="/assets/js/vendor.js"><\/script>\n    <script type="text/javascript" src="/assets/js/habbo-api.js"><\/script>\n</body>\n\n</html>\n'), e.put("views/common/components/footer.html", '<habbo-footer>\r\n    <footer class="wrapper">\r\n        <div class="footer__media">\r\n            <p class="footer__media__label"> Follow Habbo</p>\r\n            <ul>\r\n                <link>\r\n                <li class="footer__media__item">\r\n                    <a class="footer__media__link"><i class="icon icon--facebook"></i></a>\r\n                </li>\r\n                <li class="footer__media__item">\r\n                    <a class="footer__media__link"><i class="icon icon--twitter"></i></a>\r\n                </li>\r\n                <li class="footer__media__item">\r\n                    <a class="footer__media__link"><i class="icon icon--youtube"></i></a>\r\n                </li>\r\n                <li class="footer__media__item">\r\n                    <a class="footer__media__link"><i class="icon icon--rss"></i></a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class="footer__content">\r\n            <ul class="footer__nav">\r\n                <li class="footer__nav__item">\r\n                    <a ui-sref="me.about" class="footer__nav__link">About CMS</a>\r\n                </li>\r\n            </ul>\r\n            <p class="footer__copyright"> Powered by Heroic Framework by LeChris <br> Built with Node and Angular <br> Shout out to Bill</p>\r\n            <a id="footer_logo"></a>\r\n        </div>\r\n    </footer>\r\n</habbo-footer>\r\n'), e.put("views/common/components/news.html", '<section>\r\n  <h1>Latest news</h1>\r\n  <div class="main main--fixed">\r\n    <habbo-compile>\r\n        <section ng-init="count=0">\r\n          <article class="news-header news-header--column" ng-repeat="article in news" ng-init="count=count+1">\r\n              <a href="/community/news/article/{{ article.id }}" class="news-header__link news-header__banner">\r\n                  <figure class="news-header__viewport">\r\n                      <img ng-if="count==1" ng-src="https://images.habbo.com/web_images/habbo-web-articles/{{ article.image }}.png" class="news-header__image news-header__image--featured">\r\n                      <img ng-if="count!=1" src="https://images.habbo.com/web_images/habbo-web-articles/{{ article.image }}_thumb.png" class="news-header__image news-header__image--thumbnail">\r\n                  </figure>\r\n              </a>\r\n              <a href="/community/news/article/{{ article.id }}" class="news-header__link news-header__wrapper">\r\n                  <h2 class="news-header__title">{{ article.title }}</h2>\r\n              </a>\r\n              <aside class="news-header__wrapper news-header__info">\r\n                  <time class="news-header__date">{{ article.created_at | date : \'mediumDate\' }}</time>\r\n                  <ul class="news-header__categories">\r\n                      <li class="news-header__category">\r\n                          <a href="/community/news/category/{{ article.category.id }}" class="news-header__category__link">{{ article.category.title }}</a>\r\n                      </li>\r\n                  </ul>\r\n              </aside>\r\n              <p class="news-header__wrapper news-header__summary">{{ article.content.substr(0, 255) }}</p>\r\n          </article>\r\n        </section>\r\n    </habbo-compile>\r\n    <div class="news__navigation">\r\n      <a href="/community/category" class="news__more" ng-if="count>4">More news</a>\r\n    </div>\r\n    <p ng-if="news == undefined">No news articles have been posted yet</p>\r\n  </div>\r\n</section>\r\n'), e.put("views/common/error/404.html", '<main class="wrapper wrapper--content not-found">\n    <section class="not-found__content">\n        <h3>Oh bobba! Page not found.</h3>\n        <div>Frank can\'t find the page you\'re looking for. Please check the URL or try starting over from the <a href="/me">front page.</a>\n        </div>\n    </section>\n</main>\n'), e.put("views/common/error/banned.html", '<div class="content">\n  <habbo-header-small style="background:none;">\n    <header class="header__wrapper wrapper">\n      <a href="/" class="header__habbo__logo"><h1 class="header__habbo__name" id="ga-linkid-habbo">Habbo</h1></a>\n    </header>\n    <div class="wrapper"></div>\n  </habbo-header-small>\n  <main class="wrapper wrapper--content not-found">\n  <section class="not-found__content">\n      <h3>You have been banned</h3>\n      <div>Frank is very dissapointed with you!</a>\n      </div>\n  </section>\n  </main>\n</div>\n'), e.put("views/common/error/maintenance.html", '<div class="content">\n  <habbo-header-small style="background:none;">\n    <header class="header__wrapper wrapper">\n      <a href="/" class="header__habbo__logo"><h1 class="header__habbo__name" id="ga-linkid-habbo">Habbo</h1></a>\n    </header>\n    <div class="wrapper"></div>\n  </habbo-header-small>\n  <main class="wrapper wrapper--content not-found">\n    <section class="not-found__content">\n        <h3>Maintenance Break</h3>\n        <div>Frank is working on fixing some bugs</a>\n        </div>\n    </section>\n  </main>\n</div>\n'), e.put("views/session/admin/home.html", '<main class="wrapper wrapper--content">\r\n  <section class="main" ui-view="">\r\n    <main class="wrapper wrapper--content">\r\n      <section class="main" ui-view="">\r\n        <h2>Welcome back,</h2>\r\n        <p>We missed you!</p>\r\n      </secton>\r\n    </main>\r\n  </secton>\r\n</main>\r\n'), e.put("views/session/guest/login.html", '<habbo-header-large active="home">\n  <div habbo-sticky-header="" class="header__top sticky-header sticky-header--top">\n      <div class="wrapper">\n          <div class="header__top__content">\n              <div>\n                  <div class="header__login-form">\n                      <habbo-login-form>\n                          <form name="loginForm" class="login-form__form" ng-submit="login()">\n                              <fieldset class="form__fieldset login-form__fieldset">\n                                  <div class="form__field">\n                                      <input name="username" type="text" required="" placeholder="Username" class="form__input login-form__input" ng-model="loginFormDetails.username" ng-change="loginForm.username.$setValidity(\'invalidLogin\', true)" autofocus required>\n                                  </div>\n                              </fieldset>\n                              <fieldset class="form__fieldset login-form__fieldset">\n                                  <div class="form__field">\n                                      <input name="password" type="password" placeholder="Password" class="form__input login-form__input" ng-model="loginFormDetails.password" required>\n                                  </div>\n                              </fieldset>\n                              <button type="submit" class="login-form__button" ng-disabled="loginForm.$invalid">Let\'s go!</button>\n                          </form>\n                          <div class="login-form__social" style="color:white;">\n                            <habbo-online></habbo-online>&nbsp;users online\n                          </div>\n                      </habbo-login-form>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <div class="header__content">\n      <habbo-register-banner>\n          <div class="register-banner__hotel"></div>\n          <div class="register-banner__wrapper">\n              <div class="register-banner__register">\n                  <h1 class="register-banner__logo">Habbo</h1>\n                  <h2 class="register-banner__title">Make friends &amp; chat with millions in a virtual world</h2>\n                  <a ui-sref="register" class="register-banner__button">Join for free!</a>\n              </div>\n          </div>\n      </habbo-register-banner>\n  </div>\n  <header class="header__wrapper wrapper">\n    <a class="header__habbo__logo"><h1 class="header__habbo__name" id="ga-linkid-habbo-large">Habbo</h1></a>\n  </header>\n  <habbo-navigation active="home">\n      <nav class="navigation">\n          <ul class="navigation__menu">\n            <li class="navigation__item">\n              <a ui-sref="login" class="navigation__link navigation__link--home" id="ga-linkid-home">Home</a>\n            </li>\n          </ul>\n      </nav>\n  </habbo-navigation>\n</habbo-header-large>\n<div class="content">\n  <main>\n'), e.put("views/session/guest/register.html", '<habbo-header-small active="register">\n    <header class="header__wrapper wrapper">\n        <a class="header__habbo__logo">\n            <h1 class="header__habbo__name" id="ga-linkid-habbo">Habbo</h1>\n        </a>\n        <div class="header__aside">\n          <button ui-sref="login" class="header__login__button">\n            <span class="header__login__icon">Login</span>\n          </button>\n        </div>\n    </header>\n    <habbo-navigation active="register">\n        <nav class="navigation">\n            <ul class="navigation__menu">\n                <li class="navigation__item">\n                  <a ui-sref="login" class="navigation__link navigation__link--home" id="ga-linkid-home">Home</a>\n                </li>\n            </ul>\n        </nav>\n    </habbo-navigation>\n    <div class="wrapper"></div>\n</habbo-header-small>\n<main class="wrapper wrapper--content">\n  <habbo-registration-form>\n      <h1>Join for free!</h1>\n      <form name="data" ng-submit="register()" class="form form--left registration-form">\n\n        <habbo-email-address>\n            <fieldset class="form__fieldset">\n                <div>\n                  <label class="form__label">Username</label>\n                    <p>This is how you will be recognized in game.</p>\n                </div>\n                <div class="form__field">\n                  <input ng-model="user.username" ng-change="check(\'username\')" pattern="^[A-Za-z.\\s_-]{3,15}$" class="form__input">\n                  <div ng-hide="!messages.username" class="form__popover form__popover--error ng-active" ng-bind="messages.username"></div>\n                </div>\n            </fieldset>\n        </habbo-email-address>\n\n        <habbo-email-address>\n            <fieldset class="form__fieldset">\n                <div>\n                  <label class="form__label">Email</label>\n                    <p>You\'ll need to use this email address to reset your password in the future.</p>\n                </div>\n                <div class="form__field">\n                  <input ng-model="user.email" ng-change="check(\'email\')" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{1,63}$" class="form__input">\n                  <div ng-hide="!messages.email" class="form__popover form__popover--error ng-active" ng-bind="messages.email"></div>\n                </div>\n            </fieldset>\n        </habbo-email-address>\n\n        <habbo-password-new>\n            <fieldset class="form__fieldset form__fieldset--box form__fieldset--box-top">\n              <label class="form__label">Password</label>\n                <p>This will be used to login in the future.</p>\n                <div class="form__field">\n                  <input ng-model="user.password" ng-change="check()" class="form__input" type="password">\n                  <i class="password-toggle-mask__icon"></i>\n                </div>\n            </fieldset>\n            <fieldset class="form__fieldset form__fieldset--box form__fieldset--box-top">\n              <label class="form__label">Repeat Password</label>\n              <div class="form__field">\n                <input ng-model="user.password_rep" ng-change="check()" class="form__input" type="password">\n                <i class="password-toggle-mask__icon"></i>\n                <div ng-hide="user.password==user.password_rep||!user.password_rep" class="form__popover form__popover--error ng-active">Passwords must match</div>\n              </div>\n            </fieldset>\n        </habbo-password-new>\n        <div class="form__footer">\n          <button type="submit" class="form__submit registration-form__button" ng-disabled="!user.enabled">Done! Let\'s start playing!</button>\n        </div>\n      </form>\n  </habbo-registration-form>\n'), e.put("views/common/components/header/header.html", '<habbo-header-small ng-if="$root.session !== undefined" ng-cloak>\n    <header class="header__wrapper wrapper">\n        <a class="header__habbo__logo">\n            <h1 class="header__habbo__name" id="ga-linkid-habbo">Habbo</h1>\n        </a>\n        <div class="header__aside" ng-if="$root.session == undefined">\n          <a ui-sref="login">\n            <button class="header__login__button"><span class="header__login__icon">Login</span></button>\n          </a>\n        </div>\n        <habbo-user-menu class="header__aside header__aside--user-menu" ng-if="$root.session !== undefined">\n            <div class="user-menu" ng-init="toggle = false;">\n                <div class="user-menu__header">\n                    <a class="user-menu__toggle" ng-click="toggle = !toggle;">\n                        <div class="user-menu__name__wrapper">\n                            <div class="user-menu__name" ng-class="{ \'user-menu__name--open\': toggle }" >\n                                {{ $root.session.username }}\n                            </div>\n                        </div>\n                        <habbo-imager class="user-menu__avatar">\n                            <img width="54" height="62" class="imager" src="https://avatar-retro.com/habbo-imaging/avatarimage?figure={{ $root.session.look }}&headonly=1" style="min-width: 54px;">\n                        </habbo-imager>\n                    </a>\n                </div>\n                <ul class="user-menu__list"  ng-class="{ \'ng-hide\': !toggle }" ng-mouseleave="toggle = !toggle;">\n                    <li class="user-menu__item">\n                        <a href="/profile/{{ $root.session.username }}" class="user-menu__link user-menu__link--profile">My Profile</a>\n                    </li>\n\n                    <li class="user-menu__item">\n                      <a ng-if="$root.session.rank.staff==1" ui-sref="admin.home" class="user-menu__link user-menu__link--settings">Admin Panel</a>\n                    </li>\n\n                    <li class="user-menu__item">\n                        <a ui-sref="logout" class="user-menu__link user-menu__link--logout">Logout</a>\n                    </li>\n\n                </ul>\n            </div>\n        </habbo-user-menu>\n    </header>\n    <heroic-navigation ng-cloak></heroic-navigation>\n  </habbo-header-small>\n'), e.put("views/common/components/header/navigation.html", '<habbo-navigation active="home">\n    <nav class="navigation">\n        <ul class="navigation__menu">\n          <li ng-if="!item.restricted && !$root.state.includes(\'admin\')" ng-repeat="item in navigationList | orderBy: \'sort\'" class="navigation__item">\n            <a ng-click="(item.url == null) ? $root.state.go(item.state.name) : $root.state.go(item.url)"  class="navigation__link" ng-class="{\'navigation__link--active\': $root.state.includes(item.state.name)}" style="color:#036;">\n              <i class="fa fa-{{ item.icon }}"></i> {{ (item.name == \'current_username\') ? $root.session.username : item.name }}\n            </a>\n          </li>\n          <li ng-if="item.restricted && $root.state.includes(\'admin\') && $root.session.rank.staff==1" ng-repeat="item in navigationList | orderBy: \'sort\'" class="navigation__item">\n            <a ng-click="(item.url == null) ? $root.state.go(item.state.name) : $root.state.go(item.url)"  class="navigation__link" ng-class="{\'navigation__link--active\': $root.state.includes(item.state.name)}" style="color:#036;">\n              <i class="fa fa-{{ item.icon }}"></i> {{ (item.name == \'current_username\') ? $root.session.username : item.name }}\n            </a>\n          </li>\n          <li class="navigation__item navigation__item--aside navigation__item--hotel">\n            <a ui-sref="client" class="hotel-button" id="ga-linkid-hotel"><span class="hotel-button__text" style="overflow:auto;">Enter Hotel <small style="font-size:10px;overflow:auto;"> <habbo-online></habbo-online> users online</small></span> </a>\n          </li>\n        </ul>\n    </nav>\n</habbo-navigation>\n<div class="wrapper"></div>\n</habbo-header-small>\n<habbo-tabs>\n  <nav class="tabs">\n    <ul class="tabs__menu" ng-repeat="item in navigationList | orderBy: \'sort\'" ng-if="$root.state.includes(item.state.name)">\n      <habbo-tab class="sub-list no-padding" ng-repeat="child in item.children">\n        <li class="tab">\n          <a class="tab__link" ng-class="{\'tab__link--active\': $root.state.includes(child.state.name) || $root.state.includes(child.index)}" ng-click="(child.url == null) ? $root.state.go(child.state.name) : $root.state.go(child.url)">\n            {{ child.name }}\n          </a>\n        </li>\n      </habbo-tab>\n    </ul>\n  </nav>\n</habbo-tabs>\n'), e.put("views/common/components/header/online.html", "{{ online }}\r\n"), e.put("views/session/admin/website/settings.html", '<main class="wrapper wrapper--content">\r\n  <section class="main">\r\n    <h2>Website Settings</h2>\r\n    <form ng-submit="post()" class="form">\r\n        <fieldset class="form__fieldset">\r\n          <div class="form__field">\r\n            <label>Hotel Name</label>\r\n            <input ng-model="website.name" class="form__input">\r\n          </div>\r\n        </fieldset>\r\n        <div class="form__footer">\r\n          <button type="submit" class="form__submit">Save</button>\r\n        </div>\r\n      </form>\r\n  </secton>\r\n</main>\r\n'), e.put("views/session/user/community/article.html", '<div class="wrapper wrapper--content">\r\n  <section class="wrapper wrapper--content">\r\n      <habbo-compile class="main main--fixed">\r\n          <article>\r\n              <header class="news-header news-header--single">\r\n                  <div class="news-header__banner">\r\n                      <figure class="news-header__viewport">\r\n                          <img src="https://images.habbo.com/web_images/habbo-web-articles/{{ article.image }}.png" class="news-header__image news-header__image--featured">\r\n                      </figure>\r\n                  </div>\r\n                  <habbo-social-share type="news">\r\n                      <div class="social-share">\r\n                          <span class="social-share__text">-{{ article.author.username }}</span>\r\n                      </div>\r\n                  </habbo-social-share>\r\n                  <h1 class="news-header__wrapper news-header__title">{{ article.title }}</h1>\r\n                  <aside class="news-header__wrapper news-header__info">\r\n                      <time class="news-header__date">{{ article.created_at | date : \'mediumDate\' }}</time>\r\n                      <ul class="news-header__categories">\r\n                          <li class="news-header__category">\r\n                              <a href="/community/category/{{ article.category.id }}" class="news-header__category__link">{{ article.category.title }}</a>\r\n                          </li>\r\n                      </ul>\r\n                  </aside>\r\n                  <p class="news-header__wrapper news-header__summary">{{ article.description }}</p>\r\n              </header>\r\n              <div class="news-article" ng-bind-html="article.content"></div>\r\n          </article>\r\n      </habbo-compile>\r\n  </section>\r\n</div>\r\n'), e.put("views/session/user/community/categories.html", '<div id="tabs">\n    <section class="wrapper wrapper--content">\n        <habbo-compile data="CategoryController.category" class="div div--fixed">\n            <section>\n                <header class="news-category__header">\n                    <span>Show me news about:</span>\n                    <nav class="news-category__navigation">\n                        <ul class="news-category__list">\n                          <li class="news-category__item">\n                            <a ng-click="setTab(0)" class="news-category__link" ng-class="{ \'news-category__link--active\': isSet(0) }">Everything</a>\n                          </li>\n                          <li class="news-category__item" ng-repeat="category in categories">\n                            <a ng-click="setTab(category.id)" class="news-category__link" ng-class="{ \'news-category__link--active\': isSet(category.id) }">{{ category.title }}</a>\n                          </li>\n                        </ul>\n                    </nav>\n                </header>\n\n              <div ng-repeat="category in categories" ng-if="isSet(0)">\n                <article class="news-header" ng-repeat="article in category.articles">\n                    <a href="/community/news/article/{{ article.id }}" class="news-header__link news-header__banner">\n                        <figure class="news-header__viewport">\n                          <img src="{{ website.news_images }}/{{ article.image }}_thumb.png" class="news-header__image news-header__image--thumbnail">\n                        </figure>\n                    </a>\n                    <a href="/community/news/article/{{ article.id }}" class="news-header__link news-header__wrapper">\n                        <h2 class="news-header__title">{{ article.title }}</h2>\n                    </a>\n                    <aside class="news-header__wrapper news-header__info">\n                        <time class="news-header__date">{{ article.created_at | date : \'mediumDate\' }}</time>\n                        <ul class="news-header__categories">\n                            <li class="news-header__category">\n                                <a href="/community/news/category/view/{{ category.id }}" class="news-header__category__link">{{ category.title }}</a>\n                            </li>\n                        </ul>\n                    </aside>\n                    <p class="news-header__wrapper news-header__summary">{{ article.content.substr(0, 255) }}</p>\n                </article>\n              </div> \n\n                <div ng-repeat="category in categories">\n                  <div ng-if="isSet(category.id)">\n                    <article class="news-header" ng-repeat="article in category.articles">\n                        <a href="/community/news/article/{{ article.id }}" class="news-header__link news-header__banner">\n                            <figure class="news-header__viewport">\n                              <img src="{{ website.news_images }}/{{ article.image }}_thumb.png" class="news-header__image news-header__image--thumbnail">\n                            </figure>\n                        </a>\n                        <a href="/community/news/article/{{ article.id }}" class="news-header__link news-header__wrapper">\n                            <h2 class="news-header__title">{{ article.title }}</h2>\n                        </a>\n                        <aside class="news-header__wrapper news-header__info">\n                            <time class="news-header__date">{{ article.created_at | date : \'mediumDate\' }}</time>\n                            <ul class="news-header__categories">\n                                <li class="news-header__category">\n                                    <a href="/community/news/category/view/{{ category.id }}" class="news-header__category__link">{{ category.title }}</a>\n                                </li>\n                            </ul>\n                        </aside>\n                        <p class="news-header__wrapper news-header__summary">{{ article.content.substr(0, 255) }}</p>\n                    </article>\n                </div>\n              </div>\n\n            </section>\n        </habbo-compile>\n    </section>\n</div>\n'), e.put("views/session/user/community/leaderboards.html", '<section class="wrapper wrapper--content">\r\n  <habbo-compile data="CategoryController.category" class="main main--fixed">\r\n      <section>\r\n          <header class="news-category__header">\r\n              <span>Currency:</span>\r\n              <nav class="news-category__navigation">\r\n                  <ul class="news-category__list">\r\n                      <a ng-click="setTab(1)" class="news-category__link" ng-class="{ \'news-category__link--active\': isSet(1) }">Credits</a>\r\n                      <a ng-click="setTab(2)" class="news-category__link" ng-class="{ \'news-category__link--active\': isSet(2) }">Duckets</a>\r\n                      <a ng-click="setTab(3)" class="news-category__link" ng-class="{ \'news-category__link--active\': isSet(3) }">Diamonds</a>\r\n                  </ul>\r\n              </nav>\r\n          </header>\r\n\r\n          <div ng-if="isSet(1)">\r\n            <div ng-repeat="user in leaderboards.credits" style="display:inline-block;">\r\n              <article class="news-header news-header--column" style="height: 0px;margin-bottom: 0px;min-height: 0px;"></article>\r\n              <article class="news-header news-header--column" style="height: 0px;margin-bottom: 0px;min-height: 0px;"></article>\r\n              <article class="news-header news-header--column">\r\n                  <a href="/profile/{{ user.username }}" class="news-header__link news-header__banner">\r\n                      <figure class="news-header__viewport" style="border-radius:50%">\r\n                          <img src="assets/img/staff.png" class="news-header__image news-header__image--thumbnail" style="opacity:.5;">\r\n                          <div class="staff_avatar" style="background: url({{ website.figure_imager }}?figure={{ user.look }}&amp;direction=2&amp;head_direction=3&amp;gesture=sml&amp;size=l);height: 124px;width: 110px;top: 0px;z-index: 9000;position: absolute;background-position: -8px -17px;"></div>\r\n                      </figure>\r\n                  </a>\r\n                  <a href="/profile/{{ user.username }}" class="news-header__link news-header__wrapper">\r\n                      <h2 class="news-header__title">{{ user.username }}</h2>\r\n                  </a>\r\n                  <aside class="news-header__wrapper news-header__info">\r\n                      <p class="news-header__date">{{ user.credits }} Credits</p>\r\n                  </aside>\r\n              </article>\r\n            </div>\r\n          </div>\r\n\r\n          <div ng-if="isSet(2)">\r\n            <div ng-repeat="user in leaderboards.pixels" style="display:inline-block;">\r\n              <article class="news-header news-header--column" style="height: 0px;margin-bottom: 0px;min-height: 0px;"></article>\r\n              <article class="news-header news-header--column" style="height: 0px;margin-bottom: 0px;min-height: 0px;"></article>\r\n              <article class="news-header news-header--column">\r\n                  <a href="/profile/{{ user.username }}" class="news-header__link news-header__banner">\r\n                      <figure class="news-header__viewport" style="border-radius:50%">\r\n                          <img src="assets/img/staff.png" class="news-header__image news-header__image--thumbnail" style="opacity:.5;">\r\n                          <div class="staff_avatar" style="background: url({{ website.figure_imager }}?figure={{ user.look }}&amp;direction=2&amp;head_direction=3&amp;gesture=sml&amp;size=l);height: 124px;width: 110px;top: 0px;z-index: 9000;position: absolute;background-position: -8px -17px;"></div>\r\n                      </figure>\r\n                  </a>\r\n                  <a href="/profile/{{ user.username }}" class="news-header__link news-header__wrapper">\r\n                      <h2 class="news-header__title">{{ user.username }}</h2>\r\n                  </a>\r\n                  <aside class="news-header__wrapper news-header__info">\r\n                      <p class="news-header__date">{{ user.pixels }} Pixels</p>\r\n                  </aside>\r\n              </article>\r\n            </div> \r\n          </div>\r\n\r\n          <div ng-if="isSet(3)">\r\n            <div ng-repeat="user in leaderboards.diamonds" style="display:inline-block;">\r\n              <article class="news-header news-header--column" style="height: 0px;margin-bottom: 0px;min-height: 0px;"></article>\r\n              <article class="news-header news-header--column" style="height: 0px;margin-bottom: 0px;min-height: 0px;"></article>\r\n              <article class="news-header news-header--column">\r\n                  <a href="/profile/{{ user.username }}" class="news-header__link news-header__banner">\r\n                      <figure class="news-header__viewport" style="border-radius:50%">\r\n                          <img src="assets/img/staff.png" class="news-header__image news-header__image--thumbnail" style="opacity:.5;">\r\n                          <div class="staff_avatar" style="background: url({{ website.figure_imager }}?figure={{ user.look }}&amp;direction=2&amp;head_direction=3&amp;gesture=sml&amp;size=l);height: 124px;width: 110px;top: 0px;z-index: 9000;position: absolute;background-position: -8px -17px;"></div>\r\n                      </figure>\r\n                  </a>\r\n                  <a href="/profile/{{ user.username }}" class="news-header__link news-header__wrapper">\r\n                      <h2 class="news-header__title">{{ user.username }}</h2>\r\n                  </a>\r\n                  <aside class="news-header__wrapper news-header__info">\r\n                      <p class="news-header__date">{{ user.points }} Diamonds</p>\r\n                  </aside>\r\n              </article>\r\n            </div>\r\n          </div>\r\n\r\n      </section>\r\n  </habbo-compile>\r\n'), e.put("views/session/user/community/online.html", '<section>\n  <div class="wrapper wrapper--content">\n    <section class="wrapper wrapper--content rooms-wrapper" style="float:left;">\n      <div ng-repeat="user in online">\n        <article class="news-header news-header--column" style="height: 0px;margin-bottom: 0px;min-height: 0px;"></article>\n        <article class="news-header news-header--column" style="height: 0px;margin-bottom: 0px;min-height: 0px;"></article>\n        <article class="news-header news-header--column">\n            <a href="/profile/{{ user.username }}" class="news-header__link news-header__banner">\n                <figure class="news-header__viewport" style="border-radius:50%;">\n                    <img src="/assets/img/staff.png" class="news-header__image news-header__image--thumbnail" style="opacity:.5;">\n                    <div class="staff_avatar" style="background: url(https://avatar-retro.com/habbo-imaging/avatarimage?figure={{ user.look }}&amp;direction=2&amp;head_direction=3&amp;gesture=sml&amp;size=l);height: 124px;width: 110px;top: 0px;z-index: 9000;position: absolute;background-position: -8px -17px;"></div>\n                </figure>\n            </a>\n            <a href="/profile/{{ user.username }}" class="news-header__link news-header__wrapper">\n                <h2 class="news-header__title">{{ user.username }}</h2>\n                  <img src="{{ website.swf_base }}/other/images/album1584/{{ user.rank.badge_code }}.gif" ng-if="user.rank.badge_code !== undefined">\n            </a>\n        </article>\n      </div>\n    </section>\n  </div>\n</section>\n\n\n<section ng-if="online == undefined">\n  <div class="wrapper wrapper--content" style="text-align:center;">\n    <img src="/assets/img/mountain_house_bedroom_by_cutiezor-d9t9u82.png">\n    <h3>Everyone\'s Offline!</h3>\n    <p>Looks like all of our guests are sleeping</p>\n  </div>\n</section>\n'), e.put("views/session/user/community/photos.html", '<main>\n\t\t<section class="wrapper wrapper--content">\n      <habbo-columns-channel >\n        <div>\n            <div class="columns">\n\t\t\t\t\t\t\t<habbo-card class="columns__column" ng-repeat="photo in photos">\n\t\t\t\t\t\t\t\t\t<div class="card">\n\t\t\t\t\t\t\t\t\t\t\t<div class="card__content">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<a class="card__link" href="/profile/{{ photo.author.username }}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="card__image__aligner">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="{{ photo.url }}" class="card__image card__image--photo">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="card__meta">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<time class="card__date">{{ photo.timestamp * 1000 | date:\'MM/dd/yyyy\' }}</time>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<habbo-like class="card__like">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="like__action"><a ng-click="like(photo.id)"><span>Like</span> <span class="like__count">{{ photo.likes.length }}</span></a></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="like__thumb">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="like__icon icon icon--like"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</habbo-like>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<habbo-avatar class="card__creator">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a class="avatar" href="/profile/{{ photo.author.username}}">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<habbo-image class="avatar__image">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="https://avatar-retro.com/habbo-imaging/avatarimage?figure={{ photo.author.look }}&headonly=1" class="imager">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</habbo-imager>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 class="avatar__title">{{ photo.author.username }}</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</habbo-avatar>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</habbo-card>\n            </div>\n        </div>\n    </habbo-columns-channel>\n\t\t</section>\n\t</main>\n'), e.put("views/session/user/community/staff.html", '<section id="tabs">\n  <header class="rooms__header">\n    <div class="rooms__header__container wrapper">\n      <div class="rooms__header__content">\n        <h1 class="rooms__header__title">Staff Team</h1>\n        <nav class="news-category__navigation">\n            <ul class="news-category__list">\n              <li class="news-category__item" ng-repeat="rank in ranks">\n                <a ng-click="setTab(rank.id)" class="news-category__link" ng-class="{ \'news-category__link--active\': isSet(rank.id) }">{{ rank.rank_name }}</a>\n              </li>\n            </ul>\n        </nav>\n      </div>\n    </div>\n  </header>\n\n  <div class="wrapper wrapper--content">\n    <section class="wrapper wrapper--content rooms-wrapper" style="float:left;">\n        <div ng-repeat="rank in ranks" ng-if="isSet(rank.id)">\n          <div ng-if="rank.members !== undefined && rank.members.length > 0" ng-repeat="user in rank.members">\n            <article class="news-header news-header--column" style="height: 0px;margin-bottom: 0px;min-height: 0px;"></article>\n            <article class="news-header news-header--column" style="height: 0px;margin-bottom: 0px;min-height: 0px;"></article>\n            <article class="news-header news-header--column">\n                <a href="/profile/{{ user.username }}" class="news-header__link news-header__banner">\n                    <figure class="news-header__viewport" style="border-radius:50%">\n                        <img src="/assets/img/staff.png" class="news-header__image news-header__image--thumbnail" style="opacity:.5;">\n                        <div class="staff_avatar" style="background: url({{ website.figure_imager }}?figure={{ user.look }}>&amp;direction=2&amp;head_direction=3&amp;gesture=sml&amp;size=l);height: 124px;width: 110px;top: 0px;z-index: 9000;position: absolute;background-position: -8px -17px;"></div>\n                    </figure>\n                </a>\n                <a href="/profile/{{ user.username }}" class="news-header__link news-header__wrapper">\n                    <h2 class="news-header__title">{{ user.username }}</h2>\n                    <img src="/assets/img/online.gif" ng-if="user.online == \'1\'">\n                    <img src="/assets/img/offline.gif" ng-if="user.online == \'2\'">\n                    <img src="{{ website.swf_base }}/other/images/album1584/{{ rank.badge_code }}.gif" ng-if="rank.badge_code !== \'\'">\n                </a>\n            </article>\n          </div>\n          <div ng-if="rank.members == undefined || rank.members.length == 0">\n            <p>This position is currently empty!</p>\n          </div>\n        </div>\n    </section>\n  </div>\n</section>\n'), e.put("views/session/user/hangouts/create.html", '<div class="wrapper wrapper--content">\r\n  <section style="float:left;width:30%;">\r\n      <h1>Share Your Story</h1>\r\n      <form ng-submit="post()" class="form">\r\n        <fieldset class="form__fieldset">\r\n          <p>{{ data.message }}</p>\r\n        </fieldset>\r\n        <fieldset class="form__fieldset">\r\n          <div class="form__field">\r\n            <label>Image</label>\r\n            <select ng-model="data.thumb" class="form__input" ng-init="data.thumb=\'lpromo_baweventjan18\'">\r\n              <option>lpromo_baweventjan18</option>\r\n              <option>lpromo_habboloungebundlejan2018</option>\r\n              <option>lpromo_fhjanevent18</option>\r\n              <option>lpromo_habburgersjan2018</option>\r\n              <option>lpromo_Kreditsgame17012018</option>\r\n              <option>lpromo_comptjanevent</option>\r\n              <option>lpromo_12janeventcom</option>\r\n              <option>lpromo_classiclibrarybundle2018jan</option>\r\n              <option>lpromo_habboxevent0918</option>\r\n            </select>\r\n          </div>\r\n        </fieldset>\r\n        <fieldset class="form__fieldset">\r\n          <div class="form__field">\r\n            <label>Category</label>\r\n            <select ng-model="data.category" class="form__input">\r\n              <option ng-repeat="category in categories" value="{{ category.id }}" ng-if="category.staff_post==1 && session.rank.staff==1 || category.staff_post==0">{{ category.title }}</option>\r\n            </select>\r\n          </div>\r\n        </fieldset>\r\n        <fieldset class="form__fieldset">\r\n          <div class="form__field">\r\n            <label>Title</label>\r\n            <input ng-model="data.title" ng-click="data.message=\'\'" class="form__input">\r\n          </div>\r\n        </fieldset>\r\n        <fieldset class="form__fieldset form__fieldset--box">\r\n          <div class="form__field">\r\n            <label>Content</label>\r\n            <textarea ng-model="data.content" ng-click="data.message=\'\'" class="form__input" rows="6"></textarea>\r\n          </div>\r\n        </fieldset>\r\n        <div class="form__footer">\r\n          <button type="submit" class="form__submit">Publish</button>\r\n        </div>\r\n      </form>\r\n  </section>\r\n  <section style="float:right;width:50%;">\r\n    <div>\r\n      <article class="news-header">\r\n          <a class="news-header__link news-header__banner">\r\n              <figure class="news-header__viewport">\r\n                <img src="https://images.habbo.com/web_images/habbo-web-articles/{{data.thumb }}_thumb.png" class="news-header__image news-header__image--thumbnail">\r\n              </figure>\r\n          </a>\r\n          <a class="news-header__link news-header__wrapper">\r\n              <h2 class="news-header__title">{{ data.title.substr(0, 10) }}</h2>\r\n          </a>\r\n      </article>\r\n    </section>\r\n</div>\r\n'), e.put("views/session/user/hangouts/home.html", '<div id="tabs">\n    <section class="wrapper wrapper--content">\n        <habbo-compile data="CategoryController.category" class="div div--fixed">\n            <section>\n                <header class="news-category__header">\n                    <span>Show me posts about:</span>\n                    <nav class="news-category__navigation">\n                        <ul class="news-category__list">\n                          <li class="news-category__item" ng-repeat="category in categories">\n                            <a ng-if="category.staff==1 && session.rank.staff==1 || category.staff==0" ng-click="setTab(category.id)" ng-class="{ \'news-category__link--active\': isSet(category.id) }" class="news-category__link">{{ category.title }}</a>\n                          </li>\n                        </ul>\n                    </nav>\n                </header>\n\n              <div ng-repeat="category in categories" ng-if="isSet(category.id)">\n                <article class="news-header" ng-repeat="post in category.posts" style="display:inline-block;width:25%;margin-left:2.5%;">\n                    <a href="/hangouts/post/{{ post.id }}" class="news-header__link news-header__banner">\n                        <figure class="news-header__viewport">\n                          <img src="https://images.habbo.com/web_images/habbo-web-articles/{{ post.thumb }}_thumb.png" class="news-header__image news-header__image--thumbnail">\n                        </figure>\n                    </a>\n                    <a href="/hangouts/post/{{ post.id }}" class="news-header__link news-header__wrapper">\n                        <h2 class="news-header__title">{{ post.title.substr(0, 10) }}</h2>\n                    </a>\n                    <aside class="news-header__wrapper news-header__info">\n                        <time class="news-header__date" style="border:none;">{{ post.timestamp | date : \'mediumDate\' }}</time>\n                        <br>\n                        -<a>{{ post.author.username }}</a>\n                    </aside>\n                </article>\n              </div>\n\n            </section>\n        </habbo-compile>\n    </section>\n</div>\n'), e.put("views/session/user/hangouts/post.html", '<section class="wrapper wrapper--content" ng-init="form=false">\r\n  <div style="float:left;width:75%;">\r\n    <habbo-avatar class="room__owner--user">\r\n        <a href="/profile/{{ post.author.username}}" class="avatar">\r\n            <habbo-imager class="avatar__image">\r\n              <img src="{{ website.figure_imager }}?figure={{ post.author.look }}&headonly=1">\r\n            </habbo-imager>\r\n            <h6 class="avatar__title">Posted By <b>{{ post.author.username }}</b></h6>\r\n        </a>\r\n    </habbo-avatar>\r\n    <div class="post__thumbnail" style="background:url(\'https://images.habbo.com/web_images/habbo-web-articles/{{ post.thumb }}_thumb.png\')"></div>\r\n    <div class="room__content">\r\n      <h1 class="room__content__title">{{ post.title }}</h1>\r\n      <div class="room__content__left" ng-bind-html="post.content"></div>\r\n    </div>\r\n  </div>\r\n  <div style="float:right;width:25%;">\r\n    <br> Posted <a>{{ post.timestamp | date : \'longDate\' }}</a> <br> <br>\r\n    <habbo-web-pages key="common/box_parents_guide" class="aside aside--box" style="width:100%;"  ng-if="post.author.id==session.id || session.rank.staff==\'1\'">\r\n        <aside class="static-content">\r\n          <h3>Actions</h3>\r\n          <div>\r\n            <a ng-click="delete(post.id, \'post\')"><i class="fa fa-trash"></i></a>\r\n          </div>\r\n        </aside>\r\n    </habbo-web-pages>\r\n    <habbo-web-pages key="common/box_parents_guide" class="aside aside--box" style="width:100%;">\r\n        <aside class="static-content">\r\n          <h3>Comments</h3>\r\n          <div ng-repeat="comment in post.comments track by comment.id">\r\n            <div>\r\n              <img src="{{ website.figure_imager }}?figure={{ comment.author.look }}&headonly=1" style="display:inline-block;">\r\n              <div style="display:inline-block;">\r\n                <div style="display:block;">\r\n                  <small><a ng-if="comment.author.id==session.id || session.rank.staff==\'1\'" ng-click="delete(comment, \'comment\')"><i class="fa fa-trash"></i></a></small>\r\n                  <a href="/profile/{{ comment.author.username }}"> {{ comment.author.username }} said </a>\r\n                </div>\r\n                <div>{{ comment.content }}</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div>\r\n            Would you like to <a ng-click="form=true">comment</a>?\r\n          </div>\r\n        </aside>\r\n    </habbo-web-pages>\r\n    <habbo-web-pages key="common/box_parents_guide" class="aside aside--box" style="width:100%;" ng-if="form">\r\n        <aside class="static-content">\r\n          <h3>New Comment</h3>\r\n          <form ng-submit="comment()" class="form">\r\n            <fieldset class="form__fieldset">\r\n              <div class="form__field">\r\n                <input ng-model="data.content" class="form__input" maxlength="20"></textarea>\r\n              </div>\r\n            </fieldset>\r\n            <div class="form__footer">\r\n              <button type="submit" class="form__submit">Post</button>\r\n            </div>\r\n          </form>\r\n        </aside>\r\n    </habbo-web-pages>\r\n  </div>\r\n</section>\r\n'), e.put("views/session/user/home/about.html", '\n<section id="tabs">\n  <header class="rooms__header">\n    <div class="rooms__header__container wrapper">\n      <div class="rooms__header__content">\n        <h1 class="rooms__header__title">CMS Information</h1>\n        <nav class="news-category__navigation">\n            <ul class="news-category__list">\n              <li class="news-category__item">\n                <a ng-click="setTab(1)" class="news-category__link" ng-class="{ \'news-category__link--active\': isSet(1) }">Developers</a>\n              </li>\n              <li class="news-category__item">\n                <a ng-click="setTab(2)" class="news-category__link" ng-class="{ \'news-category__link--active\': isSet(2) }">Build Information</a>\n              </li>\n            </ul>\n        </nav>\n      </div>\n    </div>\n  </header>\n\n  <div class="wrapper wrapper--content">\n    <section class="wrapper wrapper--content rooms-wrapper" style="float:left;">\n      <div ng-show="isSet(1)">\n        <article class="news-header news-header--column" style="height: 0px;margin-bottom: 0px;min-height: 0px;"></article>\n        <article class="news-header news-header--column" style="height: 0px;margin-bottom: 0px;min-height: 0px;"></article>\n        <article class="news-header news-header--column">\n            <a class="news-header__link news-header__banner">\n                <figure class="news-header__viewport" style="border-radius:50%">\n                    <img src="/assets/img/staff.png" class="news-header__image news-header__image--thumbnail" style="opacity:.5;">\n                    <div class="staff_avatar" style="background: url(https://avatar-retro.com/habbo-imaging/avatarimage?figure=ch-215-62.sh-3068-62-62.hr-893-1041.ca-1804-64.lg-3088-1195-1193.hd-3092-1&amp;direction=2&amp;head_direction=3&amp;gesture=sml&amp;size=l);height: 124px;width: 110px;top: 0px;z-index: 9000;position: absolute;background-position: -8px -17px;"></div>\n                </figure>\n            </a>\n            <a class="news-header__link news-header__wrapper">\n                <h2 class="news-header__title">LeChris</h2>\n            </a>\n            <aside class="news-header__wrapper news-header__info">\n                <ul class="news-header__categories">\n                    <li class="news-header__category">\n                      <a class="news-header__category__link">CMS Developer</a>\n                    </li>\n                </ul>\n            </aside>\n        </article>\n        <article class="news-header news-header--column">\n            <a class="news-header__link news-header__banner">\n                <figure class="news-header__viewport" style="border-radius:50%">\n                    <img src="/assets/img/staff.png" class="news-header__image news-header__image--thumbnail" style="opacity:.5;">\n                    <div class="staff_avatar" style="background: url(https://avatar-retro.com/habbo-imaging/avatarimage?figure=ch-215-62.sh-3068-62-62.hr-893-1041.ca-1804-64.lg-3088-1195-1193.hd-3092-1&amp;direction=2&amp;head_direction=3&amp;gesture=sml&amp;size=l);height: 124px;width: 110px;top: 0px;z-index: 9000;position: absolute;background-position: -8px -17px;"></div>\n                </figure>\n            </a>\n            <a class="news-header__link news-header__wrapper">\n                <h2 class="news-header__title">Bill</h2>\n            </a>\n            <aside class="news-header__wrapper news-header__info">\n                <ul class="news-header__categories">\n                    <li class="news-header__category">\n                      <a class="news-header__category__link">CMS Developer</a>\n                    </li>\n                </ul>\n            </aside>\n        </article>\n      </div>\n      <div ng-show="isSet(2)">\n        <div style="float:left;width:40%;">\n          <habbo-web-pages key="common/box_parents_guide" class="aside aside--box" style="width:100%;">\n              <aside class="static-content">\n                <h3>Version <small>{{ info.build.version }}</small> <small ng-if="info.build.status==\'production\'" style="color:green;">PRODUCTION</small>  <small ng-if="info.build.status==\'development\'" style="color:red;">DEVELOPMENT</small> </h3>\n                <p>Heroic Framework is built upon Angular with a backend server written in Node.  This allows us to provide the best user experience possible to rush ahead of our competitors.</p>\n              </aside>\n          </habbo-web-pages>\n        </div>\n        <div style="float:right;width:40%;">\n          <habbo-web-pages key="common/box_parents_guide" class="aside aside--box" style="width:100%;">\n              <aside class="static-content">\n                <h3>Changelog</h3>\n                <div ng-repeat="log in info.changelog">\n                  <p>{{ log.date }}</p>\n                  <ul>\n                    <li ng-repeat="child in log.logs">{{ child }}</li>\n                  </ul>\n                </div>\n              </aside>\n          </habbo-web-pages>\n        </div>\n      </div>\n    </section>\n  </div>\n</section>\n'), e.put("views/session/user/home/client.html", '<div style="width:100%;height:100%;position:absolute;top:0;left:0;overflow:none;">\r\n  <div class="client__buttons">\r\n    <button ng-click="fly_home()" class="client__close">\r\n      <i class="client__close__icon icon icon--habbo"></i>\r\n      <div class="client__close__expand">\r\n      <div class="client__close__text">Web</div></div>\r\n    </button>\r\n    <button class="client__fullscreen">\r\n      Heroic 1.01\r\n    </button>\r\n  </div>\r\n  <div id="client">\r\n    <habbo-client-error>\r\n      <div class="client-error">\r\n        <h1 class="client-error__title">YOU NEED TO USE FLASH TO PLAY HABBO!</h1>\r\n          <p>If you\'re using a computer, you need to <a href="http://www.adobe.com/go/getflashplayer" target="_blank">allow, install or update Flash</a> to play Habbo. Please <a href="http://www.adobe.com/go/getflashplayer" target="_blank">CLICK HERE</a> touse Flash! NOTE: if you block Flash, you will need to go to your browser\'s settings to unblock it in order to play Habbo.</p>\r\n          <div class="client-error__downloads"><a ng-href="http://www.adobe.com/go/getflashplayer" target="_blank" rel="noopener noreferrer" class="client-error__flash" href="http://www.adobe.com/go/getflashplayer"></a></div>\r\n        </div>\r\n     </habbo-client-error>\r\n  </div>\r\n</div>\r\n<style>html, body {margin: 0; height: 100%; overflow: hidden}</style>\r\n'), e.put("views/session/user/home/me.html", '<div class="wrapper wrapper--content">\n  <habbo-news></habbo-news>\n</div>\n'), e.put("views/session/user/home/profile/view.html", '<div ng-if="user !== undefined">\n  <div class="wrapper">\n      <habbo-profile-header style="position:relative;">\n          <div class="profile-header__avatar">\n              <div class="profile-header__link">\n                  <habbo-imager class="profile-header__image">\n                    <img class="imager" src="{{ website.figure_imager }}?figure={{ user.look }}">\n                  </habbo-imager>\n              </div>\n          </div>\n          <div class="profile-header__details">\n            <div>\n              <h1>{{ user.username }}</h1>\n            </div>\n          </div>\n          <img src="{{ website.swfs_base }}/other/images/album1584/{{ user.rank.badge_code }}.gif" style="position:absolute;top:65px;right:475px;" ng-if="user.rank.badge_code !== \'\'">\n      </habbo-profile-header>\n  </div>\n\n  <div class="wrapper wrapper--content">\n      <div class="profile__section">\n          <div class="profile__card__wrapper--friends">\n              <section class="profile__card__aligner">\n                  <div class="profile__card">\n                      <h2 class="profile__card__title">\n                        <span>Friends</span>\n                      </h2>\n                        <habbo-friend-list class="item-list--grid" ng-if="user.friends !== undefined">\n                          <ul>\n                            <li class="item item--friend" ng-repeat="friend in user.friends" ng-limit="10">\n                                <a class="item__content" href="/profile/{{ friend.user.username }}">\n                                    <div class="item__icon">\n                                      <habbo-imager class="item__icon__friend">\n                                        <div ng-init="show=0" ng-mouseover="show = 1" ng-mouseleave="show = 0">\n                                          <img class="imager" src="{{ website.figure_imager }}?figure={{ friend.user.look }}" ng-if="show==0">\n                                          <img class="imager" src="{{ website.figure_imager }}?figure={{ friend.user.look }}&action=wav" ng-if="show==1">\n                                        </div>\n                                      </habbo-imager>\n                                    </div>\n                                    <div class="item__text">\n                                        <h6 class="item__title item__title--single-line">{{ friend.user.username }}</h6>\n                                    </div>\n                                </a>\n                            </li>\n                          </ul>\n                        </habbo-friend-list>\n                        <div class="profile__card__footer" ng-if="user.friends !== undefined && user.friends.length > 4">\n                            <habbo-profile-modal type="friends">\n                              <a href="/profile/{{ user.username }}/friends" class="profile-modal__link">See all</a>\n                            </habbo-profile-modal>\n                        </div>\n                        <p ng-if="user.friends == undefined">I don\'t have any friends!</p>\n                  </div>\n              </section>\n          </div>\n          <div class="profile__card__wrapper--rooms">\n            <section class="profile__card__aligner">\n                <div class="profile__card">\n                    <h2 class="profile__card__title">Rooms</h2>\n                    <habbo-room-list class="item-list--grid" ng-if="user.rooms !== undefined && user.rooms.length > 0">\n                      <ul>\n                        <li class="item item--room" ng-repeat="room in user.rooms">\n                            <a href="/room/{{ room.id }}" class="item__content">\n                                <habbo-room-icon class="item__icon" url="https://habbo-stories-content.s3.amazonaws.com/navigator-thumbnail/hhus/64061002.png">\n                                    <div class="room-icon"></div>\n                                </habbo-room-icon>\n                                <div class="item__text">\n                                    <h6 class="item__title item__title--single-line">{{ room.name }}</h6>\n                                </div>\n                            </a>\n                        </li>\n                      </ul>\n                    </habbo-room-list>\n                    <div class="profile__card__footer" ng-if="user.rooms !== undefined && user.rooms.length > 4">\n                        <habbo-profile-modal>\n                          <a href="/profile/<%= profile.username %>/rooms" class="profile-modal__link">See all</a>\n                        </habbo-profile-modal>\n                    </div>\n                    <p ng-if="user.rooms == undefined">I don\'t own any rooms!</p>\n                </div>\n            </section>\n          </div>\n      </div>\n  </div>\n</div>\n\n<div ng-if="user == undefined">\n  <section>\n    <div class="wrapper wrapper--content" style="text-align:center;">\n      <img src="/assets/img/mountain_house_bedroom_by_cutiezor-d9t9u82.png">\n      <h3>Rogue Profile!</h3>\n      <p>Looks like this guest checked out early or never was here...</p>\n    </div>\n  </section>\n</div>\n');
    }]);
  }, {}], 13: [function (e, t, n) {
    "use strict";
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = e("./session/guest/login"),
        i = a(s),
        r = e("./session/user/logout"),
        o = a(r),
        l = e("./session/user/home/about"),
        c = a(l),
        u = e("./session/guest/register"),
        d = a(u),
        h = e("./session/user/home/client"),
        m = a(h),
        p = e("./session/user/home/profile"),
        f = a(p),
        _ = e("./session/user/community/staff"),
        g = a(_),
        b = e("./session/user/community/photos"),
        v = a(b),
        w = e("./session/user/community/online"),
        y = a(w),
        $ = e("./session/user/community/Article"),
        k = a($),
        x = e("./session/user/hangouts/home"),
        S = a(x),
        j = e("./session/user/hangouts/post"),
        P = a(j),
        O = e("./session/user/hangouts/create"),
        T = a(O),
        C = e("./session/user/community/Categories"),
        E = a(C),
        I = e("./session/user/community/Leaderboards"),
        M = a(I),
        H = angular.module("heroic.controllers", []);H.controller("Login", i.default), H.controller("Register", d.default), H.controller("Logout", o.default), H.controller("Client", m.default), H.controller("About", c.default), H.controller("Profile", f.default), H.controller("Staff", g.default), H.controller("Photos", v.default), H.controller("Online", y.default), H.controller("Article", k.default), H.controller("Categories", E.default), H.controller("Leaderboards", M.default), H.controller("HangoutsHome", S.default), H.controller("HangoutsPost", P.default), H.controller("HangoutsCreate", T.default), n.default = H;
  }, { "./session/guest/login": 14, "./session/guest/register": 15, "./session/user/community/Article": 16, "./session/user/community/Categories": 17, "./session/user/community/Leaderboards": 18, "./session/user/community/online": 19, "./session/user/community/photos": 20, "./session/user/community/staff": 21, "./session/user/hangouts/create": 22, "./session/user/hangouts/home": 23, "./session/user/hangouts/post": 24, "./session/user/home/about": 25, "./session/user/home/client": 26, "./session/user/home/profile": 27, "./session/user/logout": 28 }], 14: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        i = function () {
      function e(t, n, s) {
        "ngInject";
        var i = this;a(this, e), this.AuthenticationService = t, this.$state = n, this.$scope = s, this.$scope.loginFormDetails = { username: null, password: null }, this.$scope.login = function () {
          return i.login();
        };
      }return e.$inject = ["AuthenticationService", "$state", "$scope"], s(e, [{ key: "login", value: function value() {
          var e = this;return this.AuthenticationService.login(this.$scope.loginFormDetails.username, this.$scope.loginFormDetails.password).then(function (t) {
            return e.$state.go("me.home");
          }).catch(function (t) {
            e.$scope.loginFormDetails = null;
          });
        } }]), e;
    }();n.default = i;
  }, {}], 15: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function e(t, n, s, i) {
      "ngInject";
      a(this, e), this.AuthenticationService = t, this.$http = n, this.$scope = s, this.$state = i, this.$scope.user = {}, this.$scope.messages = {}, this.$scope.check = {}, this.$scope.check = function (e) {
        "username" == e ? n.get("/api/data/emulator/users/match/username/" + s.user.username).then(function (e) {
          s.messages.username = void 0;
        }).catch(function (e) {
          s.messages.username = "This username is not available";
        }) : "email" == e && (s.user.email.length < 25 ? n.get("/api/data/emulator/users/match/email/" + s.user.email).then(function (e) {
          s.messages.email = void 0;
        }).catch(function (e) {
          s.messages.email = "This email address is already being used";
        }) : s.messages.email = "Email address is too long"), void 0 != s.user.username && void 0 != s.user.email && void 0 != s.user.password && void 0 != s.user.password_rep && void 0 == s.messages.username && void 0 == s.messages.email && s.user.password == s.user.password_rep ? s.user.enabled = !0 : s.user.enabled = !1;
      }, this.$scope.register = function () {
        n.post("/api/auth/register", s.user).then(function (e) {
          return t.login(s.user.username, s.user.password).then(function (e) {
            return i.go("me.home");
          }).catch(function (e) {
            return state.go("login");
          });
        }).catch(function (e) {
          return state.go("login");
        });
      };
    };s.$inject = ["AuthenticationService", "$http", "$scope", "$state"], n.default = s;
  }, {}], 16: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        i = function () {
      function e(t, n, s) {
        "ngInject";
        var i = this;a(this, e), this.$scope = t, this.$http = n, this.$state = s, this.$onInit = function () {
          i.fetch();
        };
      }return e.$inject = ["$scope", "$http", "$state"], s(e, [{ key: "fetch", value: function value() {
          var e = this;this.$http({ method: "GET", url: "/api/data/website/news/fetch/" + this.$state.params.id }).then(function (t) {
            e.$scope.article = t.data[0];
          }).catch(function (t) {
            e.$scope.article = void 0;
          });
        } }]), e;
    }();n.default = i;
  }, {}], 17: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        i = function () {
      function e(t, n) {
        "ngInject";
        var s = this;a(this, e), this.$scope = t, this.$http = n, this.$onInit = function () {
          s.fetch();
        }, this.$scope.tab = 0, this.$scope.setTab = function (e) {
          t.tab = e;
        }, this.$scope.isSet = function (e) {
          return t.tab === e;
        };
      }return e.$inject = ["$scope", "$http"], s(e, [{ key: "fetch", value: function value() {
          var e = this;this.$http({ method: "GET", url: "/api/data/website/category/fetch" }).then(function (t) {
            e.$scope.categories = t.data;
          }).catch(function (t) {
            e.$scope.categories = null;
          });
        } }]), e;
    }();n.default = i;
  }, {}], 18: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        i = function () {
      function e(t, n) {
        "ngInject";
        var s = this;a(this, e), this.$scope = t, this.$http = n, this.$onInit = function () {
          s.fetch();
        }, this.$scope.tab = 1, this.$scope.setTab = function (e) {
          t.tab = e;
        }, this.$scope.isSet = function (e) {
          return t.tab === e;
        };
      }return e.$inject = ["$scope", "$http"], s(e, [{ key: "fetch", value: function value() {
          var e = this;this.$http({ method: "GET", url: "/api/data/emulator/users/leaderboards" }).then(function (t) {
            e.$scope.leaderboards = t.data;
          }).catch(function (t) {
            e.$scope.leaderboards = null;
          });
        } }]), e;
    }();n.default = i;
  }, {}], 19: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        i = function () {
      function e(t, n) {
        "ngInject";
        var s = this;a(this, e), this.$scope = t, this.$http = n, this.$onInit = function () {
          s.fetch();
        };
      }return e.$inject = ["$scope", "$http"], s(e, [{ key: "fetch", value: function value() {
          var e = this;this.$http({ method: "GET", url: "/api/data/emulator/online/fetch" }).then(function (t) {
            t.data.length > 0 ? e.$scope.online = t.data : e.$scope.online = null;
          }).catch(function (t) {
            e.$scope.online = null;
          });
        } }]), e;
    }();n.default = i;
  }, {}], 20: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        i = function () {
      function e(t, n) {
        "ngInject";
        var s = this;a(this, e), this.$scope = t, this.$http = n, this.$onInit = function () {
          s.fetch();
        }, t.like = function (e) {
          var a = { photo_id: e || 1 };n.post("/api/data/emulator/photos/like", a).then(function (n) {
            "liked" == n.data.status ? t.photos[t.photos.length - e].likes.push(1) : t.photos[t.photos.length - e].likes.splice(1, 1);
          }).catch(function (e) {
            console.log("Error: ", e);
          });
        };
      }return e.$inject = ["$scope", "$http"], s(e, [{ key: "fetch", value: function value() {
          var e = this;this.$http({ method: "GET", url: "/api/data/emulator/photos/fetch" }).then(function (t) {
            e.$scope.photos = t.data;
          }).catch(function (e) {
            console.log("Error: ", e);
          });
        } }]), e;
    }();n.default = i;
  }, {}], 21: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        i = function () {
      function e(t, n) {
        "ngInject";
        var s = this;a(this, e), this.$scope = t, this.$http = n, this.$onInit = function () {
          s.fetch();
        }, t.setTab = function (e) {
          t.tab = e;
        }, t.isSet = function (e) {
          return t.tab === e;
        };
      }return e.$inject = ["$scope", "$http"], s(e, [{ key: "fetch", value: function value() {
          var e = this;this.$http({ method: "GET", url: "/api/data/emulator/staff/fetch" }).then(function (t) {
            t.data.length > 0 ? (e.$scope.tab = t.data[0].id, e.$scope.ranks = t.data) : e.$scope.ranks = null;
          }).catch(function (t) {
            e.$scope.ranks = null;
          });
        } }]), e;
    }();n.default = i;
  }, {}], 22: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        i = function () {
      function e(t, n, s) {
        "ngInject";
        a(this, e), this.$scope = t, this.$http = n, this.$state = s, this.$onInit = this.fetch(), this.$scope.data = {}, this.$scope.post = function () {
          var e = { thumb: t.data.thumb, title: t.data.title.substr(0, 10), content: t.data.content, category: t.data.category };n.post("/api/data/website/hangouts/create", e).then(function (e) {
            s.go("hangouts.home.post", { id: e.data.id });
          }).catch(function (e) {
            t.data.message = "Can not post at this time";
          });
        };
      }return e.$inject = ["$scope", "$http", "$state"], s(e, [{ key: "fetch", value: function value() {
          var e = this;this.$http({ method: "GET", url: "/api/data/website/hangouts/fetch" }).then(function (t) {
            e.$scope.categories = t.data;
          }).catch(function (e) {});
        } }]), e;
    }();n.default = i;
  }, {}], 23: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        i = function () {
      function e(t, n) {
        "ngInject";
        a(this, e), this.$scope = t, this.$http = n, this.$onInit = this.fetch(), t.tab = 1, t.setTab = function (e) {
          t.tab = e;
        }, t.isSet = function (e) {
          return t.tab === e;
        };
      }return e.$inject = ["$scope", "$http"], s(e, [{ key: "fetch", value: function value() {
          var e = this;this.$http({ method: "GET", url: "/api/data/website/hangouts/fetch" }).then(function (t) {
            e.$scope.categories = t.data;
          }).catch(function (e) {});
        } }]), e;
    }();n.default = i;
  }, {}], 24: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        i = function () {
      function e(t, n, s, i) {
        "ngInject";
        a(this, e), this.$scope = t, this.$http = n, this.$state = s, this.$localStorage = i, this.$onInit = this.fetch(), this.$scope.count = 1, this.$scope.data = {}, this.$scope.comments = {}, this.$scope.comment = function () {
          var e = { post: s.params.id, user: i.session.id, content: t.data.content };n.post("/api/data/website/hangouts/comments/create", e).then(function (e) {
            t.post.comments.push(e.data);
          }), t.form = !1;
        }, this.$scope.delete = function (e, t) {
          "post" == t ? n.get("/api/data/website/hangouts/post/delete/" + e).then(function (e) {
            s.go("hangouts.home.list");
          }) : n.get("/api/data/website/hangouts/comments/delete/" + e.id).then(function (e) {
            s.reload();
          });
        };
      }return e.$inject = ["$scope", "$http", "$state", "$localStorage"], s(e, [{ key: "fetch", value: function value() {
          var e = this;this.$http({ method: "GET", url: "/api/data/website/hangouts/fetch/" + this.$state.params.id }).then(function (t) {
            if ((1 != t.data.category.staff || 1 != e.$localStorage.session.rank.staff) && 0 != t.data.category.staff) return e.$state.go("hangouts.home.list");e.$scope.post = t.data;
          }).catch(function (t) {
            return e.$state.go("hangouts.home.list");
          });
        } }]), e;
    }();n.default = i;
  }, {}], 25: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        i = function () {
      function e(t, n) {
        "ngInject";
        a(this, e), this.$http = n, this.$scope = t, this.$onInit = this.fetch(), t.tab = 1, t.setTab = function (e) {
          t.tab = e;
        }, t.isSet = function (e) {
          return t.tab === e;
        }, t.info = {};
      }return e.$inject = ["$scope", "$http"], s(e, [{ key: "fetch", value: function value() {
          var e = this;this.$http.get("/api/data/build").then(function (t) {
            e.$scope.info = t.data;
          }).catch(function (t) {
            e.$scope.info = "Failed to load";
          });
        } }]), e;
    }();n.default = i;
  }, {}], 26: [function (e, t, n) {
    "use strict";
    function a(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
    }function s(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        r = function () {
      function e(t, n, a, i) {
        "ngInject";
        s(this, e), this.$http = a, this.$scope = n, this.$state = i, this.$onInit = this.fetch(), this.$scope.fly_home = function () {
          return i.go("me.home");
        };
      }return e.$inject = ["$rootScope", "$scope", "$http", "$state"], i(e, [{ key: "fetch", value: function value() {
          this.$http.get("/api/auth/sso").then(function (e) {
            var t,
                n = (t = { "connection.info.host": "35.226.240.137", "connection.info.port": "3000", "url.prefix": "/me", "site.url": "/me", "client.reload.url": "/me", "client.fatal.error.url": "/client", "client.connection.failed.url": "/me", "external.variables.txt": "http://swfs.xhabbo.fun/gamedata/variables.txt", "external.texts.txt": "http://swfs.xhabbo.fun/gamedata/texts.txt", "productdata.load.url": "http://swfs.xhabbo.fun/gamedata/productdata.txt", "furnidata.load.url": "http://swfs.xhabbo.fun/gamedata/furnidata.xml", "external.figurepartlist.txt": "http://swfs.xhabbo.fun/gamedata/figuredata.xml", "external.override.texts.txt": "http://swfs.xhabbo.fun/gamedata/override/texts.txt", "external.override.variables.txt": "http://swfs.xhabbo.fun/gamedata/override/variables.txt" }, a(t, "external.figurepartlist.txt", "http://swfs.xhabbo.fun/gamedata/figuredata.xml"), a(t, "client.starting.revolving", "Already!?"), a(t, "use.sso.ticket", "1"), a(t, "sso.ticket", e.data.auth_ticket), a(t, "processlog.enabled", "0"), a(t, "flash.client.url", "http://swfs.xhabbo.fun/other/game/"), a(t, "flash.client.origin", "popup"), a(t, "client.allow.cross.domain", "1"), a(t, "client.notify.cross.domain", "0"), t),
                s = { base: "http://swfs.xhabbo.fun/other/game/", allowScriptAccess: "always", menu: "false" };swfobject.embedSWF("http://swfs.xhabbo.fun/gamedata/arcturus.swf", "client", "100%", "100%", "10.0.0", "", n, s, null);
          });
        } }]), e;
    }();n.default = r;
  }, {}], 27: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        i = function () {
      function e(t, n, s) {
        "ngInject";
        var i = this;a(this, e), this.$state = t, this.$scope = n, this.$http = s, this.$onInit = function () {
          i.fetch();
        };
      }return e.$inject = ["$state", "$scope", "$http"], s(e, [{ key: "fetch", value: function value() {
          var e = this;this.$http({ method: "GET", url: "/api/data/emulator/users/fetch/" + this.$state.params.username }).then(function (t) {
            t.data && void 0 !== t.data.username ? e.$scope.user = t.data : e.$scope.user = void 0;
          }).catch(function (t) {
            e.$scope.user = void 0;
          });
        } }]), e;
    }();n.default = i;
  }, {}], 28: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function e(t, n) {
      "ngInject";
      a(this, e), this.SessionService = t, this.$state = n, this.SessionService.destroySession().then(function (e) {
        return n.go("login");
      }).catch(function (e) {
        return n.go("login");
      });
    };s.$inject = ["SessionService", "$state"], n.default = s;
  }, {}], 29: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        i = function () {
      function e() {
        a(this, e), this.restrict = "E", this.replace = !0, this.scope = { flashvars: "=flashvars" };
      }return s(e, [{ key: "link", value: function value(e, t, n) {
          t.replaceWith('<object id="flash-container" type="application/x-shockwave-flash" data="http://localhost/assets/swfs/gamedata/habb.swf" width="100%" height="100%"><param name="base" value="http://localhost/assets/swfs/other/game/"><param name="allowScriptAccess" value="always"><param name="menu" value="false"><param name="wmode" value="opaque"><param name="flashvars" value="' + e.flashvars + '"></object>');
        } }]), e;
    }();n.default = i;
  }, {}], 30: [function (e, t, n) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 });var a = e("./game/client"),
        s = function (e) {
      return e && e.__esModule ? e : { default: e };
    }(a),
        i = angular.module("heroic.directives", []);i.directive("habboClient", function () {
      return new s.default();
    }), n.default = i;
  }, { "./game/client": 29 }], 31: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function e(t, n, s) {
      "ngInject";
      a(this, e), t({ type: "GET", url: "/api/data/website/settings" }).then(function (e) {
        n.website = e.data, s.website = e.data;
      }).catch(function (e) {
        return null;
      });
    };s.$inject = ["$http", "$rootScope", "$localStorage"], n.default = s;
  }, {}], 32: [function (e, t, n) {
    "use strict";
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = e("./user/jwt"),
        i = a(s),
        r = e("./user/session"),
        o = a(r),
        l = e("./other/promise"),
        c = a(l),
        u = e("./data/settings"),
        d = a(u),
        h = e("./user/authentication"),
        m = a(h),
        p = angular.module("heroic.services", []);p.service("JWTService", i.default), p.service("SessionService", o.default), p.service("PromiseService", c.default), p.service("SettingsService", d.default), p.service("AuthenticationService", m.default), n.default = p;
  }, { "./data/settings": 31, "./other/promise": 33, "./user/authentication": 34, "./user/jwt": 35, "./user/session": 36 }], 33: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function e(t) {
      "ngInject";
      return a(this, e), { requestError: function requestError(e) {}, responseError: function responseError(e) {
          return canRecover(e) ? responseOrNewPromise : t.reject(e);
        } };
    };s.$inject = ["$q"], n.default = s;
  }, {}], 34: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        i = function () {
      function e(t, n, s, i) {
        "ngInject";
        a(this, e), this.SessionService = t, this.$http = n, this.$q = s, this.$localStorage = i;
      }return e.$inject = ["SessionService", "$http", "$q", "$localStorage"], s(e, [{ key: "login", value: function value(e, t) {
          var n = this,
              a = { username: e, password: t };return this.$http.post("/api/auth/login", a).then(function (e) {
            n.$localStorage.token = e.data, n.SessionService.createSession();
          }).catch(function (e) {
            return $q.reject("failed");
          });
        } }]), e;
    }();n.default = i;
  }, {}], 35: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function e(t, n, s, i) {
      "ngInject";
      a(this, e), this.request = function (e) {
        return e.headers = e.headers || {}, i.token && (e.headers["x-access-token"] = i.token), e;
      }, this.requestError = function (e) {
        return s.reject(e);
      }, this.response = function (e) {
        return e || s.when(e);
      }, this.responseError = function (e) {
        return s.reject(e);
      };
    };s.$inject = ["$injector", "$location", "$q", "$localStorage"], n.default = s;
  }, {}], 36: [function (e, t, n) {
    "use strict";
    function a(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n];a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
        }
      }return function (t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
      };
    }(),
        i = function () {
      function e(t, n, s, i) {
        "ngInject";
        a(this, e), this.$localStorage = t, this.$http = n, this.$q = s, this.$rootScope = i;
      }return e.$inject = ["$localStorage", "$http", "$q", "$rootScope"], s(e, [{ key: "createSession", value: function value() {
          var e = this;return this.$http.get("/api/auth/session/fetch").then(function (t) {
            return e.$localStorage.session = t.data, e.$rootScope.session = t.data, e.$q.resolve(e.$localStorage.session);
          }).catch(function (t) {
            return e.$rootScope.session = void 0, e.$q.reject("Not authenticated");
          });
        } }, { key: "validateSession", value: function value() {
          var e = this;return this.$http.get("/api/auth/session/fetch").then(function (t) {
            return e.$q.resolve(e.$localStorage.session);
          }).catch(function (t) {
            return e.$rootScope.session = void 0, e.$q.reject("Not authenticated");
          });
        } }, { key: "destroySession", value: function value() {
          var e = this;return this.$http.get("/api/auth/session/logout").then(function (t) {
            return e.$localStorage.$reset(), e.$rootScope.session = null, e.$q.resolve(null);
          }).catch(function (t) {
            return e.$localStorage.$reset(), e.$rootScope.session = null, e.$q.resolve(null);
          });
        } }]), e;
    }();n.default = i;
  }, {}] }, {}, [1]);