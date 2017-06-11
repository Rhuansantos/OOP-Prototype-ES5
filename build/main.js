(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// waiting for the dom to be ready
window.addEventListener('load', function () {

	// Form
	document.getElementById('insertPet').addEventListener('submit', function (e) {
		// prevent page from reload
		e.preventDefault();

		// form fields
		var petName = document.getElementById('name').value;
		var petAge = document.getElementById('age').value;
		var selectOption = document.getElementById('type');
		var petType = selectOption.options[selectOption.selectedIndex].value;
		var shelter = document.getElementById('shelter').value;

		// clean the html before insert new elements
		petContainer.innerHTML = '';

		// instance 
		var newPet = Pet(petName, petAge, petType, shelter);
	});
});

},{}]},{},[1]);
