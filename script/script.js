/*jshint esversion: 6 */
/*jshint funcscope:true*/


// =======================================
// =======================================
// =======================================
// Toggle Dark/Light Mode
// =======================================
// =======================================
// =======================================

if (localStorage.getItem('darkLightToggle' == null) || localStorage.getItem('darkLightToggle') == "lightMode")
{
    localStorage.setItem('darkLightToggle', "lightMode")
}
else if (localStorage.getItem('darkLightToggle') == "darkMode")
{
    $('.container').removeClass("bg-light");
    $('.container').addClass("bg-dark");
    $('.container').removeClass("text-dark");
    $('.container').addClass("text-light");      

    $('.container-fluid').removeClass("bg-light");
    $('.container-fluid').addClass("bg-dark");
    $('.container-fluid').removeClass("text-dark");
    $('.container-fluid').addClass("text-light");        

    $('.navbar').removeClass("bg-light");
    $('.navbar').addClass("bg-dark");    

    $('.nav-link').removeClass("text-dark");
    $('.nav-link').addClass("text-light");

    $('.dropdown-item').removeClass("bg-light");
    $('.dropdown-item').addClass("bg-dark");
    $('.dropdown-item').removeClass("text-dark");
    $('.dropdown-item').addClass("text-light");        

    $('.table').removeClass("text-dark");
    $('.table').addClass("text-light"); 
}


function darkModebutton() {
    darkMode = localStorage.getItem("darkLightToggle")
    if (localStorage.getItem("darkLightToggle") == "darkMode")
    {
        localStorage.setItem('darkLightToggle', 'lightMode')

        if ($('.container').hasClass("bg-dark"))
        {
            $('.container').removeClass("bg-dark");
            $('.container').addClass("bg-light");
            $('.container').removeClass("text-light");
            $('.container').addClass("text-dark");
        }
        if ($('.container-fluid').hasClass("bg-dark"))
        {
            $('.container-fluid').removeClass("bg-dark");
            $('.container-fluid').addClass("bg-light");
            $('.container-fluid').removeClass("text-light");
            $('.container-fluid').addClass("text-dark");
        }
        if ($('.container-fluid').hasClass("bg-dark"))
        {
            $('.container-fluid').removeClass("bg-dark");
            $('.container-fluid').addClass("bg-light");
            $('.container-fluid').removeClass("text-light");
            $('.container-fluid').addClass("text-dark");
        }
        if ($('.navbar').hasClass("bg-dark"))
        {
            $('.navbar').removeClass("bg-dark");
            $('.navbar').addClass("bg-light");
        }
        if ($('.nav-link').hasClass("text-light"))
        {
            $('.nav-link').removeClass("text-light");
            $('.nav-link').addClass("text-dark");
        }
        if ($('.dropdown-item').hasClass("bg-dark"))
        {
            $('.dropdown-item').removeClass("bg-dark");
            $('.dropdown-item').addClass("bg-light");
            $('.dropdown-item').removeClass("text-light");
            $('.dropdown-item').addClass("text-dark");        
        }
        if ($('.table').hasClass("text-light"))
        {
            $('.table').removeClass("text-light");
            $('.table').addClass("text-dark");
        }
    }
    else
    {
        localStorage.setItem('darkLightToggle', 'darkMode')
        if ($('.container').hasClass("bg-light"))
        {
            $('.container').removeClass("bg-light");
            $('.container').addClass("bg-dark");
            $('.container').removeClass("text-dark");
            $('.container').addClass("text-light");        
        }
        if ($('.container-fluid').hasClass("bg-light"))
        {
            $('.container-fluid').removeClass("bg-light");
            $('.container-fluid').addClass("bg-dark");
            $('.container-fluid').removeClass("text-dark");
            $('.container-fluid').addClass("text-light");        
        }
        if ($('.navbar').hasClass("bg-light"))
        {
            $('.navbar').removeClass("bg-light");
            $('.navbar').addClass("bg-dark");    
        }
        if ($('.nav-link').hasClass("text-dark"))
        {
            $('.nav-link').removeClass("text-dark");
            $('.nav-link').addClass("text-light");
        }
        if ($('.dropdown-item').hasClass("bg-light"))
        {
            $('.dropdown-item').removeClass("bg-light");
            $('.dropdown-item').addClass("bg-dark");
            $('.dropdown-item').removeClass("text-dark");
            $('.dropdown-item').addClass("text-light");        
        }
        if ($('.table').hasClass("text-dark"))
        {
            $('.table').removeClass("text-dark");
            $('.table').addClass("text-light"); 
    }
}
}

