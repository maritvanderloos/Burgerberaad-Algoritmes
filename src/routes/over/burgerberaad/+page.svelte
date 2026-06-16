<script lang="ts">
	import { lang } from '$lib/lang.svelte';

	type Lang = 'en' | 'nl';
	const content: Record<Lang, { title: string; paragraphs: string[] }> = {
		en: {
			title: 'About the burgerberaad',
			paragraphs: [
				'Welcome to the website of the Nationaal Burgerberaad Algoritmes! The Dutch government uses algorithms every day to make decisions about citizens: for taxes, housing and more. But citizens themselves rarely get a say in what these algorithms do, or what rules should apply to them.',
				'This is why the government organized this burgerberaad. From September 2026 to May 2027, 175 randomly selected citizens from across the country will come together seven times. Young and old, from cities and villages, with different backgrounds and different opinions about technology and government.',
				'Together they will work on the question: <em style="color: #d03f7f">How should the Dutch government use algorithms that make decisions about citizens?</em>',
				'During the sessions, participants talk with each other and with experts, and work step by step towards concrete recommendations. No special knowledge or skills are required: what is important are their perspectives, values and experiences. Their advice will be presented to the cabinet and the Tweede Kamer. The government has committed to responding to it publicly.',
				'On this website you can find background information about algorithms, materials to help you prepare, the opportunity to ask questions to experts, and the outcomes of the burgerberaad.'
			]
		},
		nl: {
			title: 'Over het burgerberaad',
			paragraphs: [
				'Welkom op de website van het Nationaal Burgerberaad Algoritmes! De Nederlandse overheid gebruikt elke dag algoritmes om beslissingen te nemen over burgers: voor belastingen, huisvesting en meer. Maar burgers zelf hebben zelden iets te zeggen over wat deze algoritmes doen, of welke regels daarvoor moeten gelden.',
				'Daarom heeft de overheid dit burgerberaad opgezet. Van september 2026 tot mei 2027 komen 175 willekeurig geselecteerde burgers uit het hele land zeven keer bij elkaar. Jong en oud, uit steden en dorpen, met verschillende achtergronden en verschillende meningen over technologie en de overheid.',
				'Samen werken zij aan de vraag: <em style="color: #d03f7f">Hoe moet de Nederlandse overheid algoritmes gebruiken die beslissingen nemen over burgers?</em>',
				'Tijdens de sessies praten deelnemers met elkaar en met deskundigen, en werken zij stap voor stap naar concrete aanbevelingen. Er is geen speciale kennis of vaardigheid nodig: wat belangrijk is, zijn hun perspectieven, waarden en ervaringen. Het advies van het burgerberaad wordt aangeboden aan het kabinet en de Tweede Kamer. De overheid heeft toegezegd hier publiekelijk op te reageren.',
				'Op deze website vind je achtergrondinformatie over algoritmes, materialen om je voor te bereiden, de mogelijkheid om vragen te stellen aan deskundigen, en de uitkomsten van het burgerberaad.'
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
	{#each c.paragraphs as para}
		<p>{@html para}</p>
	{/each}
</div>
