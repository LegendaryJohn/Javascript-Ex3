/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Ex 3.1
$(document).ready(function ()
{
    $("#blue").click(function ()
    {
        $(this).hide();
    });

    $("#red").mouseover(function ()
    {
        $(this).css("border-width", "4px");
    });

    $("#red").mouseout(function ()
    {
        $(this).css("border-width", "2px");
    });

    $("#red").click(function ()
    {
        $("#green").css("font-size", "xx-large");
    });

//Ex 3.2


    $("#1").click(function ()
    {
        $(this).text(Math.pow(1, 2));
    });
    $("#2").click(function ()
    {
        $(this).text(Math.pow(2, 2));
    });
    $("#3").click(function ()
    {
        $(this).text(Math.pow(3, 2));
    });
    $("#4").click(function ()
    {
        $(this).text(Math.pow(4, 2));
    });
    $("#5").click(function ()
    {
        $(this).text(Math.pow(5, 2));
    });
    $("#6").click(function ()
    {
        $(this).text(Math.pow(6, 2));
    });
    $("#7").click(function ()
    {
        $(this).text(Math.pow(7, 2));
    });
    $("#8").click(function ()
    {
        $(this).text(Math.pow(8, 2));
    });
    $("#9").click(function ()
    {
        $(this).text(Math.pow(9, 2));
    });


// Ex 3.3

    $("li").filter(function (index)
    {
        return index % 2;
    }).css("background-color", "lightgrey");



    $("ul").children().each(function (index)
    {
        var fontSize = parseInt($(this).css("font-size"));
        fontSize = index + 12 + "px";
        $(this).css({"font-size": fontSize});
    });

// Ex 3.4

    function swap() {
        var imgArr = ["#img1", "#img2", "#img3", "#img4", "#img5"];
        var swap1 = Math.floor((Math.random() * 5) + 1);
        var swap2 = Math.floor((Math.random() * 5) + 1);
        $(imgArr[swap1]).before($(imgArr[swap2]));
    }

    $("#img1").click(function () {
        swap();

    });
    $("#img2").click(function () {
        swap();

    });
    $("#img3").click(function () {
        swap();

    });
    $("#img4").click(function () {
        swap();

    });
    $("#img5").click(function () {
        swap();

    });


//Ex 3.5

    $("#fName").blur(function () {
        if ($("#fName").val() === "") {
            alert("First name is required.");
            $("#fName").val("Enter a first name!").css("font-weight", "bold").css("color", "red");
        }

    });

    $("#pw").blur(function ()
    {
        if ($("#pw").val() === "") {
            alert("Password is required.");
            $("#pw").val("Enter a password!").css("font-weight", "bold").css("color", "red");
        }

    });

    $("form").submit(function ()
    {
        alert("Submit succesful!");
    });

//Ex 3.6

    var arrStud = [
        {"firstName": "Bob", "lastName": "Hansen"}, 
        {"firstName": "Arne", "lastName": "John"},
        {"firstName": "Hans", "lastName": "Pedersen"}
    ];


    $("#table1 tr").each(function (i) {
        var td = $(this).find("td");
        td.html(arrStud[i]["firstName"]);
        td = td.next();
        td.html(arrStud[i]["lastName"]);
        td = td.next();
    });

    var tr = document.getElementsByTagName("table");

    for (var i = 0; i < tr.length; i++) {
        !function (i) {
            
            tr[i].addEventListener("mouseover", function () {
                tr[i].style.fontStyle = "italic";
                tr[i].style.fontWeight = "bold";
            });
            
            tr[i].addEventListener("mouseout", function () {
                tr[i].style.fontStyle = "normal";
                tr[i].style.fontWeight = "normal";
            });
          
        }(i);
    }



});
