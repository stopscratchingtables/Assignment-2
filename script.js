// =======================================
// =======================================
// =======================================
// Individual Stats
// =======================================
// =======================================
// =======================================

function calc_stats() {
    // Finding the Player's ID
    var pname = document.getElementById('inputplayername').value;
    const url = "https://www.balldontlie.io/api/v1/players?search=" + pname;
    const a = fetch(url)

    a.then(response => {
        return response.json()
    })
    .then(data => {
        let x = data.data
        console.log(x)
        for (let i=0; i<x.length; i++)
        {

            var p_id = x[i].id;
            var p_name = x[i].first_name + " " +  x[i].last_name;
            var p_pos = x[i].position;
            var p_height = `${x[i].height_feet}` + " feet " +  `${x[i].height_inches}` + " inches"
            var p_team = x[i]['team']['full_name'];

        }
        get_playerStats(p_id);

        document.getElementById('playername').innerHTML = "Name: " + p_name;
        document.getElementById('position').innerHTML = "Position: " + p_pos;
        document.getElementById('height').innerHTML = "Height " + p_height;
        document.getElementById('t').innerHTML = "Team: " + p_team

    })
    .catch(err => {
        console.error(err);
    });
}


function get_playerStats(p_id) {
    $("#szn_stats tr").remove();
    var url_list = []
    var ppg_list = []
    var rpg_list = []
    var apg_list = []
    var pm_list = []
    const url_20 = "https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=" + p_id;
    const url_19 = "https://www.balldontlie.io/api/v1/season_averages?season=2019&player_ids[]=" + p_id;
    const url_18 = "https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=" + p_id;
    const url_17 = "https://www.balldontlie.io/api/v1/season_averages?season=2017&player_ids[]=" + p_id;
    const url_16 = "https://www.balldontlie.io/api/v1/season_averages?season=2016&player_ids[]=" + p_id;
    const url_15 = "https://www.balldontlie.io/api/v1/season_averages?season=2015&player_ids[]=" + p_id;
    const url_14 = "https://www.balldontlie.io/api/v1/season_averages?season=2014&player_ids[]=" + p_id;
    url_list.push(url_20, url_19, url_18, url_17, url_16, url_15, url_14);
    for (i=0; i<url_list.length; i++)
    {
        const a = fetch(url_list[i]);

        a.then(response => {
            return response.json()
        })
        .then(data => {
            let x = data.data;
            console.log(x);


            for (let i = 0; i<x.length; i++)
            {

                var szn = x[i].season;
                var ppg = x[i].pts;
                var rpg = x[i].reb;
                var apg = x[i].ast;



                // Plus minus formula = (PTS + REB + AST + STL + BLK − Missed FG − Missed FT - TO) / GP.
                var pm = (ppg + rpg + apg + x[i].stl + x[i].blk - (x[i].fga - x[i].fgm) - (x[i].fta - x[i].ftm) - x[i].turnover) ;


            }

            ppg_list.push(ppg);
            apg_list.push(apg)
            rpg_list.push(rpg);
            pm_list.push(pm/82 * 10);

            document.getElementById('szn_stats').innerHTML += `<tr>
                                                                    <th scope="row">${szn}</th>
                                                                    <td>${ppg.toFixed(2)}</td>
                                                                    <td>${rpg.toFixed(2)}</td>
                                                                    <td>${apg.toFixed(2)}</td>
                                                                    <td>${pm.toFixed(2)}</td>
                                                                </tr>`
                                                                
        })
        .catch(err => {
            console.error(err);
        });
    }
    buildChart(ppg_list, rpg_list, apg_list, pm_list);
    playerDesc(ppg_list, rpg_list, apg_list, pm_list)
}


function buildChart (ppg_list, rpg_list, apg_list, pm_list) {

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
          datasets: 
          [{
              label: 'Points Per Game',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: ppg_list.reverse(),
              fill: false
          }, {
              label: 'Rebounds Per Game',
              backgroundColor: 'rgb(99, 177, 255)',
              borderColor: 'rgb(99, 177, 255)',
              data: rpg_list.reverse(),
              fill: false
          }, {
              label: 'Assists Per Game',
              backgroundColor: 'rgb(175, 129, 222)',
              borderColor: 'rgb(175, 129, 222)',
              data: apg_list.reverse(),
              fill: false
          }, {
              label: '+/- Per Game',
              backgroundColor: 'rgb(46, 219, 31)',
              borderColor: 'rgb(46, 219, 31)',
              data: pm_list.reverse(),
              fill: false
          }]
      }
    });
}


