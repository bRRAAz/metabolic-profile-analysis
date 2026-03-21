export interface QuizOption {
  text: string;
  scores: {
    adaptativo?: number;
    inflamatorio?: number;
    desregulacao?: number;
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

export const AUTHORITY_AFTER_INDEX = 4;
export const SOCIAL_PROOF_AFTER_INDEX = 6;
export const INCOME_QUESTION_ID = 17;

export const quizBlocks: QuizBlock[] = [
  {
    id: 1,
    title: "Bloco 1",
    subtitle: "Perfil Metabólico",
    questions: [
      {
        id: 1,
        text: "Qual dessas frases descreve melhor sua situação hoje?",
        options: [
          { text: "Já tentei várias dietas e sempre volto a engordar", scores: { adaptativo: 3 } },
          { text: "Emagreço um pouco, mas não consigo manter o resultado", scores: { adaptativo: 2 } },
          { text: "Mesmo fazendo dieta ou exercício, o peso quase não muda", scores: { adaptativo: 3 } },
          { text: "Sinto que meu metabolismo simplesmente parou de responder", scores: { adaptativo: 4 } },
        ],
      },
      {
        id: 2,
        text: "Há quanto tempo você tenta emagrecer sem conseguir manter o resultado?",
        options: [
          { text: "Menos de 1 ano", scores: { adaptativo: 1 } },
          { text: "Entre 1 e 3 anos", scores: { adaptativo: 2 } },
          { text: "Entre 3 e 5 anos", scores: { adaptativo: 3 } },
          { text: "Mais de 5 anos tentando", scores: { adaptativo: 4 } },
        ],
      },
      {
        id: 3,
        text: "Qual desses sintomas você percebe com mais frequência?",
        options: [
          { text: "Inchaço ou retenção de líquido", scores: { inflamatorio: 3 } },
          { text: "Cansaço frequente, mesmo descansada", scores: { inflamatorio: 2 } },
          { text: "Dificuldade para controlar a alimentação", scores: { desregulacao: 3 } },
          { text: "Oscilações de energia ao longo do dia", scores: { desregulacao: 2 } },
        ],
      },
      {
        id: 4,
        text: "Como está seu sono atualmente?",
        options: [
          { text: "Durmo bem e acordo descansada", scores: {} },
          { text: "Durmo, mas acordo cansada", scores: { inflamatorio: 2 } },
          { text: "Acordo várias vezes à noite", scores: { inflamatorio: 3 } },
          { text: "Tenho dificuldade para dormir", scores: { inflamatorio: 4 } },
        ],
      },
      {
        id: 5,
        text: "Como funciona seu intestino?",
        options: [
          { text: "Funciona todos os dias, sem desconforto", scores: {} },
          { text: "Funciona na maioria dos dias", scores: { inflamatorio: 1 } },
          { text: "Intervalos de 2 a 3 dias", scores: { inflamatorio: 3 } },
          { text: "Constipação frequente", scores: { inflamatorio: 4 } },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Bloco 2",
    subtitle: "Atividade Física",
    questions: [
      {
        id: 6,
        text: "Você pratica atividade física atualmente?",
        options: [
          { text: "Sim, mais de 4 vezes por semana", scores: {} },
          { text: "2 a 3 vezes por semana", scores: {} },
          { text: "Esporadicamente", scores: {} },
          { text: "Não pratico no momento", scores: {} },
        ],
      },
      {
        id: 7,
        text: "Mesmo fazendo atividade física, você percebe dificuldade para reduzir gordura?",
        options: [
          { text: "Nunca — exercício funciona para mim", scores: {} },
          { text: "Às vezes percebo essa dificuldade", scores: { adaptativo: 2 } },
          { text: "Frequentemente, mesmo me esforçando muito", scores: { adaptativo: 3 } },
          { text: "Sempre — parece que não adianta", scores: { adaptativo: 4 } },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Bloco 3",
    subtitle: "Sinais Metabólicos",
    questions: [
      {
        id: 8,
        text: "Você sente que sua energia oscila muito ao longo do dia?",
        options: [
          { text: "Não — minha energia é estável", scores: {} },
          { text: "Um pouco, mas não me incomoda tanto", scores: { desregulacao: 1 } },
          { text: "Frequentemente — especialmente à tarde", scores: { desregulacao: 3 } },
          { text: "Muito — parece uma montanha-russa todos os dias", scores: { desregulacao: 4 } },
        ],
      },
      {
        id: 9,
        text: "Com que frequência você apresenta episódios de compulsão ou perda de controle alimentar?",
        options: [
          { text: "Nunca acontece comigo", scores: {} },
          { text: "Raramente, em momentos de estresse", scores: { desregulacao: 1 } },
          { text: "Frequentemente — é algo recorrente", scores: { desregulacao: 3 } },
          { text: "Quase sempre, difícil de controlar", scores: { desregulacao: 4 } },
        ],
      },
      {
        id: 10,
        text: "O quanto o seu peso impacta sua autoestima?",
        options: [
          { text: "Não impacta — estou bem com meu corpo", scores: {} },
          { text: "Impacto leve, mas já me incomoda", scores: {} },
          { text: "Impacto significativo no dia a dia", scores: {} },
          { text: "Impacto profundo — afeta várias áreas da minha vida", scores: {} },
        ],
      },
      {
        id: 11,
        text: "Se nada mudar nos próximos 6 meses, como você acredita que estará?",
        options: [
          { text: "Igual — não me preocupa tanto", scores: {} },
          { text: "Um pouco mais frustrada", scores: {} },
          { text: "Bastante frustrada e sem esperança", scores: {} },
          { text: "Completamente desmotivada a tentar de novo", scores: {} },
        ],
      },
      {
        id: 12,
        text: "O que você já tentou para emagrecer?",
        options: [
          { text: "Dietas restritivas (low carb, jejum, detox…)", scores: {} },
          { text: "Academia intensa ou treinos pesados", scores: {} },
          { text: "Reeducação alimentar", scores: {} },
          { text: "Acompanhamento nutricional ou médico", scores: {} },
          { text: "Várias dessas — já tentei de tudo", scores: {} },
        ],
      },
      {
        id: 13,
        text: "Hoje qual é sua maior dificuldade para emagrecer?",
        options: [
          { text: "Falta de energia para manter a rotina", scores: {} },
          { text: "Falta de consistência na alimentação", scores: {} },
          { text: "Metabolismo que parece ter travado", scores: {} },
          { text: "Inchaço e retenção que não passam", scores: {} },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Bloco 4",
    subtitle: "Prontidão e Perfil",
    questions: [
      {
        id: 14,
        text: "Resolver essa questão é prioridade para você neste momento?",
        options: [
          { text: "Sim, é prioridade — quero resolver logo", scores: {} },
          { text: "Quero resolver, mas ainda estou avaliando", scores: {} },
          { text: "Estou pesquisando opções antes de decidir", scores: {} },
          { text: "Não é prioridade no momento", scores: {} },
        ],
      },
      {
        id: 15,
        text: "Qual dessas situações mais se aproxima da sua realidade?",
        options: [
          { text: "Emagrecer com saúde e manter o resultado", scores: {} },
          { text: "Destravar meu metabolismo de vez", scores: {} },
          { text: "Recuperar minha confiança com meu próprio corpo", scores: {} },
          { text: "Ter um plano claro e personalizado para seguir", scores: {} },
        ],
      },
      {
        id: 16,
        text: "Hoje, qual dessas situações mais te incomoda em relação ao seu corpo?",
        options: [
          { text: "Evitar fotos ou me olhar no espelho", scores: {} },
          { text: "Sentir que nenhuma dieta funciona para mim", scores: {} },
          { text: "Me sentir inchada ou desconfortável quase todos os dias", scores: {} },
          { text: "Sentir que perdi o controle total sobre meu peso", scores: {} },
        ],
      },
      {
        id: 17,
        text: "Sua renda mensal aproximada hoje:",
        options: [
          { text: "Até R$3.000", scores: {} },
          { text: "Entre R$3.000 e R$6.000", scores: {} },
          { text: "Entre R$6.000 e R$12.000", scores: {} },
          { text: "Acima de R$12.000", scores: {} },
        ],
      },
    ],
  },
];

export type ResultProfile = "adaptativo" | "inflamatorio" | "desregulacao" | "nao_qualificada";

export function calculateResult(answers: Record<number, number>): ResultProfile {
  // Income check: first two options = low ticket
  const incomeAnswer = answers[INCOME_QUESTION_ID];
  if (incomeAnswer === 0 || incomeAnswer === 1) return "nao_qualificada";

  const scores = { adaptativo: 0, inflamatorio: 0, desregulacao: 0 };
  const allQuestions = quizBlocks.flatMap((b) => b.questions);

  for (const q of allQuestions) {
    const selectedIdx = answers[q.id];
    if (selectedIdx !== undefined) {
      const option = q.options[selectedIdx];
      if (option.scores.adaptativo) scores.adaptativo += option.scores.adaptativo;
      if (option.scores.inflamatorio) scores.inflamatorio += option.scores.inflamatorio;
      if (option.scores.desregulacao) scores.desregulacao += option.scores.desregulacao;
    }
  }

  const max = Math.max(scores.adaptativo, scores.inflamatorio, scores.desregulacao);
  if (scores.adaptativo === max) return "adaptativo";
  if (scores.inflamatorio === max) return "inflamatorio";
  return "desregulacao";
}

export interface ResultProfileData {
  analysisTitle: string;
  analysisSubtitle: string;
  analysisText: string;
  factors: { title: string; description: string }[];
  sessionPoints: { title: string; description: string }[];
}

export const resultProfileData: Record<Exclude<ResultProfile, "nao_qualificada">, ResultProfileData> = {
  adaptativo: {
    analysisTitle: "METABOLISMO EM MODO DE DEFESA",
    analysisSubtitle: "Histórico de restrição acumulado ao longo do tempo.",
    analysisText: "Com base na sua análise, seu padrão indica que o metabolismo reduziu sua eficiência como mecanismo de proteção — após múltiplos ciclos de dieta. Nesse cenário, estratégias genéricas geram resultados temporários. O corpo aprende a resistir.",
    factors: [
      {
        title: "Base metabólica desorganizada",
        description: "Histórico de dietas repetidas pode fazer o metabolismo reduzir sua eficiência como mecanismo de sobrevivência.",
      },
      {
        title: "Instabilidade de energia e fome",
        description: "Quando sono, intestino e alimentação não estão alinhados, o corpo entra em ciclo de instabilidade — aumentando fome e dificultando o controle alimentar.",
      },
      {
        title: "Inflamação metabólica silenciosa",
        description: "Processos inflamatórios silenciosos podem aumentar inchaço, retenção e criar resistência ao emagrecimento — mesmo em quem come bem e se exercita.",
      },
    ],
    sessionPoints: [
      { title: "Analisar seu histórico metabólico completo", description: "Entender todos os ciclos de dieta, tentativas anteriores e o que foi feito até hoje." },
      { title: "Identificar o mecanismo de adaptação predominante", description: "Mapear exatamente o que está impedindo o seu metabolismo de responder." },
      { title: "Estruturar uma estratégia progressiva personalizada", description: "Um plano pensado especificamente para o seu caso — não um protocolo genérico." },
      { title: "Definir os próximos passos com clareza", description: "Sair da sessão sabendo exatamente o que fazer e por onde começar." },
    ],
  },
  inflamatorio: {
    analysisTitle: "PADRÃO INFLAMATÓRIO FUNCIONAL",
    analysisSubtitle: "Ambiente fisiológico desfavorável ao emagrecimento.",
    analysisText: "Sua análise sugere desregulação metabólica associada a marcadores inflamatórios funcionais, como sono, intestino e retenção. Isso indica que o ambiente fisiológico atual pode estar desfavorável para resposta eficiente ao emagrecimento. Antes de intensificar restrições, é necessário reorganizar a base metabólica de forma estruturada.",
    factors: [
      {
        title: "Base metabólica desorganizada",
        description: "Histórico de dietas e tentativas repetidas de emagrecimento podem fazer o metabolismo reduzir sua eficiência.",
      },
      {
        title: "Oscilações de energia e fome",
        description: "Quando sono, intestino e alimentação não estão alinhados, o corpo entra em um ciclo de instabilidade metabólica.",
      },
      {
        title: "Inflamação metabólica",
        description: "Processos inflamatórios silenciosos podem aumentar inchaço, retenção e dificuldade de perda de peso.",
      },
    ],
    sessionPoints: [
      { title: "Analisar profundamente seus marcadores metabólicos", description: "Mapear sono, intestino, retenção e outros indicadores funcionais." },
      { title: "Identificar os fatores que sustentam a inflamação funcional", description: "Descobrir o que mantém o ambiente fisiológico desfavorável." },
      { title: "Estruturar um protocolo individualizado de reorganização", description: "Um plano específico para restaurar a base metabólica." },
      { title: "Definir o plano estratégico adequado ao seu metabolismo", description: "Sair com clareza sobre os próximos passos." },
    ],
  },
  desregulacao: {
    analysisTitle: "PADRÃO DE DESREGULAÇÃO HORMONAL / COMPORTAMENTAL",
    analysisSubtitle: "Bloqueio que vai além da alimentação, hormonal e comportamental.",
    analysisText: "Com base na sua análise, seu padrão indica que as oscilações de energia, a ansiedade em torno da comida e os episódios de descontrole não são falhas de vontade. São sinais de que o metabolismo e o comportamento alimentar estão desregulados ao mesmo tempo — e nenhuma estratégia isolada resolve os dois.",
    factors: [
      {
        title: "Desregulação hormonal e de energia",
        description: "Oscilações intensas de energia ao longo do dia são um sinal de que hormônios ligados ao metabolismo e ao apetite estão fora de equilíbrio — aumentando fome, reduzindo saciedade e tornando o controle alimentar muito mais difícil.",
      },
      {
        title: "Ansiedade alimentar e episódios de descontrole",
        description: "Quando o padrão hormonal está desregulado, o cérebro interpreta situações cotidianas como emergência metabólica — gerando compulsão e perda de controle que não têm relação com força de vontade.",
      },
      {
        title: "Bloqueio duplo: metabólico e comportamental",
        description: "Tratar só a alimentação não resolve — porque o bloqueio age nos dois lados ao mesmo tempo. A intervenção precisa integrar ajuste metabólico e reorganização do padrão alimentar.",
      },
    ],
    sessionPoints: [
      { title: "Analisar profundamente seu padrão hormonal e comportamental", description: "Entender os ciclos de descontrole e energia no seu dia a dia." },
      { title: "Identificar o bloqueio metabólico predominante", description: "Mapear exatamente o que impede seu metabolismo de funcionar." },
      { title: "Estruturar uma estratégia personalizada e integrada", description: "Um plano que resolve os dois lados — metabólico e comportamental." },
      { title: "Definir o plano de ação adequado para romper esse ciclo", description: "Sair da sessão com clareza total sobre como avançar." },
    ],
  },
};

export const lowTicketFactors = [
  {
    title: "Base metabólica desorganizada",
    description: "Histórico de dietas e tentativas repetidas de emagrecimento podem fazer o metabolismo reduzir sua eficiência.",
  },
  {
    title: "Oscilações de energia e fome",
    description: "Quando sono, intestino e alimentação não estão alinhados, o corpo entra em um ciclo de instabilidade metabólica.",
  },
  {
    title: "Inflamação metabólica",
    description: "Processos inflamatórios silenciosos podem aumentar inchaço, retenção e dificuldade de perda de peso.",
  },
];
