"use client"
import Image from "next/image";
import { useEffect , useState } from "react";
import style from "./pokemon.module.css";
function Pokemon(){
    const [poke,setPoke]=useState("/vercel.svg");
    const [nombre,setNombre]=useState("esperando");
    const [ID,setID]=useState("esperando");
    const [type,setType]=useState("esperando");
    const [height,setHeight]=useState("esperando");
    const [weight,setWeight]=useState("esperando");
    const [abilitis,setAbilitis]=useState("esperando");
    const [abilitis1,setAbilitis1]=useState("esperando");
    
    const [hp,setHp]=useState("esperando");
    const [atk,setAtk]=useState("esperando");
    const [def,setDef]=useState("esperando");
    const [spd,setSpd]=useState("esperando");
    const url="https://pokeapi.co/api/v2/pokemon/20";
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{setNombre(data.species.name), 
            setPoke(data.sprites.front_default),
            setID(data.id),
            setType(data.types[0].type.name),
            setHeight(data.height),
            setWeight(data.weight),
            setAbilitis(data.abilities[0].ability.name),
            setAbilitis1(data.abilities[1].ability.name),
        
            setHp(data.stats[0].base_stat),
            setAtk(data.stats[1].base_stat),
            setDef(data.stats[2].base_stat),
            setSpd(data.stats[3].base_stat)})
    },[]);
    return(
        <div className={style.main}>
            <div>
                <h1>My pokemon</h1>
                <div className={style.tipo}>
                    <p className={style.nombre}>{nombre}</p>
                    <p>#0{ID}</p>
                </div>
                <Image src={poke} height={300} width={300}/>
            </div>
            
            
            <div className={style.datosgenerales}>
                <div className={style.datos}>
                    <h2>About</h2>
                    <div className={style.cosas}>
                        <p className={style.text}>Type:</p><p>{type}</p>
                        <p className={style.text}>Height:</p><p>{height/10}m</p>
                        <p className={style.text}>Weight:</p><p>{weight/10}kg</p>
                        <p className={style.text}>Abilitis:</p><p>{abilitis},{abilitis1}</p>
                    </div>
                    
                </div>
                <div className={style.datos}>
                <h2>stats</h2>
                <div className={style.cosas}>
                    <p className={style.text}>Hp:</p><p>{hp}</p>
                    <p className={style.text}>Attack:</p><p>{atk}</p>
                    <p className={style.text}>Defense:</p><p>{def}</p>
                    <p className={style.text}>Speed:</p><p>{spd}</p>
                    
                </div>
                
            </div>
            
            </div>
        </div>
    );
}
export  default Pokemon;