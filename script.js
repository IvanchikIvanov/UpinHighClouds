document.addEventListener('DOMContentLoaded', function() {
    var startButton = document.getElementById('start-button');
    var backButton = document.getElementById('back-button');
    var newGameButton = document.getElementById('new-game-button');
    var mainMenu = document.querySelector('.main-menu');
    var secondaryMenu = document.querySelector('.secondary-menu');
    var gameContainer = document.getElementById('game-container');
    var carLong = document.getElementById('car-long');
    var carShort = document.getElementById('car-short');

    startButton.addEventListener('click', function() {
        mainMenu.classList.add('hidden'); // Скрываем главное меню
        secondaryMenu.classList.remove('hidden'); // Показываем второстепенное меню
    });

    backButton.addEventListener('click', function() {
        secondaryMenu.classList.add('hidden'); // Скрываем второстепенное меню
        mainMenu.classList.remove('hidden'); // Показываем главное меню
    });

    newGameButton.addEventListener('click', function() {
        mainMenu.classList.add('hidden'); // Скрываем главное меню
        secondaryMenu.classList.add('hidden'); // Скрываем второстепенное меню
        gameContainer.classList.remove('hidden'); // Показываем игровое поле
    });

    document.getElementById('gas-long').addEventListener('click', function() {
        moveCar(carLong);
    });

    document.getElementById('gas-short').addEventListener('click', function() {
        moveCar(carShort);
    });

    function moveCar(car) {
        var currentBottom = parseInt(car.style.bottom, 10) || 0;
        car.style.bottom = currentBottom + 10 + 'px';
    }
});
