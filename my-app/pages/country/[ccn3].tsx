import { useRouter } from "next/router";
import { fetchsearchCountry } from "@/services/UsersService";
import { useEffect, useState } from "react";
import NarbarCard from "@/components/navbar/navbar";
import styles from "./styles.module.css";

export default function Page() {
  const [country, setcountry] = useState(null);
  const [border, setborder] = useState("");
  const router = useRouter();
  const ccn3 = router.query.ccn3;
  useEffect(() => {
    if (ccn3) {
      fetchsearchCountry(ccn3 + "").then((response) => {
        setcountry(response[0]);
      });
    }
  }, [ccn3]);
  //if (ccn3) {
  //  country.name.nativeName.map((test) => {
  //    console.log(test);
  //  });
  //}
  return (
    <main>
      <NarbarCard />
      {country && (
        <center>
          <div>
            <img src={country.flags.svg} />
            <h1>{country.name.common}</h1>
            <h4>{country.name.official}</h4>
            <br />
            <h1 className={styles.h1}>Basic Country Information : </h1>
            <div>
              {country.name.nativeName &&
                Object.keys(country.name.nativeName).map((native) => {
                  return (
                    <div>
                      <h4>
                        Nom Commun : {country.name.nativeName[native]["common"]}
                      </h4>
                      <h4>
                        Nom Officiel :{" "}
                        {country.name.nativeName[native]["official"]}
                      </h4>
                    </div>
                  );
                })}
              <h4>tld : {country.tld}</h4>
            </div>
            <br />
            <h1 className={styles.h1}>Geographical Data : </h1>
            <div>
              <h4>
                <p>Latitude : {country.latlng[0]}</p>
                <p>Longitude : {country.latlng[1]}</p>
              </h4>
              <h4>Superficie :{country.area}</h4>
              {country.borders
                ? country.borders.map((border) => {
                    return <h4>Pays Frontialiés : {border}</h4>;
                  })
                : "Pas de Pays Frontiers"}
              <h4> Region : {country.region}</h4>
              <h4> Sous-Region : {country.subregion}</h4>
            </div>
            <br />
            <h1 className={styles.h1}>Political and Administrative Data : </h1>
            <div>
              <h4> Capital : {country.capital}</h4>
              <h4>
                {country.independent
                  ? "Le pays est indépendant"
                  : "Le pays n'est pas indépendant"}
              </h4>
              <h4>
                {country.unMember
                  ? "Le pays est un membre de UN"
                  : "Le pays n'est un membre de UN"}
              </h4>
            </div>
            <br />
            <h1 className={styles.h1}>Economic and Demographic Data : </h1>
            <div>
              <h4>Population : {country.population}</h4>
              {country.gini && (
                <h4>
                  GINI ({Object.keys(country.gini)}) :
                  {country.gini[Object.keys(country.gini)]}
                </h4>
              )}
              <h4>
                Currencies :
                {country.currencies
                  ? " " +
                    country.currencies[Object.keys(country.currencies)].name
                  : " Il n'y en a pas"}
                et le Symbole est :
                {country.currencies
                  ? " " +
                    country.currencies[Object.keys(country.currencies)].symbol
                  : " Il n'y en a pas"}
              </h4>
            </div>
            <br />
            <h1 className={styles.h1}>Cultural Data : </h1>
            <div>
              {country.languages &&
                Object.keys(country.languages).map((language) => {
                  return (
                    <h4>
                      Language du Pays : {" " + country.languages[language]}
                    </h4>
                  );
                })}
              <h4>
                Nom en anglais de la population pour les Hommes :
                {" " + country.demonyms.eng.m}
              </h4>
              <h4>
                Nom en anglais de la population pour les Femmes :
                {" " + country.demonyms.eng.f}
              </h4>
              <h4>
                Nom en français de la population pour les Hommes :
                {" " + country.demonyms.fra.m}
              </h4>
              <h4>
                Nom en français de la population pour les Femmes :
                {" " + country.demonyms.fra.f}
              </h4>
            </div>
          </div>
        </center>
      )}
    </main>
  );
}
