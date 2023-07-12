var arr = new Array("#home","#qualification","#Languages-Known");
var count_page_no = 0;
function previous(){
    if(count_page_no > 0){
        count_page_no--;
        document.getElementById("prev").setAttribute("href",arr[count_page_no]);
    }
}

function next(){
    if(count_page_no < arr.length - 1){
        count_page_no++;
        document.getElementById("next").setAttribute("href",arr[count_page_no]);
    }
}

function change_count(element){
    var text = element.text;
    switch(text){
        case "Home":
            count_page_no = 0;
            break;
        case "Qualification":
            count_page_no = 1;
            break;
        case "Languages Known":
            count_page_no = 2;
            break;
    }
}