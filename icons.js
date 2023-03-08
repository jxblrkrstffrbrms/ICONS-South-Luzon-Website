

async function login() {
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;

    if (!username || !password) {
        alert("Please fill missing input");
        return
    }

    // we will change the url of this once we get to deploy our API
    console.log({"username": username, "password": password})
    await fetch('http://127.0.0.1:8080/icons/admins', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"username": username, "password": password})
    })
       .then(response => response.json())
       .then(response => {
            if (response.message == 'OK') {
                alert('Successfully logged in as admin');
                location.replace("./home.html");
            }

            /*
            if (response.message == 'OK') {
                sessionStorage.setItem("token", response.token);
            }
            */
       })
}


async function getActivities() {

    fetch("http://127.0.0.1:8080/icons/activities")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let activity_list = `<div class="row">`;
        acts = document.getElementById('activities').innerHTML;
        let counter = 1;
        for (const activity of data) { 
            activity_list += `<div class="card" style="width: 18rem;">
                            <img class="card-img-top" src="${activity.image_url}" alt="Card image cap">
                            <div class="card-body">
                            <h5 class="card-title">${activity.title}</h5>
                            <p class="card-text">${activity.text}</p>
                            <button class="btn btn-primary">EDIT</button>
                            <button class="btn btn-danger" onclick="deleteActivity('${activity._id}')">DELETE</a>
                            </div>
                        </div>`
            
            if (counter % 3 == 0) {
                activity_list += `</div> <div class="row">`
            }
        }
        document.getElementById('activities').innerHTML = activity_list
    });
}


async function createActivity() {

    image_url = document.getElementById('image_url').value;
    title = document.getElementById('title').value;
    text = document.getElementById('text').value;


    await fetch('http://127.0.0.1:8080/icons/activities', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "image_url": image_url,
                "title": title,
                "text": text
            }
        )
    })
       .then(response => response.json())
       .then(response => {
            if (response.message == 'OK') {
                alert('Successfully added new activity')
                location.reload();
            }
       })
}


async function deleteActivity(id) {
    await fetch(`http://127.0.0.1:8080/icons/activities/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
       .then(response => response.json())
       .then(response => {
            if (response.message == 'OK') {
                alert('Successfully deleted new activity')
                getActivities();
            }
       })
}



async function setUserActivities() {
    fetch("http://127.0.0.1:8080/icons/activities")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let activity_list = '';
        acts = document.getElementById('activities').innerHTML;
        let counter = 1;
        for (const activity of data) { 
            console.log(counter)
            if (counter % 3 == 1) {
                activity_list += '<div class="articles">';
            }
            activity_list += `<div class="act">
                                <a href="act1.html">
                                <img src="${activity.image_url}"></a>
                                <h4 class="act-title">${activity.title}</h4>
                                <div class="line2"></div>
                                <p class="act-desc">${activity.text}</p>
                              </div>`
            
            if (counter % 3 == 0) {
                activity_list += `</div>`
            }
            counter++;
        }
        document.getElementById('activities').innerHTML = activity_list
    });
}

