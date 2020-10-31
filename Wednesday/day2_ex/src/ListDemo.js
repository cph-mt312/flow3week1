import React from "react";

function MemberTable(props) {
    return (
        <table>
            <thead>
                <tr><th>Name</th><th>Age</th></tr>
            </thead>
            <tbody>
                {props.members.map(member => <tr key={member.name}><td>{member.name}</td><td>{member.age}</td></tr>)}
            </tbody>
        </table>
    );
}

function MemberDemo(props) {
    return (
        <div>
            <h3>All Members</h3>
            <MemberTable members={props.members} />
        </div>
    );
}

export default function Members() {
    const initialMembers = [{ name: "Peter", age: 18 },
    { name: "Hanne", age: 35 },
    { name: "Janne", age: 25 },
    { name: "Holger", age: 22 }];

    return (
        <MemberDemo members={initialMembers} />
    );
}