function playerDesc(ppg_list, rpg_list, apg_list, pm_list) {
    var pointsDesc = ""
    var rpg_list = ""
    var assistsDesc = ""
    var pm_list = ""

    if (ppg[0] > 18)
    {

    }

}




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
    document.getElementById('team_logo').innerHTML = '<img src="media/teamlogos/lakers.png" alt="" height="225px" width="350px">'
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
    let active_players_pos_list = []
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
            if (b[i].startNba > 2000)
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
    
    document.getElementById('team_logo').innerHTML = '<img src="media/teamlogos/nets.png" alt="" height="225px" width="275px">'
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
    var ftp = 0;
    var pos = "";
    var blks = 0;
    var stls = 0;
    var fouls = 0;
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

                if (y[i].plusMinus > 0 || y[i].plusMinus < 0 )
                {
                        pm += parseFloat(y[i].plusMinus);
                }

                if (y[i].ftp > 0)
                {
                        ftp += parseFloat(y[i].ftp);
                }
                if (y[i].blocks > 0)
                {
                        blks += parseFloat(y[i].blocks);
                }
                if (y[i].steals > 0)
                {
                        stls += parseFloat(y[i].steals);
                }
                if (y[i].pFouls > 0)
                {
                        fouls += parseFloat(y[i].pFouls);
                }
                
            }
            ppg = (ppg/82);
            apg = (apg/82);
            rpg = (rpg/82);
            pm = (pm/82)
            ftp = (ftp/82)
            pos = y[0]['pos']
            blks = (blks/82)
            stls = (stls/82)
            fouls = (fouls/82)

            document.getElementById('team_ranking').innerHTML += `<tr>
                                                                    <th scope="row">${b}(${pos})</th>
                                                                    <td>${ppg.toFixed(1)}</td>
                                                                    <td>${apg.toFixed(1)}</td>
                                                                    <td>${rpg.toFixed(1)}</td>
                                                                    <td>${blks.toFixed(1)}</td>
                                                                    <td>${stls.toFixed(1)}</td>
                                                                    <td>${fouls.toFixed(1)}</td>
                                                                    <td>${pm.toFixed(1)}</td>
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

    document.getElementById('team_logo').innerHTML = '<img src="media/teamlogos/nuggets.png" alt="" height="225px" width="275px">'
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

    document.getElementById('team_logo').innerHTML = '<img src="media/teamlogos/heat.png" alt="" height="250px" width="275px">'
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

    document.getElementById('team_logo').innerHTML = '<img src="media/teamlogos/celtics.png" alt="" height="225px" width="275px">'
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

    document.getElementById('team_logo').innerHTML = '<img src="media/teamlogos/warriors.png" alt="" height="250px" width="275px">'
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

    document.getElementById('team_logo').innerHTML = '<img src="media/teamlogos/raptors.png" alt="" height="260px" width="310px">'
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
// Build your own lineup
// =======================================
// =======================================
// =======================================


function playerone_byol() {

    let pname = document.getElementById("player_one")
    displayStats_byol(pname);

}

function playertwo_byol() {

    let pname = document.getElementById("player_two")

}

function playerthree_byol() {

    let pname = document.getElementById("player_three")

}

function playerthree_byol() {

    let pname = document.getElementById("player_three")

}

function playerfour_byol() {

    let pname = document.getElementById("player_four")

}

function playerfive_byol() {

    let pname = document.getElementById("player_five")

}

function displayStats_byol(pname) {

    const url = "https://www.balldontlie.io/api/v1/players?search=" + pname;
    const a = fetch(url)

    a.then(response => {
        return response.json()
    })
    .then(data => {
        let x = data.data
        console.log(x)

        
        for (let i=0; i<x.length; i++)
        {

            var p_id = x[i].id;
            var p_name = x[i].first_name + " " +  x[i].last_name;
            var p_pos = x[i].position;
            var p_height = `${x[i].height_feet}` + " feet " +  `${x[i].height_inches}` + " inches"
            var p_team = x[i]['team']['full_name'];

        }
        
        document.getElementById("p_name_build").innerHTML = 

    })
    .catch(err => {
        console.error(err);
    });

}