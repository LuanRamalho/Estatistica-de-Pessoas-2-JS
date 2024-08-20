function calcularTotal() {
    const generos = [
        document.getElementById('funk').value,
        document.getElementById('axe').value,
        document.getElementById('pagode').value,
        document.getElementById('samba').value,
        document.getElementById('eletronica').value,
        document.getElementById('pop').value,
        document.getElementById('rock').value,
        document.getElementById('sertanejo').value,
        document.getElementById('reggae').value,
        document.getElementById('forro').value
    ];

    const total = generos.reduce((acc, val) => acc + (parseInt(val) || 0), 0);
    document.getElementById('totalPessoas').innerText = `Total de Pessoas Pesquisadas: ${total}`;
}

function exibirResultados() {
    const totalPessoas = parseInt(document.getElementById('totalPessoas').innerText.split(': ')[1]);
    const generos = {
        'Funk': document.getElementById('funk').value,
        'Axé': document.getElementById('axe').value,
        'Pagode': document.getElementById('pagode').value,
        'Samba': document.getElementById('samba').value,
        'Eletrônica': document.getElementById('eletronica').value,
        'Pop': document.getElementById('pop').value,
        'Rock': document.getElementById('rock').value,
        'Sertanejo': document.getElementById('sertanejo').value,
        'Reggae': document.getElementById('reggae').value,
        'Forró': document.getElementById('forro').value,
    };

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    // Exibir resultados para cada gênero
    for (const genero in generos) {
        const quantidade = generos[genero];
        const porcentagem = totalPessoas > 0 ? ((quantidade / totalPessoas) * 100).toFixed(2) : 0;

        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');

        const label = document.createElement('label');
        label.innerText = `${genero}: ${quantidade} pessoas (${porcentagem}%)`;

        const progressBar = document.createElement('div');
        progressBar.classList.add('progress-bar');
        progressBar.style.width = `${porcentagem}%`;

        resultItem.appendChild(label);
        resultItem.appendChild(progressBar);
        resultadosDiv.appendChild(resultItem);
    }
}
