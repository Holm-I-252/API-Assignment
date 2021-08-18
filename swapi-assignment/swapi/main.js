
let button = document.getElementById('getRes');

button.addEventListener('click', () => {
    console.log('click');
    axios.get('https://swapi.dev/api/planets/2/').then(res => {
        console.log(res.data)
        let residents = res.data.residents
        for (let i = 0; i < residents.length; i++) {
            console.log(residents[i])
            axios.get(residents[i]).then(res => {
                console.log(res.data)
                let person = document.createElement('h2')
                person.innerHTML = res.data.name
                document.getElementById('content').append(person)
            })
        }
    })
})
