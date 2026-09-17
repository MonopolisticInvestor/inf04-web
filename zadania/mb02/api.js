// python3 -m http.server 5500

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!response.ok) {
            throw new Error(`Błąd ładowania danych: ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error(error);
        return [];
    }
}

const users = await fetchData();

if (users.length > 0) {
    let userList = users.map((user) => `<li>${user.name} Email: ${user.email} Address: ${user.address.city} Company: ${user.company.name}</li>`)
    document.getElementById("list").innerHTML = userList.join("");
    console.log(userList);
} else {
    document.getElementById("list").innerHTML = "Błąd ładowania";
}

document.getElementById("search").addEventListener("input", (e) => {filterData(e.target.value)})
function filterData(data) {
    console.log("filtering data: " , users);
    if (users) {
        let lowerCaseData = data.toLowerCase();
        let filteredUserList = users.filter((user) => 
        {
            console.log(user.name.toLowerCase().includes(lowerCaseData));
            return user.name.toLowerCase().includes(lowerCaseData)
        })
        console.log(filteredUserList);
        if (filteredUserList.length > 0) {
            document.getElementById("list").innerHTML = filteredUserList.map((user) => `<li>${user.name} Email: ${user.email} Address: ${user.address.city} Company: ${user.company.name}</li>`).join("")
        } else {
           document.getElementById("list").innerHTML =  "brak wyników"
        }
    }
}