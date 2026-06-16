<script lang="ts">
	import { lang } from '$lib/lang.svelte';
	import { algorithms, type Answer } from '$lib/algorithms';

	type Lang = 'en' | 'nl';
	type Content = { title: string; paragraphs: string[]; options: string[] };

	const content: Record<Lang, Content> = {
		en: {
			title: 'Algorithm map',
			paragraphs: [
				'This map shows different situations in which the Dutch government uses algorithms. You can click on the drawings to read more about the algorithm.',
				'There, you can guess: is this algorithm currently used, used in the past or does it not exist?'
			],
			options: [
				'a – The algorithm is currently in use',
				'b – The algorithm was used in the past',
				'c – The algorithm does not exist'
			]
		},
		nl: {
			title: 'Algoritmekaart',
			paragraphs: [
				'Deze kaart laat verschillende situaties zien waarin de Nederlandse overheid algoritmes gebruikt. Je kunt op de tekeningen klikken om meer te lezen over het algoritme.',
				'Daar kun je raden: wordt dit algoritme nu gebruikt, werd het in het verleden gebruikt, of bestaat het niet?'
			],
			options: [
				'a – Het algoritme wordt nu gebruikt',
				'b – Het algoritme werd in het verleden gebruikt',
				'c – Het algoritme bestaat niet'
			]
		}
	};

	const ui: Record<
		Lang,
		{ guess: string; correct: string; incorrect: string; sources: string; close: string }
	> = {
		en: {
			guess: 'What do you think?',
			correct: 'Correct!',
			incorrect: 'Not quite.',
			sources: 'Sources',
			close: 'Close'
		},
		nl: {
			guess: 'Wat denk jij?',
			correct: 'Klopt!',
			incorrect: 'Niet helemaal.',
			sources: 'Bronnen',
			close: 'Sluiten'
		}
	};

	const answerLabels: Record<Lang, Record<Answer, string>> = {
		en: {
			a: 'a – Currently in use',
			b: 'b – Used in the past',
			c: 'c – Does not exist'
		},
		nl: {
			a: 'a – Wordt nu gebruikt',
			b: 'b – Werd in het verleden gebruikt',
			c: 'c – Bestaat niet'
		}
	};

	let c = $derived(content[lang.current]);
	let t = $derived(ui[lang.current]);
	let labels = $derived(answerLabels[lang.current]);

	let openId = $state<number | null>(null);
	let answers = $state<Record<number, Answer>>({});

	let selected = $derived(algorithms.find((a) => a.id === openId) ?? null);
	let selectedContent = $derived(selected ? selected.content[lang.current] : null);
	let chosenAnswer = $derived(openId !== null ? (answers[openId] ?? null) : null);

	function open(id: number) {
		openId = id;
	}

	function close() {
		openId = null;
	}

	function choose(id: number, answer: Answer) {
		answers[id] = answer;
	}

	// The traffic light algorithm is shown as a hero next to the title/intro
	// instead of in the grid below.
	const heroAlgo = algorithms.find((a) => a.id === 5)!;

	// Grid order, with the student fraud algorithm (4) swapped up into the
	// prisoner risk assessment algorithm's (1) old slot.
	const gridOrder = [4, 2, 3, 1, 6, 7];
	const gridAlgorithms = gridOrder.map((id) => algorithms.find((a) => a.id === id)!);

	// Two rows of 3 (md and up): row 1 has the kaartenmap hero plus two normal
	// items, row 2 has the prisoner risk assessment algorithm together with
	// the other two normal items, all on the same line. The kaartenmap is
	// nudged up by 1/3 of the hand.png size.
	const positions = [
		'md:col-start-1 md:row-start-1 -translate-y-[6.67rem] sm:-translate-y-[8rem] md:-translate-y-[9.33rem]',
		'md:col-start-3 md:row-start-1',
		'md:col-start-5 md:row-start-1',
		'md:col-start-1 md:row-start-2',
		'md:col-start-3 md:row-start-2',
		'md:col-start-5 md:row-start-2'
	];

	const heroSize = 'w-48 sm:w-72 md:w-[37rem]';
	const normalSize = 'w-80 sm:w-96 md:w-[28rem]';

	// The kaartenmap illustration (student fraud, id 4) always renders as a
	// hero, regardless of which grid slot it occupies.
	const sizeForId: Record<number, string> = { 4: heroSize };
</script>

