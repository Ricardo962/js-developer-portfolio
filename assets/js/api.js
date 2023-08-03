

async function perfilApi(){
    const url = 'https://raw.githubusercontent.com/Ricardo962/js-developer-portfolio/main/data/profile.json';

    const fetching = await fetch(url)
    return await fetching.json()
}