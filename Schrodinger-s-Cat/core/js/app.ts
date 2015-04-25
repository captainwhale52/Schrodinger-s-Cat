/// <reference path="..\..\Scripts\typings\jquery\jquery.d.ts" />

var SCV: SchrodingersCat.View;
var SCM: SchrodingersCat.Model;
var SCR: SchrodingersCat.Router;
var SCP: SchrodingersCat.Player;
var BASE_URL: string;
var CONTENT_URL: string;
var CONTENT_IMAGE_URL: string;
var PHP_URL: string;

$(document).ready(function () {
    var url: any = window.location;
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