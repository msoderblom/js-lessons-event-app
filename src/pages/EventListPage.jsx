import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function EventListPage() {
  const { token } = useContext(UserContext);
  return (
    <div>
      <h1>event list page</h1>
      <p>{token}</p>
    </div>
  );
}
