import { fetchCountrys } from "@/services/UsersService";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";

const NarbarCard = () => {
  const [countrys, setcountrys] = useState([]);
  const [searchcountry, setsearchcountry] = useState("");
  const [country, setcountry] = useMemo(
    () =>
      countrys.filter(
        (country) =>
          country.name.common.toLowerCase() === searchcountry.toLowerCase() ||
          country.cca3 === searchcountry.toUpperCase()
      ),
    [countrys, searchcountry]
  );
  useEffect(() => {
    fetchCountrys().then((response) => {
      setcountrys(response);
    });
  }, []);
  const recupcountry = (event) => {
    setsearchcountry(event.target.value);
  };
  return (
    <header className={styles.header}>
      <center>
        <Link href={"/"}>
          <button className={styles.text}>Home</button>
        </Link>
        <br />
        <input
          type="text"
          placeholder="entrer le nom du pays"
          onChange={recupcountry}
          value={searchcountry}
        />
        <br />
        <br />
        {country && (
          <Link href={`/country/${country.ccn3}`} className={styles.text}>
            Rechercher
          </Link>
        )}
      </center>
    </header>
  );
};

export default NarbarCard;
