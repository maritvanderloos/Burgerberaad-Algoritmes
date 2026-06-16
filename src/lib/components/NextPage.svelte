<script lang="ts">
	import { page } from '$app/stores';
	import { lang } from '$lib/lang.svelte';

	const pages = [
		{
			href: '/over/burgerberaad',
			label: { en: 'About the burgerberaad', nl: 'Over het burgerberaad' }
		},
		{
			href: '/over/algoritmen',
			label: { en: 'What are algorithms?', nl: 'Wat zijn algoritmes?' }
		},
		{
			href: '/over/hoe-werken',
			label: { en: 'How do algorithms work?', nl: 'Hoe werken algoritmes?' }
		},
		{
			href: '/over/overheid-gebruik',
			label: {
				en: 'How does the Dutch government use algorithms?',
				nl: 'Hoe gebruikt de Nederlandse overheid algoritmes?'
			}
		},
		{
			href: '/over/voor-en-nadelen',
			label: {
				en: 'What are the strengths and weaknesses of algorithms?',
				nl: 'Wat zijn de sterke en zwakke punten van algoritmes?'
			}
		},
		{
			href: '/over/jouw-data',
			label: {
				en: 'What data does the government have about me?',
				nl: 'Welke data heeft de overheid over mij?'
			}
		},
		{ href: '/algoritme-kaart', label: { en: 'Algorithm map', nl: 'Algoritmekaart' } },
		{ href: '/vragen', label: { en: 'Questions', nl: 'Vragen' } },
		{ href: '/bijeenkomsten', label: { en: 'Sessions', nl: 'Bijeenkomsten' } },
		{ href: '/wat-nu', label: { en: 'What now?', nl: 'Wat nu?' } }
	];

	const next = $derived.by(() => {
		const i = pages.findIndex((p) => p.href === $page.url.pathname);
		return i >= 0 && i < pages.length - 1 ? pages[i + 1] : null;
	});

	const label = $derived(
		lang.current === 'nl' ? 'Volgende pagina' : 'Next page'
	);
</script>

{#if next}
	<div class="mt-16 mb-8 flex justify-end">
		<a
			href={next.href}
			class="group flex items-center gap-3 font-sans no-underline"
			style="color: #d03f7f"
		>
			<span class="flex flex-col items-end">
				<span class="text-xs font-sans uppercase tracking-widest opacity-70">{label}</span>
				<span class="text-base font-sans font-medium">{next.label[lang.current]}</span>
			</span>
			<span
				class="flex h-10 w-10 items-center justify-center rounded-full border-2 transition-transform duration-200 group-hover:translate-x-1"
				style="border-color: #d03f7f"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
			</span>
		</a>
	</div>
{/if}
