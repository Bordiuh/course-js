let a = {
    company:  "our company",
    title:  "Mrs.",
    name: "Dima"
}

function logicalOperator(user) {
    ((user.company === "our company" || user.company === "partner's company") && (user.title === "Mrs."|| user.title === "Ms.")) ? alert(user.name): "not our employee";
}
logicalOperator(a);


