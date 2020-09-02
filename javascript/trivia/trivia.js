$(document).ready(function () {

    //Geo query

    $.get('https://opentdb.com/api.php?amount=3&category=22&type=multiple', function (data1) {
        geography = data1.results;
        console.log(geography);
    })

    //Science and Nature

    $.get('https://opentdb.com/api.php?amount=3&category=17&type=multiple', function (data2) {
        science = data2.results;
    })

    //Mythology query

    $.get('https://opentdb.com/api.php?amount=3&category=20&type=multiple', function (data3) {
        mythology = data3.results;
    })


    //Geo Questions

    $('#a1').one("click", function () {
        var q1 = $("<p></p>").text(geography[0].question);

        for (let i = 0; i <= 2; i++) {
            var a1 = `<label> 

                <input type="radio" value="${geography[0].correct_answer}">
                ${geography[0].correct_answer}
                <br>
                <input type="radio" value="${geography[0].incorrect_answers[i]}">
                ${geography[0].incorrect_answers[i]}

            </label>`
        }
        // var a1 = $("<p></p>").text(geography[0].correct_answer + "," + geography[0].incorrect_answers[0] + "," + geography[0].incorrect_answers[1]
        //     + "," + geography[0].incorrect_answers[2]);

        $('#a1').append(q1, a1);
    })

    $('#a2').one("click", function () {
        var q2 = $("<p></p>").text(geography[1].question);
        var a2 = $("<p></p>").text(geography[1].correct_answer + "," + geography[1].incorrect_answers[0] + "," + geography[1].incorrect_answers[1]
            + "," + geography[1].incorrect_answers[2]);

        $('#a2').append(q2, a2);
    })

    $('#a3').one("click", function () {
        var q3 = $("<p></p>").text(geography[2].question);
        var a3 = $("<p></p>").text(geography[2].correct_answer + "," + geography[2].incorrect_answers[0] + "," + geography[2].incorrect_answers[1]
            + "," + geography[2].incorrect_answers[2]);

        $('#a3').append(q3, a3);
    })

    //Science and Nature questions

    $('#b1').one("click", function () {
        var q1 = $("<p></p>").text(science[0].question);
        var a1 = $("<p></p>").text(science[0].correct_answer + "," + science[0].incorrect_answers[0] + "," + science[0].incorrect_answers[1]
            + "," + science[0].incorrect_answers[2]);

        $('#b1').append(q1, a1);
    })

    $('#b2').one("click", function () {
        var q2 = $("<p></p>").text(science[1].question);
        var a2 = $("<p></p>").text(science[1].correct_answer + "," + science[1].incorrect_answers[0] + "," + science[1].incorrect_answers[1]
            + "," + science[1].incorrect_answers[2]);

        $('#b2').append(q2, a2);
    })

    $('#b3').one("click", function () {
        var q3 = $("<p></p>").text(science[2].question);
        var a3 = $("<p></p>").text(science[2].correct_answer + "," + science[2].incorrect_answers[0] + "," + science[2].incorrect_answers[1]
            + "," + science[2].incorrect_answers[2]);

        $('#b3').append(q3, a3);
    })


    //Mythology Questions

    $('#c1').one("click", function () {
        var q1 = $("<p></p>").text(mythology[0].question);
        var a1 = $("<p></p>").text(mythology[0].correct_answer + "," + mythology[0].incorrect_answers[0] + "," + mythology[0].incorrect_answers[1]
            + "," + mythology[0].incorrect_answers[2]);

        $('#c1').append(q1, a1);
    })

    $('#c2').one("click", function () {
        var q2 = $("<p></p>").text(mythology[1].question);
        var a2 = $("<p></p>").text(mythology[1].correct_answer + "," + mythology[1].incorrect_answers[0] + "," + mythology[1].incorrect_answers[1]
            + "," + mythology[1].incorrect_answers[2]);

        $('#c2').append(q2, a2);
    })

    $('#c3').one("click", function () {
        var q3 = $("<p></p>").text(mythology[2].question);
        var a3 = $("<p></p>").text(mythology[2].correct_answer + "," + mythology[2].incorrect_answers[0] + "," + mythology[2].incorrect_answers[1]
            + "," + mythology[2].incorrect_answers[2]);

        $('#c3').append(q3, a3);
    })

})
