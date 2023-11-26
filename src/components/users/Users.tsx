import React, { Fragment } from "react";
import UserRow from "./UserRow";
import { IUsersProps } from "../types/user";



const Users: React.FC<IUsersProps> = ({ users }) => {
  return (
    <section className="mx-auto px-8 py-8">
      <table className="min-w-max w-full table-auto">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Id</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Action</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light bg-slate-50">
          {users.map((user) => (
            <UserRow user={user} key={user.id} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default React.memo(Users);
