# Reddit-Memes

//Defining two arrays of colors, bg and fg, which will be used to style the button element.
Defining a color function which randomly selects one of the colors from the bg and fg arrays and applies them to the button element's background and text color, respectively.
Defining a fetchMemes function which is called when the button is clicked. This function:
Calls the color function to change the button's colors.
Makes a GET request to the /r/shitposting subreddit API endpoint with an after parameter set to a global variable after, which is initially an empty string.
Parses the response as JSON and stores the value of the after property of the data object in the global after variable.
Loops through the children array of the data object and filters out any objects whose post_hint property is not equal to "image".
For each remaining object, it creates an h4 element with the object's title property as its text content, an img element with the object's url_overridden_by_dest property as its src, and a div element to contain them.
Appends the div element to a parent div element with the ID "memes".
Appends the parent div element to the body element of the page.

It's worth noting that this code will only display 3 memes at a time if the children array of the data object returned by the API only contains 3 elements with a post_hint of "image. The code does not explicitly limit the number of memes displayed in any other way.
