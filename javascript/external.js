//user_name = window.prompt("Please enter your name", "Type your name here");
//document.write(user_name);
var webmaps =
[
  ["Google Maps", "https://www.google.com/maps",
  "One huge web mapping example that many use everyday is Google Maps, which allows users to look at features and info about them on a map and can give directions to the areas. Some strengths of Google Maps are that it is easy to use and has fairly accurate data in more densely populated areas. Some things that are cons of Google Maps are that it may have inaccurate information in less travelled areas and needs a connection to be able to access. "]
  , ["Accuweather", "https://www.accuweather.com/en/us/san-marcos/78666/weather-radar/335932",
  "Another example of web mapping would be weather trackers (Accuweather was used in this case), which allow users to see future weather patterns for areas around the world. The strength of an application like this is the ability to plan ahead of time and prepare accordingly. A con would be that weather is always subject to change and these future predictions are not always accurate."]

];

function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
  user_name = window.prompt(a, b);
  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
  return message
}
document.write(welcome());

//

function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    {
      //sets the webmap arrays to a variable for QOL
      var txt = webmaps[row][column];

      //checks for if the column value is one of the first two elements in the array
      if (column < 2)
      {
        document.write("<td>" + txt + "</td>");
      }

      //moves third element in the array to its own row and positions text a bit better
      else
      {
        document.write("</tr>");
        document.write("<tr><td colspan='2'>" + txt + "</td></tr>");
      }

    }

  }
  document.write("</table>");
  return "";
}
