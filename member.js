function skillsMember() {
    var member = document.getElementById('member').value;
    var skills = document.getElementById('skills').value;

    if (member == "member1") {
        if (skills == "skills1") {
            alert("Yes, he is a member of this organization and he has skills in that area");
        } else {
            alert("Yes, he is a member of this organization but he has no skills in that area");
        }
    } else {
        alert("No, he is not a member of this organization");
    }
}