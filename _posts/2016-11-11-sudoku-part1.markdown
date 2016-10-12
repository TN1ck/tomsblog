---
layout: post
title:  "The Sudoku Series Part 1: Design"
date:   2016-11-11 20:21:33 +0100
categories: jekyll
published: false
author: Tom Nick
excerpt: This is the first part of a series of blog posts where I create a fully fledged Sudoku. It will focus about the specs this projects aims to implement and a first basic UI.
---
Recently I got a phone call from my grandmother, she was having problems installing a Sudoku game she bought some days earlier at Amazon.
As the good grandson that I am, I logged into her computer using a VNC to fix the problem.

But it wasn't fixable, the item description was wrong, it was not possible to execute the binary without using some kind of emulation.
Sad that I wasn't able to help my grandmother, I figured that there must be an online version of a nice Sudoku game.
Using my normal search terms for finding trendy webapps I quickly entered "github sudoku javascript" into google.
But despite finding some, none of them had the UI or the features that I wanted.
Games like this exist though, but currently almost exclusively for smartphones and tablets, both things my grandma does
not own.

Most developers that I know want to make the world a better place and like challenges. Being a web developer I held the power to build my grandmother the best Sudoku (web)app in the world.

I wanted to build the app incrementally:

1. Specs, Design and the UI of the app. With a static starting sudoku we can actually make it playable at this point.
2. Solving Sudokus to provide hints
3. Sudoku generation
4. Persist the user-state using firebase or something similiar

The beauty of a sudoku game is, that it's playable with no code at all: just a grid with some numbers is basically all we need
to let people play the game.
So by accomplishing the first step, we are already so far, that I could show this to someone and he could play it!

## Prior Art

There are probably hundreds of gread Sudoku apps available for the current generation of smartphones.
So to get some ideas of how a nice Sudoku app should look like I installed some and tested them out.

![This is a screen of the most popular Sudoku App on Android]({{ site.url }}/assets/sudoku/sudoku_brainium_screen_1.png)
