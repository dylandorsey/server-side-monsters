console.log('in js');

$(document).ready(onReady);

function onReady(){
    console.log('in jq');
    appendAllMonsters();
}

function appendAllMonsters(){
    $.ajax({
        type: 'GET',
        url: '/monsters'
    })
    .then(function (response) {
        console.log(response);
    });
    console.log('appendAllMonstersCalled');
}