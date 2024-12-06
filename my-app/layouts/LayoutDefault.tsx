import "./style.css";
import { useState } from "react";
import "./tailwind.css";
import TeamContext from "../context/teamContext";
import React from "react";
import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link.js";
import logoPokemon from "../assets/toppng.com-pokémon-logo-png-the-iconic-brand-of-pokémon-adventures-5000x5000.png"

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div className={"flex max-w-5xl m-auto"}>
      <Sidebar>
        <Logo />
        <Link href="/">Welcome</Link>
        <Link href="/pokedex">Pokedex</Link>
        <Link href="/équipe">Équipe</Link>
        
        {""}
      </Sidebar>
      <Content>{children}</Content>
    </div>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div id="sidebar" className={"p-5 flex flex-col shrink-0 border-r-2 border-r-gray-200"}>
      {children}
    </div>
  );
}

function Content({ children }: { children: React.ReactNode }) {
  const [team, setTeam] = useState([]);
  return (
    <div id="page-container">
      <div id="page-content" className={"p-5 pb-12 min-h-screen"}>
        <TeamContext.Provider value={{ team, setTeam }}>
        {children}
        </TeamContext.Provider>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className={"p-5 mb-2"}>
      <a href="/">
        <img src={logoPokemon} height={128} width={128} alt="logo" />
      </a>
    </div>
  );
}
