import React from "react";

const pages = [
  {
    title: "Regularité",
    name: "regularity",
    content: {
      context1: "Lorsque vous prenez une bonne résolution (ex: s'inscrire à un club de gym, peindre plus régulièrement), à quel point les facteurs suivants peuvent vous aider à la tenir dans la durée ?",
      radioQuestion1: {
        name: "friend",
        text: "a. Trouver un proche avec le même objectif qui m’accompagne dans cette résolution pour se motiver mutuellement:",
        choices: [
          {label: "Indispensable", value: "indispensable", need: {name: "social_interactions", score: 1}},
          {label: "M'aide beaucoup", value: "helps a lot", need: {name: "social_interactions", score: 0.7}},
          {label: "M'aide un peu", value: "helps a little", need: {name: "social_interactions", score: 0.4}},
          {label: "Pas nécessaire", value: "not necessary", need: {name: "social_interactions", score: 0}}
        ]
      },
      radioQuestion2: {
        name: "teacher",
        text: "b. Trouver un professeur ou coach qui me guide et m'indique comment faire:",
        choices: [
          {label: "Indispensable", value: "indispensable", need: {name: "working_conditions", score: 1}},
          {label: "M'aide beaucoup", value: "helps a lot", need: {name: "working_conditions", score: 0.7}},
          {label: "M'aide un peu", value: "helps a little", need: {name: "working_conditions", score: 0.4}},
          {label: "Pas nécessaire", value: "not necessary", need: {name: "working_conditions", score: 0}}
        ]
      },
      radioQuestion3: {
        name: "objective",
        text: "c. Avoir un objectif particulièrement motivant (ex: perdre du poids, réaliser un certain tableau):",
        choices: [
          {label: "Indispensable", value: "indispensable", need: {name: "get_a_job", score: 1}},
          {label: "M'aide beaucoup", value: "helps a lot", need: {name: "get_a_job", score: 0.7}},
          {label: "M'aide un peu", value: "helps a little", need: {name: "get_a_job", score: 0.4}},
          {label: "Pas nécessaire", value: "not necessary", need: {name: "get_a_job", score: 0}}
        ]
      },
    }
  },
  {
    title: "Autonomie",
    name: "autonomy",
    content: {
      context1: "Dans votre environnement professionnel, on vous charge de réaliser un important projet dont les contours sont encore très flous.",
      radioQuestion1: {
        name: "comfortable",
        text: "a. A quel point vous sentez-vous à l'aise avec ce type de situation ?",
        choices: [
          {label: "Pas du tout à l'aise", value: "not at all comfortable", need: {name: "working_conditions", score: 1}},
          {label: "Peu à l'aise", value: "not comfortable", need: {name: "working_conditions", score: 0.7}},
          {label: "Assez à l'aise", value: "seldom comfortable", need: {name: "working_conditions", score: 0.4}},
          {label: "Très à l'aise", value: "very comfortable", need: {name: "working_conditions", score: 0}}
        ]
      },
      radioQuestion2: {
        name: "reaction",
        text: "b. Comment réagissez-vous ?",
        choices: [
          {label: "Vous attendez des consignes plus claires", value: "wait for more instructions", need: {name: "working_conditions", score: 1}},
          {label: "Vous commencez à vous renseigner en attendant que le projet se précise", value: "gather information", need: {name: "working_conditions", score: 0.7}},
          {label: "Vous identifiez les incertitudes et mettez en place un plan d’action pour les lever", value: "act on it", need: {name: "working_conditions", score: 0}}
        ]
      },
    }
  },
  {
    title: "Organisation",
    name: "organization",
    content: {
      context1: "Vous décidez de mener à bien un projet personnel important qui s'étale dans la durée.",
      radioQuestion1: {
        name: "how_to",
        text: "a. Comment vous y prenez-vous ?",
        choices: [
          {label: "Vous avancez dessus quand vous avez le temps", value: "when available", need: {name: "working_conditions", score: 1}},
          {label: "Vous le planifiez dans les grandes lignes", value: "planify roughly", need: {name: "working_conditions", score: 0.5}},
          {label: "Vous le planifiez dans les moindre détails", value: "planify precisely", need: {name: "working_conditions", score: 0}}
        ]
      },
      radioQuestion2: {
        name: "likelihood_success",
        text: "b. Quelle est la probabilité que vous le meniez à bien dans les temps ?",
        choices: [
          {label: "Très peu probable", value: "not likely at all", need: {name: "working_conditions", score: 1}},
          {label: "Peu probable", value: "not likely", need: {name: "working_conditions", score: 0.7}},
          {label: "Probable", value: "likely", need: {name: "working_conditions", score: 0.4}},
          {label: "Très probable", value: "very likely", need: {name: "working_conditions", score: 0}}
        ]
      }
    }
  },
  {
    title: "Concentration",
    name: "concentration",
    content: {
      radioQuestion1: {
        name: "conference",
        text: "a. Vous assistez à une longue conférence sur un sujet qui vous intéresse. A quel point est-ce facile pour vous de rester concentré tout au long de la conférence ?",
        choices: [
          {label: "Très difficile", value: "very hard", need: {name: "learning_by_doing", score: 1}},
          {label: "Plutôt difficile", value: "hard", need: {name: "learning_by_doing", score: 0.7}},
          {label: "Plutôt facile", value: "easy", need: {name: "learning_by_doing", score: 0.4}},
          {label: "Très facile", value: "very easy", need: {name: "learning_by_doing", score: 0}}
        ]
      },
      radioQuestion2: {
        name: "deliverable",
        text: "b. Vous devez réaliser un livrable qui demande beaucoup de concentration.  A quel point est-ce facile pour vous de rester concentré tout au long du processus de création ?",
        choices: [
          {label: "Très difficile", value: "very hard", need: {name: "learning_by_doing", score: 1}},
          {label: "Plutôt difficile", value: "hard", need: {name: "learning_by_doing", score: 0.7}},
          {label: "Plutôt facile", value: "easy", need: {name: "learning_by_doing", score: 0.4}},
          {label: "Très facile", value: "very easy", need: {name: "learning_by_doing", score: 0}}
        ]
      }
    }
  },
  {
    title: "Formation continue",
    name: "lifelong-learning",
    content: {
      radioQuestion1: {
        name: "frequence",
        text: "a. Depuis que vous avez fini vos études à quelle fréquence apprenez-vous de nouvelles connaissances ou compétences ?",
        choices: [
          {label: "Très rarement", value: "very rarely", need: {name: "learning_confidence", score: 1}},
          {label: "Assez rarement", value: "quite rarely", need: {name: "learning_confidence", score: 0.7}},
          {label: "De temps en temps", value: "from times to times", need: {name: "learning_confidence", score: 0.4}},
          {label: "Souvent", value: "often", need: {name: "learning_confidence", score: 0}}
        ]
      },
      radioQuestion2: {
        name: "enjoy",
        text: "b. Appréciez-vous apprendre de nouvelles choses ?",
        choices: [
          {label: "Pas du tout", value: "not at all", need: {name: "learning_confidence", score: 1}},
          {label: "Pas beaucoup", value: "not really", need: {name: "learning_confidence", score: 0.7}},
          {label: "Oui, un peu", value: "yes, a little", need: {name: "learning_confidence", score: 0.4}},
          {label: "Oui, beaucoup", value: "yes, a lot", need: {name: "learning_confidence", score: 0}}
        ]
      }
    }
  },
  {
    title: "Familiarité avec le numérique",
    name: "digital-fluency",
    content: {
      radioQuestion1: {
        name: "overall_fluency",
        text: "a. De manière générale, à quel point vous sentez vous à l'aise à l'idée de prendre un main un nouvel outil numérique ?",
        choices: [
          {label: "Pas du tout à l'aise", value: "not at all comfortable", need: {name: "onboarding", score: 1}},
          {label: "Peu à l'aise", value: "not comfortable", need: {name: "onboarding", score: 0.7}},
          {label: "Assez à l'aise", value: "seldom comfortable", need: {name: "onboarding", score: 0.4}},
          {label: "Très à l'aise", value: "very comfortable", need: {name: "onboarding", score: 0}}
        ]
      },
      radioQuestion2: {
        name: "online_practice",
        text: "b. Avez-vous déjà effectué des formations en ligne (MOOC, tutoriels ou cours en ligne) ?",
        choices: [
          {label: "Non, jamais", value: "no, never", need: {name: "onboarding", score: 1}},
          {label: "Oui, quelques fois", value: "yes, sometimes", need: {name: "onboarding", score: 0.4}},
          {label: "Oui, souvent", value: "yes, often", need: {name: "onboarding", score: 0}}
        ]
      }
    }
  },
  {
    title: "Votre formation à venir",
    name: "future-training",
    content: {
      radioQuestion1: {
        name: "duration",
        text: "a. Idéalement, en combien de temps souhaiteriez-vous finir votre formation à venir ?",
        choices: [
          {label: "3 mois ou moins", value: "3 months or less", need: {name: "short_training_duration", score: 1}},
          {label: "6 à 9 mois", value: "6-9 months", need: {name: "short_training_duration", score: 0.7}},
          {label: "1 an", value: "1 year", need: {name: "short_training_duration", score: 0.4}},
          {label: "2 ans ou plus", value: "2 years or more", need: {name: "short_training_duration", score: 0}},
          {label: "Peu importe", value: "does not matter", need: {name: "short_training_duration", score: 0}}
        ]
      },
      radioQuestion2: {
        name: "financing",
        text: "b. Combien seriez-vous prêt(e) à payer de votre poche pour financer cette formation ?",
        choices: [
          {label: "0€", value: "0", need: {name: "financing", score: 1}},
          {label: "Moins de 1 000€", value: "less than 1000", need: {name: "financing", score: 0.7}},
          {label: "1 000 à 3 000€", value: "1000 to 3000", need: {name: "financing", score: 0.5}},
          {label: "3 000 à 5 000€", value: "3000 to 5000", need: {name: "financing", score: 0.2}},
          {label: "5 000 à 10 000€", value: "5000 to 10000", need: {name: "financing", score: 0}},
          {label: "Plus de 10 000€", value: "more than 10000", need: {name: "financing", score: 0}}
        ]
      },
      radioQuestion3: {
        name: "degree",
        text: "c. A quel point est-ce important pour vous que cette formation soit diplômante ?",
        choices: [
          {label: "C'est indispensable", value: "it is a must", need: {name: "diploma", score: 1}},
          {label: "C'est un plus", value: "it is a plus", need: {name: "diploma", score: 0.4}},
          {label: "Pas important", value: "does not matter", need: {name: "diploma", score: 0}}
        ]
      },
    }
  },
  {
    title: "Votre futur poste",
    name: "future-job",
    content: {
      radioQuestion1: {
        name: "delay",
        text: "a. Au bout de combien de temps souhaiteriez-vous trouver un emploi à l'issue de votre formation ?",
        choices: [
          {label: "Moins d'1 mois", value: "less than 1 month", need: {name: "get_a_job", score: 1}},
          {label: "1 à 3 mois", value: "1 to 3 months", need: {name: "get_a_job", score: 0.8}},
          {label: "3 à 6 mois", value: "3 to 6 months", need: {name: "get_a_job", score: 0.5}},
          {label: "Moins d'un an", value: "less than 1 year", need: {name: "get_a_job", score: 0.3}},
          {label: "Je ne souhaite pas changer de poste", value: "do not want to change job", need: {name: "get_a_job", score: 0}}
        ]
      },
      radioQuestion2: {
        name: "salary",
        text: "b. A quel point le salaire est-il important dans le choix de votre futur emploi ?",
        choices: [
          {label: "Très important", value: "very important", need: {name: "get_a_job", score: 1}},
          {label: "Assez important", value: "quite important", need: {name: "get_a_job", score: 0.7}},
          {label: "Peu important", value: "seldom important", need: {name: "get_a_job", score: 0.4}},
          {label: "Pas important du tout", value: "not important at all", need: {name: "get_a_job", score: 0}}
        ]
      },
      radioQuestion3: {
        name: "mobility",
        text: "c. A quel point seriez-vous mobile pour ce nouvel emploi ?",
        choices: [
          {label: "Dans ma ville", value: "city"},
          {label: "Dans ma région", value: "region"},
          {label: "Dans mon pays", value: "country"},
          {label: "A l'international", value: "international"}
        ]
      },
    }
  },
  {
    title: "Vos coordonnées",
    name: "contact-details",
    content: {
      textQuestion1: {
        name: "firstname",
        label: "Prénom",
        validation: /^[a-zéèàëêïç\s-]{3,}$/i,
        validationHelper: "Au moins 3 caractères sans chiffres"
      },
      textQuestion2: {
        name: "name",
        label: "Nom",
        validation: /^[a-zéèàëêïç\s-]{3,}$/i,
        validationHelper: "Au moins 3 caractères sans chiffres"
      },
      selectQuestion1: {
        name: "gender",
        label: "Genre",
        choices: [
          {label: "Femme", value: "woman"},
          {label: "Homme", value: "man"},
          {label: "Autre", value: "other"}
        ]
      },
      selectQuestion2: {
        name: "statut",
        label: "Statut professionnel",
        choices: [
          {label: "Etudiant(e)", value: "student"},
          {label: "Salarié(e)", value: "employee"},
          {label: "Entrepreneur", value: "entrepreneur"},
          {label: "Freelance / Indépendant(e)", value: "freelance"},
          {label: "Demandeur d'emploi", value: "job seeker"},
          {label: "Autre", value: "other"}
        ]
      },
      textQuestion3: {
        name: "email",
        label: "Email",
        validation: /^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/,
        validationHelper: "L'adresse email n'est pas valide"
      },
      textQuestion4: {
        name: "phone",
        label: "Téléphone mobile",
        validation: /^\+?[\d\s]{8,}$/,
        validationHelper: "8 chiffres minimum"
      },
      textQuestion5: {
        name: "ville",
        label: "Ville",
        validation: /^[a-zéèàëêïç\s-]{3,}$/i,
        validationHelper: "Au moins 3 caractères sans chiffres"
      },
      textQuestion6: {
        name: "postal_code",
        label: "Code postal",
        validation: /^[\w\s-]{5,}$/,
        validationHelper: "Au moins 5 caractères"
      },
      textQuestion7: {
        name: "country",
        label: "Pays",
        validation: /^[a-zéèàëêïç\s-]{3,}$/i,
        validationHelper: "Au moins 3 caractères sans chiffres"
      },
      notabene: "Les informations renseignées sur ce formulaire sont utilisées par OpenClassrooms afin de répondre à votre demande. Pour plus d’informations sur la gestion de vos données et vos droits, consultez notre politique de confidentialité."
    }
  }
]

