


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
    await fetch('http://18.138.58.216:8080/icons/admins', {
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
            } else {
                alert("Invalid Username or Password");
                return
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
    fetch("http://18.138.58.216:8080/icons/activities")
    .then((response) => response.json())
    .then((data) => {
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
                            <p class="card-text" style="text-align: justify;">${activity.text}</p>
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

editActivities = []
async function editgetActivities() {

    // This sets the activities content for the home.html 
    fetch("http://18.138.58.216:8080/icons/activities")
    .then((response) => response.json())
    .then((data) => {
        editActivities = data;
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
                            <p class="card-text" style="text-align: justify;">${activity.text}</p>
                            <div></div>
                            <button class="edit_button" onclick="setBlogsModal('${activity._id}')"  data-bs-toggle="modal" data-bs-target="#myModal">EDIT</button>
                            <button class="delete_button" onclick="deleteActivity('${activity._id}')">DELETE</a>
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
    fetch("http://18.138.58.216:8080/icons/objectives")
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
    page_text = document.getElementById('page_text').value;



    await fetch('http://18.138.58.216:8080/icons/activities', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "image_url": image_url,
                "title": title,
                "text": text,
                "page_text": page_text
            }
        )
    })
       .then(response => response.json())
       .then(response => {
            if (response.message == 'OK') {
                alert('Successfully Added a New Activity')
                location.reload();
            }
       })
}


async function deleteActivity(id) {

    // We delete the activity using this endpoint
    // with the DELETE method 

    await fetch(`http://18.138.58.216:8080/icons/activities/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
       .then(response => response.json())
       .then(response => {
            if (response.message == 'OK') {
                alert('Deleted Successfully')
                editgetActivities();
            }
       })
}



let activities_array = []
async function setUserActivities() {

    // This is the function that sets the activities section content in activities.html

    fetch("http://18.138.58.216:8080/icons/activities")
    .then((response) => response.json())
    .then((data) => {
        let activity_list = '';
        let modals = '';
        acts = document.getElementById('activities').innerHTML;
        let counter = 1;
        activities_array = data;
        for (const activity of data) { 
            if (counter % 3 == 1) {
                activity_list += '<div class="articles">';
            }

            // Kindly change this to your preferred design
            // This is the initial design you had
            activity_list += `<div class="act">
                                <a onclick="getActivityPage('${activity._id}')">
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
        //document.body.innerHTML += modals;
    });
}

async function getGallery() {
    fetch("http://18.138.58.216:8080/icons/activities")
    .then((response) => response.json())
    .then((data) => {
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



     await fetch('http://18.138.58.216:8080/icons/contact', {
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
    fetch("http://18.138.58.216:8080/icons/objectives")
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('edit_objectives').value = data.text;
            document.getElementById('objectives_current').innerHTML = data.text;
            
    });
}

async function editObjectives() {
    const body = {
        'text': document.getElementById('edit_objectives').value
    }
    await fetch('http://18.138.58.216:8080/icons/objectives', {
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
    fetch("http://18.138.58.216:8080/icons/gallery")
    .then((response) => response.json())
    .then((data) => {
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
    fetch("http://18.138.58.216:8080/icons/gallery")
    .then((response) => response.json())
    .then((data) => {
        let galleryText = '';
        let counter = 1;
        for (const picture of data) { 
            galleryText += `<div class="row my-5 text-center">
                                <h1>
                                    <strong>Picture ${counter}</strong>
                                    <button class="btn btn-danger btn-sm delete_button" onclick="deletePicture('${picture._id}')">DELETE</a>
                                </h1>
                                <img class="mx-auto img-fluid" style="height: 300px; width:600px;" src="${picture.image_url}" alt="">
                                
                            </div>`
            counter+=1;
        }

        document.getElementById('admin_gallery').innerHTML = galleryText;
    });
}


async function deletePicture(id) {


    // We delete the picture using this endpoint
    // with the DELETE method 

    await fetch(`http://18.138.58.216:8080/icons/gallery/${id}`, {
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
    await fetch('http://18.138.58.216:8080/icons/gallery', {
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
                alert('Successfully Added a New Picture')
                location.reload();
        }
    })
    
}

async function getMessages() {


    // This gets the messages
    fetch("http://18.138.58.216:8080/icons/contact")
    .then((response) => response.json())
    .then((data) => {
        let messageText = '';
        let counter = 1;
        let messages = data.reverse()
        for (const message of messages) { 
            messageText += `<div class="card mt-4" style="font-weight: ${message.read ? 'normal': '700'};">
                                <div class="card-header">
                                ${message.read ? '': '<i class="bi bi-circle-fill" style="color: red"></i>'} ${message.created}
                                </div>
                                <div class="card-body">
                                <h5 class="card-title">${message.subject} - (${message.email})</h5>
                                <p class="card-text">${message.message}</p>
                                <a class="delete_button" onclick="deleteMessage('${message._id}')">Remove</a>
                                <a class="reply_button" target="_blank"
                                href='https://mail.google.com/mail/?view=cm&fs=1&to=${message.email}&su=${message.subject}&body=RE: ${message.message}'>
                                Reply</a>
                                <a class="read_button" onclick="updateMessage('${message._id}', ${message.read ? 'false)">Mark as unread</a>' : 'true)">Mark as read</a>'}
                                </div>
                            </div>`
            counter+=1;
        }

        document.getElementById('messages').innerHTML = messageText;
    });
}


async function getActivityPage(id) {
    var filtered = activities_array.filter(function (el) {
        return el._id == id;
      })[0];
    sessionStorage.setItem('page_title', filtered.title);
    sessionStorage.setItem('page_image', filtered.image_url);
    sessionStorage.setItem('page_text', filtered.page_text);
    location.replace("./act1.html");
}

async function loadPageDetails() {
    document.getElementById('page_title').innerHTML = sessionStorage.getItem('page_title');
    document.getElementById('page_image').src = sessionStorage.getItem('page_image');
    document.getElementById('page_text').innerHTML = sessionStorage.getItem('page_text');
}


async function updateMessage(id, bool) {

    // We update the messages using this endpoint
    // with the DELETE method 

    const body = {
        'read': bool
    }

    await fetch(`http://18.138.58.216:8080/icons/contact/${id}`, {
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
                alert('Message has been marked as read')
                getMessages();
            }
        })
}

async function deleteMessage(id) {

    // We delete the picture using this endpoint
    // with the DELETE method 

    await fetch(`http://18.138.58.216:8080/icons/contact/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(response => {
            if (response.message == 'OK') {
                alert('Message has been deleted successfully')
                getMessages();
            }
        })
}

function setBlogsModal(id) {
    var filtered = editActivities.filter(function (el) {
        return el._id == id;
      })[0];
    
      document.getElementById('blog_title_edit').value = filtered.title;
      document.getElementById('blog_desc_edit').value = filtered.text;
      document.getElementById('blog_url_edit').value = filtered.image_url;
      document.getElementById('blog_page_content_edit').value = filtered.page_text;

      document.getElementById('editActivitiesSaveButton').setAttribute('onclick',`saveNewActivity('${id}')`)
}

async function saveNewActivity(id) {
    const body = {
        'title': document.getElementById('blog_title_edit').value,
        'text': document.getElementById('blog_desc_edit').value,
        'image_url': document.getElementById('blog_url_edit').value,
        'page_content': document.getElementById('blog_page_content_edit').value
    }

    await fetch(`http://18.138.58.216:8080/icons/activities/${id}`, {
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
                alert('Succesfully Updated Activity')
                location.reload();
        }
    })
    location.replace("./blogs.html")
}