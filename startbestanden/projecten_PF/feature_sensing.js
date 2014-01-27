window.onload = function(){
    
    var aFeatureList;
    
    //eTabel.style.border('none');
    var eDiv        = document.getElementById('container');
    var sBrowser    = "Browser: "+navigator.appCodeName;
    var sVersie     = "Version: "+navigator.appVersion;
    var ePar        = document.createElement('p');
    ePar.innerHTML  = ePar.innerHTML + sBrowser +"<br>"+sVersie;
    eDiv.appendChild(ePar);
    var eTable        = createTable(aFeatureList);
    eDiv.appendChild(eTable);

function createTable(a){
   var eTabel      = document.createElement('table');
   var nFeatures   = a.length;
     for(var i = 0 ; i < nFeatures; i++){
        var eRij = document.createElement('tr');
        var eData1;
        var eData2;
        eData1 = document.createElement('td');
        eData2 = document.createElement('td');
       if(a[i]){
         eData1.innerHTML = eData1.innerHTML + a[i];
         eData2.innerHTML = eData2.innerHTML + "Ja";
         //eRij.style.backgroundColor('green');
        }
        else{
         eData1.innerHTML = eData1.innerHTML + a[i];
         eData2.innerHTML = eData2.innerHTML + "Nee";
         //eRij.style.backgroundColor('red');
        }
        eRij.appendChild(eData1);
        eRij.appendChild(eData2);
        eTabel.appendChild(eRij);
        };
      return eTabel;  
  }
};