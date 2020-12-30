// =======================================
// =======================================
// =======================================
// Team Stats
// =======================================
// =======================================
// =======================================

function displayLakers() {
    const url = "https://www.balldontlie.io/api/v1/teams/14"
    const lakers = fetch(url)

    lakers.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    document.getElementById('team_logo').innerHTML = '<img src="media/teamlogos/lakers.png" alt="" height="225px" width="325px">'
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

    let active_players_id_list = []
    let active_players_name_list = []
    // Team indiv stats
    fetch("https://api-nba-v1.p.rapidapi.com/players/teamId/17", {
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
        for (var x=0; x<15 ;x++)
        {
            var p_id = active_players_id_list[x];
            var p_name = active_players_name_list[x];
            $("#team_ranking tr").remove();
            buildTable(p_id, p_name);
        }
    })
    .catch(err => {
        console.error(err);
    });
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
    
    document.getElementById('team_logo').innerHTML = '<img src="media/teamlogos/nets.png" alt="" height="225px" width="325px">'
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
        
        for (var x=0; x<15 ;x++)
        {
            var p_id = active_players_id_list[x];
            var p_name = active_players_name_list[x];
            $("#team_ranking tr").remove();
            buildTable(p_id, p_name);
        }

    })
    .catch(err => {
        console.error(err);
    });
}

function buildTable(a, b){
    //  Player ID and their statistics
    var ppg = 0;
    var apg = 0;
    var rpg = 0;
    var pm = 0;
    fetch("https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/" + a, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "7ef7505eeemsh4b7ae28b990ec32p10a9e5jsnf404942f045e",
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(response => {
        console.log(response);
        const x = response.api
        const y = x.statistics
        for(let i=0; i<82; i++)
        {
            if (y.length >= 82)
                if(y[i].points > 0 )
                {
                        ppg += parseFloat(y[i].points);
                }

                if (y[i].assists > 0)
                {
                        apg += parseFloat(y[i].assists);
                }

                if (y[i].totReb > 0)
                {
                        rpg += parseFloat(y[i].totReb);
                }

                if (y[i].plusMinus > 0)
                {
                        pm += parseFloat(y[i].plusMinus);
                }
            }
    ppg = (ppg/82);
    apg = (apg/82);
    rpg = (rpg/82);
    pm = (pm/82)

    document.getElementById('team_ranking').innerHTML += `<tr>
                                                            <th scope="row">${b}</th>
                                                            <td>${ppg.toFixed(2)}</td>
                                                            <td>${apg.toFixed(2)}</td>
                                                            <td>${rpg.toFixed(2)}</td>
                                                            <td>${pm.toFixed(2)}</td>
                                                        </tr>`
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

    document.getElementById('team_logo').innerHTML = '<img src="media/teamlogos/nuggets.png" alt="" height="225px" width="325px">'
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


        let active_players_id_list = []
        let active_players_name_list = []
        // TEam indiv stats
        fetch("https://api-nba-v1.p.rapidapi.com/players/teamId/9", {
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
            
            for (var x=0; x<15 ;x++)
            {
                var p_id = active_players_id_list[x];
                var p_name = active_players_name_list[x];
                $("#team_ranking tr").remove();
                buildTable(p_id, p_name);
            }
    
        })
        .catch(err => {
            console.error(err);
        });
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

    document.getElementById('team_logo').innerHTML = '<img src="media/teamlogos/heat.png" alt="" height="225px" width="325px">'
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


        let active_players_id_list = []
        let active_players_name_list = []
        // TEam indiv stats
        fetch("https://api-nba-v1.p.rapidapi.com/players/teamId/20", {
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
            
            for (var x=0; x<15 ;x++)
            {
                var p_id = active_players_id_list[x];
                var p_name = active_players_name_list[x];
                $("#team_ranking tr").remove();
                buildTable(p_id, p_name);
            }
    
        })
        .catch(err => {
            console.error(err);
        });
    })
}




function displayCeltics() {
    const url = "https://www.balldontlie.io/api/v1/teams/2"
    const cel = fetch(url)

    cel.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })

    document.getElementById('team_logo').innerHTML = '<img src="media/teamlogos/celtics.png" alt="" height="225px" width="325px">'
    document.getElementById('t_name').innerHTML = 'Boston Celtics';

    const url2 = "https://www.balldontlie.io/api/v1/games/?seasons[]=2019&team_ids[]=2"
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


        let active_players_id_list = []
        let active_players_name_list = []

        // TEam indiv stats
        fetch("https://api-nba-v1.p.rapidapi.com/players/teamId/2", {
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
            
            for (var x=0; x<15 ;x++)
            {
                var p_id = active_players_id_list[x];
                var p_name = active_players_name_list[x];
                $("#team_ranking tr").remove();
                buildTable(p_id, p_name);
            }
    
        })
        .catch(err => {
            console.error(err);
        });
    })
}



