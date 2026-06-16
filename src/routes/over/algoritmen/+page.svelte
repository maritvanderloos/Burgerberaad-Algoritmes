<script lang="ts">
	import { lang } from '$lib/lang.svelte';

	type Lang = 'en' | 'nl';
	const content: Record<Lang, { title: string; paragraphs: string[] }> = {
		en: {
			title: 'What are algorithms?',
			paragraphs: [
				'An algorithm is a set of rules and instructions that a computer automatically follows when making calculations to solve a problem or answer a question. (Source: Algemene Rekenkamer, via <a href="https://algoritmes.overheid.nl/en" target="_blank" rel="noopener noreferrer">algoritmes.overheid.nl</a>)',
				'You come across algorithms every day: when Netflix recommends a movie, when Google Maps picks your route or when Facebook shows you posts. Most of the time you do not notice them. But they are there, and make decisions that affect your life.'
			]
		},
		nl: {
			title: 'Wat zijn algoritmes?',
			paragraphs: [
				'Een algoritme is een set van regels en instructies die een computer automatisch volgt bij het uitvoeren van berekeningen om een probleem op te lossen of een vraag te beantwoorden. (Bron: Algemene Rekenkamer, via <a href="https://algoritmes.overheid.nl/nl" target="_blank" rel="noopener noreferrer">algoritmes.overheid.nl</a>)',
				'Je komt algoritmes elke dag tegen: als Netflix een film aanbeveelt, als Google Maps je route kiest, of als Facebook je berichten laat zien. Meestal merk je ze niet. Maar ze zijn er, en nemen beslissingen die invloed hebben op jouw leven.'
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
