


async function login() {

    //This is the function for submitting the credentials in the login page
    // 
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;


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
                sessionStorage.setItem("token", response.token);
                sessionStorage.setItem("admin_name", response.name);
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

async function editgetActivities() {

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
                alert('Successfully added a new activity')
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
                alert('Successfully deleted activity')
                editgetActivities();
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
        let modals = '';
        acts = document.getElementById('activities').innerHTML;
        let counter = 1;
        for (const activity of data) { 
            if (counter % 3 == 1) {
                activity_list += '<div class="articles">';
            }

            // Kindly change this to your preferred design
            // This is the initial design you had
            activity_list += `<div class="act">
                                <a onclick="getActivityPage('${activity.title}', '${activity.image_url}', '${activity.text}')">
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
        console.log(modals)
        document.getElementById('activities').innerHTML = activity_list
        //document.body.innerHTML += modals;
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

    adminName = sessionStorage.getItem('admin_name');


    document.getElementById('admin_name').innerHTML = adminName;
    document.getElementById('admin_prefix').innerHTML = adminName['0'];
}

async function sendEmail() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (!email || !name || !message) {
        alert('Please fill in all required fields')
        return 
    }

    const body = {
        'email': email,
        'subject': name,
        'message': message
    }



     await fetch('http://127.0.0.1:8080/icons/contact', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
       .then(response => response.json())
       .then(response => {
            if (response.message == 'OK') {
                alert('Successfully sent a message. Thank you')
                location.reload();
            }
    })
}


async function setObjectives() {
    fetch("http://127.0.0.1:8080/icons/objectives")
        .then((response) => response.json())
        .then((data) => {
            console.log(data.text)
            document.getElementById('edit_objectives').value = data.text;
            document.getElementById('objectives_current').innerHTML = data.text;
            
    });
}

async function editObjectives() {
    const body = {
        'text': document.getElementById('edit_objectives').value
    }
    await fetch('http://127.0.0.1:8080/icons/objectives', {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
       .then(response => response.json())
       .then(response => {
            if (response.message == 'OK') {
                alert('Updated Succesfully')
                location.reload();
        }
    })
}


async function userGetGallery() {


    // This sets the gallery content for the activities.html 
    fetch("http://127.0.0.1:8080/icons/gallery")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let galleryPreText = '';
        let galleryText = '';
        let galleryPostText = '';
        let counter = 1;
        acts = document.getElementById('activities').innerHTML;
        for (const picture of data) { 
            galleryPreText += `<input type="radio" name="r" id="r${counter}">`
            const s1 = counter == 1 ? "s1" : "";
            galleryText += `<div class="slide ${s1}">
                                <img src="${picture.image_url}">
                            </div>`
            galleryPostText += `<label for="r${counter}" class="bar"></label>`
            counter+=1;
        }

        document.getElementById('slidesContent').innerHTML = galleryPreText + galleryText + ` <div class="navigation" id="navigation"> ${galleryPostText} </div>`
        
    });
}

async function blogsStartup() {
    setUserActivities();
    userGetGallery();
}

async function adminGalleryStartup() {
    getPictures();
}



async function getPictures() {


    // This sets the gallery content for the activities.html 
    fetch("http://127.0.0.1:8080/icons/gallery")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        let galleryText = '';
        let counter = 1;
        for (const picture of data) { 
            galleryText += `<div class="row my-5">
                                <h1>
                                    <strong>Picture ${counter}</strong>
                                    <button class="btn btn-danger btn-sm" onclick="deletePicture('${picture._id}')">DELETE</a>
                                </h1>
                                <img class="img-fluid" src="${picture.image_url}" alt="">
                                
                            </div>`
            counter+=1;
        }

        document.getElementById('admin_gallery').innerHTML = galleryText;
    });
}


async function deletePicture(id) {


    // We delete the picture using this endpoint
    // with the DELETE method 

    await fetch(`http://127.0.0.1:8080/icons/gallery/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(response => {
            if (response.message == 'OK') {
                alert('Picture has been deleted successfully')
                getPictures();
            }
        })
}

async function addPicture() {

    const body = {
        'image_url': document.getElementById('add_picture').value
    }
    await fetch('http://127.0.0.1:8080/icons/gallery', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(response => {
            if (response.message == 'OK') {
                alert('Successfully added a new picture')
                location.reload();
        }
    })
    
}

async function getMessages() {


    // This sets the gallery content for the activities.html 
    fetch("http://127.0.0.1:8080/icons/contact")
    .then((response) => response.json())
    .then((data) => {
        let messageText = '';
        let counter = 1;
        for (const message of data) { 
            messageText += `<div class="card">
                                <div class="card-header">
                                ${message.created}
                                </div>
                                <div class="card-body">
                                <h5 class="card-title">${message.subject} - (${message.email})</h5>
                                <p class="card-text">${message.message}</p>
                                <a href="#" class="btn btn-danger">Remove</a>
                                </div>
                            </div>`
            counter+=1;
        }

        document.getElementById('messages').innerHTML = messageText;
    });
}


async function getActivityPage(title, image_url, text) {

    sessionStorage.setItem('page_title', title);
    sessionStorage.setItem('page_image', image_url);
    sessionStorage.setItem('page_text', text);
    location.replace("./act1.html");
}

async function loadPageDetails() {
    document.getElementById('page_title').innerHTML = sessionStorage.getItem('page_title');
    document.getElementById('page_image').src = sessionStorage.getItem('page_image');
    document.getElementById('page_text').innerHTML = sessionStorage.getItem('page_text');
}