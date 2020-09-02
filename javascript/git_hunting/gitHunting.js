
function callback() {

    function theclickfunction() {

        $.get('https://api.github.com/users/jengland17', function (data) {
            console.log(data)
        })

    }

    $('#btn').click(theclickfunction);

}



$(document).ready(callback)