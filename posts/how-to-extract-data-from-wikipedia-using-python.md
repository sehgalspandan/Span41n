---
title: 'Extract Info from wikipedia using python'
date: 'June 19, 2023'
description: 'This tutorial will help you to extract information and data from the good old trusty Wikipedia using the Python programming language.'
bannerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1atEovv22WuR9gpcdFHLXRGhEH04APU9Apg&usqp=CAU'
author: 'Spandan Sehgal'
---

# Intro

Hi there, as you read in this post we are going to do some **data extracting** from wikipedia in python. This project is very simple and fun to build and after reading this post please do comment down that what should I build next .

## Modules required

1. `wikipedia` : This module helps us to get data from wikipedia using python.

### Installation

```script
pip install wikipedia
```

## Let's Code

First we will import the required module, so lets do it quickly

```python
# importing the module
import wikipedia
```

Now we will ask the user to enter the subject he wants to search

```python
search = input("What do you want to search ? \n")
```

Now we will use the input to search data from wikipedia

```python
# finding result for the search
''' sentences = 2 refers to numbers of line the number may vary it is according to you '''
result = wikipedia.summary(search, sentences = 2)
```

Now we will finally print the result

```python
# printing the result
print(result)
```

And with that done we have successfully completed another project.
That's it for today stay safe and do take very good care of yourselves.

#### And pls do comment what can I make I next post and feel free to ask/suggest something in the comments section.

#### Happy Coding !
