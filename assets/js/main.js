
function informacaoConfigPerfil(perfil) {
    const foto = document.getElementById('profile.photo')
    console.log(foto.src = perfil.photo)
    foto.alt = perfil.name

    const name = document.getElementById('profile.name')
    name.innerHTML = perfil.name

    const job = document.getElementById('profile.job')
    job.innerHTML = perfil.job

    const location = document.getElementById('profile.location')
    location.innerHTML = perfil.location

    const phone = document.getElementById('profile.phone')
    phone.href = `Telefone: ${perfil.phone}`
    phone.innerHTML = perfil.phone

    const email = document.getElementById('profile.email')
    email.innerHTML = perfil.email
}

function updateHardsSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => ` <li> <img src="${skill.logo}" class="photo" id="profile.photo"> </li>`).join('')
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li> ${skill} </li>`).join('')
}

function updateIdiomas(profileData) {
    const idioma = document.getElementById('profile.languages')
    idioma.innerHTML = profileData.languages.map(idioma => `<li>${idioma}</li>`).join('')
}

function updatePortifolio(profileData) {
    const portifolio = document.getElementById('profile.portfolio')
    portifolio.innerHTML = profileData.portfolio.map(portifolio =>  {
        return  `
        <li>
            <h3>${portifolio.name}</h3>
            <a href="${portifolio.url}">${portifolio.url}</a>
        </li>`  
    }).join('')
}

function updateExperience(profileData){
    const experience = document.getElementById('profile.professionalExperience')
    experience.innerHTML = profileData.professionalExperience.map(experience => `<li>${experience.description}</li>`)
}

(async () => {
    const perfil = await perfilApi()
    informacaoConfigPerfil(perfil)
    updateSoftSkills(perfil)
    updateHardsSkills(perfil)
    updateIdiomas(perfil)
    updatePortifolio(perfil)
    updateExperience(perfil)

    console.log(perfil)
})()

