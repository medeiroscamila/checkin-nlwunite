let participantes = [
    {
      nome: "Diego Fernandes",
      email: "diego@gmail.com",
      dataInscricao: new Date(2023, 4, 20, 19, 23),
      dataCheckIn: null
    },
    {
      nome: "Mayk Brito",
      email: "mayk@gmail.com",
      dataInscricao: new Date(2023, 11, 4, 19, 23),
      dataCheckIn: new Date(2023, 11, 5, 20, 20)
    },
    {
      nome: "Maria Silva",
      email: "maria@gmail.com",
      dataInscricao: new Date(2023, 9, 6, 19, 23),
      dataCheckIn: new Date(2023, 4, 21, 10, 0)
    },
    {
      nome: "João Souza",
      email: "joao@gmail.com",
      dataInscricao: new Date(2023, 0, 5, 8, 0),
      dataCheckIn: null
    },
    {
      nome: "Fernanda Lima",
      email: "fernanda@gmail.com",
      dataInscricao: new Date(2023, 3, 16, 11, 45),
      dataCheckIn: new Date(2023, 4, 21, 10, 0)
    },
    {
      nome: "Lucas Santos",
      email: "lucas@gmail.com",
      dataInscricao: new Date(2023, 4, 20, 17, 10),
      dataCheckIn: null
    },
    {
      nome: "Ana Oliveira",
      email: "ana@gmail.com",
      dataInscricao: new Date(2023, 2, 1, 19, 23),
      dataCheckIn: new Date(2023, 5, 10, 19, 23)
    },
    {
      nome: "Pedro Carvalho",
      email: "pedro@gmail.com",
      dataInscricao: new Date(2023, 7, 12, 14, 20),
      dataCheckIn: null
    },
    {
      nome: "Camila Oliveira",
      email: "camila@gmail.com",
      dataInscricao: new Date(2023, 8, 8, 18, 45),
      dataCheckIn: new Date(2023, 8, 9, 9, 0)
    },
    {
      nome: "Gustavo Santos",
      email: "gustavo@gmail.com",
      dataInscricao: new Date(2023, 9, 25, 20, 5),
      dataCheckIn: new Date(2023, 9, 26, 8, 45)
    }
  ];
  
  const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
  
    let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)
    
    if(participante.dataCheckIn == null) {
      dataCheckIn = `
        <button
          data-email="${participante.email}"
          onclick="fazerCheckIn(event)"
        >
          Confirmar check-in
        </button>
      `
    }
  
    return `
    <tr>
      <td>
        <strong>
          ${participante.nome}
        </strong>
        <br>
        <small>
          ${participante.email}
        </small>
      </td>
      <td>${dataInscricao}</td>
      <td>${dataCheckIn}</td>
    </tr>
    `
  }
  
  const atualizarLista = (participantes) => {
    let output = ""
  
    for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
    
    }
  
  document.querySelector('tbody').innerHTML = output
  } 
  
  atualizarLista(participantes)
  
  const adicionarParticipante = (event) => {
    event.preventDefault()
  
    const formData = new FormData(event.target)
  
    const participante = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      dataInscricao: new Date(),
      dataCheckIn: null
    }
  
    
    const participanteExiste = participantes.find((p) => p.email == participante.email
    
    )
  
    if (participanteExiste) {
      alert('Email já cadastrado!')
      return
    }
  
    participantes = [participante, ...participantes]
    atualizarLista(participantes)
  
    
    event.target.querySelector('[name="nome"]').value = ""
    event.targe.querySelector('[name="email"]').value = ""
  }
  
  const fazerCheckIn = (event) => {
  
  const mensagemConfirmacao = confirm('Tem certeza que deseja fazer o check-in?')
  
  if(confirm(mensagemConfirmacao) == false) {
    return
  }
    
    const participante = participantes.find((p)=> p.email == event.target.dataset.email
    )
  
    
    participante.dataCheckIn = new Date()
  
    
    atualizarLista(participantes)
  }