function openModal(project) {
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const githubLink = document.getElementById('githubLink');
    const onlineLink = document.getElementById('onlineLink');
    
    const projects = {
        laisa: {
            title: "Studio Laisa Novais Hair Concept",
            description: "Site com informações de contato, promoções e serviços",
            image: "link_da_imagem_do_projeto_laisa.jpg",
            github: "https://github.com/wendell95araujo/laisa-hair-concept",
            online: "https://laisa-novais-hair-concept.web.app/"
        },
        barbearia: {
            title: "BARBEARIA ALURA",
            description: "Site com informações sobre o estabelecimento e formulário de contato",
            image: "link_da_imagem_do_projeto_barbearia.jpg",
            github: "https://github.com/wendell95araujo/barbeariaalura.io",
            online: "https://wendell95araujo.github.io/barbeariaalura.io/"
        },
        beatriz: {
            title: "BEATRIZ STORE",
            description: "Loja virtual de roupas femininas",
            image: "link_da_imagem_do_projeto_beatriz.jpg",
            github: "https://github.com/wendell95araujo/beatriz-store",
            online: "https://wendell95araujo.github.io/beatriz-store/"
        },
        dino: {
            title: "GAME - DINO DANCER",
            description: "Jogo de plataforma (jump 'n' run)",
            image: "img/projects/game-dino.gif",
            github: "https://github.com/wendell95araujo/dinogame.io",
            online: "https://wendell95araujo.github.io/dinogame.io/"
        },
        velha: {
            title: "GAME - JOGO DA VELHA",
            description: "Jogo da velha para dois jogadores",
            image: "link_da_imagem_do_projeto_velha.jpg",
            github: "https://github.com/wendell95araujo/jogodavelha.io",
            online: "https://wendell95araujo.github.io/jogodavelha.io/"
        },
        aluraMidi: {
            title: "ALURA MIDI",
            description: "Teclado musical de percussão",
            image: "link_da_imagem_do_projeto_alura_midi.jpg",
            github: "https://github.com/wendell95araujo/aluramidi",
            online: "https://wendell95araujo.github.io/aluramidi/"
        }
    };
    
    const data = projects[project];
    if (data) {
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modalImage.src = data.image;
        githubLink.href = data.github;
        onlineLink.href = data.online;
        
        modal.style.display = "flex";
    }
}

function closeModal() {
    document.getElementById('projectModal').style.display = "none";
}