function displayWarriors() {
    const url = "https://www.balldontlie.io/api/v1/teams/11"
    const cel = fetch(url)

    cel.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })

    document.getElementById('team_logo').innerHTML = '<img src="media/teamlogos/warriors.png" alt="" height="225px" width="325px">'
    document.getElementById('t_name').innerHTML = 'Golden State Warriors';

    const url2 = "https://www.balldontlie.io/api/v1/games/?seasons[]=2019&team_ids[]=11"
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


        let active_players_id_list = []
        let active_players_name_list = []
        
        // TEam indiv stats
        fetch("https://api-nba-v1.p.rapidapi.com/players/teamId/11", {
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
            
            for (var x=0; x<15 ;x++)
            {
                var p_id = active_players_id_list[x];
                var p_name = active_players_name_list[x];
                $("#team_ranking tr").remove();
                buildTable(p_id, p_name);
            }
    
        })
        .catch(err => {
            console.error(err);
        });
    })
}






function displayRaptors() {
    const url = "https://www.balldontlie.io/api/v1/teams/28"
    const cel = fetch(url)

    cel.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })

    document.getElementById('team_logo').innerHTML = '<img src="media/teamlogos/raptors.png" alt="" height="225px" width="325px">'
    document.getElementById('t_name').innerHTML = 'Toronto Raptors';

    const url2 = "https://www.balldontlie.io/api/v1/games/?seasons[]=2019&team_ids[]=28"
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


        let active_players_id_list = []
        let active_players_name_list = []
        
        // TEam indiv stats
        fetch("https://api-nba-v1.p.rapidapi.com/players/teamId/38", {
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
            
            for (var x=0; x<15 ;x++)
            {
                var p_id = active_players_id_list[x];
                var p_name = active_players_name_list[x];
                $("#team_ranking tr").remove();
                buildTable(p_id, p_name);
            }
    
        })
        .catch(err => {
            console.error(err);
        });
    })
}




function displaySuns() {
    const url = "https://www.balldontlie.io/api/v1/teams/24"
    const cel = fetch(url)

    cel.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })

    document.getElementById('team_logo').innerHTML = '<img src="media/teamlogos/suns.png" alt="" height="225px" width="325px">'
    document.getElementById('t_name').innerHTML = 'Pheonix Suns';

    const url2 = "https://www.balldontlie.io/api/v1/games/?seasons[]=2019&team_ids[]=24"
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


        let active_players_id_list = []
        let active_players_name_list = []
        
        // TEam indiv stats
        fetch("https://api-nba-v1.p.rapidapi.com/players/teamId/28", {
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
            
            for (var x=0; x<15 ;x++)
            {
                var p_id = active_players_id_list[x];
                var p_name = active_players_name_list[x];
                $("#team_ranking tr").remove();
                buildTable(p_id, p_name);
            }
    
        })
        .catch(err => {
            console.error(err);
        });
    })
}





// =======================================
// =======================================
// =======================================
// Individual Stats
// =======================================
// =======================================
// =======================================


function get_playerId() {
    var pname = document.getElementById('inputplayername').value;
    const url = "https://www.balldontlie.io/api/v1/players?search=" + pname;
    const a = fetch(url)

    a.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        let x = data.data
        console.log(x);
        console.log("Player Name: " + pname + "\n" + "Player ID: " + x.id);
    })
    .catch(err => {
        console.error(err);
    });

    
}


/*
function get_playerStats() {

    const url = "https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=1&player_ids[]=2" + pname;
    const a = fetch(url)

    a.then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.error(err);
    });

} */