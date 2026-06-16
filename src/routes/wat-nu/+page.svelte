<script lang="ts">
	import { lang } from '$lib/lang.svelte';

	type Lang = 'en' | 'nl';
	const content: Record<Lang, { title: string; paragraphs: string[] }> = {
		en: {
			title: 'What now?',
			paragraphs: [
				'The burgerberaad has not taken place yet. From September 2026, 175 participants will come together over seven sessions to work towards concrete recommendations about how the Dutch government should use algorithms.',
				"After the final session, their advice will be presented to the cabinet and the Tweede Kamer. The government has committed to responding to it publicly.",
				'The advice and the government\'s response will be published on this page.'
			]
		},
		nl: {
			title: 'Wat nu?',
			paragraphs: [
				'Het burgerberaad heeft nog niet plaatsgevonden. Vanaf september 2026 komen 175 deelnemers zeven keer bij elkaar om te werken aan concrete aanbevelingen over hoe de Nederlandse overheid algoritmes moet gebruiken.',
				'Na de laatste sessie wordt hun advies aangeboden aan het kabinet en de Tweede Kamer. De overheid heeft toegezegd hier publiekelijk op te reageren.',
				'Het advies en de reactie van de overheid worden op deze pagina gepubliceerd.'
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
		<p>{para}</p>
	{/each}
</div>
