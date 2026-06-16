<script lang="ts">
	import { lang } from '$lib/lang.svelte';

	type Lang = 'en' | 'nl';
	const content: Record<Lang, { title: string; paragraphs: string[] }> = {
		en: {
			title: 'How do algorithms work?',
			paragraphs: [
				'Most algorithms learn from data, which are facts and information recorded in the past. The algorithms of Facebook and Netflix might learn from posts you liked or movies you watched before. The algorithm then predicts what new posts or movies you would like.',
				'This is where an important rule applies: <em style="color: #d03f7f">garbage in, garbage out</em>. If the data an algorithm learned from contains mistakes, gaps, or unfair patterns, the algorithm will repeat and amplify those flaws. This often happens invisibly, and at a large scale.',
				'In 2016, researchers found that Facebook\'s algorithm showed women almost only advertisements for lower-paid jobs, while men were shown ads for better-paid ones. This was because the algorithm learned from data which contained the same inequalities that already exist in the job market.',
				'Not all algorithms work the same way. Some follow a set of fixed rules: if this condition is met, do that. Others are self-learning, which means they improve over time by learning from new data. Self-learning algorithms can be powerful, but also hard to understand or explain, even for the people who built them.'
			]
		},
		nl: {
			title: 'Hoe werken algoritmes?',
			paragraphs: [
				'De meeste algoritmes leren van data: dit zijn gegevens en informatie die in het verleden zijn vastgelegd. De algoritmes van Facebook en Netflix leren misschien van berichten die je leuk vond of films die je eerder bekeek. Het algoritme voorspelt dan welke nieuwe berichten of films je leuk zou vinden.',
				'Hier geldt een belangrijke regel: <em style="color: #d03f7f">garbage in, garbage out</em> (rotzooi erin, rotzooi eruit). Als een algoritme gegevens gebruikt waar al fouten, gebreken of oneerlijke patronen in zaten, zal het algoritme die fouten herhalen en versterken. Dit gebeurt vaak onzichtbaar en op grote schaal.',
				'In 2016 ontdekten onderzoekers dat het algoritme van Facebook aan vrouwen bijna alleen advertenties voor lager betaalde banen liet zien, terwijl mannen advertenties voor beter betaalde banen te zien kregen. Dit kwam doordat het algoritme had geleerd van gegevens waar dezelfde ongelijkheden in stonden die je al op de arbeidsmarkt zag.',
				'Niet alle algoritmes werken op dezelfde manier. Sommige volgen een vaste set regels: als aan deze voorwaarde is voldaan, doe dan dat. Andere zijn zelflerend, wat betekent dat ze in de loop van de tijd verbeteren door te leren van nieuwe data. Zelflerende algoritmes kunnen krachtig zijn, maar ook moeilijk te begrijpen of uit te leggen, zelfs voor de mensen die ze hebben gemaakt.'
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
