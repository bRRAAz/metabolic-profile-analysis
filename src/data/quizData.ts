export interface QuizOption {
  text: string;
  scores: {
    adaptativo?: number;
    inflamatorio?: number;
    desregulacao?: number;
    nao_qualificada?: number;
  };
}

export interface QuizQuestion {
  id: number;
  text: string;
  options: QuizOption[];
}

export interface QuizBlock {
  id: number;
  title: string;
  subtitle: string;
  questions: QuizQuestion[];
}

export const quizBlocks: QuizBlock[] = [
  {
    id: 1,
    title: "Bloco 1",
    subtitle: "Histórico Metabólico",
    questions: [
      {
        id: 1,
        text: "Há quanto tempo você tenta emagrecer sem conseguir manter o resultado?",
        options: [
          { text: "Menos de 6 meses", scores: { adaptativo: 1 } },
          { text: "1 a 2 anos", scores: { adaptativo: 2 } },
          { text: "3 a 5 anos", scores: { adaptativo: 3 } },
          { text: "Mais de 5 anos ou com múltiplos reganhos de peso", scores: { adaptativo: 4 } },
        ],
      },
      {
        id: 2,
        text: "Ao iniciar uma estratégia alimentar, o que geralmente acontece?",
        options: [
          { text: "Perco peso inicialmente, mas recupero", scores: { adaptativo: 1 } },
          { text: "Fico muito restritiva e depois desregulo", scores: { adaptativo: 2 } },
          { text: "Mesmo seguindo corretamente, o resultado é lento", scores: { adaptativo: 3 } },
          { text: "Não consigo manter consistência", scores: { adaptativo: 4 } },
        ],
      },
      {
        id: 3,
        text: "Você identifica um padrão recorrente de restrição alimentar seguido de episódios de descontrole?",
        options: [
          { text: "Nunca", scores: { adaptativo: 1 } },
          { text: "Raramente", scores: { adaptativo: 2 } },
          { text: "Frequentemente", scores: { adaptativo: 3 } },
          { text: "Quase sempre", scores: { adaptativo: 4 } },
        ],
      },
      {
        id: 4,
        text: "Você já tentou acompanhamento nutricional antes?",
        options: [
          { text: "Sim, mas não tive resultado duradouro", scores: {} },
          { text: "Sim, tive algum resultado", scores: {} },
          { text: "Nunca fiz acompanhamento", scores: {} },
          { text: "Prefiro tentar sozinha", scores: {} },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Bloco 2",
    subtitle: "Marcadores Metabólicos Funcionais",
    questions: [
      {
        id: 5,
        text: "Como está a qualidade do seu sono atualmente?",
        options: [
          { text: "Durmo bem e acordo descansada", scores: { desregulacao: 1 } },
          { text: "Durmo, mas acordo cansada", scores: { desregulacao: 2 } },
          { text: "Acordo várias vezes durante a noite", scores: { desregulacao: 3 } },
          { text: "Tenho dificuldade para iniciar ou manter o sono", scores: { desregulacao: 4 } },
        ],
      },
      {
        id: 6,
        text: "Como funciona seu intestino?",
        options: [
          { text: "Regular, diariamente", scores: { inflamatorio: 1 } },
          { text: "Regular na maioria dos dias", scores: { inflamatorio: 2 } },
          { text: "Intervalos de 2–3 dias", scores: { inflamatorio: 3 } },
          { text: "Constipação frequente e/ou inchaço recorrente", scores: { inflamatorio: 4 } },
        ],
      },
      {
        id: 7,
        text: "Consumo médio de água por dia:",
        options: [
          { text: "Acima de 2 litros", scores: { inflamatorio: 1 } },
          { text: "Entre 1 e 2 litros", scores: { inflamatorio: 2 } },
          { text: "Menos de 1 litro", scores: { inflamatorio: 3 } },
          { text: "Não monitoro", scores: { inflamatorio: 4 } },
        ],
      },
      {
        id: 8,
        text: "Frequência de atividade física estruturada:",
        options: [
          { text: "4 vezes ou mais por semana", scores: { inflamatorio: 1 } },
          { text: "2 a 3 vezes por semana", scores: { inflamatorio: 2 } },
          { text: "Esporádica", scores: { inflamatorio: 3 } },
          { text: "Não pratico atualmente", scores: { inflamatorio: 4 } },
        ],
      },
      {
        id: 9,
        text: "Mesmo praticando atividade física, você percebe dificuldade em reduzir gordura corporal?",
        options: [
          { text: "Nunca", scores: { adaptativo: 1 } },
          { text: "Ocasionalmente", scores: { adaptativo: 2 } },
          { text: "Frequentemente", scores: { adaptativo: 3 } },
          { text: "Sempre", scores: { adaptativo: 4 } },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Bloco 3",
    subtitle: "Sintomas Metabólicos",
    questions: [
      {
        id: 10,
        text: "Com que frequência você apresenta inchaço ou retenção de líquidos?",
        options: [
          { text: "Nunca", scores: { inflamatorio: 1 } },
          { text: "Ocasionalmente", scores: { inflamatorio: 2 } },
          { text: "Frequentemente", scores: { inflamatorio: 3 } },
          { text: "Quase diariamente", scores: { inflamatorio: 4 } },
        ],
      },
      {
        id: 11,
        text: "Como você classificaria sua energia ao longo do dia?",
        options: [
          { text: "Estável", scores: { desregulacao: 1 } },
          { text: "Leve oscilação", scores: { desregulacao: 2 } },
          { text: "Oscilações frequentes", scores: { desregulacao: 3 } },
          { text: "Quedas acentuadas de energia", scores: { desregulacao: 4 } },
        ],
      },
      {
        id: 12,
        text: "Episódios de compulsão ou perda de controle alimentar:",
        options: [
          { text: "Nunca", scores: { desregulacao: 1 } },
          { text: "Raramente", scores: { desregulacao: 2 } },
          { text: "Frequentemente", scores: { desregulacao: 3 } },
          { text: "Quase sempre", scores: { desregulacao: 4 } },
        ],
      },
      {
        id: 13,
        text: "Ansiedade relacionada à alimentação:",
        options: [
          { text: "Ausente", scores: { desregulacao: 1 } },
          { text: "Leve", scores: { desregulacao: 2 } },
          { text: "Moderada", scores: { desregulacao: 3 } },
          { text: "Intensa", scores: { desregulacao: 4 } },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Bloco 4",
    subtitle: "Impacto e Consciência",
    questions: [
      {
        id: 14,
        text: "O seu peso impacta sua autoestima ou autoconfiança?",
        options: [
          { text: "Não impacta", scores: { adaptativo: 1 } },
          { text: "Impacto leve", scores: { adaptativo: 2 } },
          { text: "Impacto significativo", scores: { adaptativo: 3 } },
          { text: "Impacto profundo", scores: { adaptativo: 4 } },
        ],
      },
      {
        id: 15,
        text: "Se nada mudar nos próximos 6 meses, como você acredita que estará emocionalmente?",
        options: [
          { text: "Estável", scores: { desregulacao: 1 } },
          { text: "Levemente frustrada", scores: { desregulacao: 2 } },
          { text: "Frustrada", scores: { desregulacao: 3 } },
          { text: "Exausta e desmotivada", scores: { desregulacao: 4 } },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Bloco 5",
    subtitle: "Prontidão e Perfil",
    questions: [
      {
        id: 16,
        text: "Resolver essa questão é uma prioridade real neste momento?",
        options: [
          { text: "Sim, é prioridade", scores: {} },
          { text: "Quero resolver, mas ainda estou avaliando", scores: {} },
          { text: "Estou pesquisando opções", scores: {} },
          { text: "Não é prioridade agora", scores: {} },
        ],
      },
      {
        id: 17,
        text: "Você costuma investir em soluções que resolvem problemas de forma estruturada?",
        options: [
          { text: "Sim", scores: {} },
          { text: "Quando percebo valor estratégico", scores: {} },
          { text: "Avalio principalmente pelo preço", scores: {} },
          { text: "Evito investimentos", scores: {} },
        ],
      },
      {
        id: 18,
        text: "Sua renda mensal aproximada:",
        options: [
          { text: "Até 6 mil", scores: { nao_qualificada: 1 } },
          { text: "8 a 15 mil", scores: { nao_qualificada: 0 } },
          { text: "15 a 25 mil", scores: { nao_qualificada: 0 } },
          { text: "Acima de 25 mil", scores: { nao_qualificada: 0 } },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Bloco 6",
    subtitle: "Perguntas Estratégicas",
    questions: [
      {
        id: 19,
        text: "Se sua análise metabólica mostrar um bloqueio que pode ser corrigido, qual seria seu próximo passo?",
        options: [
          { text: "Quero entender como resolver definitivamente", scores: {} },
          { text: "Gostaria de analisar as possibilidades", scores: {} },
          { text: "Ainda estou apenas explorando o tema", scores: {} },
        ],
      },
      {
        id: 20,
        text: "Se você descobrir exatamente o que está bloqueando seu metabolismo e receber um plano personalizado para resolver isso, qual dessas opções representa melhor sua situação hoje?",
        options: [
          { text: "Estou pronta para investir em uma solução que realmente resolva", scores: {} },
          { text: "Estou disposta a investir se fizer sentido para o meu caso", scores: {} },
          { text: "Ainda preciso entender melhor antes de decidir", scores: {} },
          { text: "No momento estou apenas buscando informação", scores: {} },
        ],
      },
    ],
  },
];

export type ResultProfile = "adaptativo" | "inflamatorio" | "desregulacao" | "nao_qualificada";

export interface Scores {
  adaptativo: number;
  inflamatorio: number;
  desregulacao: number;
  nao_qualificada: number;
}

export function calculateResult(answers: Record<number, number>): ResultProfile {
  const scores: Scores = { adaptativo: 0, inflamatorio: 0, desregulacao: 0, nao_qualificada: 0 };

  const allQuestions = quizBlocks.flatMap((b) => b.questions);
  for (const q of allQuestions) {
    const selectedIdx = answers[q.id];
    if (selectedIdx !== undefined) {
      const option = q.options[selectedIdx];
      if (option.scores.nao_qualificada) scores.nao_qualificada += option.scores.nao_qualificada;
      if (option.scores.adaptativo) scores.adaptativo += option.scores.adaptativo;
      if (option.scores.inflamatorio) scores.inflamatorio += option.scores.inflamatorio;
      if (option.scores.desregulacao) scores.desregulacao += option.scores.desregulacao;
    }
  }

  const qualified: ResultProfile[] = [];
  if (scores.nao_qualificada > 0) return "nao_qualificada";

  const max = Math.max(scores.adaptativo, scores.inflamatorio, scores.desregulacao);

  if (scores.adaptativo === max) {
    qualified.push("adaptativo");
    return "adaptativo";
  }
  if (scores.inflamatorio === max) {
    qualified.push("inflamatorio");
    return "inflamatorio";
  }
  qualified.push("desregulacao");
  return "desregulacao";
}

export const resultData: Record<ResultProfile, { title: string; text: string; bullets: string[]; afterBullets?: string; cta: string; link: string }> = {
  adaptativo: {
    title: "Perfil compatível com a próxima etapa do protocolo exclusivo.",
    text: "Com base na sua análise, seu padrão indica adaptação metabólica associada a histórico recorrente de restrição alimentar.\n\nIsso significa que seu metabolismo pode ter reduzido eficiência como mecanismo de defesa após múltiplas tentativas de emagrecimento.\n\nNesses casos, estratégias genéricas tendem a gerar resultados temporários, mas não sustentáveis.\n\nVocê apresenta perfil compatível para avançar para a Consulta Estratégica de Reprogramação Metabólica. Nesta sessão individual sem custo, eu:",
    bullets: [
      "Analiso profundamente seu histórico metabólico",
      "Identifico o mecanismo de adaptação predominante",
      "Estruturo uma estratégia progressiva personalizada",
      "Defino o plano adequado para restaurar resposta metabólica",
    ],
    cta: "Quero entender meu plano de reprogramação metabólica",
    link: "https://calendly.com/mentoriaidealize/sessao-estrategica-idealize",
  },
  inflamatorio: {
    title: "Perfil compatível com a próxima etapa do protocolo exclusivo.",
    text: "Sua análise sugere desregulação metabólica associada a marcadores inflamatórios funcionais, como sono, intestino e retenção.\n\nIsso indica que o ambiente fisiológico atual pode estar desfavorável para resposta eficiente ao emagrecimento.\n\nAntes de intensificar restrições, é necessário reorganizar a base metabólica de forma estruturada.\n\nVocê apresenta perfil compatível para avançar para a Consulta Estratégica de Reprogramação Metabólica. Nesta sessão individual sem custo, eu:",
    bullets: [
      "Analiso profundamente seus marcadores metabólicos",
      "Identifico os fatores que estão sustentando a inflamação funcional",
      "Estruturo um protocolo individualizado de reorganização",
      "Defino o plano estratégico adequado ao seu metabolismo",
    ],
    cta: "Quero entender meu plano de reprogramação metabólica",
    link: "https://calendly.com/mentoriaidealize/sessao-estrategica-idealize",
  },
  desregulacao: {
    title: "Perfil compatível com a próxima etapa do protocolo exclusivo.",
    text: "Sua análise indica desregulação metabólica associada a resposta hormonal e comportamental.\n\nOscilações de energia, ansiedade alimentar e episódios de descontrole sugerem que o bloqueio vai além de estratégia alimentar.\n\nNesses casos, a intervenção precisa integrar ajuste metabólico e reorganização do padrão alimentar.\n\nVocê apresenta perfil compatível para avançar para a Consulta Estratégica de Reprogramação Metabólica. Nesta sessão individual sem custo, eu:",
    bullets: [
      "Analiso profundamente seu padrão hormonal e comportamental",
      "Identifico o bloqueio metabólico predominante",
      "Estruturo uma estratégia personalizada e integrada",
      "Defino o plano de ação adequado para romper esse ciclo",
    ],
    cta: "Quero entender meu plano de reprogramação metabólica",
    link: "https://calendly.com/mentoriaidealize/sessao-estrategica-idealize",
  },
  nao_qualificada: {
    title: "Seu resultado indica sinais de desorganização na base do metabolismo.",
    text: "Com base nas suas respostas, seu padrão sugere que seu metabolismo pode estar passando por um processo de desregulação metabólica funcional.\n\nIsso é comum em mulheres que já passaram por ciclos de dietas, tentativas repetidas de emagrecimento ou oscilações na alimentação.\n\nCom o tempo, o corpo pode começar a apresentar sinais como:",
    bullets: [
      "Dificuldade para emagrecer",
      "Sensação de que o metabolismo não responde",
      "Inchaço ou energia instável",
      "Episódios de descontrole alimentar",
    ],
    afterBullets: "O ponto mais importante é entender que isso não significa falta de esforço.\n\nMuitas vezes o metabolismo apenas precisa que a base seja reorganizada da forma correta.",
    cta: "Quero receber agora minha reprogramação metabólica",
    link: "https://pay.hub.la/lSMNtd205dgseLuAkY45",
  },
};
