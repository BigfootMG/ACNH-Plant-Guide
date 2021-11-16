"use strict";

//mobile menu toggle
document.querySelector('header .menu .toggle').addEventListener('click', function() {
    var menu = document.querySelector('header .menu');
    if (menu.classList.contains('open')) menu.classList.remove('open');
    else menu.classList.add('open');
});

//menu click/hover events
var header_links = document.querySelectorAll('header .menu .dropdown');
for (var i = 0; i < header_links.length; ++i) {
    header_links[i].addEventListener('mouseover', function() {
        if (window.innerWidth > 575) this.classList.add('open');
    });
    header_links[i].addEventListener('click', function() {
        var was_open = this.classList.contains('open');
        closeDropdown();
        if (!was_open) this.classList.add('open');
    });
    header_links[i].addEventListener('mouseout', function() {
        if (window.innerWidth > 575) closeDropdown();
    });
}

function closeDropdown() {
    for (var j = 0; j < header_links.length; ++j) {
        header_links[j].classList.remove('open');
    }
}

//click outside of menu ot close dropdown
document.addEventListener('click', function(e) {
    var dropdown = document.querySelector('header .menu .dropdown.open');
    if (dropdown === null) return;
    if (dropdown !== e.target && !dropdown.contains(e.target)) closeDropdown();
});