
    var section = document.querySelector("section");
    var requestURL ="https://m-borgnaes.github.io/temple-inn/json/templedata.json" ;
    var request = new XMLHttpRequest();
    request.open("Get", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function() {
      var templeinfo = request.response;
      showTemples(templeinfo);
    }

        function showTemples(templeinfo) {
      var temples = templeinfo["temples"];
      for (var i = 0; i < temples.length; i++) {
        var myArticle = document.createElement("article");
        var myH2 = document.createElement("h2");
        var myImage = document.createElement("img");
        var myPara1 = document.createElement("p");
        var myPara2 = document.createElement("p");
        var myPara3 = document.createElement("p");
        var myH31 = document.createElement("h3");
        var myList1 = document.createElement("ul");
        var myH32 = document.createElement("h3");
        var myList2 = document.createElement("ul");
        var myH33 = document.createElement("h3");
        var myList3 = document.createElement("ul");
        var myH35 = document.createElement("h3");
        var myList5 = document.createElement("ul");
       
        myH2.textContent = temples[i].name;
        myImage.setAttribute("src", temples[i].image);
        myImage.setAttribute("alt", temples[i].name);
        myPara1.textcontent = "Address: " + temples[i].address1 + "<br>" + temples[i].address2;
        myPara2.textContent = "Phone: " + temples[i].phone;
        myPara3.textContent = "Email: " + temples[i].email;
        myH31.textContent = "Services: ";
        
        var services =temples[i].services;
        for (var j = 0; j < services.length; j++) {
          var listItem = document.createElement("li");
          listItem.textContent = services[j];
          myList1.appendChild(listItem);
        }

        myH32.textContent = "History: ";
        
        var history =temples[i].history;
        for (var k = 0; k < history.length; k++) {
          var listItem = document.createElement("li");
          listItem.textContent = history[k];
          myList2.appendChild(listItem);
        }

        myH33.textContent = "Ordinance Schedule";

        var ordinance =temples[i].ordinance;
        for (var l = 0; l < ordinance.length; l++) {
          var listItem = document.createElement("li");
          listItem.textContent = ordinance[l];
          myList3.appendChild(listItem);
        }
        
        myH35.textContent = "Closures: ";
        
        var closures =temples[i].closures;
        for (var n = 0; n < closures.length; n++) {
          var listItem = document.createElement("li");
          listItem.textContent = closures[n];
          myList5.appendChild(listItem);
        }

       

        myArticle.appendChild(myH2);
        myArticle.appendChild(myImage);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myH31);
        myArticle.appendChild(myList1);
        myArticle.appendChild(myH32);
        myArticle.appendChild(myList2);
        myArticle.appendChild(myH33);
        myArticle.appendChild(myList3);
        myArticle.appendChild(myH35);
        myArticle.appendChild(myList5); 
               
       section.appendChild(myArticle);

      }
    }
