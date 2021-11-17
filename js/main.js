"use strict";

var menu = document.querySelector('header .menu');

//mobile menu toggle
menu.querySelector('.toggle').addEventListener('click', function() {
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

document.addEventListener('click', function(e) {
    //click on a link in the menu to close
    if(e.target.tagName == 'A' && menu.contains(e.target)) menu.classList.remove('open');

    //click outside of dropdown to close
    var dropdown = document.querySelector('header .dropdown.open');
    if (dropdown !== null && e.target !== dropdown && !dropdown.contains(e.target)) closeDropdown();
});