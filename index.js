#!/usr/bin/env node
'use strict';
const Promise = require("bluebird");
const pre = require("preconditions").errr();

/*
const google = Promise.promisifyAll(require('googleapis'));
const sheets = Promise.promisifyAll(require('./sheets.js'));
const inquirer = Promise.promisifyAll(require('inquirer'));
const unique = Promise.promisifyAll(require('array-unique').immutable);
const wrap = Promise.promisifyAll(require('wordwrap'));
const Console = Promise.promisifyAll(require('console').Console);


const render = require('./renderers.js').html;
 */ 

function range(array){
  return [...array.keys()];
}

console.log("range",range([0,2,3,4]));

function buildTree(rows, headers, treepath, supressTreepathEntries=false) {
  const debugInfo =  {
    rows:rows, 
    headers:headers, 
    treepath:treepath, 
    supressTreepathEntries:supressTreepathEntries
  };

  pre.shouldBeDefined(rows).debug(debugInfo).test();
  pre.shouldBeArray(rows).debug(debugInfo).test();

  pre.shouldBeDefined(headers).debug(debugInfo).test();
  pre.shouldBeArray(headers).debug(debugInfo).test();

  rows.forEach( row => {
    const debugRowInfo = {debugInfo:debugInfo, rowInfo:{row:row}};
    const rowInfo = {headers:headers,row:row};
    pre.shouldBeArray(rows).debug(debugInfo).test();
  });

  pre.shouldBeDefined(treepath).debug(debugInfo).test();
  pre.shouldBeArray(treepath).debug(debugInfo).test();

  treepath.forEach( s => { pre.shouldBeString(s,"Each item in treepath must be a string").debug(debugInfo).test(); } );


  return ""




  /*
headers.range{ col =>
      [col
        const game = new Map([
          [titleKey, row[titleIndex]],
          ['RPG', row[7]],
          ['GM', row[gmIndex]],
          [slotKey, row[timeSlotIndexInRow]],
          ['Player Spots', row[minPlayerIndex] + '-' + row[maxPlayerIndex]],
          ['Scenario', row[scenarioIndex]],
          ['Characters', row[8]],
          ['Minimum Experience Required', row[expIndex]],
          ['System Notes', rpgSystemNotes]
        ]);

    return game;

  }
   */
}

const treePathTest1 = buildTree([[0,4,2,3]],["Dogs", "Cats", "Humans", "Meeples"], ["Cats", "Meeples"], false);
const treePathTest2 = buildTree([[10,4,20,30],[99,4,2,3],[0,4,2,3]],["Dogs", "Cats", "Humans", "Meeples"], ["Cats", "Meeples"], false);
/*

function forMonthCreator(month) {
  return function (row) {
    return row[dateIndexInRow] == month;
  };
}

const timeSlots = [
  '10:30 AM - 1:45 PM  (3 Hrs)',
  '10:30 AM - 3:45 PM (5 Hrs)',
  'Noon - 5 PM (5 Hrs)',
  '2 PM - 5 PM   (3 Hrs)'
];

let dateStringToMatchOn = '';


function processForDate(thisMonth, rows, headers) {
  const gamesThisMonth = rows.filter(forMonthCreator(thisMonth));
  const gameInfoThisMonth = rows.map(row => gameInfo(row));
  const slotsWithAtLeastOneGame = timeSlots.filter(slot => 
    gameInfoThisMonth.filter(game => slot == game.get(slotKey)).length > 0);
  const gamesBySlot = new Map( slotsWithAtLeastOneGame.map(slot => 
      [slot, gameInfoThisMonth.filter(game => 
        slot == game.get(slotKey))]));
  return render.gamesForMonth(thisMonth, slotsWithAtLeastOneGame, gamesBySlot, render);
}

function formatSpreadsheet(rows, headers) {
  const cliDateStringToMatchOn = process.argv[2];
  if (cliDateStringToMatchOn != undefined && cliDateStringToMatchOn.length > 0) {
    return processForDate(cliDateStringToMatchOn, rows, headers);
  }

  const envDateStringToMatchOn = process.env.IRPGD_DATE
  if (envDateStringToMatchOn != undefined && envDateStringToMatchOn.length > 0) {
    return processForDate(envDateStringToMatchOn, rows, headers);
  }

  const allDates = rows.map(row => row[dateIndexInRow]);
  const uniqueDates = unique(allDates).filter(
    dateString => dateString.length >= 4).reverse(); // Filters out the old Jul/etc

  inquirer.prompt([
    {
      type: 'list',
      name: 'date',
      message: 'Which date is this for?',
      paginated: false,
      choices: uniqueDates,
      default: uniqueDates.first
    }
  ]).then(answers => {
    const thisMonth = answers.date;
    return processForDate(thisMonth, rows, headers);
  });
}

function listGames(auth) {
  const getSheetAsync = Promise.promisify(google.sheets('v4').spreadsheets.values.get);
  return getSheetAsync({
    auth,
    spreadsheetId: 'x-cnE',
    range: 'Form Responses 1!A1:ZZ'
  }).then( function(response){
    if (response.values.length == 0) {
      reject('no data in spreadsheet! Oh no!');
    }
    return response;
  }).then(function(response){
    return formatSpreadsheet(response.values.slice(1), response.values[0])
  });
}

function updateGameListAsync() {
  return sheets.executeSheetsAPIAsync()
    .then(listGames,console.error)
}

module.exports = {
  updateGameListAsync: updateGameListAsync
};

*/
