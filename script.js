// Team Stats

function displayLakers() {
    const url = "https://www.balldontlie.io/api/v1/teams/14"
    const lakers = fetch(url)

    lakers.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    /* 
    const response = await fetch(url)
    const data = await response.json()
    console.log(data) */ 

    const url2 = "https://www.balldontlie.io/api/v1/games/?seasons[]=2020&team_ids[]=14"
    const lakers_score = fetch(url2)
    lakers_score.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
};

function displayNets() {
    const url = "https://www.balldontlie.io/api/v1/teams/3"
    const nets = fetch(url)

    nets.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })

    const url2 = "https://www.balldontlie.io/api/v1/games/?seasons[]=2020&team_ids[]=3"
    const lakers_score = fetch(url2)
    lakers_score.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
}

function displayNuggets() {
    const url = "https://www.balldontlie.io/api/v1/teams/8"
    const nugs = fetch(url)

    nugs.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })

    const url2 = "https://www.balldontlie.io/api/v1/games/?seasons[]=2020&team_ids[]=8"
    const lakers_score = fetch(url2)
    lakers_score.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
}

function displayHeat() {
    const url = "https://www.balldontlie.io/api/v1/teams/16"
    const heat = fetch(url)

    heat.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })

    const url2 = "https://www.balldontlie.io/api/v1/games/?seasons[]=2020&team_ids[]=16"
    const lakers_score = fetch(url2)
    lakers_score.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
}