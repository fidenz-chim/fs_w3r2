
document.getElementById('newMemberAddress').value = "0x0012582598A86C2B807eF119838B6f09eE15c4cB";
document.getElementById('listIndex').value = "2";

function getMemberCount() {
    var url = "/contract/count";


    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
        } else {
          console.error(xhr.statusText);
        }
        addRowToConsole(xhr.responseText);
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
}

function getMemberAt() {
    var listIndex = document.getElementById('listIndex').value;
    var url = "/contract/at/" + listIndex;
    console.log(url);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
        } else {
          console.error(xhr.statusText);
        }
        addRowToConsole(xhr.responseText);
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    xhr.send(null);
}
function onAddMember() {
    var url = "/contract/create";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
        } else {
          console.error(xhr.statusText);
        }
        addRowToConsole(xhr.responseText);
      }
    };
    xhr.onerror = function (e) {
      console.error(xhr.statusText);
    };
    var newIssuerAddress = document.getElementById('newMemberAddress').value;
    var sendData = {"newAddress":newIssuerAddress};
    xhr.send(JSON.stringify(sendData));
}

function addRowToConsole(rowContent){
    var temp = document.createElement("div");
    temp.innerHTML = getHTMLBlock(rowContent);

    var parent = document.getElementById('txnConsole');
    parent.insertBefore(temp,parent.firstChild);
}

function getHTMLBlock(content){
    var html;
    html = '<div class="txnrow">' + content + '</div>';
    return html;
}
