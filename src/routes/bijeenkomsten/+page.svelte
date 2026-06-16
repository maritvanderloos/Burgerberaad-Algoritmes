<script lang="ts">
	import { lang } from '$lib/lang.svelte';

	type Lang = 'en' | 'nl';
	type Session = { heading: string; paragraphs: string[] };
	type Content = { title: string; intro: string[]; sessions: Session[] };

	const content: Record<Lang, Content> = {
		en: {
			title: 'Sessions',
			intro: [
				'On this page you can find information about the 7 sessions of the Nationaal Burgerberaad Algoritmes. After each session, you can find a summary here. In preparation for the physical sessions, participants have access to this website to gather information and ask questions.'
			],
			sessions: [
				{
					heading: 'Session 1: <span style="color: #d03f7f">12 and 13 september</span>',
					paragraphs: [
						'In the first session, the participants meet each other for the first time. They learn about the burgerberaad, government algorithms and algorithm legislation.',
						'During this session, participants work with a physical tool designed for this burgerberaad. They split into groups of two and sit in front of a wooden board with illustrated cards. Together, they place which values they find important when looking at different examples of algorithms. A large screen shows the value positions of all groups together, which they can discuss further. In a second round, the participants build their own algorithm, by deciding what data should be used in a specific use case, or whether an algorithm should be used at all.'
					]
				}
			]
		},
		nl: {
			title: 'Bijeenkomsten',
			intro: [
				'Op deze pagina vind je informatie over de 7 bijeenkomsten van het Nationaal Burgerberaad Algoritmes. Na elke bijeenkomst vind je hier een samenvatting. Ter voorbereiding op de fysieke bijeenkomsten hebben deelnemers toegang tot deze website om informatie te verzamelen en vragen te stellen.'
			],
			sessions: [
				{
					heading: 'Bijeenkomst 1: <span style="color: #d03f7f">12 en 13 september</span>',
					paragraphs: [
						'In de eerste bijeenkomst ontmoeten de deelnemers elkaar voor het eerst. Ze leren over het burgerberaad, overheidsalgoritmes en algoritmewetgeving.',
						'Tijdens deze bijeenkomst werken de deelnemers met een fysiek spel dat voor dit burgerberaad is ontworpen. Ze verdelen zich in groepjes van twee en zitten voor een houten bord met geïllustreerde kaarten. Samen plaatsen ze welke waarden zij belangrijk vinden bij verschillende voorbeelden van algoritmes. Een groot scherm toont de posities van de waarden van alle groepjes samen, waarover ze verder kunnen praten. In een tweede ronde bouwen de deelnemers hun eigen algoritme door te beslissen welke gegevens gebruikt zouden moeten worden in een specifieke situatie, of dat er überhaupt een algoritme gebruikt zou moeten worden.'
					]
				}
			]
		}
	};

	let c = $derived(content[lang.current]);
</script>

<svelte:head>
	<title>{c.title} — Algoritmen & de Overheid</title>
</svelte:head>

<div class="prose mt-4">
	<h1>{c.title}</h1>
	{#each c.intro as para}
		<p>{para}</p>
	{/each}

	{#each c.sessions as session}
		<h2>{@html session.heading}</h2>
		{#each session.paragraphs as para}
			<p>{para}</p>
		{/each}
	{/each}
</div>
