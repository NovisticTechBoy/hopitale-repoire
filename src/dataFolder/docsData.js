import {
  Activity,
  AlertTriangle,
  Apple,
  Brain,
  Dna,
  HeartPulse,
  Pill,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Sun,
} from 'lucide-react';

export const warningSigns = [
  'Chest pain, trouble breathing, or sudden weakness should be treated as urgent.',
  'Fever that lasts more than a few days or severe dehydration needs medical evaluation.',
  'Severe headaches, confusion, or persistent vomiting need professional attention.',
  'Unexplained weight loss, bleeding, or ongoing pain should be checked promptly.',
];

export const healthTopics = [
  {
    id: 'high-blood-pressure',
    icon: HeartPulse,
    category: 'Heart Health',
    title: 'High Blood Pressure',
    summary:
      'High blood pressure often develops quietly, but it can damage the heart, kidneys, brain and blood vessels over time if ignored.',
    tip: 'Check your blood pressure regularly and reduce excess salt in your meals.',
    tags: ['hypertension', 'heart', 'blood pressure'],
    sections: [
      {
        heading: 'What it is',
        content:
          'High blood pressure, also called hypertension, happens when the force of blood pushing against artery walls stays too high for too long. It often has no obvious symptoms, which is why many people do not know they have it until a routine check-up reveals it.',
      },
      {
        heading: 'Common symptoms',
        content:
          'Some people may have headaches, dizziness, blurry vision, shortness of breath or chest discomfort, but many patients feel completely normal. That is why regular screening is important.',
      },
      {
        heading: 'How to manage it',
        content:
          'Healthy eating, regular exercise, limiting alcohol, reducing salt, managing stress and following your clinician’s medication plan can help keep blood pressure under control.',
      },
      {
        heading: 'When to seek care',
        content:
          'If someone has severe headache, confusion, chest pain, weakness, or trouble speaking, that may be a medical emergency and should be treated urgently.',
      },
    ],
  },
  {
    id: 'diabetes-care',
    icon: Activity,
    category: 'Metabolic Health',
    title: 'Diabetes Care',
    summary:
      'Diabetes affects how the body manages sugar. Good care involves monitoring, balanced eating, physical activity and medication when needed.',
    tip: 'Look out for excessive thirst, frequent urination and slow-healing wounds.',
    tags: ['diabetes', 'blood sugar', 'insulin'],
    sections: [
      {
        heading: 'What it is',
        content:
          'Diabetes is a long-term condition where the body has trouble using or producing enough insulin. This leads to sugar remaining in the bloodstream for too long, which can affect the heart, nerves, eyes and kidneys over time.',
      },
      {
        heading: 'Common symptoms',
        content:
          'Symptoms can include frequent thirst, increased urination, fatigue, blurry vision, unexplained weight change and slow-healing cuts or sores.',
      },
      {
        heading: 'How to manage it',
        content:
          'A balanced diet, regular movement, blood sugar checks and medications prescribed by a doctor may all be part of a treatment plan. Early control can reduce complications significantly.',
      },
      {
        heading: 'When to seek care',
        content:
          'Severe weakness, vomiting, confusion, dehydration or very high blood sugar may need urgent medical care.',
      },
    ],
  },
  {
    id: 'malaria',
    icon: ShieldAlert,
    category: 'Infectious Disease',
    title: 'Malaria',
    summary:
      'Malaria is a serious mosquito-borne illness that can cause fever, chills and weakness. Early diagnosis and treatment are very important.',
    tip: 'Use mosquito protection and seek care early if fever follows mosquito bites.',
    tags: ['malaria', 'fever', 'mosquito'],
    sections: [
      {
        heading: 'What it is',
        content:
          'Malaria is caused by a parasite spread through the bite of an infected mosquito. It can range from mild illness to life-threatening severe disease, especially in young children and pregnant women.',
      },
      {
        heading: 'Common symptoms',
        content:
          'Symptoms include fever, chills, sweating, headache, body pain, weakness and sometimes vomiting. In severe cases, seizures, breathing problems or confusion can occur.',
      },
      {
        heading: 'How to manage it',
        content:
          'Diagnosis is usually confirmed through a blood test. Treatment should begin quickly because delayed treatment can lead to complications or death.',
      },
      {
        heading: 'Prevention',
        content:
          'Use insecticide-treated mosquito nets, wear protective clothing and reduce standing water around living areas. Preventive treatment may be recommended in some high-risk areas.',
      },
    ],
  },
  {
    id: 'hiv-aids',
    icon: ShieldCheck,
    category: 'Infectious Disease',
    title: 'HIV / AIDS',
    summary:
      'HIV attacks the immune system and can lead to AIDS if untreated. With proper care, many people live long, healthy lives.',
    tip: 'Testing early helps treatment start sooner and reduces transmission risk.',
    tags: ['hiv', 'aids', 'immune system'],
    sections: [
      {
        heading: 'What it is',
        content:
          'HIV is a virus that weakens the immune system by attacking certain white blood cells. AIDS is the advanced stage of the disease when the immune system is severely damaged and infections or cancers become more likely.',
      },
      {
        heading: 'Common symptoms',
        content:
          'Early symptoms may include fever, sore throat, swollen lymph nodes or a rash. In some people, the virus may cause no obvious symptoms for years.',
      },
      {
        heading: 'How it is managed',
        content:
          'Antiretroviral therapy can suppress the virus, improve immunity and significantly reduce the risk of spreading it to others. Regular medical monitoring is important.',
      },
      {
        heading: 'Prevention',
        content:
          'Prevention includes safe sex practices, testing, treatment of partners when needed and avoiding sharing needles or sharp instruments.',
      },
    ],
  },
  {
    id: 'cancer-awareness',
    icon: AlertTriangle,
    category: 'Cancer Care',
    title: 'Cancer Awareness',
    summary:
      'Cancer happens when some cells grow abnormally and spread beyond their usual boundaries. Early detection and prompt care can improve outcomes.',
    tip: 'Unexplained weight loss, persistent lumps or unusual bleeding should be checked by a doctor.',
    tags: ['cancer', 'tumor', 'screening'],
    sections: [
      {
        heading: 'What it is',
        content:
          'Cancer is a group of diseases in which abnormal cells divide without control and may invade nearby tissues or spread to other parts of the body. Different cancers have different causes and symptoms.',
      },
      {
        heading: 'Warning signs',
        content:
          'Warning signs may include a new lump, unusual bleeding, a sore that does not heal, unexplained weight loss, persistent pain or changes in bowel or bladder habits.',
      },
      {
        heading: 'Why early detection matters',
        content:
          'Many cancers are easier to treat successfully when found early. Screening programs, self-awareness and routine checks can help detect problems sooner.',
      },
      {
        heading: 'Support and treatment',
        content:
          'Cancer treatment can include surgery, radiation, chemotherapy, targeted therapy or other specialist care. Support from family, counseling and follow-up care can improve quality of life.',
      },
    ],
  },
  {
    id: 'mental-wellness',
    icon: Brain,
    category: 'Mental Health',
    title: 'Mental Wellness',
    summary:
      'Mental wellness is about emotional balance, resilience and the ability to cope with life stress. Early support can improve long-term health.',
    tip: 'Talk to a trusted professional if stress, sadness or anxiety begins to affect your daily life.',
    tags: ['stress', 'anxiety', 'sleep'],
    sections: [
      {
        heading: 'What it is',
        content:
          'Mental wellness includes emotional, psychological and social well-being. It affects how people think, feel, relate to others and make decisions.',
      },
      {
        heading: 'Common signs',
        content:
          'Signs may include persistent sadness, difficulty concentrating, irritability, sleep problems, panic attacks, loss of interest in activities or trouble coping with daily responsibilities.',
      },
      {
        heading: 'How to support it',
        content:
          'Healthy routines, therapy, community support, regular sleep, exercise and open conversations with trusted people can all help protect mental health.',
      },
      {
        heading: 'When to seek help',
        content:
          'If symptoms start affecting work, relationships, sleep or safety, it is wise to speak with a qualified mental health professional or doctor.',
      },
    ],
  },
  {
    id: 'nutrition-energy',
    icon: Apple,
    category: 'Nutrition',
    title: 'Nutrition & Energy',
    summary:
      'Nutrition affects immunity, digestion, brain function and long-term health. Small daily food choices can lead to big improvements over time.',
    tip: 'Aim for a variety of fruits, vegetables, whole grains and protein-rich foods.',
    tags: ['diet', 'nutrition', 'energy'],
    sections: [
      {
        heading: 'Why it matters',
        content:
          'Food provides fuel, helps the body repair itself and supports immunity. Poor nutrition can lead to fatigue, poor concentration, weakened immunity and chronic disease risk.',
      },
      {
        heading: 'Healthy habits',
        content:
          'Choose balanced meals with vegetables, fruits, beans, lean protein and healthy fats. Limit excess sugar, deep-fried foods and highly processed snacks when possible.',
      },
      {
        heading: 'Signs of poor nutrition',
        content:
          'These may include constant tiredness, pale skin, poor concentration, weight changes, hair thinning, frequent illness or slow wound healing.',
      },
      {
        heading: 'When to speak with a professional',
        content:
          'If someone has unexplained weight loss, persistent vomiting, severe abdominal pain or trouble eating, a clinician should assess them.',
      },
    ],
  },
  {
    id: 'respiratory-health',
    icon: Stethoscope,
    category: 'Respiratory Health',
    title: 'Respiratory Health',
    summary:
      'Respiratory problems can range from mild colds to more serious conditions affecting the lungs and airways. Early care matters when breathing becomes difficult.',
    tip: 'Seek advice quickly for persistent cough, wheezing or shortness of breath.',
    tags: ['lungs', 'cough', 'breathing'],
    sections: [
      {
        heading: 'What it includes',
        content:
          'This covers issues such as colds, asthma, pneumonia, bronchitis and chest infections. These conditions can affect oxygen flow and daily comfort.',
      },
      {
        heading: 'Common symptoms',
        content:
          'Symptoms include cough, fever, chest tightness, wheezing, shortness of breath and fatigue.',
      },
      {
        heading: 'How to protect lung health',
        content:
          'Avoid smoking, reduce exposure to dust and polluted air, stay hydrated, and seek treatment early for persistent symptoms or recent infections.',
      },
      {
        heading: 'When to get help',
        content:
          'Fast breathing, severe chest pain, bluish lips, confusion or fainting are urgent warning signs and should be treated immediately.',
      },
    ],
  },
  {
    id: 'tuberculosis',
    icon: ShieldAlert,
    category: 'Infectious Disease',
    title: 'Tuberculosis (TB)',
    summary:
      'Tuberculosis is a bacterial infection caused by Mycobacterium tuberculosis. It most often affects the lungs but may also affect the kidneys, spine and brain.',
    tip: 'Persistent cough lasting more than three weeks should be checked by a clinician.',
    tags: ['tb', 'lungs', 'infection'],
    sections: [
      {
        heading: 'Overview',
        content:
          'TB spreads through the air when an infected person coughs, sneezes or speaks. Not everyone who is infected becomes sick immediately; some people carry latent TB, where the bacteria stay inactive for years before becoming active.',
      },
      {
        heading: 'Symptoms',
        content:
          'Common symptoms include a persistent cough lasting three or more weeks, chest pain, fatigue, weight loss, night sweats, fever, chills and loss of appetite. In some cases, blood or mucus may appear in the cough.',
      },
      {
        heading: 'Causes & Risk Factors',
        content:
          'Close contact with someone who has active TB, a weakened immune system, crowded living conditions, smoking, heavy alcohol use and travel to regions where TB is common can all increase the risk of infection.',
      },
      {
        heading: 'Diagnosis & Treatment',
        content:
          'Diagnosis may involve a skin test, blood test, chest X-ray, sputum test and sometimes molecular testing to confirm drug resistance. Treatment usually requires a combination of antibiotics for 6–9 months and must be completed fully to prevent drug-resistant TB.',
      },
      {
        heading: 'Prevention',
        content:
          'Prevention includes early diagnosis and treatment, BCG vaccination in countries where it is used, good ventilation, respiratory hygiene and active screening of high-risk groups.',
      },
    ],
  },
  {
    id: 'hepatitis',
    icon: Sun,
    category: 'Liver Health',
    title: 'Hepatitis',
    summary:
      'Hepatitis is inflammation of the liver. It may be caused by viruses, alcohol, medications or autoimmune disease, and severe cases may lead to long-term liver damage.',
    tip: 'Jaundice, dark urine and abdominal pain can be warning signs that deserve medical review.',
    tags: ['liver', 'jaundice', 'viral hepatitis'],
    sections: [
      {
        heading: 'Overview',
        content:
          'There are five main hepatitis viruses: A, B, C, D and E. Some are short-term and resolve on their own, while viruses like hepatitis B and C may become chronic and lead to long-term liver injury.',
      },
      {
        heading: 'Symptoms',
        content:
          'Symptoms can include fatigue, yellowing of the skin and eyes, dark urine, pale stools, abdominal pain, nausea and joint pain. Some chronic hepatitis infections do not cause obvious symptoms for many years.',
      },
      {
        heading: 'Causes & Risk Factors',
        content:
          'Hepatitis A and E often spread through contaminated food or water. Hepatitis B, C and D spread through infected blood or bodily fluids through unsafe sex, shared needles, unscreened blood products or mother-to-child transmission. Alcohol and certain medications can also damage the liver.',
      },
      {
        heading: 'Diagnosis & Treatment',
        content:
          'Diagnosis usually includes blood tests, liver function checks, viral markers and imaging such as ultrasound or FibroScan. Treatment varies by type: hepatitis A and E often recover with supportive care, hepatitis C is commonly curable with antiviral therapy, while chronic hepatitis B may require long-term management.',
      },
      {
        heading: 'Prevention',
        content:
          'Vaccination is available for hepatitis A and B. Safe food and water practices, safe sex, not sharing needles or personal items, and screening of blood products can help reduce risk.',
      },
    ],
  },
  {
    id: 'schizophrenia',
    icon: Brain,
    category: 'Mental Health',
    title: 'Schizophrenia',
    summary:
      'Schizophrenia is a long-term mental health disorder that affects thinking, emotions and perception. With treatment, many people can manage symptoms and live meaningful lives.',
    tip: 'Early treatment of first-episode symptoms can reduce relapse and improve long-term outcomes.',
    tags: ['psychosis', 'delusions', 'brain'],
    sections: [
      {
        heading: 'Overview',
        content:
          'Schizophrenia usually appears in late adolescence or early adulthood and may cause a person to seem disconnected from reality, including through changes in thought, behavior and emotional response.',
      },
      {
        heading: 'Symptoms',
        content:
          'Symptoms may be grouped into positive symptoms like hallucinations or delusions, negative symptoms like social withdrawal or reduced motivation, and cognitive problems like poor focus and poor decision-making.',
      },
      {
        heading: 'Causes & Risk Factors',
        content:
          'Risk factors include family history, brain chemistry or structural differences, prenatal problems, environmental stress and heavy cannabis or stimulant use in vulnerable individuals.',
      },
      {
        heading: 'Diagnosis & Treatment',
        content:
          'Diagnosis is based on clinical assessment and the pattern of symptoms over time, along with tests to rule out other conditions. Treatment often includes antipsychotic medication, psychotherapy and social support.',
      },
      {
        heading: 'Prevention',
        content:
          'There is no guaranteed way to prevent schizophrenia, but early intervention, strong support systems and avoiding heavy substance use in at-risk people can reduce the impact and improve recovery.',
      },
    ],
  },
  {
    id: 'yellow-fever',
    icon: Syringe,
    category: 'Infectious Disease',
    title: 'Yellow Fever',
    summary:
      'Yellow fever is a mosquito-borne viral illness found mainly in tropical regions of Africa and South America. Severe cases can affect the liver and cause bleeding.',
    tip: 'Travel vaccination is an important preventive step in risk areas.',
    tags: ['virus', 'mosquito', 'travel'],
    sections: [
      {
        heading: 'Overview',
        content:
          'Yellow fever is caused by a flavivirus spread through the bites of infected mosquitoes. Most cases are mild, but a smaller number become severe and can be life-threatening, especially when the liver and blood clotting system are affected.',
      },
      {
        heading: 'Symptoms',
        content:
          'Initial symptoms may include fever, chills, headache and muscle aches. In severe cases, a second toxic phase can cause jaundice, dark urine, abdominal pain, bleeding and reduced urination.',
      },
      {
        heading: 'Causes & Risk Factors',
        content:
          'Risk is highest in endemic regions, especially where mosquito control is weak and vaccination coverage is low. Outdoor workers and travelers in affected areas are at greater risk if they are unvaccinated.',
      },
      {
        heading: 'Diagnosis & Treatment',
        content:
          'Diagnosis is based on blood tests, travel history and laboratory evaluation. There is no specific antiviral treatment, so care is mainly supportive, including hydration, rest and hospital monitoring for severe cases.',
      },
      {
        heading: 'Prevention',
        content:
          'The yellow fever vaccine is highly effective and often provides lifelong protection. Mosquito bite prevention, including repellents, protective clothing and eliminating standing water, is also important.',
      },
    ],
  },
  {
    id: 'preventive-care',
    icon: Pill,
    category: 'Prevention',
    title: 'Preventive Care',
    summary:
      'Preventive care helps people stay healthier by spotting risks early and protecting them before illness becomes serious.',
    tip: 'Routine appointments, vaccines and screenings can save time, stress and money over the long term.',
    tags: ['screening', 'vaccines', 'checkups'],
    sections: [
      {
        heading: 'Why it matters',
        content:
          'Many health problems become easier to treat when they are detected early. Preventive care also helps people make healthier choices before a condition becomes severe.',
      },
      {
        heading: 'Examples of prevention',
        content:
          'This includes routine medical check-ups, blood pressure and blood sugar checks, vaccines, family planning advice, cancer screenings and early treatment of infections.',
      },
      {
        heading: 'How to stay proactive',
        content:
          'Know your risk factors, keep medical records, attend recommended screenings and follow your clinician’s advice on lifestyle habits and regular visits.',
      },
      {
        heading: 'When to book an appointment',
        content:
          'If you have persistent fatigue, unusual pain, a new rash, frequent illness or a family history of chronic disease, a visit with a healthcare provider is a good next step.',
      },
    ],
  },
];
