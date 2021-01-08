import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  link: {
    fontSize: "5rem",
    cursor: "pointer",
    textShadow: "0 10px 5px #0005",
    transition: "all .3s ease",
    ["&:hover"]: {
      textShadow: "0 50px 10px #0002",
      transform: "scale(1.1)",
    },
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/maserati">
        <div className={classes.link}>Maserati</div>
      </Link>
      <Link href="/social-app">
        <div className={classes.link}>Social App</div>
      </Link>
    </div>
  );
}
