console.log('in js');

$(document).ready(onReady);

function onReady() {
    console.log('in jq');
    appendAllMonsters();
}

function appendAllMonsters() {
    $.ajax({
        type: 'GET',
        url: '/monsters'
    })
        .then(function (response) {
            for (let i = 0; i < response.length; i++) {
                $('#monsterList').append(`<li>${response[i]}</li>`);
            }
            console.log(response);
        });
    console.log('appendAllMonstersCalled');
}