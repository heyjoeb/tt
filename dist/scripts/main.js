"use strict";$(document).ready(function(){$(function(){var o=$(window).height();$(".full-height").css({height:o,width:"100%"})}),$(document).on("click",".scroll-down",function(o){o.preventDefault();var t=$(window).height();$("html, body").animate({scrollTop:t},500)}),$(document).on("click",".scroll-down2",function(o){o.preventDefault();var t=$(window).height();$("html, body").animate({scrollTop:2*t},500)}),$(window).scroll(function(){$("#bg02").each(function(){var o=$(this).offset().top,t=$(window).scrollTop();o<t+400&&$(this).addClass("slideRight")}),$("#man").each(function(){var o=$(this).offset().top,t=$(window).scrollTop();o<t+600&&$(this).addClass("slideDown")}),$("#manImg").each(function(){var o=$(this).offset().top,t=$(window).scrollTop();o<t+600&&$(this).addClass("animationOpacity")}),$("#buttons").each(function(){var o=$(this).offset().top,t=$(window).scrollTop();o<t+900&&$(this).addClass("slideUp")}),$("#buttonsBg").each(function(){var o=$(this).offset().top,t=$(window).scrollTop();o<t+800&&$(this).addClass("animationOpacity")}),$("#foto").each(function(){var o=$(this).offset().top,t=$(window).scrollTop();o<t+400&&$(this).addClass("slideRight")}),$("#txt01").each(function(){var o=$(this).offset().top,t=$(window).scrollTop();o<t+600&&$(this).addClass("slideLeft")}),$("#txt02").each(function(){var o=$(this).offset().top,t=$(window).scrollTop();o<t+800&&$(this).addClass("slideRight")}),$("#btnGoTo").each(function(){var o=$(this).offset().top,t=$(window).scrollTop();o<t+900&&$(this).addClass("slideUp")})}),$("#btnShades").on("click",function(){$("#shades").addClass("show"),$(this).remove()}),$("#btnCocoLoco").on("click",function(){$("#cocoLoco").addClass("show"),$(this).remove()}),$("#btnCar").on("click",function(){$("#car").addClass("show"),$(this).remove()}),$("#btnHat").on("click",function(){$("#hat").addClass("show"),$(this).remove()}),$("#btnHouse").on("click",function(){$("#house").addClass("show"),$(this).remove()}),$(".btnProp").on("click",function(){0===$("#propList li a").length&&$("#propList").fadeOut("slow")}),$(".opacity").delay(1200).animate({opacity:1},100)});