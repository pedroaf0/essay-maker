const argumentosanki = [
    {
        "__type__": "Note",
        "fields": [
            "Ineficácia da legislação",
            "A inefetividade da legislação dificulta a {Resolução do tema}",
            "Constituição Federal",
            "a Constituição Federal de 1988 deveria garantir a<b>integridade</b>dos brasileiros.<b>No entanto</b>, essa legislação é incapaz de resolver o {<i>TEMA}</i>, visto que o{<b>problema</b>continua atuando fortemente no contexto atual (Dado da coletania)}",
            "a legislação sendo<b>ineficaz</b>, dificulta a resolução desse<b>impasse</b>.",
            "Poder executivo",
            "Fazer com que a lei seja satisfeita",
            "visto que é o setor <b>responsável </b>pela<b></b>efetivação da legislação",
            "",
            "da nomeação de um novo diretor/ministro, realmente comprometido em resolver essa questão, para a {instituição}",
            "amenizar o problema do {tema}"
        ],
        "guid": "PmjGTUa0=z",
        "note_model_uuid": "16125a0c-a95f-11ec-8893-d8d0900548e8",
        "tags": []
    },
    {
        "__type__": "Note",
        "fields": [
            "imediatismo",
            "o {tema} tem como pilar a busca constante por prazeres instantâneos",
            "Zygmunt Bauman, modernidade líquida",
            "o conceito de modernidade líquida, do sociólogo Zygmunt Bauman elucida a carência de firmeza nas relações atuais. Nesse viés, a necessidade de combater o {problema} é ignorada",
            "fica clara a dificuldade dos indivíduos se engajarem na solução dessa questão",
            "Ministério da cidadania",
            "empenhar a população na luta contra o {problema}",
            "",
            "esse jogo pode ser oferecido gratuitamente, por exemplo, nas lojas de aplicativo tanto para android quanto para IOS",
            "da criação um jogo de celular socioeducativo que torne ludica/o a/o {resolução do problema}",
            "atenuar os efeitos do {problema}"
        ],
        "guid": "K>QGe{Z-IB",
        "note_model_uuid": "16125a0c-a95f-11ec-8893-d8d0900548e8",
        "tags": []
    },
    {
        "__type__": "Note",
        "fields": [
            "Falta de conhecimento",
            "a carência de informação sobre o {tema} garante a permanencia do {problema}",
            "Paulo Freire",
            "concordando com o educador Paulo Freire, a privação da educação dificulta a vivência plena. Nessa lógica, a falta de entendimento sobre o {tema} prejudica o dia a dia dos brasileiros",
            "sem o ensino sobre o {problema} jamais será possível corrigi-lo",
            "Ministério da Educação",
            "propagar conhecimento sobre o {tema} (e seus efeitos)",
            "",
            "esses mini-documentários podem ser difundidos, por exemplo, nas redes sociais e canais abertos.",
            "da criação de videos educativos com linguagem clara e simples",
            "garantir que a {solução do problema} seja atingida"
        ],
        "guid": "OR}w9v-eUk",
        "note_model_uuid": "16125a0c-a95f-11ec-8893-d8d0900548e8",
        "tags": []
    }
]
var argumentos = [];
for (let i = 0; i < argumentosanki.length; i++) {
    argumentos[i] = {
        "argumento":argumentosanki[i]["fields"][0],
        "tf": argumentosanki[i]["fields"][1],
        "repertorio": argumentosanki[i]["fields"][2],
        "fundamentacao": argumentosanki[i]["fields"][3],
        "fechamento": argumentosanki[i]["fields"][4],
        "agente": argumentosanki[i]["fields"][5],
        "acao": argumentosanki[i]["fields"][6],
        "detalhamento_agente": argumentosanki[i]["fields"][7],
        "detalhamento_meio": argumentosanki[i]["fields"][8],
        "meio": argumentosanki[i]["fields"][9],
        "finalidade": argumentosanki[i]["fields"][10]
    }   
}
console.log(argumentos)