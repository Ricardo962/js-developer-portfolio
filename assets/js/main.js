
function informacaoConfigPerfil(perfil) {
    const foto = document.getElementById('profile.photo')
    foto.src = perfil.photo
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

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li> ${skill} </li>`).join('')

    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkillsSkills.innerHTML = profileData.skills.hardSkills.logo.map(img => `<li> ${img} </li>`).join('')
}

(async () => {
    const perfil = await perfilApi()
    informacaoConfigPerfil(perfil)
    updateSoftSkills(perfil)

    console.log(perfil)
})()