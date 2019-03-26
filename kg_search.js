"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 4

   Wordsearch Game Script
   
   Filename: kg_search.js
   Author: Paige Mabbitt
   Date:  3.25.19   
   
   
   Function List
   
   function drawWordSearch(letters, words)
      Returns the HTML code for a word search table based on the entries
      in the letters array and the location of the words
      in the words array
      
   showList(list)
      Returns the HTML for code for an unordered list of words based
      on the items in the list array

*/



/*============================================================*/
window.onload = init
document.getElementById("wordSearchTitle").innerHTML = wordSearchTitle;
document.getElementById("wordTable").innerHTML = drawWordSearch(letterGrid, wordGrid);
document.getElementById("wordList").innerHTML = showList(wordArray);
var wordArray = wordGrid;
var letterBubble = document.querySelectorAll("table#wordSearchTable td");
console.log(document.querySelectorAll("table#wordSearchTable td"))

function init() {
      highlightLetters();
}



function highlightLetters() {
      for (var i = 0; i < letterBubble.length; i++) {
            letterBubble[i].addEventListener("mouseenter", extendBackground);
      }
}

function extendBackground(e) {
      e.target.style.backgroundColor = "rgb(255, 131, 0)";
}

// var letterBubble = document.querySelectorAll("table#wordSearchTable td");

// document.getElementById("wordSearchTable").addEventListener("click", function () {
//       for (let i = 0; i < letterBubble.length; i++) {
//             letterBubble[i].style.backgroundColor = "rgb(255, 200, 255)";
//       }
// });

/*Users select letters by pressing the mouse pointer down and moving over each table cell. As the
pointer enters the table cell for the letter, the background color should change to pink and the letter within the cell should be added to text displayed in the pickedLetter input box. */


function drawWordSearch(letters, words) {
      var rowSize = letters.length;
      var colSize = letters[0].length;

      var htmlCode = "<table id='wordSearchTable'>";
      htmlCode += "<caption>Word Search</caption>";

      for (var i = 0; i < rowSize; i++) {
            htmlCode += "<tr>";

            for (var j = 0; j < colSize; j++) {
                  if (words[i][j] == " ") {
                        htmlCode += "<td>";
                  } else {
                        htmlCode += "<td class='wordCell'>";
                  }
                  htmlCode += letters[i][j];
                  htmlCode += "</td>";
            }

            htmlCode += "</tr>";
      }
      htmlCode += "</table>";

      return htmlCode;
}

function showList(list) {
      var htmlCode = "<ul id='wordSearchList'>";

      for (var i = 0; i < list.length; i++) {
            htmlCode += "<li>" + list[i] + "</li>";
      }

      htmlCode += "</ul>";

      return htmlCode;
}