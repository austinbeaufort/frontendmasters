

$.getJSON('https://openweathermap.org/data/2.5/weather?q=Cleveland&units=imperial&appid=https://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=b6907d289e10d714a6e88b30761fae22', function(data) {
    console.log(data);

    let icon = 'http://openweathermap.org/img/w/' + data.weather[1].icon + '.png';
    let temp = data.main.temp;
    let weather = data.weather[1].main;

    $('.temp').append(temp);
    $('.weather').append(weather);
    $('.icon').attr('src', icon);
});