// light mode stuff
function lightMode() {
    if ($('.container').hasClass("bg-dark"))
    {
        $('.container').removeClass("bg-dark");
        $('.container').addClass("bg-light");
        $('.container').removeClass("text-light");
        $('.container').addClass("text-dark");
    }
    if ($('.container-fluid').hasClass("bg-dark"))
    {
        $('.container-fluid').removeClass("bg-dark");
        $('.container-fluid').addClass("bg-light");
        $('.container-fluid').removeClass("text-light");
        $('.container-fluid').addClass("text-dark");
    }
    if ($('.container-fluid').hasClass("bg-dark"))
    {
        $('.container-fluid').removeClass("bg-dark");
        $('.container-fluid').addClass("bg-light");
        $('.container-fluid').removeClass("text-light");
        $('.container-fluid').addClass("text-dark");
    }
    if ($('.navbar').hasClass("bg-dark"))
    {
        $('.navbar').removeClass("bg-dark");
        $('.navbar').addClass("bg-light");
    }
    if ($('.nav-link').hasClass("text-dark"))
    {
        $('.nav-link').removeClass("text-light");
        $('.nav-link').addClass("text-dark");
    }
    if ($('.dropdown-item').hasClass("bg-light"))
    {
        $('.dropdown-item').removeClass("bg-light");
        $('.dropdown-item').addClass("bg-dark");
        $('.dropdown-item').removeClass("text-dark");
        $('.dropdown-item').addClass("text-light");        
    }
    if ($('.table').hasClass("text-lught"))
    {
        $('.table').removeClass("text-dark");
        $('.table').addClass("text-light");
    }
}

// dark mode stuff
function darkMode() {
    if ($('.container').hasClass("bg-light"))
    {
        $('.container').removeClass("bg-light");
        $('.container').addClass("bg-dark");
        $('.container').removeClass("text-dark");
        $('.container').addClass("text-light");        
    }
    if ($('.container-fluid').hasClass("bg-light"))
    {
        $('.container-fluid').removeClass("bg-light");
        $('.container-fluid').addClass("bg-dark");
        $('.container-fluid').removeClass("text-dark");
        $('.container-fluid').addClass("text-light");        
    }
    if ($('.navbar').hasClass("bg-light"))
    {
        $('.navbar').removeClass("bg-light");
        $('.navbar').addClass("bg-dark");    
    }
    if ($('.nav-link').hasClass("text-dark"))
    {
        $('.nav-link').removeClass("text-dark");
        $('.nav-link').addClass("text-light");
    }
    if ($('.dropdown-item').hasClass("bg-light"))
    {
        $('.dropdown-item').removeClass("bg-light");
        $('.dropdown-item').addClass("bg-dark");
        $('.dropdown-item').removeClass("text-dark");
        $('.dropdown-item').addClass("text-light");        
    }
    if ($('.table').hasClass("text-dark"))
    {
        $('.table').removeClass("text-dark");
        $('.table').addClass("text-light");    
    }
}


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
    var url = "https://www.balldontlie.io/api/v1/players?search=" + pname;
    var a = fetch(url);

    a.then(response => {
        return response.json();
    })
    .then(data => {
        var x = data.data;
        console.log(x);
        for (let i=0; i<x.length; i++)
        {

            var p_id = x[i].id;
            var p_name = x[i].first_name + " " +  x[i].last_name;
            var p_pos = x[i].position;
            var p_height = x[i].height_feet + " feet " +  x[i].height_inches + " inches";
            var p_team = x[i].team.full_name;

        }

        document.getElementById('playername').innerHTML = "Name: " + p_name;
        document.getElementById('position').innerHTML = "Position: " + p_pos;
        document.getElementById('height').innerHTML = "Height " + p_height;
        document.getElementById('t').innerHTML = "Team: " + p_team;

        get_playerStats(p_id);
    })
    .catch(err => {
        console.error(err);
    });
}


function get_playerStats(p_id) {
    $("#szn_stats tr").remove();
    var url_list = [];
    var ppg_list = [];
    var rpg_list = [];
    var apg_list = [];
    var pm_list = [];
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
            apg_list.push(apg);
            rpg_list.push(rpg);
            pm_list.push(pm/82 * 10);

            document.getElementById('szn_stats').innerHTML += `<tr>
                                                                    <th scope="row">${szn}</th>
                                                                    <td>${ppg.toFixed(2)}</td>
                                                                    <td>${rpg.toFixed(2)}</td>
                                                                    <td>${apg.toFixed(2)}</td>
                                                                    <td>${pm.toFixed(2)}</td>
                                                                </tr>`;
        })
        .catch(err => {
            console.error(err);
        });
    }
    buildChart(ppg_list, rpg_list, apg_list, pm_list);
    playerDesc(ppg_list, rpg_list, apg_list, pm_list);
}


