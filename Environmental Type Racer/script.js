var lists = ["Many of the issues we face all tie back into one central concern - public health. Pollution, water scarcity and overpopulation all present a clear threat to public health. Nearly one out of every four deaths each year are directly caused by unhealthy environments.", "Approximately one million sea animals die from the consumption of plastic each year.", "The oceans have absorbed much of this increased heat, with the top 700 meters (about 2,300 feet) of ocean showing warming of more than 0.4 degrees Fahrenheit since 1969.", "Ongoing effects include rising sea levels due to thermal expansion and melting of glaciers and ice sheets, and warming of the ocean surface, leading to increased temperature stratification.", "The total temperature increase from 1850 - 1899 to 2001 - 2005 is 0.76C.", "A 1 meter of sea water rise may eliminate entire small island nations and many deltaic areas will be lost.", "46 million people per year are currently at risk of flooding from storm surges.", "Approximately 20-30% of plant and animal species assessed so far are likely to be at increased risk of extinction if increases in global average temperature exceed 1.5-2.5C.", "Climate change is increasing the risk of extreme weather events with more intense hurricanes, cyclones and typhoons, heavier rain and snowfall, more frequent and intense heat waves, and longer droughts. These lead to more disasters and have dramatic impacts on food security.", "One of the most significant ways to reduce climate pollution in the U.S. is to target the single biggest source of carbon pollution: power plants.", "Half of plant and animal species at risk from climate change in world's most important natural places", "Up to 90 percent of amphibians, 86 percent of birds and 80 percent of mammals could potentially become locally extinct in the Miombo Woodlands in Southern Africa.", "96 percent of the breeding grounds of Sundarbans tigers could become submerged by sea-level rise.", "WWF reports there are 48,000 dams in the world, built to provide water for drinking and irrigation, and energy. However, they lead to habitat destruction, species loss, and displacing millions of people.", "The average person produces 4.3 pounds of waste per day, with the United States alone accounting for 220 million tons per year. Much of this waste ends up in landfills, which generate enormous amounts of methane.", "Fresh water is crucial to life on Earth, yet more sources are being polluted through human activities each year. On a global scale, 2 million tons of sewage, agricultural and industrial waste enters the world's water every day.", "The demands of an increasing population has resulted in increasing levels of deforestation. Current estimates state that the planet is losing 80,000 acres of tropical forests per day.", "The yearly global average increase in temperature since the 1880s is 0.07 degrees per year","An ever-growing population needs transportation, much of which is fueled by the natural resources that emit greenhouse gases, such as petroleum. In 2014, transportation accounted for 26% of all greenhouse gas emissions.", "Half of deforestation is from the illegal removing of trees to be used as fuel","A clean commute can help the world combat climate change", "You can also invest in renewable energy sources to help combat climate change.", "Environmental change is a change or disturbance of the environment most often caused by human influences and natural ecological processes."];
var count = 0;
var index = 0;
var choice = Math.floor(Math.random()*lists.length);
var text = lists[choice];   
var result = "";
var error = 0;
var accuracy = 0;
var score = 0;
var time = 0;
var cpm;
var start = false;

function main(){
  count = 0;
  index = 0;
  choice = Math.floor(Math.random()*lists.length);
  text = lists[choice];   
  result = "";
  error = 0;
  accuracy = 0;
  score = 0;
  time = 0;
  cpm;
  start = false;
  document.getElementById("quiz").innerHTML = text;
  document.getElementById("cpm").innerHTML = "CPM: ";
  document.getElementById("timer").innerHTML = "Time: 0 seconds";
  document.getElementById("text").innerHTML = "";
  document.getElementById("score").innerHTML = "Accuracy: 100%";
  document.getElementById("input1").value="";
}

window.onload = function(){ 
  document.getElementById("quiz").innerHTML = text;
}
function begin(){
  start = true;
}

var timer = setInterval(function(){ 
  if (result != text && start) {
    time = time + 1, document.getElementById("timer").innerHTML = "Time: " + time + " seconds"; 
  }
  else if (result == text) {
    clearInterval(timer);
    cpm = Math.floor(count/time * 60);
    document.getElementById("cpm").innerHTML = "CPM: " + cpm;
    
  }
  }, 1000);


function myFunction(){
  var input_val = event.keyCode;
  if(text.length === result.length){
    alert("You are done");
    document.getElementById("text").innerHTML = result;
    console.log(result)
  }
  if (input_val == "32"){
  	 document.getElementById("input1").value="";

  }
  if(input_val === text.charCodeAt([index])){
    result += text[index];
    document.getElementById("text").innerHTML = result;
    index += 1;
    count +=1;
  }
  else {
    error += 1;
    accuracy = Math.floor(((text.length - error) / text.length)*100);
    document.getElementById("score").innerHTML = "Accuracy: " + accuracy + "%";
  }
}

