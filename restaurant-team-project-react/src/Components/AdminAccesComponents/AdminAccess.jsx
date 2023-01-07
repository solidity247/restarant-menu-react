import { useContext } from "preact/hooks";
import { useState } from "react";
import { useMenu } from "../MenuContext";
import AdminInterface from "./AdminInterface";
import AdminItemCard from "./AdminItemCard";
import AdminItemContainer from "./AdminItemContainer";

export default function AdminAccess({ onAccessChange, onFormSubmit }) {
  const menu = useMenu();

  return (
    <div>
      Admin's page <br /> Here we can manage our web site
      <br />
      <AdminInterface></AdminInterface>
      {menu?.map((item, index) => (
        <AdminItemContainer
          onFormSubmit={onFormSubmit}
          dataIndex={index}
          itemDetails={item}
        ></AdminItemContainer>
      ))}
      <button onClick={onAccessChange}>Log out</button>
    </div>
  );
}
