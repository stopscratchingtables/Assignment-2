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

    document.getElementById('t_name').innerHTML = 'Los Angeles Lakers';
    /* 
    const response = await fetch(url)
    const data = await response.json()
    console.log(data) */ 

    const url2 = "https://www.balldontlie.io/api/v1/games/?seasons[]=2019&team_ids[]=14"
    const lakers_score = fetch(url2)
    lakers_score.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)

        let data_list = data.data
        // PPG
        let total_hts = 0
        for (let i=0; i < data_list.length; i++)
        {
            total_hts += data_list[i].home_team_score;
        }
        total_hts = total_hts / data_list.length;
        console.log("PPG: " + total_hts);

        // DRG
        let drg = 0
        for (let i=0; i < data_list.length; i++)
        {
            drg += (data_list[i].away_team_score *0.9)
        }

        console.log(drg)

        // ORG
        let org = 0
        for (let i=0; i < data_list.length; i++)
        {
            org += (total_hts * 0.9)
        }
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

    document.getElementById('t_name').innerHTML = 'Brooklyn Nets';

    const url2 = "https://www.balldontlie.io/api/v1/games/?seasons[]=2019&team_ids[]=3"
    const lakers_score = fetch(url2)
    lakers_score.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)

        let data_list = data.data
        // PPG
        let total_hts = 0
        for (let i=0; i < data_list.length; i++)
        {
            total_hts += data_list[i].home_team_score;
        }
        total_hts = total_hts / data_list.length;
        console.log("PPG: " + total_hts);

        // DRG
        let drg = 0
        for (let i=0; i < data_list.length; i++)
        {
            drg += (data_list[i].away_team_score * 0.9)
        }
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

    document.getElementById('t_name').innerHTML = 'Denver Nuggets';

    const url2 = "https://www.balldontlie.io/api/v1/games/?seasons[]=2019&team_ids[]=8"
    const lakers_score = fetch(url2)
    lakers_score.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)

        let data_list = data.data
        // PPG
        let total_hts = 0
        for (let i=0; i < data_list.length; i++)
        {
            total_hts += data_list[i].home_team_score;
        }
        total_hts = total_hts / data_list.length;
        console.log("PPG: " + total_hts);

        // DRG
        let drg = 0
        for (let i=0; i < data_list.length; i++)
        {
            drg += (data_list[i].away_team_score * 0.9)
        }
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

    document.getElementById('t_name').innerHTML = 'Miami Heat';

    const url2 = "https://www.balldontlie.io/api/v1/games/?seasons[]=2019&team_ids[]=16"
    const lakers_score = fetch(url2)
    lakers_score.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)

        let data_list = data.data
        // PPG
        let total_hts = 0
        for (let i=0; i < data_list.length; i++)
        {
            total_hts += data_list[i].home_team_score;
        }
        total_hts = total_hts / data_list.length;
        console.log("PPG: " + total_hts);

        // DRG
        let drg = 0
        for (let i=0; i < data_list.length; i++)
        {
            drg += (data_list[i].away_team_score * 0.9)
        }
    })
}