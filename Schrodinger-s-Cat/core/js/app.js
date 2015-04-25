/// <reference path="..\..\Scripts\typings\jquery\jquery.d.ts" />
var SCV;
var SCM;
var SCR;
var SCP;
var BASE_URL;
var CONTENT_URL;
var CONTENT_IMAGE_URL;
var PHP_URL;
$(document).ready(function () {
    var url = window.location;
    BASE_URL = url.origin + window.location.pathname;
    CONTENT_URL = BASE_URL + "content/";
    CONTENT_IMAGE_URL = CONTENT_URL + "image/";
    PHP_URL = BASE_URL + "core/php/";
    SCM = new SchrodingersCat.Model();
    SCV = new SchrodingersCat.View({ el: $("body") });
    SCP = new SchrodingersCat.Player();
    SCR = new SchrodingersCat.Router();
    SCR.start();
    //SCV.render();
});
