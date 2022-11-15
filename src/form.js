function displayForm(){
    const form = document.querySelector('#addProjectForm');
    const addProject = document.querySelector('#addProject');
    form.classList.remove('hide');
    addProject.classList.add('hide');
}

export default displayForm