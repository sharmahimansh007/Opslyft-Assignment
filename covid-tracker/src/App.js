import React from "react";
import { CountrySelect } from "./components/SelectCountry/Countries";
import { Cards } from "./components/StatusCards/Cards";
import { Chart } from "./components/StatusChart/Chart";
import styles from "./App.module.css";
import { fetchData } from './api';


class App extends React.Component {

    state = {
    data: {},
    }

   async componentDidMount() {
    const covidData = await fetchData();

    // console.log(covidData);
    this.setState({ data: covidData });
   }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountrySelect />
        <Chart />
      </div>
    );
  }
}

export default App;