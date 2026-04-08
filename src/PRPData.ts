export interface Question {
  id: number;
  type: 'multiple-choice' | 'true-false';
  question: string;
  options?: string[];
  correctAnswer: string | boolean;
  explanation: string;
}

export const questions: Question[] = [
  // Preguntas de Opción Múltiple (20)
  {
    id: 1,
    type: 'multiple-choice',
    question: "¿Cuál es la definición biológica del Plasma Rico en Plaquetas (PRP)?",
    options: ["Un suero de factor de crecimiento sintético", "Una concentración autóloga de plaquetas en un pequeño volumen de plasma", "Una mezcla de vitaminas y minerales", "Un tipo de terapia con células madre"],
    correctAnswer: "Una concentración autóloga de plaquetas en un pequeño volumen de plasma",
    explanation: "El PRP se define como un volumen autólogo (derivado del propio cuerpo del paciente) de plasma que tiene una concentración de plaquetas por encima de los niveles basales. Aprovecha la capacidad regenerativa innata del cuerpo."
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: "¿Cuál es la función fisiológica principal de las plaquetas en el contexto de la terapia con PRP?",
    options: ["Transporte de oxígeno", "Defensa inmunológica contra bacterias", "Liberación de gránulos alfa que contienen factores de crecimiento", "Regulación de la glucosa en sangre"],
    correctAnswer: "Liberación de gránulos alfa que contienen factores de crecimiento",
    explanation: "Las plaquetas contienen gránulos alfa que, al activarse, liberan factores de crecimiento esenciales (como PDGF, TGF-β e IGF) que inician la cascada de reparación tisular y la proliferación celular."
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: "¿Cuál es el papel específico del Factor de Crecimiento del Endotelio Vascular (VEGF) en la regeneración de tejidos?",
    options: ["Disminuir la inflamación", "Estimular la angiogénesis (formación de nuevos vasos sanguíneos)", "Reducir la producción de melanina", "Paralizar los músculos faciales"],
    correctAnswer: "Estimular la angiogénesis (formación de nuevos vasos sanguíneos)",
    explanation: "El VEGF es una potente proteína de señalización que promueve la angiogénesis. Este proceso aumenta el suministro de sangre al área tratada, asegurando una mejor oxigenación y entrega de nutrientes para la curación."
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: "¿Cuál de estas es una aplicación terapéutica no estética significativa del PRP?",
    options: ["Tratamiento de migrañas crónicas", "Reparación ortopédica de tendones y ligamentos", "Manejo de la pérdida de peso", "Manejo de la Diabetes Tipo 1"],
    correctAnswer: "Reparación ortopédica de tendones y ligamentos",
    explanation: "Más allá de la estética, el PRP se utiliza ampliamente en medicina deportiva y ortopedia para acelerar la curación de lesiones musculoesqueléticas al concentrar factores de crecimiento en el sitio de la lesión."
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: "¿Cómo se clasifica el PRP según su origen?",
    options: ["Alogénico", "Xenogénico", "Autólogo", "Sintético"],
    correctAnswer: "Autólogo",
    explanation: "El PRP es un tratamiento autólogo, lo que significa que el donante y el receptor son el mismo individuo. Esto elimina el riesgo de rechazo inmunológico o transmisión de enfermedades infecciosas."
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: "Después de la centrifugación, ¿qué componente forma típicamente la capa inferior debido a su mayor densidad?",
    options: ["Plaquetas", "Leucocitos (Glóbulos Blancos)", "Eritrocitos (Glóbulos Rojos)", "Plasma"],
    correctAnswer: "Eritrocitos (Glóbulos Rojos)",
    explanation: "Los eritrocitos (glóbulos rojos) son el componente más denso de la sangre total. Durante la centrifugación, la fuerza centrífuga los desplaza hacia el fondo del tubo."
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: "¿Cuál de las siguientes se considera una contraindicación absoluta para el tratamiento con PRP?",
    options: ["Hipertensión leve", "Embarazo y lactancia", "Deficiencia de Vitamina C", "Acné localizado"],
    correctAnswer: "Embarazo y lactancia",
    explanation: "El embarazo y la lactancia son contraindicaciones absolutas. Aunque el PRP es autólogo, los cambios fisiológicos durante estos periodos y la falta de estudios de seguridad clínica justifican la exclusión de estas pacientes."
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: "Para un protocolo estándar de rejuvenecimiento de la piel, ¿cuál es el número recomendado de sesiones iniciales?",
    options: ["1 sesión al año", "3 a 4 sesiones con un intervalo de 3-4 semanas", "10 sesiones diarias", "Sesiones semanales indefinidamente"],
    correctAnswer: "3 a 4 sesiones con un intervalo de 3-4 semanas",
    explanation: "Una fase de inducción estándar suele constar de 3-4 sesiones. Esto permite que el proceso de remodelación biológica se base en cada sesión para obtener resultados acumulativos."
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: "¿Cuál es una reacción inmediata común y esperada después del procedimiento?",
    options: ["Cicatrización permanente", "Desaparición inmediata de todas las arrugas", "Eritema transitorio y edema leve", "Choque alérgico severo"],
    correctAnswer: "Eritema transitorio y edema leve",
    explanation: "El eritema (enrojecimiento) y el edema (hinchazón) son respuestas inflamatorias transitorias y esperadas ante las microinyecciones y la actividad biológica del PRP."
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: "¿Cuál es una instrucción esencial de cuidado post-tratamiento para un paciente después de un PRP facial?",
    options: ["Exposición solar intensa para activar el plasma", "Protección solar rigurosa e hidratación", "Aplicación inmediata de maquillaje pesado", "Exfoliación de la piel con peelings ácidos"],
    correctAnswer: "Protección solar rigurosa e hidratación",
    explanation: "La protección solar es crucial para prevenir la hiperpigmentación post-inflamatoria (PIH), ya que la piel está temporalmente más sensible después del procedimiento."
  },
  {
    id: 11,
    type: 'multiple-choice',
    question: "¿Cuál es el objetivo principal del proceso de centrifugación en la preparación del PRP?",
    options: ["Calentar la sangre a temperatura corporal", "Separar los componentes sanguíneos según sus diferentes densidades", "Matar cualquier bacteria en la muestra", "Mezclar la sangre con oxígeno"],
    correctAnswer: "Separar los componentes sanguíneos según sus diferentes densidades",
    explanation: "La centrifugación utiliza la fuerza centrífuga para sedimentar los componentes sanguíneos a diferentes velocidades según su densidad, lo que permite el aislamiento de la fracción rica en plaquetas."
  },
  {
    id: 12,
    type: 'multiple-choice',
    question: "¿Qué tipo de tubo al vacío se utiliza más comúnmente para la recolección de PRP?",
    options: ["Tapa roja (Sin aditivo)", "Tapa azul (Citrato de Sodio)", "Tapa gris (Fluoruro de Sodio)", "Tapa morada (EDTA)"],
    correctAnswer: "Tapa azul (Citrato de Sodio)",
    explanation: "El citrato de sodio actúa como un anticoagulante reversible mediante la quelación del calcio. Se prefiere para el PRP porque preserva mejor la integridad y morfología plaquetaria que otros aditivos."
  },
  {
    id: 13,
    type: 'multiple-choice',
    question: "¿Qué es la 'Capa Leucocitaria' (Buffy Coat) en una muestra de sangre centrifugada?",
    options: ["La capa de glóbulos rojos puros", "La fina capa que contiene leucocitos y plaquetas", "La capa superior de plasma transparente", "El coágulo en el fondo"],
    correctAnswer: "La fina capa que contiene leucocitos y plaquetas",
    explanation: "La capa leucocitaria es la capa intermedia entre el plasma y los eritrocitos. Contiene la mayor concentración de plaquetas y glóbulos blancos (leucocitos)."
  },
  {
    id: 14,
    type: 'multiple-choice',
    question: "Si una muestra de sangre se coagula dentro del tubo antes de la centrifugación, ¿cuál es el estado de la muestra?",
    options: ["Ideal para PRP de alta calidad", "Se puede usar después de agitar vigorosamente", "Inútil (Inválida para la preparación de PRP)", "Se convierte en un concentrado de células madre"],
    correctAnswer: "Inútil (Inválida para la preparación de PRP)",
    explanation: "La coagulación atrapa las plaquetas dentro de una red de fibrina, lo que hace imposible separarlas y concentrarlas en el plasma. La muestra debe ser descartada."
  },
  {
    id: 15,
    type: 'multiple-choice',
    question: "¿Qué fracción de la muestra centrifugada se utiliza para el tratamiento con PRP?",
    options: ["El sedimento rojo del fondo", "La capa de plasma translúcida/amarillenta superior (enriquecida)", "El aire en la parte superior del tubo", "El vidrio del tubo"],
    correctAnswer: "La capa de plasma translúcida/amarillenta superior (enriquecida)",
    explanation: "La capa de plasma (specifically la porción justo por encima de la capa leucocitaria) contiene las plaquetas concentradas y es la fracción terapéutica utilizada para la inyección."
  },
  {
    id: 16,
    type: 'multiple-choice',
    question: "¿Cuál es la diferencia principal entre el PRP y el PPP (Plasma Pobre en Plaquetas)?",
    options: ["El PPP tiene más glóbulos rojos", "El PRP tiene una concentración de plaquetas significativamente mayor", "El PPP es sintético", "No hay diferencia"],
    correctAnswer: "El PRP tiene una concentración de plaquetas significativamente mayor",
    explanation: "El PRP (Rico en Plaquetas) es la fracción con plaquetas concentradas, mientras que el PPP (Pobre en Plaquetas) es el plasma restante con muy pocas plaquetas, a menudo descartado o usado como tratamiento secundario."
  },
  {
    id: 17,
    type: 'multiple-choice',
    question: "¿Qué factor afecta negativamente la calidad del PRP al liberar contenidos intracelulares no deseados?",
    options: ["Oxigenación", "Hemólisis (ruptura de glóbulos rojos)", "Refrigeración", "Esterilización"],
    correctAnswer: "Hemólisis (ruptura de glóbulos rojos)",
    explanation: "La hemólisis ocurre cuando los glóbulos rojos se rompen, liberando hemoglobina y otros contenidos que pueden causar un aumento de la inflamación y el estrés oxidativo, comprometiendo la calidad del PRP."
  },
  {
    id: 18,
    type: 'multiple-choice',
    question: "¿Qué principio de bioseguridad es fundamental durante la preparación del PRP?",
    options: ["Reutilizar agujas después de lavarlas", "Mantener un entorno estrictamente estéril y de un solo uso", "Realizar el procedimiento en un área pública", "Mezclar muestras de diferentes pacientes"],
    correctAnswer: "Mantener un entorno estrictamente estéril y de un solo uso",
    explanation: "La asepsia estricta y el uso de materiales estériles y desechables son obligatorios para prevenir infecciones iatrogénicas y garantizar la seguridad del paciente."
  },
  {
    id: 19,
    type: 'multiple-choice',
    question: "¿Cuál es una complicación potencial de incluir eritrocitos (RBC) excesivos en la inyección de PRP?",
    options: ["Mejoría en la curación", "Aumento de la respuesta pro-inflamatoria y el dolor", "Mejor color de piel", "Ningún efecto"],
    correctAnswer: "Aumento de la respuesta pro-inflamatoria y el dolor",
    explanation: "El exceso de glóbulos rojos en el PRP puede desencadenar una respuesta inflamatoria no deseada, lo que provoca un aumento del dolor, la hinchazón y, potencialmente, resultados regenerativos subóptimos."
  },
  {
    id: 20,
    type: 'multiple-choice',
    question: "¿Qué señal indica un error en el proceso de centrifugación o recolección?",
    options: ["Plasma amarillo dorado", "Grumos rojos visibles o un tinte rosado en el plasma (hemólisis)", "Separación clara de capas", "Líquido transparente"],
    correctAnswer: "Grumos rojos visibles o un tinte rosado en el plasma (hemólisis)",
    explanation: "Un tinte rosado (hemólisis) o grumos rojos indican que los eritrocitos se han mezclado con el plasma o se han roto, lo que indica un error técnico que afecta la pureza de la muestra."
  },

  // Preguntas de Verdadero/Falso (20)
  {
    id: 21,
    type: 'true-false',
    question: "El PRP es un producto farmacológico sintético desarrollado en un laboratorio.",
    correctAnswer: false,
    explanation: "Falso. El PRP es un producto biológico autólogo, lo que significa que se deriva de la propia sangre del paciente y no es un fármaco sintético."
  },
  {
    id: 22,
    type: 'true-false',
    question: "Después de la centrifugación, los glóbulos rojos más densos se asientan en el fondo mientras el plasma permanece en la parte superior.",
    correctAnswer: true,
    explanation: "Verdadero. La centrifugación separa los componentes según la densidad; los eritrocitos (RBC) son los más pesados y se sedimentan en la base."
  },
  {
    id: 23,
    type: 'true-false',
    question: "Los factores de crecimiento del PRP estimulan a los fibroblastos para producir colágeno y elastina.",
    correctAnswer: true,
    explanation: "Verdadero. Uno de los mecanismos principales del PRP es la activación de los fibroblastos, las células responsables de sintetizar la matriz extracelular y el colágeno."
  },
  {
    id: 24,
    type: 'true-false',
    question: "El PRP se utiliza principalmente como tratamiento para la reducción significativa de grasa localizada (lipólisis).",
    correctAnswer: false,
    explanation: "Falso. El PRP es un tratamiento regenerativo para la reparación de tejidos y la inducción de colágeno; no tiene propiedades lipolíticas para la reducción de grasa."
  },
  {
    id: 25,
    type: 'true-false',
    question: "El PRP se puede utilizar para estimular folículos pilosos inactivos en ciertos tipos de alopecia.",
    correctAnswer: true,
    explanation: "Verdadero. Los factores de crecimiento en el PRP promueven la supervivencia del folículo piloso y estimulan la fase anágena (crecimiento) del ciclo capilar."
  },
  {
    id: 26,
    type: 'true-false',
    question: "El embarazo activo y la lactancia se consideran contraindicaciones para la terapia con PRP.",
    correctAnswer: true,
    explanation: "Verdadero. Debido a los cambios hormonales y la falta de datos de seguridad en estas poblaciones, el PRP generalmente se evita durante el embarazo y la lactancia."
  },
  {
    id: 27,
    type: 'true-false',
    question: "Una sola sesión de PRP proporciona la eliminación inmediata y permanente de las arrugas profundas.",
    correctAnswer: false,
    explanation: "Falso. Los resultados del PRP son progresivos y biológicos; requieren múltiples sesiones y tiempo para que ocurra la remodelación del colágeno."
  },
  {
    id: 28,
    type: 'true-false',
    question: "Debido a que el PRP es autólogo, el riesgo de rechazo alérgico es virtualmente inexistente.",
    correctAnswer: true,
    explanation: "Verdadero. Dado que el material proviene del propio cuerpo del paciente, el sistema inmunológico lo reconoce como propio, eliminando el riesgo de rechazo."
  },
  {
    id: 29,
    type: 'true-false',
    question: "El PRP solo debe usarse como tratamiento independiente y nunca combinarse con otras técnicas como el microneedling.",
    correctAnswer: false,
    explanation: "Falso. El PRP a menudo se combina con microneedling (terapia de inducción) o láseres para mejorar los resultados mediante efectos sinérgicos."
  },
  {
    id: 30,
    type: 'true-false',
    question: "Se recomienda la exposición directa al sol inmediatamente después de una sesión de PRP para mejorar el efecto.",
    correctAnswer: false,
    explanation: "Falso. Los pacientes deben evitar la exposición al sol para prevenir la inflamación y la hiperpigmentación post-inflamatoria (PIH) en las áreas tratadas."
  },
  {
    id: 31,
    type: 'true-false',
    question: "La hemólisis en la muestra de plasma puede provocar un aumento de la inflamación después de la inyección.",
    correctAnswer: true,
    explanation: "Verdadero. La hemólisis libera mediadores pro-inflamatorios de los glóbulos rojos que pueden aumentar el dolor e irritación en el sitio de inyección."
  },
  {
    id: 32,
    type: 'true-false',
    question: "El principio de la centrifugación se basa en las diferentes densidades de las células sanguíneas.",
    correctAnswer: true,
    explanation: "Verdadero. Los gradientes de densidad permiten la separación ordenada de glóbulos rojos, glóbulos blancos y plaquetas cuando se someten a la fuerza centrífuga."
  },
  {
    id: 33,
    type: 'true-false',
    question: "Las plaquetas son más pequeñas y menos densas que los glóbulos rojos.",
    correctAnswer: true,
    explanation: "Verdadero. Esta diferencia de tamaño y densidad es lo que les permite permanecer en la capa superior del plasma durante la centrifugación controlada."
  },
  {
    id: 34,
    type: 'true-false',
    question: "El drenaje linfático suave puede ser una recomendación beneficiosa post-tratamiento en algunos protocolos.",
    correctAnswer: true,
    explanation: "Verdadero. El drenaje suave puede ayudar a resolver el edema (hinchazón) post-procedimiento más rápidamente al asistir al sistema linfático."
  },
  {
    id: 35,
    type: 'true-false',
    question: "La presencia de una alta concentración de glóbulos rojos en el PRP es un signo de calidad superior.",
    correctAnswer: false,
    explanation: "Falso. El PRP de alta calidad debe tener una concentración muy baja de glóbulos rojos; el exceso de eritrocitos se considera un contaminante que aumenta la inflamación."
  },
  {
    id: 36,
    type: 'true-false',
    question: "El Plasma Pobre en Plaquetas (PPP) contiene la misma concentración de factores de crecimiento que el Plasma Rico en Plaquetas (PRP).",
    correctAnswer: false,
    explanation: "Falso. Por definición, el PPP tiene una concentración mucho menor de plaquetas y, en consecuencia, menos factores de crecimiento que el PRP."
  },
  {
    id: 37,
    type: 'true-false',
    question: "Todo el material utilizado en la extracción de sangre y la centrifugación debe ser estéril y de un solo uso.",
    correctAnswer: true,
    explanation: "Verdadero. Este es un estándar de bioseguridad crítico para garantizar que el procedimiento sea seguro y esté libre de contaminación."
  },
  {
    id: 38,
    type: 'true-false',
    question: "Una muestra de sangre coagulada es ideal para obtener la mayor concentración de PRP líquido.",
    correctAnswer: false,
    explanation: "Falso. Una vez que la sangre se coagula, las plaquetas quedan atrapadas en el coágulo y no se pueden extraer al plasma para su inyección."
  },
  {
    id: 39,
    type: 'true-false',
    question: "La identificación adecuada de los tubos del paciente es una práctica obligatoria para evitar errores de contaminación cruzada.",
    correctAnswer: true,
    explanation: "Verdadero. El etiquetado es esencial en cualquier procedimiento clínico que involucre muestras biológicas para prevenir errores administrativos o médicos."
  },
  {
    id: 40,
    type: 'true-false',
    question: "Los protocolos de centrifugación (tiempo y RPM) deben ser modificados aleatoriamente por el operador durante cada sesión.",
    correctAnswer: false,
    explanation: "Falso. Los protocolos deben ser estandarizados y basarse en el equipo y kit específicos utilizados para garantizar una concentración y calidad de plaquetas constantes."
  }
];