const needs = [
  {
    name: "financing",
    title: "Vous faire financer votre formation",
    img: "financing",
    boldSentence: "De nombreux moyens existent pour financer nos formations.",
    description: <div><p>En voici quelques-un :</p>
    <ul>
      <li>Votre Compte Personnel de Formation (CPF), le remplaçant du Droit Individuel à la Formation (DIF)</li>
      <li>Si vous êtes salarié, le plan de formation de votre employeur</li>
      <li>Si vous êtes demandeur d’emploi, Pôle Emploi peut financer tout ou partie de votre formation</li>
    </ul>
    <p>Cela peut paraître complexe au premier abord mais nous sommes là aussi pour vous aider dans vos démarches. Contactez-nous !</p></div>
  },
  {
    name: "onboarding",
    title: "Vous faire accompagner pour prendre en main la plateforme",
    img: "help",
    boldSentence: "Nous nous assurons que vous soyez parfaitement à l’aise avec votre outil de travail.",
    description: <div><p>La prise en main d’un nouvel outil numérique peut être source de stress. Voici ce que nous avons mis en place pour faciliter cette adoption :</p>
    <ul>
      <li>Au début de votre parcours, nous vous ferons une visite guidée de la plateforme et répondrons à vos questions</li>
      <li>Nous avons beaucoup travaillé sur notre plateforme pour la rendre aussi intuitive que possible</li>
      <li>Vous pourrez nous contacter à tout moment si vous vous sentez perdu(e)</li>
    </ul>
    <p>Notre mission est de rendre l'Éducation accessible, c’est donc une priorité pour nous que la technologie ne soit pas une barrière mais un accélérateur.</p></div>
  },
  {
    name: "learning_confidence",
    title: "Reprendre confiance en vos capacités d'apprentissage",
    img: "learning_pleasure",
    boldSentence: "Apprendre peut devenir facile et plaisant. Pour tout le monde.",
    description: <div><p>Voici ce que nous avons mis en place pour vous aider à renouer avec le plaisir d’apprendre :</p>
    <ul>
      <li>Commencez votre parcours avec notre cours “Apprenez à apprendre” pour maximiser l’efficacité de vos apprentissages</li>
      <li>Bénéficiez des retours d’expérience des alumni OpenClassrooms qui sont aussi passés par là</li>
      <li>Demandez des conseils à votre mentor dédié lors de vos points hebdomadaires</li>
    </ul>
    <p>Nous vous souhaitons de découvrir rapidement à quel point apprendre dans de bonnes conditions et avec de bonnes techniques peut être satisfaisant !</p></div>
  },
  {
    name: "short_training_duration",
    title: "Finir rapidement votre formation",
    img: "training_duration",
    boldSentence: "La durée de votre formation ne dépend que de vous.",
    description: <div><p>Chez OpenClassrooms, nous ne raisonnons pas en durée de formation mais en compétences à acquérir.</p>
    <p>Chaque formation dispose d’une durée indicative mais, si vous êtes motivé(e) et assidu(e) vous pouvez mettre jusqu’à 2 fois moins de temps.</p>
    <p>L’un de nos étudiants a ainsi obtenu un Bac +3 en 8 mois !</p>
    <p>Bref, si finir rapidement votre formation est une priorité pour vous, nous vous donnons les conditions pour en faire une réalité.</p></div>
  },
  {
    name: "diploma",
    title: "Pouvoir attester des compétences que vous avez acquises",
    img: "diploma",
    boldSentence: "Tous nos parcours sont diplômants.",
    description: <div><p>Contrairement aux MOOC, ce parcours ne débouche pas simplement sur une certification mais sur un vrai diplôme reconnu par l’état français (enregistré au RNCP).</p>
    <p>Nous nous assurons ainsi que vos efforts vous ouvrent les portes vers de nouvelles opportunités qui ne vous étaient peut être pas accessibles jusqu’ici.</p></div>
  },
  {
    name: "get_a_job",
    title: "Trouver un emploi qui réponde à vos critères",
    img: "job",
    boldSentence: "Notre objectif n’est atteint que lorsque vous avez trouvé un emploi qui vous convient.",
    description: <div><p>Nos parcours ne sont que la première étape vers une nouvelle opportunité professionnelle. Nous faisons en sorte de vous accompagner jusqu’à la fin :</p>
    <ul>
      <li>Une fois votre parcours fini, nous vous assistons et vous conseillons dans votre recherche d’emploi</li>
      <li>Si vous ne trouvez pas de travail dans les 6 mois, nous vous remboursons intégralement votre formation</li>
    </ul>
    <p>A titre d’exemple, voici 3 annonces qui semblent correspondre à vos critères et auxquelles vous auriez pu postuler si vous aviez fini ce parcours :</p>
    <ul>
      <li><a href="https://www.linkedin.com/jobs/view/1072070965" target="_blank" rel="noopener noreferrer">Business & Decision - Chef de Projet Digital (H/F) - Lyon</a></li>
      <li><a href="https://www.linkedin.com/jobs/view/1092006305/" target="_blank" rel="noopener noreferrer">Endesa - Chef de Projet Digital - Lyon</a></li>
      <li><a href="https://www.linkedin.com/jobs/view/1103143837/" target="_blank" rel="noopener noreferrer">SQLI - Chef de Projet IT Agile H/F - Lyon</a></li>
    </ul></div>,
    videoURL: "https://www.youtube.com/embed/ExMmhLVxAD0"
  },
  {
    name: "social_interactions",
    title: "Avoir des interactions sociales",
    img: "social",
    boldSentence: "Chez OpenClassrooms, nous sommes convaincus que les interactions sociales peuvent être un puissant accélérateur d’apprentissage.",
    description: <div><p>Voici ce que nous avons mis en place pour maximiser ces interactions :</p>
    <ul>
      <li>Interactions en continu avec toute la communauté d’élèves OpenClassrooms</li>
      <li>Accès au groupe privé Facebook des élèves ayant suivi ce parcours pour échanger conseils et retour d’expériences</li>
      <li>Points hebdomadaires avec votre mentor attitré</li>
    </ul></div>,
    videoURL: "https://www.youtube.com/embed/HkdA6zr51C8"
  },
  {
    name: "working_conditions",
    title: "Avoir un cadre et un rythme de travail",
    img: "working_conditions",
    boldSentence: "Nous vous aidons à créer de bonnes habitudes de travail.",
    description: <div><p>Si vous n’avez jamais expérimenté les formations en ligne, il est normal que vous ayez des doutes avant de vous lancer. Voici ce que nous avons mis en place pour vous aider :</p>
    <ul>
      <li>Dès le début, faites le point avec votre mentor dédié et écoutez ses conseils pour se créer son propre cadre de travail</li>
      <li>Bénéficiez des retours d’expérience des alumni OpenClassrooms sur les bonnes pratiques et les pièges à éviter</li>
      <li>Faites des points hebdomadaires avec votre mentor pour rythmer votre travail et suivre vos objectifs</li>
    </ul>
    <p>Au début, apprendre à distance peut sembler intimidant. Avec les bonnes habitudes, on prend rapidement goût à cette grande flexibilité.</p></div>
  },
  {
    name: "learning_by_doing",
    title: "Apprendre de manière active pour rester engagé(e)",
    img: "learning_by_doing",
    boldSentence: "Chez OpenClassrooms, nous sommes convaincus que l’on apprend bien mieux en faisant.",
    description: <div><p>Voici comment nous l’avons décliné dans notre approche pédagogique :</p>
    <ul>
      <li>Seuls les projets sont nécessaires pour valider votre parcours</li>
      <li>Nos cours ne sont là que pour vous aider à acquérir une connaissance / compétence qui vous sera utile pour mener à bien un de vos projets</li>
      <li>Nous mettons un point d’honneur à rendre nos cours aussi variés et interactifs que possible</li>
    </ul></div>,
    videoURL: "https://www.youtube.com/embed/taGLim_yelo"
  }
]

export {pages, needs};