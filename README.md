# Pc Picker Crud - Computer Shop Integrated With Crud Functionality
Pc Picker is a website that displays items and has a admin interface.
## Overview
This website displays with the help of LocalStorage a few lists of items needed for your setup and has a log in / sign in functionality.

Via log in you can log in into your account or access the admin interface to change the shown items.

To access the admin interface add the word admin to the username and to the password add the numbers 1234.
## Functionality
1. Displaying items
   - items are stored in arrays (hash-maps are better in care there are many elements but for this website where are only a few of them, arrays work well)
   - are stored and shown with LocalStorage by doing a loop to show only 3 items at a time
   - the traversing through the elements its done with a simple carousel-like implementation
2. Log in / Sign in
   - you can register a new accoung with sign in and get into it with sign in
   - via log in you can access the crud part of the website with (admin and 1234)
3. Crud
   - crud has 3 parts:
     - editing an existing element
       - the editing is done by selecting the category from where you want to get the desired element
       - the item list will display the items from the choosen category
       - there are a few inputs: one for the new name, new price or new image
       - at the end the button will get all the info (the category, choosen item, new name, new price, new photo)
       - and will create a new array with the new values to replace the old one 
     - deleting an existing element
       - it deletes an item by selecting the category from where is located and the name of that item
       - the button will create a new array without that element and will replace the existing one from LocalStorage
     - adding a new element
       - is done exactly the same as you do the editing
       - the only difference is that you don t need to select an item anymore
##
© 2023 | De Marco Eduard | All Rights Reserved
