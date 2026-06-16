export type Lang = 'en' | 'nl';
export type Answer = 'a' | 'b' | 'c';

export type Block =
	| { kind: 'p'; text: string }
	| { kind: 'list'; items: string[] }
	| { kind: 'quote'; text: string; author: string };

export type AlgorithmContent = {
	title: string;
	description: Block[];
	reveal: Block[];
};

export type Source = { label: string; url: string };

export type Algorithm = {
	id: number;
	correct: Answer;
	image: string;
	content: Record<Lang, AlgorithmContent>;
	sources: Source[];
};

const p = (text: string): Block => ({ kind: 'p', text });
const list = (items: string[]): Block => ({ kind: 'list', items });
const quote = (text: string, author: string): Block => ({ kind: 'quote', text, author });

export const algorithms: Algorithm[] = [
	{
		id: 1,
		correct: 'b',
		image: '/hand.png',
		content: {
			en: {
				title: 'Algorithm to assess prisoners',
				description: [
					p(
						"OxRec is an algorithm that the Dutch government uses to predict whether someone who committed a crime will commit another crime in the future. Probation workers use OxRec to advise judges. The outcome influences whether someone stays in prison or is released."
					),
					p(
						"The algorithm looks at personal information, like someone's age, drug use, and neighbourhood. Based on this information, it calculates a score: low, medium, or high risk."
					)
				],
				reveal: [
					p(
						'OxRec was used approximately 44,000 times per year. After the report came out, the Dutch probation service stopped using it immediately.'
					),
					p('<strong>What went wrong?</strong>'),
					p(
						'In 2026, inspectors discovered that OxRec had been making mistakes since it was first used in 2019. In 1 in 5 cases, the risk score was wrong: it was usually too low.'
					),
					p('The software contains several mistakes:'),
					list([
						'The formulas inside the software had been accidentally swapped. This means the programme was calculating the wrong thing from the beginning.',
						'The algorithm was trained on data from Swedish prisoners from 20 years ago. Experts say you cannot use data from one country and time period to make good predictions about people in a different country and time.',
						'The programme used information like neighbourhood and income to calculate risk. These are not neutral, but indirectly target people who are already in a vulnerable situation. This is a form of hidden discrimination.'
					])
				]
			},
			nl: {
				title: 'Algoritme om gevangenen te beoordelen',
				description: [
					p(
						'OxRec is een algoritme dat de Nederlandse overheid gebruikt om te voorspellen of iemand die een misdaad heeft gepleegd in de toekomst opnieuw een misdaad zal plegen. Reclasseringswerkers gebruiken OxRec om rechters te adviseren. De uitkomst beïnvloedt of iemand in de gevangenis blijft of wordt vrijgelaten.'
					),
					p(
						'Het algoritme kijkt naar persoonlijke informatie, zoals iemands leeftijd, drugsgebruik en de wijk waar iemand woont. Op basis hiervan berekent het een score: laag, gemiddeld of hoog risico.'
					)
				],
				reveal: [
					p(
						'OxRec werd ongeveer 44.000 keer per jaar gebruikt. Nadat het rapport uitkwam, stopte de Nederlandse reclassering er onmiddellijk mee.'
					),
					p('<strong>Wat ging er mis?</strong>'),
					p(
						'In 2026 ontdekten inspecteurs dat OxRec al fouten maakte sinds het in 2019 voor het eerst werd gebruikt. In 1 op de 5 gevallen was de risicoscore verkeerd: die was meestal te laag.'
					),
					p('De software bevat meerdere fouten:'),
					list([
						'De formules in de software waren per ongeluk omgewisseld. Dit betekent dat het programma vanaf het begin de verkeerde dingen berekende.',
						'Het algoritme was getraind op data van Zweedse gevangenen van 20 jaar geleden. Experts zeggen dat je geen data uit één land en tijdperiode kunt gebruiken om goede voorspellingen te doen over mensen in een ander land en een andere tijd.',
						'Het programma gebruikte informatie zoals wijk en inkomen om risico te berekenen. Deze zijn niet neutraal, maar richten zich indirect op mensen die al in een kwetsbare situatie zitten. Dit is een vorm van verborgen discriminatie.'
					])
				]
			}
		},
		sources: [
			{
				label:
					'Volkskrant: Kans op herhaling criminelen jarenlang verkeerd berekend door falende algoritmen',
				url: 'https://www.volkskrant.nl/binnenland/kans-op-herhaling-criminelen-jarenlang-verkeerdberekend-door-falende-algoritmen~ba4fe6df/'
			},
			{
				label: 'Algoritmeregister: OxRec',
				url: 'https://algoritmes.overheid.nl/nl/algoritme/41085610/65346844/oxrec-oxford-risk-ofrecidivism-tool'
			}
		]
	},
	{
		id: 2,
		correct: 'a',
		image: '/hand.png',
		content: {
			en: {
				title: 'Algorithm to decide where refugees live',
				description: [
					p(
						'GeoMatch is an algorithm that automatically decides in which place refugees will live. The goal is to match each person to the place where they have the best chance of finding work.'
					),
					p(
						'GeoMatch looks at personal information about a refugee, such as education, work experience and nationality. Based on this, it calculates the best regions for that person to live. An employee at the Dutch government makes the final decision.'
					),
					p(
						'The algorithm is designed to help refugees find work faster and integrate more easily. It should also save the government money, because fewer people would need benefits.'
					)
				],
				reveal: [
					p(
						'GeoMatch is currently still in a testing phase, where it is used in a number of locations across the Netherlands. No final decision has been made about whether to use it fully.'
					),
					p('<strong>What went wrong?</strong>'),
					p('Researchers and journalists investigated GeoMatch and discovered serious problems.'),
					list([
						'The algorithm does not find the best place for a refugee, but rather finds the best refugee for a place. The algorithm matches disadvantaged groups to places where opportunities are already low, which increases inequalities.',
						'For the algorithm, nationality and gender are more important than education or work experience. This is a form of discrimination.',
						'Nobody can see how the algorithm makes its decisions, including the refugees themselves.',
						"Refugees were never consulted during the development of the algorithm. The government said this would be 'too complex'."
					])
				]
			},
			nl: {
				title: 'Algoritme om te beslissen waar vluchtelingen wonen',
				description: [
					p(
						"GeoMatch is een algoritme dat automatisch beslist in welke plaats vluchtelingen komen te wonen. Het doel is om elke persoon te koppelen aan de plek waar zij de beste kans hebben om werk te vinden."
					),
					p(
						"GeoMatch kijkt naar persoonlijke informatie over een vluchteling, zoals opleiding, werkervaring en nationaliteit. Op basis hiervan berekent het de beste regio's voor die persoon om te wonen. Een medewerker van de Nederlandse overheid neemt de uiteindelijke beslissing."
					),
					p(
						"Het algoritme is ontworpen om vluchtelingen te helpen sneller werk te vinden en gemakkelijker te integreren. Het zou ook de overheid geld besparen, omdat minder mensen een uitkering nodig zouden hebben."
					)
				],
				reveal: [
					p(
						'GeoMatch bevindt zich momenteel nog in een testfase, waarbij het op een aantal locaties in Nederland wordt gebruikt. Er is nog geen definitieve beslissing genomen over of het volledig ingezet zal worden.'
					),
					p('<strong>Wat ging er mis?</strong>'),
					p('Onderzoekers en journalisten onderzochten GeoMatch en ontdekten ernstige problemen.'),
					list([
						'Het algoritme zoekt niet de beste plek voor een vluchteling, maar de beste vluchteling voor een plek. Het algoritme koppelt kwetsbare groepen aan plekken waar de kansen al laag zijn, waardoor ongelijkheid toeneemt.',
						'Voor het algoritme zijn nationaliteit en geslacht belangrijker dan opleiding of werkervaring. Dit is een vorm van discriminatie.',
						'Niemand kan zien hoe het algoritme zijn beslissingen neemt, inclusief de vluchtelingen zelf.',
						"Vluchtelingen werden nooit geraadpleegd tijdens de ontwikkeling van het algoritme. De overheid zei dat dit 'te complex' zou zijn."
					])
				]
			}
		},
		sources: [
			{
				label: 'Utrecht University: COA uses algorithm to place status holders across the country',
				url: 'https://www.uu.nl/en/news/coa-uses-algorithm-to-place-status-holders-across-the-countryinstead-of-a-win-win-everyone-loses'
			},
			{
				label: 'Follow the Money: Big data belooft statushouder betere baankans',
				url: 'https://www.ftm.nl/artikelen/big-data-belooft-statushouder-betere-baankanstegenovergesteldeblijkt'
			}
		]
	},
	{
		id: 3,
		correct: 'b',
		image: '/hand.png',
		content: {
			en: {
				title: 'Welfare algorithm to decide who is checked',
				description: [
					p(
						'In the Netherlands, cities are responsible for paying social welfare benefits to the people who need them. To check whether people still have the right to receive their benefits, Rotterdam uses an algorithm to decide who should be selected for an investigation. The idea is that cities cannot check everyone, so the algorithm helps to choose who to investigate.'
					),
					p(
						'The algorithm looks at personal information about each person, such as their neighbourhood, language skills, and personal circumstances such as mental health. Based on this, it gives each person a risk score: a number that shows how likely they are to have made a mistake or committed fraud.'
					)
				],
				reveal: [
					p(
						'Rotterdam stopped using the algorithm in 2021, but similar systems were later found to be in use in other Dutch municipalities.'
					),
					p('<strong>What went wrong?</strong>'),
					p("Journalists requested access to the algorithm's code and discovered serious problems."),
					list([
						'The algorithm gave people higher risk scores based on their gender, neighbourhood and language skills. Young mothers and people who did not speak Dutch got the highest risk scores and were most likely to be selected for investigation.',
						'The algorithm used information about mental health problems, financial problems and diagnoses, which target people in vulnerable situations.',
						"Postcode and neighbourhood were used as criteria. These indirectly reflect someone's background and ethnicity. Using such criteria is considered a form of hidden discrimination and is forbidden by law.",
						'People were not told why they were selected and could not challenge the decision. The algorithm was too complex to explain to citizens.'
					])
				]
			},
			nl: {
				title: 'Bijstandsalgoritme om te beslissen wie gecontroleerd wordt',
				description: [
					p(
						'In Nederland zijn gemeenten verantwoordelijk voor het uitbetalen van bijstandsuitkeringen aan mensen die dat nodig hebben. Om te controleren of mensen nog recht hebben op hun uitkering, gebruikt Rotterdam een algoritme om te beslissen wie geselecteerd wordt voor een onderzoek. Het idee is dat gemeenten niet iedereen kunnen controleren, dus het algoritme helpt om te kiezen wie onderzocht wordt.'
					),
					p(
						'Het algoritme kijkt naar persoonlijke informatie over elke persoon, zoals hun wijk, taalvaardigheid en persoonlijke omstandigheden zoals mentale gezondheid. Op basis hiervan geeft het elke persoon een risicoscore: een getal dat laat zien hoe groot de kans is dat zij een fout hebben gemaakt of fraude hebben gepleegd.'
					)
				],
				reveal: [
					p(
						'Rotterdam stopte in 2021 met het algoritme, maar soortgelijke systemen werden later ook gevonden in gebruik bij andere Nederlandse gemeenten.'
					),
					p('<strong>Wat ging er mis?</strong>'),
					p(
						'Journalisten vroegen toegang tot de code van het algoritme en ontdekten ernstige problemen.'
					),
					list([
						'Het algoritme gaf mensen hogere risicoscores op basis van hun geslacht, wijk en taalvaardigheid. Jonge moeders en mensen die geen Nederlands spraken, kregen de hoogste risicoscores en werden het vaakst geselecteerd voor onderzoek.',
						'Het algoritme gebruikte informatie over psychische problemen, financiële problemen en diagnoses, die mensen in kwetsbare situaties treffen.',
						'Postcode en wijk werden gebruikt als criteria. Deze weerspiegelen indirect iemands achtergrond en etniciteit. Het gebruik van dergelijke criteria wordt beschouwd als een vorm van verborgen discriminatie en is verboden bij wet.',
						'Mensen kregen niet te horen waarom zij waren geselecteerd en konden de beslissing niet aanvechten. Het algoritme was te complex om aan burgers uit te leggen.'
					])
				]
			}
		},
		sources: [
			{
				label: 'Algorithm Audit: Risk profiling for social welfare re-examination',
				url: 'https://algorithmaudit.eu/algoprudence/cases/aa202302_risk-profiling-for-social-welfarereexamination/'
			}
		]
	},
	{
		id: 4,
		correct: 'b',
		image: '/kaartenmap.png',
		content: {
			en: {
				title: 'Student fraud algorithm',
				description: [
					p(
						'DUO is the Dutch government organisation responsible for student finance. Students who do not live with their parents receive a higher grant than students living at home. To check whether students actually live where they say they do, DUO uses an algorithm to decide which students should be selected for an investigation.'
					),
					p(
						"The algorithm looks at personal information such as age, type of education, and the distance between a student's home address and their parents' address. Based on this, it gives each student a risk score indicating how likely they are to be committing fraud."
					)
				],
				reveal: [
					p('DUO stopped using the algorithm in 2023.'),
					p('<strong>What went wrong?</strong>'),
					p("Journalists and researchers investigated DUO's system and found serious problems."),
					list([
						'Students who lived closer to their parents were more likely to be selected for investigation. Because students with a migration background more often live close to their parents, they were targeted the most.',
						'Almost all students who were flagged for investigation had a migration background. This is discrimination.',
						'Students who were accused had inspectors visit their home. If fraud was concluded, they had to repay their entire grant including fines, sometimes thousands of euros.'
					]),
					quote(
						"I felt hopeless. Because you grow up in a system where, as a minority, you keep being told not to be so sensitive and that everyone has equal rights and that things aren't so bad in the Netherlands. And that's true. I'm Dutch and I'm very proud of the Netherlands. But at the same time you experience being systematically treated differently than, well, the blonde kids in your class.",
						"Karima, a student affected by DUO's algorithm"
					)
				]
			},
			nl: {
				title: 'Algoritme voor studiefinancieringsfraude',
				description: [
					p(
						'DUO is de Nederlandse overheidsorganisatie die verantwoordelijk is voor studiefinanciering. Studenten die niet bij hun ouders wonen, ontvangen een hogere toelage dan studenten die thuis wonen. Om te controleren of studenten daadwerkelijk wonen waar zij zeggen te wonen, gebruikt DUO een algoritme om te beslissen welke studenten geselecteerd worden voor een onderzoek.'
					),
					p(
						'Het algoritme kijkt naar persoonlijke informatie zoals leeftijd, type opleiding en de afstand tussen het thuisadres van een student en het adres van hun ouders. Op basis hiervan geeft het elke student een risicoscore die aangeeft hoe groot de kans is dat zij fraude plegen.'
					)
				],
				reveal: [
					p('DUO stopte in 2023 met het algoritme.'),
					p('<strong>Wat ging er mis?</strong>'),
					p('Journalisten en onderzoekers onderzochten het systeem van DUO en ontdekten ernstige problemen.'),
					list([
						'Studenten die dichter bij hun ouders woonden, hadden meer kans om geselecteerd te worden voor onderzoek. Omdat studenten met een migratieachtergrond vaker dicht bij hun ouders wonen, werden zij het meest getroffen.',
						'Bijna alle studenten die werden aangemerkt voor onderzoek hadden een migratieachtergrond. Dit is discriminatie.',
						"Studenten die werden beschuldigd kregen inspecteurs op huisbezoek. Als fraude werd vastgesteld, moesten zij hun volledige toelage terugbetalen inclusief boetes, soms duizenden euro's."
					]),
					quote(
						'Ik voelde me moedeloos. Want je groeit op in een systeem waarin je als minderheid steeds weer te horen krijgt dat je niet zulke lange tenen moet hebben en dat iedereen gewoon gelijke rechten heeft en dat het helemaal niet zo slecht is in Nederland. En dat is ook zo. Ik ben natuurlijk gewoon Nederlander en ik ben heel trots op Nederland. Maar ondertussen ervaar je wel dat je systematisch anders wordt behandeld dan, nou ja, de blonde kinderen in je klas.',
						'Karima, een student die getroffen werd door het algoritme van DUO'
					)
				]
			}
		},
		sources: [
			{
				label: 'Amnesty International: Roekeloze risicoprofilering DUO (PDF)',
				url: 'https://www.amnesty.nl/content/uploads/2024/11/Amnesty-2024-rapport-Roekelozerisicoprofilering-DUO.pdf?x90844'
			},
			{ label: 'Video', url: 'https://youtu.be/AsI6TlJhGuA?si=9WVVGIyAwYS-dEBH' }
		]
	},
	{
		id: 5,
		correct: 'a',
		image: '/trafficalgotransparent.png',
		content: {
			en: {
				title: 'Intelligent traffic lights',
				description: [
					p(
						"iVRI's are intelligent traffic lights that use an algorithm to decide how long each light stays green and who gets priority."
					),
					p(
						"The algorithm receives information from sensors in the road, cameras and navigation apps on people's phones. Based on this, it calculates the best timing for each light."
					),
					p('The algorithm can give priority to certain road users, such as ambulances, buses or cyclists.')
				],
				reveal: [
					p(
						'<em>Did you know that when you use Google Maps or another navigation app near a traffic light, your data is sent to the algorithm?</em>'
					),
					p(
						'This algorithm exists and is in use. There are currently almost 1,500 of these intelligent traffic lights in the Netherlands.'
					)
				]
			},
			nl: {
				title: 'Intelligente verkeerslichten',
				description: [
					p(
						"iVRI's zijn intelligente verkeerslichten die een algoritme gebruiken om te beslissen hoelang elk licht groen blijft en wie voorrang krijgt."
					),
					p(
						"Het algoritme ontvangt informatie van sensoren in de weg, camera's en navigatie-apps op telefoons van mensen. Op basis hiervan berekent het de beste timing voor elk licht."
					),
					p('Het algoritme kan voorrang geven aan bepaalde weggebruikers, zoals ambulances, bussen of fietsers.')
				],
				reveal: [
					p(
						'<em>Wist je dat wanneer je Google Maps of een andere navigatie-app gebruikt bij een verkeerslicht, jouw data naar het algoritme worden gestuurd?</em>'
					),
					p(
						'Dit algoritme bestaat en is in gebruik. Er zijn momenteel bijna 1.500 van deze intelligente verkeerslichten in Nederland.'
					)
				]
			}
		},
		sources: [
			{
				label: 'Algoritmeregister: Intelligente verkeersregelinstallatie (iVRI)',
				url: 'https://algoritmes.overheid.nl/en/algoritme/pv28/34151769/intelligenteverkeersregelinstallatie-ivri'
			}
		]
	},
	{
		id: 6,
		correct: 'c',
		image: '/hand.png',
		content: {
			en: {
				title: 'Algorithm to predict child abuse',
				description: [
					p(
						'KBScan is an algorithm used by Dutch child protective services to predict which children are at risk of abuse or neglect at home. The goal is to help social workers decide which families to investigate first.'
					),
					p(
						"The algorithm looks at information about a family, such as financial problems, contact with the police, housing situation, and the parents' medical history. Based on this, it gives each family a risk score. Families with a high score are more likely to receive a home visit from a social worker."
					),
					p(
						'The idea is that child protective services cannot investigate every family, so the algorithm helps to prioritise who needs help most urgently.'
					)
				],
				reveal: [
					p(
						'This algorithm does not exist in the Netherlands, but similar systems are used in the United States and the United Kingdom. There, they have been criticized for discriminating against low-income families and families from minority backgrounds.'
					)
				]
			},
			nl: {
				title: 'Algoritme om kindermishandeling te voorspellen',
				description: [
					p(
						'KBScan is een algoritme dat wordt gebruikt door de Nederlandse kinderbescherming om te voorspellen welke kinderen thuis risico lopen op mishandeling of verwaarlozing. Het doel is om maatschappelijk werkers te helpen beslissen welke gezinnen zij als eerste onderzoeken.'
					),
					p(
						'Het algoritme kijkt naar informatie over een gezin, zoals financiële problemen, contact met de politie, de woonsituatie en de medische geschiedenis van de ouders. Op basis hiervan geeft het elk gezin een risicoscore. Gezinnen met een hoge score hebben meer kans op een huisbezoek van een maatschappelijk werker.'
					),
					p(
						'Het idee is dat de kinderbescherming niet elk gezin kan onderzoeken, dus het algoritme helpt om te prioriteren wie het meest dringend hulp nodig heeft.'
					)
				],
				reveal: [
					p(
						'Dit algoritme bestaat niet in Nederland, maar soortgelijke systemen worden gebruikt in de Verenigde Staten en het Verenigd Koninkrijk. Daar zijn zij bekritiseerd omdat zij discrimineren tegen gezinnen met een laag inkomen en gezinnen met een minderheidsachtergrond.'
					)
				]
			}
		},
		sources: []
	},
	{
		id: 7,
		correct: 'a',
		image: '/hand.png',
		content: {
			en: {
				title: 'Algorithm to rate job applicants',
				description: [
					p(
						'When you apply for a position at the Dutch government, part of your application is scored by an algorithm. The Game Based Assessment is an online test that measures personal qualities like problem-solving skills through playing games. Based on your results, it gives you a score that influences whether you are invited for an interview.'
					)
				],
				reveal: [
					p(
						'Research shows that most employers in the Netherlands never check whether their hiring algorithm treats all applicants fairly.'
					),
					p(
						'This algorithm exists and is used by the Dutch government. Other companies and organizations also use Game Based Assessments.'
					),
					p('<strong>Is this a problem?</strong>'),
					p(
						'Algorithms used in hiring can unintentionally discriminate. When an algorithm is trained on historical data, it learns from past decisions, including past biases. Amazon built a CV screening algorithm that turned out to systematically reject women. It had been trained on years of hiring data in which most employees were men. Amazon stopped using the algorithm in 2018.'
					)
				]
			},
			nl: {
				title: 'Algoritme om sollicitanten te beoordelen',
				description: [
					p(
						'Wanneer je solliciteert naar een functie bij de Nederlandse overheid, wordt een deel van je sollicitatie beoordeeld door een algoritme. De Game Based Assessment is een onlinetest die persoonlijke eigenschappen meet, zoals probleemoplossend vermogen, door het spelen van spelletjes. Op basis van je resultaten geeft het je een score die beïnvloedt of je uitgenodigd wordt voor een gesprek.'
					)
				],
				reveal: [
					p(
						'Onderzoek laat zien dat de meeste werkgevers in Nederland nooit controleren of hun wervingsalgoritme alle sollicitanten eerlijk behandelt.'
					),
					p(
						'Dit algoritme bestaat en wordt gebruikt door de Nederlandse overheid. Andere bedrijven en organisaties gebruiken Game Based Assessments ook.'
					),
					p('<strong>Is dit een probleem?</strong>'),
					p(
						"Algoritmes die worden gebruikt bij werving kunnen onbedoeld discrimineren. Wanneer een algoritme wordt getraind op historische data, leert het van eerdere beslissingen, inclusief eerdere vooroordelen. Amazon bouwde een algoritme voor het screenen van cv's dat vrouwen systematisch bleek af te wijzen. Het was getraind op jaren aan wervingsdata waarin de meeste medewerkers mannen waren. Amazon stopte in 2018 met het algoritme."
					)
				]
			}
		},
		sources: [
			{
				label: 'College voor de Rechten van de Mens: Werving en selectie',
				url: 'https://www.mensenrechten.nl/themas/digitalisering/werving-en-selectie'
			},
			{ label: 'Solliciteren bij de robot (interactive)', url: 'https://www.solliciterenbijderobot.nl/' },
			{
				label: 'Algoritmeregister: Game Based Assessment (GBA)',
				url: 'https://algoritmes.overheid.nl/en/algoritme/mnre1034/55762537/gamebased-assessmentgba-in-selection-of-governmentwide-traineeships'
			},
			{
				label: 'MIT Technology Review: Amazon ditched AI recruitment software',
				url: 'https://www.technologyreview.com/2018/10/10/139858/amazon-ditched-ai-recruitmentsoftware-because-it-was-biased-against-women'
			}
		]
	}
];