<svelte:head>
	<title>{c.title} — Algoritmen & de Overheid</title>
</svelte:head>

<div class="mt-4 flex flex-col items-start gap-8 md:flex-row md:justify-between">
	<div class="prose">
		<h1>{c.title}</h1>
		{#each c.paragraphs as para}
			<p>{para}</p>
		{/each}
		<ul>
			{#each c.options as option}
				<li>{option}</li>
			{/each}
		</ul>
	</div>

	<button
		class="group flex shrink-0 flex-col items-center gap-2 text-center"
		onclick={() => open(heroAlgo.id)}
	>
		<span class="block {heroSize} transition duration-300 group-hover:scale-110">
			<img
				src={heroAlgo.image}
				alt={heroAlgo.content[lang.current].title}
				class="h-auto w-full"
			/>
		</span>
		<span class="max-w-[11rem] text-sm text-gray-800 group-hover:text-blue-600">
			{heroAlgo.content[lang.current].title}
		</span>
	</button>
</div>

<div
	class="mt-8 grid grid-cols-2 place-items-center gap-x-8 gap-y-14 md:grid-cols-6 md:gap-x-6 md:gap-y-20"
>
	{#each gridAlgorithms as algo, i}
		<button
			class="group flex flex-col items-center gap-2 text-center md:col-span-2 md:justify-self-center {positions[
				i
			]}"
			onclick={() => open(algo.id)}
		>
			<span
				class="block {sizeForId[algo.id] ?? normalSize} transition duration-300 group-hover:scale-110"
			>
				<img src={algo.image} alt={algo.content[lang.current].title} class="h-auto w-full" />
			</span>
			<span class="max-w-[11rem] text-sm text-gray-800 group-hover:text-blue-600">
				{algo.content[lang.current].title}
			</span>
		</button>
	{/each}
</div>

{#if selected && selectedContent}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
		onclick={close}
		role="presentation"
	>
		<div
			class="prose prose-lg max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-8"
			onclick={(e) => e.stopPropagation()}
			role="dialog"
			aria-modal="true"
			aria-label={selectedContent.title}
			tabindex="-1"
		>
			<h2>{selectedContent.title}</h2>

			{#each selectedContent.description as block}
				{#if block.kind === 'p'}
					<p>{@html block.text}</p>
				{:else if block.kind === 'list'}
					<ul>
						{#each block.items as item}
							<li>{@html item}</li>
						{/each}
					</ul>
				{:else if block.kind === 'quote'}
					<blockquote>
						<p style="color: #d03f7f">{@html block.text}</p>
						<footer class="text-sm not-italic">— {block.author}</footer>
					</blockquote>
				{/if}
			{/each}

			<p class="font-semibold not-italic">{t.guess}</p>
			<div class="flex flex-col gap-2 not-italic">
				{#each ['a', 'b', 'c'] as answer}
					<button
						class="rounded border px-3 py-2 text-left text-sm hover:border-blue-600 hover:text-blue-600 {chosenAnswer ===
						answer
							? 'border-blue-600 text-blue-600'
							: 'border-gray-300'}"
						onclick={() => choose(selected!.id, answer as Answer)}
					>
						{labels[answer as Answer]}
					</button>
				{/each}
			</div>

			{#if chosenAnswer}
				<p class="font-semibold not-italic">
					{chosenAnswer === selected.correct ? t.correct : t.incorrect}
				</p>
				{#each selectedContent.reveal as block}
					{#if block.kind === 'p'}
						<p>{@html block.text}</p>
					{:else if block.kind === 'list'}
						<ul>
							{#each block.items as item}
								<li>{@html item}</li>
							{/each}
						</ul>
					{:else if block.kind === 'quote'}
						<blockquote>
							<p>{@html block.text}</p>
							<p class="text-sm not-italic">— {block.author}</p>
						</blockquote>
					{/if}
				{/each}

				{#if selected.sources.length > 0}
					<p class="font-semibold not-italic">{t.sources}</p>
					<ul>
						{#each selected.sources as source}
							<li>
								<a href={source.url} target="_blank" rel="noopener noreferrer" style="color: #d03f7f"
									>{source.label}</a
								>
							</li>
						{/each}
					</ul>
				{/if}
			{/if}

			<button class="mt-2 text-sm text-gray-500 not-italic hover:text-blue-600" onclick={close}>
				{t.close}
			</button>
		</div>
	</div>
{/if}
