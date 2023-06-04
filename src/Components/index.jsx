import React from "react";
import { Header } from "./Header";
import { Filter } from "./Filter";
import { ErrorBox } from "./ErrorBox";
import { Main } from "./Main";
import { UserInfo } from "./UserInfo";

export function SomeLayer({error, isOpen}) {
  return (
    <>
      <Header />
      <UserInfo />
      <Filter isOpen={isOpen}></Filter>
      { error ? (<ErrorBox text={'Some went wrong with fetching database with games'}/>) : (<Main />)} 
    </>
  )
}