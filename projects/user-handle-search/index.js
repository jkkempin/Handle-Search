
function getRepos(userName){
    fetch("https://api.github.com/users/"+userName+"/repos")
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));

}

function displayResults(responseJson) {
    for (i = 0; i< responseJson.length; i++) {
        let name = responseJson[i].name;
        let link = responseJson[i].html_url;
        $('.container').append( `
        <ul class="repo"> 
            <li> Repo: ${name}</li>
            <li><a href="${link}">Link</a></li>
        </ul>
        `  
        )};
};


function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const userName = $('#search-handle').val();
        $('.container').empty();
        getRepos(userName);
    });
};

$(watchForm);