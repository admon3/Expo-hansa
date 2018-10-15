var destination = document.querySelector("#container");var _ReactRouter =

ReactRouter,Router = _ReactRouter.Router,Route = _ReactRouter.Route,IndexRoute = _ReactRouter.IndexRoute,IndexLink = _ReactRouter.IndexLink,Link = _ReactRouter.Link;

var STUFFITEMS = [
{ id: 1, title: "Detal", visible: false },
{ id: 2, title: "Lavandería Industrial", visible: false },
{ id: 3, title: "Tecnología de la Información", visible: false },
{ id: 4, title: "Imagenología", visible: false },
{ id: 5, title: "Endoscopía", visible: false },
{ id: 6, title: "Asesoramiento", visible: true }];


var App = React.createClass({ displayName: "App",
  render: function render() {
    return (
      React.createElement("div", null,
        React.createElement("nav", { className: "indigo" },
          React.createElement("div", { className: "nav-wrapper" },
            React.createElement("a", { className: "brand-logo" }, "HANSA"),
            React.createElement("a", { className: "sidenav-trigger", "data-target":"mobile-demo"},
              React.createElement("i", { className: "material-icons"}, "menu"
              )),
              React.createElement("ul", { className: "right hide-on-med-and-down" },
                React.createElement("li", null, React.createElement(IndexLink, { to: "/", activeClassName: "active" }, "Inicio")),
                React.createElement("li", null, React.createElement(Link, { to: "/stuffs", activeClassName: "active" }, "Servicio Tecnico")),
                React.createElement("li", null, React.createElement(Link, { to: "/faq", activeClassName: "active" }, "Marcas"))))),
        React.createElement("ul", { className: "sidenav", id: "mobile-demo" },
                React.createElement("li", null, React.createElement(IndexLink, { to: "/", activeClassName: "active" }, "Inicio")),
                React.createElement("li", null, React.createElement(Link, { to: "/stuffs", activeClassName: "active" }, "Servicio Tecnico")),
                React.createElement("li", null, React.createElement(Link, { to: "/faq", activeClassName: "active" }, "Marcas"))),

        React.createElement("div", { className: "container" },
          this.props.children)));
  } });

