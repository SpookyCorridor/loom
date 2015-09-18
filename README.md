Loom 
===============

Loom is a code playground that lets multiple users work on the same file in real time. 
It's intended as a new way to collaborate and teach. Essentially it's an experiment that 
attempts to be a hybrid of Google Docs and Codepen (or jsfiddle, jsbin, etc...)

Loom accomplishes this task using node and websocks with some angular sprinkled in here and there. 

<img src="http://i.imgur.com/1hC75oQ.png">
:notebook_with_decorative_cover: Table of Contents :notebook_with_decorative_cover:
=================

- [links](#links)
- [intro](#intro)
- [Installation](#installation)
- [Gallery](#gallery)
- [Editor](#editor)
  * [overview](#overview)
  * [basic](#basic)
  * [advanced](#advanced)
- [Technologies](#technologies)
- [TODO](#todo)

=====


# Links


[wireframe](https://github.com/SpookyCorridor/loom/tree/master/wireframes)

[user stories](https://github.com/SpookyCorridor/loom/blob/master/userstories/userstories.md)

# Intro

  Loom is my final project for school. It's an experiment and likely the most ambitious thing I've attempted yet.
  Ultimately I want Loom to grow as a teaching tool and collaboration utility for small teams. Most of the 
  current code playgrounds fail to fulfill a sense of control or true collaboration. Coding together in real time
  instead of posting static shortlinks over and over just seems way more intuitive to me. 

# Installation

 - clone down the repository
 - run node app.js inside the repository 
 - enjoy! 

# Gallery :game_die:

  Gallery is currently under construction!

# Editor :game_die:

## overview

Loom's editor is built around the very powerful ACE library for a feature-rich experience. Each "thread" is an instance
of the editor in which multiple users can join and collaborate in real-time. 

## features 

### Basic

Loom supports a wide variety of themes and language syntax 

<img src="http://i.imgur.com/L4o7ldZ.png"> 

### Advanced

Loom's customization will always continue to improve 

<img src="http://i.imgur.com/s3GKWnG.png">

- Fully functional gutter with linting 
- auto-closing tags
- soft tabs & tab size
- adjustable font size 

# Technologies :floppy_disk:

Front-end: 
- Angular
- Bootstrap
- Jade

Back-end: 
- Node + Express
- mongoDB + Mongoose

Notable libraries and modules: 
- Ace 9 
- Passport
- socket.io 

I chose the MEAN stack because node and websockets play well together. They're also extremely fast
which is critical in an application that has real-time elements. 

# :coffee::coffee::coffee: TODO :coffee::coffee::coffee:
- [ ] implement gallery
- [ ] full autosave feature with threads tied to user accounts
- [ ] UI improvements and overhaul
- [ ] implement chat feature 
- [ ] additional editor customization and bindings 

## :rotating_light: Known Issues  :rotating_light:


