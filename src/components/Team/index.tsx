"use client";

import { useState } from "react";

const defaultMembers = [
  {
    name: "John Doe",
    role: "Developer",
    status: "active",
    email: "example1@gmail.com"
  },
  {
    name: "Jane Doe",
    role: "Designer",
    status: "removed",
    email: "example2@gmail.com"

  },
  {
    name: "John Smith",
    role: "QA",
    status: "pending",
    email: "example3@gmail.com"

  },
];

const Team = () => {
  const [members, setMembers] = useState(defaultMembers);
  return <div>Team</div>;
};

export default Team;
