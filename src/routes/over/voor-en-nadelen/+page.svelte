<script lang="ts">
	import { lang } from '$lib/lang.svelte';

	type Lang = 'en' | 'nl';
	const content: Record<Lang, { title: string; paragraphs: string[] }> = {
		en: {
			title: 'What are the strengths and weaknesses of algorithms?',
			paragraphs: [
				'Algorithms can do things humans cannot, or at least not at the same <span class="font-sans" style="color: #d03f7f">speed and scale</span>. They can process millions of pieces of information in seconds, recognise small patterns in large amounts of data, and apply the same rules to everyone.',
				'But algorithms also have serious weaknesses. The biggest one is <span class="font-sans" style="color: #d03f7f">discrimination</span>. An algorithm does not know the difference between a pattern that reflects reality and one that comes from unfair treatment in the past. If past data shows that certain groups were treated differently, the algorithm will likely repeat that. Because the decision appears to come from a machine, it can feel objective even when it is not.',
				'This brings up something important: <span class="font-sans" style="color: #d03f7f">algorithms are not neutral</span>. They are built by humans, and reflect the choices and assumptions of the people who built them. The data they learn from contains inequalities that already exist in society. This also means that humans are responsible for questioning what algorithms do.',
				'But in practice, this often does not happen. When a computer produces a result, people tend to trust it without asking questions. This is called <span class="font-sans" style="color: #d03f7f">automation bias</span>. In the toeslagenschandaal for example, employees did not question why the algorithm was flagging almost only families with a migration background.',
				'Other weaknesses include the <span class="font-sans" style="color: #d03f7f">lack of transparency</span> of algorithms. This means that it is often unclear how a decision was made, which makes it difficult to challenge or correct. For citizens it can also be difficult to know whether the government is using algorithms to make decisions about them.',
				
			]
		},
		nl: {
			title: 'Wat zijn de sterke en zwakke punten van algoritmes?',
			paragraphs: [
				'Algoritmes kunnen dingen doen die mensen niet kunnen, of in ieder geval niet op dezelfde <span class="font-sans" style="color: #d03f7f">snelheid of schaal</span>. Ze kunnen miljoenen stukjes informatie in seconden verwerken, kleine patronen herkennen in grote hoeveelheden data, en dezelfde regels op iedereen toepassen.',
				'Maar algoritmes hebben ook ernstige zwakke punten. Het grootste zwakke punt is <span class="font-sans" style="color: #d03f7f">discriminatie</span>. Een algoritme weet niet wat het verschil is tussen een patroon dat de werkelijkheid weerspiegelt en een patroon dat voortkomt uit oneerlijke behandeling in het verleden. Als oudere data laten zien dat bepaalde groepen anders werden behandeld, zal het algoritme dat waarschijnlijk herhalen. Omdat de beslissing lijkt te komen van een machine, kan het objectief aanvoelen, ook als dat niet zo is.',
				'Dit brengt iets belangrijks naar voren: <span class="font-sans" style="color: #d03f7f">algoritmes zijn niet neutraal</span>. Ze worden gemaakt door mensen en weerspiegelen de keuzes en aannames van de mensen die ze hebben gebouwd. De data waarvan ze leren, bevatten ongelijkheden die al bestaan in de samenleving. Dit betekent ook dat mensen verantwoordelijk zijn voor het in twijfel trekken van wat algoritmes doen.',
				'Maar in de praktijk gebeurt dit vaak niet. Wanneer een computer een resultaat geeft, hebben mensen de neiging het te vertrouwen zonder vragen te stellen. Dit noemen we <span class="font-sans" style="color: #d03f7f">automatiseringsbias</span>. Bij het <span class="font-sans" style="color: #d03f7f">toeslagenschandaal</span> bijvoorbeeld stelden medewerkers niet de vraag waarom het algoritme bijna alleen gezinnen met een migratieachtergrond markeerde.',
				'Andere zwakke punten zijn het <span class="font-sans" style="color: #d03f7f">gebrek aan transparantie</span> van algoritmes. Dit betekent dat het vaak onduidelijk is hoe een beslissing tot stand is gekomen, waardoor het moeilijk is om die aan te vechten of te corrigeren. Voor burgers kan het ook moeilijk zijn om te weten of de overheid algoritmes gebruikt om beslissingen over hen te nemen.',
				
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
