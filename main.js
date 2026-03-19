import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CheckboxControlValueAccessor,
  Component,
  DefaultValueAccessor,
  DestroyRef,
  Directive,
  ElementRef,
  FormsModule,
  HostListener,
  HttpClient,
  NgControlStatus,
  NgModel,
  NgZone,
  RangeValueAccessor,
  RouterLink,
  RouterOutlet,
  ViewChild,
  bootstrapApplication,
  inject,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  provideRouter,
  setClassMetadata,
  takeUntilDestroyed,
  withInMemoryScrolling,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-QANXCGO7.js";

// src/app/shared/scroll-reveal.directive.ts
var ScrollRevealDirective = class _ScrollRevealDirective {
  observer;
  el = inject(ElementRef);
  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          this.observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    this.observeAll();
  }
  /** Re-scan for new `.reveal` elements (e.g. after conditional blocks render). */
  observeAll() {
    this.el.nativeElement.querySelectorAll(".reveal:not(.visible)").forEach((el) => this.observer.observe(el));
  }
  static \u0275fac = function ScrollRevealDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScrollRevealDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _ScrollRevealDirective, selectors: [["", "scrollReveal", ""]] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollRevealDirective, [{
    type: Directive,
    args: [{ selector: "[scrollReveal]", standalone: true }]
  }], null, null);
})();

// src/app/tetris-replay/replay.constants.ts
var ANIM = {
  // Base frame duration formula: SPEED_BASE_MS + (10 - speed) * SPEED_FACTOR_MS
  SPEED_BASE_MS: 260,
  SPEED_FACTOR_MS: 260,
  // How frameDuration splits between the two phases
  CANDIDATE_PHASE_FRAC: 0.65,
  PLACED_PHASE_FRAC: 0.35,
  // Sub-phases within candidateDuration: sweep-in then fade-out
  SWEEP_IN_FRAC: 0.65,
  FADE_OUT_FRAC: 0.35,
  // Ghost opacity levels
  GHOST_BASE_ALPHA: 0.2,
  // non-chosen ghost (sweep + static)
  GHOST_CHOSEN_INIT_ALPHA: 0.2,
  // chosen ghost at start of fade-in
  GHOST_CHOSEN_DELTA_ALPHA: 0.65,
  // delta added over fade-in (→ 0.85 max)
  GHOST_CHOSEN_STATIC_ALPHA: 0.45
  // chosen ghost in static renderFrame()
};
var UI = {
  LOAD_FADE_DELAY_MS: 650,
  // Wait for run-info fade-out before swapping game data
  TOAST_DURATION_MS: 2e3
};
var CANVAS = {
  BG_COLOR: "#0d0d0d",
  FALLBACK_COLOR: "#888"
  // used when a piece ID has no colour entry
};