function buildChart (ppg_list, rpg_list, apg_list, pm_list) {

    var ctx = document.getElementById('player_chart').getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: [2020, 2019, 2018, 2017, 2016, 2015, 2014],
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




// =======================================
// =======================================
// =======================================
// Team Stats
// =======================================
// =======================================
// =======================================

function displayLakers() {
    var team_id = "14";
    var team_id2 = "17";
    var img = '<img src="media/teamlogos/lakers.png" alt="" height="225px" width="350px">';
    var team_name = 'Los Angeles Lakers';
    displayTeam(team_id, team_name, team_id2, img);
}

function displayNets() {
    var team_id = "3";
    var team_id2 = "4";
    var img = '<img src="media/teamlogos/nets.png" alt="" height="225px" width="275px">'
    var team_name = 'Brooklym Nets';
    displayTeam(team_id, team_name, team_id2, img);
}

function displayNuggets() {
    var team_id = "8";
    var team_id2 = "9";
    var img = '<img src="media/teamlogos/nuggets.png" alt="" height="225px" width="275px">';
    var team_name = 'Denver Nuggets';
    displayTeam(team_id, team_name, team_id2, img);
}

function displayHeat() {
    var team_id = "16";
    var team_id2 = "20";
    var img = '<img src="media/teamlogos/heat.png" alt="" height="250px" width="275px">';
    var team_name = "Miami Heat";
    displayTeam(team_id, team_name, team_id2, img);
}

function displayCeltics() {
    var team_id = "2";
    var team_id2 = "2";
    var img = '<img src="media/teamlogos/celtics.png" alt="" height="225px" width="275px">';
    var team_name = 'Boston Celtics';
    displayTeam(team_id, team_name, team_id2, img);
}

function displayWarriors() {
    var team_id = "11";
    var team_id2 = "11";
    var img = '<img src="media/teamlogos/warriors.png" alt="" height="250px" width="275px">';
    var team_name = "Golden State Warriors";
    displayTeam(team_id, team_name, team_id2, img);
}

function displayRaptors() {
    var team_id = "28";
    var team_id2 = "38"
    var img = '<img src="media/teamlogos/raptors.png" alt="" height="260px" width="310px">';
    var team_name = "Toronto Raptors";
    displayTeam(team_id, team_name, team_id2, img);
}

function displaySuns() {
    var team_id = "24";
    var team_id2 = "28";
    var img = '<img src="media/teamlogos/suns.png" alt="" height="225px" width="325px">';
    var team_name = 'Pheonix Suns';
    displayTeam(team_id, team_name, team_id2, img);
}

function displayBucks() {
    var team_id = "17";
    var team_id2 = "21";
    var img = '<img src="media/teamlogos/bucks.png" alt="" height="225px" width="325px">';
    var team_name = 'Milwaulke Bucks';
    displayTeam(team_id, team_name, team_id2, img);
}

function displayHawks() {
    var team_id = "1";
    var team_id2 = "1";
    var img = '<img src="media/teamlogos/hawks.png" alt="" height="225px" width="325px">';
    var team_name = 'Atlanta Hawks';
    displayTeam(team_id, team_name, team_id2, img);
}

function displaySpurs() {
    var team_id = "28";
    var team_id2 = "31";
    var img = '<img src="media/teamlogos/spurs.png" alt="" height="225px" width="325px">';
    var team_name = 'San Antonio Spurs';
    displayTeam(team_id, team_name, team_id2, img);
}

function displayJazz() {
    var team_id = "29";
    var team_id2 = "40";
    var img = '<img src="media/teamlogos/jazz.png" alt="" height="225px" width="325px">';
    var team_name = 'Utah Jazz';
    displayTeam(team_id, team_name, team_id2, img);
}

function displayTeam(tID, tNAME, tID2, img) {
    const url = "https://www.balldontlie.io/api/v1/teams/" + tID;
    const lakers = fetch(url);

    lakers.then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    });
    document.getElementById('team_logo').innerHTML = img;
    document.getElementById('t_name').innerHTML = tNAME;

    const url2 = "https://www.balldontlie.io/api/v1/games/?seasons[]=2019&team_ids[]=" + tID;
    const lakers_score = fetch(url2);
    lakers_score.then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        var data_list = data.data;
        // PPG
        let total_hts = 0;
        for (let i=0; i < data_list.length; i++)
        {
            total_hts += data_list[i].home_team_score;
        }
        total_hts = total_hts / data_list.length;
        console.log("PPG: " + total_hts);
        document.getElementById("ppg_score").innerHTML = total_hts;

        // DRG
        let drg = 0;
        for (let i=0; i < data_list.length; i++)
        {
            drg += data_list[i].visitor_team_score;
        }
        drg = (drg * 0.9) / data_list.length;
        console.log("DRG: " + drg);
        document.getElementById("def_score").innerHTML = drg.toFixed(1);
        
        // ORG
        let org = 0;
        org += total_hts * 0.9;
        document.getElementById("off_score").innerHTML = org.toFixed(1);
    })

    let active_players_id_list = [];
    let active_players_name_list = [];
    // Team indiv stats
    fetch("https://api-nba-v1.p.rapidapi.com/players/teamId/" + tID2, {
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

// =======================================
// =======================================
// =======================================
// Build your own lineup
// =======================================
// =======================================
// =======================================

function playerone_byol() {

    let pname = document.getElementById("player_one").value;
    var type = "one"

    displayStats_byol(pname, type);

}

function playertwo_byol() {

    let pname = document.getElementById("player_two").value;
    var type = "two"

    displayStats_byol(pname, type);

}

function playerthree_byol() {

    let pname = document.getElementById("player_three").value;
    var type = "three"

    displayStats_byol(pname, type);

}

function playerfour_byol() {

    let pname = document.getElementById("player_four").value;
    var type = "four"

    displayStats_byol(pname, type);

}

function playerfive_byol() {

    let pname = document.getElementById("player_five").value;
    var type = "five"

    displayStats_byol(pname, type);

}

function displayStats_byol(pname, type) {

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

    const url2 = "https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=" + p_id;
    const a = fetch(url2);

    a.then(response => {
        return response.json()
    })
    .then(data => {
        let x = data.data;
        console.log(x);

        for (let i = 0; i<x.length; i++)
            {
                var ppg = x[i].pts;
                var rpg = x[i].reb;
                var apg = x[i].ast;
                // Plus minus formula = (PTS + REB + AST + STL + BLK − Missed FG − Missed FT - TO) / GP.
                // var pm = (ppg + rpg + apg + x[i].stl + x[i].blk - (x[i].fga - x[i].fgm) - (x[i].fta - x[i].ftm) - x[i].turnover);
            }

        if (type == "one")
        {
            document.getElementById("p_name_build_one").innerHTML = `
            <p>${p_name} (${p_pos})</p>
            <p>${p_height}</p>
            <p>${p_team}</p>
            `
            document.getElementById("player1_ppg").innerHTML = ppg;
            document.getElementById("player1_rpg").innerHTML = rpg;
            document.getElementById("player1_apg").innerHTML = apg;

            localStorage.setItem("p1_ppg", ppg);
            localStorage.setItem("p1_rpg", rpg);
            localStorage.setItem("p1_apg", apg);
        }
        if (type == "two")
        {
            document.getElementById("p_name_build_two").innerHTML = `
            <p>${p_name} (${p_pos})</p>
            <p>${p_height}</p>
            <p>${p_team}</p>
            `

            document.getElementById("player2_ppg").innerHTML = ppg;
            document.getElementById("player2_rpg").innerHTML = rpg;
            document.getElementById("player2_apg").innerHTML = apg;

            localStorage.setItem("p2_ppg", ppg);
            localStorage.setItem("p2_rpg", rpg);
            localStorage.setItem("p2_apg", apg);
        }

        if (type == "three")
        {
            document.getElementById("p_name_build_three").innerHTML = `
            <p>${p_name} (${p_pos})</p>
            <p>${p_height}</p>
            <p>${p_team}</p>
            `

            document.getElementById("player3_ppg").innerHTML = ppg;
            document.getElementById("player3_rpg").innerHTML = rpg;
            document.getElementById("player3_apg").innerHTML = apg;

            localStorage.setItem("p3_ppg", ppg);
            localStorage.setItem("p3_rpg", rpg);
            localStorage.setItem("p3_apg", apg);
        }

        if (type == "four")
        {
            document.getElementById("p_name_build_four").innerHTML = `
            <p>${p_name} (${p_pos})</p>
            <p>${p_height}</p>
            <p>${p_team}</p>
            `

            document.getElementById("player4_ppg").innerHTML = ppg;
            document.getElementById("player4_rpg").innerHTML = rpg;
            document.getElementById("player4_apg").innerHTML = apg;

            localStorage.setItem("p4_ppg", ppg);
            localStorage.setItem("p4_rpg", rpg);
            localStorage.setItem("p4_apg", apg);
        }

        if (type == "five")
        {
            document.getElementById("p_name_build_five").innerHTML = `
            <p>${p_name} (${p_pos})</p>
            <p>${p_height}</p>
            <p>${p_team}</p>
            `

            document.getElementById("player5_ppg").innerHTML = ppg;
            document.getElementById("player5_rpg").innerHTML = rpg;
            document.getElementById("player5_apg").innerHTML = apg;

            localStorage.setItem("p5_ppg", ppg);
            localStorage.setItem("p5_rpg", rpg);
            localStorage.setItem("p5_apg", apg);
        }

        })
    })
}


