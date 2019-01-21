function init(){
	// 	var ref = document.querySelector("#home");
	// 	ref.addEventListener('click',showDetails);

	// function showDetails(){

	// 	// console.log(this);
	// 	// console.dir(this);
		
	//   	var id = document.getElementById("data").innerHTML;
	//   	var parser = JSON.parse(id);
	// 	var ref = JSON.parse(id);
	// 	console.log(ref);
	// 	var out = "";
	// 	console.log(home);
  // var i;
  // for(i = 0; i<ref.length; i++) {
  //   out += '<a href="' + ref[i]. + '">' + 
  //   arr[i].display + '</a><br>';
  // }
  // document.getElementById("id01").innerHTML = out;
  // console.log(parser);

  	 // document.getElementById('home').onclick = homeDetails();
  	 // document.getElementById('about').onclick = aboutDetails();
  	 // document.getElementById('contact').onclick = contactDetails();
  	 // document.getElementById('recent').onclick = recentDetails();
  	//document.getElementById('about').onclick = aboutDetails();

  	// document.getElementById('home').addEventListener("click",homeDetails());
  	// document.getElementById('about').addEventListener("click",aboutDetails());
  	// document.getElementById('contact').addEventListener("click",contactDetails());
  	// document.getElementById('recent').addEventListener("click",recentDetails());
	// function homeDetails(){
	// 	// var ref = document.getElementById("data");
 //  // 		var inner = document.getElementById("data").innerHTML;
 //  // 		var parser = JSON.parse(inner);
	// 	document.getElementById("main").innerHTML = parser.home.content; 
	// }

	// function aboutDetails(){
	// 	// var ref = document.getElementById("data");
 //  // 		var inner = document.getElementById("data").innerHTML;
 //  // 		var parser = JSON.parse(inner);
	// 	document.getElementById("main").innerHTML = parser.about.content;
	// }

	// function contactDetails(){
	// 	// var ref = document.getElementById("data");
 //  // 		var inner = document.getElementById("data").innerHTML;
 //  // 		var parser = JSON.parse(inner);
	// 	document.getElementById("main").innerHTML = parser.contact.content;
	// }

	// function recentDetails(){
	// 	// var ref = document.getElementById("data");
 //  // 		var inner = document.getElementById("data").innerHTML;
 //  // 		var parser = JSON.parse(inner);
	// 	document.getElementById("main").innerHTML = parser.recent.newsArray[0].news+". "+parser.recent.newsArray[1].news;;
	// }
	var ref = document.getElementById("data");
  	var inner = document.getElementById("data").innerHTML;
  	var parser = JSON.parse(inner);

	home.onclick=function(){
		//document.getElementById("main").innerHTML = "<h3>" + parser.home.title + "</h3>";
		document.getElementById("main").innerHTML = parser.home.title +"<br>"+ parser.home.content;
	}

	contact.onclick=function(){
		document.getElementById("main").innerHTML = parser.contact.title +"<br>"+ parser.contact.content;
	}

	about.onclick=function(){
		document.getElementById("main").innerHTML = parser.about.title +"<br>"+parser.about.content;
	}

	recent.onclick=function(){
		document.getElementById("main").innerHTML = parser.recent.newsArray[0].news+". "+parser.recent.newsArray[1].news;
	}

}

