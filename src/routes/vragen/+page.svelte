<script lang="ts">
	import { lang } from '$lib/lang.svelte';
	import { ChevronRight } from 'lucide-svelte';

	type Lang = 'en' | 'nl';
	type QA = { question: string; answer: string[] };
	type Content = {
		title: string;
		intro: string[];
		previousQuestions: string;
		qas: QA[];
	};

	const content: Record<Lang, Content> = {
		en: {
			title: 'Questions',
			intro: [
				'Do you have any questions about algorithms, this burgerberaad, or how the government uses data? Please post them here! Experts will try to answer your questions. Some answers might be published on this page.'
			],
			previousQuestions: 'Previous questions:',
			qas: [
				{
					question: 'Is the government required to post the algorithms it uses in the Algoritmeregister?',
					answer: [
						'Currently, government agencies are encouraged, but not obliged to post their algorithms in the Algoritmeregister. The goal is that in the future, agencies will be required to post their algorithms in the register.'
					]
				},
				{
					question: 'Can I find out if an algorithm has been used to make a decision about me?',
					answer: [
						'In general, it is hard for people to find if algorithms have been used to make decisions about them.',
						'Under European privacy law (the AVG) you have the right to know how a decision about you was made by an algorithm. You can contact the government agency that made the decision by asking them directly if an algorithm has been used in a decision.',
						'You can also submit an AVG inzageverzoek (right of access request) to ask what personal data an organisation holds about you and how it was used.',
						'The Wet open overheid (Woo) requires the government to release public information. For individuals, a Woo request is usually not the right route to know whether an algorithm was used, but journalists and researchers have used it to expose harmful algorithms.'
					]
				}
			]
		},
		nl: {
			title: 'Vragen',
			intro: [
				'Heb jij vragen over algoritmes, dit burgerberaad, of hoe de overheid omgaat met jouw data? Stel ze hier! Experts proberen jouw vragen te beantwoorden. Sommige antwoorden worden gepubliceerd op deze pagina.'
			],
			previousQuestions: 'Eerder gestelde vragen:',
			qas: [
				{
					question: 'Is de overheid verplicht om de algoritmes die zij gebruikt te plaatsen in het Algoritmeregister?',
					answer: [
						'Op dit moment worden overheidsorganisaties aangemoedigd om hun algoritmes te plaatsen in het Algoritmeregister, maar het is nog niet verplicht. Het doel is dat organisaties in de toekomst verplicht worden om hun algoritmes in het register te plaatsen.'
					]
				},
				{
					question: 'Kan ik erachter komen of er een algoritme is gebruikt bij een beslissing over mij?',
					answer: [
						'Het is over het algemeen moeilijk voor mensen om erachter te komen of er algoritmes zijn gebruikt bij beslissingen over hen.',
						'Onder de Europese privacywet (de AVG) heb je het recht om te weten hoe een beslissing over jou is genomen door een algoritme. Je kunt direct contact opnemen met de overheidsinstantie die de beslissing heeft genomen en vragen of er een algoritme is gebruikt.',
						'Je kunt ook een AVG inzageverzoek indienen om te vragen welke persoonsgegevens een organisatie over jou heeft en hoe deze zijn gebruikt.',
						'De Wet open overheid (Woo) verplicht de overheid om publieke informatie vrij te geven. Voor individuele burgers is een Woo-verzoek meestal niet de juiste weg om te weten te komen of er een algoritme is gebruikt, maar journalisten en onderzoekers hebben het gebruikt om schadelijke algoritmes aan het licht te brengen.'
					]
				}
			]
		}
	};

	let c = $derived(content[lang.current]);

	let openQuestions = $state<Record<number, boolean>>({});

	function toggle(i: number) {
		openQuestions[i] = !openQuestions[i];
	}
</script>

<svelte:head>
	<title>{c.title} — Algoritmen & de Overheid</title>
</svelte:head>

<div class="prose mt-4">
	<h1>{c.title}</h1>
	{#each c.intro as para}
		<p>{para}</p>
	{/each}

	<p class="not-italic">{c.previousQuestions}</p>

	{#each c.qas as qa, i}
		<button
			class="flex w-full items-center gap-2 text-left"
			onclick={() => toggle(i)}
			aria-expanded={!!openQuestions[i]}
		>
			<ChevronRight
				size={18}
				class="shrink-0 transition-transform duration-200 {openQuestions[i] ? 'rotate-90' : ''}"
				style="color: #d03f7f"
			/>
			<span class="font-sans italic" style="color: #d03f7f">{qa.question}</span>
		</button>
		{#if openQuestions[i]}
			{#each qa.answer as para}
				<p>{para}</p>
			{/each}
		{/if}
	{/each}
</div>
