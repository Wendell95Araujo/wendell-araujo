var windowWidth = window.innerWidth;
var botaoHome = $(".botao-home");
var botaVoltar = $(".botao-voltar");
var principal = $(".principal");
var menuReferencia = $(".menu-referencia");
var referencias = $(".referencia");
var caixa = $(".caixa");
var caixaFooter = $(".caixa-footer");
var botaoHome = $(".botao-home");
var cronometro = $(".cronometro");
var botaoFont = $(".btn-container");
var visualMenu = false;

(function () {
  menuReferencia.css("right", -windowWidth);
  increaseDecreaseFont();
})();

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    caixa.css("top", 0);
    botaoHome.css("top", "10px");
    botaoFont.css("top", "50px");
  } else {
    caixa.css("top", "-200px");
    botaoHome.css("top", "-100px");
    botaoFont.css("top", "-100px");
  }
  prevScrollpos = currentScrollPos;
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    caixa.css("top", 0);
    botaoHome.css("top", "10px");
    botaoFont.css("top", "50px");
  }
};

$(".text-link").on("click", function () {
  const element = $(this).attr("id");
  mostrarBotao();
  referencias.css("display", "none");
  menuReferencia.css("right", 0);
  $("#referencia-" + element).css("display", "block");
  refrenciaMostrar();
})


botaVoltar.on("click", function () {
  clickBotaoVoltar();
});

function clickBotaoVoltar() {
  menuReferencia.css("right", -windowWidth);
  botaVoltar.css("right", "-100px");
  referenciaEsconder();
}

function mostrarBotao() {
  windowWidth = window.innerWidth;
  botaVoltar.css("right", "15px");
}

function refrenciaMostrar() {
  visualMenu = true;
  windowWidth = window.innerWidth;
  if (windowWidth <= 480) {
    menuReferencia.css("width", "100%");
    menuReferencia.css("padding", 0);
    cronometro.css("right", "50%");
  } else {
    menuReferencia.css("width", "40%");
    menuReferencia.css("padding", "10px");
    principal.css("margin-left", "2.5%");
    principal.css("margin-right", "2.5%");
    principal.css("width", "52%");
    caixa.css("width", "60%");
    caixaFooter.css("width", "60%");
    cronometro.css("right", "45%");
    botaoHome.css("right", "95%");
    botaoFont.css("right", "95%");
  }
}

function referenciaEsconder() {
  visualMenu = false;
  windowWidth = window.innerWidth;
  principal.css("margin-left", "auto");
  principal.css("margin-right", "auto");
  principal.css("width", "90%");
  menuReferencia.css("width", "40%");
  menuReferencia.css("padding", "10px");
  caixa.css("width", "100%");
  caixaFooter.css("width", "100%");
  cronometro.css("right", "20px");
  botaoHome.css("right", "20px");
  botaoFont.css("right", "20px");
}

window.addEventListener("resize", function () {
  windowWidth = window.innerWidth;
  if (visualMenu === true) {
    refrenciaMostrar();
  } else {
    clickBotaoVoltar();
  }
});

function increaseDecreaseFont() {
  var cookieFontSize = localStorage.getItem("font-size");

  if (cookieFontSize !== null) {
    var fontSize = parseInt(cookieFontSize);
    $("body").css("font-size", fontSize + "%");
    if (fontSize == 150) {
      $("#increase-font").css("opacity", "0.4");
      $("#increase-font").css("cursor", "not-allowed");
    }
    if (fontSize == 80) {
      $("#decrease-font").css("opacity", "0.4");
      $("#decrease-font").css("cursor", "not-allowed");
    }
  } else {
    var fontSize = 100;
    localStorage.setItem("font-size", fontSize);
  }

  var increaseDecrease = 10;

  $("#increase-font").on("click", function (event) {
    fontSize = fontSize + increaseDecrease;
    if (fontSize >= 150) {
      fontSize = 150;
      $("#increase-font").css("opacity", "0.4");
      $("#increase-font").css("cursor", "not-allowed");
    }
    $("#decrease-font").css("opacity", "1");
    $("#decrease-font").css("cursor", "zoom-out");
    $("body").css("transition", "font-size 0.2s");
    $("body").css("font-size", fontSize + "%");

    localStorage.setItem("font-size", fontSize);
  });

  $("#decrease-font").on("click", function (event) {
    fontSize = fontSize - increaseDecrease;
    if (fontSize <= 80) {
      fontSize = 80;
      $("#decrease-font").css("opacity", "0.4");
      $("#decrease-font").css("cursor", "not-allowed");
    }
    $("#increase-font").css("opacity", "1");
    $("#increase-font").css("cursor", "zoom-in");
    $("body").css("transition", "font-size 0.2s");
    $("body").css("font-size", fontSize + "%");

    localStorage.setItem("font-size", fontSize);
  });
}