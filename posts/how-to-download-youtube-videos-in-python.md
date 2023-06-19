---
title: "How to download youtube videos in python"
date: "18 June 2023"
bannerImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
description: "How to download youtube videos in python"
author: "Spandan Sehgal"
---

# Intro

Hello everyone I hope you are doing well.
In this post, as you read the title we are going to make a **YouTube video downloader in Python** it is a very simple and fun project to build.

# Modules needed :-

1)pytube :- it is an module which lets us access YouTube content from python 
##Installation :-
`pip install pytube`

# Let's Code

First we will import the module which we installed
```python
#Importing the required modules
import pytube
```
Now we will ask the user for entering the link of the video and a path where he/she has to save the video
```python
#Asking for the link
link = input("Enter the link:\n ")

#Asking for the save location
save_path = input("Enter the path to save the video: ")
```
Now we will download the video and save it to the provided location
```python
#Downloading the video with .mp4 extension to the save location
yt = pytube.YouTube(link)
stream = yt.streams.filter(file_extension='mp4').first()
stream.download(save_path)
```
In the line `yt.streams.filter(file_extension='mp4').first()` we can define in which format we want to save the file, so in most cases .mp4 extension is the best.

And with that done we have successfully created our project.



# Happy Coding !