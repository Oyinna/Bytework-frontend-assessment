import React, { Component } from 'react';
 import classes from './PremierLeagueTable.css';

class PremierLeagueTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
  }

  loadData = () => {
    console.log(this.state.start)
    const url = `https://api.football-data.org/v2/competitions/PL/standings/?start=${this.state.start}&limit=${this.state.limit}`;
    const options = {
      method:'GET',
      headers:new Headers({'X-Auth-Token':'53a685d8bdcc4a1694a4a1c37260cacf'}),
    };
    fetch(url, options)
      .then(response => response.json())
      .then(json => json.standings[0].table)
      .then(data => this.setState({ 'data': data }))
  }

  componentDidMount() {
    this.loadData()
  }

  render() {
    return (
      <div>
        <div className={classes.PremierLeague}>
          <h1>PREMIER LEAGUE</h1>
        </div><br/>
        <div className={classes.League}>
          <div className={classes.Premier}>
            <div className={classes.Table}>TABLE</div>
            <div className={classes.Fixtures}>FIXTURES</div>
            <div className={classes.Border}></div>
            <div>TEAMS</div>
          </div><br/>
          <table className={classes.PremierLeagueTable}>
            <tbody>
              { this.state.data.map((data, index) => {
                return (
                  <React.Fragment>
                    <tr key={index}>
                      <td>{data.position}</td>
                      <td><img src={data.team.crestUrl} alt="logo" className={classes.Logo}/></td>
                      <td>{data.team.name}</td>
                      <td>{data.playedGames}</td>
                      <td>{data.goalDifference}</td>
                      <td>{data.points}</td>
                    </tr>
                  </React.Fragment>
                )
              })

              }
            </tbody>
          </table>
        </div>  
      </div>
    )
  }
};

export default PremierLeagueTable