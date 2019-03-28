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
//Word search title displays
document.getElementById("wordSearchTitle").innerHTML = wordSearchTitle;
//the page draws teh word search using letterGrid and wordGrid
document.getElementById("wordTable").innerHTML = drawWordSearch(letterGrid, wordGrid);
//word list si generated using the wordArray
document.getElementById("wordList").innerHTML = showList(wordArray);
//wordArray is equal to the wordGrid
var wordArray = wordGrid;
//letter bubble is equal to all wordSearchTable table cells
var letterBubble = document.querySelectorAll("table#wordSearchTable td");
var letterGrid = letterGrid;
//variable letterValue
var letterValue = "";

//when the mouse is clicked down, the highlight letters function runs
document.getElementById("wordSearchTable").addEventListener("mousedown", highlightLetters);

//when the mouse is up the stop highlight function runs
document.getElementById("wordSearchTable").addEventListener("mouseup", stopHiglight);

//for each item that the mouse enters in the letterbubble array, the bubble is colored, 
function highlightLetters(e) {
      for (var i = 0; i < letterBubble.length; i++) {
            letterBubble[i].style.cursor = "pointer";
            letterBubble[i].addEventListener("mouseenter", colorBubble);
      }
      e.preventDefault();
}


// change bubble background color, get bubble value
function colorBubble(e) {
      e.target.style.backgroundColor = "rgb(255, 131, 0)";
      letterValue += e.target.textContent;
      document.getElementById("pickedLetters").value = letterValue;
      e.preventDefault();
}


//remove event listener, stops higlighting bubbles, and sets lettervalu
function stopHiglight() {
      for (var i = 0; i < letterBubble.length; i++) {
            letterBubble[i].removeEventListener("mouseenter", colorBubble);
      }
      // for each word(maybe) in wordArray length, check if letter value === word array. If yes, turn green. if no, reset to white. after, reset letter value

      //wip, only reset first row to white no matter what
      for (var i = 0; i < wordArray.length; i++) {
            if (letterValue === wordArray[i]) {
                  letterBubble[i].style.backgroundColor = "rgb(0, 180, 65)";
            } else {
                  letterBubble[i].style.backgroundColor = "rgb(255, 255, 255)";
            }
            letterValue = "";
      }

}

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