function findResults_byol() {

    var team_ppg = 0;
    var team_apg = 0;
    var team_rpg = 0;
    team_ppg = parseFloat(localStorage.getItem("p1_ppg")) + parseFloat(localStorage.getItem("p2_ppg")) + parseFloat(localStorage.getItem("p3_ppg")) + parseFloat(localStorage.getItem("p4_ppg")) + parseFloat(localStorage.getItem("p5_ppg"));
    team_apg = parseFloat(localStorage.getItem("p1_apg")) + parseFloat(localStorage.getItem("p2_apg")) + parseFloat(localStorage.getItem("p3_apg")) + parseFloat(localStorage.getItem("p4_apg")) + parseFloat(localStorage.getItem("p5_apg"));
    team_rpg = parseFloat(localStorage.getItem("p1_rpg")) + parseFloat(localStorage.getItem("p2_rpg")) + parseFloat(localStorage.getItem("p3_rpg")) + parseFloat(localStorage.getItem("p4_rpg")) + parseFloat(localStorage.getItem("p5_rpg"));
    console.log(team_ppg, team_apg, team_rpg)


    // TEAM PPG
    if (team_ppg > 80)
    {
        var msg = "You have constructed an scoring-minded team"
        var grade = "A";
        document.getElementById("strengths_byol").innerHTML = msg;
        document.getElementById("off_grade").innerHTML = grade;
    }
    else if (team_ppg < 80 && team_ppg > 60)
    {
        var msg = "You have constructed a competitive scoring team"
        var grade = "B";
        document.getElementById("strengths_byol").innerHTML = msg;
        document.getElementById("off_grade").innerHTML = grade;
    }
    else if (team_ppg < 60)
    {
        var msg = "You have constructed a team that may struggle in scoring"
        var grade = "C";
        document.getElementById("weakness_byol").innerHTML = msg;
        document.getElementById("off_grade").innerHTML = grade;
    }

    
    // TEAM APG
    if (team_apg > 24)
    {
        var msg = ". You have constructed a very unselfish team, willing to pass for others"
        var grade = "A"
        document.getElementById("strengths_byol").innerHTML += msg;
        document.getElementById("plm_grade").innerHTML = grade;
    }
    else if (team_apg < 24 && team_apg > 10)
    {
        var msg = ". You have constructed a team that can initate an offensive system properly"
        var grade = "B"
        document.getElementById("strengths_byol").innerHTML += msg;
        document.getElementById("plm_grade").innerHTML = grade;
    }
    else if (team_apg < 10)
    {
        var msg = ". You have constructed a team that may have chemistry and passing issues"
        var grade = "C"
        document.getElementById("weakness_byol").innerHTML += msg;
        document.getElementById("plm_grade").innerHTML = grade;
    }

    // TEAM RPG
    if (team_rpg > 35)
    {
        var msg = ". You have constructed a team that is willing to crash the boards on deffence"
        var grade = "A"
        document.getElementById("strengths_byol").innerHTML += msg;
        document.getElementById("def_grade").innerHTML = grade;
    }
    else if (team_rpg < 35 && team_rpg > 20)
    {
        var msg = ". You have constructed a team that can adequatley play defence"
        var grade = "B"
        document.getElementById("strengths_byol").innerHTML += msg;
        document.getElementById("def_grade").innerHTML = grade;
    }
    else if (team_rpg < 25)
    {
        var msg = ". You have constructed a team that may arise some defensive issues"
        var grade = "C"
        document.getElementById("weakness_byol").innerHTML += msg;
        document.getElementById("def_grade").innerHTML = grade;
    }
}   