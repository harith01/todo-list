function displayForm(){
    const form = document.querySelector('#addProjectForm');
    const addProject = document.querySelector('#addProject');
    form.classList.remove('hide');
    addProject.classList.add('hide');
}

export function hideForm(){
    const form = document.querySelector('#addProjectForm');
    const addProject = document.querySelector('#addProject');
    form.classList.add('hide');
    addProject.classList.remove('hide');
}

export default displayForm