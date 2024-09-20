"use client"

import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import { useState } from "react";

export default function Home() {
  const [ category, setCategory ] = useState("All");
  return (
    <>
      <Hero />
      <Menu category={category} setCategory = {setCategory}/>
    </>
  );
}
