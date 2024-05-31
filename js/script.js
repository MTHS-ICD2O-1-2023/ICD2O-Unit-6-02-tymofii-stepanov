// Copyright (c) 2024 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

let cookieCount = 0

if (localStorage.getItem('cookieCount')) {
  cookieCount = parseInt(localStorage.getItem('cookieCount'))
  document.getElementById('cookieCount').innerText = 'Cookies: ' + cookieCount
}

function clickCookie() {
  cookieCount++
  document.getElementById('cookieCount').innerText = 'Cookies: ' + cookieCount
  localStorage.setItem('cookieCount', cookieCount)
}
