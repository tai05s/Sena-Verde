// Variáveis de controle
let usuarioLogado = false;
let pontos = 0;

// Função para fazer login
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simulando o login (aqui você pode criar uma lógica para login real sem backend, por exemplo)
  if (email && password) {
    usuarioLogado = true;
    document.getElementById('login').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    document.getElementById('nav').classList.remove('hidden');
    document.getElementById('nomeUsuario').textContent = email;
    document.getElementById('pontos').textContent = pontos + ' pts';
    document.getElementById('perfilPontos').textContent = pontos + ' pts';
  } else {
    alert('Email ou senha inválidos.');
  }
}

// Função de cadastro (aqui você pode simular com armazenamento local ou em outro lugar)
function register() {
  alert('Cadastro não implementado sem backend.');
}

// Função de logout
function logout() {
  usuarioLogado = false;
  document.getElementById('app').classList.add('hidden');
  document.getElementById('nav').classList.add('hidden');
  document.getElementById('login').classList.remove('hidden');
}

// Função para mudar foto de perfil
function trocarFoto() {
  const novaFoto = prompt('Cole o link da nova foto:');
  if (novaFoto) {
    document.getElementById('fotoPerfil').src = novaFoto;
    document.getElementById('perfilFoto').src = novaFoto;
  }
}

// Função para enviar denúncia
function enviarDenuncia(event) {
  event.preventDefault();
  pontos += 10;
  document.getElementById('pontos').textContent = pontos + ' pts';
  document.getElementById('perfilPontos').textContent = pontos + ' pts';
  alert('Denúncia enviada! Você ganhou 10 pontos.');
}

// Função de reset de senha (não implementada aqui)
function enviarResetSenha() {
  alert('Recuperação de senha não implementada.');
}

// Função para mostrar tela específica
function mostrarTela(tela) {
  document.querySelectorAll('.screen').forEach(t => t.classList.add('hidden'));
  document.getElementById(tela).classList.remove('hidden');
}

function mostrarTelaLogin() {
  document.getElementById('resetSenha').classList.add('hidden');
  document.getElementById('login').classList.remove('hidden');
}
