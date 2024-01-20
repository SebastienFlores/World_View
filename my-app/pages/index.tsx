import Image from "next/image";
import { Inter } from "next/font/google";
import { fetchCountrys } from "@/services/UsersService";
import { useEffect, useState } from "react";
import CountryCard from "@/components/country";
import Link from "next/link";
import NarbarCard from "@/components/navbar/navbar";
import styles from "./styles.module.css";

export default function Home() {
  const [countrys, setcountrys] = useState(null);
  useEffect(() => {
    fetchCountrys().then((response) => {
      setcountrys(
        response.sort(function compare(a, b) {
          if (a.name.common < b.name.common) return -1;
          if (a.name.common > b.name.common) return 1;
          return 0;
        })
      );
    });
  }, []);

  return (
    <main>
      <NarbarCard countrys={countrys} />
      {countrys && (
        <div className={styles.responsive}>
          {countrys.map((country) => {
            return (
              <Link href={`/country/${country.ccn3}`}>
                <CountryCard
                  name={country.name.common}
                  flag={country.flags.png}
                />
              </Link>
            );
          })}
        </div>
      )}
    </main>
  );
}
