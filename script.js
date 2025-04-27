window.addEventListener('DOMContentLoaded', (event) => {
  // Verifica se o usuário está logado
  if (localStorage.getItem('logado') === 'true') {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    document.getElementById('nav').classList.remove('hidden');
    
    // Exibir o nome salvo no perfil
    document.getElementById('nomePerfil').textContent = localStorage.getItem('nome');
    
    // Exibir a imagem do perfil
    const perfilImg = document.getElementById('perfilImg');
    const fotoPerfil = localStorage.getItem('fotoPerfil');
    if (fotoPerfil) {
      perfilImg.src = fotoPerfil; // Atualiza a foto com a que foi salva
    }
  }
});

let pontos = 0;

// Função de login
function login() {
  // Armazenando no localStorage que o usuário fez login
  localStorage.setItem('logado', 'true');
  
  // Definir um nome padrão (caso o usuário não tenha mudado o nome)
  if (!localStorage.getItem('nome')) {
    localStorage.setItem('nome', 'Usuário');
  }
  
  document.getElementById('login').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  document.getElementById('nav').classList.remove('hidden');
  
  // Definir o nome no perfil
  document.getElementById('nomePerfil').textContent = localStorage.getItem('nome');
  
  // Exibir a foto do perfil
  const perfilImg = document.getElementById('perfilImg');
  const fotoPerfil = localStorage.getItem('fotoPerfil');
  if (fotoPerfil) {
    perfilImg.src = fotoPerfil; // Atualiza a imagem do perfil
  }
}

// Função para exibir as telas
function mostrarTela(tela) {
  document.querySelectorAll('.screen').forEach(t => t.classList.add('hidden'));
  document.getElementById(tela).classList.remove('hidden');
}

// Função para enviar a denúncia
function enviarDenuncia(event) {
  event.preventDefault();
  pontos += 10;
  document.getElementById('pontos').textContent = pontos + ' pts';
  document.getElementById('perfilPontos').textContent = pontos + ' pts';
  alert('Denúncia enviada com sucesso! Você ganhou 10 pontos.');
  
  // Limpa os campos mas mantém na tela de Denúncia
  document.getElementById('descricao').value = '';
  document.getElementById('foto').value = '';
}

// Função para alterar a foto de perfil
function alterarFoto() {
  const fileInput = document.getElementById('uploadFoto');
  const file = fileInput.files[0];
  const reader = new FileReader();
  
  reader.onloadend = function() {
    const perfilImg = document.getElementById('perfilImg');
    perfilImg.src = reader.result; // Atualiza a imagem do perfil
    document.getElementById('perfilFoto').src = reader.result; // Atualiza a foto no perfil
    
    // Salva a nova foto no localStorage para persistir após refresh
    localStorage.setItem('fotoPerfil', reader.result);
  }
  
  if (file) {
    reader.readAsDataURL(file);
  }
}

// Função para atualizar o nome do perfil
function atualizarNome() {
  const novoNome = document.getElementById('nomeInput').value;
  
  if (novoNome) {
    // Salvar o novo nome no localStorage
    localStorage.setItem('nome', novoNome);
    
    // Atualizar o nome no perfil
    document.getElementById('nomePerfil').textContent = novoNome;
  }
}

// Função para mostrar a tela de "Explorar" (mapa)
function mostrarMapa() {
  mostrarTela('pesquisa'); // Exibe a tela de pesquisa (mapa)
}

// Função para voltar para a tela de "Denúncia"
function mostrarDenuncia() {
  mostrarTela('denuncia'); // Exibe a tela de denúncia
}
