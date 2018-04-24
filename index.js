const repoIssues = 'https://api.github.com/repos/nlisauskas/javascript-fetch-lab/issues';

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  $("results").append(`<a href=${json.svn_url}>${json.svon_url}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}

const token = '62ca5ef9c2883fbedb54924265b50e8d77023cc3';

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
