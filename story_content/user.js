function ExecuteScript(strId)
{
  switch (strId)
  {
      case "68q5JPNKw0E":
        Script1();
        break;
      case "5vKWjhasx4n":
        Script2();
        break;
      case "6rATDafnqwo":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var layerNumber = player.GetVar("layerNumber"); // get the current value

var remainder = layerNumber % 4; // get remainder after division by 4

player.SetVar("remainder", remainder); // save it back to Storyline

}

function Script2()
{
  var player = GetPlayer();
var layerNumber = player.GetVar("layerNumber"); // get the current value

var remainder = layerNumber % 4; // get remainder after division by 4

player.SetVar("remainder", remainder); // save it back to Storyline

}

function Script3()
{
  var player = GetPlayer();
var layerNumber = player.GetVar("layerNumber"); // get the current value

var remainder = layerNumber % 4; // get remainder after division by 4

player.SetVar("remainder", remainder); // save it back to Storyline

}

