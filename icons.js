

async function login() {

    //This is the function for submitting the credentials in the login page
    // 
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;


    // If both username and password fields are empty
    // the window will alert that the user needs to fill in both fields
    if (!username || !password) {
        alert("Please fill missing input");
        return
    }

    // we will change the url of this once we get to deploy our API
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
            // This is the expected response from the endpoint
            // This is how we know the user credentials is valid and active
            if (response.message == 'OK') {
                alert('Successfully logged in as Admin');
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


    // This sets the activities content for the home.html 
    fetch("http://127.0.0.1:8080/icons/activities")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let activity_list = '';
        acts = document.getElementById('activities').innerHTML;
        let counter = 1;
        for (const activity of data) { 

            if (counter % 3 == 1) {
                activity_list += `<div class="row mt-4">`
            }
            activity_list += `<div class="col-md-4">
                            <div class="card" style="width: 100%;">
                            <img class="card-img-top" src="${activity.image_url}" alt="Card image cap">
                            <div class="card-body">
                            <h5 class="card-title">${activity.title}</h5>
                            <p class="card-text">${activity.text}</p>
                            <button class="btn btn-primary">EDIT</button>
                            <button class="btn btn-danger" onclick="deleteActivity('${activity._id}')">DELETE</a>
                            </div>
                        </div></div>`

            if (counter % 3 == 0) {
                activity_list += `</div>`
            }
            counter++;
        }
        document.getElementById('activities').innerHTML = activity_list
    });
}


async function getObjectives() {

    // The endpoint /icons/objective returns the objectives text in the text attribute
    // that is why we access it using the data.text in line 80
    fetch("http://127.0.0.1:8080/icons/objectives")
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('objectives_text').innerHTML = data.text
    });
}


async function createActivity() {

    // We get the inputs from the html fields in add.html
    // these are the three fields that we are collecting to create an activity
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

    // We delete the activity using this endpoint
    // with the DELETE method 

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

    // This is the function that sets the activities section content in activities.html

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

            // Kindly change this to your preferred design
            // This is the initial design you had
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

async function getGallery() {
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

// This is the needed functions for home.html
async function homeStartup() {
    getActivities();
    getObjectives();
}