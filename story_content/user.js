function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5W2IMfgOLYx":
        Script1();
        break;
      case "6leeinzWkGp":
        Script2();
        break;
      case "6AEr8IibB7E":
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

