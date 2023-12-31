function enviarFormulario(event) {
    event.preventDefault();

    const email = document.getElementById('inputEmail').value;
    const senha = document.getElementById('inputSenha').value;
    const confirmarSenha = document.getElementById('inputConfirmarSenha').value;

    if (senha.length < 8) {
        alert("Senha deve ter no mínimo 8 caracteres");
        return;
    }

    if (senha !== confirmarSenha) {
        alert("Senhas não conferem!")
        return;
    }



    fetch('http://YOUR_IP_HERE:3000/Auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({            
            email: email,
            password: senha,
        })

    })
        .then(response => {
            if (!response.ok)
                throw new Error(`HTTP error! status: ${response.status}`);

            return response.json();
        })
        .then(data => {
            window.location.href = 'http://YOUR_IP_HERE:3000/frontend/redirecionamento';
        })
        .catch(error => {
            console.error('Erro ao processar a resposta: ', error);
        });
}



function main() {
    document.getElementById('meuFormulario').addEventListener('submit', enviarFormulario);
}

main();