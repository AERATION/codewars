let button = document.querySelector('.button')
let inputvalue = document.querySelector('.inputValue')
let nameVal = document.querySelector('.name');
let username = document.querySelector('.username');
let honor = document.querySelector('.honor');
let clan = document.querySelector('.clan');
let leader = document.querySelector('.leader');
let skills = document.querySelector('.skills');
let ranks = document.querySelector('.ranks');
let namerank = document.querySelector('.namerank');
let totalAuthored = document.querySelector('.totalAuthored');
let totalCompleted = document.querySelector('.totalCompleted');


button.addEventListener('click', function(){

    fetch(`https://www.codewars.com/api/v1/users/${inputvalue.value}`)
    .then(response => response.json())
    .then(
        displayData)
    .catch(err => alert('Wrong codewars login!')); 

})

const displayData=(weather)=>{
    honor.innerText=`Очки чести: ${weather.honor}`
    if(weather.clan == null) clan.innerText=`Клан: не состоит`; else clan.innerText=`Клан: ${weather.clan}`
    username.innerText=`${weather.username}`
    if(weather.leaderboardPosition == null) leader.innerText=`Позиция лидера: отсутствует`;else leader.innerText=`Позиция лидера: ${weather.leaderboardPosition}`
    if(weather.skills == null) skills.innerText=`Skills: отсутствуют`; else skills.innerText=`Skills: ${weather.skills}`
    ranks.innerText=`Общий счёт: ${weather.ranks.overall.score}`
    namerank.innerText=`Наименование ранга: ${weather.ranks.overall.name}`
    totalAuthored.innerText=`Создано челленджей: ${weather.codeChallenges.totalAuthored}`
    totalCompleted.innerText=`Пройдено челленджей: ${weather.codeChallenges.totalCompleted}`
}

    