// src/app/home/home.component.ts
var _c0 = ["heroInner"];
var _c1 = ["scrollHint"];
var _c2 = ["projectsGrid"];
var HomeComponent = class _HomeComponent {
  heroInnerRef;
  scrollHintRef;
  projectsGridRef;
  toastMessage = "";
  toastTimer = null;
  cardsObserver = null;
  ngAfterViewInit() {
    this.cardsObserver = new IntersectionObserver(([entry]) => {
      entry.target.classList.toggle("cards-visible", entry.isIntersecting);
    }, { threshold: 0.2 });
    this.cardsObserver.observe(this.projectsGridRef.nativeElement);
  }
  ngOnDestroy() {
    this.cardsObserver?.disconnect();
  }
  onScroll() {
    const y = window.scrollY;
    this.heroInnerRef.nativeElement.style.transform = `translateY(${y * 0.3}px)`;
    this.scrollHintRef.nativeElement.classList.toggle("hidden", y > 0);
  }
  scrollTo(event, id) {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
  copy(text, label) {
    navigator.clipboard.writeText(text).then(() => {
      if (this.toastTimer !== null)
        clearTimeout(this.toastTimer);
      this.toastMessage = `${label} copied`;
      this.toastTimer = window.setTimeout(() => {
        this.toastMessage = "";
      }, UI.TOAST_DURATION_MS);
    });
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5)(_c1, 5)(_c2, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.heroInnerRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.scrollHintRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.projectsGridRef = _t.first);
    }
  }, hostBindings: function HomeComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("scroll", function HomeComponent_scroll_HostBindingHandler() {
        return ctx.onScroll();
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 132, vars: 3, consts: [["heroInner", ""], ["scrollHint", ""], ["projectsGrid", ""], ["href", "/", 1, "nav-logo"], [1, "nav-links"], ["href", "#projects", 3, "click"], ["href", "#contact", 3, "click"], [1, "hero-page"], [1, "hero"], [1, "hero-inner"], [1, "hero-name"], [1, "hero-sub"], [1, "pills"], [1, "pill"], [1, "pill-label"], [1, "pill-value"], [1, "pill-tooltip"], [1, "cta-links"], ["href", "https://github.com/RadiantVirtue", "target", "_blank", "rel", "noopener"], [1, "cta-sep"], ["href", "https://linkedin.com/in/rhian-kansara", "target", "_blank", "rel", "noopener"], ["href", "/cv.pdf", "download", "Rhian Kansara CV"], [1, "scroll-hint"], ["id", "projects", 1, "projects-section"], [1, "projects"], ["routerLink", "/league", 1, "card"], [1, "card-type", "blue"], [1, "card-title"], [1, "card-desc"], [1, "tags"], [1, "tag"], ["routerLink", "/tetris", 1, "card"], [1, "card-type", "amber"], ["href", "/rl-workout-bot/", 1, "card"], [1, "card-type", "green"], ["id", "contact", "scrollReveal", "", 1, "contact-section"], [1, "reveal"], [1, "contact-items"], [1, "contact-item", "reveal", 3, "click"], ["src", "discord-icon.png", "alt", "Discord", 1, "contact-icon"], [1, "contact-value"], ["width", "13", "height", "13", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "copy-icon"], ["x", "9", "y", "9", "width", "13", "height", "13", "rx", "2"], ["d", "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"], ["src", "mail-icon.png", "alt", "Email", 1, "contact-icon"], ["href", "https://github.com/RadiantVirtue/WebsiteTS", "target", "_blank", "rel", "noopener", 1, "source-link", "reveal"], [1, "toast"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav")(1, "a", 3);
      \u0275\u0275text(2, "RK");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "ul", 4)(4, "li")(5, "a", 5);
      \u0275\u0275listener("click", function HomeComponent_Template_a_click_5_listener($event) {
        return ctx.scrollTo($event, "projects");
      });
      \u0275\u0275text(6, "Projects");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "li")(8, "a", 6);
      \u0275\u0275listener("click", function HomeComponent_Template_a_click_8_listener($event) {
        return ctx.scrollTo($event, "contact");
      });
      \u0275\u0275text(9, "Contact");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(10, "div", 7)(11, "section", 8)(12, "div", 9, 0)(14, "h1", 10);
      \u0275\u0275text(15, "Rhian Kansara");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p", 11);
      \u0275\u0275text(17, "CS & AI \xA0\xB7\xA0 Bath \xA0\xB7\xA0 London \xA0\xB7\xA0 I like to build things that learn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 12)(19, "div", 13)(20, "span", 14);
      \u0275\u0275text(21, "shipped to");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 15);
      \u0275\u0275text(23, "~500 users");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 16);
      \u0275\u0275text(25, "Shipped production-ready software used directly in live customer demos and beta testing (");
      \u0275\u0275elementStart(26, "b");
      \u0275\u0275text(27, "~500 users");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, "), serving as the company's first external-facing release.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 13)(30, "span", 14);
      \u0275\u0275text(31, "novel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 15);
      \u0275\u0275text(33, "RL metric");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span", 16);
      \u0275\u0275text(35, "Created ");
      \u0275\u0275elementStart(36, "b");
      \u0275\u0275text(37, "Moment of Reward Analysis");
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, " - a metric that measures how off-policy algorithms weigh immediate versus preparatory actions.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 13)(40, "span", 14);
      \u0275\u0275text(41, "predicted");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span", 15);
      \u0275\u0275text(43, "first class");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span", 16);
      \u0275\u0275text(45, "BSc (Hons) Computer Science and Artificial Intelligence, ");
      \u0275\u0275elementStart(46, "b");
      \u0275\u0275text(47, "University of Bath");
      \u0275\u0275elementEnd();
      \u0275\u0275text(48, " - predicted first class honours.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 17)(50, "a", 18);
      \u0275\u0275text(51, "GitHub \u2197");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span", 19);
      \u0275\u0275text(53, "\xB7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "a", 20);
      \u0275\u0275text(55, "LinkedIn \u2197");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span", 19);
      \u0275\u0275text(57, "\xB7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "a", 21);
      \u0275\u0275text(59, "CV \u2193");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(60, "p", 22, 1);
      \u0275\u0275text(62, "\u2193 PROJECTS \u2193");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "div", 23)(64, "h2");
      \u0275\u0275text(65, "PROJECTS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 24, 2)(68, "div", 25)(69, "div", 26);
      \u0275\u0275text(70, "LIVE TOOL");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 27);
      \u0275\u0275text(72, "League team analyzer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "div", 28);
      \u0275\u0275text(74, "CC scoring, damage profiles, itemization");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 29)(76, "span", 30);
      \u0275\u0275text(77, "Angular");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "span", 30);
      \u0275\u0275text(79, ".NET");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "span", 30);
      \u0275\u0275text(81, "Riot API");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "div", 31)(83, "div", 32);
      \u0275\u0275text(84, "CASE STUDY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div", 27);
      \u0275\u0275text(86, "Tetris DQN agent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 28);
      \u0275\u0275text(88, "After-state DQN with prioritised replay, 2,147 lines cleared");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 29)(90, "span", 30);
      \u0275\u0275text(91, "DQN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "span", 30);
      \u0275\u0275text(93, "Angular");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "span", 30);
      \u0275\u0275text(95, "PyTorch");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(96, "a", 33)(97, "div", 34);
      \u0275\u0275text(98, "CASE STUDY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 27);
      \u0275\u0275text(100, "PPO Workout Agent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "div", 28);
      \u0275\u0275text(102, "20% efficiency gain, 3-month self-experiment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 29)(104, "span", 30);
      \u0275\u0275text(105, "PyTorch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "span", 30);
      \u0275\u0275text(107, "PPO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "span", 30);
      \u0275\u0275text(109, "RL");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(110, "div", 35)(111, "h2", 36);
      \u0275\u0275text(112, "CONTACT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 37)(114, "button", 38);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_114_listener() {
        return ctx.copy("RadiantVirtue", "Discord username");
      });
      \u0275\u0275element(115, "img", 39);
      \u0275\u0275elementStart(116, "span", 40);
      \u0275\u0275text(117, "@RadiantVirtue");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(118, "svg", 41);
      \u0275\u0275element(119, "rect", 42)(120, "path", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(121, "button", 38);
      \u0275\u0275listener("click", function HomeComponent_Template_button_click_121_listener() {
        return ctx.copy("rhiankansara20@gmail.com", "Email");
      });
      \u0275\u0275element(122, "img", 44);
      \u0275\u0275elementStart(123, "span", 40);
      \u0275\u0275text(124, "rhiankansara20@gmail.com");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(125, "svg", 41);
      \u0275\u0275element(126, "rect", 42)(127, "path", 43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(128, "a", 45);
      \u0275\u0275text(129, "like what you see?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "div", 46);
      \u0275\u0275text(131);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(130);
      \u0275\u0275classProp("toast-visible", !!ctx.toastMessage);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.toastMessage);
    }
  }, dependencies: [RouterLink, ScrollRevealDirective], styles: ['\n\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n[_nghost-%COMP%] {\n  --bg: #1a1a1a;\n  --bg-card: #212121;\n  --bg-pill: #2a2a2a;\n  --border: rgba(255,255,255,0.08);\n  --text-pri: #e8e8e8;\n  --text-sec: #888;\n  --text-ter: #555;\n  --blue: #6b9fff;\n  --green: #5cb85c;\n  --amber: #e6a817;\n  --radius-md: 8px;\n  --radius-lg: 12px;\n  --nav-height: 57px;\n  display: block;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  background: var(--bg);\n  color: var(--text-pri);\n}\nnav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px 32px;\n  border-bottom: 0.5px solid var(--border);\n  background: var(--bg);\n}\n.nav-logo[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  color: var(--text-pri);\n  text-decoration: none;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 28px;\n  font-size: 13px;\n  color: var(--text-sec);\n  list-style: none;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--text-pri);\n}\n@keyframes _ngcontent-%COMP%_fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero-name[_ngcontent-%COMP%], \n.hero-sub[_ngcontent-%COMP%], \n.pills[_ngcontent-%COMP%], \n.cta-links[_ngcontent-%COMP%] {\n  opacity: 0;\n  animation: _ngcontent-%COMP%_fadeUp 0.6s ease forwards;\n}\n.hero-name[_ngcontent-%COMP%] {\n  animation-delay: 0.1s;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  animation-delay: 0.3s;\n}\n.pills[_ngcontent-%COMP%] {\n  animation-delay: 0.5s;\n}\n.cta-links[_ngcontent-%COMP%] {\n  animation-delay: 0.7s;\n}\n.hero-page[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding-top: var(--nav-height);\n}\n.hero[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 0 24px;\n}\n.hero-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  will-change: transform;\n}\n.hero-name[_ngcontent-%COMP%] {\n  font-size: 42px;\n  font-weight: 500;\n  letter-spacing: -0.5px;\n  margin-bottom: 10px;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-sec);\n  margin-bottom: 36px;\n}\n.pills[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 36px;\n  position: relative;\n  z-index: 1;\n}\n.pill[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--bg-pill);\n  border: 0.5px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 9px 18px;\n  font-size: 13px;\n  cursor: default;\n}\n.pill-label[_ngcontent-%COMP%] {\n  color: var(--text-ter);\n}\n.pill-value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-left: 5px;\n}\n.pill-tooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 10px);\n  left: 50%;\n  transform: translateX(-50%);\n  width: 260px;\n  background: #2c2c2c;\n  border: 0.5px solid rgba(255, 255, 255, 0.22);\n  border-radius: var(--radius-md);\n  padding: 12px 14px;\n  font-size: 12px;\n  line-height: 1.6;\n  color: var(--text-pri);\n  text-align: left;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n  z-index: 100;\n  white-space: normal;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8);\n  isolation: isolate;\n}\n.pill[_ngcontent-%COMP%]:hover   .pill-tooltip[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cta-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 14px;\n  font-size: 14px;\n}\n.cta-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--blue);\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.cta-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.cta-sep[_ngcontent-%COMP%] {\n  color: var(--text-ter);\n}\n.scroll-hint[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  text-align: center;\n  font-size: 11px;\n  letter-spacing: 1.5px;\n  color: var(--text-ter);\n  padding: 16px 0 20px;\n  transition: opacity 0.3s ease;\n}\n.scroll-hint.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n.projects-section[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  min-height: 100vh;\n  z-index: 1;\n  background: var(--bg);\n  box-shadow: 0 -12px 48px rgba(0, 0, 0, 0.6);\n  padding: 48px 32px 64px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.projects-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 11px;\n  letter-spacing: 2px;\n  color: var(--text-ter);\n  margin-bottom: 28px;\n}\n.projects[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  max-width: 960px;\n  width: 100%;\n  margin: 0 auto;\n}\n.card[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(14px);\n}\n.cards-visible[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeUp 0.5s ease backwards;\n  opacity: 1;\n  transform: none;\n}\n.cards-visible[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0s;\n}\n.cards-visible[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.15s;\n}\n.cards-visible[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.3s;\n}\n.projects[_ngcontent-%COMP%]:has(.card:hover)   .card[_ngcontent-%COMP%] {\n  transform: scale(0.95);\n}\n.projects[_ngcontent-%COMP%]:has(.card:hover)   .card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.card[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--bg-card);\n  border: 0.5px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 32px;\n  cursor: pointer;\n  transition: transform 0.3s ease, border-color 0.15s;\n  display: flex;\n  flex-direction: column;\n  aspect-ratio: 1 / 1;\n}\n.card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.18);\n}\na.card[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.card-type[_ngcontent-%COMP%] {\n  font-size: 11px;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.card-type.blue[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n.card-type.green[_ngcontent-%COMP%] {\n  color: var(--green);\n}\n.card-type.amber[_ngcontent-%COMP%] {\n  color: var(--amber);\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.card-desc[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-sec);\n  line-height: 1.6;\n  flex: 1;\n}\n.tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 24px;\n}\n.tag[_ngcontent-%COMP%] {\n  font-size: 11px;\n  background: var(--bg-pill);\n  border-radius: 4px;\n  padding: 4px 10px;\n  color: var(--text-ter);\n}\n.reveal[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(14px);\n  transition: opacity 0.5s ease, transform 0.5s ease;\n}\n.reveal.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.contact-item.reveal[_ngcontent-%COMP%] {\n  transition:\n    opacity 0.5s ease,\n    transform 0.5s ease,\n    border-color 0.15s,\n    background 0.15s;\n}\n.contact-section[_ngcontent-%COMP%]   h2.reveal[_ngcontent-%COMP%] {\n  transition-delay: 0ms;\n}\n.contact-item.reveal[_ngcontent-%COMP%]:nth-child(1) {\n  transition-delay: 120ms;\n}\n.contact-item.reveal[_ngcontent-%COMP%]:nth-child(2) {\n  transition-delay: 240ms;\n}\n.source-link.reveal[_ngcontent-%COMP%] {\n  transition-delay: 360ms;\n}\n.contact-section[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  background: var(--bg);\n  box-shadow: 0 -12px 48px rgba(0, 0, 0, 0.6);\n  padding: 48px 32px 80px;\n}\n.contact-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 11px;\n  letter-spacing: 2px;\n  color: var(--text-ter);\n  margin-bottom: 28px;\n}\n.contact-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  max-width: 560px;\n  margin: 0 auto;\n}\n.source-link[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-top: 24px;\n  font-size: 12px;\n  color: var(--text-muted, rgba(255,255,255,0.35));\n  text-decoration: none;\n  letter-spacing: 0.5px;\n  transition: color 0.15s;\n}\n.source-link[_ngcontent-%COMP%]:hover {\n  color: var(--text, rgba(255,255,255,0.7));\n}\n.contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  width: 100%;\n  background: var(--bg-card);\n  border: 0.5px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 10px 14px;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n  text-align: left;\n  color: inherit;\n  font-family: inherit;\n}\n.contact-item[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.18);\n  background: #262626;\n}\n.contact-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  object-fit: contain;\n  flex-shrink: 0;\n  mix-blend-mode: screen;\n  opacity: 0.7;\n}\n.contact-value[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-sec);\n  flex: 1;\n}\n.copy-icon[_ngcontent-%COMP%] {\n  color: var(--text-ter);\n  flex-shrink: 0;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n.contact-item[_ngcontent-%COMP%]:hover   .copy-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.toast[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 32px;\n  left: 50%;\n  transform: translateX(-50%) translateY(8px);\n  background: var(--bg-card);\n  border: 0.5px solid rgba(255, 255, 255, 0.12);\n  border-radius: var(--radius-md);\n  padding: 10px 18px;\n  font-size: 13px;\n  color: var(--text-sec);\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n  z-index: 100;\n  white-space: nowrap;\n}\n.toast.toast-visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n@media (max-width: 640px) {\n  .projects[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .hero-name[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .contact-items[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [RouterLink, ScrollRevealDirective], template: `<nav>
  <a href="/" class="nav-logo">RK</a>
  <ul class="nav-links">
    <li><a href="#projects" (click)="scrollTo($event, 'projects')">Projects</a></li>
    <li><a href="#contact" (click)="scrollTo($event, 'contact')">Contact</a></li>
  </ul>
</nav>

<!-- Hero: stays pinned while projects scroll over it -->
<div class="hero-page">
  <section class="hero">
    <div class="hero-inner" #heroInner>
      <h1 class="hero-name">Rhian Kansara</h1>
      <p class="hero-sub">CS &amp; AI &nbsp;\xB7&nbsp; Bath &nbsp;\xB7&nbsp; London &nbsp;\xB7&nbsp; I like to build things that learn</p>

      <div class="pills">
        <div class="pill">
          <span class="pill-label">shipped to</span><span class="pill-value">~500 users</span>
          <span class="pill-tooltip">Shipped production-ready software used directly in live customer demos and beta testing (<b>~500 users</b>), serving as the company's first external-facing release.</span>
        </div>
        <div class="pill">
          <span class="pill-label">novel</span><span class="pill-value">RL metric</span>
          <span class="pill-tooltip">Created <b>Moment of Reward Analysis</b> - a metric that measures how off-policy algorithms weigh immediate versus preparatory actions.</span>
        </div>
        <div class="pill">
          <span class="pill-label">predicted</span><span class="pill-value">first class</span>
          <span class="pill-tooltip">BSc (Hons) Computer Science and Artificial Intelligence, <b>University of Bath</b> - predicted first class honours.</span>
        </div>
      </div>

      <div class="cta-links">
        <a href="https://github.com/RadiantVirtue" target="_blank" rel="noopener">GitHub \u2197</a>
        <span class="cta-sep">\xB7</span>
        <a href="https://linkedin.com/in/rhian-kansara" target="_blank" rel="noopener">LinkedIn \u2197</a>
        <span class="cta-sep">\xB7</span>
        <a href="/cv.pdf" download="Rhian Kansara CV">CV \u2193</a>
      </div>
    </div>
  </section>

  <p class="scroll-hint" #scrollHint>\u2193 PROJECTS \u2193</p>
</div>

<!-- Projects slide over hero -->
<div class="projects-section" id="projects">
  <h2>PROJECTS</h2>
  <div class="projects" #projectsGrid>

    <div class="card" routerLink="/league">
      <div class="card-type blue">LIVE TOOL</div>
      <div class="card-title">League team analyzer</div>
      <div class="card-desc">CC scoring, damage profiles, itemization</div>
      <div class="tags">
        <span class="tag">Angular</span>
        <span class="tag">.NET</span>
        <span class="tag">Riot API</span>
      </div>
    </div>

    <div class="card" routerLink="/tetris">
      <div class="card-type amber">CASE STUDY</div>
      <div class="card-title">Tetris DQN agent</div>
      <div class="card-desc">After-state DQN with prioritised replay, 2,147 lines cleared</div>
      <div class="tags">
        <span class="tag">DQN</span>
        <span class="tag">Angular</span>
        <span class="tag">PyTorch</span>
      </div>
    </div>

    <a class="card" href="/rl-workout-bot/">
      <div class="card-type green">CASE STUDY</div>
      <div class="card-title">PPO Workout Agent</div>
      <div class="card-desc">20% efficiency gain, 3-month self-experiment</div>
      <div class="tags">
        <span class="tag">PyTorch</span>
        <span class="tag">PPO</span>
        <span class="tag">RL</span>
      </div>
    </a>

  </div>
</div>

<!-- Contact slides in below projects -->
<div class="contact-section" id="contact" scrollReveal>
  <h2 class="reveal">CONTACT</h2>
  <div class="contact-items">

    <button class="contact-item reveal" (click)="copy('RadiantVirtue', 'Discord username')">
      <img src="discord-icon.png" alt="Discord" class="contact-icon" />
      <span class="contact-value">@RadiantVirtue</span>
      <svg class="copy-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
      </svg>
    </button>

    <button class="contact-item reveal" (click)="copy('rhiankansara20@gmail.com', 'Email')">
      <img src="mail-icon.png" alt="Email" class="contact-icon" />
      <span class="contact-value">rhiankansara20@gmail.com</span>
      <svg class="copy-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
      </svg>
    </button>

  </div>
  <a class="source-link reveal" href="https://github.com/RadiantVirtue/WebsiteTS" target="_blank" rel="noopener">like what you see?</a>
</div>

<!-- Toast notification -->
<div class="toast" [class.toast-visible]="!!toastMessage">{{ toastMessage }}</div>
`, styles: ['/* src/app/home/home.component.css */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n:host {\n  --bg: #1a1a1a;\n  --bg-card: #212121;\n  --bg-pill: #2a2a2a;\n  --border: rgba(255,255,255,0.08);\n  --text-pri: #e8e8e8;\n  --text-sec: #888;\n  --text-ter: #555;\n  --blue: #6b9fff;\n  --green: #5cb85c;\n  --amber: #e6a817;\n  --radius-md: 8px;\n  --radius-lg: 12px;\n  --nav-height: 57px;\n  display: block;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  background: var(--bg);\n  color: var(--text-pri);\n}\nnav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px 32px;\n  border-bottom: 0.5px solid var(--border);\n  background: var(--bg);\n}\n.nav-logo {\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  color: var(--text-pri);\n  text-decoration: none;\n}\n.nav-links {\n  display: flex;\n  gap: 28px;\n  font-size: 13px;\n  color: var(--text-sec);\n  list-style: none;\n}\n.nav-links a {\n  color: inherit;\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.nav-links a:hover {\n  color: var(--text-pri);\n}\n@keyframes fadeUp {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.hero-name,\n.hero-sub,\n.pills,\n.cta-links {\n  opacity: 0;\n  animation: fadeUp 0.6s ease forwards;\n}\n.hero-name {\n  animation-delay: 0.1s;\n}\n.hero-sub {\n  animation-delay: 0.3s;\n}\n.pills {\n  animation-delay: 0.5s;\n}\n.cta-links {\n  animation-delay: 0.7s;\n}\n.hero-page {\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  padding-top: var(--nav-height);\n}\n.hero {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding: 0 24px;\n}\n.hero-inner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  will-change: transform;\n}\n.hero-name {\n  font-size: 42px;\n  font-weight: 500;\n  letter-spacing: -0.5px;\n  margin-bottom: 10px;\n}\n.hero-sub {\n  font-size: 15px;\n  color: var(--text-sec);\n  margin-bottom: 36px;\n}\n.pills {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 36px;\n  position: relative;\n  z-index: 1;\n}\n.pill {\n  position: relative;\n  background: var(--bg-pill);\n  border: 0.5px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 9px 18px;\n  font-size: 13px;\n  cursor: default;\n}\n.pill-label {\n  color: var(--text-ter);\n}\n.pill-value {\n  font-weight: 600;\n  margin-left: 5px;\n}\n.pill-tooltip {\n  position: absolute;\n  top: calc(100% + 10px);\n  left: 50%;\n  transform: translateX(-50%);\n  width: 260px;\n  background: #2c2c2c;\n  border: 0.5px solid rgba(255, 255, 255, 0.22);\n  border-radius: var(--radius-md);\n  padding: 12px 14px;\n  font-size: 12px;\n  line-height: 1.6;\n  color: var(--text-pri);\n  text-align: left;\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n  z-index: 100;\n  white-space: normal;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.8);\n  isolation: isolate;\n}\n.pill:hover .pill-tooltip {\n  opacity: 1;\n}\n.cta-links {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 14px;\n  font-size: 14px;\n}\n.cta-links a {\n  color: var(--blue);\n  text-decoration: none;\n  transition: opacity 0.15s;\n}\n.cta-links a:hover {\n  opacity: 0.75;\n}\n.cta-sep {\n  color: var(--text-ter);\n}\n.scroll-hint {\n  flex-shrink: 0;\n  text-align: center;\n  font-size: 11px;\n  letter-spacing: 1.5px;\n  color: var(--text-ter);\n  padding: 16px 0 20px;\n  transition: opacity 0.3s ease;\n}\n.scroll-hint.hidden {\n  opacity: 0;\n  pointer-events: none;\n}\n.projects-section {\n  position: sticky;\n  top: 0;\n  min-height: 100vh;\n  z-index: 1;\n  background: var(--bg);\n  box-shadow: 0 -12px 48px rgba(0, 0, 0, 0.6);\n  padding: 48px 32px 64px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.projects-section h2 {\n  text-align: center;\n  font-size: 11px;\n  letter-spacing: 2px;\n  color: var(--text-ter);\n  margin-bottom: 28px;\n}\n.projects {\n  display: flex;\n  gap: 20px;\n  max-width: 960px;\n  width: 100%;\n  margin: 0 auto;\n}\n.card {\n  opacity: 0;\n  transform: translateY(14px);\n}\n.cards-visible .card {\n  animation: fadeUp 0.5s ease backwards;\n  opacity: 1;\n  transform: none;\n}\n.cards-visible .card:nth-child(1) {\n  animation-delay: 0s;\n}\n.cards-visible .card:nth-child(2) {\n  animation-delay: 0.15s;\n}\n.cards-visible .card:nth-child(3) {\n  animation-delay: 0.3s;\n}\n.projects:has(.card:hover) .card {\n  transform: scale(0.95);\n}\n.projects:has(.card:hover) .card:hover {\n  transform: scale(1.1);\n}\n.card {\n  flex: 1;\n  background: var(--bg-card);\n  border: 0.5px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 32px;\n  cursor: pointer;\n  transition: transform 0.3s ease, border-color 0.15s;\n  display: flex;\n  flex-direction: column;\n  aspect-ratio: 1 / 1;\n}\n.card:hover {\n  border-color: rgba(255, 255, 255, 0.18);\n}\na.card {\n  color: inherit;\n  text-decoration: none;\n}\n.card-type {\n  font-size: 11px;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.card-type.blue {\n  color: var(--blue);\n}\n.card-type.green {\n  color: var(--green);\n}\n.card-type.amber {\n  color: var(--amber);\n}\n.card-title {\n  font-size: 20px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.card-desc {\n  font-size: 14px;\n  color: var(--text-sec);\n  line-height: 1.6;\n  flex: 1;\n}\n.tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 24px;\n}\n.tag {\n  font-size: 11px;\n  background: var(--bg-pill);\n  border-radius: 4px;\n  padding: 4px 10px;\n  color: var(--text-ter);\n}\n.reveal {\n  opacity: 0;\n  transform: translateY(14px);\n  transition: opacity 0.5s ease, transform 0.5s ease;\n}\n.reveal.visible {\n  opacity: 1;\n  transform: translateY(0);\n}\n.contact-item.reveal {\n  transition:\n    opacity 0.5s ease,\n    transform 0.5s ease,\n    border-color 0.15s,\n    background 0.15s;\n}\n.contact-section h2.reveal {\n  transition-delay: 0ms;\n}\n.contact-item.reveal:nth-child(1) {\n  transition-delay: 120ms;\n}\n.contact-item.reveal:nth-child(2) {\n  transition-delay: 240ms;\n}\n.source-link.reveal {\n  transition-delay: 360ms;\n}\n.contact-section {\n  position: relative;\n  z-index: 2;\n  background: var(--bg);\n  box-shadow: 0 -12px 48px rgba(0, 0, 0, 0.6);\n  padding: 48px 32px 80px;\n}\n.contact-section h2 {\n  text-align: center;\n  font-size: 11px;\n  letter-spacing: 2px;\n  color: var(--text-ter);\n  margin-bottom: 28px;\n}\n.contact-items {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  max-width: 560px;\n  margin: 0 auto;\n}\n.source-link {\n  display: block;\n  text-align: center;\n  margin-top: 24px;\n  font-size: 12px;\n  color: var(--text-muted, rgba(255,255,255,0.35));\n  text-decoration: none;\n  letter-spacing: 0.5px;\n  transition: color 0.15s;\n}\n.source-link:hover {\n  color: var(--text, rgba(255,255,255,0.7));\n}\n.contact-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex: 1;\n  width: 100%;\n  background: var(--bg-card);\n  border: 0.5px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 10px 14px;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n  text-align: left;\n  color: inherit;\n  font-family: inherit;\n}\n.contact-item:hover {\n  border-color: rgba(255, 255, 255, 0.18);\n  background: #262626;\n}\n.contact-icon {\n  width: 18px;\n  height: 18px;\n  object-fit: contain;\n  flex-shrink: 0;\n  mix-blend-mode: screen;\n  opacity: 0.7;\n}\n.contact-value {\n  font-size: 12px;\n  color: var(--text-sec);\n  flex: 1;\n}\n.copy-icon {\n  color: var(--text-ter);\n  flex-shrink: 0;\n  opacity: 0;\n  transition: opacity 0.15s;\n}\n.contact-item:hover .copy-icon {\n  opacity: 1;\n}\n.toast {\n  position: fixed;\n  bottom: 32px;\n  left: 50%;\n  transform: translateX(-50%) translateY(8px);\n  background: var(--bg-card);\n  border: 0.5px solid rgba(255, 255, 255, 0.12);\n  border-radius: var(--radius-md);\n  padding: 10px 18px;\n  font-size: 13px;\n  color: var(--text-sec);\n  pointer-events: none;\n  opacity: 0;\n  transition: opacity 0.2s ease, transform 0.2s ease;\n  z-index: 100;\n  white-space: nowrap;\n}\n.toast.toast-visible {\n  opacity: 1;\n  transform: translateX(-50%) translateY(0);\n}\n@media (max-width: 640px) {\n  .projects {\n    flex-direction: column;\n  }\n  .hero-name {\n    font-size: 32px;\n  }\n  .contact-items {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], null, { heroInnerRef: [{
    type: ViewChild,
    args: ["heroInner"]
  }], scrollHintRef: [{
    type: ViewChild,
    args: ["scrollHint"]
  }], projectsGridRef: [{
    type: ViewChild,
    args: ["projectsGrid"]
  }], onScroll: [{
    type: HostListener,
    args: ["window:scroll"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/home/home.component.ts", lineNumber: 13 });
})();

// src/app/tetris-replay/tetris-canvas.renderer.ts
var TetrisCanvasRenderer = class {
  ctx;
  cell;
  rows;
  cols;
  pieceColors;
  pieceIds;
  constructor(ctx, cell, rows, cols, pieceColors, pieceIds) {
    this.ctx = ctx;
    this.cell = cell;
    this.rows = rows;
    this.cols = cols;
    this.pieceColors = pieceColors;
    this.pieceIds = pieceIds;
  }
  clearBoard() {
    const { ctx } = this;
    ctx.fillStyle = CANVAS.BG_COLOR;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
  drawBlock(px, py, size, color, fillAlpha) {
    this.ctx.fillStyle = this.withAlpha(color, fillAlpha);
    this.ctx.fillRect(px + 1, py + 1, size - 2, size - 2);
  }
  drawBoard(board) {
    const { cell, rows, cols } = this;
    this.clearBoard();
    this.ctx.stroke();
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const val = board[r][c];
        if (!val)
          continue;
        this.drawBlock(c * cell, r * cell, cell, this.pieceColors[val] ?? CANVAS.FALLBACK_COLOR, 1);
      }
    }
  }
  /**
   * Merges all candidate cells into one unified ghost overlay.
   * Non-chosen cells are drawn at low opacity; the chosen placement on top at higher opacity.
   */
  drawGhosts(frame) {
    const { cell, rows, cols } = this;
    const pieceId = this.pieceIds[frame.piece];
    const baseColor = this.pieceColors[pieceId] ?? CANVAS.FALLBACK_COLOR;
    const chosen = frame.candidates[frame.chosen_idx];
    const seen = Array.from({ length: rows }, () => new Uint8Array(cols));
    const allCells = [];
    for (let i = 0; i < frame.candidates.length; i++) {
      if (i === frame.chosen_idx)
        continue;
      for (const [r, c] of frame.candidates[i].cells) {
        if (!seen[r][c]) {
          seen[r][c] = 1;
          allCells.push([r, c]);
        }
      }
    }
    for (const [r, c] of allCells) {
      this.drawBlock(c * cell, r * cell, cell, baseColor, ANIM.GHOST_BASE_ALPHA);
    }
    for (const [r, c] of chosen.cells) {
      this.drawBlock(c * cell, r * cell, cell, baseColor, ANIM.GHOST_CHOSEN_STATIC_ALPHA);
    }
  }
  /** Parse a CSS hex colour and return it with the given alpha. */
  withAlpha(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }
};

// src/app/tetris-replay/tetris-replay.component.ts
var _c02 = ["boardCanvas"];
var _forTrack0 = ($index, $item) => $item.id;
function TetrisReplayComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span");
    \u0275\u0275text(2, "Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function TetrisReplayComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 42);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 43);
    \u0275\u0275element(3, "path", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "play");
    \u0275\u0275elementEnd()()();
  }
}
function TetrisReplayComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function TetrisReplayComponent_For_33_Template_button_click_0_listener() {
      const g_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.selectedGame = g_r3.id;
      return \u0275\u0275resetView(ctx_r3.loadGame());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const g_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.selectedGame === g_r3.id);
    \u0275\u0275property("disabled", ctx_r3.loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(g_r3.id);
  }
}
function TetrisReplayComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49);
    \u0275\u0275text(5, "pieces placed");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "div", 50);
    \u0275\u0275elementStart(7, "div", 47)(8, "div", 51);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 49);
    \u0275\u0275text(11, "lines cleared");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("run-info-visible", ctx_r3.runInfoVisible);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.replay.metadata.total_pieces);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.replay.metadata.total_lines);
  }
}
var TetrisReplayComponent = class _TetrisReplayComponent {
  http;
  ngZone;
  cdr;
  boardCanvasRef;
  revealDir;
  // ── Layout ─────────────────────────────────────────────────────────────────
  CELL = 28;
  COLS = 10;
  ROWS = 20;
  // ── Piece colours (matte Material Design palette) ─────────────────────────
  PIECE_COLORS = {
    1: "#455A64",
    // I – slate blue-grey
    2: "#FFA000",
    // O – deep amber
    3: "#7B1FA2",
    // T – muted plum
    4: "#388E3C",
    // S – forest green
    5: "#D32F2F",
    // Z – brick red
    6: "#1565C0",
    // J – deep blue
    7: "#E65100"
    // L – dark orange
  };
  PIECE_IDS = {
    I: 1,
    O: 2,
    T: 3,
    S: 4,
    Z: 5,
    J: 6,
    L: 7
  };
  // ── Game selector ──────────────────────────────────────────────────────────
  games = [
    { id: 1, label: "Game 1 \u2014 1205 pieces" },
    { id: 2, label: "Game 2 \u2014 5405 pieces" },
    { id: 3, label: "Game 3 \u2014 662 pieces" },
    { id: 4, label: "Game 4 \u2014 1887 pieces" },
    { id: 5, label: "Game 5 \u2014 299 pieces" }
  ];
  // ── Controls ───────────────────────────────────────────────────────────────
  selectedGame = 3;
  isPlaying = false;
  speed = 5;
  showGhosts = true;
  loading = false;
  runInfoVisible = false;
  // ── Replay state ───────────────────────────────────────────────────────────
  replay = null;
  currentFrameIdx = 0;
  phase = "candidates";
  // ── Stats ──────────────────────────────────────────────────────────────────
  totalFrames = 0;
  // ── Animation state ────────────────────────────────────────────────────────
  anim = { rafId: 0, lastTs: 0, phaseElapsed: 0, staggerRafId: 0 };
  // ── Visibility ────────────────────────────────────────────────────────────
  wasPlayingBeforeHide = false;
  visibilityHandler;
  // ── Canvas renderer ───────────────────────────────────────────────────────
  renderer;
  destroyRef = inject(DestroyRef);
  constructor(http, ngZone, cdr) {
    this.http = http;
    this.ngZone = ngZone;
    this.cdr = cdr;
  }
  ngAfterViewInit() {
    const canvas = this.boardCanvasRef.nativeElement;
    canvas.width = this.COLS * this.CELL;
    canvas.height = this.ROWS * this.CELL;
    this.renderer = new TetrisCanvasRenderer(canvas.getContext("2d"), this.CELL, this.ROWS, this.COLS, this.PIECE_COLORS, this.PIECE_IDS);
    this.loadGame();
    this.initVisibility();
  }
  initVisibility() {
    this.visibilityHandler = () => {
      if (document.hidden) {
        this.wasPlayingBeforeHide = this.isPlaying;
        if (this.isPlaying)
          this.pause();
      } else {
        if (this.wasPlayingBeforeHide)
          this.startPlay();
        this.wasPlayingBeforeHide = false;
      }
    };
    document.addEventListener("visibilitychange", this.visibilityHandler);
  }
  ngOnDestroy() {
    cancelAnimationFrame(this.anim.rafId);
    cancelAnimationFrame(this.anim.staggerRafId);
    document.removeEventListener("visibilitychange", this.visibilityHandler);
  }
  // ── Timing helpers ─────────────────────────────────────────────────────────
  get frameDuration() {
    return ANIM.SPEED_BASE_MS + (10 - this.speed) * ANIM.SPEED_FACTOR_MS;
  }
  get candidateDuration() {
    return this.frameDuration * ANIM.CANDIDATE_PHASE_FRAC;
  }
  get placedDuration() {
    return this.frameDuration * ANIM.PLACED_PHASE_FRAC;
  }
  // ── Controls ───────────────────────────────────────────────────────────────
  loadGame() {
    cancelAnimationFrame(this.anim.rafId);
    this.isPlaying = false;
    this.loading = true;
    if (this.replay) {
      this.runInfoVisible = false;
      this.cdr.markForCheck();
      setTimeout(() => this.doLoad(), UI.LOAD_FADE_DELAY_MS);
    } else {
      this.doLoad();
    }
  }
  doLoad() {
    this.replay = null;
    this.cdr.markForCheck();
    this.http.get(`replays/web_replay_${this.selectedGame}.json`).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (data) => {
        this.replay = data;
        this.currentFrameIdx = 0;
        this.phase = "candidates";
        this.anim.phaseElapsed = 0;
        this.loading = false;
        this.totalFrames = data.frames.length;
        this.renderer.drawBoard(data.frames[0].board_before);
        this.cdr.markForCheck();
        setTimeout(() => {
          this.runInfoVisible = true;
          this.cdr.markForCheck();
          this.revealDir.observeAll();
          this.animateCandidates();
          this.startPlay();
        });
      },
      error: () => {
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
  togglePlay() {
    if (!this.replay)
      return;
    this.isPlaying ? this.pause() : this.startPlay();
  }
  onBoardClick() {
    this.togglePlay();
  }
  onGhostToggle() {
    this.renderFrame();
  }
  // ── Internal ───────────────────────────────────────────────────────────────
  startPlay() {
    this.isPlaying = true;
    this.anim.lastTs = 0;
    this.cdr.markForCheck();
    this.ngZone.runOutsideAngular(() => {
      this.anim.rafId = requestAnimationFrame((t) => this.tick(t));
    });
  }
  pause() {
    cancelAnimationFrame(this.anim.rafId);
    this.isPlaying = false;
    this.cdr.markForCheck();
  }
  tick(ts) {
    if (!this.isPlaying || !this.replay)
      return;
    if (this.anim.lastTs === 0)
      this.anim.lastTs = ts;
    const dt = ts - this.anim.lastTs;
    this.anim.lastTs = ts;
    this.anim.phaseElapsed += dt;
    const threshold = this.phase === "candidates" ? this.candidateDuration : this.placedDuration;
    if (this.anim.phaseElapsed >= threshold) {
      this.anim.phaseElapsed -= threshold;
      if (this.phase === "candidates") {
        this.phase = "placed";
        this.animateTransition();
      } else {
        this.currentFrameIdx++;
        if (this.currentFrameIdx >= this.replay.frames.length) {
          this.currentFrameIdx = this.replay.frames.length - 1;
          this.ngZone.run(() => {
            this.isPlaying = false;
            this.cdr.markForCheck();
          });
          return;
        }
        this.phase = "candidates";
        this.animateTransition();
        this.ngZone.run(() => {
          this.cdr.markForCheck();
        });
      }
    }
    this.anim.rafId = requestAnimationFrame((t) => this.tick(t));
  }
  /** Dispatches to the appropriate staggered animation for the current phase. */
  animateTransition() {
    cancelAnimationFrame(this.anim.staggerRafId);
    if (this.phase === "placed") {
      this.animatePlaced();
    } else {
      this.animateCandidates();
    }
  }
  /** Placed phase: cleared rows fade out while the stack above drifts down. */
  animatePlaced() {
    if (!this.replay)
      return;
    const frame = this.replay.frames[this.currentFrameIdx];
    if (frame.lines_cleared_step === 0) {
      this.renderFrame();
      return;
    }
    const pieceId = this.PIECE_IDS[frame.piece];
    const chosen = frame.candidates[frame.chosen_idx];
    const boardWithPiece = frame.board_before.map((row) => [...row]);
    for (const [r, c] of chosen.cells)
      boardWithPiece[r][c] = pieceId;
    const clearedRows = [];
    for (let r = 0; r < this.ROWS; r++) {
      if (boardWithPiece[r].every((v) => v !== 0))
        clearedRows.push(r);
    }
    if (clearedRows.length === 0) {
      this.renderFrame();
      return;
    }
    const C = this.CELL;
    const duration = this.placedDuration;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 2);
      this.renderer.clearBoard();
      for (let r = 0; r < this.ROWS; r++) {
        if (clearedRows.includes(r))
          continue;
        const shift = clearedRows.filter((cr) => cr > r).length;
        const y = r * C + shift * C * ease;
        for (let c = 0; c < this.COLS; c++) {
          const val = boardWithPiece[r][c];
          if (!val)
            continue;
          this.renderer.drawBlock(c * C, y, C, this.PIECE_COLORS[val] ?? CANVAS.FALLBACK_COLOR, 1);
        }
      }
      const fadeAlpha = 1 - ease;
      if (fadeAlpha > 0) {
        for (const r of clearedRows) {
          for (let c = 0; c < this.COLS; c++) {
            const val = boardWithPiece[r][c];
            if (!val)
              continue;
            this.renderer.drawBlock(c * C, r * C, C, this.PIECE_COLORS[val] ?? CANVAS.FALLBACK_COLOR, fadeAlpha);
          }
        }
      }
      if (t >= 1)
        return;
      this.anim.staggerRafId = requestAnimationFrame(tick);
    };
    this.anim.staggerRafId = requestAnimationFrame(tick);
  }
  /**
   * Candidates phase — two sub-phases:
   *   1. Sweep all ghost candidates in left→right over SWEEP_IN_FRAC of candidateDuration
   *   2. Fade out non-chosen candidates over FADE_OUT_FRAC, leaving only the chosen
   */
  animateCandidates() {
    if (!this.replay)
      return;
    const frame = this.replay.frames[this.currentFrameIdx];
    const C = this.CELL;
    this.renderer.drawBoard(frame.board_before);
    if (!this.showGhosts)
      return;
    const pieceId = this.PIECE_IDS[frame.piece];
    const baseColor = this.PIECE_COLORS[pieceId] ?? CANVAS.FALLBACK_COLOR;
    const chosen = frame.candidates[frame.chosen_idx];
    const nonChosenSeen = /* @__PURE__ */ new Set();
    const byCol = Array.from({ length: this.COLS }, () => []);
    for (let i = 0; i < frame.candidates.length; i++) {
      if (i === frame.chosen_idx)
        continue;
      for (const [r, c] of frame.candidates[i].cells) {
        const key = `${r},${c}`;
        if (!nonChosenSeen.has(key)) {
          nonChosenSeen.add(key);
          byCol[c].push({ r, isChosen: false });
        }
      }
    }
    for (const [r, c] of chosen.cells) {
      byCol[c].push({ r, isChosen: true });
    }
    const totalDuration = this.candidateDuration;
    const start = performance.now();
    const tick = (now) => {
      const tTotal = Math.min((now - start) / totalDuration, 1);
      this.renderer.drawBoard(frame.board_before);
      if (tTotal <= ANIM.SWEEP_IN_FRAC) {
        const tSweep = tTotal / ANIM.SWEEP_IN_FRAC;
        const visibleCols = Math.floor(tSweep * this.COLS);
        for (let c = 0; c < visibleCols; c++) {
          for (const { r } of byCol[c]) {
            this.renderer.drawBlock(c * C, r * C, C, baseColor, ANIM.GHOST_BASE_ALPHA);
          }
        }
      } else {
        const tFade = (tTotal - ANIM.SWEEP_IN_FRAC) / ANIM.FADE_OUT_FRAC;
        const nonAlpha = (1 - tFade) * ANIM.GHOST_BASE_ALPHA;
        const chosenFillAlpha = ANIM.GHOST_CHOSEN_INIT_ALPHA + tFade * ANIM.GHOST_CHOSEN_DELTA_ALPHA;
        if (nonAlpha > 0) {
          for (let c = 0; c < this.COLS; c++) {
            for (const { r, isChosen } of byCol[c]) {
              if (!isChosen) {
                this.renderer.drawBlock(c * C, r * C, C, baseColor, nonAlpha);
              }
            }
          }
        }
        for (const [r, c] of chosen.cells) {
          this.renderer.drawBlock(c * C, r * C, C, baseColor, chosenFillAlpha);
        }
      }
      if (tTotal < 1)
        this.anim.staggerRafId = requestAnimationFrame(tick);
    };
    this.anim.staggerRafId = requestAnimationFrame(tick);
  }
  // ── Rendering ──────────────────────────────────────────────────────────────
  renderFrame() {
    if (!this.replay)
      return;
    const frame = this.replay.frames[this.currentFrameIdx];
    const board = this.phase === "placed" ? frame.board_after : frame.board_before;
    this.renderer.drawBoard(board);
    if (this.showGhosts && this.phase === "candidates") {
      this.renderer.drawGhosts(frame);
    }
  }
  static \u0275fac = function TetrisReplayComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TetrisReplayComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TetrisReplayComponent, selectors: [["app-tetris-replay"]], viewQuery: function TetrisReplayComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5)(ScrollRevealDirective, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.boardCanvasRef = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.revealDir = _t.first);
    }
  }, decls: 136, vars: 7, consts: [["boardCanvas", ""], ["routerLink", "/", 1, "nav-logo"], [1, "nav-links"], ["routerLink", "/"], ["href", "#viewer"], ["href", "#how-it-works"], ["href", "https://github.com/RadiantVirtue", "target", "_blank", "rel", "noopener"], ["scrollReveal", ""], [1, "case-header"], [1, "case-type", "reveal"], [1, "case-title", "reveal"], [1, "case-sub", "reveal"], ["id", "viewer", 1, "viewer-wrap"], [1, "board-wrap", "reveal", 3, "click"], [1, "loading-overlay"], [1, "pause-overlay"], [1, "controls-strip", "reveal"], [1, "game-pills"], [1, "game-pill", 3, "active", "disabled"], [1, "ctrl-speed"], [1, "ctrl-label"], ["type", "range", "min", "1", "max", "10", 1, "speed-slider", 3, "ngModelChange", "ngModel"], [1, "ctrl-ghost"], ["type", "checkbox", 3, "ngModelChange", "change", "ngModel"], [1, "viewer-hint", "reveal"], [1, "run-info", 3, "run-info-visible"], ["id", "how-it-works", 1, "impl-section"], [1, "impl-eyebrow"], [1, "case-cards"], [1, "case-card", "reveal"], [1, "card-type", "blue"], [1, "card-title"], [1, "card-body"], [1, "card-type", "green"], [1, "arch-diagram"], [1, "arch-node", "input"], [1, "arch-dim"], [1, "arch-lbl"], [1, "arch-arrow"], [1, "arch-node", "hidden"], [1, "arch-node", "output"], [1, "card-type", "amber"], [1, "pause-pill"], ["width", "12", "height", "14", "viewBox", "0 0 12 14", "fill", "none"], ["d", "M1 1L11 7L1 13V1Z", "fill", "currentColor"], [1, "game-pill", 3, "click", "disabled"], [1, "run-info"], [1, "run-info-item"], [1, "run-info-big"], [1, "run-info-desc"], [1, "run-info-divider"], [1, "run-info-big", "accent"]], template: function TetrisReplayComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "nav")(1, "a", 1);
      \u0275\u0275text(2, "RK");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "ul", 2)(4, "li")(5, "a", 3);
      \u0275\u0275text(6, "\u2190 back");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "li")(8, "a", 4);
      \u0275\u0275text(9, "viewer");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li")(11, "a", 5);
      \u0275\u0275text(12, "how it works");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "a", 6);
      \u0275\u0275text(15, "GitHub \u2197");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(16, "main", 7)(17, "header", 8)(18, "div", 9);
      \u0275\u0275text(19, "CASE STUDY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "h1", 10);
      \u0275\u0275text(21, "Tetris DQN Agent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "p", 11);
      \u0275\u0275text(23, "A deep Q-network trained with prioritised experience replay and an after-state representation. Five recorded games, live Q-value visualisation.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 12)(25, "div", 13);
      \u0275\u0275listener("click", function TetrisReplayComponent_Template_div_click_25_listener() {
        return ctx.onBoardClick();
      });
      \u0275\u0275conditionalCreate(26, TetrisReplayComponent_Conditional_26_Template, 3, 0, "div", 14);
      \u0275\u0275conditionalCreate(27, TetrisReplayComponent_Conditional_27_Template, 6, 0, "div", 15);
      \u0275\u0275element(28, "canvas", null, 0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "div", 16)(31, "div", 17);
      \u0275\u0275repeaterCreate(32, TetrisReplayComponent_For_33_Template, 2, 4, "button", 18, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "label", 19)(35, "span", 20);
      \u0275\u0275text(36, "SPEED");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function TetrisReplayComponent_Template_input_ngModelChange_37_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.speed, $event) || (ctx.speed = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "label", 22)(39, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function TetrisReplayComponent_Template_input_ngModelChange_39_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.showGhosts, $event) || (ctx.showGhosts = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("change", function TetrisReplayComponent_Template_input_change_39_listener() {
        return ctx.onGhostToggle();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span");
      \u0275\u0275text(41, "Ghosts");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(42, "p", 24);
      \u0275\u0275text(43, "click board to pause \xB7 ghost outline = placement considerations");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(44, TetrisReplayComponent_Conditional_44_Template, 12, 4, "div", 25);
      \u0275\u0275elementStart(45, "section", 26)(46, "div", 27);
      \u0275\u0275text(47, "HOW IT WORKS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 28)(49, "article", 29)(50, "div", 30);
      \u0275\u0275text(51, "REPRESENTATION");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "h3", 31);
      \u0275\u0275text(53, "After-State Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 32)(55, "p");
      \u0275\u0275text(56, "Rather than feeding the raw board into the network, the agent uses an ");
      \u0275\u0275elementStart(57, "strong");
      \u0275\u0275text(58, "after-state formulation");
      \u0275\u0275elementEnd();
      \u0275\u0275text(59, ". For every valid placement it simulates the drop and computes a 4-feature summary:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "ul")(61, "li")(62, "strong");
      \u0275\u0275text(63, "Lines cleared");
      \u0275\u0275elementEnd();
      \u0275\u0275text(64, " \xF7 4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "li")(66, "strong");
      \u0275\u0275text(67, "Holes");
      \u0275\u0275elementEnd();
      \u0275\u0275text(68, " \xF7 40");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "li")(70, "strong");
      \u0275\u0275text(71, "Bumpiness");
      \u0275\u0275elementEnd();
      \u0275\u0275text(72, " \xF7 40");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "li")(74, "strong");
      \u0275\u0275text(75, "Stack height");
      \u0275\u0275elementEnd();
      \u0275\u0275text(76, " \xF7 200");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "p");
      \u0275\u0275text(78, 'This collapses "state + action \u2192 value" into "resulting state \u2192 value" - a far simpler learning target.');
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(79, "article", 29)(80, "div", 33);
      \u0275\u0275text(81, "ARCHITECTURE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "h3", 31);
      \u0275\u0275text(83, "Policy Network");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 32)(85, "p");
      \u0275\u0275text(86, "A small fully-connected feedforward network maps the 4 features to a single scalar Q-value.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 34)(88, "div", 35)(89, "span", 36);
      \u0275\u0275text(90, "4");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "span", 37);
      \u0275\u0275text(92, "Input");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 38);
      \u0275\u0275text(94, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 39)(96, "span", 36);
      \u0275\u0275text(97, "64");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "span", 37);
      \u0275\u0275text(99, "FC + ReLU");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div", 38);
      \u0275\u0275text(101, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "div", 39)(103, "span", 36);
      \u0275\u0275text(104, "64");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "span", 37);
      \u0275\u0275text(106, "FC + ReLU");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 38);
      \u0275\u0275text(108, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 40)(110, "span", 36);
      \u0275\u0275text(111, "Q");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "span", 37);
      \u0275\u0275text(113, "Output");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(114, "p");
      \u0275\u0275text(115, "At inference the agent enumerates all valid after-states, runs a batched forward pass, and greedily picks the ");
      \u0275\u0275elementStart(116, "strong");
      \u0275\u0275text(117, "highest Q-value");
      \u0275\u0275elementEnd();
      \u0275\u0275text(118, " placement.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(119, "article", 29)(120, "div", 41);
      \u0275\u0275text(121, "TRAINING");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "h3", 31);
      \u0275\u0275text(123, "Prioritised Experience Replay");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "div", 32)(125, "p");
      \u0275\u0275text(126, "Transitions are stored in a ");
      \u0275\u0275elementStart(127, "strong");
      \u0275\u0275text(128, "priority queue");
      \u0275\u0275elementEnd();
      \u0275\u0275text(129, " keyed by TD error - the gap between predicted Q and the Bellman target. High-error transitions are sampled more often.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "p")(131, "strong");
      \u0275\u0275text(132, "Importance-sampling weights");
      \u0275\u0275elementEnd();
      \u0275\u0275text(133, " correct the resulting bias, and priorities are refreshed after each update.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "p");
      \u0275\u0275text(135, "This is critical in Tetris: line-clearing events are rare, so uniform sampling would almost never encounter them.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(25);
      \u0275\u0275classProp("paused", !ctx.isPlaying);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.isPlaying && ctx.replay && !ctx.loading ? 27 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.games);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.speed);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.showGhosts);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.replay ? 44 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgModel, RouterLink, ScrollRevealDirective], styles: ['\n\n[_nghost-%COMP%] {\n  --bg: #1a1a1a;\n  --bg-card: #212121;\n  --bg-pill: #2a2a2a;\n  --border: rgba(255,255,255,0.08);\n  --accent-border: rgba(61,255,143,0.15);\n  --text-pri: #e8e8e8;\n  --text-sec: #888;\n  --text-ter: #555;\n  --accent: #3dff8f;\n  --blue: #6b9fff;\n  --green: #3dff8f;\n  --amber: #e6a817;\n  --nav-height: 57px;\n  display: block;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  background: var(--bg);\n  color: var(--text-pri);\n}\nnav[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px 32px;\n  border-bottom: 0.5px solid var(--border);\n  background: var(--bg);\n}\n.nav-logo[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  color: var(--text-pri);\n  text-decoration: none;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 28px;\n  font-size: 13px;\n  color: var(--text-sec);\n  list-style: none;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--text-pri);\n}\nmain[_ngcontent-%COMP%] {\n  padding-top: var(--nav-height);\n}\n.case-header[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 72px 32px 56px;\n  text-align: center;\n}\n.case-type[_ngcontent-%COMP%] {\n  font-size: 11px;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n  color: var(--amber);\n  margin-bottom: 16px;\n}\n.case-title[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 500;\n  letter-spacing: -0.5px;\n  margin-bottom: 14px;\n}\n.case-sub[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-sec);\n  line-height: 1.7;\n}\n.viewer-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 32px 12px;\n  gap: 14px;\n}\n.board-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  line-height: 0;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.loading-overlay[_ngcontent-%COMP%], \n.pause-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  z-index: 2;\n}\n.loading-overlay[_ngcontent-%COMP%] {\n  background: rgba(8, 8, 8, 0.82);\n  font-size: 13px;\n  letter-spacing: 1px;\n  color: var(--text-sec);\n}\n.pause-overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.35);\n}\n.pause-pill[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 18px;\n  border: 0.5px solid rgba(255, 255, 255, 0.18);\n  border-radius: 999px;\n  background: rgba(20, 20, 20, 0.85);\n  color: var(--text-sec);\n  font-size: 12px;\n  letter-spacing: 1px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\ncanvas[_ngcontent-%COMP%] {\n  display: block;\n}\n.controls-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  justify-content: center;\n  width: max-content;\n}\n.game-pills[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  background: var(--bg-pill);\n  border: 0.5px solid var(--border);\n  border-radius: 8px;\n  padding: 4px;\n}\n.game-pill[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  border-radius: 5px;\n  color: var(--text-ter);\n  font-size: 13px;\n  font-weight: 500;\n  padding: 5px 12px;\n  cursor: pointer;\n  transition: background 0.2s ease, color 0.2s ease;\n  font-family: inherit;\n}\n.game-pill[_ngcontent-%COMP%]:hover:not(:disabled) {\n  color: var(--text-pri);\n  background: rgba(255, 255, 255, 0.06);\n}\n.game-pill.active[_ngcontent-%COMP%] {\n  background: rgba(61, 255, 143, 0.12);\n  color: var(--accent);\n}\n.game-pill[_ngcontent-%COMP%]:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ctrl-speed[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ctrl-label[_ngcontent-%COMP%] {\n  font-size: 10px;\n  letter-spacing: 1.2px;\n  color: var(--text-ter);\n  font-weight: 600;\n}\n.speed-slider[_ngcontent-%COMP%] {\n  width: 88px;\n  accent-color: var(--accent);\n}\n.ctrl-ghost[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: var(--text-sec);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ctrl-ghost[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  accent-color: var(--accent);\n  cursor: pointer;\n}\n.viewer-hint[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-ter);\n  letter-spacing: 0.3px;\n}\n.impl-section[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 32px 120px;\n  border-top: 0.5px solid var(--border);\n}\n.impl-eyebrow[_ngcontent-%COMP%] {\n  font-size: 11px;\n  letter-spacing: 2px;\n  color: var(--text-ter);\n  margin: 48px 0 48px;\n}\n.case-cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n.case-cards[_ngcontent-%COMP%]:has(.case-card:hover)   .case-card[_ngcontent-%COMP%] {\n  transform: scale(0.95);\n}\n.case-cards[_ngcontent-%COMP%]:has(.case-card:hover)   .case-card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.case-card[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--bg-card);\n  border: 0.5px solid var(--border);\n  border-radius: 12px;\n  padding: 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: transform 0.3s ease, border-color 0.15s;\n  cursor: default;\n}\n.case-card[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, 0.18);\n}\n.card-type[_ngcontent-%COMP%] {\n  font-size: 10px;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n}\n.card-type.blue[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n.card-type.green[_ngcontent-%COMP%] {\n  color: var(--green);\n}\n.card-type.amber[_ngcontent-%COMP%] {\n  color: var(--amber);\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-weight: 600;\n  margin: 0;\n}\n.card-body[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-sec);\n  line-height: 1.75;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.card-body[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.card-body[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-pri);\n}\n.arch-diagram[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 12px;\n  background: var(--bg-pill);\n  border-radius: 8px;\n  overflow-x: auto;\n}\n.arch-node[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.arch-dim[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n}\n.arch-lbl[_ngcontent-%COMP%] {\n  font-size: 9px;\n  letter-spacing: 0.5px;\n  color: var(--text-ter);\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.arch-node.input[_ngcontent-%COMP%]   .arch-dim[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n.arch-node.hidden[_ngcontent-%COMP%]   .arch-dim[_ngcontent-%COMP%] {\n  color: var(--amber);\n}\n.arch-node.output[_ngcontent-%COMP%]   .arch-dim[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.arch-arrow[_ngcontent-%COMP%] {\n  color: var(--text-ter);\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.reveal[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: translateY(28px);\n  transition: opacity 0.65s ease, transform 0.65s ease;\n}\n.reveal.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.case-title.reveal[_ngcontent-%COMP%] {\n  transition-delay: 80ms;\n}\n.case-sub.reveal[_ngcontent-%COMP%] {\n  transition-delay: 160ms;\n}\n.controls-strip.reveal[_ngcontent-%COMP%] {\n  transition-delay: 100ms;\n}\n.viewer-hint.reveal[_ngcontent-%COMP%] {\n  transition-delay: 180ms;\n}\n.case-card.reveal[_ngcontent-%COMP%]:nth-child(2) {\n  transition-delay: 100ms;\n}\n.case-card.reveal[_ngcontent-%COMP%]:nth-child(3) {\n  transition-delay: 200ms;\n}\n.run-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 48px;\n  padding: 48px 32px 64px;\n  opacity: 0;\n  transition: opacity 0.65s ease;\n}\n.run-info.run-info-visible[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.run-info-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.run-info-big[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  letter-spacing: -2px;\n  line-height: 1;\n  color: var(--text-pri);\n}\n.run-info-big.accent[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.run-info-desc[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-ter);\n  margin-top: 7px;\n  letter-spacing: 0.5px;\n}\n.run-info-divider[_ngcontent-%COMP%] {\n  width: 0.5px;\n  height: 40px;\n  background: var(--border);\n}\n@media (max-width: 700px) {\n  .case-cards[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .case-title[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=tetris-replay.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TetrisReplayComponent, [{
    type: Component,
    args: [{ selector: "app-tetris-replay", standalone: true, imports: [FormsModule, RouterLink, ScrollRevealDirective], changeDetection: ChangeDetectionStrategy.OnPush, template: '<nav>\n  <a routerLink="/" class="nav-logo">RK</a>\n  <ul class="nav-links">\n    <li><a routerLink="/">\u2190 back</a></li>\n    <li><a href="#viewer">viewer</a></li>\n    <li><a href="#how-it-works">how it works</a></li>\n    <li><a href="https://github.com/RadiantVirtue" target="_blank" rel="noopener">GitHub \u2197</a></li>\n  </ul>\n</nav>\n\n<main scrollReveal>\n\n  <!-- \u2550\u2550 Case header \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <header class="case-header">\n    <div class="case-type reveal">CASE STUDY</div>\n    <h1 class="case-title reveal">Tetris DQN Agent</h1>\n    <p class="case-sub reveal">A deep Q-network trained with prioritised experience replay and an after-state representation. Five recorded games, live Q-value visualisation.</p>\n  </header>\n\n  <!-- \u2550\u2550 Board viewer \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <div class="viewer-wrap" id="viewer">\n    <div class="board-wrap reveal" (click)="onBoardClick()" [class.paused]="!isPlaying">\n      @if (loading) { <div class="loading-overlay"><span>Loading\u2026</span></div> }\n      @if (!isPlaying && replay && !loading) {\n        <div class="pause-overlay">\n          <div class="pause-pill">\n            <svg width="12" height="14" viewBox="0 0 12 14" fill="none">\n              <path d="M1 1L11 7L1 13V1Z" fill="currentColor"/>\n            </svg>\n            <span>play</span>\n          </div>\n        </div>\n      }\n      <canvas #boardCanvas></canvas>\n    </div>\n\n    <!-- Controls strip -->\n    <div class="controls-strip reveal">\n      <div class="game-pills">\n        @for (g of games; track g.id) {\n          <button\n            class="game-pill"\n            [class.active]="selectedGame === g.id"\n            [disabled]="loading"\n            (click)="selectedGame = g.id; loadGame()"\n          >{{ g.id }}</button>\n        }\n      </div>\n\n      <label class="ctrl-speed">\n        <span class="ctrl-label">SPEED</span>\n        <input type="range" [(ngModel)]="speed" min="1" max="10" class="speed-slider" />\n      </label>\n\n      <label class="ctrl-ghost">\n        <input type="checkbox" [(ngModel)]="showGhosts" (change)="onGhostToggle()" />\n        <span>Ghosts</span>\n      </label>\n    </div>\n\n    <p class="viewer-hint reveal">click board to pause \xB7 ghost outline = placement considerations</p>\n  </div>\n\n  <!-- \u2550\u2550 Run info \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  @if (replay) { <div class="run-info" [class.run-info-visible]="runInfoVisible">\n    <div class="run-info-item">\n      <div class="run-info-big">{{ replay.metadata.total_pieces }}</div>\n      <div class="run-info-desc">pieces placed</div>\n    </div>\n    <div class="run-info-divider"></div>\n    <div class="run-info-item">\n      <div class="run-info-big accent">{{ replay.metadata.total_lines }}</div>\n      <div class="run-info-desc">lines cleared</div>\n    </div>\n  </div> }\n\n\n  <!-- \u2550\u2550 How it works \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\n  <section class="impl-section" id="how-it-works">\n    <div class="impl-eyebrow">HOW IT WORKS</div>\n\n    <div class="case-cards">\n\n      <article class="case-card reveal">\n        <div class="card-type blue">REPRESENTATION</div>\n        <h3 class="card-title">After-State Features</h3>\n        <div class="card-body">\n          <p>Rather than feeding the raw board into the network, the agent uses an <strong>after-state formulation</strong>. For every valid placement it simulates the drop and computes a 4-feature summary:</p>\n          <ul>\n            <li><strong>Lines cleared</strong> \xF7 4</li>\n            <li><strong>Holes</strong> \xF7 40</li>\n            <li><strong>Bumpiness</strong> \xF7 40</li>\n            <li><strong>Stack height</strong> \xF7 200</li>\n          </ul>\n          <p>This collapses "state + action \u2192 value" into "resulting state \u2192 value" - a far simpler learning target.</p>\n        </div>\n      </article>\n\n      <article class="case-card reveal">\n        <div class="card-type green">ARCHITECTURE</div>\n        <h3 class="card-title">Policy Network</h3>\n        <div class="card-body">\n          <p>A small fully-connected feedforward network maps the 4 features to a single scalar Q-value.</p>\n          <div class="arch-diagram">\n            <div class="arch-node input"><span class="arch-dim">4</span><span class="arch-lbl">Input</span></div>\n            <div class="arch-arrow">\u2192</div>\n            <div class="arch-node hidden"><span class="arch-dim">64</span><span class="arch-lbl">FC + ReLU</span></div>\n            <div class="arch-arrow">\u2192</div>\n            <div class="arch-node hidden"><span class="arch-dim">64</span><span class="arch-lbl">FC + ReLU</span></div>\n            <div class="arch-arrow">\u2192</div>\n            <div class="arch-node output"><span class="arch-dim">Q</span><span class="arch-lbl">Output</span></div>\n          </div>\n          <p>At inference the agent enumerates all valid after-states, runs a batched forward pass, and greedily picks the <strong>highest Q-value</strong> placement.</p>\n        </div>\n      </article>\n\n      <article class="case-card reveal">\n        <div class="card-type amber">TRAINING</div>\n        <h3 class="card-title">Prioritised Experience Replay</h3>\n        <div class="card-body">\n          <p>Transitions are stored in a <strong>priority queue</strong> keyed by TD error - the gap between predicted Q and the Bellman target. High-error transitions are sampled more often.</p>\n          <p><strong>Importance-sampling weights</strong> correct the resulting bias, and priorities are refreshed after each update.</p>\n          <p>This is critical in Tetris: line-clearing events are rare, so uniform sampling would almost never encounter them.</p>\n        </div>\n      </article>\n\n    </div>\n  </section>\n\n</main>\n', styles: ['/* src/app/tetris-replay/tetris-replay.component.css */\n:host {\n  --bg: #1a1a1a;\n  --bg-card: #212121;\n  --bg-pill: #2a2a2a;\n  --border: rgba(255,255,255,0.08);\n  --accent-border: rgba(61,255,143,0.15);\n  --text-pri: #e8e8e8;\n  --text-sec: #888;\n  --text-ter: #555;\n  --accent: #3dff8f;\n  --blue: #6b9fff;\n  --green: #3dff8f;\n  --amber: #e6a817;\n  --nav-height: 57px;\n  display: block;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n  background: var(--bg);\n  color: var(--text-pri);\n}\nnav {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 18px 32px;\n  border-bottom: 0.5px solid var(--border);\n  background: var(--bg);\n}\n.nav-logo {\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  color: var(--text-pri);\n  text-decoration: none;\n}\n.nav-links {\n  display: flex;\n  gap: 28px;\n  font-size: 13px;\n  color: var(--text-sec);\n  list-style: none;\n}\n.nav-links a {\n  color: inherit;\n  text-decoration: none;\n  transition: color 0.15s;\n}\n.nav-links a:hover {\n  color: var(--text-pri);\n}\nmain {\n  padding-top: var(--nav-height);\n}\n.case-header {\n  max-width: 600px;\n  margin: 0 auto;\n  padding: 72px 32px 56px;\n  text-align: center;\n}\n.case-type {\n  font-size: 11px;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n  color: var(--amber);\n  margin-bottom: 16px;\n}\n.case-title {\n  font-size: 40px;\n  font-weight: 500;\n  letter-spacing: -0.5px;\n  margin-bottom: 14px;\n}\n.case-sub {\n  font-size: 14px;\n  color: var(--text-sec);\n  line-height: 1.7;\n}\n.viewer-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 32px 12px;\n  gap: 14px;\n}\n.board-wrap {\n  position: relative;\n  cursor: pointer;\n  line-height: 0;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.loading-overlay,\n.pause-overlay {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4px;\n  z-index: 2;\n}\n.loading-overlay {\n  background: rgba(8, 8, 8, 0.82);\n  font-size: 13px;\n  letter-spacing: 1px;\n  color: var(--text-sec);\n}\n.pause-overlay {\n  background: rgba(0, 0, 0, 0.35);\n}\n.pause-pill {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 8px 18px;\n  border: 0.5px solid rgba(255, 255, 255, 0.18);\n  border-radius: 999px;\n  background: rgba(20, 20, 20, 0.85);\n  color: var(--text-sec);\n  font-size: 12px;\n  letter-spacing: 1px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\ncanvas {\n  display: block;\n}\n.controls-strip {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  justify-content: center;\n  width: max-content;\n}\n.game-pills {\n  display: flex;\n  gap: 6px;\n  background: var(--bg-pill);\n  border: 0.5px solid var(--border);\n  border-radius: 8px;\n  padding: 4px;\n}\n.game-pill {\n  background: transparent;\n  border: none;\n  border-radius: 5px;\n  color: var(--text-ter);\n  font-size: 13px;\n  font-weight: 500;\n  padding: 5px 12px;\n  cursor: pointer;\n  transition: background 0.2s ease, color 0.2s ease;\n  font-family: inherit;\n}\n.game-pill:hover:not(:disabled) {\n  color: var(--text-pri);\n  background: rgba(255, 255, 255, 0.06);\n}\n.game-pill.active {\n  background: rgba(61, 255, 143, 0.12);\n  color: var(--accent);\n}\n.game-pill:disabled {\n  opacity: 0.4;\n  cursor: default;\n}\n.ctrl-speed {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.ctrl-label {\n  font-size: 10px;\n  letter-spacing: 1.2px;\n  color: var(--text-ter);\n  font-weight: 600;\n}\n.speed-slider {\n  width: 88px;\n  accent-color: var(--accent);\n}\n.ctrl-ghost {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  color: var(--text-sec);\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.ctrl-ghost input {\n  accent-color: var(--accent);\n  cursor: pointer;\n}\n.viewer-hint {\n  font-size: 11px;\n  color: var(--text-ter);\n  letter-spacing: 0.3px;\n}\n.impl-section {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 0 32px 120px;\n  border-top: 0.5px solid var(--border);\n}\n.impl-eyebrow {\n  font-size: 11px;\n  letter-spacing: 2px;\n  color: var(--text-ter);\n  margin: 48px 0 48px;\n}\n.case-cards {\n  display: flex;\n  gap: 20px;\n}\n.case-cards:has(.case-card:hover) .case-card {\n  transform: scale(0.95);\n}\n.case-cards:has(.case-card:hover) .case-card:hover {\n  transform: scale(1.1);\n}\n.case-card {\n  flex: 1;\n  background: var(--bg-card);\n  border: 0.5px solid var(--border);\n  border-radius: 12px;\n  padding: 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: transform 0.3s ease, border-color 0.15s;\n  cursor: default;\n}\n.case-card:hover {\n  border-color: rgba(255, 255, 255, 0.18);\n}\n.card-type {\n  font-size: 10px;\n  letter-spacing: 1.5px;\n  font-weight: 600;\n}\n.card-type.blue {\n  color: var(--blue);\n}\n.card-type.green {\n  color: var(--green);\n}\n.card-type.amber {\n  color: var(--amber);\n}\n.card-title {\n  font-size: 17px;\n  font-weight: 600;\n  margin: 0;\n}\n.card-body {\n  font-size: 13px;\n  color: var(--text-sec);\n  line-height: 1.75;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.card-body ul {\n  padding-left: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.card-body strong {\n  color: var(--text-pri);\n}\n.arch-diagram {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 12px;\n  background: var(--bg-pill);\n  border-radius: 8px;\n  overflow-x: auto;\n}\n.arch-node {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  flex-shrink: 0;\n}\n.arch-dim {\n  font-size: 18px;\n  font-weight: 700;\n  font-family:\n    "SF Mono",\n    "Fira Code",\n    monospace;\n}\n.arch-lbl {\n  font-size: 9px;\n  letter-spacing: 0.5px;\n  color: var(--text-ter);\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.arch-node.input .arch-dim {\n  color: var(--blue);\n}\n.arch-node.hidden .arch-dim {\n  color: var(--amber);\n}\n.arch-node.output .arch-dim {\n  color: var(--accent);\n}\n.arch-arrow {\n  color: var(--text-ter);\n  font-size: 16px;\n  flex-shrink: 0;\n}\n.reveal {\n  opacity: 0;\n  transform: translateY(28px);\n  transition: opacity 0.65s ease, transform 0.65s ease;\n}\n.reveal.visible {\n  opacity: 1;\n  transform: translateY(0);\n}\n.case-title.reveal {\n  transition-delay: 80ms;\n}\n.case-sub.reveal {\n  transition-delay: 160ms;\n}\n.controls-strip.reveal {\n  transition-delay: 100ms;\n}\n.viewer-hint.reveal {\n  transition-delay: 180ms;\n}\n.case-card.reveal:nth-child(2) {\n  transition-delay: 100ms;\n}\n.case-card.reveal:nth-child(3) {\n  transition-delay: 200ms;\n}\n.run-info {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 48px;\n  padding: 48px 32px 64px;\n  opacity: 0;\n  transition: opacity 0.65s ease;\n}\n.run-info.run-info-visible {\n  opacity: 1;\n}\n.run-info-item {\n  text-align: center;\n}\n.run-info-big {\n  font-size: 48px;\n  font-weight: 700;\n  letter-spacing: -2px;\n  line-height: 1;\n  color: var(--text-pri);\n}\n.run-info-big.accent {\n  color: var(--accent);\n}\n.run-info-desc {\n  font-size: 11px;\n  color: var(--text-ter);\n  margin-top: 7px;\n  letter-spacing: 0.5px;\n}\n.run-info-divider {\n  width: 0.5px;\n  height: 40px;\n  background: var(--border);\n}\n@media (max-width: 700px) {\n  .case-cards {\n    flex-direction: column;\n  }\n  .case-title {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=tetris-replay.component.css.map */\n'] }]
  }], () => [{ type: HttpClient }, { type: NgZone }, { type: ChangeDetectorRef }], { boardCanvasRef: [{
    type: ViewChild,
    args: ["boardCanvas"]
  }], revealDir: [{
    type: ViewChild,
    args: [ScrollRevealDirective]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TetrisReplayComponent, { className: "TetrisReplayComponent", filePath: "src/app/tetris-replay/tetris-replay.component.ts", lineNumber: 70 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "", component: HomeComponent },
  { path: "tetris", component: TetrisReplayComponent },
  { path: "league", loadComponent: () => import("./chunk-7LHMVBP4.js").then((m) => m.LeagueComponent) },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: "top" }))
  ]
};

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 1, vars: 0, template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterOutlet],
      template: "<router-outlet />"
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
