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
        document.getElementById("ppg_score").innerHTML = total_hts;

        // DRG
        let drg = 0
        for (let i=0; i < data_list.length; i++)
        {
            drg += data_list[i].visitor_team_score;
        }
        drg = (drg * 0.9) / data_list.length;
        console.log("DRG: " + drg);
        document.getElementById("def_score").innerHTML = drg;
        
        // ORG
        let org = 0
        org += total_hts * 0.9;
        document.getElementById("off_score").innerHTML = org;
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
        document.getElementById("ppg_score").innerHTML = total_hts;

        // DRG
        let drg = 0
        for (let i=0; i < data_list.length; i++)
        {
            drg += (data_list[i].visitor_team_score * 0.9)
        }
        drg = (drg * 0.9) / data_list.length;
        console.log("DRG: " + drg);
        document.getElementById("def_score").innerHTML = drg.toFixed(2);

        // ORG
        let org = 0
        org += total_hts * 0.9;
        document.getElementById("off_score").innerHTML = org.toFixed(2);
    })

    let active_players_id_list = []
    let active_players_name_list = []
    // TEam indiv stats
    fetch("https://api-nba-v1.p.rapidapi.com/players/teamId/4", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "7ef7505eeemsh4b7ae28b990ec32p10a9e5jsnf404942f045e",
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
        const a = response.api
        console.log(a.players);
        const b = a.players
        for (let i=0; i < b.length; i++)
        {
            if (b[i].yearsPro > 1)
            {
                const c=b[i];
                active_players_id_list.push(c.playerId);
                const name = c.firstName + " " + c.lastName;
                active_players_name_list.push(name);
            }
        }
        console.log(active_players_name_list[0]);
        document.getElementById("p_name").innerHTML = active_players_name_list[0];

        //  Player ID and their statistics
        var ppg = 0;
        var apg = 0;
        var rpg = 0;
        var pm = 0;     
        fetch("https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/261", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7ef7505eeemsh4b7ae28b990ec32p10a9e5jsnf404942f045e",
                "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            const a = response.api
            const b = a.statistics
            console.log(b);
            for(let i=0; i<82; i++)
            {
                if(b[i].points > 0 )
                {
                    ppg += parseFloat(b[i].points);
                }

                if (b[i].assists > 0)
                {
                    apg += parseFloat(b[i].assists);
                }
            }
            ppg = (ppg/82);
            apg = (apg/82)         
            document.getElementById("ppg").innerHTML = ppg.toFixed(2);
        })/*
        .catch(err => {
            console.error(err);
        });*/

    })
    .catch(err => {
        console.error(err);
    });

    
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
        document.getElementById("ppg_score").innerHTML = total_hts;

        // DRG
        let drg = 0
        for (let i=0; i < data_list.length; i++)
        {
            drg += (data_list[i].visitor_team_score * 0.9)
        }
        drg = (drg * 0.9) / data_list.length;
        console.log("DRG: " + drg);
        document.getElementById("def_score").innerHTML = drg.toFixed(2);

        // ORG
        let org = 0
        org += total_hts * 0.9;
        document.getElementById("off_score").innerHTML = org.toFixed(2);
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
        document.getElementById("ppg_score").innerHTML = total_hts;

        // DRG
        let drg = 0
        for (let i=0; i < data_list.length; i++)
        {
            drg += (data_list[i].visitor_team_score * 0.9)
        }
        drg = (drg * 0.9) / data_list.length;
        console.log("DRG: " + drg);
        document.getElementById("def_score").innerHTML = drg.toFixed(2);

        // ORG
        let org = 0
        org += total_hts * 0.9;
        document.getElementById("off_score").innerHTML = org.toFixed(2);
    })
}