<script lang="ts">
	import { lang } from '$lib/lang.svelte';

	type Lang = 'en' | 'nl';
	const content: Record<Lang, { title: string; paragraphs: string[] }> = {
		en: {
			title: 'What data does the government have about me?',
			paragraphs: [
				'Government agencies collect a lot of data about citizens, often without you actively doing anything. For example, your name, gender, address, nationality and family situation are stored in the Basisregistratie Personen (BRP). This is the national personal records database managed by your municipality. Other organizations can access parts of this data to carry out their legal tasks.',
				'The government gathers more data when you for example apply for benefits, pay taxes or register a vehicle on your name.',
				'You have the right to know what data the government holds about you. You can check <a href="https://mijn.overheid.nl" target="_blank" rel="noopener noreferrer">MijnOverheid</a> to see which organisations receive your personal data from the BRP.'
			]
		},
		nl: {
			title: 'Welke data heeft de overheid over mij?',
			paragraphs: [
				'Overheidsinstanties verzamelen veel data over burgers, vaak zonder dat je daar actief iets voor doet. Zo staan je naam, geslacht, adres, nationaliteit en gezinssituatie in de Basisregistratie Personen (BRP). De gemeenten beheren deze nationale persoonsregistratie. Andere organisaties kunnen delen van deze data inzien om hun wettelijke taken uit te voeren.',
				'De overheid verzamelt nog meer data over je als je bijvoorbeeld belasting betaalt, een uitkering aanvraagt of een auto op je naam zet.',
				'Je hebt het recht om te weten welke data de overheid over jou heeft. Op <a href="https://mijn.overheid.nl" target="_blank" rel="noopener noreferrer">MijnOverheid</a> kan je zien welke organisaties jouw persoonsgegevens uit de BRP ontvangen.'
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