var Home = React.createClass({displayName: "Home",
  render: function render() {
    return (React.createElement("div", { className: "row" },
      React.createElement("div", { className: "col s12" },
      React.createElement("h3", null,"Division Soluciones Medicas"),
      React.createElement("div", { className: "slider" },
      React.createElement(
        "ul",
        { className: "slides" },
        React.createElement(
          "li",
          null,
          React.createElement("img", { src: "img/img6.jpg" }),
          React.createElement(
            "div",
            { className: "caption center-align" },
            React.createElement(
              "h3",
              null,
              "Comercial"
            ),
            React.createElement(
              "h5",
              { className: "light grey-text text-lighten-3" },
              "Division Soluciones medicas."
            )
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement("img", { src: "img/img5.jpg" }),
          React.createElement(
            "div",
            { className: "caption left-align" },
            React.createElement(
              "h3",
              null,
              "Servicio Tecnico"
            ),
            React.createElement(
              "h5",
              { className: "light grey-text text-lighten-3" },
              "Division Soluciones medicas."
            )
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement("img", { src: "img/img3.jpg" }),
          React.createElement(
            "div",
            { className: "caption right-align" },
            React.createElement(
              "h3",
              null,
              "Dental"
            ),
            React.createElement(
              "h5",
              { className: "light grey-text text-lighten-3" },
              "Division Soluciones medicas."
            )
          )
        ),
        React.createElement(
          "li",
          null,
          React.createElement("img", { src: "img/img4.jpg" }),
          React.createElement(
            "div",
            { className: "caption center-align" },
            React.createElement(
              "h3",
              null,
              "Cirugia"
            ),
            React.createElement(
              "h5",
              { className: "light grey-text text-lighten-3" },
              "Division Soluciones medicas."
            )
          )
        )
      )
    ),      React.createElement(
        "p",
        null,
        "La Divisi\xF3n Soluciones Medicas de HANSA Limitada, esta al servicio de la comunidad m\xE9dica boliviana, desde el a\xF1o 1960, ofreciendo productos de calidad comprobada, con marcas lideres en el mercado internacional y con respaldo t\xE9cnico local especializado en f\xE1brica. "
      ),
      React.createElement(
        "p",
        null,
        "Hoy en d\xEDa nuestros sistemas cuentan con los mayores avances tecnol\xF3gicos para mejorar tanto la comodidad del paciente como la calidad diagn\xF3stica y el tratamiento en diferentes campos. El resultado es que nuestros clientes se pueden concentrar en lo que realmente importa: El paciente."
      )
      )));
  }
});


var Faq = React.createClass({ displayName: "Faq",
  render: function render() {
    return (
      React.createElement("div", null,
        React.createElement("h2", null, "MARCAS QUE CONFIAN EN NOSOTROS"),
        React.createElement("p", null, "Factibilidad, Planeamiento. Puesta en marcha: Instalaciones, Aplicaciones medicas.", "."),
        React.createElement("div", {className:"row"},
          React.createElement("div", {className:"col s6"},
        React.createElement("img", {className:"materialboxed", src: "img/meril.jpg" })),
          React.createElement("div", {className:"col s6"},
        React.createElement("img", {className:"materialboxed", src: "img/sony.jpg" })),
        React.createElement("br", null,),
        React.createElement("br", null,)
        )
      )
      );
  } });


var Stuffs = React.createClass({ displayName: "Stuffs",
  _renderStuffs: function _renderStuffs() {
    return (
      React.createElement("div", null,
        React.createElement("h3", null, "Servicio Tecnico"),
        React.createElement("p", null, "El area de servicio tecnico ofrece soporte para:"),

        React.createElement("ol", null,
          this.state.stuffs.map(function (stuff) {return (
              React.createElement("li", null, React.createElement(Link, { to: "/stuffs/" + stuff.id, activeClassName: "active" }, stuff.title)));})),
        React.createElement("br", null,),
        React.createElement("br", null,),
        React.createElement("br", null,)
        ));




  },

  getInitialState: function getInitialState() {
    return {
      stuffs: STUFFITEMS };

  },

  render: function render() {
    return (
      React.createElement("div", null,
        this.props.params.stuffId ? this.props.children : this._renderStuffs()));


  } });


var Stuff = React.createClass({ displayName: "Stuff",
  _findStuffById: function _findStuffById(id) {
    return STUFFITEMS.filter(function (stuffItem) {return stuffItem.id == id;})[0];
  },

  getInitialState: function getInitialState() {
    return {
      stuffs: null };

  },

  componentWillMount: function componentWillMount() {
    this.setState({
      stuff: this._findStuffById(this.props.params.stuffId) });

  },

  render: function render() {
    var stuff = this.state.stuff;
    return (
      React.createElement("div", null,
        React.createElement("h3", null, stuff.title),
             React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col s12 m6" },
          React.createElement(
            "div",
            { className: "card" },
            React.createElement(
              "div",
              { className: "card-image" },
              React.createElement("img", { src: "img/img"+stuff.id+".jpg" }),
              React.createElement(
                "span",
                { className: "card-title" },
                stuff.title
              ),
              React.createElement(
                "a",
                { className: "btn-floating halfway-fab waves-effect waves-light red" },
                React.createElement(
                  "i",
                  { className: "material-icons" },
                  "add"
                )
              )
            ),
            React.createElement(
              "div",
              { className: "card-content" },
              React.createElement(
                "p",
                null,
                "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
              )
            )
          )
        )
      ),
        React.createElement("p", null, React.createElement(Link, { to: "/stuffs" }, "Retornar a Servicio Tecnico"))));


  } });


var NoMatch = React.createClass({ displayName: "NoMatch",
  render: function render() {
    return (
      React.createElement("div", null,
        React.createElement("h2", null, "No route matches this URL."),
        React.createElement("p", null, "Return ", React.createElement(Link, { to: "/" }, "home"))));


  } });


ReactDOM.render(
React.createElement(Router, null,
  React.createElement(Route, { path: "/", component: App },
    React.createElement(IndexRoute, { component: Home }),
    React.createElement(Route, { path: "/stuffs", component: Stuffs },
      React.createElement(Route, { path: ":stuffId", component: Stuff })),

    React.createElement(Route, { path: "faq", component: Faq }),
    React.createElement(Route, { path: "*", component: NoMatch }))),


destination);