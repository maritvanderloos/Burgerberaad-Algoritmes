<script lang="ts">
	import { lang } from '$lib/lang.svelte';

	type Lang = 'en' | 'nl';
	const content: Record<Lang, { title: string; paragraphs: string[] }> = {
		en: {
			title: 'How does the Dutch government use algorithms?',
			paragraphs: [
				'The government uses algorithms to process taxes, decide who gets social housing, and much more. Often this works well, by saving time and helping employees process large amounts of information quickly.',
				'But things have also gone very wrong. The most well-known example is the <em style="color: #d03f7f">toeslagenschandaal</em>, or the childcare benefits scandal. Between 2005 and 2019, around 26,000 parents were wrongly accused of fraud by the Dutch Tax Authority. A self-learning algorithm flagged many of them as high-risk, mostly targeting families with a migration background. Parents were forced to repay thousands of euros they did not owe. Many families fell into debt, lost their homes and in some cases their children were taken into foster care. The scandal eventually caused the Dutch cabinet to collapse in 2021.',
				'In response, the government launched the Algoritmeregister, which is a public register where government agencies publish information about the algorithms they use. The goal of the register is that citizens and journalists can understand and question how these algorithms work.'
			]
		},
		nl: {
			title: 'Hoe gebruikt de Nederlandse overheid algoritmes?',
			paragraphs: [
				'De overheid gebruikt algoritmes om belastingen te verwerken, te beslissen wie een sociale huurwoning krijgt, en nog veel meer. Vaak werkt dit goed, omdat het tijd bespaart en medewerkers helpt om grote hoeveelheden informatie snel te verwerken.',
				'Maar het is ook wel ernstig misgegaan. Het bekendste voorbeeld is het <em style="color: #d03f7f">toeslagenschandaal</em>. Tussen 2005 en 2019 werden ongeveer 26.000 ouders door de Belastingdienst ten onrechte beschuldigd van fraude met kinderopvangtoeslagen. Een zelflerende algoritme markeerde veel van deze ouders als hoog risico, en richtte zich daarbij vooral op gezinnen met een migratieachtergrond. Ouders werden gedwongen duizenden euro\'s terug te betalen die zij niet verschuldigd waren. Veel gezinnen raakten in de schulden en verloren hun huis. In sommige gevallen werden hun kinderen uit huis geplaatst. Het schandaal leidde er uiteindelijk toe dat het Nederlandse kabinet in 2021 viel.',
				'Als reactie hierop lanceerde de overheid het Algoritmeregister. Dit is een openbaar register waar overheidsinstanties informatie publiceren over de algoritmes die zij gebruiken. Het doel van het register is dat burgers en journalisten kunnen begrijpen en bevragen hoe deze algoritmes werken.'
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
